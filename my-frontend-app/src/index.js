import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { ChakraProvider } from '@chakra-ui/react';

// Importa el componente LoginForm.js
import LoginForm from './LoginForm';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
  <React.StrictMode>
    <LoginForm />
  </React.StrictMode>
  </ChakraProvider>
);

reportWebVitals();