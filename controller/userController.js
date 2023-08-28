import { userModel } from "../userModel/userModel.js";

export const userController = async (req, res) => {
  try {
    // data.save();

    const { name, email, mobileno, address } = req.body;

    if (!name || !email || !address || !mobileno) {
      return res.status(200).send({
        message: "enter details",
        success: false,
      });
    }
    const cEmail = await userModel.findOne({ email });
    if (cEmail) {
      return res.status(200).send({
        message: "you are already register",
        success: false,
      });
    }

    const data = await new userModel({ name, email, mobileno, address });
    await data.save();
    res.status(200).send({
      message: "your response is send",
      success: true,
      data: data,
    });
  } catch (error) {
    // console.log(error);
    res.status(500).send({
      success: false,
      message: "went wrong",
    });
  }
};
