## LanguageQUIZ

[![Join the chat at https://gitter.im/andreasonny83/LanguageQUIZ](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/andreasonny83/LanguageQUIZ?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

LanguageQUIZ is an open source project based on Polymer 1.0

## Getting Started

1. Get a copy of the code.
2. Install the dependencies if you don't already have them.
3. Collaborate deploying new code to include inside the master project.

### Get the code

You can either fork the project from where you can deploy new code and send a pull request to have your code included in the LanguageQUIZ project, or download the latest version from:
[Download](https://github.com/andreasonny83/LanguageQUIZ) and extract LanguageQUIZ to where you want to work.

### Install dependencies

#### Quick-start (for experienced users)

With Node.js installed, run the following one liner from the root of your LanguageQUIZ download:

```sh
npm install -g gulp bower && npm install && bower install
```

#### Prerequisites (for everyone)

The full project requires the following major dependencies:

- Node.js, used to run JavaScript tools from the command line.
- npm, the node package manager, installed with Node.js and used to install Node.js packages.
- gulp, a Node.js-based build tool.
- bower, a Node.js-based package manager used to install front-end packages (like Polymer).

**To install dependencies:**

1)  Check your Node.js version.

```sh
node --version
```

The version should be at or above 0.12.x.

2)  If you don't have Node.js installed, or you have a lower version, go to [nodejs.org](https://nodejs.org) and click on the big green Install button.

3)  Install `gulp` and `bower` globally.

```sh
npm install -g gulp bower
```

This lets you run `gulp` and `bower` from the command line.

4)  Install the project's local `npm` and `bower` dependencies.

```sh
cd LanguageQUIZ && npm install && bower install
```

This installs the element sets and tools the LanguageQUIZ requires to build and serve apps.

### Development workflow

#### Serve / watch

```sh
gulp serve
```

This outputs an IP address you can use to locally test and another that can be used on devices connected to your network.

#### Run tests

```sh
gulp test:local
```

This runs the unit tests defined in the `app/test` directory through [web-component-tester](https://github.com/Polymer/web-component-tester).

* This is still Work in progress

#### Build & Vulcanize

```sh
gulp
```

Build and optimize the current project, ready for deployment. This includes linting as well as vulcanization, image, script, stylesheet and HTML optimization and minification.

## Contributing

LanguageQUIZ is a new project based on Polymer. We welcome your bug reports, PRs for improvements, docs and anything you think would improve the experience of the web application.
