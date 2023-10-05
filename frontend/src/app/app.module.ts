import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { DragaoDeKomodoComponent } from './components/Animais/dragao-de-komodo/dragao-de-komodo.component';
import { SapoAzulComponent } from './components/Animais/sapo-azul/sapo-azul.component';

import
{ LOCALE_ID } from '@angular/core';
import
localePt from '@angular/common/locales/pt';
import
{ registerLocaleData } from '@angular/common';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DragaoDeKomodoComponent,
    SapoAzulComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers:[

    {provide : LOCALE_ID, useValue : 'pt BR' },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
