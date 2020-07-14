class Game24{

	possibleSolves(a, b){
		/*
			Returns a set of possible numbers
		*/
		var res = new Set([a+b, a-b, b-a, a*b])

		if (b !== 0) {
			res.add(b/a);
		}
		if (a !== 0) {
			res.add(a/b);
		}

		return res;
	}

	check_base(inp, target){
		/*
			Base Case: Returns whether you can reach target
		*/
		if (inp.length===0) {
			return target === 0;
		}
		if (inp.length === 1){
			return Math.abs(inp[0]-target)<=1e-6;
		}
	}

	check_recur(inp, target){
		/*
			Recursive Helper Method
		*/
		if (inp.length <= 1) {
			return this.check_base(inp, target);
		}
		else{
			for (var i = 0; i < inp.length; i++) {
				for (var j = i+1; j < inp.length; j++) {
					var res = Array.from(this.possibleSolves(inp[i], inp[j]));
					for (var k = 0; k < res.length; k++) {
						var remNums = [].concat(inp.slice(0, i), 
												inp.slice(i+1, j),
												inp.slice(j+1),
												[res[k]]);
						if (this.check_recur(remNums, target)) {
							return true;
						}
					}
				}
			}
			return false;
		}
	}

	check(inp){
		/*
			Returns whether the input is possible
		*/
		return this.check_recur(inp, 24);
	}

	convert_to_int(strInp){

		var int_arr = []
		for (var i = 0; i < strInp.length; i++) {
			var new_num = parseInt(strInp[i]);
			if(isNaN(new_num)){
				return null;
			}
			else{
				int_arr.push(new_num);
			}
		}

		return int_arr;
	}

	Hello(){
		return "Hello World"
	}
}

export default Game24