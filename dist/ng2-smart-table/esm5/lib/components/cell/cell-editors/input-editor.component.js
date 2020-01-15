import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DefaultEditor } from './default-editor';
var InputEditorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(InputEditorComponent, _super);
    function InputEditorComponent() {
        return _super.call(this) || this;
    }
    InputEditorComponent = tslib_1.__decorate([
        Component({
            selector: 'input-editor',
            template: "\n    <input\n      [ngClass]=\"inputClass\"\n      class=\"form-control\"\n      [(ngModel)]=\"cell.newValue\"\n      [name]=\"cell.getId()\"\n      [type]=\"cell.getType()\"\n      [placeholder]=\"cell.getTitle()\"\n      [disabled]=\"!cell.isEditable()\"\n      (click)=\"onClick.emit($event)\"\n      (keydown.enter)=\"onEdited.emit($event)\"\n      (keydown.esc)=\"onStopEditing.emit()\"\n    />\n  ",
            styles: [":host input,:host textarea{width:100%;line-height:normal;padding:.375em .75em}"]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], InputEditorComponent);
    return InputEditorComponent;
}(DefaultEditor));
export { InputEditorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NlbGwvY2VsbC1lZGl0b3JzL2lucHV0LWVkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBb0JqRDtJQUEwQyxnREFBYTtJQUNyRDtlQUNFLGlCQUFPO0lBQ1QsQ0FBQztJQUhVLG9CQUFvQjtRQWxCaEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFFeEIsUUFBUSxFQUFFLHNaQWFUOztTQUNGLENBQUM7O09BQ1csb0JBQW9CLENBSWhDO0lBQUQsMkJBQUM7Q0FBQSxBQUpELENBQTBDLGFBQWEsR0FJdEQ7U0FKWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGVmYXVsdEVkaXRvciB9IGZyb20gJy4vZGVmYXVsdC1lZGl0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbnB1dC1lZGl0b3InLFxuICBzdHlsZVVybHM6IFsnLi9lZGl0b3IuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aW5wdXRcbiAgICAgIFtuZ0NsYXNzXT1cImlucHV0Q2xhc3NcIlxuICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgWyhuZ01vZGVsKV09XCJjZWxsLm5ld1ZhbHVlXCJcbiAgICAgIFtuYW1lXT1cImNlbGwuZ2V0SWQoKVwiXG4gICAgICBbdHlwZV09XCJjZWxsLmdldFR5cGUoKVwiXG4gICAgICBbcGxhY2Vob2xkZXJdPVwiY2VsbC5nZXRUaXRsZSgpXCJcbiAgICAgIFtkaXNhYmxlZF09XCIhY2VsbC5pc0VkaXRhYmxlKClcIlxuICAgICAgKGNsaWNrKT1cIm9uQ2xpY2suZW1pdCgkZXZlbnQpXCJcbiAgICAgIChrZXlkb3duLmVudGVyKT1cIm9uRWRpdGVkLmVtaXQoJGV2ZW50KVwiXG4gICAgICAoa2V5ZG93bi5lc2MpPVwib25TdG9wRWRpdGluZy5lbWl0KClcIlxuICAgIC8+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBEZWZhdWx0RWRpdG9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxufVxuIl19