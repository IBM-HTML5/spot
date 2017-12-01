import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class TareasIniciativasService {

  //TAREAS [DEF/PLAN/CON/PRU/ENT]
  datoURL_tareas = "http://167.28.65.134/ibm/asp/spot/getLstTarN.asp";
  enviardatoURL_tareas = "http://167.28.65.134/ibm/asp/spot/setEtpTarN.asp";
  datoAlertURL_replan = "http://167.28.65.134/ibm/asp/spot/getLstTarRplN.asp"

  constructor(private _http: Http) { }

/* TAREAS - DEF/PLAN/CON/PRU/ENT */
  // 1. Leer tareas
  getDatosTareasEtapas(id$: string, idEt$: string){
    const url =  `${this.datoURL_tareas}?idini=${id$}&idEtapa=${idEt$}`;
    //console.log(url);
    return this._http.get(url)
      .map( res => res.json() )
  }

  // 2. Agregar Tarea 
  postDatoTareasEtapas(datosTarea: any){
    const newDatosTarea = JSON.stringify(datosTarea);
    const headers = new Headers({
      'Content-Type':  'application/json'
    });
      return this._http.post( this.enviardatoURL_tareas, newDatosTarea, {headers} )
        .map(res=> {
          return res.json();
        })
  }

  // 3. Actualizar Tarea 
  putDatoTareasEtapas(datosTarea){
    const newDatosTarea = JSON.stringify(datosTarea);
    const headers = new Headers({
      'Content-Type':  'application/json'
    });
      return this._http.put( this.enviardatoURL_tareas, newDatosTarea, {headers} )
        .map(res=> {
          return res.json();
        })
  }

  // 4. Alerta Replanificaciones
  getAlerReplan1(idRepl$: string){
    const url =  `${this.datoAlertURL_replan}?tar=${idRepl$}`;
    //console.log(url);
    return this._http.get(url)
      .map( res => res.json() )
  }

}
