// import hashPassword from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";
import express from "express";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    console.log("the reqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq", req.body);
    // validations
    if (!name) {
      return res.send({ error: "name is req" });
    }
    if (!email) {
      return res.send({ error: "email is req" });
    }
    if (!password) {
      return res.send({ error: "password is req" });
    }
    if (!phone) {
      return res.send({ error: "phone number is req" });
    }
    if (!address) {
      return res.send({ error: "address is req" });
    }

    const existingUser = await userModel.findOne({ name });
    if (existingUser) {
      return res
        .status(200)
        .send({ success: true, message: "Already Registered" });
    }

    //registering after avlidations
    // const hashedPassword=await hashPassword(password)
    const user = new userModel({ name, email, phone, address, password });
    //
    console.log("suerrrrrrrrrrrrrrissssssssssssssssssss", user);
    await user.save();
    res.status(201).json({ message: "Registration successful", user });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: "Error in Registeration",
      err,
    });
  }
};
//LOGIN || POST
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validations
    if (!email && password) {
      return res
        .status(404)
        .send({ success: false, message: "invalid email or password" });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "user not found" });
    }
    if (password != user.password) {
      res.status(500).send({ success: false, message: "wrong psk" });
    }
    const token = await JWT.sign(user._id, process.env.JWT_SECRET);
    res.status(201).json({ message: "Login successful", user });
  } catch (err) {
    console.log("error in login controller", err);
    res.status(500).send({ success: false, message: "error in login", err });
  }
};

export default loginController;
