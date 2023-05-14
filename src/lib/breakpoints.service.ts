import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { _ } from 'tnp-core';

const BRK = {
  mobile: '(max-width: 599.98px)',
  // tablet: obsvious
  desktop: '(min-width: 840.00px)',
}


@Injectable({ providedIn: 'root' })
export class BreakpointsService {

  private sub = new Subject<'mobile' | 'tablet' | 'desktop'>();
  public listenTo = this.sub.asObservable();

  constructor(
    breakpointObserver: BreakpointObserver,
  ) {

    breakpointObserver.observe([BRK.mobile, BRK.desktop]).subscribe((state) => {
      if (!_.isUndefined([BRK.mobile].find(f => state.breakpoints[f]))) {
        this.sub.next('mobile');
      } else if (!_.isUndefined([BRK.desktop].find(f => state.breakpoints[f]))) {
        this.sub.next('desktop');
      } else {
        this.sub.next('tablet');
      }
    });

    setTimeout(() => {
      if (breakpointObserver.isMatched([BRK.mobile])) {
        this.sub.next('mobile');
      } else if (breakpointObserver.isMatched([BRK.desktop])) {
        this.sub.next('desktop');
      } else {
        this.sub.next('tablet');
      }
    })
  }

}
