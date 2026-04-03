import { Box, Button } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "react-oauth2-code-pkce"
import { useDispatch } from "react-redux"
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router"
import { setCredencials } from "./store/authSlice"
import ActivityForm from "./components/ActivityForm"
import ActivityList from "./components/ActivityList"
import ActivityDetail from "./components/ActivityDetail"

const ActivitiesPage = () => {
  return (
    <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
      <ActivityForm onActivitiesAdd={() => window.location.reload()} />
      <ActivityList />
    </Box>
  )
}

function App() {

  // Uso del contexto de autenticacion para acceder a la informacion del token, los datos del token, las funciones de logIn y logOut, y el estado de autenticacion del usuario. 
  // Esto permite manejar la autenticacion en toda la aplicacion y proteger las rutas que requieren autenticacion.
  const {token, tokenData, logIn, logOut, isAuthenticated} = useContext(AuthContext)

  // Uso de useDispatch para manejar acciones relacionadas con la autenticacion
  const dispatch = useDispatch(); 

  const [authReady, setAuthReady] = useState(false)

  useEffect(() => {
    if(token){
      dispatch(setCredencials({token, user: tokenData}))
      setAuthReady(true)
    }
  }, [token, tokenData, isAuthenticated])

  return (
    <Router>
      {!token  ? (
      <Button variant="contained" color="#dc004e" onClick={() => {logIn()}}>
        LOGIN
      </Button>
      ) : (
        //<div>
        //  <pre>{JSON.stringify(tokenData, null, 2)}</pre>
        //</div>
        <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
          <Routes>
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/activities/:id" element={<ActivityDetail />} />

            <Route path="/" element={token ? <Navigate to="/activities" replace /> : <div>Please log in</div>} />
          </Routes>
        </Box>
      )} 
    </Router>
  )
}

export default App
