import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [ob, setob] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    gender: '',
    age: '',
    exp: '',
    country: '',
    state: '',
    city: '',
    pincode: '',
  });
  const handleChange = (e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.name);
    // console.log(e.target.value);
    setob({ ...ob, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1>{JSON.stringify(ob)}</h1>
      <input
        name="name"
        value={ob.name}
        placeholder="name"
        onChange={handleChange}
      />
      <input
        name="email"
        value={ob.email}
        placeholder="email"
        onChange={handleChange}
      />
      <input
        name="phone"
        value={ob.phone}
        placeholder="phone"
        onChange={handleChange}
      />
      <input
        name="password"
        value={ob.password}
        placeholder="password"
        onChange={handleChange}
      />
      <input
        name="gender"
        value={ob.gender}
        placeholder="gender"
        onChange={handleChange}
      />
      <input
        name="age"
        value={ob.age}
        placeholder="age"
        onChange={handleChange}
      />
      <input
        name="exp"
        value={ob.exp}
        placeholder="exp"
        onChange={handleChange}
      />
      <input
        name="country"
        value={ob.country}
        placeholder="country"
        onChange={handleChange}
      />
      <input
        name="state"
        value={ob.state}
        placeholder="state"
        onChange={handleChange}
      />
      <input
        name="city"
        value={ob.city}
        placeholder="city"
        onChange={handleChange}
      />
      <input
        name="pincode"
        value={ob.pincode}
        placeholder="pincode"
        onChange={handleChange}
      />
    </div>
  );
}
