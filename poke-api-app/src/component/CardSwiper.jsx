import React from "react";
import "./CardSwiper.scss";
import ModalPokemon from './Modal';

function CardSwiper({pokemon}){
    return(
        <div className="swiper-slide bg-dark">
            <img src={pokemon.imagen} alt={"pokemon"} />
            <div className="card-description">
                <div className="card-title">
                    <h4>{pokemon.nombre}</h4>
                </div>
                <div className="card-text">
                    <h6>{pokemon.descripcion}</h6>
                </div>
                <ModalPokemon pokemonDetalle = {pokemon}/>
            </div>

        </div>        
    )
}

export default CardSwiper;