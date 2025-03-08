import { Component, OnInit } from '@angular/core';
import { TesteDadosService } from '../../shared/services/teste-dados.service';

@Component({
  selector: 'app-teste-3',
  imports: [],
  templateUrl: './teste-3.component.html',
  styleUrl: './teste-3.component.scss'
})
export class Teste3Component implements OnInit {
  menorFaturamento: number = 0;
  maiorFaturamento: number = 0;
  diasAcimaMedia: number = 0;
  faturamento: any[] = [];

  constructor(private _dadosService: TesteDadosService) {}

  ngOnInit() {
    this.buscarDadosFaturamento()
  }

  private buscarDadosFaturamento() {
    this._dadosService.buscarDadosFaturamento().subscribe((response) => {
      this.faturamento = response;
      this.calcularFaturamento();
    })
  }

  calcularFaturamento() {
    const valores = this.faturamento.filter(d => d.valor > 0).map(d => d.valor);
    this.menorFaturamento = Math.min(...valores);
    this.maiorFaturamento = Math.max(...valores);
    const mediaMensal = valores.reduce((a, b) => a + b, 0) / valores.length;
    this.diasAcimaMedia = valores.filter(v => v > mediaMensal).length;
  }
}
