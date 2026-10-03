const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: [true, "Student name is required"],
    },

    email: {
      type: String,
      required: [true, "email name is required"],
    },

    title: {
      type: String,
      required: [true, "title name is required"],
    },

    description: {
      type: String,
      required: [true, "description name is required"],
    },

    category: {
      type: String,
      enum: ["Infrastructure", "IT", "Cleanliness", "Security", "Other"],
      required: [true, "category name is required"],
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      required: [true, "priority name is required"],
    },

    location: {
      type: String,
      required: [true, "location name is required"],
    },

    status: {
      type: String,
      enum: ["Open", "In Progress", "Resolved", "Rejected"],
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Complaint", complaintSchema);