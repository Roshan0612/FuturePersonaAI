import mongoose from 'mongoose';
const futureScenarioSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    title: { 
        type: String, 
        required: true 
    },
    desctiption:String,
    predictions:{
        goalsAchieved: String,
        missedOpportunities: String,
        stressImpact: String,
        habitDrift: String
    },createdAt:{
        type :Date,
        default:Date.now
    }
})
const futureScenario=mongoose.model('FutureScenario',futureScenarioSchema);
export default futureScenario
