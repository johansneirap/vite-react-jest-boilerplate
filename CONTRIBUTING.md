
# 🤝 Contribution Guidelines

Whether it's improving documentation, adding a new component, or suggesting an
issue that will help us improve, all contributions are welcome!

Top reasons to contribute:

- 😍 Gain a sense of pride from improving the lives of your coworkers
- 🎓 It's a great opportunity to learn a new skill and understand a repo better
- ⏳ Free up time for the repo maintainers to focus on their roadmap

## What's in this document?

- [Contribution Expectations](#contribution-expectations)
- [Process for Merging a PR](#Process-for-Merging-a-PR)
- [After PR Merged](#After-PR-Merged)

## Contribution Expectations

The contributor is expected to practice the following:

- Submit a new  project management tool ID/ticket for the contribution feature request and give as much
  detail as possible
- Follow the
  [JavaScript coding conventions](https://google.github.io/styleguide/jsguide.html)
  specified by Google
- Unit and integration tests must be provided with any code changes if
  applicable
- Total code coverage must be >= 80% and this will be enforced by the build/PR
- All commits, branch names, and PR names must follow
  [semantic format](https://github.com/semantic-release/semantic-release)

The team that owns this web plugin is expected to practice the following:

- Address any incoming PRs for contributions
- Prioritize feature requests if handled by the team itself
- Support the contributor through code guidance and contributing recognition!

## Process for Merging a PR

1. Fork this repository

   ```sh
   Click the "Fork" button in the top right of the repo
   ```

1. Create a branch (use the project management tool ID and prefix with "feature/" or
   "bugfix/")

   ```sh
   git checkout -b feature/Clickkup-1234
   ```

1. Add an upstream to this main repository

   ```sh
   git remote add upstream [master repo]
   ```

1. In your terminal window, navigate into this repo using `cd`
1. Run `npm i` to install dependencies to your repo
1. Once you have dependencies installed, you can proceed to run npm run dev to start an incredible fast local development server thanks to [Vite](https://vitejs.dev/guide/).
1. Make your changes including related tests and documentation

1. Make sure you lint, format and test your changes

   ```sh
   npm run lint
   npm run test -u
   ```

1. Push your changes to your fork's branch

   ```sh
   git fetch upstream master
   git merge upstream/master
   git add .
   git commit -m "chore: commit message"
   git push origin name-of-your-branch
   ```

1. In GitHub, make a pull request (PR) to this repository that includes a filled
   description
1. Making a PR will automatically trigger a series of checks against your
   changes and generate a special PR link where you can view your changes (and
   share with others)
1. The team will reach out for more information or make suggestions
1. 🎉 Once the PR is good to go, they'll merge it in and you'll be credited as a
   contributor! Reach out to the team to follow their release cycle.

## After PR Merged

Need to get in contact with the team? The best people to start with are the
project code owners.

Reach out to the team's corresponding Team channel for more information.

Optionally, reach out to an
[owner](https://github.com/orgs/Product-Engineering-Team/people?query=role%3Aowner)
of this organization for assistance.
