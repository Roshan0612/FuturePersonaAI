import mongoose from 'mongoose';

const contentSuggestionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  resourceType: { type: String, enum: ['article', 'video', 'exercise', 'meditation'], required: true },
  title: String,
  link: String,
  description: String,
  relevanceScore: Number,
  createdAt: { type: Date, default: Date.now }
});

const ContentSuggestion = mongoose.model('ContentSuggestion', contentSuggestionSchema);
export default ContentSuggestion;
