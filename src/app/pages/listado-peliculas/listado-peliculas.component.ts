import { Component, OnInit } from '@angular/core';
import { Pelicula} from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-listado-Pelicula',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  peliculas:Pelicula[] = [];

  constructor(private peliculaService:PeliculaService) { }

  ngOnInit(): void {
    this.peliculas = this.peliculaService.getPeliculas();
  }

}
