import mongoose from 'mongoose';
const schema = mongoose.Schema({
    username: {
         type: String,
         required: true, 
         trim:true
         ,
         unique: true }, 
    email: {
         type: String,
         required: true,
         trim: true,
         unique: true 
  },
    password: {
        type: String,
        required: true 
  },
  createdAt: {
        type: Date,
        default: Date.now
  },
  preferences: {
      coachingStyle: { type: String, default: 'strategist' }, 
      notifications: { type: Boolean, default: true },
      emotionTracking: { type: Boolean, default: false }
  },
  contextHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Context' }]
},{ timestamps: true }

);
const User=mongoose.model('User',schema);
export default User; 

