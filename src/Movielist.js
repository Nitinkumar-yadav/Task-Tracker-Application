import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Movielist() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=262443cd ${id}`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.plot}</p>
      <ul>
        {movie.cast.map((actor) => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movielist;
