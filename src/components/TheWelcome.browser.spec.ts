/**
 * This test uses renderer's from vitest
 */

import { afterEach, describe, it, expect } from 'vitest'
import { cleanup, render } from 'vitest-browser-vue'
import TheWelcome from './TheWelcome.vue'
import { TheWelcomePo } from './TheWelcome.po'
import { VitestBrowserAdapter } from '../lib/page-object/adapter.vitest-browser'

afterEach(cleanup)

describe('TheWelcome', () => {
  it('renders properly', async () => {
    const screen = render(TheWelcome)
    const po = new TheWelcomePo(new VitestBrowserAdapter(screen))

    expect((await po.root()).element().textContent).toContain("You did it!")
    expect((await po.getHelloWorldMessage()).element().textContent).toContain("You did i")
    expect((await po.getOtherHelloWorldMessage()).element().textContent).to.contain(", though?").but.not.to.contain("You did it")
    expect((await po.getEcosystem()).element().textContent).toContain("Get off");
    expect(async () => (await po.getTooling()).element()).not.toThrowError()
    expect(async () => await po.getSupport()).not.toThrowError()
  })
})
