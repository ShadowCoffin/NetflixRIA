import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HospitalesService } from '../_services/hospitales.service';
import { Hospital } from '../_models/hospital';

@Component({
  selector: 'app-nuevo-hospital',
  templateUrl: './nuevo-hospital.component.html',
  styleUrls: ['./nuevo-hospital.component.scss']
})
export class NuevoHospitalComponent implements OnInit {

  public hospitalForm: FormGroup = new FormGroup({});

  constructor(private service: HospitalesService) { }

  ngOnInit(): void {
    this.hospitalForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
  }

  onSubmit() {
    this.service.addHospital(new Hospital(this.hospitalForm.controls.id.value, this.hospitalForm.controls.nombre.value)).subscribe(
    (ok) => {
      alert('Hospital guardado correctamente')
      this.hospitalForm.reset();
    },
    (error) => {
        //manejar el error
      }
    );
  }

}
