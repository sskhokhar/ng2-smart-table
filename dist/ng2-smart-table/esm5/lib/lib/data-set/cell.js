export function prepareValue(value) {
    return value;
}
var Cell = /** @class */ (function () {
    function Cell(value, row, column, dataSet) {
        this.value = value;
        this.row = row;
        this.column = column;
        this.dataSet = dataSet;
        this.newValue = '';
        this.newValue = value;
    }
    Cell.prototype.getColumn = function () {
        return this.column;
    };
    Cell.prototype.getRow = function () {
        return this.row;
    };
    Cell.prototype.getValue = function () {
        var valid = this.column.getValuePrepareFunction() instanceof Function;
        var prepare = valid
            ? this.column.getValuePrepareFunction()
            : Cell.PREPARE;
        return prepare.call(null, this.value, this.row.getData(), this);
    };
    Cell.prototype.setValue = function (value) {
        this.newValue = value;
    };
    Cell.prototype.getId = function () {
        return this.getColumn().id;
    };
    Cell.prototype.getTitle = function () {
        return this.getColumn().title;
    };
    Cell.prototype.getType = function () {
        return this.getColumn().type;
    };
    Cell.prototype.isEditable = function () {
        if (this.getRow().index === -1) {
            return this.getColumn().isAddable;
        }
        else {
            return this.getColumn().isEditable;
        }
    };
    Cell.PREPARE = prepareValue;
    return Cell;
}());
export { Cell };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9saWIvZGF0YS1zZXQvY2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxNQUFNLFVBQVUsWUFBWSxDQUFDLEtBQVU7SUFDckMsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBRUQ7SUFJRSxjQUNZLEtBQVUsRUFDVixHQUFRLEVBQ1IsTUFBVyxFQUNYLE9BQWdCO1FBSGhCLFVBQUssR0FBTCxLQUFLLENBQUs7UUFDVixRQUFHLEdBQUgsR0FBRyxDQUFLO1FBQ1IsV0FBTSxHQUFOLE1BQU0sQ0FBSztRQUNYLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFQNUIsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQVNqQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQsd0JBQVMsR0FBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRUQscUJBQU0sR0FBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBRUQsdUJBQVEsR0FBUjtRQUNFLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQXVCLEVBQUUsWUFBWSxRQUFRLENBQUM7UUFDeEUsSUFBTSxPQUFPLEdBQUcsS0FBSztZQUNuQixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsRUFBRTtZQUN2QyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNqQixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsdUJBQVEsR0FBUixVQUFTLEtBQVU7UUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVELG9CQUFLLEdBQUw7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELHVCQUFRLEdBQVI7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUVELHNCQUFPLEdBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVELHlCQUFVLEdBQVY7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDOUIsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDO1NBQ25DO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBakRnQixZQUFPLEdBQUcsWUFBWSxDQUFDO0lBa0QxQyxXQUFDO0NBQUEsQUFwREQsSUFvREM7U0FwRFksSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbiB9IGZyb20gJy4vY29sdW1uJztcbmltcG9ydCB7IERhdGFTZXQgfSBmcm9tICcuL2RhdGEtc2V0JztcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4vcm93JztcblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGNsYXNzIENlbGwge1xuICBuZXdWYWx1ZTogYW55ID0gJyc7XG4gIHByb3RlY3RlZCBzdGF0aWMgUFJFUEFSRSA9IHByZXBhcmVWYWx1ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdmFsdWU6IGFueSxcbiAgICBwcm90ZWN0ZWQgcm93OiBSb3csXG4gICAgcHJvdGVjdGVkIGNvbHVtbjogYW55LFxuICAgIHByb3RlY3RlZCBkYXRhU2V0OiBEYXRhU2V0XG4gICkge1xuICAgIHRoaXMubmV3VmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldENvbHVtbigpOiBDb2x1bW4ge1xuICAgIHJldHVybiB0aGlzLmNvbHVtbjtcbiAgfVxuXG4gIGdldFJvdygpOiBSb3cge1xuICAgIHJldHVybiB0aGlzLnJvdztcbiAgfVxuXG4gIGdldFZhbHVlKCk6IGFueSB7XG4gICAgY29uc3QgdmFsaWQgPSB0aGlzLmNvbHVtbi5nZXRWYWx1ZVByZXBhcmVGdW5jdGlvbigpIGluc3RhbmNlb2YgRnVuY3Rpb247XG4gICAgY29uc3QgcHJlcGFyZSA9IHZhbGlkXG4gICAgICA/IHRoaXMuY29sdW1uLmdldFZhbHVlUHJlcGFyZUZ1bmN0aW9uKClcbiAgICAgIDogQ2VsbC5QUkVQQVJFO1xuICAgIHJldHVybiBwcmVwYXJlLmNhbGwobnVsbCwgdGhpcy52YWx1ZSwgdGhpcy5yb3cuZ2V0RGF0YSgpLCB0aGlzKTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBhbnkpOiBhbnkge1xuICAgIHRoaXMubmV3VmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29sdW1uKCkuaWQ7XG4gIH1cblxuICBnZXRUaXRsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmdldENvbHVtbigpLnRpdGxlO1xuICB9XG5cbiAgZ2V0VHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmdldENvbHVtbigpLnR5cGU7XG4gIH1cblxuICBpc0VkaXRhYmxlKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmdldFJvdygpLmluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29sdW1uKCkuaXNBZGRhYmxlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRDb2x1bW4oKS5pc0VkaXRhYmxlO1xuICAgIH1cbiAgfVxufVxuIl19