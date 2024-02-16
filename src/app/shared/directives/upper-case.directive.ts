import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appUpperCase]'
})
export class UpperCaseDirective {
  constructor(private el: ElementRef, private renderer: Renderer2, private ngControl: NgControl) { }

  @HostListener('input', ['$event.target.value']) onInput(value: string) {
    const newValue = value.toUpperCase();
    this.renderer.setProperty(this.el.nativeElement, 'value', newValue);
    this.ngControl.control?.setValue(newValue, { emitEvent: false });
  }
}