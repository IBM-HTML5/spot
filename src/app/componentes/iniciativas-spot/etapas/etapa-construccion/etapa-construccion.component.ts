import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etapa-construccion',
  templateUrl: './etapa-construccion.component.html',
  styleUrls: ['./etapa-construccion.component.css']
})
export class EtapaConstruccionComponent implements OnInit {

  edit_cons:boolean = false;
  adju_cons:boolean = false;
  nueva_tarea:boolean = false;
  editar_tarea:boolean = false;

  avances = ['0%', '5%', '10%', '15%', '20%', '25%', '30%', '35%', '40%', '45%', '50%',
            '55%', '60%', '65%', '70%', '75%', '80%', '85%', '90%', '95%', '100%'];
            

  constructor() { }

  ngOnInit() {
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
  
}

/* Mostrar funciones */
  editarEtapaCons(){
    this.edit_cons = !this.edit_cons;
  }
  adjuntarEtapaCons(){
    this.adju_cons = !this.adju_cons;
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
