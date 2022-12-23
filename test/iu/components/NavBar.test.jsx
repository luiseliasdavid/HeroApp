import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../src/auth/context/AuthContext';
import { Navbar } from '../../../src/ui/components/Navbar';


const mockedUseNavigate = jest.fn();

//hacer un mock de la libreria completa
jest.mock('react-router-dom', () => ({
    //aqui trae todo los valores originales de la libreria
    ...jest.requireActual('react-router-dom'),
    //modifica solo useNavigate
    useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en <NavBar>', () => {
 
    const contextValue = { 
        logged:true,
         user:{name:'luis',
              id:'abc'},
              logout: jest.fn()
        }
   
    
   test('debe de mostrar el nombre del usuario', () => {
    
     render(
            <AuthContext.Provider value={contextValue} >
              <MemoryRouter>
                <Navbar/>
            </MemoryRouter>
          </AuthContext.Provider>
        )
       
        expect(screen.getByText('luis')).toBeTruthy()
              
     })

   test('', () => {
        
     render(
            <AuthContext.Provider value={contextValue} >
              <MemoryRouter>
                <Navbar/>
            </MemoryRouter>
          </AuthContext.Provider>
        )
        
        
        const LogoutButton= screen.getByRole('button', {name:'Logout'})
       fireEvent.click(LogoutButton)

       expect(contextValue.logout).toHaveBeenCalled()
       expect( mockedUseNavigate ).toHaveBeenCalledWith('/login', {"replace": true})
     })
   


    
   



});