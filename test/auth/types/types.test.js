import { types } from "../../../src/auth/types/types";

describe('Probando types', () => {
   
    test('types.login debe ser igual a: [Auth] Login ', () => {
       expect(types.login).toEqual('[Auth] Login') 
    });

    test('types.logout debe ser igual a: [Auth] Logout ', () => {
        expect(types.logout).toEqual('[Auth] Logout') 
    });
    
});