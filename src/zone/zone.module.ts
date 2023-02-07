import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ZoneController } from './zone.controller';
import { ZoneService } from './zone.service';

@Module({
  imports: [PrismaModule],
  providers: [ZoneService],
  controllers: [ZoneController],
  
})
export class ZoneModule {}
