import React from 'react';
import './Login.css';
import loginimage from '../../images/login3.jpg'
export default function Login(props) {


    return (

        <div className="popup-box">
            <div className="box">
                <button className="btn-close" onClick={props.handleClose}><i className="fa-thin fa-circle-xmark"></i></button>

                <div className="content col-md-6">
                    <br />
                    <div className="form-group">
                        <label for="">UserName</label>
                        <br />
                        <input type="text" className="form-control" name="" id="txt" aria-describedby="helpId" placeholder="UserName" />

                    </div>
                    <div class="form-group">
                        <label for="">Password</label>
                        <br />
                        <input type="password" className="form-control" name="" id="txt" placeholder="Password" />
                        <a class="fp" href="index.html">Forgot Password?</a>
                        <br />
                        <br />
                        <a className="custom-btn btn-12"><span>Go Now</span><span>Login</span></a>

                        
                        <a className="custom-btn btn-12"><span>Join us</span><span>Sign Up</span></a>

                    </div>

                </div>
                <div  className=' col-md-6'>
                    <img src={loginimage} alt='Login' className="image" />
                </div>
            </div>
        </div>


    )
}
