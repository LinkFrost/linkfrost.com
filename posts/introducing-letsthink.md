---
title: "Introducing: letsthink"
date: "July 17 2023"
category: "cs"
excerpt: "New project! This was a big one, created using microservice architecture."
cover_image: "/img/letsthinkLogo.png"
---

# What is letsthink?

Need to guage feedback from your audience? letsthink allows you to create an anonymous message board or poll and watch the results in real time. Results are then saved to your profile and emailed to you afterwards.

[Try it out here!](https://www.letsth.ink)

# The Journey

letsthink was created as part of a final project for the [Scalable Web Systems](https://sites.google.com/cs.umass.edu/compsci497s/home) class at UMass Amherst. Myself, along with [jackbisceglia](https://github.com/jackbisceglia), [joepetrillo](https://github.com/joepetrillo), and [sid2033](https://github.com/sid2033), were tasked with creating a microservice based web application that was comprised of at least 12 unique services running in docker, as well as having some sort of messaging system that allows the services to communicate with each other. We decided on creating a polling application, and spent many weeks of the semester working on the project. It ended up doing really well, however we were not able to deploy it anywhere, due to our unfamiliarity with deploying docker applications. Finally, months later, post graduation, we've got it up and running on DigitalOcean, and are really happy to finally share our work.

# Microservices!

A big part of the class was learning how microservice architecture works, and how it compares to monolith architecture. [This video](https://www.youtube.com/watch?v=rv4LlmLmVWk) does a great job highlighting what microservice architecture is, but essentially it's seperating each feature of your application into it's own independent service, and all of these services communicate with each other. This allows for easier scaling and developing new features, as now it's as simple as creating a new service instead of worrying about taking the entire application down.

For letsthink, we roughly followed this architecture with our various services:

![letsthink-services](/img/letsthink-services.png)

We also planned out these pages for the frontend:

![letsthink-views](/img/letsthink-views.png)

# The stack(s)

### Frontend

- Next.js
- TypeScript
- Zod
- Tailwind.css

### Microservices

- TypeScript
- Express.js
- Zod
- RabbitMQ for communication (publish/subscribe model)

### Databases

- postgres (for a majority of the services)
- MongoDB (for the query service)

### Auth

- JWT solution
  - This was one of the services I focused on heavily due to prior bad experiences with auth in another class. On our repo, under the auth folder, I have a more detailed writeup, but I think we were able to come up with a secure JWT solution that is in line with what many big websites use.

# Deployment

For most of us, we were used to simply deploying web apps to Heroku, Netflify, or Vercel. Deploying a docker compose application seemed really difficult, and potentially pricey, as we'd have to deal with the likes of Amazon Web Services or Microsoft Azure. We briefly considered that, now that the course was over, we could rewrite the application as a monolith, as functionally it is not that complicated, but that would have made all of this code feel pointless. With break starting and the next semester being really busy, we paused on this until a few months later.

Now, in the summer, I took a look at deployment again. This time, I checked out [DigitalOcean](https://www.digitalocean.com/), which I happened to have credits for. I was able to spin up a Ubuntu VM focused on docker and docker compose. Initially, I ran into _many_ issues trying to get our application running on the VM, mainly with some of our npm packages, their versions, the versions of node, volumes, and more. After some troubleshooting, it seemed like we were online, but visiting the frontend (which we decided to deploy to Vercel for ease of use), could not access our APIs.

This led me down a path of generating an SSL certificate so that we could use HTTPS, and opening the various ports that our services were communicating on through docker. We had a domain for the application purchased back in December, so we decided to hook that up to DigitalOcean and Vercel, as well as creating routes for our service APIs, and we were finally up and running.

Since launch, we've had some puzzling database crashes, but other than that, things seem to be running smoothly.

# Future plans?

Honestly? I'm not sure. The very nature of having all these independent, yet connected services and trying to add new features in dev, making sure it works in production, running up against VM resources, etc, makes wanting to add new features to the application a little daunting. However, the process has certainly taught us a lot, and it's experience I'm going to carry both in future projects and in my career.

I'm glad it's finally deployed however, so go ahead, [use letsthink](https://www.letsth.ink) to poll your friends today!
