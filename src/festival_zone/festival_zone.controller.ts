/* eslint-disable prettier/prettier */
import { Body, Controller, ParseIntPipe, Post, Get, Req, Put, Param, Delete } from '@nestjs/common';
import { FestivalZoneService } from './festival_zone.service';
import { FestivalZoneDto } from './dto';

@Controller('festival_zones')
export class FestivalZoneController{
  constructor(private festivalZoneService: FestivalZoneService){}

    @Post('')
    create(@Body() dto : FestivalZoneDto){
        return this.festivalZoneService.create(dto);
    }

    @Get('')
    findAll(){
        return this.festivalZoneService.findAll();
    }

    @Get(':id')
    find(@Param('id') id: number){
        return this.festivalZoneService.findOne(id)
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() dto : FestivalZoneDto){
        return this.festivalZoneService.updateOne(id,dto);
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.festivalZoneService.deleteOne(id);
    }

    @Get('/festival/:id')
    findAllFZOfOneFestival(@Param('id') id: number){
        return this.festivalZoneService.findAllFZOfOneFestival(id);
    }

    @Get('/zone/:label')
    findAllFZOfOneZone(@Param('label') label: string){
        return this.festivalZoneService.findAllFZOfOneZone(label);
    }
    
}