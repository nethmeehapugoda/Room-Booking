import Booking from '../models/booking.js';

export const createBooking = async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    console.log("newBooking======================================",newBooking);
    res.status(201).json({ message: 'Booking successful', data: newBooking });
  } catch (error) {
    res.status(500).json({ message: 'Booking failed', error: error.message });
  }
};
