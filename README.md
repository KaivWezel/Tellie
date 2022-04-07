# Browser Technologies

### Live scoreboard (progressively enhanced)

Demo can be viewed here: [kaivanwezel.nl](http://www.kaivanwezel.nl:81)

## User story

> I want to keep track of the time and score of a sportsgame to show interested people. They would also be able to comment on the game.

## Functionality

### Core functionality

The core of this app is to keep track of the score during a game and to show this to the audience so they can follow the gamescore live. For this app to work in its most basic form, 2 pages are needed:

1. The interface of the scoreboard
2. The scoreboard itself; visible to the crowd

### Functional/Usable

To make this app more user-friendly, I used CSS to change the layout a bit and add some spacing so input fields and the corresponding labels can be easily read. Also some visually decoration can be used to make it a bit more attractive to look at.

### Enhancements

To enhance the experience I will be going to use javascript. This way I can add extra functionalities to the application. For example, I would like to add some real time comments
A function to not only track scores, but also time and other gamestats would be nice.

Something simpler to enhance is the problem of live-updating the score and comment-section. Since with javascript, I can easily reload the page without needing the user to interact with anything, I can simulate a live-updating application. It wil make the app a bit more pleasurable to use.

## Sketches & wireflow

These sketches were made with the core-functionality in mind. The pure HTML version of the application should be working and thus I have sketched that version.
![First sketches](img/Browser%20Technologies%20schetsen1.jpg)
![First sketches](img/Browser%20Technologies%20schetsen2.jpg)
![First sketches](img/Browser%20Technologies%20schetsen3.jpg)
![First sketches](img/Browser%20Technologies%20schetsen4.jpg)

## Features

Features that this application has:

- [x] Keep track of all live games
- [x] Update score of a game
- [x] View current score of a game
- [x] Comment on the score of a game
- [ ] Live chat function
- [ ] Live timer for the game

Some features have not been added due to time management issues and a few days of not too illness.
So in the future, a live chat function and timer would be nice. Dependant on the type of game/sport that is played, different implementations of a timer are necessary so that is something to look into.

## Tested Browsers

- [x] Google Chrome (Version 99.0.4844.84 (Official Build) (arm64))
- [x] Safari Version 15.4 (17613.1.17.1.6)
- [x] Safari iOs 15
- [x] Samsung Internet (Version 16.2.1.56)

## Test report

So since I designed this app after defining its core-functionality, pretty much everything that should work works. Most of the functionality is handled serverside so the client only has to request or post information for the app to work. This is the way to make your app work on pretty much every machine. Only thing that is hard to do are live-sessions like chatting or a live timer.

One thing that I discovered on Samsung Internet is that with darkmode one, it does something weird with the colors. This way, the buttons are hard te read.

In every browser, the app works as it should though. I have not been able to test this app on a nintendo switch beforehand so that will be exciting.
