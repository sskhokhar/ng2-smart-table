import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
let TheadTitlesRowComponent = class TheadTitlesRowComponent {
    constructor() {
        this.sort = new EventEmitter();
        this.selectAllRows = new EventEmitter();
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Grid)
], TheadTitlesRowComponent.prototype, "grid", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], TheadTitlesRowComponent.prototype, "isAllSelected", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", DataSource)
], TheadTitlesRowComponent.prototype, "source", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], TheadTitlesRowComponent.prototype, "sort", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], TheadTitlesRowComponent.prototype, "selectAllRows", void 0);
TheadTitlesRowComponent = tslib_1.__decorate([
    Component({
        selector: '[ng2-st-thead-titles-row]',
        template: `
    <th
      ng2-st-checkbox-select-all
      *ngIf="isMultiSelectVisible"
      [grid]="grid"
      [source]="source"
      [isAllSelected]="isAllSelected"
      (click)="selectAllRows.emit($event)"
    ></th>
    <th ng2-st-actions-title *ngIf="showActionColumnLeft" [grid]="grid"></th>
    <th
      *ngFor="let column of grid.getColumns()"
      class="ng2-smart-th {{ column.id }}"
      [ngClass]="column.class"
      [style.width]="column.width"
      [ngStyle]="{ display: column.isHidden ? 'none' : '' }"
    >
      <ng2-st-column-title
        [source]="source"
        [column]="column"
        (sort)="sort.emit($event)"
      ></ng2-st-column-title>
    </th>
    <th ng2-st-actions-title *ngIf="showActionColumnRight" [grid]="grid"></th>
  `
    })
], TheadTitlesRowComponent);
export { TheadTitlesRowComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQtdGl0bGVzLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90aGVhZC9yb3dzL3RoZWFkLXRpdGxlcy1yb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUViLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUErQmxFLElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBNUJwQztRQWlDWSxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMvQixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFXcEQsQ0FBQztJQUxDLFdBQVc7UUFDVCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzdELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25FLENBQUM7Q0FDRixDQUFBO0FBaEJVO0lBQVIsS0FBSyxFQUFFO3NDQUFPLElBQUk7cURBQUM7QUFDWDtJQUFSLEtBQUssRUFBRTs7OERBQXdCO0FBQ3ZCO0lBQVIsS0FBSyxFQUFFO3NDQUFTLFVBQVU7dURBQUM7QUFFbEI7SUFBVCxNQUFNLEVBQUU7O3FEQUFnQztBQUMvQjtJQUFULE1BQU0sRUFBRTs7OERBQXlDO0FBTnZDLHVCQUF1QjtJQTVCbkMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDJCQUEyQjtRQUNyQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCVDtLQUNGLENBQUM7R0FDVyx1QkFBdUIsQ0FpQm5DO1NBakJZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi8uLi8uLi9saWIvZ3JpZCc7XG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc291cmNlL2RhdGEtc291cmNlJztcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNldC9jb2x1bW4nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbmcyLXN0LXRoZWFkLXRpdGxlcy1yb3ddJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8dGhcbiAgICAgIG5nMi1zdC1jaGVja2JveC1zZWxlY3QtYWxsXG4gICAgICAqbmdJZj1cImlzTXVsdGlTZWxlY3RWaXNpYmxlXCJcbiAgICAgIFtncmlkXT1cImdyaWRcIlxuICAgICAgW3NvdXJjZV09XCJzb3VyY2VcIlxuICAgICAgW2lzQWxsU2VsZWN0ZWRdPVwiaXNBbGxTZWxlY3RlZFwiXG4gICAgICAoY2xpY2spPVwic2VsZWN0QWxsUm93cy5lbWl0KCRldmVudClcIlxuICAgID48L3RoPlxuICAgIDx0aCBuZzItc3QtYWN0aW9ucy10aXRsZSAqbmdJZj1cInNob3dBY3Rpb25Db2x1bW5MZWZ0XCIgW2dyaWRdPVwiZ3JpZFwiPjwvdGg+XG4gICAgPHRoXG4gICAgICAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGdyaWQuZ2V0Q29sdW1ucygpXCJcbiAgICAgIGNsYXNzPVwibmcyLXNtYXJ0LXRoIHt7IGNvbHVtbi5pZCB9fVwiXG4gICAgICBbbmdDbGFzc109XCJjb2x1bW4uY2xhc3NcIlxuICAgICAgW3N0eWxlLndpZHRoXT1cImNvbHVtbi53aWR0aFwiXG4gICAgICBbbmdTdHlsZV09XCJ7IGRpc3BsYXk6IGNvbHVtbi5pc0hpZGRlbiA/ICdub25lJyA6ICcnIH1cIlxuICAgID5cbiAgICAgIDxuZzItc3QtY29sdW1uLXRpdGxlXG4gICAgICAgIFtzb3VyY2VdPVwic291cmNlXCJcbiAgICAgICAgW2NvbHVtbl09XCJjb2x1bW5cIlxuICAgICAgICAoc29ydCk9XCJzb3J0LmVtaXQoJGV2ZW50KVwiXG4gICAgICA+PC9uZzItc3QtY29sdW1uLXRpdGxlPlxuICAgIDwvdGg+XG4gICAgPHRoIG5nMi1zdC1hY3Rpb25zLXRpdGxlICpuZ0lmPVwic2hvd0FjdGlvbkNvbHVtblJpZ2h0XCIgW2dyaWRdPVwiZ3JpZFwiPjwvdGg+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgVGhlYWRUaXRsZXNSb3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBncmlkOiBHcmlkO1xuICBASW5wdXQoKSBpc0FsbFNlbGVjdGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBzb3VyY2U6IERhdGFTb3VyY2U7XG5cbiAgQE91dHB1dCgpIHNvcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdEFsbFJvd3MgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBpc011bHRpU2VsZWN0VmlzaWJsZTogYm9vbGVhbjtcbiAgc2hvd0FjdGlvbkNvbHVtbkxlZnQ6IGJvb2xlYW47XG4gIHNob3dBY3Rpb25Db2x1bW5SaWdodDogYm9vbGVhbjtcblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmlzTXVsdGlTZWxlY3RWaXNpYmxlID0gdGhpcy5ncmlkLmlzTXVsdGlTZWxlY3RWaXNpYmxlKCk7XG4gICAgdGhpcy5zaG93QWN0aW9uQ29sdW1uTGVmdCA9IHRoaXMuZ3JpZC5zaG93QWN0aW9uQ29sdW1uKCdsZWZ0Jyk7XG4gICAgdGhpcy5zaG93QWN0aW9uQ29sdW1uUmlnaHQgPSB0aGlzLmdyaWQuc2hvd0FjdGlvbkNvbHVtbigncmlnaHQnKTtcbiAgfVxufVxuIl19