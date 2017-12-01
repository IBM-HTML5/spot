import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IMyDpOptions } from 'mydatepicker';
import { Router, ActivatedRoute } from '@angular/router';
import { EtapasIniciativasService } from '../../../../servicios/etapas-iniciativas.service';
import { TareasIniciativasService } from '../../../../servicios/tareas-iniciativas.service';

@Component({
  selector: 'app-etapa-definicion',
  templateUrl: './etapa-definicion.component.html',
  styleUrls: ['./etapa-definicion.component.css']
})

export class EtapaDefinicionComponent implements OnInit {

  insertEtForm: FormGroup; //Ingresar Nueva Etapa 
  insertEt: any; //Guardara datos nueva etapa en formato JSON

  editEtForm: FormGroup; //Editar Etapa 
  editEt: any; //Guardara datos actualizados en formato JSON
  
  insertTareaForm: FormGroup; //Ingresar Tarea 
  insertTarea: any; //Guardara datos actualizados en formato JSON 

  editTareaForm: FormGroup; //Editar Tarea 
  editTarea: any; //Guardara datos actualizados en formato JSON 

  etapaDef: any; //Guardará todos los elementos del formulario en formato JSON
  datosDef: any = {};
  datosEtp: any[] = []; //Variable que contendrá todos los datos que retorna ASP
  datosTar: any[] = []; //Variable que contendrá todos los datos que retorna ASP
  

  cargando: boolean = true;
  id: string;
  idEtp: string;

  contador; //Cuenta total de tareas
  replAler; //Muestra alerta Replanificación Tareas

  //Variables para mostrar formularios
  verEditEtp:boolean = false;
  adjuEtp:boolean = false;
  nueva_tarea:boolean = false;
  editar_tarea:boolean = false;
            
  //Opciones DATEPICKER
  public myDatePickerOptions: IMyDpOptions = {
    dayLabels: {su: "Do", mo: "Lu", tu: "Ma", we: "Mi", th: "Ju", fr: "Vi", sa: "Sa"},
    monthLabels: {1: "Ene", 2: "Feb", 3: "Mar", 4: "Abr", 5: "May", 6: "Jun", 7: "Jul", 8: "Ago", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dic"},
    todayBtnTxt: 'Hoy',
    dateFormat: 'dd-mm-yyyy',
    firstDayOfWeek: 'mo',
    sunHighlight: true,
    satHighlight: true,
    markCurrentDay: false,
    inline: false,
    alignSelectorRight: true,
    disableWeekends: true,
    disableUntil: {year: 2016, month: 12, day: 31},
    //disableSince: {year: 2026, month: 1, day: 1}
  };

  public myForm: FormGroup;

  constructor(private _valForm: FormBuilder,
              private _etapasIniciativasService: EtapasIniciativasService,
              private _tareasIniciativasService: TareasIniciativasService,
              private _activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    //Opciones DATATABLE
    $.extend( true, $.fn.dataTable.defaults, {
      oLanguage : {
          "sProcessing":     "Procesando...",
          "sLengthMenu":     "Mostrar _MENU_ registros",
          "sZeroRecords":    "No se encontraron resultados",
          "sEmptyTable":     "Ningún dato disponible en esta tabla",
          "sInfo":           "Mostrando _START_ de _END_ de un total de _TOTAL_ registros",
          "sInfoEmpty":      "Mostrando 0 de 0 de un total de 0 registros",
          "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
          "sInfoPostFix":    "",
          "sSearch":         "Buscar:",
          "sUrl":            "",
          "sInfoThousands":  ",",
          "sLoadingRecords": "Cargando...",
          "oPaginate": {
              "sFirst":    "Primero",
              "sLast":     "Último",
              "sNext":     "Siguiente",
              "sPrevious": "Anterior"
          },
          "oAria": {
              "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
              "sSortDescending": ": Activar para ordenar la columna de manera descendente"
          }
      },
      "columnDefs": [ {
        "targets": 'no-sort',
        "orderable": false
      } ]
    }
  );

  //Validaciones formulario Nueva Etapa
  this.insertEtForm = this._valForm.group({
    fecIni: ['', Validators.required],
    fecTer: ['', Validators.required],
    avn: [{value: '', disabled: true}, []]
  });
  //Validaciones formulario Editar Etapa
  this.editEtForm = this._valForm.group({
    fecIni: ['', Validators.required],
    fecTer: ['', Validators.required],
    avn: [{value: '', disabled: true}, []]
  });

  //Validaciones formulario Nueva Tarea
  this.insertTareaForm = this._valForm.group({
    nom: ['', Validators.required],
    des: [''],
    fecIni: ['', Validators.required],
    fecTer: ['', Validators.required],
    avn: ['', Validators.required]
  });
  //Validaciones formulario Editar Tarea
  this.editTareaForm = this._valForm.group({
    fecIni: ['', Validators.required],
    fecTer: ['', Validators.required],
    avn: [{value: '', disabled: true}, []]
  });
  


  //Obtener datos de ASP
  this._activatedRouter.params
    .subscribe( parametros => {
      this.id = parametros['id'],
      this.idEtp = "1",
      //Datos Tareas Etapa Definición
      this._tareasIniciativasService.getDatosTareasEtapas(this.id, this.idEtp)
        .subscribe( res => {
          for(const id$ in res){
              this.datosTar.push(res[id$]);  
          }
          this.datosTar.pop();
          this.contador = this.datosTar.length;
          this.cargando = false; 
        }),
      //Datos Etapa Definición
      this._etapasIniciativasService.getDatosEtapas(this.id, this.idEtp)
        .subscribe( res => {
          this.datosEtp = res;
        })
  })

}

//Enviar Formulario Nueva Etapa
enviarNuevaEtapaForm(){
  this.insertEt = this.guardarNuevaEtp();
  console.log("Enviar Datos para nueva etapa: " + this.insertEt);
   /*this._etapasIniciativasService.postDatoEtapas(this.insertEt, this.id)
   .subscribe( res => {
      console.log(res);
    })*/
}
guardarNuevaEtp(){
  const guardarNuevaEtp = {
    fecIni: this.insertEtForm.get('fecIni').value,
    fecTer: this.insertEtForm.get('fecTer').value
  }
  return guardarNuevaEtp;
}

//Enviar Formulario Editar Etapa
enviarEditEtapaForm(){
 this.editEt = this.guardarEditEtp();
 console.log("Enviar Datos para editar:" + this.editEt);
 /* Enviar mediante servicio a asp*/
}
guardarEditEtp(){
  const guardarEditEtp = {
    ssns: "",
    ini: "3", //poner id iniciativa
    etp: "1",
    tar: "0", //poner id de la tarea
    nom: this.insertTareaForm.get('nom').value,
    des: this.insertTareaForm.get('des').value,
    tarini: this.insertTareaForm.get('fecIni').value,
    tarter: this.insertTareaForm.get('fecTer').value,
    avn: this.insertTareaForm.get('avn').value
  }
  return guardarEditEtp;
}

//Enviar Formulario Nueva Tarea
enviarNuevaTareaForm(){
  this.insertTarea = this.guardarNuevaTarea();
  console.log("Nueva tarea: " + this.insertTarea);
  this._tareasIniciativasService.postDatoTareasEtapas(this.insertTarea)
  .subscribe(res => {
    console.log(res);
  })
}
guardarNuevaTarea(){
  const guardarNuevaTarea = {
    ssns: "",
    ini: "3", //id iniciativa
    etp: "1",
    tar: "0",
    nom: this.insertTareaForm.get('nom').value,
    des: this.insertTareaForm.get('des').value,
    tarini: this.insertTareaForm.get('fecIni').value,
    tarter: this.insertTareaForm.get('fecTer').value,
    avn: this.insertTareaForm.get('avn').value
  }
  return guardarNuevaTarea;
}

//Enviar Formulario Editar Tarea


valReplan(id$, rpl){
  this._tareasIniciativasService.getAlerReplan1(id$)
    .subscribe (res => {
      this.replAler = res;

      if(Object.keys(this.replAler).length > 1){
        alert(mostrarFechas(this.replAler))
      } else {
        alert(this.replAler.fec1)
      }

      function mostrarFechas(fec){
        let fechas = [];
        for(const id$ in fec){
           fechas.push(fec[id$]);    
        }
        fechas.pop();
        let cadena = fechas.join('\n');       
        return cadena; 
      }

    });
}

//Validaciones DATEPICKER
  setDate(): void {
    // Establecer la fecha actual usando la función patchValue
    let date = new Date();
    this.editEtForm.patchValue({myDate: {
    date: {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()}
    }});
  }
  clearDate(): void {
    // Borrar la fecha usando la función patchValue
    this.myForm.patchValue({myDate: null});
  }


/* Mostrar funciones EDITAR / ADJUNTAR / NUEVA TAREA / EDITAR TAREA */
  verEditarEtapa(){
    this.verEditEtp = !this.verEditEtp;
  }
  adjuntarEtapa(){
    this.adjuEtp = !this.adjuEtp;
  }
  nuevaTarea(){
    this.nueva_tarea = !this.nueva_tarea;
    this.editar_tarea = false;
    $("html, body").animate({scrollTop: $("#destino").offset().top}, 500);
  }
  editarTarea(){
    this.editar_tarea = !this.editar_tarea;
    this.nueva_tarea = false;
    $("html, body").animate({scrollTop: $("#destino").offset().top}, 500);
  }

}
