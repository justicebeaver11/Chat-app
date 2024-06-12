import React from 'react';
import { BsFacebook, BsGithub, BsGoogle } from 'react-icons/bs';
import styled from 'styled-components';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { firebaseAuth } from '../utils/FirebaseConfig';
import { firebaseLoginRoute } from '../utils/APIRoutes';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SocialLoginButtons() {
    const navigate = useNavigate();
    const providers = {
    google: new GoogleAuthProvider(),
    facebook: new FacebookAuthProvider(),
    github: new GithubAuthProvider(),
  };
    const firebaseLogin = async (loginType) => {
        try {
            const provider = providers[loginType];
            const userData = await signInWithPopup(firebaseAuth, provider);
            const email = userData.user.email
        ? userData.user.email
                : userData.user.providerData[0].email;
            const { data } = await axios.post(firebaseLoginRoute, { email });
            if (data.status) {
                localStorage.setItem(
                    "chat-app-user",
                    JSON.stringify(data.user)
                );
                navigate("/");   
            } else {
                navigate("/setusername");
}
        } catch (err) {
            console.log(err);
        }

        
    };
    return (
        <Container>
            <button type='button' onClick={() => firebaseLogin("google")}>
                <BsGoogle />
            </button>
            <button type='button' onClick={() => firebaseLogin("facebook")}>
                <BsFacebook />
            </button>
            <button type='button' onClick={() => firebaseLogin("github")}>
                <BsGithub />
            </button>
      
        </Container>
    );
}

const Container = styled.div`
display: flex;
  width: 100%;
  justify-content: center;
  gap: 1rem;
  background-color: transparent;
  button {
    background-color: transparent;
    border: 0.1rem solid #4e0eff;
    font-size: 1.5rem;
    padding: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    &:hover {
      background-color: #4e0eff;
    }
  }
`;

