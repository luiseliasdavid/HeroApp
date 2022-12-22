import { PrivateRoute } from "../../src/router/privateRoute";
import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth/context/AuthContext";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en <PrivateRoute/>', () => {

    const contextValue = { 
        logged:true,
         user:{name:'luis',
              id:'abc'}
        }
    /* por alguna razon localstorage.setItem = jest.fn() no funcionara.
     debe hacerse de la manera que sigue abajo*/
    Storage.prototype.setItem = jest.fn()


    test('si esta autenticado debe mostrar el children', () => {
        render(
            <AuthContext.Provider value={contextValue} >
            {/* initial entries simula el path en donde se situara */}
              <MemoryRouter initialEntries={['/marvel']}>
                <PrivateRoute>
                  <h1>Ruta privada</h1>
                </PrivateRoute>
            </MemoryRouter>
          </AuthContext.Provider>
        )
       expect(screen.getByText('Ruta privada')).toBeTruthy()
       /* comprueba que se haya llamado al local storage para setear  path */
       expect(localStorage.setItem).toHaveBeenCalledWith('lastPath','/marvel')
    });
   

});
