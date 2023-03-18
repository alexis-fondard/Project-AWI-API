/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthMobileController } from './auth.controller';
import { AuthMobileService } from './auth.service';
import { JwtStrategy } from './strategy';

@Module({
    imports: [JwtModule.register({

    }),PrismaModule],
    controllers: [AuthMobileController],
    providers: [AuthMobileService, JwtStrategy],
})
export class AuthMobileModule {}

