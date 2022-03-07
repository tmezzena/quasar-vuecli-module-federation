# Quasar Module Federation

## Notes

Proof of concept to use Quasar and vue-cli with webpack 5 module federation

- Tested some concepts on federation like:
  - shared quasar package
    - layout
    - notification plugin
  - component injected from module
  - page injected from module
  - menu injected from module
  - route injected from module
  - i18n messages injected from module
  - debug host and module

I couldn't use quasar-cli with webpack 5 module federation - maybe because we can't use main.js bootstrap; I tried to force load remoteEntry.js on head tag but it doesn't work.

I tried to use vite with federation plugin. It worked but it is very difficult to move ahead because we can't develop on debug mode - It only works on build.

### How to see and debug

- install [node](https://nodejs.org/en/download/), [yarn](https://classic.yarnpkg.com/lang/en/docs/install/) and [vue-cli](https://cli.vuejs.org/guide/installation.html)

- on app1 folder

  ```
  yarn
  yarn serve
  ```

- on host folder

  ```
  yarn
  yarn serve
  ```

- on browser http://localhost:3000/ or http://localhost:3001/
