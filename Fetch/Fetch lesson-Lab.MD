![code differently](https://user-images.githubusercontent.com/54545904/91590200-f82ec600-e928-11ea-9433-eea450388abf.png)

# Javascript Fetch

# Table of Content

- [Javascript Fetch](#javascript-fetch)
- [Table of Content](#table-of-content)
  - [JavaScript Fetch Lab](#javascript-fetch-lab)
    - [Prerequisites](#prerequisites)
    - [About](#about)
    - [The Set Up](#the-set-up)
    - [The Task](#the-task)
      - [Part 1: API Utilization](#part-1-api-utilization)
      - [Part 2: DOM Utilization](#part-2-dom-utilization)
  - [Additional Resources](#additional-resources)
  - [Submission](#submission)
    
## JavaScript Fetch Lab

### Prerequisites

- JavaScript Fundamentals
- Fetch Fundamentals

### About

Since the start of the program you have learned how to build your own websites, utilizing HTML and CSS. But you have yet to generate content on these sites outside of what you created from scratch. In this lab you will be utilizing Fetch to request information from third-party databases or APIs, generating content on your webpage from third party servers.

### The Set Up

- You will need to create a new repository.
- Run live server in the folder to see your work.

### The Task

You are to make a basic webpage and will generate information from a third party database/API. Your webpage must include a search and submit form with an ordered/unordered list to show results. For this particular lab you will have the opportunity to utilize any API of your choosing, choosing from this [list](https://github.com/public-apis/public-apis). Be sure to look over the API **DOCS** or documentation, which is given to provide instructions on how to utilize the site's API.

#### Part 1: API Utilization

You are to create a `index.html, style.css, script.js` files.
First, use `fetch()` to make a GET request to the API and console log the
response object.Things to make sure of:

- Navigate to the documentation of the API you chose and read
  through the documentation.
- In `script.js`, use `fetch()` and to make a GET
  request and console log the response object.
  
Finally, depending on the API you choose, some will require you to request and use an API
key. The key will go in a fetch object called headers. Check out the
[fetch documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
to learn more about this!

You will need to give your fetch function a second parameter called `headers`,
which will be an object that takes the key:value pair
`'x-api-key': 'INSERT YOUR API KEY HERE'`. It will look something like this:

```
fetch('www.randomURL.com', {
    headers: {
        'x-api-key': 'INSERT YOUR API KEY HERE'
    }
})
```

#### Part 2: DOM Utilization
Finally you will utilize the DOM to generate the data from your API on to the webpage you created.

- Create a button that, when clicked, displays the data generated from the API.

- Create another button that randomly shuffles the data generated from the API.

- Minimal styling for the page is required utilizing the DOM. 


## Additional Resources

List of free APIs [here](https://github.com/public-apis/public-apis).

## Submission

You will need to submit an issue on this repository.
