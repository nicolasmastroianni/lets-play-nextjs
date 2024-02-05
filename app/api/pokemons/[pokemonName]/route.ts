import { Logger } from '@nestjs/common'
import { NextResponse } from 'next/server'
import Pokemon from '../../../../model/pokemons/pokemon.ts'
import axios from "axios";

const logger: Logger = new Logger()

export async function GET(request: Request, context: any) {
    try {
        const { params } = context
        logger.log(`Obteniendo info del pokemon: ${params.pokemonName}`)
        const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`)
        const pokemon = new Pokemon(result.data.name, result.data.base_experience)
        logger.log(`Pokemon obtenido: ${JSON.stringify(pokemon)}`)

        return NextResponse.json(pokemon)
    } catch (e) {
        throw e
    }
}