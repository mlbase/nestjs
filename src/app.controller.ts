import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBasicAuth, ApiBearerAuth, ApiOAuth2 } from '@nestjs/swagger';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGaurd } from './auth/jwt-auth.gaurd';
import { LocalAuthGaurd } from './auth/local-auth.gaurd';
import { UserLoginDto } from './users/dto/user-login.dto';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGaurd)
  @Post('auth/login')
  @ApiBasicAuth('user')
  async login(@Body() user: UserLoginDto) {
    return this.authService.login(user)
  }

  @UseGuards(JwtAuthGaurd)
  @Get('profile')
  @ApiBearerAuth('user')
  getProfile(@Request() req){
    return req.user;
  }


}
