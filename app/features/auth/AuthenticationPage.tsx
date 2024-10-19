import { useActionData, Form, useSearchParams, Link } from '@remix-run/react';
import type { ActionFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import AuthForm from './components/AuthForm';
import { useState } from 'react';
import React from 'react';

export const action: ActionFunction = async ({ request }) => {
    console.log("changeAuthMode")

  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  const confirmPassword = formData.get('confirmPassword');
  const isLogin = formData.get('isLogin') === 'true';

  // Perform some basic validation
  if (typeof email !== 'string' || typeof password !== 'string') {
    return json({ error: 'Invalid form submission' }, { status: 400 });
  }

  if (!isLogin && password !== confirmPassword) {
    return json({ error: 'Passwords do not match' }, { status: 400 });
  }

  try {
    // Here you would typically call your authentication API
    // For example:
    // if (isLogin) {
    //   await authenticator.authenticate('user-pass', request, {
    //     successRedirect: '/dashboard',
    //     failureRedirect: '/login',
    //   });
    // } else {
    //   // Handle signup
    //   await createUser(email, password);
    //   // Then log them in...
    // }

    // For now, we'll just simulate a successful login/signup
    return json({ success: true });
  } catch (error) {
    return json({ error: 'Authentication failed' }, { status: 401 });
  }
};

export default function AuthenticationPage() {
  const [isLogin, setIsLogin] = React.useState(false);
  const actionData = useActionData();

  

  function changeAuthMode(log){
    console.log("changeAuthMode")

    console.log(log)
    // setIsLogin(!isLogin)
  }
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {isLogin ? 'Sign in to your account' : 'Create a new account'}
        </h2>
      </div>

      <AuthForm isLogin={isLogin} setIsLogin={changeAuthMode}/>
   
      
    </div>
  );
}
