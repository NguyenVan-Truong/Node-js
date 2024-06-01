import User from "../model/User";
import { registerSchema } from "../schemas/auth";
import bcryptjs from "bcryptjs";
export const signup = async (req, res) => {
  //láy dữ liệu user gửi lên
  const { username, email, password, confirmPassword, age } = req.body;
  //kiểm tra xem dữ liệu có hợp lệ không
  const { error } = registerSchema.validate(req.body, { abortEarly: false }); // abrtEarly false log ra toàn bộ lỗi
  if (error) {
    const messages = error.details.map((message) => message.message);
    return res.status(400).json({ messages: messages });
  }
  //kiểm tra xem user đã tồn tại chưa
  const existUser = await User.findOne({ email });
  if (existUser) {
    return res.status(400).json({ message: ["Email đã tồn tại "] });
  }
  //mã hóa mật khẩu sử dụng bcryptis
  const hashedPassword = await bcryptjs.hash(password, 10);
  // console.log("hashedPassword", await bcryptjs.hash(password, 10));
  //lưu user vào database
  const data = await User.create({
    ...req.body,
    password: hashedPassword,
  });

  data.password = undefined;

  return res.status(201).json({
    data,
    // message: ["bạn đã đăng ký thành công"],
  });

  // trả về thông tin user đã đăng ký (ko gửi mật khẩu )
};
export const signin = async (req, res) => {
  console.log("sigin");
};
