import React, { createContext, useReducer } from "react";
import allProducts from "../../data/Data";

const initialFilterState = {
  filteredItems: [...allProducts],
  searchKey: ""
};

const filterItemsHandler = (key) => {
  const filteredItems = allProducts.filter((product) => {
    return product.category === key;
  });

  return { filteredItems };
};

const filterReduce = (state, action) => {
  switch (action.type) {
    case "SEARCH_KEYWORD":
      state.searchKey = action.payload;
      return {
        ...state
      };
    case "ALL":
      state.filteredItems = [...allProducts];
      return {
        ...state
      };
    case "Home & Kitchen":
      return {
        ...filterItemsHandler("Home & Kitchen")
      };
    case "Health & Personal Care":
      return {
        ...filterItemsHandler("Health & Personal Care")
      };
    case "Pet Supplies":
      return {
        ...filterItemsHandler("Pet Supplies")
      };
    case "Tools":
      return {
        ...filterItemsHandler("Tools")
      };
    default:
      return state;
  }
};

export const FilterContext = createContext();
export const FilterDispath = createContext();

export default function ContextFilter({ children }) {
  const [state, dispath] = useReducer(filterReduce, initialFilterState);
  return (
    <FilterContext.Provider value={{ state }}>
      <FilterDispath.Provider value={{ dispath }}>
        {children}
      </FilterDispath.Provider>
    </FilterContext.Provider>
  );
}
