import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    phone: String,
    email: String,
    checkInDate: String,
    checkOutDate: String,
    roomPreference: String,
    numberOfAdults: Number,
    numberOfChildren: Number,

    billing: {
      fullName: String,
      email: String,
      address: String,
      city: String,
      state: String,
      zip: String,
      cardNumber: String, // In real apps, never store full card numbers! Use tokenized values or Stripe IDs.
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
