# Server Config for nicholasbennett.work

First step to re-provision the server, after assumed re-allocation of a new Elastic IP:

In the [Namecheap Advanced DNS settings](https://ap.www.namecheap.com/Domains/DomainControlPanel/nicholasbennett.work/advancedns), update the A record for host "@" to the IP address of the EC2 server.

If the Elastic IP has not changed and has  been re-associated with a new EC2 instance, then proceed with the Fabric deployment.

To run:

```bash
./deploy.sh <server_ip> <~/.ssh/your-key.pem>
```

## Prep

For Tailwind configuration, first install it:

```bash
npm install -D tailwindcss@3
npx tailwindcss init
```

Then generate `tailwind.css` with:

```bash
npx tailwindcss -i ./templates/styles.css -o ./templates/tailwind.css --minify
```