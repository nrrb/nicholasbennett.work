from fabric import Connection, task
import os

# Domains and directory paths
STATIC_DOMAIN = "nicholasbennett.work"
LLMSHARE_BACKEND_DOMAIN = "llmshare.nicholasbennett.work"

STATIC_WEB_ROOT = f"/var/www/{STATIC_DOMAIN}"
LLMSHARE_BACKEND_WEB_ROOT = "/var/www/llmshare"

# Nginx configuration file locations on the server
STATIC_NGINX_CONF = f"/etc/nginx/sites-available/{STATIC_DOMAIN}"
LLMSHARE_BACKEND_NGINX_CONF = f"/etc/nginx/sites-available/{LLMSHARE_BACKEND_DOMAIN}"
NGINX_ENABLED_DIR = "/etc/nginx/sites-enabled"

USER = "ubuntu"
CERTBOT_EMAIL = "nicholasbennett.work@gmail.com"  # Updated email for certbot

@task
def setup(c, host_ip, key_filename):
    """
    Deploys the static site for nicholasbennett.work and the LLMSHARE_BACKEND app for 
    llmshare.nicholasbennett.work.
    
    The static site is uploaded to /var/www/nicholasbennett.work, and the LLMSHARE_BACKEND 
    app is deployed to /var/www/llmshare.
    """
    conn = Connection(
        host=host_ip,
        user=USER,
        connect_kwargs={"key_filename": key_filename},
    )

    # 1. Update the server and install required packages
    conn.sudo("apt update && apt install -y nginx certbot python3-certbot-nginx zsh byobu curl git")
    
    # (Optional) Enable Byobu and install Oh My Zsh for a nicer shell experience
    conn.run("byobu-enable")
    conn.run('sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"', pty=True)
    conn.sudo(f"chsh -s $(which zsh) {USER}")

    ################################################################################
    # Deploy Static Site for nicholasbennett.work
    ################################################################################
    print("Deploying static site for", STATIC_DOMAIN)
    conn.sudo(f"mkdir -p {STATIC_WEB_ROOT}/assets/images")
    conn.sudo(f"mkdir -p {STATIC_WEB_ROOT}/assets/favicons")
    conn.sudo(f"chown -R {USER}:{USER} {STATIC_WEB_ROOT}")
    
    # Upload static assets for the landing page; adjust file paths as needed.
    conn.put("templates/inde.html", f"{STATIC_WEB_ROOT}/index.html")
    conn.put("templates/pro-portrait.jpg", f"{STATIC_WEB_ROOT}/assets/images/pro-portrait.jpg")
    conn.put("templates/favicons/", f"{STATIC_WEB_ROOT}/assets/favicons", recursive=True)
    
    # Upload the nginx configuration for the static site.
    # Assume you have a file templates/nginx_static.conf for the static site.
    conn.put("templates/nginx.conf", STATIC_NGINX_CONF, use_sudo=True)
    conn.sudo(f"ln -sf {STATIC_NGINX_CONF} {NGINX_ENABLED_DIR}/{STATIC_DOMAIN}")

    ################################################################################
    # Deploy LLMSHARE_BACKEND App for llmshare.nicholasbennett.work
    ################################################################################
    print("Deploying LLMSHARE_BACKEND app for", LLMSHARE_BACKEND_DOMAIN)
    # Create the LLMSHARE_BACKEND deployment directory; note it is set to /var/www/llmshare.
    conn.sudo(f"mkdir -p {LLMSHARE_BACKEND_WEB_ROOT}")
    conn.sudo(f"chown -R {USER}:{USER} {LLMSHARE_BACKEND_WEB_ROOT}")
    
    # Upload backend-related static files (for instance, a landing/index page for the conversation editor).
    # Adjust the filename as needed; here we assume templates/index_backend.html exists.
    conn.put("templates/index_backend.html", f"{LLMSHARE_BACKEND_WEB_ROOT}/index.html")
    
    # Upload the nginx configuration for the LLMSHARE_BACKEND app.
    # Assume you have a file templates/nginx_backend.conf for llmshare.nicholasbennett.work.
    conn.put("templates/nginx_backend.conf", LLMSHARE_BACKEND_NGINX_CONF, use_sudo=True)
    conn.sudo(f"ln -sf {LLMSHARE_BACKEND_NGINX_CONF} {NGINX_ENABLED_DIR}/{LLMSHARE_BACKEND_DOMAIN}")

    ################################################################################
    # Reload Nginx and Set Up SSL Certificates with Certbot
    ################################################################################
    conn.sudo("nginx -t && systemctl reload nginx")

    # Obtain an SSL certificate for the static site.
    conn.sudo(f"certbot --nginx -d {STATIC_DOMAIN} --non-interactive --agree-tos --email {CERTBOT_EMAIL}")
    # Obtain an SSL certificate for the LLMSHARE_BACKEND site.
    conn.sudo(f"certbot --nginx -d {LLMSHARE_BACKEND_DOMAIN} --non-interactive --agree-tos --email {CERTBOT_EMAIL}")
    conn.sudo("certbot renew --dry-run")

    print("Deployment complete for both the static site and LLMSHARE_BACKEND app.")
