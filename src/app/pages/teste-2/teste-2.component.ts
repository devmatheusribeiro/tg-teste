import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-teste-2',
  imports: [CommonModule, FormsModule],
  templateUrl: './teste-2.component.html',
  styleUrl: './teste-2.component.scss'
})
export class Teste2Component {
  numero: number = 0
  resultado: string | null = null

  checkFibonacci() {
    if (this.isFibonacci(this.numero)) {
      this.resultado = `O número ${this.numero} pertence à sequência de Fibonacci.`
    } else {
      this.resultado = `O número ${this.numero} não pertence à sequência de Fibonacci.`
    }
  }

  private isFibonacci(n: number): boolean {
    if (n < 0) return false
    if (n === 0) return true
    let a = 0, b = 1
    while (b < n) {
      let temp = a + b
      a = b
      b = temp
    }
    return b === n
  }
}
