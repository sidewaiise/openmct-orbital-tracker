# openmct-orbital-tracker
Orbital Tracker plugin for OpenMCT

## How to use this repo
This repo is an example project for building a plugin for openMCT. The project is designed to be standalone, and makes use of the requireJS module definition pattern `define([], function...)`. The included index.html is only for testing the plugin functionality, where in reality - anyone using openMCT should be able to include the plugin bundle in their project to make use of it.

## Installation and building

#### Install:
```
npm install
```

Post-install script should also install dependencies for OpenMCT.

#### Build:
```
npm run prepare