import {  Route, Routes } from "react-router-dom";
import Password from "../Pages/Password";

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
