"use strict";

// not static???
var self;



//private Static
var pra, prb, prc;


export class Test{

	//var sta1, sta2, sta3;


	constructor(va1, va2, va3){
		self = this;
		
		self.puA = va1;
		self.puB = va2;
		self.puC = va3;


		self._puA = va1;
		self._puB = va2;
		self._puC = va3;



		pra = va1;
		prb = va2;
		prc = va3;

		/*
		sta1 = va1;
		sta2 = va2;
		sta3 = va3;
		*/
	}

	getPrA(){
		return pra;
	}
	getPrB(){
		return prb;
	}
	getPrC(){
		return prc;
	}


}