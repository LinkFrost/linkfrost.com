---
title: "My First Hackathon - HackUMass X Experience"
date: "November 26 2022"
category: "cs"
excerpt: "Last weekend, I participated in my first hackathon through HackUMass X, and I thought I'd write about my experience."
cover_image: "https://dashboard.hackumass.com/assets/navlogo-bc47731249562952636adde8c1731c19b85a4e3b3a11f515727676d2cc585779.png"
---

Last weekend, I participated in my first hackathon through HackUMass X, and I thought I'd write about my experience.

---

# What took so long?

It's weird. At the time of writing, I'm in the final year of my undergraduate studies at UMass Amherst, and HackUMass has been a thing well before I've started, but I haven't participated until now. This is mainly due to a couple of factors, including not knowing enough to build _anything_ (freshman year), being way too busy with school work (sophomore and junior year), and not really knowing anyone well enough to form a team. That changed this year though, as I had some great teammates and made time to make sure I participated in at least one hackathon here.

---

# The Idea

This ended up being one of the hardest parts of the hackathon, coming up with what we were going to make. We knew it would be some sort of full-stack web app, but kept tossing around ideas for a good three hours. We finally decided to make a free open-source version alternative to iClicker. For those that don't know, iClicker is a student response system used in lectures at universities, and it's generally agreed upon by students that it is yet another way for universities to get you to spend money.

---

# Learning Something New

![Sketching out the views and data models](/img/hackumassx-1.jpg)

One of the main objectives of a hackathon, at least to me, is to learn something new while you're there. For us, that was learning the **[T3 tech stack](https://create.t3.gg/)**, which combines Next.js, NextAuth, Typescript, Prisma, Tailwind CSS, and tRPC to create full-stack applications with ease. With a lot of the industry moving towards using Typescript more, this seemed like a great way to learn a type-safe way to make API routes and database schemas.

Overall, I liked using this stack, especially combining Prisma, tRPC, and NextAuth. I plan on creating more projects using these tools in the future because of their ease of use.

---

# Not Enough Time, or Over Our Heads?

Unfortunately, we were not able to finish the project in time for submissions. We got the majority of our backend done, as well as a good bit of the frontend, but we were not able to complete what was essentially the main point of the app: creating an "iClicker-like" session between a teacher and their students. We figured this would require the use of web sockets, something none of us were familiar with, and this led to a rabbit hole of figuring out how to implement it in our site using something like [Pusher](https://pusher.com/). But, by the time it was 7 am on Sunday, three hours before submission, we realized we were not going to be able to get anything functional up and running, so we called it quits.

Perhaps it was due to how much time we spent on the front end, or coming up with ideas, or just being _really_ tired after pulling two all-nighters in a row, but still, I'm glad we did it because I learned a lot of new things I can apply to future projects.

We plan on trying to finish this project once the semester is over, but you can check out the [repository](https://github.com/joepetrillo/hackumass-2022) if you're interested.
