import mongoose from 'mongoose';

const contextSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  mood: String,
  sleepHours: Number,
  physicalActivity: String,
  socialInteraction: String,
  stressLevel: { type: Number, min: 0, max: 10 },
  createdAt: { type: Date, default: Date.now }
});

const Context = mongoose.model('Context', contextSchema);
export default Context;
