import React from 'react';

interface InputProps {
  type: string;
  placeholder: string;
  label: string;
  ariaLabel: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, label, ariaLabel }) => {
  return (
    <div className="mb-4">
      <label className="mb-2 ml-1 font-bold text-xs text-slate-700">{label}</label>
      <input 
        type={type} 
        className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow" 
        placeholder={placeholder} 
        aria-label={ariaLabel} 
      />
    </div>
  );
};

export default Input;
