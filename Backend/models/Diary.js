import mongoose from 'mongoose';

const diarySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  tasksCompleted: {
    type: Number,
    required: true,
    default: 0
  },
  tasksMissed: {
    type: Number,
    required: true,
    default: 0
  },
  mood: {
    type: String,
    enum: ['happy', 'neutral', 'sad'], 
    default: 'neutral'
  },
  reasons: {
    type: String,
    trim: true
  },
  reflections: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Diary = mongoose.model('Diary', diarySchema);
export default Diary;
