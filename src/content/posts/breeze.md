---
title: "Breeze"
type: "other"
date: "2022-08-13"
role: "Solo Project"
excerpt: "A 3D application with a simple built-in raytracer written in C++ with Qt and OpenGL."
img: "breeze_render_engine.png"
---

![Cover](/images/content/breeze/breeze_render_engine.png)

## Overview

Breeze Render Engine is a c++ program that can create and render 3-dimensional scenes. Users have the ability to add, edit, and move objects to create their own pieces of art. Breeze Render Engine is my first C++ project, and has taken me around 8 months part time to complete.

Built off the Ray Tracing in One Weekend tutorial series, Breeze Render Engine was written with C++, OpenGL, and Qt. The purpose of Breeze was to help me understand C++ Desktop app development and how most modern day DCC's operate.

You can download and try the application from https://github.com/cjhosken/breeze_render_engine. 


## Pre-existing work (AP Physics Engine)

![AP Physics Engine](/images/content/breeze/apengine.png)

Before Breeze was written, I had previously developed another 3D application in Java FX. This was a joint project for my AP Physics 1 and AP Computer Science A classes in High School (6th form). 
The engine was designed to simulate collisions with conservation of momentum. 

<video controls muted>
  <source src="/images/content/breeze/ap_engine_demo.mp4" type="video/mp4">
</video>

Although the Physics engine was planned to contain more concepts from AP Physics 1, many features had to be removed due to time concerns. This means that only Forces and Momentum were able to be implemented, and the only objects in the scenes were cubes. I was disatisfied with the result and wanted to explore more in the realm of desktop app development.

## Breeze Development

![Objects](/images/content/breeze/objs.png)

Breeze was written in C++ alongside OpenGL and Qt. I found that [Ray Tracing in one Weekend](https://raytracing.github.io/books/RayTracingInOneWeekend.html) and [Learn OpenGL](https://learnopengl.com/) especially useful in the development of Breeze and would recommend those resources for anyone else looking to learn DCC development.

I wanted to especially focus on the professional look of the application and tried to make it as minimal as possible. This involved lots of reasearching into Material Design, in which Google has numerous useful resources. I'm especially proud of figuring out a .obj file importer.

The video below shows Breeze in use.

<video controls muted>
  <source src="/images/content/breeze/breeze_demo.mp4" type="video/mp4">
</video>

*Written August 13, 2022 by Christopher Hosken*
