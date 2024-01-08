import React, { useState, useEffect } from "react";

const WhatsNew = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/sample`);
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <h2>What's New</h2>
      <ul>
        {movies.map((movie: any, index: number) => (
          <li key={index}>{movie["title"]}</li> // Render each movie as a list item
        ))}
      </ul>
    </div>
  );
};

export default WhatsNew;
