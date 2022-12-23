import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes';


describe('Puebas en <SearchPage/>', () => {
    
   test('debe de mostrarse correctamente con valores por defecto', () => {
    
    const {container} = render(
        <MemoryRouter>
            <SearchPage/>
        </MemoryRouter>
     )

   //expect(container).toMatchSnapshot()
   });
   test('debe de mostrars a batman y el input con el valor del queryString', () => {
    
    const {container} = render(
        <MemoryRouter initialEntries={['/search?q=batman']}>
            <SearchPage/>
        </MemoryRouter>
     )

    
    const input = screen.getByRole('textbox');
    expect( input.value ).toBe('batman');

    const img = screen.getByRole('img');
    expect(img.src).toContain('heroes/dc-batman.jpg')

    const searchAHero = screen.getByLabelText('searchAHero')
    expect(searchAHero.style.display).toBe('none')
    //expect(searchAHero.style).toContain("display: none;") 
   });

   test('debe mostrar error si no se encuentra el hero (batman123)', () => {
    const {container} = render(
        <MemoryRouter initialEntries={['/search?q=batman123']}>
            <SearchPage/>
        </MemoryRouter>
     )
     const noHero = screen.getByLabelText('noHero')
     expect(noHero.style._values).toEqual({})
    //expect(searchAHero.style._values).toBeFalsy()

   });
   
   


});
