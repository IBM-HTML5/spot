/*  M o d u l o s  -  (Se declaran en @NgModule declarations[]) */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { Routes, RouterModule } from '@angular/router'; 
import { DataTablesModule } from 'angular-datatables';
import { ReactiveFormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';
import { HttpModule } from '@angular/http';
//import { FormsModule } from '@angular/forms';


/*  C o m p o n e n t e s  -  (Se declaran en @NgModule imports[]) */
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { TablaIniciativasComponent } from './componentes/iniciativas-spot/tabla-iniciativas/tabla-iniciativas.component';
import { NuevaIniciativaComponent } from './componentes/iniciativas-spot/nueva-iniciativa/nueva-iniciativa.component';
import { FichaIniciativaComponent } from './componentes/iniciativas-spot/ficha-iniciativa/ficha-iniciativa.component';
import { EtapaDefinicionComponent } from './componentes/iniciativas-spot/etapas/etapa-definicion/etapa-definicion.component';
import { EtapaPlanComponent } from './componentes/iniciativas-spot/etapas/etapa-plan/etapa-plan.component';
import { EtapaConstruccionComponent } from './componentes/iniciativas-spot/etapas/etapa-construccion/etapa-construccion.component';
import { EtapaPruebasComponent } from './componentes/iniciativas-spot/etapas/etapa-pruebas/etapa-pruebas.component';
import { EtapaEntregaComponent } from './componentes/iniciativas-spot/etapas/etapa-entrega/etapa-entrega.component';
import { PtDefinicionComponent } from './componentes/iniciativas-spot/puntos-atencion/pt-definicion/pt-definicion.component';
import { PtPlanComponent } from './componentes/iniciativas-spot/puntos-atencion/pt-plan/pt-plan.component';
import { PtConstruccionComponent } from './componentes/iniciativas-spot/puntos-atencion/pt-construccion/pt-construccion.component';
import { PtPruebasComponent } from './componentes/iniciativas-spot/puntos-atencion/pt-pruebas/pt-pruebas.component';
import { PtEntregaComponent } from './componentes/iniciativas-spot/puntos-atencion/pt-entrega/pt-entrega.component';
import { PageErrorComponent } from './componentes/page-error/page-error.component'


/*  S e r v i c i o s  -  (Se declaran en @NgModule providers[]) */ //
import { AuntenticacionService } from './servicios/auntenticacion.service'
import { TablaIniciativaService } from './servicios/tabla-iniciativa.service';
import { TareasIniciativasService } from './servicios/tareas-iniciativas.service'; 
import { EtapasIniciativasService } from './servicios/etapas-iniciativas.service';

/*  P i p e s  -  (Se declaran en @NgModule declarations[]) */
import { DiccionarioPipe } from './pipes/diccionario.pipe';
import { TextoCortoPipe } from './pipes/texto-corto.pipe';


/*  R u t a s  */
const routes: Routes = [
  { path: '', component: TablaIniciativasComponent }, // Componente que carga por defecto
  { path: 'inicio', component: TablaIniciativasComponent }, // Ruta definida a un componente
  { path: 'nueva-iniciativa', component: NuevaIniciativaComponent },
  { path: 'ficha-iniciativa/:id', component: FichaIniciativaComponent }, 
  { path: 'etapa-definicion/:id', component: EtapaDefinicionComponent },
  { path: 'punto-atencion-definicion', component: PtDefinicionComponent },
  { path: 'etapa-plan/:id', component: EtapaPlanComponent },
  { path: 'punto-atencion-plan', component: PtPlanComponent },
  { path: 'etapa-construccion/:id', component: EtapaConstruccionComponent },
  { path: 'punto-atencion-construccion', component: PtConstruccionComponent },
  { path: 'etapa-pruebas/:id', component: EtapaPruebasComponent },
  { path: 'punto-atencion-pruebas', component: PtPruebasComponent },  
  { path: 'etapa-entrega/:id', component: EtapaEntregaComponent },
  { path: 'punto-atencion-entrega', component: PtEntregaComponent },
  { path: 'noUser', component: PageErrorComponent },   
  { path: '**', component: TablaIniciativasComponent } // Ruta que no existe
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TablaIniciativasComponent,
    NuevaIniciativaComponent,
    FichaIniciativaComponent,
    EtapaDefinicionComponent,
    EtapaPlanComponent,
    EtapaConstruccionComponent,
    EtapaPruebasComponent,
    EtapaEntregaComponent,
    PtDefinicionComponent,
    PtPlanComponent,
    PtConstruccionComponent,
    PtPruebasComponent,
    PtEntregaComponent,
    PageErrorComponent,
    DiccionarioPipe,
    TextoCortoPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    DataTablesModule,
    ReactiveFormsModule,
    MyDatePickerModule,
    HttpModule,
    //FormsModule 
  ],
  providers: [
    {provide: LOCALE_ID, useValue: "es"}, //Para usar las funciones en Español 
    AuntenticacionService,
    TablaIniciativaService, 
    TareasIniciativasService,
    EtapasIniciativasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
