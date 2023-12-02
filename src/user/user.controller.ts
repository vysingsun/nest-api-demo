import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/schemas/user.schema';

@Controller('users')
export class UserController {
    constructor(
        private userService: UserService
    ) {}

    @Get()
    async getAllUsers(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Post()
    async createUser(@Body() user): Promise<User> {
        return this.userService.create(user);
    }

    @Get(':id')
    async getUser(@Param('id') id: string): Promise<User> {
        return this.userService.findById(id);
    }

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() user): Promise<User>{
        return this.userService.updateById(id, user);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<User>{
        return this.userService.deleteById(id);
    }
}
