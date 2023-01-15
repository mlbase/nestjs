import { Controller, Post, Get, Body } from "@nestjs/common";
import { UserService } from "./user.service";
import { User, UserRegister } from "src/interface/user.interface";
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from "@nestjs/swagger";
import { UserRegisterDto } from "./dto/create-user.dto";
import { UserLoginDto } from "./dto/user-login.dto";


@ApiTags('users')
@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @ApiOperation({ summary: 'User Login' })
    @ApiResponse({ status: 200, description: 'now testing'})
    @Post('logins')
    async login(@Body() loginParam: UserLoginDto): Promise<string> {
        const result = await this.userService.userLogin(loginParam.username, loginParam.password);
        if(!result){
            return "로그인 실패";
        }

        return "로그인 성공";
    }

    @ApiOperation({ summary: 'register User'})
    @ApiResponse({status: 200, description: 'string response'})
    @Post()
    async register(@Body() data: UserRegisterDto): Promise<string>{
        await this.userService.userRegister(data);
        return "가입성공";
    }
}