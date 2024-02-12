import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { NewHeroComponent } from './pages/new-heroe/new-hero.component';

const routes: Routes = [
  {
		path: '',
		children: [
			{
				path: '',
				component: HeroesComponent,
			},
			{
				path: 'new-hero',
				component: NewHeroComponent,
			},
			 {
			 	path: 'edit-hero',
			 	component: NewHeroComponent,
			 },
		],
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
