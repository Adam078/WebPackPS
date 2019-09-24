import {expect} from 'chai';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;
import fs from 'fs';

describe('Our first test', ()=>{
  it('should pass', ()=>{
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it("should have h2 with Users as text", () => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    const dom = new JSDOM(index);
    const pTag = dom.window.document.querySelector('h2');
    expect(pTag.innerHTML).to.equal('Users');
  });
});
