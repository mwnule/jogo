import mongoose from 'mongoose';

const connectDB = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/banco")
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB', error);
    }
};

export default connectDB;