import { IsString } from "class-validator";
import { UserLoginRequest } from "src/interface/user.interface";
import { ApiProperty } from "@nestjs/swagger";

export class UserLoginDto implements UserLoginRequest {
    @ApiProperty({ description: 'user의 id' })
    @IsString()
    username: string;
    @ApiProperty({ description: 'user 비밀번호' })
    @IsString()
    password: string;
}