import axios from 'axios'
import { useEffect, useState } from 'react'
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CardSwiper from './component/CardSwiper';
import NavBar from "./component/NavBar";

import './App.scss'
import "swiper/css";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    const url = "http://localhost:8080/pokemons"
    return await axios
      .get(url)
      .then(({ data }) => {
        data.map((pokemon) => console.log(pokemon?.nombre))
        console.log(data)
        setPokemons(data)
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <h1>PokeAPI Challenge</h1>
      <div className="container">
        <div className="swiper-container">
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            pagination={{
              el: ".pagination",
              clickable: true,
            }}
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              620: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              680: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              920: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1240: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            {pokemons?.map((pokemon) => (
              <SwiperSlide key={pokemon?.id}>
                <CardSwiper pokemon={pokemon} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='pagination' />

      </div>
    </div>
  );

}

export default App
