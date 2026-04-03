import { createSlice } from '@reduxjs/toolkit'

/**
 * Este slice de autenticación maneja el estado del usuario, token y userId.
 * El estado inicial se carga desde localStorage para mantener la sesión del usuario.
 * Las acciones increment, decrement e incrementByAmount son ejemplos y deben ser reemplazadas por acciones relevantes a la autenticación (e.g., login, logout).
 */
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null,
    userId: localStorage.getItem('userId') || null,
  },
  reducers: {
    setCredencials: (state, action) => { // Esta acción se utiliza para establecer las credenciales del usuario después de un inicio de sesión exitoso.
      // Actualiza el estado con la información del usuario, el token y el userId
      state.user = action.payload.user 
      state.token = action.payload.token
      state.userId = action.payload.user.sub

      // Guardar las credenciales en localStorage para mantener la sesión del usuario incluso después de recargar la página.
      localStorage.setItem('token', action.payload.token)
      localStorage.setItem('user', JSON.stringify(action.payload.user))
      localStorage.setItem('userId', action.payload.user.sub)
    },
    logout: (state) => { // Esta acción se utiliza para cerrar sesión, limpiando el estado y eliminando las credenciales del localStorage.
        // Limpia el estado del usuario, token y userId
        state.user = null
        state.token = null
        state.userId = null

        // Eliminar las credenciales del localStorage
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('userId')

    },
  },
})

// Exportamos las acciones y el reducer para ser usados en el store y componentes.
export const { setCredencials, logout } = authSlice.actions
// El reducer se exporta por defecto para ser incluido en el store.
export default authSlice.reducer