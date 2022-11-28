import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChange,
  OnInit,
  DoCheck,
  OnDestroy
} from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {

  constructor(){
    console.log('0. constructor');
  };

  base = 5;
  exp = 2;


  ngOnChanges(changes: SimpleChange){
    console.log('1. onChanges');
    console.log(changes);

  }


  ngOnInit() {
    console.log('2. onInit'); //aqui hacemnos nustras llamadas a APIs
  }
  // ngDoCheck() {
  //   console.log(' 3. doCheck')
  // }

  ngOnDestroy() {
    console.log('4. onDestroy');
  }



  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  addCart() {

    this.productClicked.emit(this.product.id);

    // console.log('producto añadido al carrito desde product');
  }

}
