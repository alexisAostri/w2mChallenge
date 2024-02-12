import { NgModule } from '@angular/core';
import { UpperCaseDirective } from './upper-case.directive';

const DIRECTIVES = [
  UpperCaseDirective
];

@NgModule({
  declarations: [DIRECTIVES],
  exports: [DIRECTIVES],
})
export class DirectivesModule {}
