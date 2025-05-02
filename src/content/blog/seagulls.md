---
title: "Seagulls!"
date: 2025-05-01
description: "Two seagulls go fishing and find themselves in dangerous waters."
tags: ["university", "team", 'animation', "film"]
---
<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/l4VV4fxrYNg?si=OwyiVuMLqlzokter" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

# Introduction
"Two Seagulls go fishing and find themselves in dangerous waters."

Seagulls is the result of my second-year group project at Bournemouth University, which I directed. I was in charge of ensuring the team got their work done, and I was also responsible for the project pipeline and all the FX. 

*THIS ARTICLE IS STILL UNDER DEVELOPMENT*


# Directing & Producing

As the director, I was responsible for completing my original idea. Before pitching, I developed a basic animatic and references to establish the timing and mood of the short, which became a good reference for the team, especially in Animation. This technique of getting most of the pre-visualisation out of the way ensured more time to focus on refining models, movement, and overall polish for a stronger final piece.

I also took the producing role as it allowed me full creative freedom and the ability to adjust the schedule for any creative changes I or the team wanted to make. My producing responsibilities included scheduling meetings, preparing presentations, tracking progress, and ensuring the team’s workload remained balanced.

| ![][image1] |
| :---: |
| ![][image2] |
| *The Gantt Chart that was used for production, alongside how things really went.* |

One drawback to being Director and Producer is that it often leaves the rest of the team feeling beaten down. To combat this, I encouraged input from everybody and went for a more democratic approach to decision-making than dictatorship. Doing this allowed my team to come up with some great ideas that I would never have.

# Pipeline

One unique aspect about Seagulls is that it’s one of the first group projects to utilise a USD Pipeline. Before beginning production, I read extensively about USD and how it works in a VFX and Animation Studio. Using what I had learnt, we could heavily parallelise numerous parts of our pipeline, in different softwares.

| ![][image3]![][image4] |
| :---: |
| *My USD pipeline proposal (left), Seagulls shot pipeline (right)* |

I was in charge of maintaining the pipeline and teaching my team how to use it. We came across a few hiccups with model updates breaking rigs, however, overall it was a huge success\!

# Rigging

The biggest challenge in rigging was the sheer number of assets that needed controls. To streamline the process, I relied heavily on **Python scripting**.

My workflow followed a structured approach:

1. **Base Deformation**: First, I built a skeleton that would deform the mesh  
2. **Controls**: Instead of manually setting up the constraints and controls. I wrote Python scripts to generate them. This allowed for rapid iteration. Any adjustments could be reapplied to the rig instantly.

| ![][image5] *All the rigs used in Seagulls\!* |
| :---: |

For simpler props, I did manual rigging. My favourite prop was the fishing rod as I loved implementing the bend deformer, which shows very well in the final animation.	

One important script snippet which I want to mention is a text curve. Usually, text controllers split into each character and using them can be very frustrating. This Python script is how you would generate a single text curve to use as a controller.

```py
def create_text_curve(name="", text="", font='Arial', size=1):
    text_curves = cmds.textCurves(f=font, t=text)
    curve_group = cmds.group(empty=True, name=name if name else "text_curve_group")
    chars = cmds.listRelatives(text_curves[0])
    curve_offset = sum(cmds.getAttr(f"{char}.translateX") for char in chars) / len(chars)
    
    for char in chars:
        curve_pos = cmds.getAttr(f"{char}.translateX") - curve_offset, 0, 0
        
        for curve in cmds.listRelatives(char):
            for curveShape in cmds.listRelatives(curve, shapes=True):
                cv_list = cmds.ls(curveShape + '.cv[*]', flatten=True)
                for cv in cv_list:
                    cmds.xform(cv, relative=True, translation=curve_pos)

                cmds.parent(curveShape, curve_group, relative=True, shape=True)

    cmds.delete(text_curves)
    cmds.scale(size, size, size, curve_group)
    cmds.makeIdentity(curve_group, apply=True, t=1, r=1, s=1, n=0)

    return curve_group
```

# FX

The FX for this project was done in Houdini. Using our USD workflow, I was able to override any of the animations to make changes as well as utilise Houdini Procedurals for faster and more efficient rendering. 

## Feathers & Fur

Whilst animation was underway, I worked on the feathers for Gulliver and Jeff (the seagulls). I used a Houdini Fur Procedural for the base “fluff” on the body, and a Houdini Feather Procedural with seagull feathers (that I made) to scatter on the wings and tail. The feathers were then deformed using the feather mesh from the animation.  
![][image6]![][image7]  
*The feathers and “fluff”*

## Oceans & Water

For the ocean, I used the Houdini Ocean Procedural in combination with a FLIP simulation to merge the splashy water with a large ocean surface. I then did a white water simulation to add more splashy and foamy detail to the scene.

| ![][image8]![][image9] |
| :---- |

*Screenshots of the fluid simulation at 0.1 particle separation*

The biggest challenge with simulating the ocean was the time it took to cache. From FLIP sim to final mesh, it took about 30 hours. This made trying to iterate over the sim extremely difficult. Given more time, I would have liked to refine the fluid simulation so that it interacts with the oars and so that the shark is more visible when it chases after the boat.

## Extra

The newspaper was a quick vellum simulation that I did over the animation. The ocean’s spectrum was used to help make the newspaper float in the water.  
![][image10]![][image11]  
*The original animation (left) replaced by the vellum simulation (right)*

Once I had completed all the FX, I cached out into the FX layer, which I could then disable and enable whilst doing lighting tests.

# Lighting, Rendering & Compositing

Lighting was quite simple for this animation. I placed a Karma Sky into the scene, adjusting the elevation and azimuth, and instantly we had some good results. I also edited a couple of materials so that they integrated into the scene better.

For rendering, I decided to render directly into OneDrive. This made getting rendered files much easier. The one downside to this was syncing files into the PCs for rendering. Since the project was around 250GB, syncing the files took about an hour. Houdini’s Karma also seemed to render “dead frames”; frames which were broken. I had to spend a lot of time re-rendering the dead frames so that the whole animation looked complete.

I had to solve a few issues in rendering, such as enabling Legacy EXR Mode in Karma so that Cryptomattes worked. I also created primvar AOVs, which meant I could render out specific mesh attributes (such as my “whitewater emission” mask).

| ![][image12]![][image13] *Whitewater mask* |
| :---: |

Using these custom AOVs, I could refine my renders in compositing. For example, I could use my whitewater emission AOV to add whiteness to my fluid. I also split the scene into 4 layers (Sky, Island, Foreground, Whitewater), which I then combined in compositing. This dramatically sped up rendering.

When compositing, I had to manually do some rotopaint and masks to hide glitches in the water, and intersecting geometry.

| ![][image14]![][image15] *An example of some of the rotopaint* |
| :---: |

As we had extra time during the animation stage, I also rendered all the assets in their lookdev turntables. 

![][image16]  
*All the asset turntables*

# Final Edit

Since *Seagulls\!* has only one shot. The final edit was extremely simple to do. I went online to find sounds for the animation and placed them into the edit (see */3rd-party.txt*). I was also able to get in contact with an external music producer, [Hamza Aydın](https://www.youtube.com/channel/UCryMx7RshwDKNHQ-amgEm0A), who created the score. 

| ![][image17] *The complete editing timeline* |
| ----- |

# Conclusion

Being a Director and Producer for this project helped me grow dramatically in teamwork skills. I had to learn how to delegate work to people and make sure that everyone was on track. I was worried that the project would result in me having to take a dictator style of leadership. Luckily, my team was extremely communicative and willing to discuss ideas that I was able to take on a more democratic technique. I believe that this is the best approach to leading a team (as long as your team is cooperative).

Being a director has also been fulfilling in learning how to communicate my ideas to my team. When working alone you often don’t have to explain to yourself what you’re envisioning, but when working with others this skill is key. I was able to improve my ability at doing this through talking both artistically and technically with my team, while trying to be as encouraging as possible.

Although we had a few miscommunication mishaps throughout production, we were able to quickly overcome them and nobody felt hard-done by. This helped me see that taking a positive approach to work (even when you’re annoyed at having to redo things), helps improve team morale dramatically. I hope to take this attitude with me into the VFX and Animation industry.

I have been extremely blessed to have been given a team that was willing to cooperate and wanted to do the best it could. Without them, Seagulls would have never been as successful as they have been. Being able to trust my team members with their work gave me time to refine my USD pipeline as well as learn new FX techniques. I have learned how to lean into other people's strengths and not solely rely on myself for doing the work.


*Written by Christopher Hosken on May 2nd, 2025*