import React from 'react';
import GoogleSignIn from '../components/GoogleSignIn';
import FacebookSignIn from '../components/FacebookSignIn';

const signin = () => {
  return (
    <div>
      <GoogleSignIn />
      <FacebookSignIn />
    </div>
  );
};

export default signin;
