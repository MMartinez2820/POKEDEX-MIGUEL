import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import pokeball from '../gifs/pokeball.gif'
import pokeball2 from '../gifs/pokeball-360.gif'
import pokeball3 from '../gifs/pokeball-classic.gif'

const PokedexDetails = () => {
  const [pokemon, setPokemon] = useState({})

  const { id } = useParams()

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => setPokemon(res.data))
  }, [id])

  console.log(pokemon);

  const type2 = pokemon.types?.[1]?.type.name;
  const ability2 = pokemon.abilities?.[1]?.ability.name;

  return (
    <div className='flex flex-cols items-center justify-center text-center'>

      <img src={pokeball} alt="pokeball1" />
      <img src={pokemon.sprites?.other.home?.front_default} alt='poke' />
      <h1>{pokemon.name}</h1>
      <div>
        <h2>Weight</h2>
        <p>{pokemon.weight}</p>
      </div>
      <div>
        <h2>Height</h2>
        <p>{pokemon.height}</p>
      </div>
      <div>
        <h2>Type</h2>
        <p> {pokemon.types?.[0].type.name}

        </p>
        <p>  {pokemon.types?.[1]?.type.name ? `${type2}` : ''}</p>
      </div>
      <div>
        <h2>Abilities</h2>
        <p> {pokemon.abilities?.[0].ability.name}
        </p>
        <p>{pokemon.abilities?.[1]?.ability.name ? `${ability2}` : ''}</p>
      </div>
      <h2>Stats</h2>
      <label htmlFor="HP">HP</label>
      <progress className='progress progress-info w-56 border-2 border-white-500 h-5' id="HP" max="150" value={pokemon.stats?.[0].base_stat}></progress>
      <p>{pokemon.stats?.[0].base_stat}/150</p>
      <label htmlFor="Atack">Atack</label>
      <progress className='progress progress-info w-56 border-2 border-white-500 h-5' id="Atack" max="150" value={pokemon.stats?.[1].base_stat}> </progress>
      <p>{pokemon.stats?.[1].base_stat}/150</p>
      <label htmlFor="Defense">Defense</label>
      <progress className='progress progress-info w-56 border-2 border-white-500 h-5' id="Defense" max="150" value={pokemon.stats?.[2].base_stat}> </progress>
      <p>{pokemon.stats?.[2].base_stat}/150</p>
      <label htmlFor="Speed">Speed</label>
      <progress className='progress progress-info w-56 border-2 border-white-500 h-5' id="Speed" max="150" value={pokemon.stats?.[5].base_stat}> </progress>
      <p>{pokemon.stats?.[5].base_stat}/150</p>
      <div>
        <h2>Movements</h2>
        {pokemon.moves?.map(poke => (
          <li key={poke.move.name}>{poke.move.name}</li>
        ))}
      </div>
    </div>
  )
}

export default PokedexDetails
