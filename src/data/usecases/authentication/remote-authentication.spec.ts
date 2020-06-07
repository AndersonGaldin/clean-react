import { RemoteAuthentication } from './remote-authentication'
import { HtppPostClientSpy } from '../../test/mock-http-client'

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = 'any_url'
    const htppPostClientSpy = new HtppPostClientSpy()
    const sut = new RemoteAuthentication(url, htppPostClientSpy)
    await sut.auth()
    expect(htppPostClientSpy.url).toBe(url)
  })
})
