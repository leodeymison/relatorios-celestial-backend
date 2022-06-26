import { Schema, model } from "mongoose";

import { UserTypes } from "../types/userTypes"

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    permission: Number,
    image: String,
},{
    timestamps:  true
})

export default model<UserTypes>('user', UserSchema)
