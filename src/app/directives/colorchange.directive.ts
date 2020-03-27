import { Directive, ElementRef, Renderer, Input, OnChanges, SimpleChanges, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appColorchange]'
})
export class ColorchangeDirective {
@Input() colors;
  constructor(private elementRef:ElementRef, private renderer: Renderer) { 
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'background', this.colors);
  }
  ngOnChanges(changes: SimpleChanges){
    if(changes.currentValue || changes.colors.currentValue != undefined){
      
      this.renderer.setElementStyle(this.elementRef.nativeElement, 'background', this.colors);

    }
  }

}
