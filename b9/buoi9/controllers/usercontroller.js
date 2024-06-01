import User from "../models/User.js";
class UserController {
  // lay danh sach
  // route :
  //   path : api/v1/Users
  //   method : get
  async index(req, res) {
    try {
      const data = await User.find(req.query);
      res.json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  
  // xem chi tiet
  // route :
  //   path : api/v1/Users/:id
  //   method : get
  async show(req, res) {
    try {
      const data = await User.findById(req.params.id);
      res.json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  // them
  // route :
  //   path : api/v1/Users/:id
  //   method : post
  async store(req, res) {
    try {
      const data = await User.create(req.body);
      res.json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  // sua
  // route :
  //   path : api/v1/Users/:id
  //   method : update
  async update(req, res) {
    try {
      let data = await User.findByIdAndUpdate(req.params.id, req.body);

      res.json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  // xoa
  // route :
  //   path : api/v1/Users/:id
  //   method : delete
  async delete(req, res) {
    try {
      await User.findByIdAndDelete(req.params.id);

      res.json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
export default UserController;
