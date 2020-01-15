var Column = /** @class */ (function () {
    function Column(id, settings, dataSet) {
        this.id = id;
        this.settings = settings;
        this.dataSet = dataSet;
        this.title = '';
        this.type = '';
        this.class = '';
        this.width = '';
        this.isSortable = false;
        this.isEditable = true;
        this.isAddable = true;
        this.isFilterable = false;
        this.isHidden = false;
        this.sortDirection = '';
        this.defaultSortDirection = '';
        this.editor = {
            type: '',
            config: {},
            component: null
        };
        this.filter = {
            type: '',
            config: {},
            component: null
        };
        this.renderComponent = null;
        this.process();
    }
    Column.prototype.getOnComponentInitFunction = function () {
        return this.onComponentInitFunction;
    };
    Column.prototype.getCompareFunction = function () {
        return this.compareFunction;
    };
    Column.prototype.getValuePrepareFunction = function () {
        return this.valuePrepareFunction;
    };
    Column.prototype.getFilterFunction = function () {
        return this.filterFunction;
    };
    Column.prototype.getConfig = function () {
        return this.editor && this.editor.config;
    };
    Column.prototype.getFilterType = function () {
        return this.filter && this.filter.type;
    };
    Column.prototype.getFilterConfig = function () {
        return this.filter && this.filter.config;
    };
    Column.prototype.process = function () {
        this.title = this.settings['title'];
        this.class = this.settings['class'];
        this.width = this.settings['width'];
        this.type = this.prepareType();
        this.editor = this.settings['editor'];
        this.filter = this.settings['filter'];
        this.renderComponent = this.settings['renderComponent'];
        this.isHidden = this.settings['hidden'];
        this.isFilterable =
            typeof this.settings['filter'] === 'undefined'
                ? true
                : !!this.settings['filter'];
        this.defaultSortDirection =
            ['asc', 'desc'].indexOf(this.settings['sortDirection']) !== -1
                ? this.settings['sortDirection']
                : '';
        this.isSortable =
            typeof this.settings['sort'] === 'undefined'
                ? true
                : !!this.settings['sort'];
        this.isEditable =
            typeof this.settings['editable'] === 'undefined'
                ? true
                : !!this.settings['editable'];
        this.isAddable =
            typeof this.settings['addable'] === 'undefined'
                ? true
                : !!this.settings['addable'];
        this.sortDirection = this.prepareSortDirection();
        this.compareFunction = this.settings['compareFunction'];
        this.valuePrepareFunction = this.settings['valuePrepareFunction'];
        this.filterFunction = this.settings['filterFunction'];
        this.onComponentInitFunction = this.settings['onComponentInitFunction'];
    };
    Column.prototype.prepareType = function () {
        return this.settings['type'] || this.determineType();
    };
    Column.prototype.prepareSortDirection = function () {
        return this.settings['sort'] === 'desc' ? 'desc' : 'asc';
    };
    Column.prototype.determineType = function () {
        // TODO: determine type by data
        return 'text';
    };
    return Column;
}());
export { Column };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2xpYi9kYXRhLXNldC9jb2x1bW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7SUE0QkUsZ0JBQ1MsRUFBVSxFQUNQLFFBQWEsRUFDYixPQUFnQjtRQUZuQixPQUFFLEdBQUYsRUFBRSxDQUFRO1FBQ1AsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUNiLFlBQU8sR0FBUCxPQUFPLENBQVM7UUE5QjVCLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixlQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUMzQix5QkFBb0IsR0FBVyxFQUFFLENBQUM7UUFDbEMsV0FBTSxHQUFrRDtZQUN0RCxJQUFJLEVBQUUsRUFBRTtZQUNSLE1BQU0sRUFBRSxFQUFFO1lBQ1YsU0FBUyxFQUFFLElBQUk7U0FDaEIsQ0FBQztRQUNGLFdBQU0sR0FBa0Q7WUFDdEQsSUFBSSxFQUFFLEVBQUU7WUFDUixNQUFNLEVBQUUsRUFBRTtZQUNWLFNBQVMsRUFBRSxJQUFJO1NBQ2hCLENBQUM7UUFDRixvQkFBZSxHQUFRLElBQUksQ0FBQztRQVcxQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELDJDQUEwQixHQUExQjtRQUNFLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDO0lBQ3RDLENBQUM7SUFFRCxtQ0FBa0IsR0FBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFD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QUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCw0QkFBVyxHQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBRUQscUNBQW9CLEdBQXBCO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDM0QsQ0FBQztJQUVELDhCQUFhLEdBQWI7UUFDRSwrQkFBK0I7UUFDL0IsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUNILGFBQUM7QUFBRCxDQUFDLEFBakhELElBaUhDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNldCB9IGZyb20gJy4vZGF0YS1zZXQnO1xuXG5leHBvcnQgY2xhc3MgQ29sdW1uIHtcbiAgdGl0bGU6IHN0cmluZyA9ICcnO1xuICB0eXBlOiBzdHJpbmcgPSAnJztcbiAgY2xhc3M6IHN0cmluZyA9ICcnO1xuICB3aWR0aDogc3RyaW5nID0gJyc7XG4gIGlzU29ydGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaXNFZGl0YWJsZTogYm9vbGVhbiA9IHRydWU7XG4gIGlzQWRkYWJsZTogYm9vbGVhbiA9IHRydWU7XG4gIGlzRmlsdGVyYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBpc0hpZGRlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBzb3J0RGlyZWN0aW9uOiBzdHJpbmcgPSAnJztcbiAgZGVmYXVsdFNvcnREaXJlY3Rpb246IHN0cmluZyA9ICcnO1xuICBlZGl0b3I6IHsgdHlwZTogc3RyaW5nOyBjb25maWc6IGFueTsgY29tcG9uZW50OiBhbnkgfSA9IHtcbiAgICB0eXBlOiAnJyxcbiAgICBjb25maWc6IHt9LFxuICAgIGNvbXBvbmVudDogbnVsbFxuICB9O1xuICBmaWx0ZXI6IHsgdHlwZTogc3RyaW5nOyBjb25maWc6IGFueTsgY29tcG9uZW50OiBhbnkgfSA9IHtcbiAgICB0eXBlOiAnJyxcbiAgICBjb25maWc6IHt9LFxuICAgIGNvbXBvbmVudDogbnVsbFxuICB9O1xuICByZW5kZXJDb21wb25lbnQ6IGFueSA9IG51bGw7XG4gIGNvbXBhcmVGdW5jdGlvbjogRnVuY3Rpb247XG4gIHZhbHVlUHJlcGFyZUZ1bmN0aW9uOiBGdW5jdGlvbjtcbiAgZmlsdGVyRnVuY3Rpb246IEZ1bmN0aW9uO1xuICBvbkNvbXBvbmVudEluaXRGdW5jdGlvbjogRnVuY3Rpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGlkOiBzdHJpbmcsXG4gICAgcHJvdGVjdGVkIHNldHRpbmdzOiBhbnksXG4gICAgcHJvdGVjdGVkIGRhdGFTZXQ6IERhdGFTZXRcbiAgKSB7XG4gICAgdGhpcy5wcm9jZXNzKCk7XG4gIH1cblxuICBnZXRPbkNvbXBvbmVudEluaXRGdW5jdGlvbigpOiBGdW5jdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMub25Db21wb25lbnRJbml0RnVuY3Rpb247XG4gIH1cblxuICBnZXRDb21wYXJlRnVuY3Rpb24oKTogRnVuY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLmNvbXBhcmVGdW5jdGlvbjtcbiAgfVxuXG4gIGdldFZhbHVlUHJlcGFyZUZ1bmN0aW9uKCk6IEZ1bmN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVByZXBhcmVGdW5jdGlvbjtcbiAgfVxuXG4gIGdldEZpbHRlckZ1bmN0aW9uKCk6IEZ1bmN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJGdW5jdGlvbjtcbiAgfVxuXG4gIGdldENvbmZpZygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmVkaXRvciAmJiB0aGlzLmVkaXRvci5jb25maWc7XG4gIH1cblxuICBnZXRGaWx0ZXJUeXBlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyICYmIHRoaXMuZmlsdGVyLnR5cGU7XG4gIH1cblxuICBnZXRGaWx0ZXJDb25maWcoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXIgJiYgdGhpcy5maWx0ZXIuY29uZmlnO1xuICB9XG5cbiAgcHJvdGVjdGVkIHByb2Nlc3MoKSB7XG4gICAgdGhpcy50aXRsZSA9IHRoaXMuc2V0dGluZ3NbJ3RpdGxlJ107XG4gICAgdGhpcy5jbGFzcyA9IHRoaXMuc2V0dGluZ3NbJ2NsYXNzJ107XG4gICAgdGhpcy53aWR0aCA9IHRoaXMuc2V0dGluZ3NbJ3dpZHRoJ107XG4gICAgdGhpcy50eXBlID0gdGhpcy5wcmVwYXJlVHlwZSgpO1xuICAgIHRoaXMuZWRpdG9yID0gdGhpcy5zZXR0aW5nc1snZWRpdG9yJ107XG4gICAgdGhpcy5maWx0ZXIgPSB0aGlzLnNldHRpbmdzWydmaWx0ZXInXTtcbiAgICB0aGlzLnJlbmRlckNvbXBvbmVudCA9IHRoaXMuc2V0dGluZ3NbJ3JlbmRlckNvbXBvbmVudCddO1xuICAgIHRoaXMuaXNIaWRkZW4gPSB0aGlzLnNldHRpbmdzWydoaWRkZW4nXTtcbiAgICB0aGlzLmlzRmlsdGVyYWJsZSA9XG4gICAgICB0eXBlb2YgdGhpcy5zZXR0aW5nc1snZmlsdGVyJ10gPT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gdHJ1ZVxuICAgICAgICA6ICEhdGhpcy5zZXR0aW5nc1snZmlsdGVyJ107XG4gICAgdGhpcy5kZWZhdWx0U29ydERpcmVjdGlvbiA9XG4gICAgICBbJ2FzYycsICdkZXNjJ10uaW5kZXhPZih0aGlzLnNldHRpbmdzWydzb3J0RGlyZWN0aW9uJ10pICE9PSAtMVxuICAgICAgICA/IHRoaXMuc2V0dGluZ3NbJ3NvcnREaXJlY3Rpb24nXVxuICAgICAgICA6ICcnO1xuICAgIHRoaXMuaXNTb3J0YWJsZSA9XG4gICAgICB0eXBlb2YgdGhpcy5zZXR0aW5nc1snc29ydCddID09PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IHRydWVcbiAgICAgICAgOiAhIXRoaXMuc2V0dGluZ3NbJ3NvcnQnXTtcbiAgICB0aGlzLmlzRWRpdGFibGUgPVxuICAgICAgdHlwZW9mIHRoaXMuc2V0dGluZ3NbJ2VkaXRhYmxlJ10gPT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gdHJ1ZVxuICAgICAgICA6ICEhdGhpcy5zZXR0aW5nc1snZWRpdGFibGUnXTtcbiAgICB0aGlzLmlzQWRkYWJsZSA9XG4gICAgICB0eXBlb2YgdGhpcy5zZXR0aW5nc1snYWRkYWJsZSddID09PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IHRydWVcbiAgICAgICAgOiAhIXRoaXMuc2V0dGluZ3NbJ2FkZGFibGUnXTtcbiAgICB0aGlzLnNvcnREaXJlY3Rpb24gPSB0aGlzLnByZXBhcmVTb3J0RGlyZWN0aW9uKCk7XG5cbiAgICB0aGlzLmNvbXBhcmVGdW5jdGlvbiA9IHRoaXMuc2V0dGluZ3NbJ2NvbXBhcmVGdW5jdGlvbiddO1xuICAgIHRoaXMudmFsdWVQcmVwYXJlRnVuY3Rpb24gPSB0aGlzLnNldHRpbmdzWyd2YWx1ZVByZXBhcmVGdW5jdGlvbiddO1xuICAgIHRoaXMuZmlsdGVyRnVuY3Rpb24gPSB0aGlzLnNldHRpbmdzWydmaWx0ZXJGdW5jdGlvbiddO1xuICAgIHRoaXMub25Db21wb25lbnRJbml0RnVuY3Rpb24gPSB0aGlzLnNldHRpbmdzWydvbkNvbXBvbmVudEluaXRGdW5jdGlvbiddO1xuICB9XG5cbiAgcHJlcGFyZVR5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5nc1sndHlwZSddIHx8IHRoaXMuZGV0ZXJtaW5lVHlwZSgpO1xuICB9XG5cbiAgcHJlcGFyZVNvcnREaXJlY3Rpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5nc1snc29ydCddID09PSAnZGVzYycgPyAnZGVzYycgOiAnYXNjJztcbiAgfVxuXG4gIGRldGVybWluZVR5cGUoKTogc3RyaW5nIHtcbiAgICAvLyBUT0RPOiBkZXRlcm1pbmUgdHlwZSBieSBkYXRhXG4gICAgcmV0dXJuICd0ZXh0JztcbiAgfVxufVxuIl19