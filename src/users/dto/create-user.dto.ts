import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { UserRegister } from "src/interface/user.interface";


export class UserRegisterDto implements UserRegister {
    @ApiProperty({ description: '가입할 id' })
    @IsString()
    username: string;
    @ApiProperty({ description: '비밀번호' })
    @IsString()
    password: string;
    @ApiProperty({ description: 'email'})
    @IsString()
    email: string;
    @ApiProperty({ description: '주소' })
    @IsString()
    address: string;

}