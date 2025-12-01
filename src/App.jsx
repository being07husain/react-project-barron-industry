import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './PAGES/Home.jsx';
import Games from './PAGES/Games.jsx';
import Register from './PAGES/Register.jsx';
import Contact from './PAGES/Contact.jsx';
import Navbar from "./Components/Navbar.jsx";
import './App.css';
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Navbar />
        <Home />
      </>
    },
    {
      path: "/Games",
      element: <>
        <Navbar />
        <Games />
      </>
    },
    {
      path: "/Register",
      element: <>
        <Navbar />
        <Register />
      </>
    },
    {
      path: "/Contact",
      element: <>
        <Navbar />
        <Contact />
      </>
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;