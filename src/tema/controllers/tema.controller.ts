import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";

import { Postagem } from "src/postagem/entities/postagem.entitiy";
import { brotliDecompressSync } from "zlib";
import { Tema } from "../entities/tema.entities";
import { TemaService } from "../services/tema.service";


@Controller('/tema')
export class TemaController{
    constructor (private readonly temaService: TemaService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findall (): Promise<Tema[]> {
        return this.temaService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(
        @Param ('id', ParseIntPipe)
        id: number
    ): Promise<Tema>{
        return this.temaService.findById(id)
    }

    @Get('/descricao/:descricao')
    @HttpCode(HttpStatus.OK)
    findByDescricao(
        @Param ('descricao')
        descricao: string
    ): Promise <Tema[]>{
        return this.temaService.findByDescricao(descricao);

    }

    @Post ()
    @HttpCode(HttpStatus.CREATED)
    create(
        @Body ()
        tema: Tema
    ): Promise<Tema>{
        return this.temaService.create(tema);
    }

    @Put()
@HttpCode(HttpStatus.OK)
update (@Body()tema: Tema): Promise<Tema> {
return this.temaService.update(tema);
}

@Delete('/:id')
@HttpCode(HttpStatus.NO_CONTENT)
delete(@Param('id', ParseIntPipe)id: number){
return this.temaService.delete(id);
}
}