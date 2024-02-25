import './App.css';
import {Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react';

// Containers
const DefaultLayout = lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = lazy(() => import('./views/pages/login/Login'))
const Register = lazy(() => import('./views/pages/register/Register'))
const Page404 = lazy(() => import('./views/pages/page404/Page404'))
const Page500 = lazy(() => import('./views/pages/page500/Page500'))

function App() {
  return (
    <Suspense fallback={<div className="container">Loading...</div>}>
      <Routes>
        <Route exact path="/login" name="Login Page" element={<Login />} />
        <Route exact path="/register" name="Register Page" element={<Register />} />
        <Route exact path="/404" name="Page 404" element={<Page404 />} />
        <Route exact path="/500" name="Page 500" element={<Page500 />} />
        <Route path="*" name="Home" element={<DefaultLayout />} />
      </Routes>
    </Suspense>
  );
}

export default App;
