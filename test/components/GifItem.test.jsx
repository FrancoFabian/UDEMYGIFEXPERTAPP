import { render,screen } from '@testing-library/react'
import { GifItem } from '../../src/components'
import React from 'react'
describe('Pruebas en <GifItem />', () => {
    const title = "One Punch";
    const url = 'http://one-punch.com/saitma.jpg';
    test('Debe de hacer match con el snapshot',() => {
          const { container } = render( <GifItem title={ title } url={ url }/> );
          expect( container ).toMatchSnapshot();
        })

    test('debe mostrar la imagen con la url inidicad', () => {
        render(<GifItem title={ title } url={ url }/>);
        //expect( screen.getByRole('img').src).toBe(url);
        const {src, alt} = screen.getByRole('img')
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
    });
    test('Debe mostrar el titulo en el componente', () => {
        render(<GifItem title={ title } url={ url }/>);
        expect( screen.getByText( title )).toBeTruthy()
    });
})