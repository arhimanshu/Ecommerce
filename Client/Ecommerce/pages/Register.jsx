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
  name: yup.string()
  .required("Name is required"),
  email: yup.string().email("Invalid email format")
  .required("Email is required"),
  phone: yup.string().matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
  .required("Phone number is required"),
  address: yup.string()
  .required("Address is required"),
  password: yup.string().min(6, "Password must be at least 6 characters")
  .required("Password is required"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match")
  .required("Confirm password is required"),
}).required();

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema), // Use Yup schema
  });

  const onSubmit = async (datas) => {
    try{
    console.log('Form submitted', datas); // Check if this is logged
    axios.post('http://localhost:8081/api/register',datas)
  }catch(error){
    console.log(error)
  }
  };

  return (
    <Layout value="SignUp">
      <ToastContainer />
      <h2>Registration Page</h2>
      <div className="registerSize">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              {...register("name")}
              className="form-control"
              placeholder="Enter your name"
            />
            {errors.name && <p className="errorInYupp">{errors.name.message}</p>}
          </div>

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
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              {...register("phone")}
              className="form-control"
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="errorInYupp">{errors.phone.message}</p>}
          </div>

          <div className="mb-3">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              {...register("address")}
              className="form-control"
              placeholder="Enter your address"
            />
            {errors.address && <p className="errorInYupp">{errors.address.message}</p>}
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

          <div className="mb-3">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              {...register("confirmPassword")}
              className="form-control"
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && <p className="errorInYupp">{errors.confirmPassword.message}</p>}
          </div>

          <button type="submit" className=" btn btn-primary">
            REGISTER
          </button>
          <Link to="/login" className="mx-1 btn btn-primary">
            Login
          </Link>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
