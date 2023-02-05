/* eslint-disable prettier/prettier */
import { Body, Controller, ParseIntPipe, Post, Get, Req } from '@nestjs/common';
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
    findAll(@Body() dto : BenevoleDto){
        return this.benevoleService.findAll();
    }
}