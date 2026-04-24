import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/ui/Layout'
import './index.css'
import { AboutPage } from './pages/AboutPage'
import { CareerDetailPage } from './pages/CareerDetailPage'
import { CareersPage } from './pages/CareersPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { NewsDetailPage } from './pages/NewsDetailPage'
import { NewsPage } from './pages/NewsPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ServiceDetailPage } from './pages/ServiceDetailPage'
import { ServicesPage } from './pages/ServicesPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'gioi-thieu', element: <AboutPage /> },
      { path: 'dich-vu', element: <ServicesPage /> },
      { path: 'dich-vu/:slug', element: <ServiceDetailPage /> },
      { path: 'du-an', element: <ProjectsPage /> },
      { path: 'du-an/:slug', element: <ProjectDetailPage /> },
      { path: 'tin-tuc', element: <NewsPage /> },
      { path: 'tin-tuc/:slug', element: <NewsDetailPage /> },
      { path: 'tuyen-dung', element: <CareersPage /> },
      { path: 'tuyen-dung/:slug', element: <CareerDetailPage /> },
      { path: 'lien-he', element: <ContactPage /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
