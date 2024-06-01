import Product from "../model/Product";
import { productSchema } from "../schemas/products";

export const getProducts = async (req, res) => {
  try {
    const data = await Product.find();
    if (data.length < 0) {
      return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
    }
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const data = await Product.findOne({ _id: req.params.id });
    if (data.length < 0) {
      return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
    }
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addProducts = async (req, res) => {
  // console.log(req.body);
  try {
    // const { name, price, description, image, author } = req.body;(Có hoặc không cũg ok )

    //kiểm tra xem dữ liệu có hợp lệ không
    const { error } = productSchema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const message = error.details.map((message) => message.message);
      return res.status(400).json({ messages: message });
      // console.log(message);
    }
    const data = await Product({ ...req.body }).save();
    // console.log(data);
    return res.status(201).json({ data: data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProducts = async (req, res) => {
  try {
    const data = await Product.findOneAndDelete({ _id: req.params.id });
    if (data.length < 0) {
      return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
    }
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProducts = async (req, res) => {
  try {
    const data = await Product.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    if (data.length < 0) {
      return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
    }
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
