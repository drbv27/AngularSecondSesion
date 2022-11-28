import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sesion40-angular';

  products: Product[]  = [
  {
    id: 1,
    name: 'Chocorramo',
    price: 2500,
    description: 'delicioso chocorramo',
    image: ''
  },
    {
      id: 2,
      name: 'Nucita',
      price: 500,
      description: 'la nucita es nutritiva y sabrosita....................................................',
      image: ''
    },
    {
      id: 3,
      name: 'Glasita',
      price: 700,
      description: '',
      image: ''
    }
];

clickProduct(id: number){
      console.log(`producto ${id} añadido al carrito `);
}

}
