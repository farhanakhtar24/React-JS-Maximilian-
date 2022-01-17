import React, { useEffect, useState } from "react";

const AuthContext = React.createContext(
    {
        isLoggedIn: false,
        onLogout: () => { },
        onLogin: (email, password) => { },
    }
);

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setisLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');

        if (storedUserLoggedInInfo === '1') {
            setisLoggedIn(true);
        }
    }, [])

    const loginHandler = function () {
        localStorage.setItem('isLoggedIn', '1');
        setisLoggedIn(true);
    }

    const logoutHandler = function () {
        localStorage.removeItem('isLoggedIn');
        setisLoggedIn(false);
    }


    return (
        <AuthContext.Provider value={ {
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            onLogin: loginHandler,
        } }> { props.children }</AuthContext.Provider >
    );
};

export default AuthContext;