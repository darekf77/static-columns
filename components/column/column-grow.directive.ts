import {Component, Directive, ElementRef, Renderer} from '@angular/core';


@Directive({
    selector: '[grow]'
})
export class DirectiveGrow {
    constructor(public e: ElementRef, public renderer: Renderer) {
        setTimeout(() => {
            // e.nativeElement.style.flexGrow = 1;
            renderer.setElementStyle(e.nativeElement, 'flexGrow', '1');
        }, 0);

        // renderer.setElementStyle(e.nativeElement, 'flexGrow', '1');
    }
}
