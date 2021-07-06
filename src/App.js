// Librerías usadas por la aplicación
import React from "react";
import "./App.css";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Header from './Header.js'

//Función principal de la aplicación
function App() {
   return (
  <div>
    <Header />
    <br></br>
    <br></br>
    <br></br>
    <AmplifySignOut />
  </div>
  );
}

// Aplicación por default
export default withAuthenticator(App, true);

