import mongoose, { Schema, Document } from "mongoose";

export interface IResume extends Document {
  userId: string;
  title: string;
  summary?: string;
  experience: Array<any>;
  education: Array<any>;
  skills: string[];
  projects: Array<any>;
  links: any;
  version: number;
}

const resumeSchema = new Schema<IResume>(
  {
    userId: { type: String, required: true },
    title: { type: String, required: true },

    summary: { type: String, default: "" },

    experience: {
      type: [
        {
          company: String,
          role: String,
          startDate: String,
          endDate: String,
          description: String,
        },
      ],
      default: [],
    },

    education: {
      type: [
        {
          school: String,
          degree: String,
          startDate: String,
          endDate: String,
        },
      ],
      default: [],
    },

    skills: {
      type: [String],
      default: [],
    },

    projects: {
      type: [
        {
          name: String,
          description: String,
          link: String,
        },
      ],
      default: [],
    },

    links: {
      type: Schema.Types.Mixed,
      default: {},
    },

    version: { type: Number, default: 1 },
  },
  { timestamps: true }
);

export const Resume = mongoose.model<IResume>("Resume", resumeSchema);
