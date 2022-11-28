import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product.component';
import { HeaderComponent } from './header/header.component';
import { ExponentialPipe } from './exponential.pipe';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent,
    ExponentialPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
