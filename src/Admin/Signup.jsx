import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Signup(){

    const navigate=useNavigate();
    
    const [sigunp,setlogin]=useState({username:"",useremail:"",userpassword:""});
    
    const handelLogin=(e)=>{
        setlogin({...sigunp,[e.target.name]:e.target.value});
    }

    const handelSubmit=(e)=>{
        e.preventDefault();
        if(!sigunp.username || !sigunp.useremail || !sigunp.userpassword){
            alert("please fill all deatils");
        }
        else{
            localStorage.setItem("loginData", JSON.stringify(sigunp));
            console.log(sigunp);
            setlogin({username:"",useremail:"",userpassword:""});
            alert("Login Succes");
            navigate("/login");
        }
    }

    return(
        <>
        <div className="main-container">
            <form>
                <span>First Name</span>  <span>First Name</span> <br />
                <input className="inp50" type="text" name="username" onChange={handelLogin} />
                <input className="inp50" type="text" /> <br /><br />
                <label>Email Address</label> <br />
                <input type="email" name="useremail" onChange={handelLogin}/> <br /><br />
                <label>Password</label> <br />
                <input type="password" name="userpassword" onChange={handelLogin} /> <br /><br />
                <label>Confirm Password</label> <br />
                <input type="password" name="Cpass" /><br /><br />
                <input className="check" type="checkbox" /> I agree to the Terms and Conditions. <br /><br />
                <button className="CAcc" onClick={handelSubmit}>Create Account</button> <br /><br />
                <div className="center">Already have an account? <button>Signin</button> <br /><br /><br /></div>
                <div className="foot"><p>or Signup with</p>
                <button>Google</button><button>Facebook</button><button>Twitter</button></div>
            </form>
        </div>
        </>
    );
};