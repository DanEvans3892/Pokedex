import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PokedexLayoutComponent } from './pokedex-layout/pokedex-layout.component';
import { RegionListComponent } from './region-list/region-list.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListService } from './pokemon-list/pokemon-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    PokedexLayoutComponent,
    RegionListComponent,
    PokemonListComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [PokemonListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
