import {expect} from 'chai';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;
import fs from 'fs';

describe('OUr first test', ()=>{
  it('should pass', ()=>{
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it("should say hello", () => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    const dom = new JSDOM(index);
    const pTag = dom.window.document.querySelector('.welcome');
    expect(pTag.innerHTML).to.equal('Hallo Welt');
    });
});
