import React, { useState } from "react";
import "../../styles/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Controlbar } from "../component/controlbar";
import { API_BASED_URL } from "../../../api/yelpAPI/config";
import { FeaturedCategories } from "../component/FeaturedCategories";
import { useBusinessSearch } from "../../../api/yelpAPI/useBusinessSearch";
export const Home = () => {
  const [state, setState] = useState({
    results: [],
  });

  const onSearch = (a, b) => {
    const p = a;
    // const results = await API_BASED_URL.get("/", {
    //   params: { term: a, location: b },
    // });

    const results = useBusinessSearch(a, b);
  };

  return (
    <div>
      <div className="photoBG container-fluid">
        <h1 className="header">Start the memories here.</h1>
        <h2 className="header2">Find local events happening near you</h2>
      </div>
      <Controlbar onSearch={onSearch} />
      <FeaturedCategories />
    </div>
  );
};
