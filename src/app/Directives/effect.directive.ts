import { Directive, ElementRef,HostListener  } from '@angular/core';

@Directive({
  selector: '[appEffect]',
  standalone: true
})
export class EffectDirective {

    constructor(private _element: ElementRef) {}
   
    @HostListener('mouseenter') onMouseEnter() {
      this.highlight('skyblue');
    }
   
    @HostListener('mouseleave') onMouseLeave() {
      this.highlight('');
    }
   
    private highlight(color: string) {
      this._element.nativeElement.style.backgroundColor = color;
    }
  }

