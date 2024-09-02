---
title: "Post45 Technology and Open Access Projects"
collection: projects
type: tech
permalink: /project/post45-oa-tech
excerpt: ''
date: 2024-09-01
header:
  overlay_image: /assets/images/background/tri-pentagon-albers-prismatic-blues.svg
---

As Post45's Technology and Open Access Officer, I am working on a number of projects to expand the accessibility, discoverability, quality, reputation, and impact of the organization's publications.

These efforts fall into three main categories:
- [Improve Indexing and Discoverability](#improve-indexing-and-discoverability)
- [Updating Editorial Processes and Policies](#updating-editorial-processes-and-policies)
- [Modernize organization's web presence](#modernize-organizations-web-presence)

I've summarized the projects below, and details about individual tasks related to these broader projects are available at the GitHub links below. 

# Why am I doing this work? <!-- omit in toc -->

All of the issues I'm addressing as OA and Tech Officer are artifacts of the organization's structure and publication and funding models, which reflect its commitments to open access, but also generate a number of challenges. Post45 is a 501(c)(3) nonprofit (I completed the registration process solo in 2023). Apart from its [book series with Stanford University Press](https://www.sup.org/books/series/?series=POST*45), its publications (the peer-reviewed journal and *Contemporaries*, a forum for short, timely themed clusters of essays that are scholarly but not subject to peer review) are [diamond open-access](coalition-s.org/diamond-open-access), which means that we collect no fees of any kind.

## A brief interlude on independent diamond open-access publishing in the humanities

Traditional journals are primarily funded by library subscriptions (with small contributions from individual subscriptions and the occasional purchase of individual issues or articles), limiting access for readers unaffiliated with wealthy institutions. Gold open-access journals are funded by author publication charges (APCs), typically over $1000 USD, which remove barriers for readers, but add new ones for authors. Diamond open-access (now, ironically, the gold standard in OA publishing) removes barriers for both readers and authors, but requires devising new funding models. Several preliminary structures have emerged (for example, see [Plan S](https://www.coalition-s.org/why-plan-s/) and [Subscribe to Open](https://subscribetoopencommunity.org/)). However, most current efforts focus on the sciences (where funding works quite differently from the humanities), and grant funding for diamond open access efforts tend to prioritize university presses and flipping subscription-based journals to open access (for example, see MIT Press's [shift+OPEN](https://mitpress.mit.edu/shiftopen/) initiative). While valuable, these efforts are less relevant for sustaining publications that already publish open access, like *Post45*.

Whereas for-profit and university press publishers can distribute the costs of diamond open access across portfolios consisting primarily of subscription journals, *Post45* and similar independent publications lack these resources. Unlike most other scholarly organizations, we collect no membership dues or conference fees (with one exception in 2010 for a large conference at the Rock and Roll Hall of Fame), so we are not able to subsidize publication with fees from elsewhere. Instead, the organization is sustained by volunteer efforts and service by board members, board members' research funds, and sponsorship by institutions for web hosting costs (currently Emory University, previously Yale University).

## Back to why I'm doing this work

Because *Post45* is unaffiliated with a university press, we do everything ourselves, from copy editing to inclusion in scholarly databases and indexes, web design to establishing publication ethics policies (see details below). Each of these initiatives is a major undertaking, but I'm proud of Post45's open access commitments and I believe that by sharing what we have learned (and will continue to learn) about scholar-led independent publishing, we will encourage and promote the development of open access scholarship in the humanities. I plan to share findings and experience with the [Council of Editors of Learned Journals](celj.org), a society of editors (primarily in the humanities) of which I am a member.


# Improve Indexing and Discoverability

I am working on improving *Post45*'s indexing. Based on our analytics data, we know that most of our readers reach the journal through social media, web searches, and direct links (word of mouth, authors' websites, our newsletter) -- not library databases and scholarly indexes. Currently, my main goals in this area are:
- join the well-indexed [Directory of Open Access Journals (DOAJ)](doaj.org/) and earn a [DOAJ Seal](doaj.org/apply/seal), which recognizes best practices in open access publishing.
- join the Open Access Scholarly Publishing Association (OASPA), which includes a discounted CrossRef membership for DOI registration.
- Set up our Google Ad Grant.

More information on indexing and discoverability projects, please see the Indexing and Discoverability [GitHub project page](https://github.com/orgs/Post45-Journal/projects/3/views/2).

# Updating Editorial Processes and Policies
(in progress)

# Modernize organization's web presence
(in progress)

- Customize and launch a self-hosted submissions site using the Public Knowledge Project's open source software, [Open Journal Systems](https://pkp.sfu.ca/software/ojs/), to handle *Post45*'s peer review process. I tested the software with submissions for the [prize competition](projects/post45-prizes/) & am in the process of migrating the site from Amazon Web Services to Microsoft Azure (which has given us a nonprofit grant).
- Redesign Post45.org. Move the site from legacy WordPress to modern web technologies (e.g. Next.js, React, Typescript, Payload CMS, Tailwind CSS) to improve developer experience, interface for readers and editors, and site performance (reduce load times) by using server side rendering and static site generation.