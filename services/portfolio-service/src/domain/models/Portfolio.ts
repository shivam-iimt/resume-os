import mongoose, { Schema, Document } from "mongoose";

export interface IPortfolio extends Document {
  userId: string;
  username: string;
  title: string;
  about: string;
  skills: string[];
  projects: any[];
  social: any;
  blocks: any[];
  published: boolean;
}

const portfolioSchema = new Schema<IPortfolio>(
  {
    userId: { type: String, required: true },

    username: { type: String, required: true, unique: true },

    title: { type: String, default: "" },
    about: { type: String, default: "" },

    skills: { type: [String], default: [] },

    projects: {
      type: [
        {
          name: String,
          description: String,
          link: String,
          tech: [String],
        },
      ],
      default: [],
    },

    social: {
      type: Object,
      default: {},
    },

    // 🔥 FIXED HERE
    blocks: {
      type: Schema.Types.Mixed,
      default: [],
    },

    published: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Portfolio = mongoose.model<IPortfolio>(
  "Portfolio",
  portfolioSchema
);
