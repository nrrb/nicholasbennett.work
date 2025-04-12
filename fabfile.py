from fabric import Connection, task
import os

DOMAIN = "nicholasbennett.work"
WEB_ROOT = f"/var/www/{DOMAIN}"
NGINX_CONF = f"/etc/nginx/sites-available/{DOMAIN}"
NGINX_ENABLED = f"/etc/nginx/sites-enabled/{DOMAIN}"
USER = "ubuntu"

@task
def setup(c, host_ip, key_filename):
    conn = Connection(
        host=host_ip,
        user=USER,
        connect_kwargs={"key_filename": key_filename},
    )

    conn.sudo("apt update && apt install -y nginx certbot python3-certbot-nginx zsh byobu curl git")

    conn.run("byobu-enable")
    conn.run('sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"', pty=True)
    conn.sudo(f"chsh -s $(which zsh) {USER}")

    conn.sudo(f"mkdir -p {WEB_ROOT}/assets/images")
    conn.sudo(f"chown -R {USER}:{USER} {WEB_ROOT}")

    conn.put("templates/index.html", f"{WEB_ROOT}/index.html")
    conn.put("templates/pro-portrait.jpg", f"{WEB_ROOT}/assets/images/pro-portrait.jpg")

    conn.put("templates/nginx.conf", NGINX_CONF, use_sudo=True)
    conn.sudo(f"ln -sf {NGINX_CONF} {NGINX_ENABLED}")
    conn.sudo("nginx -t && systemctl reload nginx")

    conn.sudo(f"certbot --nginx -d {DOMAIN} -d www.{DOMAIN} --non-interactive --agree-tos --email your_email@example.com")
    conn.sudo("certbot renew --dry-run")
