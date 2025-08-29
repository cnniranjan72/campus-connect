import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
  {
  "username": "niranjan",
  "email": "niranjan@example.com",
  "password": "mypassword123"
}
);

const User = mongoose.model("User", userSchema);

export default User;
