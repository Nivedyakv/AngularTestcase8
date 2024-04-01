import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appBackgroundcol]',
  standalone: true
})
export class BackgroundcolDirective {
  constructor(private _element:ElementRef) {
   
    this._element.nativeElement.style.backgroundColor = " yellow";
    this._element.nativeElement.style.paddingBottom = "70px";
   }
}
