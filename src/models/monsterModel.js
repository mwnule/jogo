import { Schema, model } from 'mongoose';

const monsterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    atkPoints: {
        type: Number,
        required: true
    },
    expPoints: {
        type: Number,
        required: true
    },
    defeated: {
        type: Boolean
    }
});

export default model ('Monster', monsterSchema);

/*
    {
        "name": "",
        "atkPoints": 0,
        "expPoints": 0,
        
    }
*/