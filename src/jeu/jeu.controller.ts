import { Controller } from "@nestjs/common";
import { JeuService } from "./jeu.service";
import { JeuDto } from "./dto";
import { Body, Delete, Get, Param, Post, Put } from "@nestjs/common";


@Controller('jeux')
export class JeuController {
    constructor(private jeuService: JeuService) { }

    @Post('')
    create(@Body() dto: JeuDto) {
        return this.jeuService.create(dto);
    }

    @Get('')
    findAll() {
        return this.jeuService.findAll();
    }

    @Get(':id')
    find(@Param('id') id: number) {
        return this.jeuService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() dto: JeuDto) {
        return this.jeuService.updateOne(id, dto);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.jeuService.deleteOne(id);
    }
}