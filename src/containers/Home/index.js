import { Helmet } from "react-helmet";

import config from 'config';
import logo from './logo.svg';
import './style.css';

function Home() {
  return (
    <div className="page-home align-center">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <p>
          React Testing Library - Create React App
        </p>
        <p>
          Ambiente: <strong>{config.REACT_APP_SELF_ENV}</strong>
        </p>
      </header>
    </div>
  );
}

export default Home;