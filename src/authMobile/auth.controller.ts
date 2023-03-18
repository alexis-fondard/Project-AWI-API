/* eslint-disable prettier/prettier */
import { Body, Controller, ParseIntPipe, Post, Req } from '@nestjs/common';
import { AuthMobileService } from './auth.service';
import { Request } from 'express';
import { AuthMobileDto } from './dto';


@Controller('authMobile')
export class AuthMobileController{
    constructor(private authService: AuthMobileService){}

    @Post('signup')
    signup(@Body() dto : AuthMobileDto){
        return this.authService.signup(dto);
    }

    @Post('signin')
    signin(@Body() dto : AuthMobileDto){
        return this.authService.signin(dto);
    }

    @Post('signinMobile')
    signinMobile(@Body() dto : AuthMobileDto){
        return this.authService.signinMobile(dto);
    }
}