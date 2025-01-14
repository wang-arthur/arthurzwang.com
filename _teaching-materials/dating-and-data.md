---
title: "Dating and Data"
collection: teaching-materials
type: assignment
permalink: /teaching/materials/dating-numbers-game
date: 2023-09-01
toc: true
header:
  overlay_image: /assets/images/teaching/cassey-album-p-9764-p25-2.jpg
  overlay_filter: .2
---

# Sample Assignment: Dating and Data (Quantitative Analysis)

## Unit: Dating: A Numbers Game?

## Sample Texts
-   Lydia Davis, "[Break It
    Down](https://www.theparisreview.org/fiction/3063/break-it-down-lydia-davis),"
    *The Paris Review*, 1983.
- Catherine D'Ignazio, "A Toolkit for Restorative/Trasnfromative Data Science," in *Counting Feminicide: Data Feminism in Action* (MIT Press: 2024), https://direct.mit.edu/books/book/5767/chapter/4726651/A-Toolkit-for-Restorative-Transformative-Data.
-   David Gale and Lloyd S. Shapley, "[College Admissions and the
    Stability of
    Marriage](https://doi.org/10.1080/00029890.1962.11989827)," *The
    American Mathematical Monthly* 69, no. 1 (January 1962): 9--15.
-   Mar Hicks, "[The Mother of All
    Swipes](https://logicmag.io/sex/the-mother-of-all-swipes/),"
    *Logic(s) Magazine*, July 1, 2017.
-   Patrick Jagoda, excerpt from "Gamification," *Experimental Games:
    Critique, Play, and Design in the Age of Gamification* (Chicago:
    University of Chicago Press, 2020), 41--62.
-   Moira Weigel, "Dates," "Tricks," and "Likes," in *Labor of Love: The
    Invention of Dating* (New York: Farrar, Straus and Giroux, 2016),
    3--48.

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/68gwdKNd6N6vS8grJ33Kcy?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> 


### Overview

This problem set is a guided inquiry into data-driven dating apps that
builds on our discussion of quantification, market metaphors, and
gamification as cultural shifts in romance, courtship, and sexual
politics in the US. While love may be an expression of personal will,
desire, and choice, love is also shaped by structures beyond individual
decisions, including: the work patterns and labor arrangements that
affect where people live, work, and meet and when they are available;
the public transit, architectural designs, city planning, and zoning
regulations that arrange the public spaces where singles encounter
strangers and meet for dates; and the cultural and literary discourses,
genres, figures, tropes, and conventions (like the soulmate, the
romantic comedy, the F-Boy/"player," the meet-cute, and the coffee date)
that influence how people think about romance. As this incomplete list
suggests, dating app and social media user interfaces and algorithms are
not the only modern infrastructures for romance, but as sociologist
Michael Rosenfeld and others have suggested, digital media has become
the primary way that couples meet in the United States.[^1]

### Part 1: Dating Apps, Inequality, and Discrimination

Review the brief excerpts and visualizations from Christian Rudder,
*Dataclysm: Love, Sex, Race, and Identity\--What Our Online Lives Tell
Us about Our Offline Selves* (New York: Crown, 2015). Describe what
surprised or interested you in Rudder's findings and/or any questions
Rudder doesn't address that you'd be interested in pursuing if you had
access to his user data (write at least five findings/questions total).

### Part 2: Exploratory Data Analysis and Visualization

In this part of the problem set, you will analyze user and interaction
data from a fictitious dating app we'll call **Datr**. Imagine that data
scientists at Datr (Datr Scientists?) have provided a sample of
anonymized user data for us to analyze.

Download users.json, a file with the following format:

| Field | Type | Description | Example Value |
|-------|--------|---------|--------|
| ambrosia | gala | red delicious |


```json
[
  { 
    "id": 236,
    "gender": "N", // possible values include "M" for man, "W" for woman, "N" for nonbinary, "O" for other>
    "is_active": <Boolean>,
    "profile_photo_count": <integer between 0 to 6 -- for this exercise, you may assume that users set their profile pictures on account creation and never add or delete them>,
    "chats": [
      {
        "contact_id": <integer>,
        "first_message_sender_id": <integer (either the user's id or contact_id)>,
        "first_message_length": <integer representing number of characters in the first message>,
        "first_message_recipient_responded":	<Boolean>,
	   “message_count”: <integer>,
        "met_in_person": <Boolean>
      },
      ...
    ]
  },
  ...
]

1.  Programming Problems

    a.  Create a file named \[lastname\]\_PS\_\[\#\].py. At the top of
        the file, write code to read the users.json file and store the
        data as a variable (of the dict type). For each of the problems
        below, write a Python function that takes the sample data as an
        argument and returns an answer. You will submit both your code
        and your answers. You may assume that all fields listed above
        are present in every entry in the data set, and all entries are
        the correct type (e.g., age will always be an integer like 22
        and never a string like "22", so there's no need to clean or
        validate the data).
    b.  How many active users are in the dataset?
    c.  How many messages have the users in the sample dataset sent?
    d.  What is the id of the user who has sent the most first messages?
    e.  What is the id of the user who has received the most first
        messages?
    f.  What are the ids of the five users with the highest response
        rates to their first messages?
    g.  What are the ids of the users who have sent zero first messages?
    h.  What percent of first messages receive responses?
    i.  What percent of first messages from men to women receive
        responses?
    j.  What percent of first messages from women to women receive
        responses?
    k.  True or false: first messages longer than 100 characters receive
        more responses than first messages with a length less than or
        equal to 100 characters?

2.  Open-ended questions
    a.  Summarize the demographics of users in this data set
    b.  Based on the dataset, what can you deduce or guess about how
        this app works? Keep in mind that the absence of a data field,
        e.g., height, could indicate that the app does not record,
        display, or use height in any way, but this data could also have
        been removed by the Datr scientists.
    c.  Select one visualization from *Dataclysm* and create an
        analogous one for this dataset.
    d.  What additional data would you want to collect to develop
        further insights into user behavior on this app? Do you
        anticipate any ethical concerns or tradeoffs with Datr
        collecting and using certain types of data?

### Part 3: Design Exercise

Moira Weigel writes that "if marriage is the long-term contract that
many daters still hope to land, dating itself often feels like the
worst, most precarious form of contemporary labor: an unpaid
internship." While dating and matchmaking might inevitably feel like
work, in this part of the problem set, you will reflect on design,
features, and data that could improve the process of generating new
social connections, romantic or otherwise. You may focus on dating apps
or---if you have less experience or interest in dating apps---apps for
meeting new friends or activity partners or apps for assembling groups
of people with shared interests.

1.  Describe one feature or element of digitally-mediated matchmaking
    that you believe needs improvement (or invention, if it does not
    exist yet). The issue you identify could be broad or specific,
    serious or light.

2.  In 2-3 pages, pitch an app, a change to an existing app, or if you
    prefer, an entirely offline mechanism or procedure that would
    address the limitation, problem, or shortcoming you've identified.
    Some guidelines and suggested questions to address:

    a.  Be specific about how your concept would address the issue. For
        example, instead of a vague statement like "my update would
        eliminate the phenomenon of dating app users matching but never
        talking," describe how you would achieve this change (banning
        users who frequently match but never talk? Rewarding more active
        users?).

    b.  Do you anticipate any potential side effects or negative
        consequences of your proposal? For example, some dating apps
        have tried to mitigate racial discrimination by eliminating race
        filters, but received complaints from users of color who argued
        that their preferences for intraracial dating were grounded in
        avoiding racism rather than excluding minorities.

    c.  How would you measure and evaluate the success of your
        intervention? What data or information would you want to collect
        and how would you analyze it?

    d.  Your proposed solution, feature, or interaction should be
        feasible but need not be monetizable or profitable. For example,
        following each user for a week and recording everything they say
        and do, then using a machine learning algorithm with this data
        to suggest better matches: infeasible, likely unprofitable, and
        also weird. Allowing users to block an unlimited number of
        profiles: feasible but not necessarily profitable.

Part 4: Extra Credit

Ethics review of: <https://openpsych.net/paper/46/>, "Some may object to
the ethics of gathering and releasing this data. However, all the data
found in the dataset are or were already publicly available, so
releasing this dataset merely presents it in a more useful form" (2)