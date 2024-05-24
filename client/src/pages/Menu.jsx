import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import "../pagesCss/Menu.css";
import { Outlet, useLoaderData} from 'react-router-dom';

function Menu() {
  const {productsType} = useLoaderData();
  return (
    <>
      <Navbar />
      <div className="menu__title">
        <h3 className="menu__title-item">
         Menu
        </h3>
      </div>
      
      <div className="menu__content">
        <ProductList
            products={productsType}
        />
      </div>
      <Outlet />
    </>
  );
}

export default Menu;
