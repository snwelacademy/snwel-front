/* eslint-disable @typescript-eslint/no-unused-vars */

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { ParallaxProvider } from 'react-scroll-parallax';

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import PopupModal from './components/shared/PopupModal';
import CourseListPage from './pages/course/CourseListPage';
import SingleCoursePage from './pages/course/SingleCoursePage';

gsap.registerPlugin(useGSAP, Flip, ScrollTrigger, Observer, ScrollToPlugin, TextPlugin);


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path='contact' element={<ContactPage />} />
      <Route path='courses' element={<CourseListPage />} >
      </Route>
      <Route path='courses/:courseId' element={<SingleCoursePage />} />
    </Route>
  )
)

function App() {

  return (
    <>
      <ParallaxProvider>
        <PopupModal />
        <RouterProvider router={router} />
      </ParallaxProvider>
    </>
  );
}

export default App;
