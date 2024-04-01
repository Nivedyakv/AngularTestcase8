import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTestcaseDirective]',
  standalone: true
})
export class TestcaseDirectiveDirective {

  constructor(private _element:ElementRef) {
    this._element.nativeElement.style.color = "green"
    this._element.nativeElement.style.fontFamily = "cursive";
    this._element.nativeElement.style.textAlign = "center";
   }
}
