import LoginForm from './LoginForm';
import { SplitChars, Tween } from 'react-gsap';
import React from 'react';

const Login = ({setUser}) => {

  
  
  return (
    <section className={'login'}>

      <aside className={'login-container'}>
        <div className={'login-container-title'}>
          <h1 className={'text-100 text-Harry text-yellow'}>
            <Tween
              from={{ opacity: '0', scale: '0.4' }}
              to={{ opacity: '100%', scale: '1' }}
              ease="expo.out()"
              duration={6}
              stagger={0.1}
            >
              <SplitChars
                wrapper={<span style={{ display: 'inline-block' }} />}
              >
                Connexion
              </SplitChars>
            </Tween>
          </h1>
          <h1 className={'text-100 text-Harry text-yellow text-blur'}>
            <Tween
              from={{ opacity: '0', scale: '0.4' }}
              to={{ opacity: '100%', scale: '1' }}
              ease="expo.out()"
              duration={6}
              stagger={0.1}
            >
              <SplitChars
                wrapper={<span style={{ display: 'inline-block' }} />}
              >
                Connexion
              </SplitChars>
            </Tween>
          </h1>
        </div>
        <div className={'login-container-form'}>
          <LoginForm setUser={setUser}></LoginForm>
        </div>
      </aside>
    </section>
  );
};

export default Login;
