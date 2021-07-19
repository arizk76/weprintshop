import React from 'react';
import { GoogleLogin } from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
};

const GoogleSignIn = () => {
  return (
    <div>
      <GoogleLogin
        clientId='996420443922-hf1h01bikatskio6f48k4midrhalanvj.apps.googleusercontent.com'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </div>
  );
};

export default GoogleSignIn;
