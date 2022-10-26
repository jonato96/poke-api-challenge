package com.kruger.pokeapi.persistence.repository;

import com.kruger.pokeapi.persistence.entity.Pokemon;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PokemonRepository  extends JpaRepository<Pokemon, Long> {

}
