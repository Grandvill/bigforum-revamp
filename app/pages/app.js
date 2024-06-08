import 'bootstrap/dist/css/bootstrap.min.css';
import 'flowbite/dist/flowbite.min.css';
import '../styles/globals.css'; // File CSS global Tailwind
import { BrowserRouter as Router } from 'react-router-dom';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
