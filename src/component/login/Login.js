import React,{useState} from 'react';
import './Login.css';
import {Link,useNavigate} from "react-router-dom";
import axios from 'axios';
import {useCookies} from 'react-cookie';

const Login = () => {
    const [inputId,setInputId] = useState();
    const [inputPw,setInputPW] = useState();
    const [user,setUser] = useState();
    const [cookies,setCookie,getCookie] = useCookies();
    const navigate = useNavigate();
    const handleInputId = (e) => {
        setInputId(e.target.value);
    }
    const handleInputPw = (e) => {
        setInputPW(e.target.value);
    }

    return (
        <div className="loginBody">
            <div className="loginBody2">
                <div className="loginForm">
                    <h1 className="header">로그인</h1>
                    <label className="loginLabel">ID</label>
                    <input className="loginInput"
                           type = "id"
                           placeholder="아이디를 입력하세요"
                           onChange={handleInputId}
                           maxLength="10"
                    />
                    <label className="loginLabel">
                        Password</label>
                    <input className="loginInput"
                           type = "password"
                           placeholder="비밀번호를 입력하세요"
                           onChange={handleInputPw}
                           maxLength="10"
                    />
                    <p className="goJoin" onClick={() => {
                        navigate('/join');
                    }}>회원이 아니신가요?</p>
                    <button className = "loginBtn" onClick={ async () => {
                        await axios.put('http://localhost:8080/api/player/login',{
                            data:{
                                "username":inputId,
                                "password":inputPw
                            }
                        },).then((res) => {
                            console.log('로그인 정보 전송');
                            setUser(res.data);
                            setCookie('playerId',res.data.data.id);
                            if((res.data.data.username===inputId)&&(res.data.data.password===inputPw)) {
                                alert('로그인 완료');
                                navigate('/game');
                            }
                            else
                                alert('아이디와 비밀번호를 다시 입력해주세요');
                        });
                    }}>로그인</button>
                </div>
            </div>

        </div>
    );
};

export default Login;
