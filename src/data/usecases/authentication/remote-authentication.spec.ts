import { RemoteAuthentication } from './remote-authentication'
import { HttpPostClient } from 'data/protocols/http/http-post-client'

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    class HtppPostClientSpy implements HttpPostClient {
      url?: string

      async post (url: string): Promise<void> {
        this.url = url
        return Promise.resolve()
      }
    }
    const url = 'any_url'
    const htppPostClientSpy = new HtppPostClientSpy()
    const sut = new RemoteAuthentication(url, htppPostClientSpy)
    await sut.auth()
    expect(htppPostClientSpy.url).toBe(url)
  })
})
