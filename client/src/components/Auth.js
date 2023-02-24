import React, { useState } from 'react'

const AuthContext = React.createContext();

export function AuthProvider({children}) {
    const [token, setToken] = useState("");
    const [username, setusername] = useState("");
    const [userid, setuserid] = useState("");

    const value = {
        token: token,
        tokenValue: (value) => setToken(()=>value),
        username: username,
        setName: (name) => setusername(()=> name),
        userid: userid,
        setId: (id)=> setuserid(()=> id)
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function AuthConsumer() {
    return React.useContext(AuthContext);
}