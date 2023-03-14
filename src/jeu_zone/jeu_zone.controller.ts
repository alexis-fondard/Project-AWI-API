/* eslint-disable prettier/prettier */

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { JeuZoneService } from './jeu_zone.service';
import { JeuZoneDTO } from './dto';

@Controller('jeux_zones')
export class JeuZoneController {
  constructor(private jeuZoneService: JeuZoneService) {}

  @Get('')
  getAll(){
    return this.jeuZoneService.getAll();
  }

  @Get(':id/affectations')
  getAllAffectationsOfAJeu(@Param('id') id: number) {
    return this.jeuZoneService.getAllAffectationOfAJeu(id);
  }

  @Get(':label/jeux')
  getAllJeuxOfAZone(@Param('label') label: string) {
    return this.jeuZoneService.getAllJeuxOfAZone(label);
  }

  @Get(':id/zones')
  getAllZonesOfAJeux(@Param('id') id: number) {
    return this.jeuZoneService.getAllZonesOfAJeux(id);
  }

  @Delete('')
  deleteAffecationOfAJeu(@Body() dto: JeuZoneDTO) {
    console.log(dto)
    return this.jeuZoneService.deleteAffectationOfAJeu(dto);
  }

  @Post('')
  createAffecationOfAJeu(@Body() dto: JeuZoneDTO) {
    return this.jeuZoneService.createAffectationOfAJeu(dto);
  }
}
