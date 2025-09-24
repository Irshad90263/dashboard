import { useEffect, useState } from "react"

export function Dash(){
    const [user,setUser]=useState(null);
    useEffect(()=>{
        const loginData=JSON.parse(localStorage.getItem("LoginData"));
        if(loginData){
            setUser(loginData);
        }
    },[]);
    return(
        <div>
            <h1>Dashboard</h1>
            {user?(
                <div>
                    <p><strong>Email:</strong>{user.useremail}</p>
                    <p><strong>Password:</strong>{user.userpassword}</p>
                </div>
            ):(
                <p>No user</p>
            )}
        </div>
    )
};