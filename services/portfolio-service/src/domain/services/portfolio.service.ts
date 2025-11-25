import { Portfolio } from "../models/Portfolio";

export default {
  createPortfolio: (data: any) => Portfolio.create(data),

  updatePortfolio: (id: string, data: any) =>
    Portfolio.findByIdAndUpdate(id, data, { new: true }),

  deletePortfolio: (id: string) => Portfolio.findByIdAndDelete(id),

  getPortfolio: (id: string) => Portfolio.findById(id),

  getPortfolioByUsername: (username: string) => Portfolio.findOne({ username }),

  getUserPortfolios: (userId: string) => Portfolio.find({ userId }),
};
