import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';

const MoviesList = ({ movies, title }) => {
  const location = useLocation();

  return (
    <div>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.list}>
        {movies.map(movie => {
          return (
            <li className={css.item} key={movie.id}>
              <Link
                className={css.itemLink}
                to={`/movies/${movie.id}`}
                state={{ from: location }}
              >
                <img
                  className={css.image}
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                      : 'https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png'
                  }
                  alt={movie.title}
                />
                <h3 className={css.movieName}>{movie.title}</h3>
                {movie.release_date && (
                  <h4 className={css.movieRealeseDate}>{movie.release_date}</h4>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MoviesList;
