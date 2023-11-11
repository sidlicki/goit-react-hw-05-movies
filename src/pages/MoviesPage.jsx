import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { fetchMovieByName } from 'js/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedMovies, setSearchedMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const queryValue = searchParams.get('query');

  useEffect(() => {
    const fetchMoviesList = async () => {
      if (!queryValue) return;

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
    setSearchParams({ query: evt.currentTarget.elements.searchInput.value });
  };

  return (
    <>
      <div>
        <form onSubmit={onSearch}>
          <input
            type="text"
            name="searchInput"
            required
            placeholder="Search movies..."
          />
          <button type="submit">Search</button>
        </form>
      </div>
      {isLoading && <Loader />}
      {searchedMovies === null && <h2>Try searching</h2>}
      {searchedMovies !== null && searchedMovies.length === 0 && (
        <h2>No movies found</h2>
      )}
      {searchedMovies !== null && searchedMovies.length > 0 && (
        <MoviesList movies={searchedMovies} title={'Search result:'} />
      )}
    </>
  );
};
export default MoviesPage;
