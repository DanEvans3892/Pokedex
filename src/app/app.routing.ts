import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { RegionListComponent } from './region-list/region-list.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';


const APP_ROUTES: Routes = [
    // { path: 'language-selection', component: LanguageSelectionComponent },
    // { path: 'pokemon-detail', component: PokemonDetailComponent }
    { path: 'home', component: HomeComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'regionList', component: RegionListComponent },
    { path: 'pokemonList', component: PokemonListComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
