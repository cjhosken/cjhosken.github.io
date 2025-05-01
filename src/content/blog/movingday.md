---
title: "Moving Day"
date: 2023-07-20
description: "'The story of a mouse living in the abandoned attic of an old house.'"
tags: ['solo', 'project']
---

# Introduction

Moving day was the result of me experimenting with storyboarding inside of Blender. 
I was messing around with the annotation tool and basic primtives, and had the idea to do an animation of a mouse in an old attic.

![Concept](/blog/movingday/sketch.jpg)

I then made a basic environment and did a test-render. I pushed my storyboarding experimentation further by then drawing on top of the render in Krita.

![Draw](/blog/movingday/paint.jpg)

Once I had my idea, I did another draw-over animation using Blender's Grease Pencil tool.

<div class="video-container">
    <video controls muted>
    <source src="/blog/movingday/0-concept.mp4" type="video/mp4">
    </video>
</div>

From there, I created the mouse. The rig was done using Blender's Rigify Addon.

![Mouse](/blog/movingday/rig.PNG)

I then began animating the mouse.

<div class="video-container">
    <video controls muted>
    <source src="/blog/movingday/6-polish.mp4" type="video/mp4">
    </video>
</div>

Once I was happy with animation, I rendered out the project and edited it with sound. I found the project extremely fufilling and it gave me a better sense of why concepting your shots is an effective way of creating animations.

*This article was written by Christopher Hosken on May 1st, 2025*

<style>
img {
    width: 100%;
}

    .video-container {
        position: relative;
        padding-bottom: 56.25%; /* 16:9 Aspect Ratio (9 / 16 = 0.5625) */
        width: 100%;
        height: 0;
        overflow: hidden;
    }
    .video-container * {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>