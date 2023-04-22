import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';


@Directive({
  selector: '[hideTablet]'
})
export class DirectiveHideTablet implements OnInit {

  $destroy = new Subject();
  constructor(
    public e: ElementRef,
    public renderer: Renderer2,
    public breakpointObserver: BreakpointObserver,
  ) { }

  private originalDisaplay: string;

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 800px)'])
      .pipe(takeUntil(this.$destroy))
      .subscribe((state: BreakpointState) => {
        if (typeof this.originalDisaplay === 'undefined') {
          this.originalDisaplay = (this.e.nativeElement as HTMLElement).style.display;
        }
        if (state.matches) {
          this.renderer.setStyle(this.e.nativeElement, 'display', this.originalDisaplay)
        } else {
          this.renderer.setStyle(this.e.nativeElement, 'display', 'none')
        }
      })
  }

  ngOnDestroy(): void {
    this.$destroy.next(void 0);
    this.$destroy.complete()
  }

}

