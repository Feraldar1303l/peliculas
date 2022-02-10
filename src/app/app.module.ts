import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PeliculaService } from './services/pelicula.service';
import { AltaPeliculaComponent } from './pages/alta-pelicula/alta-pelicula.component';
import { ListadoPeliculasComponent } from './pages/listado-peliculas/listado-peliculas.component';


@NgModule({
  declarations: [
    AppComponent,
    AltaPeliculaComponent,
    ListadoPeliculasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PeliculaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
