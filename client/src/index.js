import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createHashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'

const router = createHashRouter([
  {
    path: '/*',
    element: <App/>
  }
])

export const formatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
);
