import mongoose from 'mongoose';

const sessionSummarySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  summaryText: String,
  keyInsights: [String],
  recommendations: [String],
  createdAt: { type: Date, default: Date.now }
});

const SessionSummary = mongoose.model('SessionSummary', sessionSummarySchema);
export default SessionSummary;
