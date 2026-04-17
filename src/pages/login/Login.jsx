import { useState } from 'react';

import Button from '../../ui/Button';
import styled from 'styled-components';
import assets from '../../assets/assets';
import { LogIn, UserPlus } from 'lucide-react';
import { supabase } from '../../services/supabase';

const LoginContainer = styled.div`
  min-height: 100vh;

  background:
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)),
    url(${assets.bg_banner}) no-repeat center top;

  background-size: cover;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 40px;
  }
`;

const LinkSkyLogo = styled.img`
  width: max(20vw, 200px);
  filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.6));

  animation:
    slideIn 0.8s ease,
    float 3s ease-in-out infinite 0.8s;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-50px) scale(0.9);
    }
    to {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-12px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

const LoginForm = styled.form`
  background: var(--color-grey-50);
  padding: 25px 35px;
  border-radius: var(--border-radius-lg);
  display: flex;
  flex-direction: column;
  gap: 20px;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const SignUpHeading = styled.h2`
  font-weight: 500;
  text-align: center;

  b {
    color: var(--color-brand-600);
  }
`;

const FormInput = styled.input`
  padding: 8px 10px;
  margin: 0;
  border: 1px solid var(--color-grey-400);
  border-radius: var(--border-radius-sm);

  &:focus {
    outline: 2px solid var(--color-brand-600);
    outline-offset: -1px;
  }
`;

const LoginTerm = styled.div`
  display: flex;
  gap: 5px;
  font-size: 12px;
  color: var(--color-grey-500);
`;

const LoginToggle = styled.p`
  font-size: 13px;

  span {
    color: var(--color-brand-800);
    cursor: pointer;
    font-weight: bolder;
  }
`;

const LoginForgot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

function Login() {
  const [currentState, setCurrentState] = useState('signUp');

  // const [userName, setUserName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  console.log(supabase);

  return (
    <LoginContainer>
      <LinkSkyLogo src={assets.logo} alt="LinkSky-logo" />
      <LoginForm>
        <SignUpHeading>
          {currentState === 'signUp' ? 'Welcome to ' : 'Welcome back to '}
          <b>LinkSky</b>
        </SignUpHeading>
        {currentState === 'signUp' && (
          <FormInput type="text" placeholder="username" required />
        )}
        <FormInput type="email" placeholder="email" required />
        <FormInput type="password" placeholder="password" required />
        <Button>
          {currentState === 'signUp' ? (
            <>
              <UserPlus />
              Create Account
            </>
          ) : (
            <>
              <LogIn />
              Login
            </>
          )}
        </Button>
        {currentState === 'signUp' && (
          <LoginTerm>
            <input type="checkbox" />
            <p>
              I agree to the terms of use & privacy policy of <b>LinkSky</b>.
            </p>
          </LoginTerm>
        )}
        <LoginForgot>
          {currentState === 'signUp' ? (
            <LoginToggle>
              Already have an account?{' '}
              <span onClick={() => setCurrentState('login')}>Login here</span>
            </LoginToggle>
          ) : (
            <LoginToggle>
              Create an account?{' '}
              <span onClick={() => setCurrentState('signUp')}>Create one</span>
            </LoginToggle>
          )}
        </LoginForgot>
      </LoginForm>
    </LoginContainer>
  );
}

export default Login;
