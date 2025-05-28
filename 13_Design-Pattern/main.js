const Subject = require('./subject');
const ConcreteObserver = require('./concreteObserver');
 
// Inisialisasi subject
const subject = new Subject();
 
// Inisialisasi observers
const observer1 = new ConcreteObserver('Observer 1');
const observer2 = new ConcreteObserver('Observer 2');
 
// Menambahkan observer ke subject
subject.attach(observer1);
subject.attach(observer2);
 
// Notifikasi ke semua observer
subject.notify("Update terbaru: Versi 1.0");
 
// Menghapus satu observer dan notifikasi ulang
subject.detach(observer1);
subject.notify("Update terbaru: Versi 2.0");