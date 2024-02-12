import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { NewHeroComponent } from './pages/new-heroe/new-hero.component';
import { HeroesTableComponent } from './components/heroes-table/heroes-table.component';
import { ConfirmDeleteDialogComponent } from './components/confirm-delete-dialog/confirm-delete-dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HeroesComponent,
    NewHeroComponent,
    HeroesTableComponent,
    ConfirmDeleteDialogComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    SharedModule
  ]
})
export class HeroesModule { }
