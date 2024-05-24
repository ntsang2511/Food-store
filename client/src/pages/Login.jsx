import React from 'react';
import { Typography } from '@mui/material';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate } from 'react-router-dom';
import { graphQLRequest } from '../utils/request';

export default function Login() {
  const auth = getAuth();
  // const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    const {
      user: { uid, displayName },
    } = await signInWithPopup(auth, provider);

    const { data } = await graphQLRequest({
      query: `mutation register($uid: String!, $name: String!) {
      register(uid: $uid, name: $name) {
        uid
        name
      }
    }`,
      variables: {
        uid,
        name: displayName,
      },
    });
    console.log('register', { data });
  };

  if (localStorage.getItem('accessToken')) {
    return <Navigate to="/" />
  }


  return (
    <>
      <Typography variant="h5" sx={{ marginBottom: "10px" }}>
        Welcome to my food store
      </Typography>
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={handleLoginWithGoogle}
      >
        Log in with google
      </button>
    </>
  );
}
