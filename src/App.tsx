/* eslint-disable @typescript-eslint/no-unused-vars */

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { ParallaxProvider } from 'react-scroll-parallax';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path='contact' element={<ContactPage />} />
    </Route>
  )
)

function App() {

  return (
    <>
      <ParallaxProvider>
      <RouterProvider router={router} />
      </ParallaxProvider>
    </>
  );
}

export default App;
