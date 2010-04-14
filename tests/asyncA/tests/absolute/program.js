require.ensure(['test', 'submodule/a', 'b'], function(require) {
	var test = require('test');
	var a = require('submodule/a');
	var b = require('b');
	a.foo(function(bThruA) {
		test.assert(bThruA.foo === b.foo, 'require.ensure works with absolute identifiers');
		test.print('DONE', 'info');	
	});
});