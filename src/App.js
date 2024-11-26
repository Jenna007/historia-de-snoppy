import './App.css';
import Index from './components/Index';
import Travis from './components/Travis';
import Navbar from './components/Navbar';  // Importar el Navbar
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/Travis",
      element: <Travis />,
    },
  ]);

  return (
    <div className="h-screen bg-white font-serif">
      <Navbar /> {/* Aquí agregamos el Navbar */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
