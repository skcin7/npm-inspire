const expect = require('chai').expect;
const myapp = require("./index");

describe('Testing printQuote function, should print a random inspirational quote!" ', () => {
    it('Should Return True (Successfully Printed Quote)!', () => {
        expect(myapp.printQuote()).to.equal(true);
    });
});