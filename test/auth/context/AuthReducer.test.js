/* 
debe retornar el estado por defecto
debe de login al llamar a el login autenticar y establecer el user
debe de logout borrar el name del usuario y el logged en false
*/

import { authReducer } from "../../../src/auth/context/AuthReducer";
import { types } from "../../../src/auth/types/types";


describe('Pruebas en AuthReducer ', () => {
    
    

    test('debe retornar el estado por defecto', () => {
     const action = {}   
     const state = authReducer( {logged:false},action )
    
     expect(state).toEqual({logged:false})

    });

    test('debe llamar a login y establecer el nuevo usuario', () => {
     const action = {
      type: types.login,
      payload: {
        name:'luis',
        id:123  
     } 
     } 
    
     const reducerState = authReducer( {}, action )
    
     expect(reducerState).toEqual({
        logged:true,
        user: action.payload
     })

    });
    test('debe desloguear al usuario', () => {
        const initialstate = {
            logged:true,
            user: {
                name:'luis',
                id:123
            }
        }
        const action = {
        type: types.logout,
        }  

     const reducerState = authReducer( initialstate, action )
     expect(reducerState.logged).toBe(false)
    });
    
    


    
});
