---
layout: post
title: Permanent https-Redirect with Cloudflare
permalink: cloudflare-https-redirect
tags: tech cloudflare architecture
---

You want to redirect your old domain to a new once?

No problem, most of the domain providers are giving you the epossibility to redirect to a new one.
What is missing, however, is the ability to continue accepting HTTPS connections.
Without an SSL certificate for the old domain, requests to https://yourolddomain.com will stop working, after setting up a simple URL-redirect rule!
For many returning visitors, however, this URL is still in their browser history. So these requests end up in the void!
Cloudflare can help you out, to keep old domains working:

1. Create yourolddomain.com as a new site in cloudflare and change your nameservers according to what cloudflare requests.
2. Goto *Cloudflare* --> *yourolddomain.com* --> *DNS-Settings*\
  Setup two new DNS A-records with:
  ```
  root Domain (@) with invalid IP-Address 192.0.2.0
  www Domain with invalid IP-Address 192.0.2.0
  ```
  ![Permanent https-Redirect with Cloudflare]({{site.baseurl}}/assets/img/posts/cloudflare-https-redirect/1.png)

3. Goto *Cloudflare* --> *yourolddomain.com* --> *SSL/TLS*\
  As 192.0.2.0 dosen’t create any valid ssl results, we choose to flexible to accept unencrypted results.
  ![Permanent https-Redirect with Cloudflare]({{site.baseurl}}/assets/img/posts/cloudflare-https-redirect/2.png)
  

4. Goto *Cloudflare* --> *yourolddomain.com* --> *Rules* --> *Page Rules*\
  Now we need a permanent Rule to redirect everthing from your old domain to your new Domain.\
  \
  **Rule 1** 
  ```
  URL: yourdomain.com/*
  Setting: Forwarding URL
  Status Code: 301
  Destination URL: https://yournewdomain.com/$1
  ```
  **Rule 2** 
  ```
  URL: yourdomain.com
  Setting: Forwarding URL
  Status Code: 301
  Destination URL: https://yournewdomain.com
  ```
  ![Permanent https-Redirect with Cloudflare]({{site.baseurl}}/assets/img/posts/cloudflare-https-redirect/3.png)


Now Click *Save and Deploy* and your redirect should be ready to go!