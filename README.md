# [MUST READ] Welcome to WDB's frontend technical project!

This project is designed for **you** to gauge whether you want to apply to the **bootcamp** or **industry** branch. Follow the steps below to finish and submit your project. Do not be discouraged if you get stuck. Completing all tasks for the branch you are applying to is highly preferred, but we will only assess your project based on whatever you submit to us.

If you have any questions, please reach out to us at [our email](webatberkeley@gmail.com).

## Clarifications
- Due to rate-limiting on our previous API endpoint hosted on Postman, it was updated to: https://raw.githubusercontent.com/web-at-berkeley/fa22-frontend-api-endpoint/main/data.json

## Introduction

The Grand Cheese Race has been the most elite sporting event for thousands of years. Every year, each country sends one honorable representative to compete for the Double Gloucester cheese. This year, for the first time in history, all living previous victors are coming to compete for the Golden Double Gloucester cheese. Our client is organizing the Grand Cheese Race and wants to build a website to allow spectators to vote for who they think will win. They asked you to program the website for them. The specifications are listed below.

## Specifications

The skeleton code provided is in Next.js and Typescript (it's almost identical to Javascript, and you won't have trouble understanding it if you know JS). Free free to create/edit/destroy any files you want while completing this project. If you find a better solution, you should implement that instead of what is provided. If you are more comfortable in another framework, you are welcome to start a project in any other frontend framework you like. You are also welcome to use any UI component library, although Chakra UI has been used to set up most of this project. You are welcome to use NPM or Yarn when downloading dependencies. 

Use the documentation below to complete your project.

- Next.js: https://nextjs.org/
- Chakra UI: https://chakra-ui.com/
- Grand Cheese Race Figma: https://www.figma.com/file/CEX3yx0QzlfA4gmeMTlWBC/%5BFA22%5D-Frontend-Project?node-id=0%3A1

## Getting Started

1. Clone this GitHub repo into a local folder. 

2. Run in the project terminal

```
yarn
```

3. You can run your website by running

```
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Bootcamp Project

### Task One

Complete the Landing page UI in landing.tsx. Make sure to follow the [Figma](https://www.figma.com/file/CEX3yx0QzlfA4gmeMTlWBC/%5BFA22%5D-Frontend-Project?node-id=0%3A1) provided. The background image is provided in the public folder. The NavBar has already been completed for you (although you will be tweaking it in task two). 

### Task Two

Complete the NavBar navigation component in nav-bar.tsx. Clicking "home" should take you back to the home page, and clicking "voting" should take you to the voting page. Consult the Next.js documentation on how to do so.

Don't worry about victors; that is for the industry project.

### Task Three

Complete the Voting page in voting.tsx. Your task is to make a card for each previous winner (the images are given in the public folder). Each previous runner should have a default value of 0. When you click the up arrow icon or down arrow icon, the score should increment or decrement by one vote. Make sure that other values are not reset when you upvote or downvote a runner.

Feel free to create new components in the component folder and use them in this page.

## Industry Project

### Task One

Complete the Landing page UI in landing.tsx. Make sure to follow the [Figma](https://www.figma.com/file/CEX3yx0QzlfA4gmeMTlWBC/%5BFA22%5D-Frontend-Project?node-id=0%3A1) provided. The background image is provided in the public folder. The NavBar has already been completed for you (although you will be tweaking it in task two). 

### Task Two

Complete the NavBar navigation component in nav-bar.tsx. Clicking "home" should take you back to the home page, and clicking "voting" should take you to the voting page. Consult the Next.js documentation on how to do so.

### Task Three

Complete the Voting page and Victors page in voting.tsx and victors.tsx. Your task is to get data from this [API endpoint](https://raw.githubusercontent.com/web-at-berkeley/fa22-frontend-api-endpoint/main/data.json) about the images, scores, and descriptions of each runner and victor. Do not hard-code the values from that json file, and assume it may change in the future.

You should be able to map this data to create cards in the Voting page. You should also keep track of the scores in the Voting page using local state and be able to increment/decrement using your icons (without resetting the other runners' scores). 

You will need to also map the API values you get to create a list of previous winners in the Victors page that, when expanded, shows a short description.


## Submission

**Congratulations!** To submit your project, please make sure your project is in a GitHub repo that is set to private. You will be submitting your code on [Gradescope](https://www.gradescope.com/). If you do not have a Gradescope account, please create one. If you are unable to create one, please email us
immediately. The Gradescope course code is `4V22DJ`. You will see two different assignments: `Frontend Project` and `Backend Project`. _Please only submit to Frontend Technical Project._ You can ignore Backend Technical Project.

The technical project will be due by Wednesday, 9/7 at midnight. We will be unable to respond to clarification emails sent in after then. If you have any questions about the project, please let us know before then (we will be hosting technical project office hours in our club recruitment Discord, which you can join [here](https://linktr.ee/webdevatberkeley)).

Also, this page may potentially keep changing if we get some frequently asked questions, so keep this repository bookmarked and check back on it every now and then! If there are any major changes, we'll make sure to email you about those.
