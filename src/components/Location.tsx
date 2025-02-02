import React from 'react';
import { LocationComponent } from '@/types/api';


const Location = (Component: LocationComponent) => {
    return (
        <section className="localization">
            <h1>{Component.Title}</h1>
        </section>
    );
};

export default Location;
