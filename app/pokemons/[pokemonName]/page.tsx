import { HttpMethodConstants } from "@/utils/constants/HttpConstants"

const getPokemonByName = async (pokemonName: any) => {

    const pokemonResponse = await fetch(`${process.env.URL}/api/pokemons/${pokemonName}`, {
        method: HttpMethodConstants.GET
    })

    return pokemonResponse.json()
}

const PokemonDetailPage = async ({ params }: any) => {

    const { pokemonName } = params
    const { name, level } = await getPokemonByName(pokemonName)

    return <div>
        <h1>Este es el detalle del pokemon:</h1>
        <ol>
            <li>Nombre: {name}</li>
            <li>Nivel: {level}</li>
        </ol>
    </div>
}

export default PokemonDetailPage
