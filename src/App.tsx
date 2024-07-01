/* eslint-disable @typescript-eslint/no-unused-vars */

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Toaster } from "@/components/ui/toaster"
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

import PopupModal from './components/shared/PopupModal';
import AdminLayout from './pages/admin/admin-layout';
import { AuthProvider } from './components/auth/AuthProvider';


import React from 'react';
import JobVacancyListPage from './pages/job-vacancies';
import SingleJobPage from './pages/job-vacancies/SingJobPage';
import MasterPage from './pages/admin/master/master-list';
import CreateNewMasterPage from './pages/admin/master/new-master';
const CourseEnrollemntOtp = React.lazy(() => import('./pages/course-enrollment-otp'));
const CreateNewWidgetPage = React.lazy(() => import('./pages/admin/widgets/createWidget'));
const GeneralEnquiryPage = React.lazy(() => import('./pages/admin/enquiry/general-enquiry'));
const WebinarEnquiryPage = React.lazy(() => import('./pages/admin/webinar/webinar-enquiry'));
const JobVacancyPage = React.lazy(() => import('./pages/admin/job-vacancy/job-vacancy-list'));
const CreateNewJobVacancyPage = React.lazy(() => import('./pages/admin/job-vacancy/create-job-vacancy'));
const JobCategoryPage = React.lazy(() => import('./pages/admin/job-category/job-category-list'));
const CreateNewJobCategoryPage = React.lazy(() => import('./pages/admin/job-category/create-job-category'));
const UpdateJobVacancyPage = React.lazy(() => import('./pages/admin/job-vacancy/update-job-vacancy'));
const UpdateJobCategoryPage = React.lazy(() => import('./pages/admin/job-category/update-job-category'));

const HomePage = React.lazy(() => import("./pages/HomePage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const CourseListPage = React.lazy(() => import("./pages/course/CourseListPage"));
const SingleCoursePage = React.lazy(() => import("./pages/course/SingleCoursePage"));
const BloglistingPage = React.lazy(() => import("./pages/blog/BloglistingPage"));
const SingleBlogPage = React.lazy(() => import("./pages/blog/SingleBlogPage"));
const WebinarListingPage = React.lazy(() => import("./pages/webinar/WebinarListingPage"));
const SingleWebinarPage = React.lazy(() => import("./pages/webinar/SingleWebinarPage"));
const LoginPage = React.lazy(() => import("./pages/auth/login"));
const Dashboard = React.lazy(() => import("./pages/admin/components/DashBoard"));
const CoursePage = React.lazy(() => import("./pages/admin/course/coursePage"));
const CourseQueryPage = React.lazy(() => import("./pages/admin/course/courseQueryPage"));
const MutateCoursePage = React.lazy(() => import("./pages/admin/course/MutateCoursePage"));
const CreateNewCoursePage = React.lazy(() => import("./pages/admin/course/createCoursePage"));
const WebinarPage = React.lazy(() => import("./pages/admin/webinar/webinarPage"));
const CreateNewWebinarPage = React.lazy(() => import("./pages/admin/webinar/createWebinarPage"));
const UpdateWebinarPage = React.lazy(() => import("./pages/admin/webinar/updateWebinarPage"));
const CourseCategoryPage = React.lazy(() => import("./pages/admin/course-category/courseCategory"));
const Settings = React.lazy(() => import("./pages/admin/settings"));
const Widgets = React.lazy(() => import("./pages/admin/widgets"));



const queryClient = new QueryClient()


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />} >
        <Route index  element={<HomePage/>} />
        <Route path="about" element={<AboutPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='courses' element={<CourseListPage />} />
        <Route path='courses/:slug' element={<SingleCoursePage />} />
        <Route path='blogs' element={<BloglistingPage />} />
        <Route path='blogs/:slug' element={<SingleBlogPage />} />
        <Route path='webinars' element={<WebinarListingPage />} />
        <Route path='webinars/:slug' element={<SingleWebinarPage />} />
        <Route path='enrollment/verify-otp/:token' element={<CourseEnrollemntOtp />} />
        <Route path='job-vacancies' element={<JobVacancyListPage />} />
        <Route path='job-vacancies/:slug' element={<SingleJobPage />} />
      </Route>
      <Route path='login/' element={<LoginPage />} />
      <Route path='admin' element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="courses" element={<CoursePage />} />
        <Route path="course/new" element={<CreateNewCoursePage />} />
        <Route path="courses/:id" element={<MutateCoursePage />}  />
        <Route path="course-category" element={<CourseCategoryPage />} />
        <Route path="course-queries" element={<CourseQueryPage />} />
        <Route path="webinars" element={<WebinarPage />} />
        <Route path="webinars/:id" element={<UpdateWebinarPage />} />
        <Route path="webinar/new" element={<CreateNewWebinarPage />} />
        <Route path="webinar-queries" element={<WebinarEnquiryPage />} />
        <Route path="widgets" element={<Widgets />} />
        <Route path="widget/new" element={<CreateNewWidgetPage />} />
        <Route path="general-enquiry" element={<GeneralEnquiryPage />} />
        <Route path="job-vacancies" element={<JobVacancyPage />} />
        <Route path="job-vacancies/new" element={<CreateNewJobVacancyPage />} />
        <Route path="job-vacancies/:id" element={<UpdateJobVacancyPage />} />
        <Route path="job-category" element={<JobCategoryPage />} />
        <Route path="job-category/new" element={<CreateNewJobCategoryPage />} />
        <Route path="job-category/:id" element={<UpdateJobCategoryPage />} />
        <Route path="masters/" element={<MasterPage />} />
        <Route path="masters/new" element={<CreateNewMasterPage/>} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* <AdminRoute path="/admin" element={Dashboard}/> */}
    </>
  )
)

function App() {

  return (
    <>
     <QueryClientProvider client={queryClient}>
     <AuthProvider>
        <ParallaxProvider>
          <PopupModal />
          <RouterProvider router={router}/>
        </ParallaxProvider>
      </AuthProvider>
     </QueryClientProvider>
     <Toaster/>
    </>
  );
}

export default App;
