/* eslint-disable prettier/prettier */
import { Body, Controller, ParseIntPipe, Post, Get, Req, Put, Param, Delete } from '@nestjs/common';
import { Request } from 'express';
import { ZoneService } from './zone.service';
import { ZoneDto } from './dto';

@Controller('zones')
export class ZoneController{
  constructor(private zoneService: ZoneService){}

    @Post('create')
    create(@Body() dto : ZoneDto){
        return this.zoneService.create(dto);
    }

    @Get('')
    findAll(){
        return this.zoneService.findAll();
    }

    @Get(':label')
    find(@Param('label') label: string){
        return this.zoneService.findOne(label)
    }

    @Put(':label/update')
    update(@Param('label') past_label: string, @Body() dto : ZoneDto){
        return this.zoneService.updateOne(past_label,dto);
    }

    @Delete(':id/delete')
    delete(@Param('label') label: string){
        return this.zoneService.deleteOne(label);
    }
}