import { AuthProvider } from "./auth/context/AuthProvider"
import { AppRouter } from "./router/AppRouter"


function HeroesSpa() {
  

  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

export default HeroesSpa
