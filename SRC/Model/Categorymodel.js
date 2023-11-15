import mongoose from 'mongoose';


const CategorySchema = mongoose.Schema({
    name:{type:String,required:true,unique:true},
    description:{type:String,required:true},
    isactive:{type:Boolean,required:true},
    isActive:{type:Boolean,required:true},




})

const Category = mongoose.model("Category",CategorySchema);
export default Category;
 