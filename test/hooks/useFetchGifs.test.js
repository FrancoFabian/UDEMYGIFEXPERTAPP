import { renderHook,waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('pruebas en useFetchGif', () => { 
    test('Debe de regresar el esta inicial', () => {
        const { result } = renderHook(()=>
            useFetchGifs('One Punch')
        )
        const {images,isLoading} = result.current;
        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
        console.log(images);
        //useFetchGifs()
    });
    test('Debe de retornar un arreglo de imagenes y isLoading en false', async () => {
        const { result } = renderHook(()=>
            useFetchGifs('One Punch')
        )
        await waitFor(
            ()=> expect( result.current.images.length ).toBeGreaterThan(0),
            { timeout: 9000 }
        );
        const {images,isLoading} = result.current;
        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
       
    });
 })