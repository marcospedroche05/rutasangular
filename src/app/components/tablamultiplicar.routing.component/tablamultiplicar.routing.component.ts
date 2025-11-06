import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tablamultiplicar-routing',
  standalone: false,
  templateUrl: './tablamultiplicar.routing.component.html',
  styleUrl: './tablamultiplicar.routing.component.css',
})
export class TablamultiplicarRoutingComponent implements OnInit {
  public numero!: number;
  public resultados: Array<number>;
  constructor(private _activeRouter: ActivatedRoute){
    this.resultados = [];
  }

  ngOnInit(): void {
    this._activeRouter.params.subscribe((parametros: Params) => {
      this.numero = parseInt(parametros['numero']);
      this.generarTabla(this.numero);
    })
  }

  generarTabla(num: number){
    this.resultados = []
    for (let i = 1; i <= 10; i++) {
      var resultado = num * i;
      this.resultados.push(resultado)
    }
  }
}
