---
slug: 'blobber'
title: 'Blobber'
excerpt: 'A four day SaaS product'
image: '/_work/blobber-1.png'
imageX: 1440
imageY: 900
date: 'January 11, 2021'
---

# Blobber

Twice in 2020, I built a product that need to support user-uploaded images. Both times, I searched for a managed solution but came up short. I learned that there are several steps. You have to handle the upload, host the files, resize/reformat, and serve them (usually via CDN).

While companies like Cloudinary and Imgix offer these services, I found them somewhat awkward to use. They don't make it particularly easy to self-serve, and their web dashboards look a bit dated.

So, I built a developer-first solution to this problem that optimizes for speed.

### Product

While planning, I tried to limit the scope as much as possible by supporting exclusively image uploads (no other file types) for React apps that use Hooks. This proved to be a great decision.

The idea is simple: wrap the client-side image upload procedure into a React hook that anyone can drop into their app.

The useUpload hook accepts an optional config object as an argument, where you can override the defaults 

The client-side library uploads files via POST request to a Blobber service using the [__XMLHttpRequest__](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) Web API, and has no npm dependencies other than a peer dependency on react>=16 for hook support.

### How It Works

When a component calls the useUpload hook,



Currently, the image processing service resizes the uploaded image into widths of 120, 480, and 720 


### Takeaways

I surpised myself with how quickly I finished the initial version of this project (4 days). I think I reached a tipping point in familiarity with my tools of choice.

- Code &rarr; TypeScript, React, Next, Tailwind, Express
- Services &rarr; Auth0, Stripe, MongoDB
- Infra &rarr; Render, S3, Cloudfront

I chose Mongo for development speed while I was still nailing down the data model, but I think it ultimately slowed me down. Next time I build something like this, I'm planning to try out [__Prisma__](https://www.prisma.io/) or something similar to reap the long-term benefits of SQL without getting slowed down by migrations in the early days.

It's also quite likely that I'm still too green to blame any tool for my data modeling woes. 😁

## Gallery

![Blobber Landing Page Image 1](/_work/blobber-1.png)

![Blobber Landing Page Image 2](/_work/blobber-2.png)

![Blobber Landing Page Image 3](/_work/blobber-3.png)

![Blobber Landing Page Image 4](/_work/blobber-4.png)

