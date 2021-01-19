---
slug: 'virgil'
title: 'Virgil'
excerpt: 'A consumer credit card concept'
image: '/_work/virgil-app-1.png'
imageX: 1440
imageY: 900
date: 'November 12, 2020'
---

# Virgil

In January 2020, I teamed up with two friends to build a high-engagement consumer credit card.

It's no secret that the consumer credit card market is crowded with huge incumbents *and* countless startups. Why pile on? I wrote about our research and motivation here -> [__High Engagement Fintech__](/blog/high-engagement-fintech)

We never launched Virgil, but we did build two products that I'd like to share.

![Image of Virgil App 1](/_work/virgil-app-1.png)

## Mobile App

To test our idea before committing to an actual card program, we decided to build Virgil-lite: something that looks like an actual credit card app, but is populated with transaction data from Plaid. The screenshots below use data from my cofounders "daily driver" Chase credit card.

We lifted much of the design, layout, and navigation from leading consumer fintech apps like Clarity Money, Truebill & Robinhood, and drew some counter-inspiration from legacy banking apps (looking at you, Chase).

To improve the quality of the demo, we did a few things that don't scale, like manually mapping merchant IDs to company logos.

![Image of Virgil App 2](/_work/virgil-app-2.png)

A bit about the software - it's a React Native app backed by a small Node/Express service that handles the [__Plaid Link flow__](https://plaid.com/docs/link/react-native/).

Despite the shallow architecture, the learning curve was pretty steep because I was learning JavaScript and React fundamentals as I went along. I also made a number of mistakes that surely slowed me down, like setting up Postgres on RDS as the data store for the demo instead of using something much simpler like SQLite.

I can confidently attribute these mistakes to a lack of experience and an overindulgence of curiousity around cloud infrastructure. 😈😈😈

![Image of Virgil App 3](/_work/virgil-app-3.png)

## Landing Page

To measure interest in the idea, we built a landing page. The brand was inspired by [__Mr. Porter__](https://www.mrporter.com/en-us/) and [__Co-Star__](https://www.costarastrology.com/), and the copy attempted to address common complaints about existing card offerings while keeping things exciting.

We also built a [__How It Works click-through article__](https://virgilcard.com/howitworks) to give some background about the card industry and explain Virgil's business model. This was a hit - we got a lot of unsolicited positive feedback on it.

![Image of Virgil Landing Page 1](/_work/virgil-web-1.png)

To drive traffic, we ran a giveaway that took place over 5 days. After a visitor entered their email address on the landing page, they were redirected to their "dashboard" - a page that displayed their unique referral link, the number of people that used their link to sign up, and their chance to win.

The giveaway proved to be an effective strategy. We built a ~2000 person waitlist with a 32% conversion rate. The referral rate distribution approximated a power law, with a dozen or so people racking up 30+ referrals.

![Image of Virgil Landing Page 3](/_work/virgil-web-3.png)

The landing page is a bare React app, which in retrospect makes very little sense for a landing page - today, I would use [__Next__](https://nextjs.org/) for easy static generation and out-of-the-box image optimization.

![Image of Virgil Landing Page Mobile](/_work/virgil-web-4.png)