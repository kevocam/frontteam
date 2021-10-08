import React from 'react';
import './style.scss';
import errorImage from '../../assets/404.svg';

function Error404() {
    return (
        <div className="error">
            <img src={errorImage} alt="error404"/>
            <h2>Algo salió mal, <a href="/" target="_self" >lo volvemos a intentar?</a>   </h2>

        </div>
    )
}

export default Error404
