import {Route, Routes } from 'react-router-dom'

import { Navbar } from '../ui'
import { PrivateRoute } from './PrivateRoute'
import { LoginPage } from '../auth'
import { HeroesRoutes } from '../heroes'

export const AppRouter = () => {
  return (
    <>
    
    <Routes>
       
        <Route path='login' element={<LoginPage/>} />

        <Route path='/*' element={
        <PrivateRoute>

        <HeroesRoutes/>

        </PrivateRoute>
        } />

       
    </Routes>
    </>
  )
}
