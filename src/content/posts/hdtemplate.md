---
title: "HdTemplate"
date: "2025-01-01"
role: "Solo Project"
excerpt: "A simple Hydra Delegate raytracer written for UsdView and Houdini Solaris."
img: "cover.png"
type: "other"
---

![UsdView](/images/content/hdtemplate/cover.png)

## Overview

In order to understand how USD is making moves in the world of software development I decided to experiment with making a Hydra Delegate raytracer. The delegate works in multiple DCCs and the Github repository can be found at https://github.com/cjhosken/hdTemplateRenderer.

## UsdView

The delegate was originally built for UsdView in C++. Using a BVH structure and a hard-coded distant light, the USD Kitchen Scene could be rendered. 

The render shown below is the HdTemplateRenderer after ~ 10 minutes. The basic sphere scene was rendered in ~ 30 seconds.

![UsdView](/images/content/hdtemplate/cover.png)
![UsdView](/images/content/hdtemplate/simple.png)

A render of the USD Kitchen Scene in Usdview using HdTemplateRenderer after ~ 10 minutes.

## Houdini

Using the Houdini USD build, the delegate was expanded for use in Houdini Solaris. The delegate has 3 AOVs, Beauty, Normal, Depth.

![Houdini Beauty](/images/content/hdtemplate/hou_beauty.png)
![Houdini Depth](/images/content/hdtemplate/hou_depth.png)
![Houdini Normal](/images/content/hdtemplate/hou_normal.png)

*Written Jan 1, 2025 by Christopher Hosken*