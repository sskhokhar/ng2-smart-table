import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
let TheadFitlersRowComponent = class TheadFitlersRowComponent {
    constructor() {
        this.create = new EventEmitter();
        this.filter = new EventEmitter();
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.filterInputClass = this.grid.getSetting('filter.inputClass');
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Grid)
], TheadFitlersRowComponent.prototype, "grid", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", DataSource)
], TheadFitlersRowComponent.prototype, "source", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], TheadFitlersRowComponent.prototype, "create", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], TheadFitlersRowComponent.prototype, "filter", void 0);
TheadFitlersRowComponent = tslib_1.__decorate([
    Component({
        selector: '[ng2-st-thead-filters-row]',
        template: `
    <th *ngIf="isMultiSelectVisible"></th>
    <th
      ng2-st-add-button
      *ngIf="showActionColumnLeft"
      [grid]="grid"
      (create)="create.emit($event)"
    ></th>
    <th
      *ngFor="let column of grid.getColumns()"
      class="ng2-smart-th {{ column.id }}"
      [ngStyle]="{ display: column.isHidden ? 'none' : '' }"
    >
      <ng2-smart-table-filter
        [source]="source"
        [column]="column"
        [inputClass]="filterInputClass"
        (filter)="filter.emit($event)"
      >
      </ng2-smart-table-filter>
    </th>
    <th
      ng2-st-add-button
      *ngIf="showActionColumnRight"
      [grid]="grid"
      [source]="source"
      (create)="create.emit($event)"
    ></th>
  `
    })
], TheadFitlersRowComponent);
export { TheadFitlersRowComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQtZmlsdGVycy1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGhlYWQvcm93cy90aGVhZC1maWx0ZXJzLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBRWIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQW1DbEUsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBd0I7SUFoQ3JDO1FBb0NZLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2pDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBYTdDLENBQUM7SUFOQyxXQUFXO1FBQ1QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM3RCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNwRSxDQUFDO0NBQ0YsQ0FBQTtBQWpCVTtJQUFSLEtBQUssRUFBRTtzQ0FBTyxJQUFJO3NEQUFDO0FBQ1g7SUFBUixLQUFLLEVBQUU7c0NBQVMsVUFBVTt3REFBQztBQUVsQjtJQUFULE1BQU0sRUFBRTs7d0RBQWtDO0FBQ2pDO0lBQVQsTUFBTSxFQUFFOzt3REFBa0M7QUFMaEMsd0JBQXdCO0lBaENwQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsNEJBQTRCO1FBQ3RDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRCVDtLQUNGLENBQUM7R0FDVyx3QkFBd0IsQ0FrQnBDO1NBbEJZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi8uLi8uLi9saWIvZ3JpZCc7XG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc291cmNlL2RhdGEtc291cmNlJztcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNldC9jb2x1bW4nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbmcyLXN0LXRoZWFkLWZpbHRlcnMtcm93XScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHRoICpuZ0lmPVwiaXNNdWx0aVNlbGVjdFZpc2libGVcIj48L3RoPlxuICAgIDx0aFxuICAgICAgbmcyLXN0LWFkZC1idXR0b25cbiAgICAgICpuZ0lmPVwic2hvd0FjdGlvbkNvbHVtbkxlZnRcIlxuICAgICAgW2dyaWRdPVwiZ3JpZFwiXG4gICAgICAoY3JlYXRlKT1cImNyZWF0ZS5lbWl0KCRldmVudClcIlxuICAgID48L3RoPlxuICAgIDx0aFxuICAgICAgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBncmlkLmdldENvbHVtbnMoKVwiXG4gICAgICBjbGFzcz1cIm5nMi1zbWFydC10aCB7eyBjb2x1bW4uaWQgfX1cIlxuICAgICAgW25nU3R5bGVdPVwieyBkaXNwbGF5OiBjb2x1bW4uaXNIaWRkZW4gPyAnbm9uZScgOiAnJyB9XCJcbiAgICA+XG4gICAgICA8bmcyLXNtYXJ0LXRhYmxlLWZpbHRlclxuICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiXG4gICAgICAgIFtjb2x1bW5dPVwiY29sdW1uXCJcbiAgICAgICAgW2lucHV0Q2xhc3NdPVwiZmlsdGVySW5wdXRDbGFzc1wiXG4gICAgICAgIChmaWx0ZXIpPVwiZmlsdGVyLmVtaXQoJGV2ZW50KVwiXG4gICAgICA+XG4gICAgICA8L25nMi1zbWFydC10YWJsZS1maWx0ZXI+XG4gICAgPC90aD5cbiAgICA8dGhcbiAgICAgIG5nMi1zdC1hZGQtYnV0dG9uXG4gICAgICAqbmdJZj1cInNob3dBY3Rpb25Db2x1bW5SaWdodFwiXG4gICAgICBbZ3JpZF09XCJncmlkXCJcbiAgICAgIFtzb3VyY2VdPVwic291cmNlXCJcbiAgICAgIChjcmVhdGUpPVwiY3JlYXRlLmVtaXQoJGV2ZW50KVwiXG4gICAgPjwvdGg+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgVGhlYWRGaXRsZXJzUm93Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgZ3JpZDogR3JpZDtcbiAgQElucHV0KCkgc291cmNlOiBEYXRhU291cmNlO1xuXG4gIEBPdXRwdXQoKSBjcmVhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGZpbHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGlzTXVsdGlTZWxlY3RWaXNpYmxlOiBib29sZWFuO1xuICBzaG93QWN0aW9uQ29sdW1uTGVmdDogYm9vbGVhbjtcbiAgc2hvd0FjdGlvbkNvbHVtblJpZ2h0OiBib29sZWFuO1xuICBmaWx0ZXJJbnB1dENsYXNzOiBzdHJpbmc7XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5pc011bHRpU2VsZWN0VmlzaWJsZSA9IHRoaXMuZ3JpZC5pc011bHRpU2VsZWN0VmlzaWJsZSgpO1xuICAgIHRoaXMuc2hvd0FjdGlvbkNvbHVtbkxlZnQgPSB0aGlzLmdyaWQuc2hvd0FjdGlvbkNvbHVtbignbGVmdCcpO1xuICAgIHRoaXMuc2hvd0FjdGlvbkNvbHVtblJpZ2h0ID0gdGhpcy5ncmlkLnNob3dBY3Rpb25Db2x1bW4oJ3JpZ2h0Jyk7XG4gICAgdGhpcy5maWx0ZXJJbnB1dENsYXNzID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2ZpbHRlci5pbnB1dENsYXNzJyk7XG4gIH1cbn1cbiJdfQ==