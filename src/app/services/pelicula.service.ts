import { Injectable } from '@angular/core';
import { Pelicula} from '../models/pelicula';
import { TipoPelicula} from '../models/tipo_pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private peliculas: Pelicula[];
  private clasif: TipoPelicula[];

  constructor() {
    this.peliculas = [];
    this.clasif = [
      {
        id: 0,
        descripcion: 'No definido'
      },
      {
        id: 1,
        descripcion: 'AA'
      },
      {
        id: 2,
        descripcion: 'A'
      },
      {
        id: 3,
        descripcion: 'B'
      },
      {
        id: 4,
        descripcion: 'B15'
      },
      {
        id: 5,
        descripcion: 'C'
      },
      {
        id: 6,
        descripcion: 'D'
      }
    ];
  }

  getPeliculas(){
    return this.peliculas;
  }
  getTipos(){
    return this.clasif;
  }
  agregarPelicula(pelicula:Pelicula){
    this.peliculas.push(pelicula)
  }
  nuevaPelicula():Pelicula{
    return{
      id:this.peliculas.length+1,
      titulo: '',
      genero: '',
      anio: 0,
      director: '',
      clasif: ''
    };
  }
}
