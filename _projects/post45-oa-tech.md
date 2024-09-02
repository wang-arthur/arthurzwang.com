---
title: "Post45 Technology and Open Access Projects"
collection: projects
type: ["editorial", "tech"]
permalink: /project/post45-oa-tech
excerpt: ''
date: 2024-09-01
header:
  overlay_image: /assets/images/background/tri-pentagon-albers-prismatic-blues.svg
---

As Post45's Technology and Open Access Officer, I am working on a number of projects to expand the accessibility, discoverability, quality, reputation, and impact of the organization's publications.

These efforts fall into three main categories:
- [Improving Indexing and Discoverability](#improving-indexing-and-discoverability)
- [Updating Editorial Processes and Policies](#updating-editorial-processes-and-policies)
- [Modernize organization's web presence](#modernize-organizations-web-presence)

I've summarized the projects below. Details about individual tasks related to these broader projects are available on [GitHub](https://github.com/Post45-Journal/Projects/projects?query=is%3Aopen). 

# Why am I doing this work? <!-- omit in toc -->

The issues I'm addressing as OA and Tech Officer are mostly artifacts of the organization's structure and publication and funding models, which reflect its commitments to open access but also create a number of challenges. Post45 is a small 501(c)(3) nonprofit, and apart from our [book series with Stanford University Press](https://www.sup.org/books/series/?series=POST*45), our publications (the peer reviewed *Post45* journal and *Contemporaries*, a forum for timely clusters of short essays) are independent, scholar-led, and [diamond open-access](https://coalition-s.org/diamond-open-access), which means that we collect no fees. Since *Post45* is not affiliated with a university press, we also do everything ourselves, including many tasks that publishers often handle, from copy editing to registering the journal for inclusion in scholarly databases and indexes; from web design and hosting to establishing publication ethics policies. 

Our funding is also minimal. For-profit and university press publishers can distribute the costs of diamond open access across portfolios consisting primarily of subscription journals. Alternatively, many other scholarly organizations can subsidize publications using membership dues or income from conference registration fees. Post45 has never charged membership dues or conference fees (with one exception in 2010 for a large conference at the Rock and Roll Hall of Fame) -- in fact, the Post45 Graduate Symposium has an impressive record of subsidizing costs of participation. Post45 is sustained by volunteer service by board members, board members' research funds, and sponsorship by institutions (currently Emory, previously Yale) for web hosting costs and pay for graduate student editors.

These initiatives are major undertakings, but I'm proud of *Post45*'s open access commitments and I believe that by sharing what we learn about scholar-led independent publishing, we will encourage more open access humanities scholarship.

<!-- 
## A brief aside on independent diamond open-access publishing in the humanities

Traditional journals are primarily funded by library subscriptions (with small contributions from individual subscriptions and the occasional purchase of individual issues or articles), limiting access for readers unaffiliated with wealthy institutions. Gold open-access journals are funded by author publication charges (APCs), typically over $1000 USD, which remove barriers for readers, but add new ones for authors. Diamond open-access (now, ironically, the gold standard in OA publishing) removes barriers for both readers and authors, but requires devising new funding models. Several preliminary structures have emerged (for example, see [Plan S](https://www.coalition-s.org/why-plan-s/) and [Subscribe to Open](https://subscribetoopencommunity.org/)). However, most current efforts focus on the sciences (where funding works quite differently from the humanities), and grant funding for diamond open access efforts tend to prioritize university presses and flipping subscription-based journals to open access (for example, see MIT Press's [shift+OPEN](https://mitpress.mit.edu/shiftopen/) initiative). While valuable, these efforts are less relevant for sustaining publications that already publish open access, like *Post45*.

[note that some OA advocates seem to be leaning toward green open access or self-archiving (ArXiV is one of the best known examples of this). This is sort of the anarchist argument (as I mentioned above, traditional publishing and gold and diamond OA are all dominated by large organizations) I've heard several OA leaders in the sciences suggest that we should bypass publishers, journals, and editors, as what really matters is the quality of the work, not proxies like pubilsher or journal prestige/reputation. I don't totally agree with this, as both a scholar and editor who appreciates ] -->


# Improving Indexing and Discoverability

Based on our analytics data, we know that most of our readers reach the journal through social media, web searches, and direct links (word of mouth, authors' websites, our newsletter) -- not library databases and scholarly indexes. The journal should be included in more scholarly indexes, and appear more consistently in library-based searches.

Currently, my main goals in this area are:
- join the well-indexed [Directory of Open Access Journals (DOAJ)](doaj.org/) and earn a [DOAJ Seal](doaj.org/apply/seal), which recognizes best practices in open access publishing.
- join the Open Access Scholarly Publishing Association (OASPA), which includes a discounted CrossRef membership for DOI registration.
- set up our Google Ad Grant.
- resolve problems with Google Scholar and MLA International Bibliography inclusion.

More information on indexing and discoverability projects, please see the Indexing and Discoverability [GitHub project page](https://github.com/orgs/Post45-Journal/projects/3/views/2).

# Updating Editorial Processes and Policies

*Post45* has published diamond open access since 2011, but new guidelines for best practices in open access publishing and publication ethics have emerged since then. 

Details about my review of our policies is available at this [GitHub project page](https://github.com/orgs/Post45-Journal/projects/6). 

Work I've completed in this area also includes various internal improvements, like setting up a Google Workspace account and setting up an editorial project management workflow using Slack and Notion (previously Trello).

# Modernize organization's web presence

*Post45* was launched in 2011 as a WordPress site and includes a great deal of legacy code. I'm recreating the organization's (and journal's) website using modern web technologies, which should vastly improve site performance, maintainability, and navigation. (Plus it'll look better.)

Works in progress include:

- **Website redesign**: recreating site with a modern stack. A new version of the site would improve web developer experience (easier debugging and expansion of the site), user interface for readers and editors, and site performance.
  - **Improving site navigation**: we've now published enough that older pieces are difficult to find and discover. Better navigation options would help to resurface older but still excellent pieces we've published. I've collated some design references in this [GitHub issue](https://github.com/Post45-Journal/Projects/issues/5).
- **Submissions site**: We currently manage submissions via email, which is labor-intensive for our managing editor, because submissions/peer review management software (like ScholarOne and Submittable) is prohibitively expensive. Free open source options are available (free = no software license fee; hosting costs still apply), but require additional work and knowledge to set up. I am in the process of customizing a submissions management site using the Public Knowledge Project's excellent open source [Open Journal Systems](https://pkp.sfu.ca/software/ojs/). I successfully tested the software with submissions for the *Post45* [prize competition](projects/post45-prizes/) & am in the process of migrating the site from Amazon Web Services to a Dockerized Microsoft Azure app (as we've received an Azure nonprofit grant).

More information about these projects is available at this [GitHub project page](https://github.com/orgs/Post45-Journal/projects/2/views/2).