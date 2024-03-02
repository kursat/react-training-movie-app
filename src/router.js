import { createBrowserRouter } from 'react-router-dom';
import MainPage from './routes/MainPage';
import MoviePage from './routes/MoviePage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/movie/:movieId',
        element: <MoviePage />,
    },
]);
