import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./login.css"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import {GiTeleport} from "react-icons/gi";
import axios from 'axios';
import { AuthConsumer } from '../components/Auth';


export default function Login() {

  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState("")

  const value = AuthConsumer();



  function handleBtn() {
    navigate("/signup")
  }

  function handelSubmit(e) {
    e.preventDefault()

    const config = {
      Headers: {
        "content-type:": "application/json"
      }
    }
    axios.post("http://localhost:8000/avi/blog/login",data, config).then((res)=> {
      if(res.data.token !== undefined && res.data.message === "Login successful") {
        value.tokenValue(res.data.token)
        value.setName(res.data.user.username)
        value.setId(res.data.user._id)
        navigate("/home")
      }
    }).catch((e) => {
      setError(e.response.data.message)
    })
  }

  return (
    <div className='login_container'>
      <div className="logo">
        <h1>
        <GiTeleport/>
          Portfolio
        </h1>
        
      </div>
      <div className="login_form">
        <h1>Welcome back! please enter your details</h1>
        <div className="nav_btn">
          <button className='redirect bold_font login_rdt'>Login</button>
          <button className='redirect bold_font' onClick={handleBtn} >Signup</button>
        </div>
        <form className='form_container' onSubmit={handelSubmit}>
          <div className="field">
            <input type="text" name="email" id="email" placeholder='Enter your email' value={data.email} onChange={(e) => {
              setError('')
              setData({
                ...data,
                email: e.target.value
              })
            }} />
          </div>
          <div className="field">
            <input type={show === true ? "text" : "password"} name="password" id="password" value={data.password} placeholder='Enter your password' onChange={(e) => {
              setError("")
              setData({
                ...data,
                password: e.target.value
              })
            }} />
            <span className="icon-span">
              <AiFillEyeInvisible style={show === false ? { display: "block" } : { display: "none" }} onClick={() => {
                setShow(true)
              }} />
              <AiFillEye style={show === true ? { display: "block" } : { display: "none" }} onClick={() => {
                setShow(false)
              }} />
            </span>
          </div>

          <button className='login_btn bold_font' type='submit'>Login</button>

          <div className="redirect_signup">
            Not a member? <Link to="/signup" className='rdt'>signup now</Link>
          </div>
        </form>
      <p className='err'>{error}</p>
      </div>

    </div>
  )
}
