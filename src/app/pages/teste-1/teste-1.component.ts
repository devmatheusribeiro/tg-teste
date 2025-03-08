import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-teste-1',
  imports: [CommonModule],
  templateUrl: './teste-1.component.html',
  styleUrl: './teste-1.component.scss'
})
export class Teste1Component {
  indice = 13
  soma = 0
  k = 0
  resultado = ''

  somar() {
    while(this.k < this.indice) {
      this.k++
      this.soma += this.k
    }
    this.resultado =  this.resultado = `O resultado é ${this.soma}`
  }
}
