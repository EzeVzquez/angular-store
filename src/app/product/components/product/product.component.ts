import { Component, Input, Output, EventEmitter, SimpleChange } from '@angular/core';

import { Product } from './../../../core/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent {
  @Input() product: Product;
  @Output() produtctClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  addCart() {
    console.log("Añadir al carrito");
    this.produtctClicked.emit(this.product.id)
  }
}
