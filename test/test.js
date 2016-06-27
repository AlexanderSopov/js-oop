

var expect = require("chai").expect;

import {Test} from "../oopexp.js";


describe("Test", function() {
	var v1a, v1b, v1c, v2a,v2b,v2c;
	v1a = 0;
	v1b = 1;
	v1c=2;
	v2a=3;
	v2b=4;
	v2c=5;

	var obj1 = new Test(v1a,v1b,v1c);


	var obj2 = new Test(v2a,v2b,v2c);


	describe("Check private static members", function() {
		it("should have private static members named prx, x={a,b,c}", function() {
			
			expect(obj1.pra).to.equal(undefined);
			expect(obj1.prb).to.equal(undefined);
			expect(obj1.prc).to.equal(undefined);

			expect(obj2.pra).to.equal(undefined);
			expect(obj2.prb).to.equal(undefined);
			expect(obj2.prc).to.equal(undefined);
		});

		it("private static members should be reachable by getters", function() {

			/*
			expect(obj1.getPrA()).to.equal(v1a);
			expect(obj1.getPrB()).to.equal(v1b);
			expect(obj1.getPrC()).to.equal(v1c);
			*/

			expect(obj2.getPrA()).to.equal(v2a);
			expect(obj2.getPrB()).to.equal(v2b);
			expect(obj2.getPrC()).to.equal(v2c);

			var obj3 = new Test("a","b","c");


			expect(obj2.getPrA()).to.equal("a");
			expect(obj2.getPrB()).to.equal("b");
			expect(obj2.getPrC()).to.equal("c");

		});
	});


	describe("Check public var", function() {
		it("should have public members named puX, x={A,B,C}", function() {
			expect(obj1.puA).to.equal(v1a);
			expect(obj1.puB).to.equal(v1b);
			expect(obj1.puC).to.equal(v1c);

			expect(obj2.puA).to.equal(v2a);
			expect(obj2.puB).to.equal(v2b);
			expect(obj2.puC).to.equal(v2c);
		});
	});


	describe("Check private members", function() {
		it("reachable private members named _puX, X={A,B,C}", function() {
			
			expect(obj1._puA).to.equal(v1a);
			expect(obj1._puB).to.equal(v1b);
			expect(obj1._puC).to.equal(v1c);

			expect(obj2._puA).to.equal(v2a);
			expect(obj2._puB).to.equal(v2b);
			expect(obj2._puC).to.equal(v2c);


		});

	});



});
