import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';
let TheadFormRowComponent = class TheadFormRowComponent {
    constructor() {
        this.create = new EventEmitter();
    }
    onCreate(event) {
        event.stopPropagation();
        this.grid.create(this.grid.getNewRow(), this.createConfirm);
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.addInputClass = this.grid.getSetting('add.inputClass');
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Grid)
], TheadFormRowComponent.prototype, "grid", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Row)
], TheadFormRowComponent.prototype, "row", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", EventEmitter)
], TheadFormRowComponent.prototype, "createConfirm", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], TheadFormRowComponent.prototype, "create", void 0);
TheadFormRowComponent = tslib_1.__decorate([
    Component({
        selector: '[ng2-st-thead-form-row]',
        template: `
    <td *ngIf=""></td>
    <td *ngIf="showActionColumnLeft" class="ng2-smart-actions">
      <ng2-st-actions
        [grid]="grid"
        (create)="onCreate($event)"
      ></ng2-st-actions>
    </td>
    <td
      *ngFor="let cell of grid.getNewRow().getCells()"
      [ngStyle]="{ display: cell.getColumn().isHidden ? 'none' : '' }"
    >
      <ng2-smart-table-cell
        [cell]="cell"
        [grid]="grid"
        [isNew]="true"
        [createConfirm]="createConfirm"
        [inputClass]="addInputClass"
        [isInEditing]="grid.getNewRow().isInEditing"
        (edited)="onCreate($event)"
      >
      </ng2-smart-table-cell>
    </td>
    <td *ngIf="showActionColumnRight" class="ng2-smart-actions">
      <ng2-st-actions
        [grid]="grid"
        (create)="onCreate($event)"
      ></ng2-st-actions>
    </td>
  `
    })
], TheadFormRowComponent);
export { TheadFormRowComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQtZm9ybS1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGhlYWQvcm93cy90aGVhZC1mb3JtLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBRWIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQW1DaEQsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7SUFqQ2xDO1FBc0NZLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBbUI3QyxDQUFDO0lBWkMsUUFBUSxDQUFDLEtBQVU7UUFDakIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM3RCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDOUQsQ0FBQztDQUNGLENBQUE7QUF2QlU7SUFBUixLQUFLLEVBQUU7c0NBQU8sSUFBSTttREFBQztBQUNYO0lBQVIsS0FBSyxFQUFFO3NDQUFNLEdBQUc7a0RBQUM7QUFDVDtJQUFSLEtBQUssRUFBRTtzQ0FBZ0IsWUFBWTs0REFBTTtBQUVoQztJQUFULE1BQU0sRUFBRTs7cURBQWtDO0FBTGhDLHFCQUFxQjtJQWpDakMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHlCQUF5QjtRQUNuQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkJUO0tBQ0YsQ0FBQztHQUNXLHFCQUFxQixDQXdCakM7U0F4QlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9ncmlkJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNldC9yb3cnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbmcyLXN0LXRoZWFkLWZvcm0tcm93XScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHRkICpuZ0lmPVwiXCI+PC90ZD5cbiAgICA8dGQgKm5nSWY9XCJzaG93QWN0aW9uQ29sdW1uTGVmdFwiIGNsYXNzPVwibmcyLXNtYXJ0LWFjdGlvbnNcIj5cbiAgICAgIDxuZzItc3QtYWN0aW9uc1xuICAgICAgICBbZ3JpZF09XCJncmlkXCJcbiAgICAgICAgKGNyZWF0ZSk9XCJvbkNyZWF0ZSgkZXZlbnQpXCJcbiAgICAgID48L25nMi1zdC1hY3Rpb25zPlxuICAgIDwvdGQ+XG4gICAgPHRkXG4gICAgICAqbmdGb3I9XCJsZXQgY2VsbCBvZiBncmlkLmdldE5ld1JvdygpLmdldENlbGxzKClcIlxuICAgICAgW25nU3R5bGVdPVwieyBkaXNwbGF5OiBjZWxsLmdldENvbHVtbigpLmlzSGlkZGVuID8gJ25vbmUnIDogJycgfVwiXG4gICAgPlxuICAgICAgPG5nMi1zbWFydC10YWJsZS1jZWxsXG4gICAgICAgIFtjZWxsXT1cImNlbGxcIlxuICAgICAgICBbZ3JpZF09XCJncmlkXCJcbiAgICAgICAgW2lzTmV3XT1cInRydWVcIlxuICAgICAgICBbY3JlYXRlQ29uZmlybV09XCJjcmVhdGVDb25maXJtXCJcbiAgICAgICAgW2lucHV0Q2xhc3NdPVwiYWRkSW5wdXRDbGFzc1wiXG4gICAgICAgIFtpc0luRWRpdGluZ109XCJncmlkLmdldE5ld1JvdygpLmlzSW5FZGl0aW5nXCJcbiAgICAgICAgKGVkaXRlZCk9XCJvbkNyZWF0ZSgkZXZlbnQpXCJcbiAgICAgID5cbiAgICAgIDwvbmcyLXNtYXJ0LXRhYmxlLWNlbGw+XG4gICAgPC90ZD5cbiAgICA8dGQgKm5nSWY9XCJzaG93QWN0aW9uQ29sdW1uUmlnaHRcIiBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb25zXCI+XG4gICAgICA8bmcyLXN0LWFjdGlvbnNcbiAgICAgICAgW2dyaWRdPVwiZ3JpZFwiXG4gICAgICAgIChjcmVhdGUpPVwib25DcmVhdGUoJGV2ZW50KVwiXG4gICAgICA+PC9uZzItc3QtYWN0aW9ucz5cbiAgICA8L3RkPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFRoZWFkRm9ybVJvd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGdyaWQ6IEdyaWQ7XG4gIEBJbnB1dCgpIHJvdzogUm93O1xuICBASW5wdXQoKSBjcmVhdGVDb25maXJtOiBFdmVudEVtaXR0ZXI8YW55PjtcblxuICBAT3V0cHV0KCkgY3JlYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgaXNNdWx0aVNlbGVjdFZpc2libGU6IGJvb2xlYW47XG4gIHNob3dBY3Rpb25Db2x1bW5MZWZ0OiBib29sZWFuO1xuICBzaG93QWN0aW9uQ29sdW1uUmlnaHQ6IGJvb2xlYW47XG4gIGFkZElucHV0Q2xhc3M6IHN0cmluZztcblxuICBvbkNyZWF0ZShldmVudDogYW55KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICB0aGlzLmdyaWQuY3JlYXRlKHRoaXMuZ3JpZC5nZXROZXdSb3coKSwgdGhpcy5jcmVhdGVDb25maXJtKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuaXNNdWx0aVNlbGVjdFZpc2libGUgPSB0aGlzLmdyaWQuaXNNdWx0aVNlbGVjdFZpc2libGUoKTtcbiAgICB0aGlzLnNob3dBY3Rpb25Db2x1bW5MZWZ0ID0gdGhpcy5ncmlkLnNob3dBY3Rpb25Db2x1bW4oJ2xlZnQnKTtcbiAgICB0aGlzLnNob3dBY3Rpb25Db2x1bW5SaWdodCA9IHRoaXMuZ3JpZC5zaG93QWN0aW9uQ29sdW1uKCdyaWdodCcpO1xuICAgIHRoaXMuYWRkSW5wdXRDbGFzcyA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhZGQuaW5wdXRDbGFzcycpO1xuICB9XG59XG4iXX0=