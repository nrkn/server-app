import { div, ul, li, span } from './'

const dom = div(
  { id: 'foo' },
  ul(
    li( span( 'Hello' ) ),
    li( span( 'World' ) )
  )
)

console.log( dom.outerHTML )
