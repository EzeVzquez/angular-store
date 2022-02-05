import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';

import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/balanza.png',
      title: 'Balanza',
      price: 1700,
      description: 'Balanza de cocina',
    },
    {
      id: '2',
      image: 'assets/images/olla.png',
      title: 'Olla arrocera',
      price: 7600,
      description: 'Olla de cocina',
    },
    {
      id: '3',
      image: 'assets/images/plato.png',
      title: 'Plato',
      price: 640,
      description: 'Plato playo',
    },
    {
      id: '4',
      image: 'assets/images/microondas.png',
      title: 'Pin',
      price: 15300,
      description: 'Microondas blanco',
    },
    {
      id: '5',
      image: 'assets/images/tostadora.png',
      title: 'Tostadora',
      price: 4600,
      description: 'Tostadora multifuncion',
    },
    {
      id: '6',
      image: 'assets/images/horno.png',
      title: 'Horno',
      price: 6660,
      description: 'Horno economico',
    },
  ];

  constructor() { }

  getAllProducts() {
    return this.products; 
  }

  getProduct(id: string) {
    return this.products.find(item => id === item.id);
  }
}
