import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithoutConnectionComponent } from './components/without-connection/without-connection.component';

const routes: Routes = [
  {
		path: '',
		children: [
			{
				path: 'without-connection',
				component: WithoutConnectionComponent,
			}
    ]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorPageRoutingModule { }
