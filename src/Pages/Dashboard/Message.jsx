import React from 'react';
import Search from '../../Components/search';
import Sidebar from '../../Components/Sidebar';
import './style.scss';

function Message() {
    
    return (
        <div className="dashboard">
            <div className="dashboard__menu">
                <Sidebar></Sidebar>
            </div>
            <div className="dashboard__main">
                <Search />
                <h2>Mensajes</h2>
            </div>
        </div>
    )
}

export default Message
