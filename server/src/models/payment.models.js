/*
payment {
  studentId string fk
  mentorId string fk
  meetingId string fk
  razorpayPaymentId string 
  razorpayOrderId string   
  razorpaySignature string  // Razorpay signature (for verification)
  amount number
  currency string  // "INR"
  name string // student
  phone string  // student
  status enum("created", "successful", "failed", "refunded")
  paid boolean

  createdAt DateTime
  updatedAt DateTime
}
*/

import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
    {
        studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
            required: true,
        },
        mentorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Mentor",
            required: true,
        },
        meetingId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Meeting",
            required: true,
        },
        razorpayPaymentId: {
            type: String,
            required: true,
        },
        razorpayOrderId: {
            type: String,
            required: true,
        },
        razorpaySignature: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        currency: {
            type: String,
            default: "INR",
            required: true,
        },
        name: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
            required: true,
        },
        phone: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
            required: true,
        },
        status: {
            type: String,
            enum: ["created", "successful", "failed", "refunded"],
            default: "created",
            required: true,
        },
        paid: {
            type: Boolean,
            default: false,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Payment = mongoose.model("Payment", paymentSchema);
