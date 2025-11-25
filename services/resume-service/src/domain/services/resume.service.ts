import { Resume } from "../models/Resume";

export default {
  createResume: (data: any) => Resume.create(data),

  getResume: (id: string) => Resume.findById(id),

  getUserResumes: (userId: string) => Resume.find({ userId }),

  updateResume: async (id: string, data: any) => {
    // Increase version on every update
    data.version = { $inc: 1 };
    return Resume.findByIdAndUpdate(id, data, { new: true });
  },

  deleteResume: (id: string) => Resume.findByIdAndDelete(id),
};
