import { HttpMethodConstants } from "@/utils/constants/HttpConstants"
import Link from 'next/link'

const getPokemons = async () => {

  const pokemonsResponse = await fetch(`${process.env.URL}/api/pokemons`, {
    method: HttpMethodConstants.GET
  })

  return pokemonsResponse.json()
}

const PokemonPage = async () => {

  const { result } = await getPokemons()

  return <div>
    <h1>Estos son los pokemones re locos</h1>
    {result?.map((p: any) => <Link href={`/pokemons/${p.name}`}><div>{p.name}</div></Link>)}
  </div>
}

export default PokemonPage
