import { Controller, Post, Get, Body } from "@nestjs/common";
import { UserService } from "./service";
import { User } from "src/interface/user.interface";

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    async login(@Body()):Promise<> {

    }
}