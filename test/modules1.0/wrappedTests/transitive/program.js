/* This file has been generated by yabbler.js */
require.define({
"program": function(require, exports, module) {
var test = require('test');
test.assert(require('a').foo() == 1, 'transitive');
test.print('DONE', 'info');

}}, ["test", "a"]);