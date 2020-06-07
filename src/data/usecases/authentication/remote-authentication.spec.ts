import { RemoteAuthentication } from './remote-authentication'
import { HtppPostClientSpy } from '../../test/mock-http-client'

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HtppPostClientSpy
}

const makeSut = (url: string = ''): SutTypes => {
  const httpPostClientSpy = new HtppPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = 'other_url'
    const {sut: sut, httpPostClientSpy } = makeSut
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
