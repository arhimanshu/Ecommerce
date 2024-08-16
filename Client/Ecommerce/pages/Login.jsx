import React, { useState } from "react";
import Layout from "../components/layouts/Layout";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// Validation schema
const schema = yup.object({
  email: yup.string().email("Invalid email format")
  .required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters")
  .required("Password is required"),
}).required();

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema), // Use Yup schema
  });

  const onSubmit = async (datas) => {
    try {
      console.log('Form submitted', datas); // Check if this is logged
      const response = await axios.post('http://localhost:8081/api/login', datas);
      
      if (response && response.status === 200) { // Adjust status code to 200
        console.log(response.data.message);
        toast.success(response.data.message); // Show success message
      } else {
        console.log('Unexpected response status:', response.status);
        toast.error('Unexpected response status'); // Show error message
      }
    } catch (error) {
      console.error('Error:', error.message);
      toast.error(error.response?.data?.message || 'Network or configuration error'); // Show error message
    }
  }
  return (
    <Layout value="Login">
      <ToastContainer />
      <h2 className="text-center">Login Page</h2>
      <div className="registerSize">
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              {...register("email")}
              className="form-control"
              placeholder="Enter your email"
            />
            {errors.email && <p className="errorInYupp">{errors.email.message}</p>}
          </div>

          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              {...register("password")}
              className="form-control"
              placeholder="Enter your password"
            />
            {errors.password && <p className="errorInYupp">{errors.password.message}</p>}
          </div>

        

          <button type="submit" className=" btn btn-primary">
            Login
          </button>
          <Link to="/Register" className="mx-1 btn btn-primary">
            SignUp
          </Link>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
