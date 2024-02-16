import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { NewHeroComponent } from './pages/new-heroe/new-hero.component';
import { AccesGuard } from 'src/app/core/guards/acces-guard';

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
				canActivate: [AccesGuard] 
			},
			{
				path: 'edit-hero',
				component: NewHeroComponent,
				canActivate: [AccesGuard] 
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HeroesRoutingModule { }
