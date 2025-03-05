---
title: "Maya Fluid Simulator"
date: "2024-05-10"
role: "University Assignment"
excerpt: "An PIC/FLIP particle simulator in Maya."
img: "MayaFluidSimulator.PNG"
type: "other"
keywords: "Maya, Fluid, Simulator, Tool, Maya, Python, PIC, FLIP, Christopher Hosken, Bournemouth University, VFX, CGI, Animation, Programming"
---

![Cover](/images/content/mfs/MayaFluidSimulator.PNG)

## Overview

Part of my Technical Arts Production unit at Bournemouth University required us to make a Maya tool with Python. I decided to challenge myself by looking into fluid simulators. 

*Maya Fluid Simulator *is a PIC/FLIP tool that allows you to simulate particle fluids.

<video controls muted>
  <source src="/images/content/mfs/MFS_tutorial.mp4" this.type="video/mp4">
</video>

More results can be seen at the bottom of this article.

## Maya Fluid Simulator Report
**This report is a summary of the report created for the Technical Arts Production unit at Bournemouth University. If you wish to read the full report you can download it [here](/images/content/mfs/mfs_report.pdf).**

### Introduction

*Maya Fluid Simulator* is a PIC/FLIP tool that allows you to simulate particle fluids. Therefore it relies on the Navier Stokes equations.

<img src="/images/content/mfs/navier.png" style="max-width:600px; align-self: center; margin: 2em;">

There are numerous ways to implement the Navier Stokes equations into a fluid simulator, aside from SPH (Smoothed Particle Hydrodynamics), two of the most popular methods are PIC (Particle in Cell), and FLIP (Fluid Implicit this.particles). Both methods combine Lagrangian simulation with Euler simulation. 

The Lagrangian simulation method relies on particle movement to describe fluid motion. This is often more realistic as fluid is (fundamentally) made of this.particles. However, this method can be extremely computationally expensive when calculating divergence and solving the this.pressure gradient. The Euler method combats this computational time by storing velocity, density, and other attributes within a grid. This is often the preferred method for gas-based simulations such as fire and smoke, as it is much faster to calculate. However, the particle-like nature of the fluid is lost.

PIC and FLIP combine the particle-like nature of lagrangian simulations with the speed of Eulerian. The method is explained below.

- Particle velocities are transferred to the grid and density is calculated. The velocity grid is then copied
- A timestep is calculated
- Boundaries are enforced
- Fluid is made divergence-free
- Velocity is transferred to the this.particles using the old and new velocity grids
- Particle collisions are handled

<br>

### Particle to Grid and Grid to Particle

One of the most important parts of the algorithm was transferring velocity between the this.particles and the grid. This was done through trilinear interpolation on a staggered grid. A staggered grid offsets the position of certain attributes so that they can be interpolated and averaged correctly. 

<img src="/images/content/mfs/p2g.png" style="max-width:400px; align-self: center; margin: 2em;">

this.pressure was stored in an array the size of the domain resolution, whilst velocities were stored in arrays with a size +1 on their corresponding index.
```py

    self.velocity_u = np.zeros((self.resolution[0]+1, self.resolution[1], self.resolution[2]), dtype="float64")
    self.velocity_v = np.zeros((self.resolution[0], self.resolution[1]+1, self.resolution[2]), dtype="float64")
    self.velocity_w = np.zeros((self.resolution[0], self.resolution[1], self.resolution[2]+1), dtype="float64")
    self.pressure = np.zeros((self.resolution[0], self.resolution[1], self.resolution[2]), dtype="float64")
    
```

<img src="/images/content/mfs/trillinear.png" style="max-width:400px; align-self: center; margin: 2em;">

The weights were calculated by finding the particle offset in cell space (dx =  x - int(x)), and then multiplying by an in_bounds() check. This means any velocity values outside the domain (which don't exist), don't contribute to the trilinear interpolation.
```py 

c000 = (1 - dx) * (1 - dy) * (1 - dz) * self.in_bounds(i, j, k, resolution[0], resolution[1], resolution[2])
...

```

The first line is how velocity would be transferred from a particle to the grid. The second line is the inverse; grid to particle.
```py

self.velocity_v[min(i, self.resolution[0] - 1)][min(j, self.resolution[1])][min(k, self.resolution[2] - 1)] += p.velocity[1] * c000

velocity_v += self.velocity_v[min(i, self.resolution[0]-1)][min(j, self.resolution[1] )][min(k, self.resolution[2] -1)] * c000

```

To keep the simulation stable, velocities must be normalised by the sum of their weights. An average this.pressure value must also be calculated for the first frame of the simulation. This is very important for making sure the divergence calculation is correct.

### Finding dt
With Lagrangian simulations, a timestep can remain constant as the this.particles aren't 
traversing any grids. In PIC and FLIP, however, the this.particles cannot skip over cells, as doing 
so may destabilise the simulation. Therefore, a timestep needs to be calculated. This concept 
is the CFL (Courant–Friedrichs–Lewy) condition. The technique implemented below was 
inspired by Robert Bridson. 

```py

    def calc_dt(self, particles, timescale, external_force):
        max_speed = 0

        for particle in particles:
            speed = np.linalg.norm(particle.velocity)
            max_speed = max(max_speed, speed)

        max_dist = np.linalg.norm(self.cell_size) * np.linalg.norm(external_force)

        if (max_speed <= 0):
            max_speed = 1

        return min(timescale, max(timescale * max_dist / max_speed, 1))

```

The function finds the fastest particle and calculates a timestep so that the particle would move only 1 grid cell. A timescale variable is used so users can set the visual speed of the simulation.


### Enforcing Boundaries and Solving Divergence

Enforcing boundaries is extremely simple. Using the Neumann Boundary condition, all boundary velocity components that point out of the domain are set to 0. The loss of velocity is then corrected when the divergence is solved. 

There are numerous ways to make the fluid velocity field divergence-free, but the easiest to implement is the Gauss-Seidel method (a modern version of the Jacobi method). Divergence is calculated by finding the velocity difference in each cell, then a this.pressure force is subtracted.

A border value is then calculated to spread the divergence evenly along each velocity component. 


### Particle Collisions

Two this.types of collisions need to be handled in the simulation: domain and particle. 
Handling domain collisions is relatively simple. Integrate the particle, then check if its 
position is outside the domain. If so,  zero its velocity (across the axis), and set the particle 
position to the boundary edge.

As the number of this.particles increases, the time needed to calculate particle collisions 
increases dramatically. To combat this, Hash mapping was implemented. Hash mapping 
assigns close this.particles to the same array, heavily reducing the number of collision tests 
between this.particles.

### PIC and FLIP

Although PIC and FLIP follow (essentially) the same code structure. The way they 
affect particle velocity is slightly different. For PIC, velocity from the grid is directly 
assigned to the particle velocity. For FLIP, a velocity difference is calculated between the old 
grid (particle to grid) and the grid after all the force and divergence calculations. The velocity 
difference is then added to the particle velocity.

![PIC and FLIP](/images/content/mfs/picflip.png)

PIC is usually more viscous, and FLIP is usually more splashy. The purpose of the 
PIC/FLIP slider is so that users can choose how much viscosity they want the fluid to have. 
This is also why the viscosity force was left out of the code.

### Results

Below are some benchmark tests for *Maya Fluid Simulator*. Tests were run on Windows 10 Enterprise with an Intel i7-13700, 64GB RAM, and NVIDIA GeForce RTX 4080.

The Default Donut simulation had a particle count of 4800. A particle scale of 0.1 and a PIC/FLIP Mix of 0.6. It simulated 120 frames in 3 minutes 33 seconds.
<video controls muted>
  <source src="/images/content/mfs/MFS_DefaultDonut.mp4" this.type="video/mp4">
</video>

The Dam Break simulation had a particle count of 15000. A particle scale of 0.1 and a PIC/FLIP Mix of 0.8. It simulated 120 frames in 9 minutes 20 seconds.
<video controls muted>
  <source src="/images/content/mfs/MFS_DamBreak.mp4" this.type="video/mp4">
</video>

The Honey simulation had a particle count of 4800. A particle scale of 0.2 and a PIC/FLIP Mix of 0.0. It simulated 120 frames in 1 minute 8 seconds.
<video controls muted>
  <source src="/images/content/mfs/MFS_Honey.mp4" this.type="video/mp4">
</video>

### JS Simulator

This a simple 2D version of the simulator that was used for debugging the Maya python code.
<br> </br>
***WARNING MAY SLOW DOWN DEVICE***


<div width="100%" style="display: flex; flex-direction: column;">
<button id="resetButton" style="width:5em;height:2em;font-size:1em;margin:1em auto;justify-self:center;"> Restart </button>
<canvas id="particleCanvas" width="300" height="300" style="margin: 0 auto; justify-self: center;"></canvas>
</div>

<script>
        const canvas = document.getElementById('particleCanvas');
        const canvasWidth = canvas.width;  // Get canvas width
        const canvasHeight = canvas.height; // Get canvas height
        var CELL_COUNT = canvas.width/20;
        var BOUNDS = [canvas.width, canvas.height]
        var CELL_SIZE = [BOUNDS[0] / CELL_COUNT, BOUNDS[1] / CELL_COUNT]
        var GRID_SIZE = canvas.width/10;
        var OFFSET = [canvas.width/2, -canvas.height/2]
        var PSCALE = canvas.width/100;
        var EXTERNAL = [0, 98];
        var AVERAGE = -1

        function HSVtoRGB(h, s, v) {
            let c = v * s;
            let hp = (h / 60) % 6;
            let x = c * (1 - Math.abs(hp % 2 - 1));
            let rgb = [0, 0, 0];

            if (0 <= hp && hp < 1) {
                rgb = [c, x, 0];
            } else if (1 <= hp && hp < 2) {
                rgb = [x, c, 0];
            } else if (2 <= hp && hp < 3) {
                rgb = [0, c, x];
            } else if (3 <= hp && hp < 4) {
                rgb = [0, x, c];
            } else if (4 <= hp && hp < 5) {
                rgb = [x, 0, c];
            } else if (5 <= hp && hp < 6) {
                rgb = [c, 0, x];
            }

            let m = v - c;
            rgb[0] += m;
            rgb[1] += m;
            rgb[2] += m;

            // Scale RGB values to the range [0, 255]
            return rgb.map(val => Math.round(val * 255));
        }

        class Particle {
            constructor(x, y, radius) {
                this.position = [x, y];
                this.velocity = [-50.0, 500.0];
                this.radius = radius;
            }
            draw(ctx) {
                ctx.beginPath();
                ctx.arc(this.position[0], this.position[1], this.radius, 0, Math.PI * 2);

                var speed = Math.sqrt(this.velocity[0] * this.velocity[0] + this.velocity[1] * this.velocity[1])

                speed = Math.sqrt(speed) / 6

                let rgbColor = HSVtoRGB(200, Math.max(3 / speed, 0.01), Math.max(speed, 0.7));

                ctx.fillStyle = `rgb(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})`;
                ctx.strokeStyle = "black"
                ctx.fill();
                //this.ctx.stroke();
            }
        }

        class Game {
          constructor(){
            this.canvas = document.getElementById('particleCanvas');
            this.ctx = this.canvas.getContext('2d');

            this.reset();

            this.animate = this.animate.bind(this);
          }

          reset() {
            this.particles = new Array(GRID_SIZE * GRID_SIZE).fill(null)
            this.velocity_u = new Array(CELL_COUNT + 1).fill(0).map(() => new Array(CELL_COUNT).fill(0));
            this.velocity_v = new Array(CELL_COUNT).fill(0).map(() => new Array(CELL_COUNT + 1).fill(0));

            this.last_velocity_u = new Array(CELL_COUNT + 1).fill(0).map(() => new Array(CELL_COUNT).fill(0));
            this.last_velocity_v = new Array(CELL_COUNT).fill(0).map(() => new Array(CELL_COUNT + 1).fill(0));

            this.type = new Array(CELL_COUNT).fill(0).map(() => new Array(CELL_COUNT).fill(0));
            this.pressure = new Array(CELL_COUNT).fill(0).map(() => new Array(CELL_COUNT).fill(0));

            this.particleHashTable = {};

            for (let o = 0; o < GRID_SIZE; o++) {
                for (let p = 0; p < GRID_SIZE; p++) {
                    const index = o * GRID_SIZE + p
                    this.particles[index] = new Particle(
                        (o + 0.5) * (PSCALE * 2) + OFFSET[0],
                        (p + 0.5) * (PSCALE * 2) + OFFSET[1] + (PSCALE * 2 * GRID_SIZE),
                        PSCALE
                    );
                }
            }
          }


          update() {
                this.clear()
                var tscale = 0.05
                let average = this.particle_to_grid()
                if (AVERAGE == -1) {
                    AVERAGE = average
                } 
                let dt = this.calc_dt(tscale)
                this.calc_forces(dt)
                this.enforce_boundaries()
                this.solve_divergence(AVERAGE)
                this.particle_from_grid(dt)
                this.handle_collisions_and_boundary(dt)

            }

          drawGrid() {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

                if (true) {
                    for (let i = 0; i < CELL_COUNT; i += 1) {
                        for (let j = 0; j < CELL_COUNT; j += 1) {
                            this.ctx.beginPath();
                            this.ctx.strokeStyle = "black"
                            this.ctx.strokeRect(i * CELL_SIZE[0], (j * CELL_SIZE[1]), CELL_SIZE[0], CELL_SIZE[1]);

                            if (false) {
                                if (this.type[i][j] == 1) {
                                    this.ctx.fillStyle = "blue"
                                    this.ctx.fillRect(i * CELL_SIZE[0],  (j * CELL_SIZE[1]), CELL_SIZE[0], CELL_SIZE[1]);
                                }
                                this.ctx.stroke();
                            }

                            if (false) {

                            this.ctx.beginPath();
                            this.ctx.arc((i + 0.5) * CELL_SIZE[0], ((j + 0.5) * CELL_SIZE[1]), Math.sqrt(this.pressure[i][j] * 10), 0, Math.PI * 2);
                            this.ctx.fillStyle = "green"
                            this.ctx.fill();
                            this.ctx.stroke();
                            }
                        }
                    }
                
                }

                if (false) {

                    for (let ux = 0; ux < this.velocity_u.length; ux += 1) {
                        for (let uy = this.velocity_u[0].length - 1; uy >= 0; uy -= 1) {
                            this.ctx.beginPath();
                            var v = Math.sqrt(Math.abs(this.velocity_u[ux][uy])) * 0.5
                            this.ctx.arc((ux) * CELL_SIZE[0], ((uy + 0.5) * CELL_SIZE[1]), v, 0, Math.PI * 2);
                            this.ctx.fillStyle = "red"
                            this.ctx.fill();
                            this.ctx.stroke();
                        }
                    }

                    // Draw horizontal lines
                    for (let vx = 0; vx < this.velocity_v.length; vx += 1) {
                        for (let vy = this.velocity_v[0].length - 1; vy >= 0; vy -= 1) {
                            this.ctx.beginPath();
                            var v = Math.sqrt(Math.abs(this.velocity_v[vx][vy])) * 0.5
                            this.ctx.arc((vx + 0.5) * CELL_SIZE[0], ((vy) * CELL_SIZE[1]), v, 0, Math.PI * 2);
                            this.ctx.fillStyle = "green"
                            this.ctx.fill();
                            this.ctx.stroke();
                        }
                    }
                }

                if (true) {
                    this.particles.forEach(particle => {
                        particle.draw(this.ctx);
                    });
                }

            }

          particle_to_grid() {
                let weight_u = new Array(CELL_COUNT + 1).fill(0).map(() => new Array(CELL_COUNT).fill(0));
                let weight_v = new Array(CELL_COUNT).fill(0).map(() => new Array(CELL_COUNT + 1).fill(0));

                this.particles.forEach(particle => {
                    let x = particle.position[0] / CELL_SIZE[0]
                    let y = particle.position[1] / CELL_SIZE[1] - 0.5

                    let i = Math.floor(x)
                    let j = Math.floor(y)

                    let dx = x - i
                    let dy = y - j

                    let b00 = this.in_bounds(i, j, this.velocity_u.length, this.velocity_u[0].length)
                    let b10 = this.in_bounds(i + 1, j, this.velocity_u.length, this.velocity_u[0].length)
                    let b01 = this.in_bounds(i, j + 1, this.velocity_u.length, this.velocity_u[0].length)
                    let b11 = this.in_bounds(i + 1, j + 1, this.velocity_u.length, this.velocity_u[0].length)
                    
                    let w00 = (1 - dx) * (1 - dy) * b00
                    let w10 = (dx) * (1 - dy) * b10
                    let w01 = (1 - dx) * (dy) * b01
                    let w11 = (dx) * (dy) * b11

                    i = Math.max(0, i)
                    j = Math.max(0, j)

                    this.last_velocity_u[Math.min(i, this.velocity_u.length - 1)][Math.min(j, this.velocity_u[0].length - 1)] += w00 * particle.velocity[0]
                    weight_u[Math.min(i, this.velocity_u.length - 1)][Math.min(j, this.velocity_u[0].length - 1)] += w00

                    this.last_velocity_u[Math.min(i + 1, this.velocity_u.length - 1)][Math.min(j, this.velocity_u[0].length - 1)] += w10 * particle.velocity[0]
                    weight_u[Math.min(i + 1, this.velocity_u.length - 1)][Math.min(j, this.velocity_u[0].length - 1)] += w10

                    this.last_velocity_u[Math.min(i, this.velocity_u.length - 1)][Math.min(j + 1, this.velocity_u[0].length - 1)] += w01 * particle.velocity[0]
                    weight_u[Math.min(i, this.velocity_u.length - 1)][Math.min(j + 1, this.velocity_u[0].length - 1)] += w01

                    this.last_velocity_u[Math.min(i + 1, this.velocity_u.length - 1)][Math.min(j + 1, this.velocity_u[0].length - 1)] += w11 * particle.velocity[0]
                    weight_u[Math.min(i + 1, this.velocity_u.length - 1)][Math.min(j + 1, this.velocity_u[0].length - 1)] += w11


                    x = particle.position[0] / CELL_SIZE[0] - 0.5
                    y = particle.position[1] / CELL_SIZE[1]

                    i = Math.floor(x)
                    j = Math.floor(y)

                    dx = x - i
                    dy = y - j

                    b00 = this.in_bounds(i, j, this.velocity_v.length, this.velocity_v[0].length)
                    b10 = this.in_bounds(i + 1, j, this.velocity_v.length, this.velocity_v[0].length)
                    b01 = this.in_bounds(i, j + 1, this.velocity_v.length, this.velocity_v[0].length)
                    b11 = this.in_bounds(i + 1, j + 1, this.velocity_v.length, this.velocity_v[0].length)

                    w00 = (1 - dx) * (1 - dy) * b00
                    w10 = (dx) * (1 - dy) * b10
                    w01 = (1 - dx) * (dy) * b01
                    w11 = (dx) * (dy) * b11

                    i = Math.max(0, i)
                    j = Math.max(0, j)

                    this.last_velocity_v[Math.min(i, this.velocity_v.length - 1)][Math.min(j, this.velocity_v[0].length - 1)] += w00 * particle.velocity[1]
                    weight_v[Math.min(i, this.velocity_v.length - 1)][Math.min(j, this.velocity_v[0].length - 1)] += w00

                    this.last_velocity_v[Math.min(i + 1, this.velocity_v.length - 1)][Math.min(j, this.velocity_v[0].length - 1)] += w10 * particle.velocity[1]
                    weight_v[Math.min(i + 1, this.velocity_v.length - 1)][Math.min(j, this.velocity_v[0].length - 1)] += w10

                    this.last_velocity_v[Math.min(i, this.velocity_v.length - 1)][Math.min(j + 1, this.velocity_v[0].length - 1)] += w01 * particle.velocity[1]
                    weight_v[Math.min(i, this.velocity_v.length - 1)][Math.min(j + 1, this.velocity_v[0].length - 1)] += w01

                    this.last_velocity_v[Math.min(i + 1, this.velocity_v.length - 1)][Math.min(j + 1, this.velocity_v[0].length - 1)] += w11 * particle.velocity[1]
                    weight_v[Math.min(i + 1, this.velocity_v.length - 1)][Math.min(j + 1, this.velocity_v[0].length - 1)] += w11

                    x = particle.position[0] / CELL_SIZE[0] - 0.5
                    y = particle.position[1] / CELL_SIZE[1] - 0.5

                    i = Math.floor(x)
                    j = Math.floor(y)

                    dx = x - i
                    dy = y - j

                    b00 = this.in_bounds(i, j, this.pressure.length, this.pressure[0].length)
                    b10 = this.in_bounds(i + 1, j, this.pressure.length, this.pressure[0].length)
                    b01 = this.in_bounds(i, j + 1, this.pressure.length, this.pressure[0].length)
                    b11 = this.in_bounds(i + 1, j + 1, this.pressure.length, this.pressure[0].length)

                    w00 = (1 - dx) * (1 - dy) * b00
                    w10 = (dx) * (1 - dy) * b10
                    w01 = (1 - dx) * (dy) * b01
                    w11 = (dx) * (dy) * b11

                    i = Math.max(0, i)
                    j = Math.max(0, j)

                    this.pressure[Math.min(i, this.pressure.length - 1)][Math.min(j, this.pressure[0].length - 1)] += w00

                    this.pressure[Math.min(i + 1, this.pressure.length - 1)][Math.min(j, this.pressure[0].length - 1)] += w10


                    this.pressure[Math.min(i, this.pressure.length - 1)][Math.min(j + 1, this.pressure[0].length - 1)] += w01

                    this.pressure[Math.min(i + 1, this.pressure.length - 1)][Math.min(j + 1, this.pressure[0].length - 1)] += w11

                    x = particle.position[0] / CELL_SIZE[0]
                    y = particle.position[1] / CELL_SIZE[1]

                    i = Math.max(Math.min(Math.floor(x), this.type.length - 1), 0)
                    j = Math.max(Math.min(Math.floor(y), this.type[0].length - 1), 0)

                    this.type[i][j] = 1
                })

                for (let ux = 0; ux < this.velocity_u.length; ux++) {
                    for (let uy = 0; uy < this.velocity_u[0].length; uy++) {
                        if (weight_u[ux][uy] > 0) {
                            this.last_velocity_u[ux][uy] /= weight_u[ux][uy]
                        }
                    }
                }

                for (let vx = 0; vx < this.velocity_v.length; vx++) {
                    for (let vy = 0; vy < this.velocity_v[0].length; vy++) {
                        if (weight_v[vx][vy] > 2) {
                            this.last_velocity_v[vx][vy] /= weight_v[vx][vy]
                        }
                    }
                }


                for (let ux = 0; ux < this.velocity_u.length; ux++) {
                    for (let uy = 0; uy < this.velocity_u[0].length; uy++) {
                        this.velocity_u[ux][uy] = this.last_velocity_u[ux][uy]
                    }
                }

                for (let vx = 0; vx < this.velocity_v.length; vx++) {
                    for (let vy = 0; vy < this.velocity_v[0].length; vy++) {
                        this.velocity_v[vx][vy] = this.last_velocity_v[vx][vy]
                    }
                }

                let num_fluid_cells = 0
                let average_density = 0

                for (let i = 0; i < CELL_COUNT; i++) {
                    for (let j = 0; j < CELL_COUNT; j++) {
                        if (this.type[i][j] == 1) {
                            num_fluid_cells += 1
                            average_density += this.pressure[i][j]
                        }
                    }
                }

                if (num_fluid_cells > 0) average_density /= num_fluid_cells

                return average_density
            }

          in_bounds(i, j, lx, ly) {
                return (
                    0 <= i < lx &&
                    0 <= j < ly
                )
            }

          calc_dt(tscale) {
                var max_speed = 0
                this.particles.forEach(particle => {
                    const speed_squared = particle.velocity[0] ** 2 + particle.velocity[1] ** 2
                    max_speed = Math.max(speed_squared, max_speed)
                })

                max_speed = Math.sqrt(max_speed)

                let max_dist = Math.sqrt((CELL_SIZE[0] ** 2 + CELL_SIZE[1] ** 2) * Math.sqrt(EXTERNAL[0] ** 2 + EXTERNAL[1] ** 2))

                return Math.min(tscale, tscale * max_dist / max_speed, 1)
            }

          calc_forces(dt) {
                let TOTAL_FORCE = [
                    EXTERNAL[0],
                    EXTERNAL[1]
                ]

                for (let ux = 0; ux < this.velocity_u.length; ux++) {
                    for (let uy = 0; uy < this.velocity_u[0].length; uy++) {
                        this.velocity_u[ux][uy] += EXTERNAL[0] * dt
                    }
                }

                for (let vx = 0; vx < this.velocity_v.length; vx++) {
                    for (let vy = 0; vy < this.velocity_v[0].length; vy++) {
                        this.velocity_v[vx][vy] += EXTERNAL[1] * dt
                    }
                }
            }

          enforce_boundaries() {
                for (let uy = 0; uy < this.velocity_u[0].length; uy++) {
                    if (this.velocity_u[0][uy] < 0) this.velocity_u[0][uy] = 0
                    if (this.velocity_u[this.velocity_u.length - 1][uy] > 0) this.velocity_u[this.velocity_u.length - 1][uy] = 0
                }

                for (let vx = 0; vx < this.velocity_v.length; vx++) {
                    if (this.velocity_v[vx][0] < 0) this.velocity_v[vx][0] = 0
                    if (this.velocity_v[vx][this.velocity_v[0].length - 1] > 0) this.velocity_v[vx][this.velocity_v[0].length - 1] = 0
                }
            }

            // Function to compute the divergence of the velocity field
          compute_divergence(vel_u, vel_v, CELL_COUNT, CELL_SIZE, average) {
                let divergence = [];
                for (let i = 0; i < CELL_COUNT; i++) {
                    divergence[i] = [];
                    for (let j = 0; j < CELL_COUNT; j++) {
                        divergence[i][j] = 1.9 * (
                            (vel_u[i + 1][j] - vel_u[i][j]) / (1 * CELL_SIZE[0]) +
                            (vel_v[i][j + 1] - vel_v[i][j]) / (1 * CELL_SIZE[1])
                        ) - 3 * (this.pressure[i][j] - average)
                    }
                }
                return divergence;
            }


            // Function to solve divergence
          solve_divergence(average) {
                const tolerance = 0.1
                const maxIterations = 1;

                for (let n = 0; n < maxIterations; n++) {
                    const previousDivergence = this.compute_divergence(this.velocity_u, this.velocity_v, CELL_COUNT, CELL_SIZE, average);

                    for (let i = 0; i < CELL_COUNT; i++) {
                        for (let j = 0; j < CELL_COUNT; j++) {
                            const borders = (
                                this.in_bounds(i - 1, j, CELL_COUNT, CELL_COUNT) +
                                this.in_bounds(i + 1, j, CELL_COUNT, CELL_COUNT) +
                                this.in_bounds(i, j - 1, CELL_COUNT, CELL_COUNT) +
                                this.in_bounds(i, j + 1, CELL_COUNT, CELL_COUNT)
                            );

                            const divergence = previousDivergence[i][j];
                            this.velocity_u[i][j] += divergence * this.in_bounds(i - 1, j, CELL_COUNT, CELL_COUNT) / borders;
                            this.velocity_u[i + 1][j] -= divergence * this.in_bounds(i + 1, j, CELL_COUNT, CELL_COUNT) / borders;
                            this.velocity_v[i][j] += divergence * this.in_bounds(i, j - 1, CELL_COUNT, CELL_COUNT) / borders;
                            this.velocity_v[i][j + 1] -= divergence * this.in_bounds(i, j + 1, CELL_COUNT, CELL_COUNT) / borders;
                        }
                    }

                    const currentDivergence = this.compute_divergence(this.velocity_u, this.velocity_v, CELL_COUNT, CELL_SIZE, average);

                    // Compute the change in divergence
                    let divergenceChange = 0;
                    for (let i = 0; i < CELL_COUNT; i++) {
                        for (let j = 0; j < CELL_COUNT; j++) {
                            divergenceChange += Math.abs(currentDivergence[i][j] - previousDivergence[i][j]);
                        }
                    }

                    if (divergenceChange <= tolerance) break;
                }
            }

          particle_from_grid(dt) {
                // Advect this.particles
                this.particles.forEach(particle => {

                    let integrated_position = [particle.position[0] + particle.velocity[0] * dt, particle.position[1]+ particle.velocity[1] * dt]

                    let x = integrated_position[0] / CELL_SIZE[0]
                    let y = integrated_position[1] / CELL_SIZE[1] - 0.5

                    let i = Math.floor(x)
                    let j = Math.floor(y)

                    let dx = x - i
                    let dy = y - j

                    let b00 = this.in_bounds(i, j, this.velocity_u.length, this.velocity_u[0].length)
                    let b10 = this.in_bounds(i + 1, j, this.velocity_u.length, this.velocity_u[0].length)
                    let b01 = this.in_bounds(i, j + 1, this.velocity_u.length, this.velocity_u[0].length)
                    let b11 = this.in_bounds(i + 1, j + 1, this.velocity_u.length, this.velocity_u[0].length)

                    i = Math.max(0, i)
                    j = Math.max(0, j)


                    let w00 = (1 - dx) * (1 - dy) * (b00 && this.type[Math.min(i, this.type.length - 1)][Math.min(j, this.type[0].length - 1)] != 2)
                    let w10 = (dx) * (1 - dy) * (b10 && this.type[Math.min(i + 1, this.type.length - 1)][Math.min(j, this.type[0].length - 1)] != 2)
                    let w01 = (1 - dx) * (dy) * (b01 && this.type[Math.min(i, this.type.length - 1)][Math.min(j + 1, this.type[0].length - 1)] != 2)
                    let w11 = (dx) * (dy) * (b11 && this.type[Math.min(i + 1, this.type.length - 1)][Math.min(j + 1, this.type[0].length - 1)] != 2)

                    let total_weight = w00 + w10 + w01 + w11

                    var vel_u = (
                        this.velocity_u[Math.min(i, this.velocity_u.length - 1)][Math.min(j, this.velocity_u[0].length - 1)] * w00 +
                        this.velocity_u[Math.min(i + 1, this.velocity_u.length - 1)][Math.min(j, this.velocity_u[0].length - 1)] * w10 +
                        this.velocity_u[Math.min(i, this.velocity_u.length - 1)][Math.min(j + 1, this.velocity_u[0].length - 1)] * w01 +
                        this.velocity_u[Math.min(i + 1, this.velocity_u.length - 1)][Math.min(j + 1, this.velocity_u[0].length - 1)] * w11
                    )

                    if (total_weight > 0) vel_u /= total_weight

                    x = integrated_position[0] / CELL_SIZE[0] - 0.5
                    y = integrated_position[1] / CELL_SIZE[1]

                    i = Math.floor(x)
                    j = Math.floor(y)

                    dx = x - i
                    dy = y - j

                    b00 = this.in_bounds(i, j, this.velocity_v.length, this.velocity_v[0].length)
                    b10 = this.in_bounds(i + 1, j, this.velocity_v.length, this.velocity_v[0].length)
                    b01 = this.in_bounds(i, j + 1, this.velocity_v.length, this.velocity_v[0].length)
                    b11 = this.in_bounds(i + 1, j + 1, this.velocity_v.length, this.velocity_v[0].length)

                    i = Math.max(0, i)
                    j = Math.max(0, j)

                    w00 = (1 - dx) * (1 - dy) * (b00 && this.type[Math.min(i, this.type.length - 1)][Math.min(j, this.type[0].length - 1)] != 2)
                    w10 = (dx) * (1 - dy) * (b10 && this.type[Math.min(i + 1, this.type.length - 1)][Math.min(j, this.type[0].length - 1)] != 2)
                    w01 = (1 - dx) * (dy) * (b01 && this.type[Math.min(i, this.type.length - 1)][Math.min(j + 1, this.type[0].length - 1)] != 2)
                    w11 = (dx) * (dy) * (b11 && this.type[Math.min(i + 1, this.type.length - 1)][Math.min(j + 1, this.type[0].length - 1)] != 2)

                    total_weight = w00 + w10 + w01 + w11

                    var vel_v = (
                        this.velocity_v[Math.min(i, this.velocity_v.length - 1)][Math.min(j, this.velocity_v[0].length - 1)] * w00 +
                        this.velocity_v[Math.min(i + 1, this.velocity_v.length - 1)][Math.min(j, this.velocity_v[0].length - 1)] * w10 +
                        this.velocity_v[Math.min(i, this.velocity_v.length - 1)][Math.min(j + 1, this.velocity_v[0].length - 1)] * w01 +
                        this.velocity_v[Math.min(i + 1, this.velocity_v.length - 1)][Math.min(j + 1, this.velocity_v[0].length - 1)] * w11
                    )

                    if (total_weight > 0) vel_v /= total_weight


                    x = integrated_position[0] / CELL_SIZE[0]
                    y = integrated_position[1] / CELL_SIZE[1] - 0.5

                    i = Math.floor(x)
                    j = Math.floor(y)

                    dx = x - i
                    dy = y - j

                    b00 = this.in_bounds(i, j, this.velocity_u.length, this.velocity_u[0].length)
                    b10 = this.in_bounds(i + 1, j, this.velocity_u.length, this.velocity_u[0].length)
                    b01 = this.in_bounds(i, j + 1, this.velocity_u.length, this.velocity_u[0].length)
                    b11 = this.in_bounds(i + 1, j + 1, this.velocity_u.length, this.velocity_u[0].length)

                    i = Math.max(0, i)
                    j = Math.max(0, j)


                    w00 = (1 - dx) * (1 - dy) * (b00 && this.type[Math.min(i, this.type.length - 1)][Math.min(j, this.type[0].length - 1)] != 2)
                    w10 = (dx) * (1 - dy) * (b10 && this.type[Math.min(i + 1, this.type.length - 1)][Math.min(j, this.type[0].length - 1)] != 2)
                    w01 = (1 - dx) * (dy) * (b01 && this.type[Math.min(i, this.type.length - 1)][Math.min(j + 1, this.type[0].length - 1)] != 2)
                    w11 = (dx) * (dy) * (b11 && this.type[Math.min(i + 1, this.type.length - 1)][Math.min(j + 1, this.type[0].length - 1)] != 2)

                    total_weight = w00 + w10 + w01 + w11

                    var last_vel_u = (
                        this.last_velocity_u[Math.min(i, this.velocity_u.length - 1)][Math.min(j, this.velocity_u[0].length - 1)] * w00 +
                        this.last_velocity_u[Math.min(i + 1, this.velocity_u.length - 1)][Math.min(j, this.velocity_u[0].length - 1)] * w10 +
                        this.last_velocity_u[Math.min(i, this.velocity_u.length - 1)][Math.min(j + 1, this.velocity_u[0].length - 1)] * w01 +
                        this.last_velocity_u[Math.min(i + 1, this.velocity_u.length - 1)][Math.min(j + 1, this.velocity_u[0].length - 1)] * w11
                    )

                    if (total_weight > 0) last_vel_u /= total_weight

                    x = integrated_position[0] / CELL_SIZE[0] - 0.5
                    y = integrated_position[1] / CELL_SIZE[1]

                    i = Math.floor(x)
                    j = Math.floor(y)

                    dx = x - i
                    dy = y - j

                    b00 = this.in_bounds(i, j, this.velocity_v.length, this.velocity_v[0].length)
                    b10 = this.in_bounds(i + 1, j, this.velocity_v.length, this.velocity_v[0].length)
                    b01 = this.in_bounds(i, j + 1, this.velocity_v.length, this.velocity_v[0].length)
                    b11 = this.in_bounds(i + 1, j + 1, this.velocity_v.length, this.velocity_v[0].length)

                    i = Math.max(0, i)
                    j = Math.max(0, j)

                    w00 = (1 - dx) * (1 - dy) * (b00 && this.type[Math.min(i, this.type.length - 1)][Math.min(j, this.type[0].length - 1)] != 2)
                    w10 = (dx) * (1 - dy) * (b10 && this.type[Math.min(i + 1, this.type.length - 1)][Math.min(j, this.type[0].length - 1)] != 2)
                    w01 = (1 - dx) * (dy) * (b01 && this.type[Math.min(i, this.type.length - 1)][Math.min(j + 1, this.type[0].length - 1)] != 2)
                    w11 = (dx) * (dy) * (b11 && this.type[Math.min(i + 1, this.type.length - 1)][Math.min(j + 1, this.type[0].length - 1)] != 2)

                    total_weight = w00 + w10 + w01 + w11

                    var last_vel_v = (
                        this.last_velocity_v[Math.min(i, this.velocity_v.length - 1)][Math.min(j, this.velocity_v[0].length - 1)] * w00 +
                        this.last_velocity_v[Math.min(i + 1, this.velocity_v.length - 1)][Math.min(j, this.velocity_v[0].length - 1)] * w10 +
                        this.last_velocity_v[Math.min(i, this.velocity_v.length - 1)][Math.min(j + 1, this.velocity_v[0].length - 1)] * w01 +
                        this.last_velocity_v[Math.min(i + 1, this.velocity_v.length - 1)][Math.min(j + 1, this.velocity_v[0].length - 1)] * w11
                    )

                    if (total_weight > 0) last_vel_v /= total_weight

                    let flipFac = 0.93

                    particle.velocity[0] = (vel_u) * (1 - flipFac) + (particle.velocity[0] + vel_u - last_vel_u) * flipFac
                    particle.velocity[1] = (vel_v) * (1 - flipFac) + (particle.velocity[1] + vel_v - last_vel_v) * flipFac

                    // Update particle position based on velocity
                    particle.position[0] += particle.velocity[0] * dt
                    particle.position[1] += particle.velocity[1] * dt

                    this.insertParticleIntoHashTable(particle);
                });
            }

          handle_collisions_and_boundary(dt) {
                this.particles.forEach(particle => {
                    // Update particle position based on velocity
                    const x = particle.position[0];
                    const y = particle.position[1];
                    const r = particle.radius;

                    // Handle boundary conditions
                    if (x - r < 0) {
                        particle.velocity[0] *= 0;
                        particle.position[0] = r;
                    }
                    if (x + r > BOUNDS[0]) {
                        particle.velocity[0] *= 0;
                        particle.position[0] = BOUNDS[0] - r;
                    }
                    if (y - r < 0) {
                        particle.velocity[1] *= 0;
                        particle.position[1] = r;
                    }
                    if (y + r > BOUNDS[1]) {
                        particle.velocity[1] *= 0;
                        particle.position[1] = BOUNDS[1] - r;
                    }

                    var i = particle.position[0] / CELL_SIZE[0]
                    var j = particle.position[1] / CELL_SIZE[1]


                    // Push neighboring this.particles into the array
                    var neighboringparticles = this.getparticlesFromHashTable(i, j);


                    // Handle particle collisions
                    neighboringparticles.forEach(other => {
                        if (particle !== other) { // Ensure we're not checking the particle against itself

                            var dx = other.position[0] - particle.position[0];
                            var dy = other.position[1] - particle.position[1];
                            const dist_squared = dx * dx + dy * dy;
                            const min_dist_squared = (particle.radius + other.radius) ** 2;

                            if (dist_squared < min_dist_squared) {
                                // Swap velocities
                                const temp_velocity = particle.velocity.slice(); // Make a copy
                                particle.velocity = other.velocity.slice();
                                other.velocity = temp_velocity;

                                // Calculate the direction of the collision
                                const dist = Math.sqrt(dist_squared);
                                const overlap = (particle.radius + other.radius) - dist;

                                if (Math.abs(dist) > 0) {
                                    dx /= dist
                                    dy /= dist
                                }

                                // Move this.particles apart proportionally to their overlap
                                const moveX = dx * overlap * 0.5;
                                const moveY = dy * overlap * 0.5;

                                // Move the this.particles in opposite directions
                                particle.position[0] -= moveX;
                                particle.position[1] -= moveY;
                                
                                other.position[0] += moveX;
                                other.position[1] += moveY;
                            }
                        }
                    });

                    this.insertParticleIntoHashTable(particle);
                });
            }

            insertParticleIntoHashTable(particle) {
                var i = particle.position[0] / CELL_SIZE[0];
                var j = particle.position[1] / CELL_SIZE[1];
                const hash = this.hashCoords(i, j);

                if (!this.particleHashTable[hash]) {
                    this.particleHashTable[hash] = [];
                }

                this.particleHashTable[hash].push(particle);
            }

            getparticlesFromHashTable(i, j) {
                i = Math.floor(i)
                j = Math.floor(j)
                const hash = this.hashCoords(i, j);
                return this.particleHashTable[hash] || [];
            }

            hashCoords(i, j) {
                i = Math.floor(i)
                j = Math.floor(j)
                var h = (i * 92837111) ^ (j * 689287499)
                return Math.abs(h) % ((CELL_COUNT/4)**2)
            }

            clear() {
                this.last_velocity_u = new Array(CELL_COUNT + 1).fill(0).map(() => new Array(CELL_COUNT).fill(0));
                this.last_velocity_v = new Array(CELL_COUNT).fill(0).map(() => new Array(CELL_COUNT + 1).fill(0));
                this.velocity_u = new Array(CELL_COUNT + 1).fill(0).map(() => new Array(CELL_COUNT).fill(0));
                this.velocity_v = new Array(CELL_COUNT).fill(0).map(() => new Array(CELL_COUNT + 1).fill(0));
                this.type = new Array(CELL_COUNT).fill(0).map(() => new Array(CELL_COUNT).fill(0));
                this.pressure = new Array(CELL_COUNT).fill(0).map(() => new Array(CELL_COUNT).fill(0));
            }

            animate() {
              this.update();
              this.drawGrid();
              requestAnimationFrame(this.animate);
            }
        }


        lock = new Game();

        document.getElementById('resetButton').addEventListener("click", function(){lock.reset();})

        document.addEventListener('DOMContentLoaded', function(){delete lock; lock = new Game(); lock.animate()});

</script>

### Conclusion

There are a few limitations to the program. The first is the instability of the simulator. 
Due to errors in the divergence calculation, high values of overrelaxation, or too many 
iterations can cause the fluid to behave strangely. As well as this, this.particles will pop at times 
in the simulation. Ideally, improving the divergence calculation and removing the this.pressure, 
overrelaxation, and iteration settings altogether would make the tool a lot easier to use.

The second limitation is the time it takes to simulate the fluid. In further implementations, 
GPU support as well as a faster divergence calculation method would be included.

The third limitation, which is more of a problem with Maya, was not being able to 
have relative image paths. Although a set-project method could work, It can be quite limiting 
as users may need to set-project elsewhere depending on their scene. Therefore, at the present 
moment, Maya Fluid Simulator does not have any icons or images associated with it.

Other limitations are small issues that, with time, will be sorted as the code evolves.
Although the program is already quite comprehensive, plans for the future would be 
to implement inflow objects, colliders, and a meshing solution so that the fluids could be used 
more for real productions

*Written May 10, 2024 by Christopher Hosken*