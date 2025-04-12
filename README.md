# Server Config for nicholasbennett.work

First step to re-provision the server, after assumed re-allocation of a new Elastic IP:

In the [Namecheap Advanced DNS settings](https://ap.www.namecheap.com/Domains/DomainControlPanel/nicholasbennett.work/advancedns), update the A record for host "@" to the IP address of the EC2 server.

If the Elastic IP has not changed and has just been re-associated with a new EC2 instance, then proceed with the Fabric deployment.

To run:

```
fab setup --host-ip=<your_host_ip> --key-filename=<path_to_your_private_key.pem>
```