import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hospital } from '../_models/hospital';

@Injectable({
  providedIn: 'root'
})
export class HospitalesService {

  private hospitales: Hospital[] = [new Hospital(1, 'Sheba Medical Center'), new Hospital(2, 'Karolinska Universitetssjukhuset'), new Hospital(3,
    'Aarhus Universitetshospital	'), new Hospital(4, 'Hôpital Universitaire Pitié Salpêtrière')];

  constructor() { }

  public getAll(): Observable<Hospital[]> {
    const result = new Observable<Hospital[]>(observer => {
      setTimeout(() => {
        observer.next(this.hospitales);
      }, 1000);
    });
    return result;
  }

  public addHospital(x: Hospital): Observable<Hospital> {
    const result = new Observable<Hospital>(observer => {
      setTimeout(() => {
        this.hospitales.push(x);
        observer.next(x);
      }, 1000);
    });
    return result;
  }
}
