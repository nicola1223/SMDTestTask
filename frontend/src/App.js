import React from "react";
import './App.css';
import {BrowserRouter, Routes, Link, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import WeatherGet from "./weather/WeatherGet";

const BaseLayout = () => {
    return (
        <div>
            <nav className={'navbar navbar-expand-lg navbar-dark bg-dark'}>
                <Link className={'navbar-brand'} to={'/'}>
                    <span className={'m-3'}>WEATHER APP</span>
                </Link>
                <button className={'navbar-toggler'} type={'button'} data-bs-toggle={'collapse'}
                        data-bs-targe={'#navbarNavAltMarkup'} aria-controls={'navbarNavAltMarkup'} aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className={'nav-item nav-link ms-auto me-auto'} to={'/'}>GET WEATHER</Link>
                        <Link className={'nav-item nav-link ms-auto me-auto'} to={'/history'}>HISTORY</Link>
                    </div>
                </div>
            </nav>
            <div className={'container-fluid'}>
                <div className={'content'}>
                    <Routes>
                        <Route path={'/'} element={<WeatherGet/>} />
                        {/*<Route path={'/history'} element={<WeatherList/>} />*/}
                    </Routes>
                </div>
            </div>
        </div>
)
}

function App() {
    return (
        <BrowserRouter>
            <BaseLayout/>
        </BrowserRouter>
    );
}

export default App;
