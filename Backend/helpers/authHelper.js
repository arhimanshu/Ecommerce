import bcrypt from "bcrypt";

const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  } catch (err) {
    console.log(err);
  }
};

export default hashPassword
