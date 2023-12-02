import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private userModel: mongoose.Model<User>
    ) {}

    async findAll(): Promise<User[]> {
        const users = await this.userModel.find();
        return users;
    }

    async create(user: User): Promise<User> {
        const res = await this.userModel.create(user);
        return res;
    }

    async findById(id: string): Promise<User>{
        const user = await this.userModel.findById(id);
        if (!user){
            throw new NotFoundException('User not found!');
        }
        return user;
    }

    async updateById(id: string, user: User): Promise<User>{
        return await this.userModel.findByIdAndUpdate(id, user, {
            new: true,
            runValidators: true
        })
    }

    async deleteById(id: string): Promise<any> {
        return await this.userModel.findByIdAndDelete(id);
    }
}
