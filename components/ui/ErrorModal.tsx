"use client";

import React from "react";

interface IErrorProps {
  title: string;
  text: string;
  retry?: string;
}
const ErrorModal = ({ title, text, retry }: IErrorProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-red-50 rounded-xl shadow-md max-w-md mx-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-red-500 mb-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M8.257 3.099c.763-1.36 2.683-1.36 3.446 0l6.518 11.624c.75 1.338-.213 2.997-1.723 2.997H3.462c-1.51 0-2.473-1.659-1.723-2.997L8.257 3.1zM11 14a1 1 0 10-2 0 1 1 0 002 0zm-.25-6a.75.75 0 00-1.5 0v4a.75.75 0 001.5 0V8z"
          clipRule="evenodd"
        />
      </svg>
      <h2 className="text-2xl font-semibold text-red-600">{title}</h2>
      <p className="text-gray-700 mt-2 text-center">{text}</p>
      <button
        onClick={() => window.location.reload()}
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700 transition duration-300"
      >
        {retry}
      </button>
    </div>
  );
};

export default ErrorModal;
