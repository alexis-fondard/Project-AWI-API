/* eslint-disable prettier/prettier */
import { Body, Controller, ParseIntPipe, Post, Get, Req, Put, Param, Delete } from '@nestjs/common';
import { JourService } from './jour.service';
import { JourDto } from './dto';

@Controller('jours')
export class JourController{
  constructor(private jourService: JourService){}

    @Post('')
    create(@Body() dto : JourDto){
        return this.jourService.create(dto);
    }

    @Get('')
    findAll(){
        return this.jourService.findAll();
    }

    @Get(':id')
    find(@Param('id') id: number){
        return this.jourService.findOne(id)
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() dto : JourDto){
        return this.jourService.updateOne(id,dto);
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.jourService.deleteOne(id);
    }

    @Get('/festival/:id')
    findAllJoursOfOneFestival(@Param('id') id: number){
        return this.jourService.findAllJoursOfOneFestival(id);
    }

    @Get('/getFestivalName/:id')
    findFestivalCorrespondingOfJour(@Param('id') id: number){
        return this.jourService.findFestivalCorrespondingOfJour(id)
    }

    @Get('/getDateByJourId/:id')
    findCorrespondingDateOfJour(@Param('id') id: number){
        return this.jourService.findCorrespondingDateOfJour(id);
    }
    
}