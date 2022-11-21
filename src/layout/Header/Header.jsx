import React, { useContext, useEffect, useRef } from "react";
import "./Header.css";
import { AiOutlineShopping } from "react-icons/ai";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import {
  ProductContext,
  ProductDispath
} from "../../components/Context/ContextProvider";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";

function Header() {
  const { state } = useContext(ProductContext);
  const { dispath } = useContext(ProductDispath);
  // Get location for hide & show SearchBar Component
  const location = useLocation();
  const { pathname } = location;

  // run only if state changes and Not Mount
  const didMount = useRef(false);
  useEffect(() => {
    if (didMount.current) {
      setTimeout(() => {
        dispath({ type: "REMOVE_CLASS" });
      }, 1000);
    } else {
      didMount.current = true;
    }
  }, [dispath, state.favorites]);

  return (
    <header className="header">
     <Link to={"/"} className="logo">
          <img src="https://scontent.fhdd2-1.fna.fbcdn.net/v/t39.30808-6/278583336_141864015034604_5845328456886215350_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG5c8FV2RQzxZVoG5Im1emCXkczbd8wlaFeRzNt3zCVoaNL-OpEBOOfnzOZiNMAIQf3yK_5MeHrBhecjEiuXgg5&_nc_ohc=AIFokNmoogUAX_bBcVm&_nc_ht=scontent.fhdd2-1.fna&oh=00_AfBW9sF-jdvt7py_ug-2HdR8vgY0Ww05Nyy7gOSKr5TI7g&oe=637DC366" alt='logo' />
        </Link>
      <nav className="nav">
       

        {/* <div className="search_header">{pathname === "/" && <SearchBar />}</div> */}

        <Link to={"/"}> <h3>Home</h3> </Link>
        <Link to={"/products"}> <h3>Products</h3> </Link>
        <div className="icon_Sopping_box">
          <Link to={"/basket"} className="shoppe_icon_box">
            <AiOutlineShopping className="shop_icon" />
            {state.basket.length > 0 && (
              <span className="badge_shope">{state.basket.length}</span>
            )}
          </Link>
          <Link
            to={"/favorite"}
            className={`mark_icon_box ${state.isFavorite ? "tada" : ""}`}
          >
            <BsFillBookmarkHeartFill className="mark_icon" />
            {state.favorites.length > 0 && (
              <span className="badge_mark">{state.favorites.length}</span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
