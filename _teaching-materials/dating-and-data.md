---
title: "Dating and Data"
collection: teaching-materials
type: assignment
permalink: /teaching/materials/dating-numbers-game
date: 2025-01-15
toc: true
header:
  overlay_image: /assets/images/background/tri-pentagon-albers-dark-jewels.svg
  show_overlay_excerpt: false
---
<div></div>

# Sample Assignment (Quantitative Analysis)

## Assigned Texts
-   Lydia Davis, "[Break It
    Down](https://www.theparisreview.org/fiction/3063/break-it-down-lydia-davis),"
    *The Paris Review*, 1983.
- Catherine D'Ignazio, "[A Toolkit for Restorative/Trasnfromative Data Science](https://direct.mit.edu/books/book/5767/chapter/4726651/A-Toolkit-for-Restorative-Transformative-Data)," in *Counting Feminicide: Data Feminism in Action* (MIT Press: 2024).
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

This problem set is a guided inquiry into data-driven dating apps. The assignment
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
that influence how people think and talk about romance. As this incomplete list
suggests, dating app and social media user interfaces and algorithms are
not the only modern infrastructures for romance, but as sociologist
Michael Rosenfeld and others have suggested, digital media has become
the primary way that couples meet in the United States.[^1]

### Part 1: Dating Apps, Inequality, and Discrimination

Review the excerpts and visualizations from Christian Rudder (OKCupid Co-Founder),
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

Download `users.json` and `chats.json`. The `user` and `chat` data sets have the following fields:

`user`

| Field               | Type    | Description                                                                                              | Example Value |
| ------------------- | ------- | -------------------------------------------------------------------------------------------------------- | ------------- |
| id                  | integer | unique identifier for a user                                                                             | 2954          |
| gender              | string  | user-reported gender identity -- options are "male", "female", "nonbinary", "not specified", and "other" | "nonbinary"   |
| height              | integer | height in inches                                                                                         | 65            |
| birth_year          | integer | four-digit integer for birth year                                                                        | 1998          |
| profile_photo_count | integer | number of photos in the user's profile (for this exercise, assume this is constant / does not change)    | 3             |
| is_active           | boolean | whether the user has disabled their account                                                              | TRUE          |

`chat`

| Field                      | Type    | Description                                                                                     | Example Value |
| -------------------------- | ------- | ----------------------------------------------------------------------------------------------- | ------------- |
| user1_id                   | integer | id of one of the two users in the chat (the lower id number will always be entered as user1_id) | 39601         |
| user2_id                   | integer | id of the second user in the chat                                                               | 432056        |
| first_message_sender_id    | integer | id of the user who sent the first message                                                       | 39601         |
| first_message_length       | integer | length (in characters) of the first message in the chat                                         | 3             |
| user1_message_count        | integer | number of messages sent by user1                                                                | 7             |
| user2_message_count        | integer | number of messages sent by user2                                                                | 0             |
| reported_meeting_in_person | boolean | whether or not both users reported meeting in person                                            | FALSE         |

<!-- 
Example data for one user:
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
]
``` -->

#### Programming Problems (warm up)
1.  Create a file named `[lastname]_PS_[##].py`. At the top ofthe file, write code to read the users.json file and store the data as a variable (of the dict type). For each of the problems below, write a Python function that takes the sample data as an argument and returns an answer. You will submit both your code and your answers in a second document. You may assume that all fields listed above are present in every entry in the data set, and all entries arethe correct type (e.g., age will always be an integer like 22and never a string like "22", so there's no need to clean or validate the data).
2.  How many active users are in the dataset?
3.  How many messages have the users in the sample dataset sent?
4.  What is the id of the user who has sent the most first messages?
5.  What is the id of the user who has received the most first messages
6.  What are the ids of the five users with the highest response rates to their first messages?
7.  What are the ids of the users who have sent zero first messages?
8.  What is the id of the tallest user to receive no messages?
9.  What percent of first messages receive responses?
10. True or false: first messages longer than 100 characters receive
    more responses than first messages with a length less than or
    equal to 100 characters?

#### Open-ended questions
1.  Summarize the demographics of users in this data set
2.  Based on the dataset, what can you deduce or guess about how this app works? Keep in mind that the absence of a data field, e.g., height, could indicate that the app does not record, display, or use height in any way, but this data could also have been removed by the Datr scientists.
3.  Select one visualization from *Dataclysm* and create an analogous one for this dataset.
4.  What additional data would you want to collect to develop further insights into user behavior on this app? Do you anticipate any ethical concerns or tradeoffs with Datr collecting, using, or sharing the data you would need for this analysis?

### Part 3: Design Exercise

Moira Weigel writes that "if marriage is the long-term contract that
many daters still hope to land, dating itself often feels like the
worst, most precarious form of contemporary labor: an unpaid
internship."[^2] While dating and matchmaking might inevitably feel like
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

2.  In 2-3 pages, pitch an app, a change to an existing app, or if you prefer, an entirely offline mechanism or procedure that would address the limitation, problem, or shortcoming you've identified. Some guidelines and suggested questions to address:
    1.  Be specific about how your concept would address the issue. For example, instead of a vague statement like "my update would eliminate the phenomenon of dating app users matching but never talking," describe how you would achieve this change (banning users who frequently match but never talk? Rewarding more active users?).
    2.  Do you anticipate any potential side effects or negative consequences of your proposal? For example, some dating apps have tried to mitigate racial discrimination by eliminating race filters, but received complaints from users of color who argued that their preferences for intraracial dating were grounded in avoiding racism rather than excluding minorities.
    3.  How would you measure and evaluate the success of your intervention? What data or information would you want to collect and how would you analyze it?
    4.  Note that your proposed solution, feature, or interaction should be
        feasible but need not be monetizable or profitable. For example,
        following each user for a week and recording everything they say
        and do, then using a machine learning algorithm with this data
        to suggest better matches: infeasible, likely unprofitable, and
        also weird. Allowing users to block an unlimited number of
        profiles: feasible but not necessarily profitable.

### Part 4: Extra Credit [draft/outline]

Ethics and privacy review of a dating app or dating app dataset.

In 2016, social science researchers scraped a large amount of user data from OkCupid, including potentially identifying information (usernames) and published it (https://openpsych.net/paper/46/), noting that "Some may object to the ethics of gathering and releasing this data. However, all the data
found in the dataset are or were already publicly available, so
releasing this dataset merely presents it in a more useful form" (2). Criticism followed.

In this part of the assignment, you will review some ethics and privacy analysis of dating apps and dating app data, and produce either a brief report on a dating app's current privacy policies and protections OR outline principles and guidelines for publishing dating app data (or derivatives of dating app data).

#### Readings
- Tiffany Xiao and Yifan Ma, “A Letter to the *Journal of Statistics and Data Science Education* — A Call for Review of ‘OkCupid Data for Introductory Statistics and Data Science Courses’ by Albert Y. Kim and Adriana Escobedo-Land,” *Journal of Statistics and Data Science Education 29*, no. 2 (August 6, 2021): 214–15, https://doi.org/10.1080/26939169.2021.1930812.
- Jen Caltrider, Misha Rykov, and Zoë MacDonald, “[Data-Hungry Dating Apps Are Worse Than Ever for Your Privacy](https://foundation.mozilla.org/en/privacynotincluded/articles/data-hungry-dating-apps-are-worse-than-ever-for-your-privacy/),” Mozilla Foundation, *Privacy Not Included*.




[^1]: Michael J. Rosenfeld, Reuben J. Thomas, and Sonia Hausen, “Disintermediating Your Friends: How Online Dating in the United States Displaces Other Ways of Meeting,” *Proceedings of the National Academy of Sciences* 116, no. 36 (September 3, 2019): 17753–58. Rosenfeld et al. survey only heterosexual couples in this study, but other research suggests that LGBTQ couples meet online at even higher rates.


[^2]: Moira Weigel, *Labor of Love: The Invention of Dating* (New York: Farrar, Straus and Giroux, 2016), 9.