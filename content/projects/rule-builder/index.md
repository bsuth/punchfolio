import ImageGrid from '@site/src/components/ImageGrid';
import Vimeo from '@site/src/components/Vimeo';

# Designing a Rule Builder on Promotion Software

## Company & Product Background

Marley Spoon is a meal kit subscription service that sends customers
pre-portioned food ingredients and recipes to prepare home-cooked meals. Marley
Spoon is available in a two-person or four-person plan that customers can select
up to 6 meals for their weekly deliveries. Marley Spoon is currently operating
in 7 countries with Australia and the USA being the largest markets.

## Problem & Goal

Aggressively offering vouchers has been one of the key incentives for the
first-time customers for the meal kit industry. The profit margin the company
loses through discounting has been growing over time due to the competitiveness
among brands. The current flat percent discount applied to both two-person and
four-person plans leads to a loss of revenue in higher value plans.

Marketing Tech team came up with a solution to have different discount applied
to different plans, which would allow the company to generate more revenue for
the user acquisition. However, the promotion software did not support
customizing discount based on different plans. My contribution was to design a
new interface that allows our marketing managers to customize vouchers for
different plans.

## Understanding use cases

Generally, vouchers used in meal kit service often are split vouchers which is
not a one-time voucher. The split vouchers allow users to continue getting a
discount on the product for several weeks in order to increase long term value
(LTV) for subscription products. For the plan-based voucher, there will be 2
different users.

The first use case is acquisition voucher for new customers who sign up for the
first time with the brand. Usually users will get the voucher via marketing
campaign and it will be applied automatically with a deeplink from the campaign
in the signup process. The value of the discount will change regarding to a plan
that users select.

The second use case is reactivation voucher, which will be offering to users who
have unsubscribed and would like to come back again. We target this group of
users with reactivation campaign via email communication.

## Requirements & user flow

Discussing with Product Managers and Marketing Managers, I documented the
requirements of the MVP for the feature. For them, the feature will allow them
to set a distinct discount value based on different numbers of people on a plan
(such as a couple plan, or a family plan) and different numbers of meal on a
plan (such as 2-6 meals per week).

The feature should also allow them to have different type of discounts in one
voucher and it must be easily to create and duplicate to one another.

![user-flow](./user-flow.webp)

## Concept & Design

I introduced a rule builder concept into the promotion software enabling users
to define logics in voucher value for different plans. For example, when the
voucher is used in two-person and three-meal plan, the discount will be 50
percent off instead of 75 percent. Due to a rule builder being a new concept, I
worked on the design and prototype at the same time in order to do rapid testing
and get feedback fast and frequently from users.

<ImageGrid columns="2">

![concept-design-1](concept-design-1.webp)
![concept-design-2](concept-design-2.webp)
![concept-design-3](concept-design-3.webp)
![concept-design-4](concept-design-4.webp)

</ImageGrid>

## Navigation patterns

I also optimized the navigation and introduced a new hierarchy of the components
in the application so that users can understand better where to focus on the
next step for each task when customizing vouchers.

I added "Rules" as a part of navigation for users to get an overview of the rule
templates that they have added into their system. This section will also provide
an opportunity for us to develop a new function where users can build a campaign
based on available rule templates, as rule will be a major part for future
marketing campaigns.

![navigation-patterns](./navigation-patterns.webp)

## Final prototype

Here a demo of the final design for rule building for voucher configuration.

<Vimeo src="https://player.vimeo.com/video/854720575" />
