import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import Home from './pages/home/Home.jsx';
import Profile from './pages/profile/Profile.jsx';
import ProtectedRoute from './pages/ProtectedRoute.jsx';
import store from './store/store.js';
import { Provider } from 'react-redux';
import Reels from './components/reels/Reels.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute authentication={true}>
        <App />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/:username",
        element: <Profile />
      },
      {
        path: "/reels/",
        element: <Reels />
      }
    ]
  },
  {
    path: '/login',
    element: (
      <ProtectedRoute authentication={false}>
        <Login />
      </ProtectedRoute>
    )
  },
  {
    path: '/register',
    element: (
      <ProtectedRoute authentication={false}>
        <Register />
      </ProtectedRoute>
    )
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
