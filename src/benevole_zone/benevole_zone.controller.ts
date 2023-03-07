/* eslint-disable prettier/prettier */

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BenevoleZoneService } from './benevole_zone.service';
import { BenevoleZoneDTO } from './dto';

@Controller('benevoles_zones')
export class BenevoleZoneController {
  constructor(private benevoleZoneService: BenevoleZoneService) {}

  @Get('')
  getAll(){
    return this.benevoleZoneService.getAll();
  }

  @Get(':id/affectations')
  getAllAffectationsOfABenevole(@Param('id') id: number) {
    return this.benevoleZoneService.getAllAffectationOfABenevole(id);
  }

  @Get(':label/benevoles')
  getAllBenevolesOfAZone(@Param('label') label: string) {
    return this.benevoleZoneService.getAllBenevolesOfAZone(label);
  }

  @Get(':id/zones')
  getAllZonesOfABenevoles(@Param('id') id: number) {
    return this.benevoleZoneService.getAllZonesOfABenevoles(id);
  }

  @Get(':debut&:fin')
  getAllBenevolesZonesOfCreneau(@Param('debut') debut: number, @Param('fin') fin: number){
    return this.benevoleZoneService.getAllBenevolesZonesOfCreneau(debut,fin);
  }

  @Get(':zone')
  getAllBenevolesCreaneauOfZone(@Param('zone') zone: string){
    return this.benevoleZoneService.getAllBenevolesCreneauOfZone(zone);
  }

  @Delete('')
  deleteAffecationOfABenevole(@Body() dto: BenevoleZoneDTO) {
    console.log(new Date(dto.date_debut))
    console.log(new Date(dto.date_fin))
    return this.benevoleZoneService.deleteAffecationOfABenevole(dto);
  }

  @Post('')
  createAffecationOfABenevole(@Body() dto: BenevoleZoneDTO) {
    return this.benevoleZoneService.createAffecationOfABenevole(dto);
  }

  //TODO: Refaire correctement en prenant en compte la vérification du créneau (libre ou non)
  @Put(':timestamp')
  updateOne(@Param('timestamp') timestamp: number, @Body() dto: BenevoleZoneDTO) {
    return this.benevoleZoneService.updateOne(timestamp,dto);
  }
}
