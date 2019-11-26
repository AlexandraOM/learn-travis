# Continuous Integration

![build passing?](https://api.travis-ci.com/AlexandraOM/learn-travis.svg?branch=master)

---

## What is it?

Originally pushed by advocates of **Extreme Programming** in the 90s, continuous integration is the software development practice of integrating all developers' working copies into the _mainline_ at least once a day.

---

## We are already using CI!

It's worth remembering that CI was around before modern Git SCM. So in modern parlance where Git and GitHub reign supreme, CI is partially handled by the now familiar process of the branches on our local machines being merged with the master and subsequently pulled in, every day!

---

But in a context where GitFlow is the modus operandi, when we say CI we mean an additional layer of integration-checking.

Enter [Travis](https://travis-ci.org/), an open-source CI server.

Travis builds and tests any push to the master, but comes into it's own when it's used to vet pull requests before they can be integrated.

---

## Important note

Continuous integration assumes a high degree of testing is built into the codebase. If you haven't used TDD, then Travis will miss even glaring errors.

---

## Why use Travis?

* Catch problems early
* Integrates nicely with GitHub
* Web-based, so nothing to install 
* Free in both the gratuit and libre senses!

---

## Travis CI flow

![](https://i.imgur.com/dFnj4ZY.png)

---

## Setup

First we made a new repo and authorised [Travis CI](https://travis-ci.org/) on it via their dashboard. Then we wrote a test:

```javascript
const hello = require("./hello.js");
const tape = require("tape");

tape("Addition function works as expected", t => {
  t.equals(
    hello(1, 1),
    2,
    "Addition function should return 2 when passed 1 & 1"
  );
  t.end();
});
```

And a function in hello.js to pass those tests:

```javascript
const add = (a, b) => a + b;
```

---

### Add a .travis.yml file

```
language: node_js
node_js:
  - "node"
```

This tells Travis what language we are using and therefore how to proceed. It automatically looks for the `'test'` script in our `package.json` file - the same one that runs when we run `npm test`.

---

### Pushing to master

We did all the usual npm initialisation, then committed our changes and pushed straight to the master branch.

This automatically triggers Travis to build and test the new master branch, and we can see the results live on our Travis dashboard.

---

Looking on our Travis profile, the build passes.

![](https://i.imgur.com/K939uMW.png)

**Hurrah!**

---

## Branch build and PRs

So then we wanted to experiment with how Travis works with normal git flow - multiple developers branching and making pull requests.

We wrote a simple new subtraction function, `sub`, with accompanying tests, committed and pushed it in a new branch, and put out a pull request on that branch.

```javascript
const sub = (a, b) => a - b;
```

---

What we saw is that Travis is immediately going to work building this in the background, to see if all our tests are running successfully and the branch can be happily integrated into the master.

![](https://i.imgur.com/IaJ3U9U.png)

---

At the same time we could see this process happening from Alexandra's Travis profile:

![](https://i.imgur.com/ybEQ2gS.png)

---

And finally Travis gave the all clear, and we hit merge!

![](https://i.imgur.com/nmSgW8c.png)

---

## Continuous Delivery

- Travis can help with the deployment process:
  - Continuous Delivery is a software engineering approach in which teams produce software that can be reliably released at any time - It aims at building, testing and releasing software with greater speed and frequency.

---

## Dealing with failure

Sometimes, shit happens, but it's how you deal with it that counts. For example your code might not integrate...

![](https://media.giphy.com/media/jdXD70BEdNjK8/giphy.gif)

---

![](https://i.imgur.com/7QPxXCx.png)

This could indicate that your tests have failed, or that you've failed to merge your code into the master branch effectively. Travis can give you more details!

---

## Now for a pop quiz!

https://play.kahoot.it/v2/lobby?quizId=f5949dcc-dfae-4596-b909-b60522480ed8
