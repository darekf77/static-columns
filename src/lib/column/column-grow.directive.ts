//#region imports
import { Component, Directive, ElementRef, Renderer2 } from '@angular/core';
//#endregion

@Directive({
  selector: '[grow]',
  standalone: false,
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
