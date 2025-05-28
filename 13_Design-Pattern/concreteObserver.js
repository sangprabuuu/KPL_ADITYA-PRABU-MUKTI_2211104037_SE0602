const Observer = require('./observer');
 
class ConcreteObserver extends Observer {
    constructor(name) {
        super();
        this.name = name;
    }
 
    update(data) {
        console.log(`${this.name} menerima data: ${data}`);
    }
}
 
module.exports = ConcreteObserver;