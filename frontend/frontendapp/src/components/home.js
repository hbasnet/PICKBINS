import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';

const Home = () => {

    const [token, setToken, deleteToken] = useCookies(['mr-token']);

    useEffect(() => {
        console.log(token);
        if (!token['mr-token']) window.location.href = '/';
    }, [token])

    const logoutClicked = () => {
        deleteToken(['mr-token']);
    }

    return (
        <div>
            <h1>Home</h1>
            <button onClick={logoutClicked}>
                Logout
            </button>
        </div>
    );
}

export default Home;