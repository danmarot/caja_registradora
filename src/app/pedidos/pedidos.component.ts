import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  @Input() precios: Producto[];
  @Input() precioTotal: number;


  constructor() { }

  ngOnInit() {
  }

}
