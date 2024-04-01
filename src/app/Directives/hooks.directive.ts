import { Directive, ElementRef, OnInit, SimpleChanges, Input } from '@angular/core';

@Directive({
  selector: '[appHooks]',
  standalone: true
})
export class HooksDirective implements OnInit {
   @Input() customColour!:string;

  constructor(private _element: ElementRef) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  OnInit() {

    this._element.nativeElement.style.color = this.customColour

  }
}
