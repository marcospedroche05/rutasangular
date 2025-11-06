import { routing, appRoutingProvider } from './app.routing';
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { HomeComponent } from './components/home.component/home.component';
import { MusicaComponent } from './components/musica.component/musica.component';
import { CineComponent } from './components/cine.component/cine.component';
import { MenuComponent } from './components/menu.component/menu.component';
import { NotFoundComponent } from './components/not-found.component/not-found.component';
import { NumeroDobleComponent } from './components/numero.doble.component/numero.doble.component';
import { TablamultiplicarRoutingComponent } from './components/tablamultiplicar.routing.component/tablamultiplicar.routing.component';
import { MenuTablaComponent } from './components/menu.tabla.component/menu.tabla.component';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    MusicaComponent,
    CineComponent,
    MenuComponent,
    NotFoundComponent,
    NumeroDobleComponent,
    TablamultiplicarRoutingComponent,
    MenuTablaComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    appRoutingProvider
  ],
  bootstrap: [App]
})
export class AppModule { }
