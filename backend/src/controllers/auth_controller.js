import { generateToken } from "../lib/utils.js";
import User from "../models/user_model.js";
import bycrpt from "bcryptjs";
export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    const user = await User.findOne({ email });

    if (user) return res.status(400).json({ message: "Email already exists" });

    const salt = await bycrpt.genSalt(10);
    const hashedPassword = await bycrpt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      // generate jwt token here
      generateToken(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if(!user){
            return res.status(400).json({ message:"Invalid credentials" });
        }
        const isPasswordCorrect = await bycrpt.compare(password, user.password);
        if(!isPasswordCorrect){
            return res.status(400).json({ message:"Invalid Credentials"});
        }
        // generate login token
        generateToken(user._id, res)
        // successfull then send json message
        res.status(201).json({
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        profilePic: user.profilePic,
      });
    } catch (error) {
        console.log(`Error in login controller: ${error.message}`);
        res.status(500).json({ message:"Internal server error"});
    }
};

export const logout = (req, res) => {
    // to logout we just need to clear the cookies

    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({ message: "Logged out successfully"});
    } catch (error) {
        console.log("Error in logout controller:",error.message);
        res.status(500).json({ message:"Internal server Error" });
    }
};
