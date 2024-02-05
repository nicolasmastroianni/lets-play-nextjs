import { HttpStatus, Logger } from '@nestjs/common'
import { NextResponse } from 'next/server'
import Pokemon from '../../../model/pokemons/pokemon.ts'
import axios from "axios";

const logger: Logger = new Logger()

export async function GET() {
    try {
        logger.log('Obteniendo los pokemones')
        const result = await axios.get(`https://pokeapi.co/api/v2/pokemon`)
        const pokemons = result.data.results.map((p: any) => new Pokemon(p.name, null))
        logger.log(`Pokemones obtenidos: ${JSON.stringify(pokemons)}`)

        return NextResponse.json({ result: pokemons })
    } catch (e) {
        throw e
    }
}