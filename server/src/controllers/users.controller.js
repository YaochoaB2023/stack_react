import User from "../models/users.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error)
  }
};

export const createUser = async (req, res) => {
  try {
    const { username } = req.body;

    const userFound = await User.findOne({ username });
    console.log(userFound);

    if (userFound) {
      const error = new Error("The user already exists");
      error.status = 409;
      throw error;
    }

    const newUser = new User({ username });
    const userSaved = await newUser.save();
    return res.json(userSaved);
  } catch (error) {
    console.log(error)
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userDeleted = await User.findByIdAndDelete(req.params.id);

    if (!userDeleted) {
      const error = new Error("User not found");
      error.status = 404;
      throw error;
    }

    return res.sendStatus(204);
  } catch (error) {
    console.log(error)
  }
};
