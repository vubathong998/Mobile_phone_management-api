import mongoose from 'mongoose';

export default async (uri) => {
    try {
        await mongoose.connect(uri);
        console.log('mongoose is connected');
    } catch (error) {
        console.log(error);
    }
};
