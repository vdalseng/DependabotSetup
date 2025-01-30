import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from './pages/ErrorPage.tsx';
import { HomePage } from './pages/HomePage';
import { DataOverview } from './pages/DataOverview';
import App from './App.tsx';

export const routes = createBrowserRouter([
    { 
        path: "/", element: <App />,
        errorElement: <ErrorPage />, 
        children: [
            {path: "/home", element: <HomePage />},
            {path: "/data-overview", element: <DataOverview />}
        ]
    },
    { path: "*", element: <ErrorPage /> }
]);