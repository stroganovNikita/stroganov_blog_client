import { createBrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/session/new',
        element: <SignUp />
    },
    {
        path: '/session',
        element: <LogIn />
    }
]);

export { router };