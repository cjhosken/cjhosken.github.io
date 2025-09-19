---
title: Heman
date: 2025-01-17
description: "A stylized hero asset made in ZBrush, Maya, and Houdini."
tags: ["university", "usd"]
---

## Modelling

As part of our Modelling and Texturing Assignment at Bournemouth University, we were tasked with making a stylized hero asset based on a given concept. I decided to choose the Heman concept by Michael McCabe.

![Original Reference](/projects/heman/heman_doodle.jpg)

We began by blocking out our character in ZBrush; starting the basic shapes, then the muscles, then the finer details. The hardsurface assets were then modeled in Maya.

![ZBrush](/projects/heman/heman_zbrush.png)

## Rigging

The rig was created from scratch in Maya. I hadn't done FK/IK switching before and wanted to give that a go.

![Rigging](/projects/heman/heman_rig.png)

## Houdini & Lookdev
The asset was then textured in Substance Painter and brought into Houdini for groom. Heman was rendered in a custom Houdini Lookdev environment that I designed.
<div class="video-container">
<video controls muted >
  <source src="/projects/heman/heman_wireframe_turntable.mp4" type="video/mp4"/>
  Your browser does not support the video tag.
</video>
</div>
<div class="video-container">
<video controls muted >
  <source src="/projects/heman/heman_turntable.mp4" type="video/mp4"/>
  Your browser does not support the video tag.
</video>
</div>

## USD Pipeline

Continuing on from the [Jupiter Steam Train](/projects/jupiter) I built Heman as a USD asset. This is following a new USD Pipeline workflow that I have developed for future projects.

![USD Pipe](/projects/heman/usd_pipe.png)

The pipeline worked extremely well for completing a full rounded-character.

*Written Jan 17, 2025 by Christopher Hosken*