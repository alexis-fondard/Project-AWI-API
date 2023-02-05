import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { BenevoleController } from './benevole.controller';
import { BenevoleService } from './benevole.service';

@Module({
  imports: [PrismaModule],
  controllers: [BenevoleController],
  providers: [BenevoleService],
})
export class BenevoleModule {}
