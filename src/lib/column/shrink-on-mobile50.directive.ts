import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { BreakpointsService } from '../breakpoints.service';
import { BaseHideShowDirective } from './base-hide-show.directive';
import { DirectiveShrinkOnMobile } from './shrink-on-mobile75.directive';

@Directive({
  selector: '[shrinkOnMobile50]'
})
export class DirectiveShrinkOnMobile50 extends DirectiveShrinkOnMobile {

  scaleFactor: number = 50;

}
