import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Headers, Http, Response } from '@angular/http'; 
import { TablaIniciativaService } from '../../../servicios/tabla-iniciativa.service';


@Component({
  selector: 'app-tabla-iniciativas',
  templateUrl: './tabla-iniciativas.component.html',
  styleUrls: ['./tabla-iniciativas.component.css']
})
export class TablaIniciativasComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  id: string;
  //Datos Tabla
  datosTablaIni: any[] = [];
  
  cargando: boolean = true;

  sinAct: string = "Existen tareas sin actividades registradas";
  conAct: string = "Existen tareas con actividades registradas";
  ptoAte: string = "Existen puntos de atención levantados";

  constructor(private _tablaIniciativaService: TablaIniciativaService, 
              private _router: Router, 
              private _http: Http) { }

  ngOnInit() {
    //Configuraciones DataTable
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
              "sFirst":    "<<", //"Primero"
              "sLast":     ">>", //"Último"
              "sNext":     "Siguiente",
              "sPrevious": "Anterior"
          },
          "oAria": {
              "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
              "sSortDescending": ": Activar para ordenar la columna de manera descendente"
          }
      },
      columnDefs: [ {
        "targets": 'no-sort',
        "orderable": false,
      } ]
    }); //

    //Opciones dataTable
    this.dtOptions = {
      //pagingType: 'full_numbers', //Muestra botones primera | última (página) 
      pageLength: 25, //Registros por Página
    };



    //Obtener Datos Tabla;
    this._tablaIniciativaService.getDatosIniciativa()
    .subscribe(res => {
      for(const id$ in res){
        this.datosTablaIni.push(res[id$]);     
      }
      this.datosTablaIni.pop();
      this.cargando = false; //Carga los datos y luego los muestra      
    })

  }
}
