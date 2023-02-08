/* eslint-disable prettier/prettier */
import { Body, Controller, ParseIntPipe, Post, Get, Req, Put, Param, Delete } from '@nestjs/common';
import { Request } from 'express';
import { TypeJeuService } from './type_jeu.service';
import { TypeJeuDto } from './dto';


@Controller('type_jeu')
export class TypeJeuController{
    constructor(private typeJeuService: TypeJeuService){}

    @Post('create')
    create(@Body() dto : TypeJeuDto){
        return this.typeJeuService.create(dto);
    }

    @Get('')
    findAll(){
        return this.typeJeuService.findAll();
    }

    @Get(':id')
    find(@Param('id') id: number){
        return this.typeJeuService.findOne(id)
    }

    @Put('update/:id')
    update(@Param('id') id: number, @Body() dto : TypeJeuDto){
        return this.typeJeuService.updateOne(id,dto);
    }

    @Delete(':id/delete')
    delete(@Param('id') id: number){
        return this.typeJeuService.deleteOne(id);
    }
}