/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Get, Put, Param, Delete } from '@nestjs/common';
import { BenevoleService } from './benevole.service';
import { BenevoleDto } from './dto';


@Controller('benevoles')
export class BenevoleController{
    constructor(private benevoleService: BenevoleService){}

    @Post('')
    create(@Body() dto : BenevoleDto){
        return 'this function is not used anymore'
        // return this.benevoleService.create(dto);
    }

    @Get('')
    findAll(){
        return this.benevoleService.findAll();
    }

    @Get(':id')
    find(@Param('id') id: number){
        return this.benevoleService.findOne(id)
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() dto : BenevoleDto){
        return this.benevoleService.updateOne(id,dto);
    }

    @Delete(':id')
    delete(@Param('id') id: number){
        return this.benevoleService.deleteOne(id);
    }
}