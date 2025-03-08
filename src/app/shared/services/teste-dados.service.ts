import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TesteDadosService {

  constructor(private http: HttpClient) { }

  public buscarDadosFaturamento(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/faturamento');
  }

  public buscarDadosFaturamentoEstados(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/faturamentoEstados');
  }
}
