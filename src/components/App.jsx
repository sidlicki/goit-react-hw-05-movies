import Layout from 'components/Layout/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import MoviesDetails from 'pages/MoviesDetails';

import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Reviews />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
};
