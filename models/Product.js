import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  manufacturer: { type: String, required: true },
  link: { type: String, required: true },
});

const Product = mongoose.model('Product', productSchema);

export default Product; 