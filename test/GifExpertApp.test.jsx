import { render,screen,fireEvent } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"
import React from "react";
describe('Pruebas en GifExpertApp', () => { 
      test('Debe de añadir una nueva categoría si no existe', () => {
         render(<GifExpertApp/>)
         const input = screen.getByRole('textbox');
         const form = screen.getByRole('form');
         // Simular la adición de una nueva categoría
         fireEvent.input(input, { target: { value: 'One Piece' } });
         fireEvent.submit(form);
          // Verificar que la nueva categoría se ha añadido
        const newCategory = screen.queryByText('One Piece');
        expect(newCategory).not.toBeNull(); 
         //expect(screen.getByText('One Piece')).toBeInTheDocument();
      });
      test('No debe añadir una categoría duplicada', () => {
        render(<GifExpertApp />);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        // Añadir la misma categoría dos veces
        fireEvent.input(input, { target: { value: 'One Punch' } });
        fireEvent.submit(form);
        fireEvent.input(input, { target: { value: 'One Punch' } });
        fireEvent.submit(form);
        
        // Verificar que la categoría no se añade dos veces
        const items = screen.getAllByText('One Punch');
        expect(items.length).toBe(1);
    });
 })