# POC of page objects with adapters

## Purpose

The purpose of this repository is to demonstrate usage of primitive [page objects](https://spyro-soft.com/developers/page-object-model-pattern-for-effective-automation-testing) with different test frameworks.

The concept includes:

- adapters for testing library, playwright, and cypress,
- page objects for ui components,
- page object for page,
- component tests written with testing library, vitest browser mode, and cypress component test,
- e2e tests written with playwright and cypress

## Setup

```sh
npm run ci
npm run build-only

# run all kind of tests defined in 'package.json'
npm run test:<...>
```
