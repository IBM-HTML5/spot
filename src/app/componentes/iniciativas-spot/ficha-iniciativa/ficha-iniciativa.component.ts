import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { TablaIniciativaService } from '../../../servicios/tabla-iniciativa.service';


@Component({
  selector: 'app-ficha-iniciativa',
  templateUrl: './ficha-iniciativa.component.html',
  styleUrls: ['./ficha-iniciativa.component.css']
})
export class FichaIniciativaComponent implements OnInit {

  editDatosIniSpotForm: FormGroup; //Guarda variables del formulario
  editDatosIniSpot: any; //Guardará todos los elementos del formulario en formato JSON

  datoIni: any = []; //Guardar Dato que se retorna el ID 
  id: string; //Guarda ID de la ficha
  
  lincheck: boolean = false;//Valida campos formulario

  constructor(private _fichaIniciativaService: TablaIniciativaService,
              private _is: FormBuilder, 
              private _router: Router,
              private _activatedRouter: ActivatedRoute) { 

    //mandamos id a getDatoIniciativa()
    this._activatedRouter.params
      .subscribe( parametros => {
        this.id = parametros['id'],
        this._fichaIniciativaService.getDatoIniciativa(this.id)
          .subscribe( res => this.datoIni = res )
    })
   
  }

  ngOnInit() {

    this.editDatosIniSpotForm = this._is.group({
      nro: [{value: '', disabled:true}, Validators.required],
      lin: ['', Validators.required],
      amb: ['', Validators.required],
      nom: ['', Validators.required],
      des: ['', ],
      //participantes part: ['', ],
      obj: ['', ],
      alc: ['', ],
      sitact: ['', ],
      sitftr: ['', ],
      nec: ['', ],
      plnacc: ['', ],
      imp: ['', ],
      gragdos: ['', ],
      bencua: ['', ],
      cosin: ['', ]
    });

  }

  enviarForm(){
    this.editDatosIniSpot = this.guardarIniciatovaSpot();
    this._fichaIniciativaService.putDatoIniciativa(this.editDatosIniSpot, this.id)
      .subscribe( res => {

      })
  }

  guardarIniciatovaSpot(){
    const guardarIniciatovaSpot = {
      nro: this.editDatosIniSpotForm.get('nro').value,
      lin: this.editDatosIniSpotForm.get('lin').value,
      amb: this.editDatosIniSpotForm.get('amb').value,
      nom: this.editDatosIniSpotForm.get('nom').value,
      des: this.editDatosIniSpotForm.get('des').value,
      //participantes part: this.editDatosIniSpotForm.get('part').value,
      obj: this.editDatosIniSpotForm.get('obj').value,
      alc: this.editDatosIniSpotForm.get('alc').value,
      sitact: this.editDatosIniSpotForm.get('sitact').value,
      sitftr: this.editDatosIniSpotForm.get('sitftr').value,
      nec: this.editDatosIniSpotForm.get('nec').value,
      plnacc: this.editDatosIniSpotForm.get('plnacc').value,
      imp: this.editDatosIniSpotForm.get('imp').value,
      gragdos: this.editDatosIniSpotForm.get('gragdos').value,
      bencua: this.editDatosIniSpotForm.get('bencua').value,
      cosin: this.editDatosIniSpotForm.get('cosin').value
    }
    return guardarIniciatovaSpot;
  }

  /* Valida Botón "Volver" */
  validarVolver(){
    let val = confirm("¿Desea volver sin guardar los cambios?");
    if(val){
      this._router.navigate(['/']);
    }
  }

}
