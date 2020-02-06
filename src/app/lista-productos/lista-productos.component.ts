import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../models/producto';


@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
@Input() titulo: string;
@Input() productos: Producto[];

@Output() productosEnviados: EventEmitter<any>;




  constructor() {
    this.productosEnviados = new EventEmitter();
   }

  ngOnInit() {
  }


  manejarClick(producto){
    this.productosEnviados.emit(producto);
  }

}
