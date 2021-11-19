

let person = {
    name:'John',
    age:32,
    partTime: false,
    showInfo: function () {
        showMessage (this.name  +  this.age);
    }
};

person.showInfo();