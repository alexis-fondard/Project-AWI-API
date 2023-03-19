import { Module } from '@nestjs/common';
import { CreneauService } from './creneau.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CreneauController } from './creneau.controller';

@Module({
  imports: [PrismaModule],
  providers: [CreneauService],
  controllers: [CreneauController],
})
export class CreneauModule {}
