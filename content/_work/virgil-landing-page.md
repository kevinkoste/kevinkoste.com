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

In January 2020, I teamed up with two friends to build a consumer credit card company that offered a engaging spending experience. This post is about the products we built and our marketing efforts. You can read more about our research and motivation here -> [__High Engagement Fintech__](/blog/high-engagement-fintech)

## Mobile App

Virgil's primary customer-facing product was a high-engagement mobile credit card app. We interviewed dozens of potential customers, and the results of these interviews informed the design, layout, and navigation of the app. Specifically, we learned that folks wanted 

Alongside customer interviews, we took a close look at the navigation patterns in successful personal finance apps like Clarity Money, Truebill & Robinhood.

![Image of Virgil App 1](/_work/virgil-app-1.png)

### Stack
- React Native
- Node.js
- Postgres
- AWS (VPC, RDS, EC2)

I built the app with React Native supported by a Node server. After a successful Plaid Link flow on the frontend, the backend used the access token to fetch transation data via Plaid's API, then wrote it to the database. That was it for the server. The vast majority of the work on this product was the React Native app. The learning curve was very steep - I was (re)learning JavaScript and React fundamentals as I went along.

I made a number of mistakes while building this product. For example, it was absolutely overkill to self-manage a VPC on AWS. I was very eager to take on the compliance challenges of working with financial data, but it made little sense for this demo. Today, I would probably deploy the Node server to Heroku and use SQLite or maybe MongoDB Atlas as the data store. With that said, I gained valuable experience by diving headfirst into AWS, and I'm ultimately glad that I did.

![Image of Virgil App 2](/_work/virgil-app-2.png)

![Image of Virgil App 3](/_work/virgil-app-3.png)

## Landing Page

![Image of Virgil Landing Page 1](/_work/virgil-web-1.png)

![Image of Virgil Landing Page 2](/_work/virgil-web-2.png)

![Image of Virgil Landing Page 3](/_work/virgil-web-3.png)

![Image of Virgil Landing Page Mobile](/_work/virgil-web-4.png)

## Engineering

<!-- ## Brand

We drew some inspiration for the brand from Co-Star & Mr. Porter - but the name comes from Dante's guide through the Inferno. -->