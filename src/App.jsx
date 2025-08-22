import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import { Button } from "@/components/ui/button"
import AppLayout from './layout/app-layout';
import LandingPage from './pages/landing';
import Onboarding from './pages/onboarding';
import MyJobs from './pages/my-jobs';
import JobListing from './pages/job-listing';
import JobPage from './pages/job';
import PostJob from './pages/post-job';
import SavedJob from './pages/saved-job';
import { ThemeProvider } from './components/theme-provider.jsx';
import ProtectedRoute from './components/protected-route.jsx';

const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element: <LandingPage/>,
      },
      {
        path:'/onboarding',
        element: (
        <ProtectedRoute>
          <Onboarding/>
        </ProtectedRoute>
        ),
      },
      {
        path:'/jobs',
        element: (
        <ProtectedRoute>
          <JobListing/>
        </ProtectedRoute>
        ),
      },
      {
        path:'/job/:id',
        element: (
        <ProtectedRoute>
          <JobPage/>
        </ProtectedRoute>
        ),
      },
      {
        path:'/post-job',
        element: (
        <ProtectedRoute>
          <PostJob/>
        </ProtectedRoute>
        ),
      },
      {
        path:'/saved-job',
        element: (
        <ProtectedRoute>
          <SavedJob/>
        </ProtectedRoute>
        ),
      },
      {
        path:'/my-jobs',
        element: (
        <ProtectedRoute>
          <MyJobs/>
        </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterProvider router={router} />;
  </ThemeProvider>
  );
}

export default App;
