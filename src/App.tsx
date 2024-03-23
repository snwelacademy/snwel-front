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
import BloglistingPage from './pages/blog/BloglistingPage';
import SingleBlogPage from './pages/blog/SingleBlogPage';
import WebinarListingPage from './pages/webinar/WebinarListingPage';
import SingleWebinar from './components/webinar/SingleWebinar';
import SingleWebinarPage from './pages/webinar/SingleWebinarPage';

gsap.registerPlugin(useGSAP, Flip, ScrollTrigger, Observer, ScrollToPlugin, TextPlugin);


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path='contact' element={<ContactPage />} />
      <Route path='courses/:courseId' element={<SingleCoursePage />} />
      <Route path='courses' element={<CourseListPage />} />
      <Route path='blogs' element={<BloglistingPage />} />
      <Route path='blogs/:slug' element={<SingleBlogPage />} />
      <Route path='webinars' element={<WebinarListingPage />} />
      <Route path='webinars/:slug' element={<SingleWebinarPage />} />
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
