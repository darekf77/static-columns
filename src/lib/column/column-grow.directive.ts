import { Component, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[grow]',
})
export class DirectiveGrow {
  constructor(
    public e: ElementRef,
    public renderer: Renderer2,
  ) {
    setTimeout(() => {
      // e.nativeElement.style.flexGrow = 1;
      renderer.setStyle(e.nativeElement, 'flexGrow', '1');
    }, 0);

    // renderer.setElementStyle(e.nativeElement, 'flexGrow', '1');
  }
}
