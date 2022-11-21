import { Navigate, useRoutes } from 'react-router-dom';
import Basket from './pages/Basket/Basket';
import ContextFilter from './components/Context/ContextFilter';
import ContextProvider from './components/Context/ContextProvider';
import Details from './pages/Details/Details';
import FavoritePage from './components/Favorite/FavoritePage';
import Header from './layout/Header/Header';
import Products from './pages/Products/Products';
import Home from './pages/Home/Home';



function App() {
  let router = useRoutes([
    { path: '/', element: <Home /> },

    { path: '/products', element: <Products /> },
    { path: '/:id', element: <Details /> },
    { path: '/favorite', element: <FavoritePage /> },
    { path: '/basket', element: <Basket /> },
    { path: '*', element: <Navigate to={'/'} /> },
  ])
  return (
    <ContextProvider>
      <ContextFilter>
        <Header />
        {/* <Home/> */}
    

        {router}
        
              </ContextFilter>
    </ContextProvider>
  );
}

export default App;
