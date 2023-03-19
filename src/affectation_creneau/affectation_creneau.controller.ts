/* eslint-disable prettier/prettier */
import { Body, Controller, ParseIntPipe, Post, Get, Req, Put, Param, Delete } from '@nestjs/common';
import { AffectationCreneauService } from './affectation_creneau.service';
import { AffectationCreneauDto } from './dto';

@Controller('affectation_creneaux')
export class AffectationCreneauController{
  constructor(private affectationCreneauService: AffectationCreneauService){}

    @Post('')
    create(@Body() dto : AffectationCreneauDto){
        return this.affectationCreneauService.create(dto);
    }

    @Get('')
    findAll(){
        return this.affectationCreneauService.findAll();
    }

    @Get(':id_creneau&:id_benevole&:id_festivalZone')
    find(@Param('id_creneau') id_creneau: number, @Param('id_benevole') id_benevole: number, @Param('id_festivalZone') id_festivalZone: number){
        return this.affectationCreneauService.findOne(id_creneau,id_benevole,id_festivalZone)
    }

    @Put(':id_creneau&:id_benevole&:id_festivalZone')
    update(@Param('id_creneau') id_creneau: number, @Param('id_benevole') id_benevole: number, @Param('id_festivalZone') id_festivalZone: number, @Body() dto : AffectationCreneauDto){
        return this.affectationCreneauService.updateOne(id_creneau,id_benevole,id_festivalZone,dto);
    }

    @Delete(':id_creneau&:id_benevole&:id_festivalZone')
    delete(@Param('id_creneau') id_creneau: number, @Param('id_benevole') id_benevole: number, @Param('id_festivalZone') id_festivalZone: number,){
        return this.affectationCreneauService.deleteOne(id_creneau,id_benevole,id_festivalZone);
    }

    @Get('/benevole/:id')
    findAllAffectationOfOneBenevole(@Param('id') id: number){
        return this.affectationCreneauService.findAllAffectationOfOneBenevole(id);
    }

    @Get('/festivalZone/:id')
    findAllAffectationOfOneFZ(@Param('id') id: number){
        return this.affectationCreneauService.findAllAffectationOfOneFZ(id);
    }

    @Get('/creneau/:id')
    findAllAffectationOfOneCreneau(@Param('id') id: number){
        return this.affectationCreneauService.findAllAffectationOfOneCreneau(id);
    }
    
}