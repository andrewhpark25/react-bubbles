import React, { useState} from "react";
import { useHistory} from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const initialInput = {
  username: "",
  password:""
};

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [credentials, setCredentials] = useState(initialInput);
  const { push } = useHistory();
 
 const handleChange = e => {
   setCredentials({
    ...credentials,
    [e.target.name]: e.target.value
  });
  }

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/api/login', credentials)
    .then(res => {
      localStorage.setItem('token', JSON.stringify(res.data.payload));
      push('/protected');
})
.catch(err => {console.log(err);
  alert('Access Denied');
  setCredentials({...initialInput});
});
}


return (
  <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={credentials.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
      />
      <button>Log in</button>
    </form>
  </div>
);
};

export default Login;
