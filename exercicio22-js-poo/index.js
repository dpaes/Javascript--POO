const App = require('./App.js');


/* testes\/ basta digitar node index.js c/ node instalado */
App.createUser('daniel@daniel.com', 'Daniel');
App.createUser('denili@daniel.com', 'denili');
App.createUser('dauol@daniel.com', 'dauol');

App.deposit('daniel@daniel.com', 100);

App.transfer('daniel@daniel.com','denili@daniel.com', 20);

App.changeLoanTax(10);
App.loan('dauol@daniel.com', 2000,24);

console.log(App.findUser('daniel@daniel.com'));
console.log(App.findUser('daniel@daniel.com').account);

console.log(App.findUser('denili@daniel.com'));
console.log(App.findUser('denili@daniel.com').account);

console.log(App.findUser('dauol@daniel.com'));
console.log(App.findUser('dauol@daniel.com').account);

console.log(App.findUser('dauol@daniel.com').account.loans[0].numberOfInstallments);