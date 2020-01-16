# Williams-Sonoma Coding Challenge

This application implements the Front-End Williams-Sonoma Coding Challenge.  Per the
guidelines, I chose to use the [ReactJS](https://reactjs.org/) framework.

The visuals for the product details and carousel are intended to implement the guidelines
shown in the problem statement.  The left and right navigation buttons don't have a
close representation in the unicode character set, so I created an svg image for it.

## Setup

This project was created using [ReactJS](https://reactjs.org/).  It requires npm version 6.10 or greater.
To install all necessary libraries, use:
```
npm install
```

## Launching the application


In the project directory, start the app with
```
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app in the web browser.

Webpack will automatically compile the application, including converting `.scss` files into `.css`.

## Unit testing

The unit tests can be run with
```
npm test
```

The unit tests are run using [Jest](https://jestjs.io)
and [Enzyme](https://airbnb.io/enzyme).  Beyond testing that the each component can be rendered
successfully, the remaining tests generally verify that the logic of the carousel navigation works correctly.


## SEO (Search Engine Optimization)
Meta tags in the page header have been created to describe the content, including
Facebook Open Graph Protocol tags.  The robots meta tag
and a robots.txt file have also been included to enable crawlers to find the data.
