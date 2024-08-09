import React from "react";
import {  Route, Routes } from "react-router-dom";
const Password = React.lazy(() => import('../Pages/Password'));
export const UserRoute = () => {
    console.log("User route worked");
    return (
        <Routes>
            {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}
            <Route path="/" element={<Password />} />
            <Route path="*" element={<Password />} />
        </Routes>
    );
};
