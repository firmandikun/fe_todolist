'use client';

import React from 'react';
import Input from '../input';
import Button from '../button';

function LoginForm() {
  const handleSubmit = () => {
    console.log('Form submitted');
  };

  return (
    <section>
      <div className="relative flex items-center p-0 overflow-hidden bg-center bg-cover min-h-75-screen">
        <div className="container z-10">
          <div className="flex flex-wrap mt-0 -mx-3">
            <div className="flex flex-col w-full max-w-full px-3 mx-auto md:flex-0 shrink-0 md:w-6/12 lg:w-5/12 xl:w-4/12">
              <div className="relative flex flex-col min-w-0 mt-32 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                <div className="p-6 pb-0 mb-0 bg-transparent border-b-0 rounded-t-2xl">
                  <h3 className="relative z-10 font-bold text-transparent bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text">Welcome back</h3>
                  <p className="mb-0">Enter your email and password to sign in</p>
                </div>
                <div className="flex-auto p-6">
                  <form role="form">
                    <Input
                      type="email"
                      placeholder="Email"
                      label="Email"
                      ariaLabel="Email"
                    />
                    <Input
                      type="password"
                      placeholder="Password"
                      label="Password"
                      ariaLabel="Password"
                    />
                    <Button
                      text="Sign in"
                      onClick={handleSubmit}
                    />
                  </form>
                </div>
                <div className="p-6 px-1 pt-0 text-center bg-transparent border-t-0 border-t-solid rounded-b-2xl lg:px-2">
                  <p className="mx-auto mb-6 leading-normal text-sm">
                    Don't have an account?
                    <a href="../pages/sign-up.html" className="relative z-10 font-semibold text-transparent bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text">Sign up</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
