import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolicitudVacacionesComponent } from './solicitud-vacaciones/solicitud-vacaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    SolicitudVacacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [SolicitudVacacionesComponent]
})
export class AppModule { }
