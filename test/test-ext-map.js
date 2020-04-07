const ExtendableMap = require('../extendable-map.js');

const assert = require('assert');


describe('ExtendableMap', ()=>{
	it('constructor exists', ()=>{assert.ok(ExtendableMap)});
	it('instans created', ()=>{
		let map = new ExtendableMap();
		assert.ok(map && map instanceof ExtendableMap);
	});
	
	describe('Map interface', ()=>{
		const name = "text", number = 10, object = {}, array = [], symbol = Symbol();
		let map = new ExtendableMap();
		it('Map is empty', ()=>{
			assert.ok(map && map instanceof ExtendableMap);
			assert.ok(!map.has(name), 'name');
			assert.ok(!map.has(number), 'number');
			assert.ok(!map.has(object), 'object');
			assert.ok(!map.has(array), 'array');
			assert.ok(!map.has(symbol), 'symbol');
		});
		
		let key = name, value = object;
		it('set', ()=>{
			map.set(name, value);
			assert.equal(map.get(name), value);
			assert.ok(map.has(name));
		});
		it('delete', ()=>{
			map.delete(name);
			assert.ok(!map.has(name));
		});
		
	});
	
	describe('Extend map', ()=>{
		let pmap = new ExtendableMap();
		let map = new ExtendableMap(pmap);
		
		let key1 = Symbol(), value1 = {};
		let key2 = Symbol(), value2 = {};
		
		/*it('is empty', ()=>{
			assert.ok(!pmap.has(key1));
			assert.ok(!pmap.has(key2));
			assert.ok(!map.has(key1));
			assert.ok(!map.has(key2));
		});*/
		
		pmap.set(key1, value1);
		it('inherited value get', ()=>{
			assert.equal(map.get(key1), value1);
		});
		it('inherited value has', ()=>{
			assert.ok(map.has(key1));
		});
		it('inherited value get own', ()=>{
			assert.equal(map.get(key1, true), undefined);
		});
		it('inherited value has own', ()=>{
			assert.ok(!map.has(key1, true));
		});
		
		
		
	});
});