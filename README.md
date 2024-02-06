## Hello 👋

If you see this, I don't really have much to tell you in this space, so I'll just list what I'm working on and explain the reason behind this project. Feel free to skip this c:

### TODO

- The site looks bland and square-y. Add more vivid backgrounds and more "flare" to the site. (might take a while since it's a task more creative than technical.)

### Why this came to be

1. **My first portfolio was more of a CV; I wanted something less complicated, more personal, and lighthearted.**

In the beginning, I considered continuing to work on my old portfolio and transforming it into a second version, but I quickly decided to start from the ground up. As context, this project is a remake of my previous portfolio, which was done in April 2022, also using Gatsby but with JS and CSS. This ties to the second reason:

2. **I wanted to have an up-front way of showing that I have skills in both Typescript and Sass.**

Now, Gatsby allows you to seemlessly migrate from JS to TS, and since all valid CSS code is also valid Sass code, migrating from CSS to Sass should've been easy as well. So, why not just refactor everything? Simple:

3. **There was so much code to rename, reorganise, and delete that I felt it was less work overall to simply start from zero.**

And the refactor I wanted to do didn't just imply adding types and a new syntax to my CSS classes.

4. **I wanted to have cleaner and more reusable code, eliminate as many magic strings as possible, add support to multiple languages, and make it easier to add and update information to the page.**

In this iteration of my portfolio, if I want to add a recent project, I simply have to add the picture and the data to a JSON. If I want to change the wording of a component, I just change it in a JSON, rather than having to remember which component I need to change and searching for the text inside.

I'm pretty happy with how it's turning out. If you're actually reading this, I hope you like it and think that it looks somewhat fancy.
