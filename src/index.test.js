import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs'; //for interaction of node with filesystem

describe('Our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('index.html', (done) => {
    it('should h1 says Users', () => {
        const index = fs.readFileSync('./src/index.html', "utf-8");
        jsdom.env(index, function(err, window){
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal("Users");
            done();
            window.close();
        });
    });
});