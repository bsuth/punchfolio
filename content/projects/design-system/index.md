# Building the First Web Design System

## Company & Product Background

Marley Spoon is a meal kit service that enables customers to make meal at home
by sending recipes and ingredients directly to the door. Apart from Marley Spoon
brand, the company also owns another affordable meal kit brand called Dinnerly.
As a part of our design process, we introduced a design system to establish a
foundation to a style guide, a component library, and a design pattern of both
brands.

## Problem & Goal

Recently both brands had been rebranded due to its populary during Covid-19.
There were a major change on the look and feel of the brand including typography
and color palette. However, those changes did not include the digital products.
Therefore, we need a design system to collaborate better with in the team and
keep consistency throughout all design with different product designers.

Another challenge that we faced was a technical issue that impacted on design
changes. Design on web application was on the legacy development, where there is
lack of resources and supports to update the UI changes to align with the
rebranding. The goal of this project is to **develop a component library on the
website containing both brandings (old and new) and to foster better
communication and understanding of design patterns and how it should be used**.

## My role

I am a product designer driving the design system and component library on web
application.

## Defining a design system

Setting a focus and a goal for a design system is an important step. I believe
that the first design system does not have to be an all-around project. It can
start as a style guide or a component library that help the team communicates
better.

With the team, we decided that what we needed the most was a design system that
is served as a **component library**. A component library would help us document
the design and changes happening in a fast-pace environment dealing with many
experiments and iterations.

## Methodology

I organized the design system using **Atomic Design Methodology** by Brad Frost,
which is a popular method among many designers. I selected this method due to
its hierarchical structure that fits our needs to build a component library.
With the comprehensive system using Atoms, Molecules, Organisms, Templates, and
Pages, we are able to document from the small unit of the component to a
building block of small units. Here is an example of how I incorporated the
method into the design system.

![atomic-design](atomic-design.webp)

## Grid system

We used breakpoint and grid system from Google Material Design due to its
convenience and popularity. With this solution, the team can align experiences
on web and mobile application to be similar when users have to access the
cross-device environment.

![grid-system](grid-system.webp)

## Typography

On Marley Spoon website, we used Avenir Next font. This font was widely used for
all pages that were built on legacy code. However, there were several pages that
use the new font, Proxima Nova. Those pages usually are marketing communication
and landing pages.

Similar to Marley Spoon, Dinnerly had the same situation where the primary font
on the website would be Galano Grostesque from the legacy code and Sofia Pro is
the new font from the rebranding.

![typography](typography.webp)

## Iconography

In order to reduce complexity and effort for front-end development, we decided
to use Material Design Icon library as the main library for both brands as it is
informative and simple icon set. This icon set is shared for both web and mobile
applications to keep a similar experience of communication.

![icons](icons.webp)

## Color palette

Despite the rebranding, both brands' color palettes stay the same except the
teal shades for Marley Spoon. However, there was a switch on the primary color.
The mobile application now has yellow has a primary color but on the website,
teal is the primary color. For the web design system, we agreed to keep teal as
a primary color. Apart from the palette itself, I also included the color
accessibility and contrast for digital use. Here is some examples for primary
and secondary colors.

![palette](palette.webp)

## Illustrations

Besides the icons, the website UI used illustrations to communicate with users,
specially during the brand discovery and consideration page. The illustration
style is clean with less details.

![illustrations](illustrations.webp)

## Buttons

One of the crucial step in design documentation is a small element like buttons
that impact on the website's interaction design. I included Primary, Secondary,
Tertiary, and Text buttons in to the design system. Because of the website
interaction, it is important to organize the buttons to be in different states
for the accessibility reason such as active, hover, focus, pressed, loading, and
disabled.

![buttons](buttons.webp)

## Input fields

Input fields are also one of the big categories in the component library.
Similar to buttons, I included different styles of input fields according to
each usage such as form fields, and dropdowns. For the accessibility, I included
different states similar to buttons such as active, hover, focus, pressed,
disabled, and error.

![input-fields](input-fields.webp)

## Recipe cards

Another important component for a meal kit company is a recipe card, that is a
card component containing a meal image, title, subtitle, tags, prices, states,
and rating. I documented all recipe cards appearing on different pages and
breakpoints on the website.

![recipe-cards](recipe-cards.webp)

## Other components

There are more components in the web design system apart from those that I
mentioned. However, I wanted to demonstrate how my process came to be for the
first web design system. Other components mostly are meal kit related such as
weekly order status, weekly order summary, and etc. that I also applied a
similar rule and logic into my design system setup.

![other-components](other-components.webp)
