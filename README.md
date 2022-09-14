
<div align="center">

# [React JS + Vite + Jest]

</div>

<div align="center">

[![eslint](https://img.shields.io/badge/Lint-ESLint-blueviolet)](https://github.com/eslint/eslint)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=shield)](https://github.com/prettier/prettier)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![husky](https://img.shields.io/badge/Git%20Hooks-Husky-lightgrey)](https://github.com/typicode/husky)
[![jest](https://img.shields.io/badge/Unit%20Testing-Jest-success)](https://github.com/facebook/jest)


</div>

## 👋 Welcome!

This is a Boilerplate repo created in the `Product-Engineering-Team` space and is
maintained by the organization's
[owners](https://github.com/orgs/Product-Engineering-Team/people?query=role%3Aowner).

[//]: # 'Usage'

## 📘 Usage

This is a Boilerplate repo created in the `Product-Engineering-Team` space.

Purpose: Follow coding standards throughout existing projects in the organization

[//]: # 'Local Development'

## 🚀 Getting Started with Local Development

1. To build this repo, you will need Node 14/16.
1. Clone this repo to your local machine via `git clone`.
1. In your terminal window, navigate into this repo using `cd`.
1. Run `npm install` to install dependencies to your repo.
1. Once you have dependencies installed, you can proceed to run
   [`npm run dev`](https://github.intuit.com/pages/UX-Infra/plugin-cli/docs/commands-overview#plugin-cli-start)
   to start an incredible fast local development server thanks to [Vite](https://vitejs.dev/guide/).

## 👀 What you need to know  
This repo includes a list of well rounded tools for local continuous integration: 
- **[Prettier](https://prettier.io/)**: code formatter that removes all original styling and ensures that all outputted code conforms to a consistent style.
- **[ESLint](https://eslint.org/)**: ESLint statically analyzes your code to quickly find problems
- **[Lint-Staged](https://github.com/okonet/lint-staged)**: Linting makes more sense when run before committing your code. So this is for lint only staged files and not the whole code base in the project
- **[Commit-lint](https://commitlint.js.org/)**: This allow our team to add more semantic meaning to your git history. This e.g. includes type, scope or breaking changes.
- **[Husky](https://typicode.github.io/husky/#/)**: This tool supports all [Git hooks](https://git-scm.com/docs/githooks), it means that you can execute whatever you want every time some git hook were triggered by you. In this case we attached :
    
    -  **pre-commit**: it will run eslint, which will find and try to fix whatever in your code that doesn't match with the style applied, including prettier if you didn't do it.
    -  **commit-msg**: it will check your commit message, either the subject and the message (body), in order to follow the rules of [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary)
    -  **pre-push**: will run unit testing via Jest, if you modify some another existing component, you will need to run tests executing an update to [snapshots](https://jestjs.io/docs/snapshot-testing) by yourself, you can achieve this running the script `npm run test -u` 


## 💻 Technologies Supported

- React
- Redux
- ESLint
- Prettier
- Husky
- Vite
- Jest
- Styled components

[//]: # 'Contributing'

## 🤝 Contributing

Eager to contribute to this repo? Check out our
[Contribution Guidelines](./CONTRIBUTING.md)!

## 🛠️ Builds, Environments, and Deployments

- Generate production Build via [Vite](https://vitejs.dev/guide/build.html) -> `npm run build`
- Alias environment for `/src` in absolute imports -> `@` eg:`@/component/foo`
- For environment variables create a `.env.example` in order to everyone can replicate in a simple way.
- Support for [Github Actions](https://github.com/features/actions), please consider to reach anyone from organization's [owners](https://github.com/orgs/Product-Engineering-Team/people?query=role%3Aowner) to check availability and team budget.



