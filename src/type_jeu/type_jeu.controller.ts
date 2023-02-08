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

    @Get(':label')
    find(@Param('label') label: string){
        return this.typeJeuService.findOne(label)
    }

    @Put('update/:label')
    update(@Param('label') label: string, @Body() dto : TypeJeuDto){
        return this.typeJeuService.updateOne(label, dto);
    }

    @Delete(':label/delete')
    delete(@Param('label') label: string){
        return this.typeJeuService.deleteOne(label);
    }
}
