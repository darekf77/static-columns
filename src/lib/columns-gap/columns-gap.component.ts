//#region imports
import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
//#endregion

@Component({
  selector: 'columns-gap',
  templateUrl: './columns-gap.component.html',
  styleUrls: ['./columns-gap.component.scss'],
  standalone: false,
})
export class ColumnsGapComponent implements OnInit, OnDestroy {
  @HostBinding('style.flex.basis.px')
  @HostBinding('style.minWidth.px')
  width: number = 20;

  handlers: Subscription[] = [];

  @Output() columnsGapDataChanged = new EventEmitter();

  @Input() columnsGapData: any = {};

  constructor() {}

  ngOnInit() {}

  ngOnDestroy(): void {
    this.handlers.forEach(h => h.unsubscribe());
  }
}
