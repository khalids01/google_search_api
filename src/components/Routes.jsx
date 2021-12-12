import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Results from './Results';

const RoutesC = () => {
    return (
        <div className="p-4">
            <Routes>
                <Route exact path="/" element={<Navigate to="/search" />} />
                {["/search", "/images", "/news", "/videos"].map((path, key) => (
                    <Route exact path={path} element={<Results/>} key={key} />
                )
                )}
            </Routes>

            {/* <Results/> */}
        </div>
    )
}

export default RoutesC
