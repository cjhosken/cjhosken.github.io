---
title: "Rhino FX"
date: "2024-12-24"
role: "Solo Project"
excerpt: "Experimenting with MPM and Solaris environment layouts."
img: "cover.png"
type: "project"
keywords: "Houdini, Rhino, MPM, Solaris, Environment, Christopher Hosken, VFX, Animation, Simulation. Mud, Fluid, FLIP, USD, Alembic, Creature Station"
---

![Cover](/images/content/rhino/cover.png)

## Introduction
Rhino FX was an exploriation into the MPM tools in Houdini, as well as how to build environments using Houdini Solaris. I used Quixel assets for the envionment, and found an animation of a Rhino online. The FX was done by me in Houdini.

<video controls muted>
  <source src="/images/content/rhino/rhino_comp.mp4" type="video/mp4">
</video>

## Breakdown
A viewport animation of the environment. Mostly made up of Quixel Megascans, I re-purposed an old USD Quixel asset generator to quickly make instancable USD assets. The trees were made using Houdini's tree generation tools. I had enough variants to populate the scene without repetition.

<video controls muted>
  <source src="/images/content/rhino/viewport_v001.mp4" type="video/mp4">
</video>

The mud simulation was done using Houdini's new MPM simulation tool. I combined it with a particle fluid surface to create a mud look. The wetmap on the Rhino is a simple SOP solver that uses attribute transfers to remember collisions with the fluid.

*Written December 12, 2024 by Christopher Hosken*