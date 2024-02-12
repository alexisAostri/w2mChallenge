import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUpperCase]'
})
export class UpperCaseDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input') onInput() {
    const value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toUpperCase();
  }

}
