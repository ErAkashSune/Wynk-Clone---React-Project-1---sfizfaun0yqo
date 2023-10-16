import React, { useState , useContext, useEffect } from 'react';
import SignUp from './Signup';
import UserContext from '../components/UserContext';
import {Link, useNavigate} from "react-router-dom";
import "./login.css";

const Login = () => {

    const [excess , setExcess] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [page, setPage] = useState(true);
    const navigate = useNavigate()
  
     const { isLogin,setAuthrise } = useContext(UserContext);
     const { user,setUserName } = useContext(UserContext);
     

    let headersList = {
        projectId: "sfizfaun0yqo",
        "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
        email: email,
        password: password,
        appType: 'music',
    });

    const getLoginData = async() =>{
        try{
        const data = await fetch(
            "https://academics.newtonschool.co/api/v1/user/login" ,
            {
              method: "POST",
              body: bodyContent,
              headers: headersList,
            }
          );
          const json = await data.json();
        //   console.log(json.data);
          setExcess(json.status);
          setUserName(json.data.name);
          if(json?.data?.name){
            navigate('/')
          }
        }catch(error) {
                console.log(error);
        }
    }
    useEffect(()=>{
        if(excess === "success"){
            setAuthrise(true);
        }
    },[excess])

    function handleSignIn() {
        getLoginData()
        // console.log(email, password);
    }


    return !page ? (
        <SignUp />
    ) : (
        <div className="container">
           
                        
             
                   

                    <p className="title">
                        Welcome to wynk
                    </p>
                    <p className="title2">
                        Login with your email address.
                    </p>

                    <div>
                        <h1 className="LoginHeading">Login</h1>
                        <form onClick={(e) => e.preventDefault()} className="LoginForm">
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Email"
                                className="EmailBox"
                            />
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Password"
                                className="PasswordBox"
                            />
                            <button
                                onClick={handleSignIn}
                                type="submit"
                                className="submitButton"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                    <h1 className="Information">
                        Use "akashsune@gmail.com" as Email & "12345678"Password{" "}
                    </h1>
               


                        <h1 className='signup'>
                            SignUp for create Account
                        </h1>

                        <button
                            onClick={() => setPage(false)}
                            className="signupButton"
                        >
                            SignUp
                        </button>
           
        </div>
    );
};

export default Login;
