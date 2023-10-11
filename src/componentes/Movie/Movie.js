import React from "react";
import "./Movie.css";

function Movie() {
  return (
    <>
      <div class="movie">
        <img
          class="movie__image"
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSgFYC7RewKQ0KqX6CV9NBy2cMPsWgFm_9_qToNlsPqHV_GBX2n"
          alt="Póster de la película 1"
        />
        <div class="movies__container-text">
          <h2 class="movie__title">Título: Secreto en la montaña</h2>
          <p class="movie__paragraph">
            Descripción: Dos vaqueros se conocen mientras esperan ser
            contratados por el ranchero Joe Aguirre. Cuando su jefe los envía a
            cuidar ganado a la montaña Brokeback, entre ambos surge un
            sentimiento especial que deriva en una relación íntima.
          </p>
          <p class="movie__premiere">Estreno: 9 de diciembre de 2005</p>
          <p class="movie__director">Director: Ang Lee</p>
        </div>
      </div>
      <div class="movie">
        <img
          class="movie__image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp_2JWhvdh8b7CT6y62q0alRgO9u_M9JeKRbvPjF7yzBU9HbdE"
          alt="Póster de la película 2"
        />
        <div class="movies__container-text">
          <h2 class="movie__title">Título: Chicas pesadas</h2>
          <p class="movie__paragraph">
            Descripción: Recién entrando a la prepa, una adolescente entabla
            amistad con tres populares, pero también manipuladoras estudiantes.
          </p>
          <p class="movie__premiere">Estreno: 19 de agosto de 2004</p>
          <p class="movie__director">Director: Mark Waters</p>
        </div>
      </div>
      <div class="movie">
        <img
          class="movie__image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Pv4-xERSMfJvII39Go7JUJyGK3f0XYmhTd5f7gKqys8qQMAL"
          alt="Póster de la película 3"
        />
        <div class="movies__container-text">
          <h2 class="movie__title">Título: El padrino</h2>
          <p class="movie__paragraph">
            Descripción: Michael Corleone, heredero del imperio de don Vito
            Corleone, intenta rehabilitarse socialmente y legitimizar todas las
            posesiones de la familia negociando con el Vaticano. Después de
            luchar toda su vida se encuentra cansado y centra todas sus
            esperanzas en encontrar a un sucesor que se haga cargo de los
            negocios.
          </p>
          <p class="movie__premiere">Estreno: 25 de diciembre de 1990</p>
          <p class="movie__director">Director: Francis Ford Coppola</p>
        </div>
      </div>
      <div class="movie">
        <img
          class="movie__image"
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT6ngrPT44rlTIzZ2lJ92H14PR9a10b3hbLbA6dAV2hCPw7Hi-M"
          alt="Póster de la película 4"
        />
        <div class="movies__container-text">
          <h2 class="movie__title">Título: Retribution</h2>
          <p class="movie__paragraph">
            Descripción: Matt, un empresario estadounidense que reside en
            Berlín, lleva a sus dos hijos en auto cuando, de improvisto, recibe
            una llamada. Un desconocido le informa de que hay una bomba en el
            vehículo, y la hará estallar si no sigue sus indicaciones.
          </p>
          <p class="movie__premiere">Estreno: 14 de septiembre de 2023</p>
          <p class="movie__director">Director: Nimród Antal</p>
        </div>
      </div>
      ;
    </>
  );
}

export default Movie;
