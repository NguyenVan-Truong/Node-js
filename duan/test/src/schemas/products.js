import Joi from "joi";
export const productSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "Tên là  bắt buộc",
    "string.empty": "Username không được bỏ trống",
  }),
  price: Joi.number().required().messages({
    "string.empty": "Giá tiền không được bỏ trống ",
    "any.required": "Giá tiền là bắt buộc ",
    // "string.min": "Password có độ dài là {#limit} ký tự",
  }),
  description: Joi.string().required().messages({
    "any.required": "Mô tả  là bắt buộc",
  }),
  image: Joi.string().required().messages({
    "any.required": "Image  là bắt buộc",
  }),
  author: Joi.string().required().messages({
    "any.required": "Author bắt buộc ",
    "string.empty": "Author  không được để trống",
  }),
});
