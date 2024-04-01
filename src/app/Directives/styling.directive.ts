import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appStyling]',
  standalone: true
})
export class StylingDirective {
  constructor(private _element:ElementRef) {
    this._element.nativeElement.style.color = "blue"
    this._element.nativeElement.style.fontFamily = "Lucida Sans Unicode";
    this._element.nativeElement.style.fontSize = "20px";
   }

}
