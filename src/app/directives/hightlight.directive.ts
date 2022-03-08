import { Directive,ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  @Input() colorDefault:string = 'yellow';

  constructor(private el:ElementRef) {
    el.nativeElement.style.color= 'yellow';
    el.nativeElement.style.backgroundColor= 'pink';
  }

  @HostListener('mouseover') mouseOver() {
    this.el.nativeElement.style.color= this.colorDefault;
  }

  @HostListener('mouseout') mouseOut() {
    this.el.nativeElement.style.color= 'yellow';
  }
}
