import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-teste-5',
  imports: [FormsModule],
  templateUrl: './teste-5.component.html',
  styleUrl: './teste-5.component.scss'
})
export class Teste5Component {
  texto: string = '';
  resultado: string = '';

  inverterString() {
    let invertida = '';
    for (let i = this.texto.length - 1; i >= 0; i--) {
      invertida += this.texto[i];
    }
    this.resultado = invertida;
  }
}
