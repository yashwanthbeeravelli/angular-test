# Instructions

- Fork this git repo to your computer
- Create a branch
- When you are done, push your work and create a pull request to the original repo.

You must create a weather logging app that allows users to enter temperatures in order to calculate its median, average, highest and lowest points.

You will be provided with a MEAN stack development environment which you should use to do your work.

You should NOT spend more than 2-3 hours on this test. We do not expect you to complete every single user stories in that amount of time.

We will evaluate you based on:
- How clean your code is;
- The structure of your application;
- Your choice of UI architecture;

# Specs:
- Node.js 8.9.4 or higher
- Angular 1.6+
- SCSS
- Your choice of npm packages that you may want to use to help you develop this app

# Requirements:

The project is currently setup with Webpack and Typescript. **You are not** expected to know Typescript to complete this test. Simply make sure that any JavaScript file you create **MUST** have the Typescript file extension `.ts` instead of `.js`. Otherwise Webpack will not be able to compile your code.

If you do not know Typescript, it is simply "enhanced" JavaScript, so you can write normal, vanilla JavaScript.

- Write your application using Angular components as much as you can (component architecture)
- Calculate the median, average, highest and lowest temperature in the front-end (using Angular)

# User Stories:
- As a user, I want to add a temperature to my log
- The input must only take numbers
- You must display a validation error when invalid data is entered in the input
- As a user, I want to delete a temperature from my log
- As a user, I want to see the temperature median in my entire log
- As a user, I want to see the average temperature of my entire log
- As a user, I want to see the highest temperature in my log
- As a user, I want to see the lowest temperature in my log

# UI WireFrame

```
Temperature
------------------------------   -------------------
|                            |   | Add Temperature |
------------------------------   -------------------
* This field is required

--------------------------------------------------------------------------------

Average: 28.9 °c     Highest: 32.1 °c     Lowest: -3.6 °c     Median: 18.4 °c

--------------------------------------------------------------------------------

Temperature Log:

-------------------------------------------------------------
| Date           | Temperature              |               |
-------------------------------------------------------------
| Jan 21, 2018   | -14.9 °c                 | Delete        |
-------------------------------------------------------------
| Jan 21, 2018   | -14.9 °c                 | Delete        |
-------------------------------------------------------------
| Jan 21, 2018   | -14.9 °c                 | Delete        |
-------------------------------------------------------------
| Jan 21, 2018   | -14.9 °c                 | Delete        |
-------------------------------------------------------------
| Jan 21, 2018   | -14.9 °c                 | Delete        |
-------------------------------------------------------------
```
