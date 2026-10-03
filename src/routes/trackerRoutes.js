const express = require("express");

const {
  createComplaint,
  getAllComplaints,
  getComplaintById,
  updateComplaint,
  updateComplaintStatus,
  deleteComplaint,
} = require("../controller/trackerController");

const router = express.Router();

router.post("/", createComplaint);

router.get("/", getAllComplaints);

router.get("/:id", getComplaintById);

router.put("/:id", updateComplaint);

router.patch("/:id/status", updateComplaintStatus);

router.delete("/:id", deleteComplaint);

module.exports = router;