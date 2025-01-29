import { afterEach, describe, it, expect } from 'vitest'
import { cleanup, render } from '@testing-library/vue'
import { TestingLibraryAdapter } from '../lib/page-object/adapter.testing-library'
import TheWelcome from './TheWelcome.vue'
import { TheWelcomePo } from './TheWelcome.po'

afterEach(cleanup)

describe('TheWelcome', () => {
  it('renders properly', async () => {
    const po = new TheWelcomePo(new TestingLibraryAdapter())

    render(TheWelcome)

    expect((await po.root()).textContent).toContain("You did it!")
    expect((await po.getHelloWorldMessage()).textContent).toContain("You did i")
    expect((await po.getOtherHelloWorldMessage()).textContent).to.contain(", though?").but.not.to.contain("You did it")
    expect((await po.getEcosystem()).textContent).toContain("Get off");
    expect(async () => await po.getTooling()).not.toThrowError()
    expect(async () => await po.getSupport()).not.toThrowError()
  })
})
