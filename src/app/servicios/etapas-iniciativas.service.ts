import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class EtapasIniciativasService {

  //ETAPAS [DEF/PLAN/CON/PRU/ENT]
  datoURL_etapas = "http://167.28.65.134/ibm/asp/spot/getIniEtpN.asp";
  editDatoURL_etapas = "";
  insertDatoURL_etapas = "";

  constructor(private _http: Http) { }

  /* [ETAPAS - DEF/PLAN/CON/PRU/ENT] */
  // 1. Leer etapa
  getDatosEtapas(id$: string, idEt$: string){
    const url =  `${this.datoURL_etapas}?idini=${id$}&idEtapa=${idEt$}`;
    //console.log(url);
    return this._http.get(url)
      .map( res => res.json() )
  }

  // 2. Crear etapa
  postDatoEtapas(etapa, id){}

  // 3. Editar etapa
  putDatoEtapas(){}

  

}
