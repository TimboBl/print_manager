import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name: {type: String, unique: true, required: true},
    password: {type: String, required: true}
});

export const UserModel = model("User", UserSchema);
