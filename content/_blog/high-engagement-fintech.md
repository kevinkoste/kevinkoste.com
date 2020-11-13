---
slug: 'high-engagement-fintech'
title: 'High Engagement Fintech'
excerpt: 'A few nuggets'
image: '/_blog/blank.png'
imageX: 1440
imageY: 900
date: 'November 12, 2020'
---

# High Engagement Fintech

## Fees & Interchange

Credit card issuers have two primary sources of revenue. Fees, which broadly includes interest charges, annual fees & late fees; and interchange, the fraction of your spending (~2-3%) that your card company gets every time you swipe.

Most card programs are carefully optimized for _one_ of these revenue models. This is an artifact of demographics & consumer behavior. Low-income consumers (less interchange) are more likely to miss a payment (more fees), while high-income consumers (more interchange) are less likely to miss a payment (fewer fees). 

There are essentially two profitable market segments for card issuers, each with a strategy to match:
1. Maximize revenue from fees by targeting low-income consumers (credit score < 680) who are likely to miss payments and carry a balance. Advertise easy approval process and simple cash-back rewards. (Discover, BofA)
2. Maximize revenue from interchange by targeting high-income consumers (credit score > 750) who spend much more per month, but are less likely to carry a balance. Advertise luxury rewards like travel & hotels. (Amex, Chase)

Both of these markets are fiercely competitive. Customer acquisition costs are astronomical, and margins are slim. At the high-income end, issuers like Amex, Chase, and Capital One entice customers with massive sign-up bonuses that they hope to make up with several years worth of interchange (and the occasional fee).

## Engagement

Card issuers prefer disengaged customers. Chase's favorite customer is one that swipes every day but forgets that Chase exists. This customer forgets to redeem their travel rewards, and might even forget to pay their bill once in a while. 33% of credit card rewards ($16B) go unredeemed annually. [[source]](https://www.creditcards.com/credit-card-news/six-reasons-credit-card-rewards-go-unredeemed-1277/)

It's reasonable to suggest that issuers have designed their products to confuse - take a look at the Chase iOS app. My Ultimate Rewards(r) total is listed on the home page, but there's no sign of a rewards section in the hamburger menu. When I tap my Ultimate Rewards(r) total, the app loads a webview with Chase's website. This website itself has a hamburger menu! It's a UX nightmare, and Chase could do much better if they were incentivized to.

## Data

In addition to interchange and fees, issuers actually have a third source of revenue. Credit and debit transactions are currently the largest segment of the $1B alternative data market, where card companies sell transaction data (often in real-time) to hedge funds and advertisers. The market is expected to grow at a 40% CAGR to $17B by 2027. [[source]](https://www.grandviewresearch.com/industry-analysis/alternative-data-market)

The incument card issuers rely on disengaged customers. As a result, the idea of using spending data to improve the spending experience within a single platform has barely been explored (Amazon being a notable exception). For additional inspiration, take a look at nearly any company that relies on Plaid (Clarity Money, Truebill & many more being built today). These companies are using spending data to solve one small problem, like budgeting or subscription management. As the card issuer, you are upstream of these companies, and could solve these problems in-platform.

Today, card companies get merchant-level transaction data from the card network, and the quality is rather poor. At some point down the road, the networks may start providing SKU-level data to issuers. It's hard to overstate how effective product & content recommendations powered by SKU-level data could become.

## A Different Business Model (unfinished)

Virgil was organized around these core decisions:

- Offer a charge card. It's just like a credit card, but the customer is required to pay their bill in full by the due date (they can't carry a balance). This eliminates all incremental fees and interest charges.
- Pass all interchange revenue on to the customer as rewards. Grow interchange from 2.5-3.0% to a ~3.5% reward rate by partnering with modern brands through revenue share agreements.
- Charge an annual subscription fee of ~$250.

With this model, the business benefits when a customer redeems a reward. Brands that want to market their products through the rewards platform would be in competition with each other, improving the terms of revenue share agreements over time.