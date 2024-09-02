---
title: "Special Issue Repository Web App"
collection: projects
type: tech
permalink: /project/special-issue-site
excerpt: ''
date: 2024-09-01
header:
  overlay_image: /assets/images/projects/special-issue-dash.png
  overlay_filter: .2
---

# Sections <!-- omit in toc -->
- [The Problem](#the-problem)
  - [Special Issue Benefits](#special-issue-benefits)
  - [Special Issue Barriers](#special-issue-barriers)
  - [Opacity of special issue publishing \& history](#opacity-of-special-issue-publishing--history)
- [The Plan](#the-plan)
  - [Features](#features)
  - [Primary interfaces](#primary-interfaces)
  - [Planned Tech Stack](#planned-tech-stack)
- [Existing resources](#existing-resources)
- [Sketch](#sketch)
  - [Screenshots](#screenshots)
- [Editorial Project: The Special Issue Special Issue](#editorial-project-the-special-issue-special-issue)



# The Problem
Publishing in special issues can be beneficial, particularly for junior scholars, but the publication process is opaque.

## Special Issue Benefits
- Potentially larger audiences and greater impact
- Participation can lead to other opportunities, like invitations to give talks, join panels, and participate in workshops
- Higher acceptance rates. To be clear, higher acceptance rate for special issues does not necessarily imply lower quality or relaxed standards, and could result from various factors (some of which I outline in the bullet points below). I believe that discrepancies between special issue and regular acceptance rates are a major equity issue & likely common among leading journals (we certainly have this problem at *Post45*), but I suspect that they typically result from bias and structural issues rather than active impropriety. Either way, we need to address the problem.
  - Journal editors might approach articles more generously or with positive expectations, viewing the articles as already having been vetted by guest editors
  - Journals may follow different processes for special issues and one-off articles
  - Guest editors often provide developmental editing and mentoring before submission, so special issue articles may be more polished or immediately legible to reviewers
  - Guest editors might advocate for their authors in conversations with journal editors, helping to tip the balance in ambiguous or borderline cases (even with double-anonymous peer review, journal editors have a great deal of latitude and discretion, e.g., in desk review and adjudicating split decisions between reviewers).
  - Even if guest editors exert no influence, journal editors may be biased toward acceptance. After approving a special issue proposal & investing time and effort into the project, no one wants a special issue to fall through. However, leading humanities journals often boast low acceptance rates (frequently under 20% and sometimes under 10%); if special issues actually hewed to those accepetance rates, they'd frequently be left with too few articles.
  - Special issue contributors are not a random/representative sample of the profession (see below)

## Special Issue Barriers
- Closed / invitation only
- Lack of information, even with open CFPs
- May be linked to events with open CFPs (like conference panels or roundtables), but later closed to new contributors
- May exacerbate inequalities by favoring scholars:
  - with resources to build extensive networks (such as time, stable employment, funding, and personal circumstances that allow for frequent travel and conference attendance)
  - with well-connected advisors/mentors
  - affiliated with prestigious institutions
  - who are senior and/or already have strong reputations 
- Basically, special issues likely most accessible to scholars who already have various advantages.

## Opacity of special issue publishing & history
- Journals are rarely transparent about how special issues are assembled. Were some or all of the authors invited to submit by guest editors? Was there an open CFP for the special issue? It's often unclear whether journals are even open to unsolicited special issue proposals.
- Even well-connected scholars can miss CFP announcements, which are distributed unevenly across a variety of platforms and modes: individual journal websites, publisher websites, word-of-mouth, direct invitations, forwarded emails, social media, and various CFP websites (some of which are difficult to navigate)
- Information about published special issues is spotty and decentralized. Many journal and publisher websites don't have full lists of special issues. Even full-text databases are missing consistent tagging and metadata on special issues. Finding quick answers to basic queries about special issues is usually infeasible (for example, what special issues in field X or related to topic Y have been published in the past Z years?).

(See also [Open but not Discoverable](/talks/2024-price-lab), notes for a talk on some of these issues that I presented at the Price Lab for Digital Humanities)

# The Plan
Create a definitive repository of special issue CFPs and historical metadata about special issues.

## Features
- Multiple sources of data
  - submissions from publishers, editors, and other scholars
  - web crawlers to collect data that's already public but scattered
  - manual upload, direct requests to journals and publishers
- User accounts/profiles
  - Subscribe for CFP updates (filtered)
  - Contribute data
- Open source and open data
  - The site code will be publicly available & licensed for reuse and data (all data aside from user data?) will be accessible and exportable.
  - Resilient: even if the site goes defunct, others can restart it / create an identical copy
  - Extensibility: the focus for this resource will be humanistic, but folks from other fields could build on the project and create versions for their disciplines


## Primary interfaces
- CFP browser: easy to filter, search, sort, and otherwise discover relevant CFPs
- Journal info pages: see a given journal's policies for special issue submission, open CFPs, and past special issues 
- Historical special issue database
  - comprehensive information about published special issues, including robust metadata
  - Combined with CFP data, this database could also provide transparency around the formation of special issue; there'll be a public source of info about how special issue X was formed (via open CFP or by invitation only? initiated by the journal's staff or an outside proposal? associated with particular events, conferences, or meetings?)

## Planned Tech Stack
(in progress)

- Backend
  - SQLModel and FastAPI? (lightweight, high-performance backend; built with an API interface, so no need to create a separate API for users)
- Frontend
  - Frameworks
    - [NextJS](https://nextjs.org/)? (popular react framework)
    - [Observable Framework](https://observablehq.com/framework/)? (static site generator for dashboards and data visualizations)
  - Tailwind CSS (styling)
  - 
  - Possible UI Component libraries
    - [shadcn](https://ui.shadcn.com/)
    - [TailwindUI](https://tailwindui.com/)
    - [TanStack Table](https://tanstack.com/table/latest)
    - [HeadlessUI](https://headlessui.com/)

# Existing resources
(overview and analysis coming soon)

- [Penn CFP site](https://call-for-papers.sas.upenn.edu/)
- Professional organizations
  - [History of Science Society: CFPs, Grants & Prizes page](https://hssonline.org/page/cfpsgrantsprizes)
  - [H-Net: H-Announce CFPs](https://networks.h-net.org/group/pages/20001709/call)
  - [MLA: Profession CFPs](https://profession.mla.org/cfps/)
- Social media (X/Twitter)

# Sketch
A [toy app](https://wang-arthur.github.io/special-issues/) I completed in October 2022 to learn D3.js (a popular data visualization library) and experiment with special issue metadata formatting. Note: I worked on this intermittently for less than two weeks; the completed app won't look or function anything like this. However, it was a helpful exercise in compiling and structuring special issue data.

## Screenshots
![](/assets/images/projects/special-issue-table.png)
_special issues table_

![](/assets/images/projects/special-issue-dash.png)
_special issues dashboard_

![](/assets/images/projects/special-issue-dash-hover.png)
_special issue dashboard (hover view)_

# Editorial Project: The Special Issue Special Issue
(details to come)