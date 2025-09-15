import mongoose from 'mongoose';

const emotionLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  detectedEmotion: { type: String },
  detectedFrom: { type: String, enum: ['text', 'voice', 'face'], default: 'text' },
  intensity: { type: Number, min: 0, max: 10 },
  notes: String,
  createdAt: { type: Date, default: Date.now }
});

const EmotionLog = mongoose.model('EmotionLog', emotionLogSchema);
export default EmotionLog;
