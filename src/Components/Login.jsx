import React, { useState } from 'react'

const Login = () => {


const [userInfo, setUserInfo] = useState({
    name:"",
    email:"",
    password:"",
    address:"",
    phone:"",
})

const formData=(e)=>{
    const {name,value}=e.target;
    setUserInfo({...userInfo,[name]: value});
}



  return (
    <div>
             <form>
<div className="mb-3">
    <label htmlFor="exampleInputName" className="form-label"> Name</label>
    <input type="name" className="form-control" id="exampleInputname" name='name' value={userInfo.name}  onChange={formData} />
  </div>



  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={userInfo.email} onChange={formData} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>


   <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"  aria-describedby="passwordHelp" name='password' value={userInfo.password} onChange={formData} />
    <div id="passwordHelp" className="form-text">We'll never share your password with anyone else.</div>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputaddress" className="form-label"> Phone No</label>
    <input type="addresss" className="form-control" id="exampleInputaddress" name='address' value={userInfo.address} onChange={formData} />
  </div>



<div className="mb-3">
    <label htmlFor="exampleInputPhone" className="form-label"> Phone No</label>
    <input type="Phone" className="form-control" id="exampleInputPhone" name='phone' value={userInfo.phone} onChange={formData} />
  </div>




  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Accepting terms and conditions</label>
  </div>
  <button type="submit" className="btn btn-dark" >Submit</button>
</form>


    </div>
  )
}

export default Login
