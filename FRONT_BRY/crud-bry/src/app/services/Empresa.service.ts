import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empresa } from '../models/Empresa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  ApiUrl = 'http://127.0.0.1:8000/api/empresas' 

  constructor(private http: HttpClient) { }

  getElements(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.ApiUrl);
  }

  createElements(empresa: Empresa): Observable<Empresa>{
    return this.http.post<Empresa>(this.ApiUrl, empresa);
  }

  deleteElement(id: number): Observable<any>{
    return this.http.delete<any>(`${this.ApiUrl}/${id}`)
  }
}
