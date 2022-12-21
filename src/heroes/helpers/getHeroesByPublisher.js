import {heroes} from '../data/heroes'

export const getHeroesByPublisher = ({publisher}) => {
 

   
    const validPublichers = ['Marvel Comics','DC Comics']

    if(!validPublichers.includes(publisher)){
        throw new Error(`publisher ${publisher} doesnt exist`);
    }

    return heroes.filter( heroes=> heroes.publisher === publisher)
}
