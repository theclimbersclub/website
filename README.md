# Climbers Club MSO Website

Welcome to the Member Services Website for the climbers club.

[![Netlify Status](https://api.netlify.com/api/v1/badges/55aceabd-cf43-4b77-becc-cb82d5027177/deploy-status)](https://app.netlify.com/sites/theclimbers-club/deploys)

## Table of Contents

- [Prerequisites](#prerequisites)
- [Install](#install)
- [Development](#development)
- [Commands](#commands)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Prerequisites

- [GCC](https://gcc.gnu.org/install/)
- [Make](https://www.gnu.org/software/make/)
- [Ruby](https://www.ruby-lang.org/en/downloads/)
  - `>= 2.5`
- [Bridgetown Gem](https://rubygems.org/gems/bridgetown)
  - `gem install bundler bridgetown -N`
- [Node](https://nodejs.org)
  - `>= 10.13`
- [Yarn](https://yarnpkg.com)

## Install

```sh
git clone https://github.com/theclimbersclub/website website
cd website
bundle install && yarn install
```

> Learn more: [Bridgetown Getting Started Documentation](https://www.bridgetownrb.com/docs/).

## Development

To start your site in development mode, run `yarn start` and navigate to [localhost:4000](https://localhost:4000/)!

Use a [theme](https://github.com/topics/bridgetown-theme), add some [plugins](https://www.bridgetownrb.com/plugins/), and/or run some [automations](https://github.com/topics/bridgetown-automation) to get started quickly.

### Commands

```sh
# running locally
yarn start

# build & deploy to production
yarn deploy

# load the site up within a Ruby console (IRB)
bundle exec bridgetown console
```

> Learn more: [Bridgetown CLI Documentation](https://www.bridgetownrb.com/docs/command-line-usage)

## Deployment

You can deploy Bridgetown sites on "Jamstack" hosts (Netlify, Vercel, Render, etc.) or virtually any traditional web server by simply building and copying the output folder to your HTML root.

> Read the [Bridgetown Deployment Documentation](https://www.bridgetownrb.com/docs/deployment) for more information.

## Contributing

If repo is on GitHub:

1. Fork it
2. Clone the fork using `git clone` to your local development machine.
3. Create your feature branch (`git checkout -b my-new-feature`)
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin my-new-feature`)
6. Create a new Pull Request
