import React from 'react';
import { NavLink } from 'react-router-dom';

const MainPage = () => {
    return (
        <div>
            Main Page
            <nav>
                <NavLink to={'/movie/id1'}>Movie 1</NavLink>
                <NavLink to={'/movie/id2'}>Movie 2</NavLink>
            </nav>
        </div>
    );
};

export default MainPage;
