var DataStore = /** @class */ (function () {
    function DataStore() {
        this.data = [];
    }
    DataStore.prototype.add = function (item) {
        this.data.push(item);
    };
    DataStore.prototype.getAll = function () {
        return this.data;
    };
    DataStore.prototype.getById = function (id) {
        return this.data[id];
    };
    DataStore.prototype.remove = function (id) {
        this.data = this.data.filter(function (_, index) { return index !== id; });
    };
    return DataStore;
}());
// Example usage
var numberStore = new DataStore();
numberStore.add(10);
numberStore.add(20);
numberStore.add(30);
console.log(numberStore.getAll()); // [10, 20, 30]
var productStore = new DataStore();
var product1 = { id: 1, name: 'Product A', price: 100 };
productStore.add(product1);
console.log(productStore.getAll()); // [{ id: 1, name: 'Product A', price: 100 }]
