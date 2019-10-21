import * as tools from '../src/lib/tools';
import { expect } from 'chai';

describe('tools.js测试', function() {
  describe('getName函数测试', function() {
    it('返回值测试通过', function() {
      let res = tools.getName();
      console.log(res);
      expect(res).to.be.equal('abc');
    });
  });
});
