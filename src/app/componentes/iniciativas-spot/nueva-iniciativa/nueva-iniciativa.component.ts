import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TablaIniciativaService } from '../../../servicios/tabla-iniciativa.service';

@Component({
  selector: 'app-nueva-iniciativa',
  templateUrl: './nueva-iniciativa.component.html',
  styleUrls: ['./nueva-iniciativa.component.css']
})
export class NuevaIniciativaComponent implements OnInit {

  datosIniSpotForm: FormGroup; //Guarda variables del formulario
  datosIniSpot: any; //Guardará todos los elementos del formulario en formato JSON
  

  lincheck = false;

  constructor(private _is: FormBuilder, 
              private _router: Router,
              private _tablaIniciativaService : TablaIniciativaService) { }

  ngOnInit() {

    this.datosIniSpotForm = this._is.group({
      nro: ['', [Validators.required]],
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
    this.datosIniSpot = this.guardarIniciativaSpot();
    this._tablaIniciativaService.postDatosIniciativa(this.datosIniSpot)
          .subscribe(res => {
            console.log(res.json());  
          })
  }

  guardarIniciativaSpot(){
    const guardarIniciativaSpot = {
      nro: this.datosIniSpotForm.get('nro').value,
      lin: this.datosIniSpotForm.get('lin').value,
      amb: this.datosIniSpotForm.get('amb').value,
      nom: this.datosIniSpotForm.get('nom').value,
      des: this.datosIniSpotForm.get('des').value,
      //participantes part: this.datosIniSpotForm.get('part').value,
      obj: this.datosIniSpotForm.get('obj').value,
      alc: this.datosIniSpotForm.get('alc').value,
      sitact: this.datosIniSpotForm.get('sitact').value,
      sitftr: this.datosIniSpotForm.get('sitftr').value,
      nec: this.datosIniSpotForm.get('nec').value,
      plnacc: this.datosIniSpotForm.get('plnacc').value,
      imp: this.datosIniSpotForm.get('imp').value,
      gragdos: this.datosIniSpotForm.get('gragdos').value,
      bencua: this.datosIniSpotForm.get('bencua').value,
      cosin: this.datosIniSpotForm.get('cosin').value
    }
    return guardarIniciativaSpot;
  }

  /* Valida Botón "Volver" */
  validarVolver(){
    let val = confirm("¿Desea volver sin guardar los cambios?");
    if(val){
      this._router.navigate(['/']);
    }
  }

  /* Validar solo ingreso de numeros */
  validaNumericos(event) {
    if(event.charCode <= 57){
      return true;
     }
    return false;        
  }

}
