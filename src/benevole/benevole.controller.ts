/* eslint-disable prettier/prettier */
import { Body, Controller, ParseIntPipe, Post, Get, Req, Put, Param, Delete } from '@nestjs/common';
import { Request } from 'express';
import { BenevoleService } from './benevole.service';
import { BenevoleDto } from './dto';


@Controller('benevoles')
export class BenevoleController{
    constructor(private benevoleService: BenevoleService){}

    @Post('create')
    create(@Body() dto : BenevoleDto){
        return this.benevoleService.create(dto);
    }

    @Get('')
    findAll(){
        return this.benevoleService.findAll();
    }

    @Get(':id')
    find(@Param('id') id: number){
        return this.benevoleService.findOne(id)
    }

    @Put('update/:id')
    update(@Param('id') id: number, @Body() dto : BenevoleDto){
        return this.benevoleService.updateOne(id,dto);
    }

    @Delete(':id/delete')
    delete(@Param('id') id: number){
        return this.benevoleService.deleteOne(id);
    }
}