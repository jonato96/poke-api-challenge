package com.kruger.pokeapi.rest;

import com.kruger.pokeapi.persistence.entity.Pokemon;
import com.kruger.pokeapi.service.PokemonService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/pokemons")
public class PokemonController {
    private final PokemonService service;

    public PokemonController(PokemonService service) {
        this.service = service;
    }

    @GetMapping
    public List<Pokemon> getAllPokemon(){
        return this.service.getAllPokemon();
    }

}
