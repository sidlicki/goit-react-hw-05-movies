import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { fetchMovieByName } from 'js/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import css from './stylesPages/MoviesPage.module.css';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedMovies, setSearchedMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const queryValue = searchParams.get('query');

  const [searchInputValue, setSearchInputValue] = useState(
    localStorage.getItem('searchInputValue') || ''
  );

  useEffect(() => {
    const fetchMoviesList = async () => {
      if (!queryValue) {
        setSearchInputValue('');
        return;
      }

      try {
        setIsLoading(true);

        const resp = await fetchMovieByName(queryValue);
        setSearchedMovies(resp);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesList();
  }, [queryValue]);

  const onSearch = evt => {
    evt.preventDefault();
    evt.preventDefault();
    const inputValue = evt.currentTarget.elements.searchInput.value;
    setSearchParams({ query: inputValue });
    setSearchInputValue(inputValue);
    localStorage.setItem('searchInputValue', inputValue);
  };

  return (
    <>
      <div className={css.formWrapper}>
        <form className={css.form} onSubmit={onSearch}>
          <input
            className={css.input}
            type="text"
            name="searchInput"
            required
            placeholder="Search movies..."
            value={searchInputValue}
            onChange={evt => setSearchInputValue(evt.target.value)}
          />
          <button className={css.button} type="submit">
            Search
          </button>
        </form>
      </div>
      {searchedMovies === null && <h2 className={css.title}>Try searching</h2>}
      {searchedMovies !== null && searchedMovies.length === 0 && (
        <h2 className={css.title}>No movies found</h2>
      )}
      {isLoading && <Loader />}

      {searchedMovies !== null && searchedMovies.length > 0 && (
        <MoviesList
          movies={searchedMovies}
          title={`Search result for "${queryValue}":`}
        />
      )}
    </>
  );
};
export default MoviesPage;
