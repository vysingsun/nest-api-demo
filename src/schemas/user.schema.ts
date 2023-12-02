import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
// import { Schema } from "mongoose";


@Schema({
    timestamps: true
})

export class User {
    @Prop()
    username: string;

    @Prop()
    email: string;

    @Prop()
    password: string;
} 

export const UserSchema = SchemaFactory.createForClass(User);