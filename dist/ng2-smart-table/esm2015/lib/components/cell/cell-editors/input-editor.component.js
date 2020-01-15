import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DefaultEditor } from './default-editor';
let InputEditorComponent = class InputEditorComponent extends DefaultEditor {
    constructor() {
        super();
    }
};
InputEditorComponent = tslib_1.__decorate([
    Component({
        selector: 'input-editor',
        template: `
    <input
      [ngClass]="inputClass"
      class="form-control"
      [(ngModel)]="cell.newValue"
      [name]="cell.getId()"
      [type]="cell.getType()"
      [placeholder]="cell.getTitle()"
      [disabled]="!cell.isEditable()"
      (click)="onClick.emit($event)"
      (keydown.enter)="onEdited.emit($event)"
      (keydown.esc)="onStopEditing.emit()"
    />
  `,
        styles: [":host input,:host textarea{width:100%;line-height:normal;padding:.375em .75em}"]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], InputEditorComponent);
export { InputEditorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NlbGwvY2VsbC1lZGl0b3JzL2lucHV0LWVkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBb0JqRCxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFxQixTQUFRLGFBQWE7SUFDckQ7UUFDRSxLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUM7Q0FDRixDQUFBO0FBSlksb0JBQW9CO0lBbEJoQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUV4QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7R0FhVDs7S0FDRixDQUFDOztHQUNXLG9CQUFvQixDQUloQztTQUpZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEZWZhdWx0RWRpdG9yIH0gZnJvbSAnLi9kZWZhdWx0LWVkaXRvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lucHV0LWVkaXRvcicsXG4gIHN0eWxlVXJsczogWycuL2VkaXRvci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpbnB1dFxuICAgICAgW25nQ2xhc3NdPVwiaW5wdXRDbGFzc1wiXG4gICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICBbKG5nTW9kZWwpXT1cImNlbGwubmV3VmFsdWVcIlxuICAgICAgW25hbWVdPVwiY2VsbC5nZXRJZCgpXCJcbiAgICAgIFt0eXBlXT1cImNlbGwuZ2V0VHlwZSgpXCJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJjZWxsLmdldFRpdGxlKClcIlxuICAgICAgW2Rpc2FibGVkXT1cIiFjZWxsLmlzRWRpdGFibGUoKVwiXG4gICAgICAoY2xpY2spPVwib25DbGljay5lbWl0KCRldmVudClcIlxuICAgICAgKGtleWRvd24uZW50ZXIpPVwib25FZGl0ZWQuZW1pdCgkZXZlbnQpXCJcbiAgICAgIChrZXlkb3duLmVzYyk9XCJvblN0b3BFZGl0aW5nLmVtaXQoKVwiXG4gICAgLz5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEVkaXRvckNvbXBvbmVudCBleHRlbmRzIERlZmF1bHRFZGl0b3Ige1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG59XG4iXX0=