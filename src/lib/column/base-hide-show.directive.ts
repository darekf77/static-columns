import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import {
  Component,
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { BreakpointsService } from '../breakpoints.service';

@Directive({
  selector: '[baseHideShowDirective]',
  standalone: false,
})
export abstract class BaseHideShowDirective {
  $destroy = new Subject();
  constructor(
    public e: ElementRef,
    public renderer: Renderer2,
    public breakpoints: BreakpointsService,
  ) {}

  private originalDisaplay: string;

  abstract action(state: 'mobile' | 'tablet' | 'desktop');

  protected hideElement() {
    this.renderer.setStyle(this.e.nativeElement, 'display', 'none');
  }

  protected showElement() {
    this.renderer.setStyle(
      this.e.nativeElement,
      'display',
      this.originalDisaplay,
    );
  }

  protected scale(scale: number = 1) {
    this.renderer.setStyle(
      this.e.nativeElement,
      'transform',
      `scale(${scale})`,
    );
  }

  ngOnInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.breakpoints
      .listenTo()
      .pipe(takeUntil(this.$destroy))
      .subscribe(state => {
        if (typeof this.originalDisaplay === 'undefined') {
          this.originalDisaplay = (
            this.e.nativeElement as HTMLElement
          ).style.display;
        }
        // console.log(`state for actin: ${state}`)
        this.action(state);
      });
  }

  ngOnDestroy(): void {
    this.$destroy.next(void 0);
    this.$destroy.complete();
  }
}
