require.def('program', ['require', 'exports', 'module', 'test', 'a', 'b'], function(require, exports, module) {
	var test = require('test');
	test.assert(typeof require == 'function', 'require is a function');
	test.assert(typeof exports == 'object', 'exports is an object');
	test.assert(module.id == 'program', 'module.id is program');
	
	require('a');
	require('b');
	
	test.print('DONE', 'info');
});


require.def('a', ['require', 'test'], function(require, exports, module) {
	var test = require('test');
	test.assert(typeof require == 'function', 'require is a function');
	test.assert(typeof exports == 'undefined', 'exports is undefined');
	test.assert(typeof modules == 'undefined', 'module is undefined');
});

require.def('b', ['module', 'require', 'exports', 'test'], function(module, require, exports) {
	var test = require('test');
	test.assert(typeof require == 'function', 'require is a function');
	test.assert(typeof exports == 'object', 'exports is an object');
	test.assert(module.id == 'b', 'module.id is b');
});