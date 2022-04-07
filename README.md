# REST Countries API with color theme switcher

![Screenshot of the countries REST API app](./src/images/desktop-screenshot-light.png)

<div align="center">
  <img src="./src/images/logo-html5.svg">
  <img src="./src/images/logo-css3.svg">
  <img src="./src/images/logo-reactjs-small.svg" style="width:124px; height: 64px">
  <img src="./src/images/logo-getbootstrap.svg">
</div>

## Overview

_Learn basic facts about the countries of the world._

<!-- [![Under Development](https://img.shields.io/badge/under-development-orange.svg)](https://github.com/) -->
<hr />

<br />

## Links

<p>
<a href="/.github/README.md">GitHub repo</a> • <a href="/.github/CONTRIBUTING.md">Live demo </a> • <a href="/.github/PULL_REQUEST_TEMPLATE.md">Project board</a>
</p>

<br />

## How to run the project

1. `git clone HTTPS_REPO_URL MY-FOLDER-NAME`
2. `cd MY-FOLDER-NAME`
3. `npm install`
4. `npm start`
5. visit `http://localhost:3000`

<br />

## Description

This project is my submission for the REST Countries API with color theme switcher challenge from Frontend Mentor.

> ## The challenge
>
> Your challenge is to integrate with the REST Countries V2 API to pull country data and display it like in the designs.
>
> You can use any JavaScript framework/library on the front-end such as [React](https://reactjs.org) or [Vue](https://vuejs.org). You also have complete control over which packages you use to do things like make HTTP requests or style your project.
>
> Your users should be able to:
>
> - See all countries from the API on the homepage
> - Search for a country using an `input` field
> - Filter countries by region
> - Click on a country to see more detailed information on a separate page
> - Click through to the border countries on the detail page
> - Toggle the color scheme between light and dark mode _(optional)_

## Features

- View a list of all countries of the world with basic facts about each.
- Filter countries based on region.
- Search for countries by their name.
- Click on a card to see more details about the country and navigate to bordering countries.
- Toggle dark/light mode.
- Responsive.
- Accessible.

<p align="center">
  <img src="./src/images/mobile-screenshot-dark.png" alt="Screenshot of the countries REST API app on mobile in dark mode." width="50%">
</p>

## Technologies

- `React.js` to build the UI.
- `react-router-dom` for the navigation between views.
- `react-bootstrap` to build accessible components.
- `localStorage` to set the correct theme depending on system color scheme and user's choices
- `scss`
- `axios` to query the API.

## How I built this project

### Routing

First, I focused on setting up React Router v6 for the navigation: defining routes, dividing the app in components and passing them the props they need.
   [video capture]

At this point the app still had a very basic appearance but the routing worked.

Once I could access all views of the app by navigating to them, I started working on their interactivity.

### Filtering and search functionalities.
    
I chose to keep the state of each in the URL. To avoid having a duplicate content issue, I added the proper `<meta>` tag.

### Improving markup

Then I started working on HTML markup. I used `react-bootstrap` since it provides accessible components, especially the `Dropdown` component. Later, I refactored some of the components for better legibility and to solve accessibilites issues.

### Styling

I added styling using a mobile-first approach with `scss` (I will definitely review the CSS).

### Backend

The backend data is fetched from REST countries API. I created a `countriesService` module that I use in App.js to fetch the data.









## Sources

- [REST Countries API with color theme switcher by Frontend Mentor.](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca/hub/rest-countries-api-with-color-theme-switcher-5-55ZCQuW)


