/* eslint-disable prettier/prettier */
import { Body, Controller, ParseIntPipe, Post, Get, Req, Put, Param, Delete } from '@nestjs/common';
import { Request } from 'express';
import { FestivalService } from './festival.service';
import { FestivalDto } from './dto';

@Controller('festivals')
export class FestivalController{
  constructor(private festivalService: FestivalService){}

    @Post('')
    create(@Body() dto : FestivalDto){
        return this.festivalService.create(dto);
    }

    @Get('')
    findAll(){
        return this.festivalService.findAll();
    }

    @Get(':id')
    find(@Param('id') id: number){
        return this.festivalService.findOne(id)
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() dto : FestivalDto){
        return this.festivalService.updateOne(id,dto);
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.festivalService.deleteOne(id);
    }
}