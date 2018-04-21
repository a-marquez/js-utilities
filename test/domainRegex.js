import test from 'ava'
import { domainRegex } from '../build/index.js'

test('domains match', (t) => {
  const fixtures = [
    ['https://dangelo.info', 'dangelo.info'],
    ['http://dee.com/dee/about', 'dee.com'],
    ['viviane.name?query=param', 'viviane.name']
  ]

  fixtures.forEach((fixture) => {
    const [url, domain] = fixture
    t.is(url.match(domainRegex)[1], domain)
  })
})
