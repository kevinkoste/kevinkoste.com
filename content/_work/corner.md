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

<!-- A handful of people I've spoken to in tech & entertainment have (personal | anonymous | private) Twitter and Instagram accounts, but feel that LinkedIn is too rigid to communicate their (public | professional) identity. This is the problem we scratched at.

Take an example: Dan, a young person working in tech or entertainment who has an inactive Twitter account, a personal/private/anonymous Instagram account, and a LinkedIn profile. For anyone who searches Dan's name, his LinkedIn is the only substantive profile they find. His LinkedIn is effectively a resume - that's fine for random strangers on the internet. But Dan is actually 

I've actually spoken to many of these people!

Each of these platforms have executed one social media primitive extremely well. But as a result, each profile demonstrates just one facet of your identity.

Some people solve this problem with a personal website. I think the difficulty (and possibly stigma) of building one is still far too great a cost for the people who have this problem. This might change someday. -->



## Product

Corner helps you build a profile to share whatever content is most relevant to your public identity. Your profile can include the content you already publish across the web, and can be accessed from a nice-looking link.

For the initial product, we designed and built a landing page, an onboarding flow, an "edit profile" page, and a page to browse other profiles - all optimized for mobile web.

## Engineering

We weren't on a (very) tight timeline for this project, so I took the opportunity to learn a few new tools.

**Next.js** - to overcome the SEO limitations of vanilla client-side React. I fell in love with Next while building Corner (also inspired me to build this personal website!). It feels opinionated in all the right ways.

**Magic Link authentication** - first cotter.app, then magic.link. We found it challenging to build a quick onboarding experience that also gathered enough data to create a compelling profile. Magic links eliminate the mental overhead of creating and storing a password, which made a big difference for our ~60 second onboarding.

**Render** - we started with Netlify & Heroku, but after I discovered Render, I was completely sold. In my opinion, they have found the perfect deployment & infrastructure abstraction layer. One thing I missed was DNS management - I'm actually still using Netlify's DNS tool for this project, despite hosting the project on Render. Maybe it's on their roadmap.

**MongoDB Atlas** - after reading the docs, it was clear that I could do everything I had previously done with DynamoDB and more. Also worth noting that the Node ecosystem has very mature support for Mongo, e.g. a drop-in connector for session storage with express (link).

Old tools: **Figma**, **Sendgrid**, **AWS S3**