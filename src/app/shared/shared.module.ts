import { NgModule } from '@angular/core';
import { DirectivesModule } from './directives/directives.module';
import { MaterialModule } from './material.module';

@NgModule({
	imports: [MaterialModule,DirectivesModule],
	exports: [MaterialModule,DirectivesModule]
})
export class SharedModule { }
