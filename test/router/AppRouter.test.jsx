import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "../../src/router/AppRouter";

describe('Pruebas con <AppRouter', () => {
     
    const contextValue = { 
        logged:false,
    }
    const contextValue2 = { 
        logged:true,
         user:{name:'luis',
              id:'abc'}
        }
    test('debe mostrar el login si no esta autenticado', () => {
        
     render(
        <MemoryRouter initialEntries={['/marvel']}>
          <AuthContext.Provider value={contextValue} >
             <AppRouter/>
          </AuthContext.Provider>
        </MemoryRouter> 
     )
    expect(screen.getAllByText('Login').length).toBe(2)
    });
    test('debe mostrar el login si no esta autenticado', () => {
        
     render(
        <MemoryRouter initialEntries={['/marvel']}>
          <AuthContext.Provider value={contextValue2} >
             <AppRouter/>
          </AuthContext.Provider>
        </MemoryRouter> 
     )
    
    expect(screen.getByText('MarvelPage')).toBeTruthy()
    });
    
    
});