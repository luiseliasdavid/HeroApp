import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { PublicRoutes } from "../../src/router/PublicRoutes";
import { MemoryRouter, Route, Routes } from "react-router-dom";


describe('Componente <PublicRoutesr/>', () => {
    
        
    test('si no esta autenticado debe mostrar el children', () => {
        render(
            <AuthContext.Provider value={{ logedd:false}} >
         <PublicRoutes>
            <h1>ruta publica</h1>
         </PublicRoutes>
          </AuthContext.Provider>
        )
       expect(screen.getByText('ruta publica')).toBeTruthy()
    });
   

    test('debe navegar si esta autenticado', () => {

        const contextValue = { 
            logged:true,
             user:{name:'luis',
                  id:'abc'}
            }

        render(
            <AuthContext.Provider value={contextValue} >

       {/*  en el memory router se establece la ruta a la que intentara dirigirse primero */}
             <MemoryRouter initialEntries={['/login']}>
               
                 <Routes>
                    <Route path='login' element={
                          <PublicRoutes>
                            <h1>ruta publica</h1>
                          </PublicRoutes>} />
                    <Route path='marvel' element={<h1>Pagina de Marvel</h1>} />
                 </Routes>
                            
             </MemoryRouter>
            </AuthContext.Provider>
        )
        
       expect(screen.getByText('Pagina de Marvel')).toBeTruthy()
    });
    
});