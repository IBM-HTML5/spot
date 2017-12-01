import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Headers, Http, Response, RequestOptions  } from '@angular/http'; 
import { AuntenticacionService } from '../../servicios/auntenticacion.service'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {
  
  usrSAF:string;
  usrVal:boolean;

  //Cuando se inicia el componente hace llamado de servicio que ejecuta los datos
  constructor(private _autenticacionService: AuntenticacionService, 
              private _router: Router, 
              private _http: Http) {       
  }

  ngOnInit() {

    this._autenticacionService.getDatos()
    .subscribe( 
      res => {
        this.usrSAF = res.nom;
        if(this.usrSAF == '-1'){
          this.usrSAF = 'Usuario no identificado';
          this._router.navigate(['/noUser']);
        }
        //console.log(this.usrSAF);
      },
    );

  }
}
