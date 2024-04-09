import mongoose from 'mongoose';
// import { BaseSchema } from './BaseModel';

const { Schema } = mongoose;

const CategoriesSchema = new Schema({
    categoryName: {
        type: String,
        require: true,
        unique: true
    }
});

export default new mongoose.model('Category', CategoriesSchema);
