/* eslint-disable prettier/prettier */
import { Body, Controller, ParseIntPipe, Post, Get, Req, Put, Param, Delete } from '@nestjs/common';
import { CreneauService } from './creneau.service';
import { CreneauDto } from './dto';

@Controller('creneaux')
export class CreneauController{
  constructor(private creneauService: CreneauService){}

    @Post('')
    create(@Body() dto : CreneauDto){
        return this.creneauService.create(dto);
    }

    @Get('')
    findAll(){
        return this.creneauService.findAll();
    }

    @Get(':id')
    find(@Param('id') id: number){
        return this.creneauService.findOne(id)
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() dto : CreneauDto){
        return this.creneauService.updateOne(id,dto);
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.creneauService.deleteOne(id);
    }

    @Get('/jour/:id')
    findAllCreneauxOfOneJour(@Param('id') id: number){
        return this.creneauService.findAllCreneauxOfOneJour(id);
    }
    
}