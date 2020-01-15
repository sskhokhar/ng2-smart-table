import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
var TheadTitlesRowComponent = /** @class */ (function () {
    function TheadTitlesRowComponent() {
        this.sort = new EventEmitter();
        this.selectAllRows = new EventEmitter();
    }
    TheadTitlesRowComponent.prototype.ngOnChanges = function () {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
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
            template: "\n    <th\n      ng2-st-checkbox-select-all\n      *ngIf=\"isMultiSelectVisible\"\n      [grid]=\"grid\"\n      [source]=\"source\"\n      [isAllSelected]=\"isAllSelected\"\n      (click)=\"selectAllRows.emit($event)\"\n    ></th>\n    <th ng2-st-actions-title *ngIf=\"showActionColumnLeft\" [grid]=\"grid\"></th>\n    <th\n      *ngFor=\"let column of grid.getColumns()\"\n      class=\"ng2-smart-th {{ column.id }}\"\n      [ngClass]=\"column.class\"\n      [style.width]=\"column.width\"\n      [ngStyle]=\"{ display: column.isHidden ? 'none' : '' }\"\n    >\n      <ng2-st-column-title\n        [source]=\"source\"\n        [column]=\"column\"\n        (sort)=\"sort.emit($event)\"\n      ></ng2-st-column-title>\n    </th>\n    <th ng2-st-actions-title *ngIf=\"showActionColumnRight\" [grid]=\"grid\"></th>\n  "
        })
    ], TheadTitlesRowComponent);
    return TheadTitlesRowComponent;
}());
export { TheadTitlesRowComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQtdGl0bGVzLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90aGVhZC9yb3dzL3RoZWFkLXRpdGxlcy1yb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUViLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUErQmxFO0lBNUJBO1FBaUNZLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQy9CLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQVdwRCxDQUFDO0lBTEMsNkNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDN0QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQWZRO1FBQVIsS0FBSyxFQUFFOzBDQUFPLElBQUk7eURBQUM7SUFDWDtRQUFSLEtBQUssRUFBRTs7a0VBQXdCO0lBQ3ZCO1FBQVIsS0FBSyxFQUFFOzBDQUFTLFVBQVU7MkRBQUM7SUFFbEI7UUFBVCxNQUFNLEVBQUU7O3lEQUFnQztJQUMvQjtRQUFULE1BQU0sRUFBRTs7a0VBQXlDO0lBTnZDLHVCQUF1QjtRQTVCbkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDJCQUEyQjtZQUNyQyxRQUFRLEVBQUUsaXpCQXdCVDtTQUNGLENBQUM7T0FDVyx1QkFBdUIsQ0FpQm5DO0lBQUQsOEJBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQWpCWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25DaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi4vLi4vLi4vbGliL2dyaWQnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNvdXJjZS9kYXRhLXNvdXJjZSc7XG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zZXQvY29sdW1uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW25nMi1zdC10aGVhZC10aXRsZXMtcm93XScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHRoXG4gICAgICBuZzItc3QtY2hlY2tib3gtc2VsZWN0LWFsbFxuICAgICAgKm5nSWY9XCJpc011bHRpU2VsZWN0VmlzaWJsZVwiXG4gICAgICBbZ3JpZF09XCJncmlkXCJcbiAgICAgIFtzb3VyY2VdPVwic291cmNlXCJcbiAgICAgIFtpc0FsbFNlbGVjdGVkXT1cImlzQWxsU2VsZWN0ZWRcIlxuICAgICAgKGNsaWNrKT1cInNlbGVjdEFsbFJvd3MuZW1pdCgkZXZlbnQpXCJcbiAgICA+PC90aD5cbiAgICA8dGggbmcyLXN0LWFjdGlvbnMtdGl0bGUgKm5nSWY9XCJzaG93QWN0aW9uQ29sdW1uTGVmdFwiIFtncmlkXT1cImdyaWRcIj48L3RoPlxuICAgIDx0aFxuICAgICAgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBncmlkLmdldENvbHVtbnMoKVwiXG4gICAgICBjbGFzcz1cIm5nMi1zbWFydC10aCB7eyBjb2x1bW4uaWQgfX1cIlxuICAgICAgW25nQ2xhc3NdPVwiY29sdW1uLmNsYXNzXCJcbiAgICAgIFtzdHlsZS53aWR0aF09XCJjb2x1bW4ud2lkdGhcIlxuICAgICAgW25nU3R5bGVdPVwieyBkaXNwbGF5OiBjb2x1bW4uaXNIaWRkZW4gPyAnbm9uZScgOiAnJyB9XCJcbiAgICA+XG4gICAgICA8bmcyLXN0LWNvbHVtbi10aXRsZVxuICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiXG4gICAgICAgIFtjb2x1bW5dPVwiY29sdW1uXCJcbiAgICAgICAgKHNvcnQpPVwic29ydC5lbWl0KCRldmVudClcIlxuICAgICAgPjwvbmcyLXN0LWNvbHVtbi10aXRsZT5cbiAgICA8L3RoPlxuICAgIDx0aCBuZzItc3QtYWN0aW9ucy10aXRsZSAqbmdJZj1cInNob3dBY3Rpb25Db2x1bW5SaWdodFwiIFtncmlkXT1cImdyaWRcIj48L3RoPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFRoZWFkVGl0bGVzUm93Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgZ3JpZDogR3JpZDtcbiAgQElucHV0KCkgaXNBbGxTZWxlY3RlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgc291cmNlOiBEYXRhU291cmNlO1xuXG4gIEBPdXRwdXQoKSBzb3J0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBzZWxlY3RBbGxSb3dzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgaXNNdWx0aVNlbGVjdFZpc2libGU6IGJvb2xlYW47XG4gIHNob3dBY3Rpb25Db2x1bW5MZWZ0OiBib29sZWFuO1xuICBzaG93QWN0aW9uQ29sdW1uUmlnaHQ6IGJvb2xlYW47XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5pc011bHRpU2VsZWN0VmlzaWJsZSA9IHRoaXMuZ3JpZC5pc011bHRpU2VsZWN0VmlzaWJsZSgpO1xuICAgIHRoaXMuc2hvd0FjdGlvbkNvbHVtbkxlZnQgPSB0aGlzLmdyaWQuc2hvd0FjdGlvbkNvbHVtbignbGVmdCcpO1xuICAgIHRoaXMuc2hvd0FjdGlvbkNvbHVtblJpZ2h0ID0gdGhpcy5ncmlkLnNob3dBY3Rpb25Db2x1bW4oJ3JpZ2h0Jyk7XG4gIH1cbn1cbiJdfQ==