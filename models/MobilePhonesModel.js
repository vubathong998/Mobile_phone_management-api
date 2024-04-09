import mongoose from 'mongoose';
// import { BaseSchema } from './BaseModel';

const { Schema } = mongoose;

const MobilePhonesModel = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    price: {
        type: Number,
        require: true,
    },
    // categories: {
    //     type: 
    // }
});
