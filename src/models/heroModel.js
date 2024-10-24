import { Schema, model } from 'mongoose';

const heroSchema = new Schema({
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
    monsterDefeated: {
        type: [Schema.Types.ObjectId],
        ref: 'Monster'
    }
});

export default model ('Hero', heroSchema);

/*
    {
        "name": "",
        "atkPoints": 0,
        "expPoints": 0,
        "monsterDefeated": ["", ""]
    }
*/