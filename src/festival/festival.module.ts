import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FestivalService } from './festival.service';
import { FestivalController } from './festival.controller';

@Module({
  imports: [PrismaModule],
  providers: [FestivalService],
  controllers: [FestivalController],
})
export class FestivalModule {}
