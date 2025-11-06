import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menutabla',
  standalone: false,
  templateUrl: './menu.tabla.component.html',
  styleUrl: './menu.tabla.component.css',
})
export class MenuTablaComponent implements OnInit {
  public numeros: Array<number>;
  constructor(){
    this.numeros = []
  }

  getNumeros(){
    for (let i = 1; i <= 6; i++) {
      var numeroRandom = Math.floor(Math.random() *100 +1)
      this.numeros.push(numeroRandom);
    }
  }

  ngOnInit(): void {
    this.getNumeros();
  }
}
