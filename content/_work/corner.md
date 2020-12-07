---
slug: 'corner'
title: 'corner.so'
excerpt: 'A professional profile builder'
image: '/_blog/blank.png'
imageX: 1440
imageY: 900
date: 'December 2, 2020'
---

# Corner

Many young people have an internet identity crisis.

Each social media platform provides the perfect outlet for one or two content categories - images on Instagram, news on Twitter, music & video on TikTok, resumes on LinkedIn, etc. In fact, executing just one category extremely well is a big part of what made these platforms so successful.

I believe that young professionals (not just "creators") will find it increasingly valuable to build a cohesive and compelling professional internet identity.

I also believe that the social media platforms will fail to serve this need. Here are a couple reasons:
- The frequency of change in one's internet identity does not create enough fuel for products reliant on engagement (see LinkedIn's news feed)
- There is little consensus on what content is appropriate & professional on each platform, especially across industries and geographies

In September, two friends and I took a pass at this problem - here's what we built!

## Product

Corner helps you build a profile to share whatever is most relevant to your public identity. Your profile can include any content you already publish elsewhere on the web, and can be accessed from a nice-looking link.

For the initial product, we designed and built a landing page, an onboarding flow, an "edit profile" page, and a page to browse other profiles - all optimized for mobile web.

We tried to build a small magic moment when the user lands on their profile after onboarding is complete. It was, in reality, a challenge to keep the onboarding quick while collecting enough information to generate an attractive profile.

## Engineering

We weren't on a (very) tight timeline for this project, so I took the opportunity to learn a few new tools.

**Next.js** - to overcome the SEO limitations of vanilla client-side React. I fell in love with Next while building Corner (also inspired me to build this personal website!). It feels opinionated in all the right ways.

**Magic Link authentication** - first cotter.app, then magic.link. We found it challenging to build a quick onboarding experience that also gathered enough data to create a compelling profile. Magic links eliminate the mental overhead of creating and storing a password, which made a big difference for our ~60 second onboarding.

**Render** - we started with Netlify & Heroku, but after I discovered Render, I was completely sold. In my opinion, they have found the perfect deployment & infrastructure abstraction layer. One thing I missed was DNS management - I'm actually still using Netlify's DNS tool for this project, despite hosting the project on Render. Maybe it's on their roadmap.

**MongoDB Atlas** - after reading the docs, it was clear that I could do everything I had previously done with DynamoDB and more. Also worth noting that the Node ecosystem has very mature support for Mongo, e.g. a drop-in connector for session storage with express (link).

Old tools: **Figma**, **Sendgrid**, **AWS S3**