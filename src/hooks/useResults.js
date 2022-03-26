import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errors, setErrors] = useState("");

  const searcAPI = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          term: searchTerm,
          location: "orlando, fl",
          limit: 25,
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrors("there was a problem completing your request");
    }
  };

  // iniitial load
  useEffect(() => {
    searcAPI("pasta");
  }, []);

  return [searcAPI, results, errors];
};
