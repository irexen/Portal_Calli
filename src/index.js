/* Librerias usadas en la aplicación */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { I18n } from 'aws-amplify';

/* Diccionario de etiquetas de Login y acceso, en Inglés y en Español */
const authScreenLabels = {
  en: {
      'Sign Up': 'Create new account',
      'Sign Up Account': 'Create a new account'
  },
  es: {
      'Sign Up': 'Crear nueva cuenta',
      'Sign In': 'Conectarse con cuenta',
      'Sign in to your account': 'Firmarse con tu cuenta',
      'Username *': 'Nombre de usuario *',
      'Password *': 'Clave *',
      'Forgot your password?': '¿Olvidaste tu clave?',
      'Reset password' : 'Reinicia tu password',
      'No account?': '¿No tienes cuenta?',
      'Create account' : 'Crear una cuenta',
      'Create a new account': 'Crear una cuenta nueva',
      'Phone Number *': 'Número de teléfono *',
      'Email Address *': 'Dirección de correo electrónico *',
      'Username': 'Nombre de usuario',
      'Password': 'Clave',
      'Email': 'Correo electrónico',
      'Enter your username': 'Captura tu ID de usuario',
      'Enter your password': 'Captura tu clave',
      'Have an account?' : '¿Tienes una cuenta?',
      'Sign in': 'Conectarse con la cuenta',
      'Create Account': 'CREAR CUENTA',
      'Sign Out': 'Salir de la aplicación'
  }
};

/* Configuración de amplify y AWS para cognito.
   También, se configuran las etiquetas para la pantalla de login y registro de usuario,
   se colocan los lenguajes de español (ES) y de inglés (EN). Se colocan los elementos 
   a renderizar
*/
Amplify.configure(awsconfig);
I18n.setLanguage('en');
I18n.setLanguage('es');
I18n.putVocabularies(authScreenLabels);

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
