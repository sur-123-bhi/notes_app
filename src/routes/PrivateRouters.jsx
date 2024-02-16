import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouters = () => {
    let auth = true;
    return (
        auth ? <Outlet /> : <Navigate to='/login' />
    )
}

export default PrivateRouters