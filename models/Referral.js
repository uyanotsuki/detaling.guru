import mongoose from 'mongoose';

const referralSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  referralLink: { type: String, required: true },
  clicks: { type: Number, default: 0 },
});

const Referral = mongoose.model('Referral', referralSchema);

export default Referral; 
