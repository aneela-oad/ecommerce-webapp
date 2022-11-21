import React, { useContext } from "react";
import { FilterDispath } from "../../../components/Context/ContextFilter";
import "./Filter.css";

export default function Filter() {
  const { dispath } = useContext(FilterDispath);
  return (
    <div className="filter_container">
      <div className="filter_btnBox">
        <button onClick={() => dispath({ type: "ALL" })} className="filter_btn">
        ALL
        </button>
        <button
          onClick={() => dispath({ type: "Home & Kitchen" })}
          className="filter_btn"
        >
         Home & Kitchen
        </button>
        <button
          onClick={() => dispath({ type: "Health & Personal Care" })}
          className="filter_btn"
        >
         Health & Personal Care
        </button>
        <button
          onClick={() => dispath({ type: "Pet Supplies" })}
          className="filter_btn"
        >
        Pet Supplies
        </button>
        <button
          onClick={() => dispath({ type: "Tools" })}
          className="filter_btn"
        >
          Tools
        </button>
      </div>
    </div>
  );
}
