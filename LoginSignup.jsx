import React,{useState} from 'react'
import './LoginSignup.css';
import logo1 from "../Assets/logo1/logo1.png";

const LoginSignup = () => {

  const [state,setState]=useState("Login");
  
  const [formData,setFormData]=useState({
    username:"",
    password:"",
    email:""
  })
  const changeHandler=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})

  }
  
  
  const login = async()=>{
    console.log("Login Function Executed",formData);
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-Token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors);
    }
    
  }
  const signup = async()=>{
    console.log("Signup Function Executed",formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-Token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors);
    }
  }
  return (
    <div className='loginsignup'>
        <div className="logo">
          <img src={logo1} alt="" height={700} width={700} />
        </div>
        <div className="loginsignup-container">
            <p className='recruit'>RecruitMantra</p>
            <h1>{state}</h1>
            <div className="loginsignup-fields">
                {state==="Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' />:<></>}
                <input name='email' value={formData.email} onChange={changeHandler}  type="email" placeholder='Email' />
                <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
            </div>
            <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
            {state==="Sign Up"? <p className='loginsignup-login'>Already have an account? <span onClick={()=>{setState("Login")}}>Login Here</span></p>:
            <p className='loginsignup-login'>Create an account? <span onClick={()=>{setState("Sign Up")}}>Click Here</span></p>}
            
        </div>
      
    </div>
  )
}

export default LoginSignup

