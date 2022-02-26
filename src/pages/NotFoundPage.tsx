import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            NotFoundPage. Go <Link to="/">home</Link>
        </div>
    );
};

export default NotFoundPage;