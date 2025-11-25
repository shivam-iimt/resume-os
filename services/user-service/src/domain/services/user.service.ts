import { User } from "../models/User";

export default {
  getUser: (id: string) => User.findById(id),

  updateUser: (id: string, data: any) =>
    User.findByIdAndUpdate(id, data, { new: true }),

  deleteUser: (id: string) => User.findByIdAndDelete(id),
};
