import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'heroes',
		pathMatch: 'full',
	},
	{
		path: 'heroes',
		loadChildren: () => import('./modules/heroes/heroes.module').then((pm) => pm.HeroesModule),
	},
	{
		path: 'error',
		loadChildren: () => import('./modules/error-page/error-page.module').then((pm) => pm.ErrorPageModule),
	},
	{
		path: '**',
		redirectTo: 'heroes',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
