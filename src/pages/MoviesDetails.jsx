import Loader from 'components/Loader/Loader';
import css from './stylesPages/MoviesDetails.module.css';

import { fetchMovieDetails } from 'js/api';
import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';

// import Cast from 'components/Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

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
        <Link className={css.button} to={backLinkRef.current}>
          Go back
        </Link>
        {isLoading && <Loader />}
        {movieDetails && (
          <>
            <div className={css.movieWrapper}>
              <img
                className={css.image}
                src={
                  movieDetails.poster_path
                    ? `https://image.tmdb.org/t/p/w400/${movieDetails.poster_path}`
                    : `https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png`
                }
                alt={movieDetails.title}
              />
              <ul className={css.movieInfo}>
                <li className={css.infoItem}>
                  <h2 className={css.movieTitle}>{movieDetails.title}</h2>
                  <p className={css.score}>
                    User Score: {movieDetails.vote_average}
                  </p>
                </li>
                <li className={css.infoItem}>
                  <h3 className={css.subtitle}>Overview</h3>
                  <p>{movieDetails.overview}</p>
                </li>
                <li className={css.infoItem}>
                  <h3 className={css.subtitle}>Genres</h3>
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
            <div className={css.wrapperAdditional}>
              <h4 className={`${css.subtitle} ${css.subtitleAdd}`}>
                Additional information
              </h4>
              <ul className={css.buttonWrapper}>
                <li>
                  <NavLink className={css.button} to={`cast`}>
                    Cast
                  </NavLink>
                </li>
                <li>
                  <NavLink className={css.button} to={`reviews`}>
                    Reviews
                  </NavLink>
                </li>
              </ul>
              <Suspense fallback={<Loader />}>
                <Routes>
                  <Route path="cast" element={<Cast />} />
                  <Route path="reviews" element={<Reviews />} />
                </Routes>
              </Suspense>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default MoviesDetails;
