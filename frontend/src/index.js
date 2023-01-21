import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { PanierContextProvider } from './context/panierContext';
import { AuthContextProvider } from './context/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <AuthContextProvider>
   <PanierContextProvider>
       <App />
    </PanierContextProvider>
    </AuthContextProvider>
   </BrowserRouter>
  </React.StrictMode>
);

