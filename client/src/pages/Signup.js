import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios"
import {GiTeleport} from "react-icons/gi";


import "./signup.css"

export default function Signup() {

  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const [cnfShow, setcnfShow] = useState(false);
  const [cnfpass, setcnfpass] = useState("");
  const [data, setData] = useState({
    username: "",
    email: "",
    password: ""
  })
  const [cnf, setcnf] = useState(null);
  const [err, setErr] = useState(null)
  const [message, setMessage] = useState("")

  function handleBtn() {
    navigate("/")
  }

  function handleChange(e) {
    setMessage("")
    if (e.target.name === "username") {
      setData({
        ...data,
        username: e.target.value
      })
    }
    if (e.target.name === "email") {

      setData({
        ...data,
        email: e.target.value
      })
    }
    if (e.target.name === "password") {
      setData({
        ...data,
        password: e.target.value
      })
    }
  }

  useEffect(() => {
    if (cnfpass === data.password && cnfpass.length !== 0) {
      setcnf(true)
    }
    else if (cnfpass.length !== 0) {
      setcnf(false)
    }
  }, [cnfpass, data.password])

  async function handleFormSubmit(e) {
    e.preventDefault();

    if (cnf !== true) {
      alert("password and confirm password should be same")
      return;
    }
    if (data.username.length === 0) {

      alert("please Provide Username")
      return;
    }
    if (data.email.length === 0) {
      alert("please provide email")
      setErr(true)
      return;
    }
    if (data.email.includes("@") === false) {
      alert("Email must contain @")
      setErr(true)
      return;
    }
    else {
      setErr(false)
    }

    
      const config = {
        Headers: {
          "content-type": "application/json"
        }
      }
      await axios.post("http://localhost:8000/avi/blog/signup",data, config).then((res) => {
        if(res.data.message === "Signup successful") {
          alert("Signup successful kindly login")
          navigate("/");
        }
          
      }).catch((e) => {
        setMessage(e.response.data.message)
      })
    
  }
  


  return (
    <div className='signup_container'>
      <div className="logo">
        <h1>
        <GiTeleport/>
          Portfolio
        </h1>
      </div>
      <div className="signup_form">
        <h1>Create an Account!</h1>
        <div className="nav_btn">
          <button className='redirect bold_font' onClick={handleBtn}>Login</button>
          <button className='redirect bold_font signup_rdt' >Signup</button>
        </div>
        <form className='form_container' onSubmit={handleFormSubmit}>
          <div className="field">
            <input type="text" name="username" id="username" value={data.username} onChange={handleChange} placeholder='Enter username' />
          </div>
          <div className="field" style={err === true ? { border: "2px solid red" } : { border: "1px solid grey" }}>
            <input type="text" name="email" id="email" value={data.email} onChange={handleChange} placeholder='Enter your email' />
          </div>
          <div className="field" style={cnf === true ? { border: "2px solid green" } : null} >
            <input type={show === true ? "text" : "password"}

              name="password" id="password" value={data.password} onChange={handleChange} placeholder='Enter your password' />
            <span className="icon-span">
              <AiFillEyeInvisible style={show === false ? { display: "block" } : { display: "none" }} onClick={() => {
                setShow(true)
              }} />
              <AiFillEye style={show === true ? { display: "block" } : { display: "none" }} onClick={() => {
                setShow(false)
              }} />
            </span>
          </div>
          <div className="field" style={cnf === true ? { border: "2px solid green" } : (cnf === false ? { border: "2px solid red" } : null)}>
            <input type={cnfShow === true ? "text" : "password"}
              name="cnfPassword"
              id="cnfPassword"
              placeholder='Confirm password'
              value={cnfpass}
              onChange={(e) => setcnfpass(e.target.value)} />
            <span className="icon-span">
              <AiFillEyeInvisible style={cnfShow === false ? { display: "block" } : { display: "none" }} onClick={() => {
                setcnfShow(true)
              }} />
              <AiFillEye style={cnfShow === true ? { display: "block" } : { display: "none" }} onClick={() => {
                setcnfShow(false)
              }} />
            </span>
          </div>

          <button className='signup_btn bold_font' type='submit'>Sign Up</button>
        </form>
        <p className='err'>{message}</p>
      </div>
    </div>
  )
}
