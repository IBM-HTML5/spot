import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class AuntenticacionService {

  userURL = "http://167.28.65.134/ibm/asp/ccadb.asp";

  constructor(private _http: Http) {  }
  getDatos(){
    return this._http.get(this.userURL)  //usar la url que corresponda
      .map(
        res => res.json()
      )
  }
}
