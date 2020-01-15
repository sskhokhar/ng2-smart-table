import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
var TheadFitlersRowComponent = /** @class */ (function () {
    function TheadFitlersRowComponent() {
        this.create = new EventEmitter();
        this.filter = new EventEmitter();
    }
    TheadFitlersRowComponent.prototype.ngOnChanges = function () {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.filterInputClass = this.grid.getSetting('filter.inputClass');
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
            template: "\n    <th *ngIf=\"isMultiSelectVisible\"></th>\n    <th\n      ng2-st-add-button\n      *ngIf=\"showActionColumnLeft\"\n      [grid]=\"grid\"\n      (create)=\"create.emit($event)\"\n    ></th>\n    <th\n      *ngFor=\"let column of grid.getColumns()\"\n      class=\"ng2-smart-th {{ column.id }}\"\n      [ngStyle]=\"{ display: column.isHidden ? 'none' : '' }\"\n    >\n      <ng2-smart-table-filter\n        [source]=\"source\"\n        [column]=\"column\"\n        [inputClass]=\"filterInputClass\"\n        (filter)=\"filter.emit($event)\"\n      >\n      </ng2-smart-table-filter>\n    </th>\n    <th\n      ng2-st-add-button\n      *ngIf=\"showActionColumnRight\"\n      [grid]=\"grid\"\n      [source]=\"source\"\n      (create)=\"create.emit($event)\"\n    ></th>\n  "
        })
    ], TheadFitlersRowComponent);
    return TheadFitlersRowComponent;
}());
export { TheadFitlersRowComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQtZmlsdGVycy1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGhlYWQvcm93cy90aGVhZC1maWx0ZXJzLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBRWIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQW1DbEU7SUFoQ0E7UUFvQ1ksV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDakMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFhN0MsQ0FBQztJQU5DLDhDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzdELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFoQlE7UUFBUixLQUFLLEVBQUU7MENBQU8sSUFBSTswREFBQztJQUNYO1FBQVIsS0FBSyxFQUFFOzBDQUFTLFVBQVU7NERBQUM7SUFFbEI7UUFBVCxNQUFNLEVBQUU7OzREQUFrQztJQUNqQztRQUFULE1BQU0sRUFBRTs7NERBQWtDO0lBTGhDLHdCQUF3QjtRQWhDcEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDRCQUE0QjtZQUN0QyxRQUFRLEVBQUUseXdCQTRCVDtTQUNGLENBQUM7T0FDVyx3QkFBd0IsQ0FrQnBDO0lBQUQsK0JBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWxCWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25DaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi4vLi4vLi4vbGliL2dyaWQnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNvdXJjZS9kYXRhLXNvdXJjZSc7XG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zZXQvY29sdW1uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW25nMi1zdC10aGVhZC1maWx0ZXJzLXJvd10nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDx0aCAqbmdJZj1cImlzTXVsdGlTZWxlY3RWaXNpYmxlXCI+PC90aD5cbiAgICA8dGhcbiAgICAgIG5nMi1zdC1hZGQtYnV0dG9uXG4gICAgICAqbmdJZj1cInNob3dBY3Rpb25Db2x1bW5MZWZ0XCJcbiAgICAgIFtncmlkXT1cImdyaWRcIlxuICAgICAgKGNyZWF0ZSk9XCJjcmVhdGUuZW1pdCgkZXZlbnQpXCJcbiAgICA+PC90aD5cbiAgICA8dGhcbiAgICAgICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgZ3JpZC5nZXRDb2x1bW5zKClcIlxuICAgICAgY2xhc3M9XCJuZzItc21hcnQtdGgge3sgY29sdW1uLmlkIH19XCJcbiAgICAgIFtuZ1N0eWxlXT1cInsgZGlzcGxheTogY29sdW1uLmlzSGlkZGVuID8gJ25vbmUnIDogJycgfVwiXG4gICAgPlxuICAgICAgPG5nMi1zbWFydC10YWJsZS1maWx0ZXJcbiAgICAgICAgW3NvdXJjZV09XCJzb3VyY2VcIlxuICAgICAgICBbY29sdW1uXT1cImNvbHVtblwiXG4gICAgICAgIFtpbnB1dENsYXNzXT1cImZpbHRlcklucHV0Q2xhc3NcIlxuICAgICAgICAoZmlsdGVyKT1cImZpbHRlci5lbWl0KCRldmVudClcIlxuICAgICAgPlxuICAgICAgPC9uZzItc21hcnQtdGFibGUtZmlsdGVyPlxuICAgIDwvdGg+XG4gICAgPHRoXG4gICAgICBuZzItc3QtYWRkLWJ1dHRvblxuICAgICAgKm5nSWY9XCJzaG93QWN0aW9uQ29sdW1uUmlnaHRcIlxuICAgICAgW2dyaWRdPVwiZ3JpZFwiXG4gICAgICBbc291cmNlXT1cInNvdXJjZVwiXG4gICAgICAoY3JlYXRlKT1cImNyZWF0ZS5lbWl0KCRldmVudClcIlxuICAgID48L3RoPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFRoZWFkRml0bGVyc1Jvd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGdyaWQ6IEdyaWQ7XG4gIEBJbnB1dCgpIHNvdXJjZTogRGF0YVNvdXJjZTtcblxuICBAT3V0cHV0KCkgY3JlYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBmaWx0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBpc011bHRpU2VsZWN0VmlzaWJsZTogYm9vbGVhbjtcbiAgc2hvd0FjdGlvbkNvbHVtbkxlZnQ6IGJvb2xlYW47XG4gIHNob3dBY3Rpb25Db2x1bW5SaWdodDogYm9vbGVhbjtcbiAgZmlsdGVySW5wdXRDbGFzczogc3RyaW5nO1xuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuaXNNdWx0aVNlbGVjdFZpc2libGUgPSB0aGlzLmdyaWQuaXNNdWx0aVNlbGVjdFZpc2libGUoKTtcbiAgICB0aGlzLnNob3dBY3Rpb25Db2x1bW5MZWZ0ID0gdGhpcy5ncmlkLnNob3dBY3Rpb25Db2x1bW4oJ2xlZnQnKTtcbiAgICB0aGlzLnNob3dBY3Rpb25Db2x1bW5SaWdodCA9IHRoaXMuZ3JpZC5zaG93QWN0aW9uQ29sdW1uKCdyaWdodCcpO1xuICAgIHRoaXMuZmlsdGVySW5wdXRDbGFzcyA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdmaWx0ZXIuaW5wdXRDbGFzcycpO1xuICB9XG59XG4iXX0=