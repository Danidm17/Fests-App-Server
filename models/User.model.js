const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  username: {
    type: String,
    required: [true, 'Username is required']
  }
},
  {
    timestamps: true
  }
)

const User = model("User", userSchema)

module.exports = User