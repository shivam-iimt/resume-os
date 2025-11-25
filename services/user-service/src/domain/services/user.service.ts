import { User } from "../models/User";

export default {
  getUser: async (id: string) => User.findById(id),
  updateUser: async (id: string, data: any) =>
    User.findByIdAndUpdate(id, data, { new: true }),
};
