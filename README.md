# Interview Scheduler

Scheduler is a simple single-page App that uses React that allows users to book,edit and cancel their interviews. 

I used PostgreSQL to managed the data and I used both Jest and Cypress to test it.


## How it works

When the user loads the App, he can choose a date and an hour to get an Interview with an interviewer. The user can also edit or delete their appointment.

!["create_edit"](https://github.com/MotongiM/scheduler/blob/master/public/images/App.gif)


If an error does occure while making an creating/deleting or editing an interview, they will see this error below.

!["Error"](https://github.com/MotongiM/scheduler/blob/master/public/images/Deleting_editing_Errors.gif)
## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
## Dependencies

1. axios
2. babel
3. StoryBook
4. Jest
5. Cypress
6. React
7. Prop-types
8. Classnames
9. node-sass
10. Testing Library
