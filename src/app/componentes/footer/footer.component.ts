import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  titulo:string = 'Subgerencia de Integración Funcional - BancoEstado -';
  year = new Date().getFullYear().toString();

  num: number = 90;
  
  constructor() { }

  ngOnInit() {
    var num2: number = this.num;
    $(function() {
      var current_progress = num2;
      $("#dynamic")
          .css("width", current_progress + "%")
    });
  }

}
