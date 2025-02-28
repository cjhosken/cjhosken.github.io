---
title: "PAINter"
date: "2024-01-10"
role: "University Assignment"
excerpt: "An MSPaint-like application written in C++ and SDL2."
img: "desert_wip.png"
type: "other"
---

![PAINter](/images/content/painter/desert_wip.png)

## Overview

For my Programming Principles class at Bournemouth University, we had to write a C++/SDL2 application. I chose to make an MSPaint-like program. You can see the manual and report below.

![PAINter](/images/content/painter/desert.png)

I found that using an old paint software like this extremely frustrating to use. Hence the name, ***PAIN***ter.

<video controls muted>
  <source src="/images/content/painter/demo.mp4" type="video/mp4">
</video>

The project repository can be found at https://github.com/cjhosken/PAINter.

## PAINter Report
**This report is a summary of the report written for the Programming Principles class assignment at Bournemouth University. If you wish to read the full report you can download it [here](/images/content/painter/painter_report.pdf).**

### Introduction

This project aimed to create a Raster Graphics Editor / Paint Program in C++ using SDL. As I enjoy UI design and making desktop applications, I felt that PAINter would be a good challenge for developing my programming skills. To get inspiration for the project, I looked at programs such as MSPaint, Photoshop, and Krita. Once I got to grips with those programs, I created a flow chart diagram in Miro to see how PAINter would work.

![Flow Chart](/images/content/painter/flow.png)

### User Interface

The user interface is fairly standard with slider and button controls. I jumped into Figma to make a simple mockup of what I felt would work for the application. Whilst implementing the interfance, I decided to go with an object-oriented structure so that I could easily change buttons, sliders, and other UI elements. This way of designing a UI is very scalable as I could (theoretically) have multiple types of windows, buttons, and sliders.

![Figma UI](/images/content/painter/real_ui.png)

A common trend in modern UIs is to have bevelled rectangle shapes. Because SDL2 has no built-in UI, I had to write the bevelling myself. This was done by creating 3 smaller rectangles, and ¼ circles to place on the corners of the main rectangle. I used a “radius” detector that would draw a normal rectangle if the radius was 0. I could then re-call this function for the 3 small rectangles.

### Loading, Creating, Saving
I aimed for loading, creating, and saving to be done within the user interface. However, I decided to use command arguments instead due to text-displaying issues. Users could load a pre-existing image and save it in any format.


### Conclusion
Overall I am quite happy with this project. However, If I were to continue working on it, these are the things that I would address next.
- Faster line drawing algorithm
- Reusable window / Gui classes with individual event management
- Buttons for loading and creating images


*Written January 10, 2024 by Christopher Hosken*