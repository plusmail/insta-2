import {Navigate, Route, Routes} from 'react-router-dom';
import LoginPage from './Authority/pages/LoginPage';
import RegisterPage from './Authority/pages/RegisterPage';
import Instagram from './Main/Instagram';
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import LoginForm from "./Authority/containers/auth/LoginForm";

const ProtectedRoute = ({children}) => {
    const user = localStorage.getItem('user');
    if (!user) {
        return <Navigate to="/login" replace/>;
    }
    return children;
};

function App() {
    // const [user, setUser] = useState(null);

    return (
        <>
            <Routes>
                <Route index element={<LoginPage/>}/>
                <Route path="instagram" element={
                    <ProtectedRoute>
                        <Instagram/>
                    </ProtectedRoute>
                }/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
            </Routes>
        </>
    );
}

export default App;
