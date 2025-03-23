import { createBrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import SignUp from './components/SignUp/SignUp';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/session/new',
        element: <SignUp />
    }
]);

export { router };