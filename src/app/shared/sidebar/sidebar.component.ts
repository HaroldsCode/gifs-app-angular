import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor( private gService : GifsService ) { }

  get historial (){
    return this.gService.historial;
  }

  buscar( parametro:string ) {
    this.gService.buscarGifs(parametro);
  }
}
