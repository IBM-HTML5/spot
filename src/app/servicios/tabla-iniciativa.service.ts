import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class TablaIniciativaService {

  //TABLA INICIATIVA
  datosTabla_url = "http://167.28.65.134/ibm/asp/spot/getListAngular2.asp";

  //FICHA INICIATIVA
  datoIni_url = "http://167.28.65.134/ibm/asp/spot/getIniDtaAngular.asp";
  insertDatoIni_url ="";
  editDatoIni_url =""; 

  //ETAPAS [DEF/PLAN/CON/PRU/ENT] -OK
  datoURL_etapas = "http://167.28.65.134/ibm/asp/spot/getIniEtpN.asp";
  editDatoURL_etapas = "";
  insertDatoURL_etapas = "";

  //TAREAS [DEF/PLAN/CON/PRU/ENT] -OK
  datoURL_tareas = "http://167.28.65.134/ibm/asp/spot/getLstTarN.asp";
  editdatoURL_tareas = "";
  insertdatoURL_tareas = "";

  //PUNTOS DE ATENCIÓN [DEF/PLAN/CON/PRU/ENT]
  datoURL_ptoAte = "";
  editdatoURL_ptoAte = "";
  insertdatoURL_ptoAte = "";

    
  constructor(private _http: Http) {  }

  //Leer datos [Tabla Iniciativa]
  getDatosIniciativa(){
    return this._http.get(this.datosTabla_url)
      .map( res => res.json() )
  }

  /* FICHA INICIATIVA */
  // 1. Leer dato especifico ficha
  getDatoIniciativa(id$: string){
    const url = `${this.datoIni_url}?idini=${id$}`;
    return this._http.get(url)  
      .map( res => res.json() );
  }

  // 2. Agregar ficha
  postDatosIniciativa(datosIniciativa: any){
    const newDatosIni = JSON.stringify(datosIniciativa);
    const headers = new Headers({
      'Content-Type':  'application/json'
    });
      return this._http.post( this.insertDatoIni_url, newDatosIni, {headers} )
        .map(res=> {
          return res.json();
        })
  }

  // 3. Editar ficha
  putDatoIniciativa(datoIni: any, id$: string){
    const newDatoIni = JSON.stringify(datoIni);
    const headers =  new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.editDatoIni_url}?idini=${id$}`;

    return this._http.put(url, newDatoIni, {headers})
          .map (res => {
            //console.log(res.json());
            return res.json();
          })
  }


  /* [TAREAS - DEF/PLAN/CON/PRU/ENT] */
  // 1. Leer tareas
  getDatosTareasEtapas(id$: string, idEt$: string){
    const url =  `${this.datoURL_tareas}?idini=${id$}&idEtapa=${idEt$}`;
    //console.log(url);
    return this._http.get(url)
      .map( res => res.json() )
  }

  // 2. Agregar Tarea 
  postDatoTareasEtapas(){}

  // 3. Actualizar Tarea 
  putDatoTareasEtapas(){}

  /* [PUNTOS DE ATENCIÓN - DEF/PLAN/CON/PRU/ENT] */
  // 1. Leer Punto de Atención
  getDatoPtoAtencion(){}

  // 2. Agregar Punto de Atención 
  postDatoPtoAtencion(){}

  // 3. Actualizar Punto de Atención  
  putDatoPtoAtencion(){}


}
