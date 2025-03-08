import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TesteDadosService } from '../../shared';

@Component({
  selector: 'app-teste-4',
  imports: [CommonModule,],
  templateUrl: './teste-4.component.html',
  styleUrl: './teste-4.component.scss'
})
export class Teste4Component {
 faturamento: any[] = []

  constructor(private _dadosService: TesteDadosService) {}

  ngOnInit() {
    this.buscarDadosFaturamento()
  }

  private buscarDadosFaturamento() {
    this._dadosService.buscarDadosFaturamentoEstados().subscribe((response) => {
      this.faturamento = response
      this.calcularPercentual()
    })
  }

  calcularPercentual() {
    const total = this.faturamento.reduce((sum, item) => sum + item.valor, 0)
    this.faturamento = this.faturamento.map(item => ({
      ...item,
      percentual: (item.valor / total) * 100
    }))
  }
}
