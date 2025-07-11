import { createBrowserRouter, RouterProvider } from "react-router-dom"

import About from "./Pages/About"
import Layout from "./components/layout"
import Home from "./Pages/Home"
import Service from "./Pages/Services"
import Specilist from "./Pages/Specilist"
import Privacy from "./Pages/Privacy"
import Term from "./Pages/Term"
import Blog from "./Pages/Blog"
import Contact from "./Pages/Contact"
import Billing from "./Pages/Billing"
import Coding from "./Pages/Coding"
import Credentialing from "./Pages/Credention"
import NotFound from "./Pages/NotFound"
// import ScrollToTop from "./ScrollToTop";

function App() {

  const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />, 
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "services",
          element: <Service />
        },
        {
          path: "specialties",
          element: <Specilist />
        },
        {
          path: "privacy-policy",
          element: <Privacy />
        },
        {
          path: "terms-conditions",
          element: <Term />
        },
        {
          path: "blog",
          element: <Blog />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "medical-billing",
          element: <Billing />  
        },
        {
          path: "medical-coding",
          element: <Coding />  
        },
        {
          path: "medical-credentialing",
          element: <Credentialing />  
        },
        {
          path: "*",
          element: <NotFound />
        }


      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
