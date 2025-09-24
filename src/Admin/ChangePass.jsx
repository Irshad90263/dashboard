import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ChangePass = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) =>{
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem("signupData"))
    if(!storedData){
      // alert('No data')
      Swal.fire("Error", "No data", "error")
      return;
    }else if(loginData.email !== storedData.email){
      // alert('Email is Wrong')
      Swal.fire("Error", "Email is wrong", "error")
    }else if(loginData.password !== storedData.password){
      // alert('Password is wrong')
      Swal.fire("Error", "Password is wrong", "error")
    }
    else if( loginData.email === storedData.email && loginData.password === storedData.password ){
      // alert('login success')
      Swal.fire("Success", "Login Successfull", "success")
      navigate("/dashboard");
    }
  }
  return (
    <>hi</>
  );
};

export default ChangePass;