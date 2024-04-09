import mongoose from 'mongoose';

export default async () => {
    try {
        await mongoose.connect(uri);
    } catch (error) {
        console.log(error);
    }
};
