import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Gif } from '../interfaces/gifs.interface';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {

  constructor( private gifsServices : GifsService ) { }
  
  get gifs () {
    return this.gifsServices.resultados;
  }

}
