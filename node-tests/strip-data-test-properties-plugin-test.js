let fs = require('fs');
let assert = require('assert');

let babel7 = require('@babel/core');

let StripDataTestPropertiesPlugin6 = require('../strip-data-test-properties-plugin6');

function testFixture(name) {
  it(`fixture: ${name}`, function () {
    let fixturePath = `${__dirname}/fixtures/${name}/fixture.js`;
    let expectedPath = `${__dirname}/fixtures/${name}/expected7.js`;

    let expected = fs.readFileSync(expectedPath, 'utf8').replace(/\r\n/g, '\n');

    let result = babel7.transformFileSync(fixturePath, {
      plugins: [StripDataTestPropertiesPlugin6],
    });

    assert.strictEqual(result.code.trim(), expected.trim());
  });
}

describe('StripDataTestProperties plugin', function () {
  testFixture('default');
});
