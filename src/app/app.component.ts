import { Component } from '@angular/core';
import { Producto } from './models/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cajaRegistradora';

  arrComida: Producto[];
  arrBebida: Producto[];

  arrTotal: any[];

  total: number;

  constructor() { 

    this.arrBebida = [
      new Producto('CocaCola', 1.50, '../assets/images/bebidas/cocacola.jpg'),
      new Producto('BitterKas', 1.10, '../assets/images/bebidas/bitter_kas.jpg'),
      new Producto('Cerveza Mahou', 2.00, '../assets/images/bebidas/cerveza_mahou.jpg'),
      new Producto('Agua', 1, '../assets/images/bebidas/agua.jpg'),
      new Producto('Cerveza Mahou Classic', 1.12, '../assets/images/bebidas/mahou_classic.jpg'),
      new Producto('Vino Blanco Rueda', 4.35, '../assets/images/bebidas/vino_blanco_rueda.jpg'),
      new Producto('Zumo', 2.45, '../assets/images/bebidas/zumo.jpg'),
      new Producto('Cerveza Mixta', 1.22, '../assets/images/bebidas/mixta.jpg'),
    
    ]

    this.arrComida = [
      new Producto('Carne Picada', 2.40, '../assets/images/comida/carne_picada.jpg'),
      new Producto('Hamburguesa Espinacas', 4.30, '../assets/images/comida/hamburguesa-espinacas.jpg'),
      new Producto('Kiwi', 2.40, '../assets/images/comida/kiwi.jpg'),
      new Producto('Mandarina', 1.10, '../assets/images/comida/mandarina.jpg'),
      new Producto('Pechuga de Pavo', 2.40, '../assets/images/comida/pechuga_pavo.jpg'),
      new Producto('Platano Canarias', 0.23, '../assets/images/comida/platano_canarias.jpg'),
      new Producto('Pechuga de Pollo', 2.40, '../assets/images/comida/pollo_pechuga.jpg'),
      new Producto('Berenjena', 1.45, '../assets/images/comida/berenjena.jpg'),
    
    ]

    this.arrTotal = [];

    this.total = 0;


  }


  pintarPedido(producto){
    this.arrTotal.push(producto);
    this.total += producto.precio
  }




}





