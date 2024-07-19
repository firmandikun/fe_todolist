'use client';

import React, { useState } from 'react';
import Button from '../button';
import Input from '../input';


const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted', formData);
  };

  return (
    <div className="flex flex-col w-full max-w-full px-3 mx-auto md:flex-0 shrink-0 md:w-6/12 lg:w-5/12 xl:w-4/12">
      <div className="relative flex flex-col min-w-0 mt-32 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
        <div className="p-6 pb-0 mb-0 bg-transparent border-b-0 rounded-t-2xl">
          <h3 className="relative z-10 font-bold text-transparent bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text">Create an account</h3>
          <p className="mb-0">Enter your details to sign up</p>
        </div>
        <div className="flex-auto p-6">
        <form role="form">
            <Input 
              type="text" 
              placeholder="Name" 
              label="Name" 
              ariaLabel="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <Input 
              type="email" 
              placeholder="Email" 
              label="Email" 
              ariaLabel="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input 
              type="password" 
              placeholder="Password" 
              label="Password" 
              ariaLabel="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <Input 
              type="password" 
              placeholder="Confirm Password" 
              label="Confirm Password" 
              ariaLabel="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <Button 
              text="Sign up" 
              onClick={handleSubmit}
            />
          </form>
        </div>
        <div className="p-6 px-1 pt-0 text-center bg-transparent border-t-0 border-t-solid rounded-b-2xl lg:px-2">
          <p className="mx-auto mb-6 leading-normal text-sm">
            Already have an account?
            <a href="/login" className="relative z-10 font-semibold text-transparent bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
