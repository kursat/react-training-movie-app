import React from 'react';
import { useParams } from 'react-router-dom';

const GenrePage = () => {
    const params = useParams();

    return <pre>{JSON.stringify(params, null, 2)}</pre>;
};

export default GenrePage;
