---
title: "Sputnik"
date: 2023-07-20
description: "A case study on the CFX of the alien from 'Sputnik' (2020)."
tags: ['fx', 'study']
---

<div class="video-container">
    <video controls muted>
    <source src="/projects/sputnik/final_render.mov" type="video/mp4"/>
    </video>
</div>

# Introduction

For applying to University, I was tasked with doing a case study on a certain VFX topic and then I would have present it at the University interview session.

I had recently seen the Russian film, *Sputnik* and was amazed by the CFX on the alien symbiont, so I decided to try to and recreate the effect.

## Breakdown
I modelled, rigged, and animated my symbiont in Blender, with textures done in Substance Painter. 

<div class="video-container"> <iframe title="Sputnik Symbont" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/86d0f53cc6094d2da615947af39fcd99/embed"> </iframe> 
</div>

I then brought it into Houdini and did a muscle, tissue, and skin pass. I also did some extra slime effects.

<div class="video-container">
    <video controls muted>
    <source src="/projects/sputnik/00_bone_anim.mp4" type="video/mp4"/>
    </video>
</div>

<div class="video-container">
    <video controls muted>
    <source src="/projects/sputnik/02_muscle_sim.mp4" type="video/mp4"/>
    </video>
</div>

<div class="video-container">
    <video controls muted>
    <source src="/projects/sputnik/03_tissue_sim.mp4" type="video/mp4"/>
    </video>
</div>

I've also included the ndoe setups I used in Houdini.

![](/projects/sputnik/houdini_file.png)

![](/projects/sputnik/houdini_fx_file.png)

## Final Presentation

Below is the full presentation that I gave.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/j-NHHUyZN-g?si=_CKWlDziEclZgpP5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

*This article was written by Christopher Hosken on May 1st, 2025*