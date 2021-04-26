import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Login1Component } from './login1/login1.component';
import {TodoModule} from './todo/todo.module';
import { CheckoutComponent } from './checkout/checkout.component';
import {ReactiveFormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Login1Component,
    CheckoutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    ReactiveFormsModule //Step 1 Completed.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


