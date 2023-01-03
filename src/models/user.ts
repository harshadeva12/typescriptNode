import mongoose, {Document,mongo,Schema} from 'mongoose';

export interface IUser {
    name:String
}

const userSchema: Schema = new Schema(
    {
        name:{type:String,required: true},
    }
);
const  User =  mongoose.model<IUser>('User',userSchema);
export default User;