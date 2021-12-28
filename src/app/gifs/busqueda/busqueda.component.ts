import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  @ViewChild('txtData') parametro !: ElementRef<HTMLInputElement>;
  
  constructor( private gService : GifsService ){}
  
  buscar () {
    const valor = this.parametro.nativeElement.value;
    if ( valor.trim().length === 0 ) return;
    this.gService.buscarGifs( valor );
    this.parametro.nativeElement.value = '';
  }

}
