import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SerachGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _apiUrl:string = 'https://api.giphy.com/v1/gifs';
  private _apiKey:string = 'gQuomHL3C1EMOgHPPLuF3N3f96h3vSfx';
  private _historial:string[] = []

  public resultados: Gif[] = [];

  constructor ( private http : HttpClient ) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  get historial(){
    return [ ...this._historial ];
  }

  buscarGifs ( query:string ){
    query = query.trim().toLocaleLowerCase();
    
    if ( !this._historial.includes( query ) ){
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
    .set('api_key', this._apiKey)
    .set('limit', '10')
    .set('q', query)

    this.http.get<SerachGifsResponse>(`${this._apiUrl}/search`, { params: params })
    .subscribe( ( res ) => {
      this.resultados = res.data
      localStorage.setItem('resultados', JSON.stringify(res.data));
    });
  }
}
