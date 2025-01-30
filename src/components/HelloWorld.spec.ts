import { describe, it, expect, beforeEach } from 'vitest'
import { cleanup, render } from '@testing-library/vue'
import { TestingLibraryAdapter } from '../lib/page-object/adapter.testing-library'
import HelloWorld from './HelloWorld.vue'
import { HelloWorldPageObject } from './HelloWorld.po'

beforeEach(cleanup);

describe('HelloWorld', () => {
  it('renders properly', async () => {
    const po = new HelloWorldPageObject(new TestingLibraryAdapter())
    const msg = 'the message we are looking for';

    render(HelloWorld, {
      props: {
        msg,
      }
    })

    expect((await po.root()).textContent).toContain(msg);
    expect((await po.getMessage()).textContent).toContain(msg);
    expect((await po.getCopy()).textContent).toContain('a project with Vite');
    expect(await po.externalLinks()).to.have.length(2);
  })
})
