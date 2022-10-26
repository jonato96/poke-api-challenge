package com.kruger.pokeapi.service;
import com.kruger.pokeapi.persistence.entity.Pokemon;
import com.kruger.pokeapi.persistence.repository.PokemonRepository;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PokemonService {

    private final PokemonRepository repository;

    public PokemonService(PokemonRepository repository) {
        this.repository = repository;
    }

    public List<Pokemon> getAllPokemon(){
        return this.repository.findAll();
    }

}
