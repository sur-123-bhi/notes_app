import { Route, Routes } from 'react-router';
import Dashboard from '../components/Dashboard';
import Home from "../components/Home";
import Login from "../components/Login";
import Signup from "../components/Signup";
import PrivateRouters from './PrivateRouters';

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route element={<PrivateRouters />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    )
}

export default Routers;
