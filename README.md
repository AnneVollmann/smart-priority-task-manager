# Smart Priority Task Manager

A small web application to manage tasks with a priority score based on complexity and priority level. Tasks can be marked as completed, deleted, and persist between page reloads. Built as a coding challenge using Next.js, TypeScript, and Material UI, with automated Playwright E2E tests.

## Features

- Add tasks with a name, complexity (1-5), and priority (Low, Medium, High)
- Automatic priority score calculation: complexity * priority factor (Low = 1, Medium = 2, High = 3)
- Mark tasks as completed or delete them
- High-priority tasks (score >10) are visually highlighted
- Tasks persist in localStorage
- Responsive Material UI interface

## Tech Stack

- Next.js (App Router)
- TypeScript
- Material UI (MUI)
- Playwright (End-to-End tests)

## Getting Started

- Install dependencies
    `npm install`
    or
    `yarn install`
    or
    `pnpm install`
- Run development server
    `npm run dev`
- Open [http://localhost:3000] in your browser. The page auto-updates as you edit files.

## Running Tests

The project uses Playwright for automated E2E tests. Make sure the development server is running before running tests.
`npx playwright test`

## Test coverage

- Add Task: Check that a new task can be created and appears in the list
- Priority Score: Verify that the score is correctly calculated and displayed
- Persistence: Ensure that tasks remain in the list after a page reload