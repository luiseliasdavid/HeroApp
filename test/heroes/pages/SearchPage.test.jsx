import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes';

//se crea una funcion que reemplazara a useNavigate
const mockedUseNavigate = jest.fn();

//hacer un mock de la libreria completa
jest.mock('react-router-dom', () => ({
//aqui trae todo los valores originales de la libreria
...jest.requireActual('react-router-dom'),
//modifica solo useNavigate
useNavigate: () => mockedUseNavigate,
}));

describe('Puebas en <SearchPage/>', () => {

    
    beforeEach(() => jest.clearAllMocks() );
    
   test('debe de mostrarse correctamente con valores por defecto', () => {
    
    //se guarda en la constante container cuando se hace el snapshot
    const {container} = render(
        <MemoryRouter>
            <SearchPage/>
        </MemoryRouter>
     )
   // presionar  tecla 'u' para refrescar el snapshot
   expect(container).toMatchSnapshot()
   });
   test('debe de mostrars a batman y el input con el valor del queryString', () => {
    render(
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
   render(
        <MemoryRouter initialEntries={['/search?q=batman123']}>
            <SearchPage/>
        </MemoryRouter>
     )
     const noHero = screen.getByLabelText('noHero')
     expect(noHero.style._values).toEqual({})
    
   });
   
   test('debe llamar a navigate a la pantalla nueva', () => {

    const inputValue = 'superman';

    render(
        <MemoryRouter initialEntries={['/search']}>
            <SearchPage/>
        </MemoryRouter>
     )

    const input = screen.getByRole('textbox')
    fireEvent.change(input,{target: {name: 'searchText' , value: inputValue}})

    // se debio agregar la propiedad role='form' al formulario ya que jest no lo toma por su etiqueta form
    const form = screen.getByRole('form')
    fireEvent.submit(form)
    
    expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${ inputValue }`)

   }); 
   
   


});
