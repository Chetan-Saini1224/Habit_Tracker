import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import HabitBoard from './componenets/HabitBoard/HabitBoard';
import PreviouDays from './componenets/Preious_Days/PreviouDays';
import Navbar from './componenets/Navbar/Navbar';
import "./App.css";

function App() 
{      
    const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index:true, element: <HabitBoard /> },
        { path: "/preiousdays", element: <PreviouDays /> },
      ],
    },
  ]);
  return (
  <>
    <RouterProvider router={browserRouter} />
  </>
  );
}

export default App;
