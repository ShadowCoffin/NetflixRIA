import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitalesService } from './_services/hospitales.service';
import { ListaHospitalesComponent } from './lista-hospitales/lista-hospitales.component';
import { NuevoHospitalComponent } from './nuevo-hospital/nuevo-hospital.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaHospitalesComponent,
    NuevoHospitalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [HospitalesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
