# Theater of the Mind 2: Super Sequal Edition

A text based RPG based on early computer games, in modern tech with modern design. A modern take on a fun and quirk medium.

## Setting up this repo

I personally perfer to use yarn for my package management, rather than mixing managers and having to remember which one does which. This does mean that setup is as easy as `yarn install`, wait for it, `yarn start`. With that as long as you have pulled the latest version, you see what i see so far.

## Features

This is a work in progress so we will track current features, planned features, known (major) bugs.

### Current Features

* Logic to handle dice rolls
* Error Route

### Planned Features

* Main Menu
* Log Book and User Input
  * user input logic for days
  * connected container
  * redux actions
  * views
* Class Models for Characters
  * solutions for character occupation/races and inhereitence therein
  * character creation
* Mechanics for Combat
* Mechanics for Magic
* Class Models for items/gear
* Class Models for monsters
* Routes
  * Main Menu
  * Game

### Known Bugs

* WHITE SCREEN! Oh, wait... there isn't anything yet...

## Tech used

* ReactJS
* ReduxJS
  * redux-starter-kit
    * redux-thunk
  * Dux pattern
  * connected-react-router
* CSS3
  * FlexBox
