import { Component, OnInit } from '@angular/core';
import { Pelicula} from 'src/app/models/pelicula';
import { TipoPelicula} from 'src/app/models/tipo_pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-alta-Pelicula',
  templateUrl: './alta-pelicula.component.html',
  styleUrls: ['./alta-pelicula.component.css']
})
export class AltaPeliculaComponent implements OnInit {

  pelicula!: Pelicula;
  tipos:TipoPelicula[]=[];

  constructor(private peliculaService:PeliculaService) { }

  ngOnInit(): void {
    this.pelicula=this.peliculaService.nuevaPelicula();
    this.tipos=this.peliculaService.getTipos();
  }
   insertarPelicula():void{
    this.peliculaService.agregarPelicula(this.pelicula);
    this.pelicula = this.peliculaService.nuevaPelicula();
  }

}
