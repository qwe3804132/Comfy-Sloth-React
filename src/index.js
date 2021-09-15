import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';
//dev-fz7dnbe2.us.auth0.com domain
//1NdyQgfR3bWkyGC5yCumA3JhJPZD0MeF clientID
ReactDOM.render(
  <Auth0Provider
    domain="dev-fz7dnbe2.us.auth0.com"
    clientId="1NdyQgfR3bWkyGC5yCumA3JhJPZD0MeF"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById('root')
);
