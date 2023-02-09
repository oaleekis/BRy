import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Funcionario } from '../models/Funcionario';
import { Observable } from 'rxjs';

@Injectable()
export class FuncionarioService {
    ApiUrl = 'http://127.0.0.1:8000/api/funcionarios' 

  constructor(private http: HttpClient) { }

  getElements(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.ApiUrl);
  }

  createElements(funcionario: Funcionario): Observable<Funcionario>{
    return this.http.post<Funcionario>(this.ApiUrl, funcionario);
  }

  deleteElement(id: number): Observable<any>{
    return this.http.delete<any>(`${this.ApiUrl}/${id}`)
  }
}