import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JourController } from './jour.controller';
import { JourService } from './jour.service';

@Module({
  imports: [PrismaModule],
  providers: [JourService],
  controllers: [JourController],
})
export class JourModule {}
