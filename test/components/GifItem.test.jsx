import { render } from '@testing-library/react'
import { GifItem } from '../../src/components'

describe('Pruebas en <GifItem />', () => {
    

    test('Debe de hacer match con el snapshot',() => {
          render( GifItem );
    })
})