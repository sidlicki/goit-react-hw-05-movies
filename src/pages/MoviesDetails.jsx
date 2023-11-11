import Cast from 'components/Cast/Cast';
import Loader from 'components/Loader/Loader';
import Reviews from 'components/Reviews/Reviews';

import { fetchMovieDetails } from 'js/api';
import { Suspense, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchDetailsSelectMovies = async () => {
      setIsLoading(true);
      try {
        const resp = await fetchMovieDetails(movieId);
        setMovieDetails(resp);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetailsSelectMovies();
  }, [movieId]);

  return (
    <>
      <div>
        <Link to={backLinkRef.current}>Go back</Link>
        {isLoading && <Loader />}
        {movieDetails && (
          <>
            <div>
              <img
                src={
                  movieDetails.poster_path
                    ? `https://image.tmdb.org/t/p/w400/${movieDetails.poster_path}`
                    : `https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png`
                }
                alt={movieDetails.title}
              />
              <ul>
                <li>
                  <h2>{movieDetails.title}</h2>
                  <p>User Score: {movieDetails.vote_average}</p>
                </li>
                <li>
                  <h3>Overview</h3>
                  <p>{movieDetails.overview}</p>
                </li>
                <li>
                  <h3>Genres</h3>
                  <p>
                    {movieDetails.genres
                      ?.map(genre => {
                        return genre.name;
                      })
                      .join(', ')}
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h4>Additional information</h4>
              <ul>
                <li>
                  <NavLink to={`cast`}>Cast</NavLink>
                </li>
                <li>
                  <NavLink to={`reviews`}>Reviews</NavLink>
                </li>
              </ul>
            </div>

            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Routes>
            </Suspense>
          </>
        )}
      </div>
    </>
  );
};
export default MoviesDetails;
