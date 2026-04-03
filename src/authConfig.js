/**
 * Configuracion de autenticacion para la aplicacion, utilizando el flujo de PKCE con Keycloak como proveedor de identidad.
 * Incluye los endpoints de autorizacion y token, el clientId registrado en Keycloak, el redirectUri para la aplicacion,
 * los scopes necesarios para obtener la informacion del usuario y la funcion onRefreshTokenExpire para manejar la expiracion del token de refresco.
 */
export const authConfig = {
    clientId: 'oauth2-pkce-client',
    authorizationEndpoint: 'http://localhost:8181/realms/fitness-oauth2/protocol/openid-connect/auth',
    tokenEndpoint: 'http://localhost:8181/realms/fitness-oauth2/protocol/openid-connect/token',
    redirectUri: 'http://localhost:5173',
    scope: 'openid profile email offline_access',
    onRefreshTokenExpire: (event) => event.logIn(),
}