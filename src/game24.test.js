import Game24 from './game24'

it('check 24', ()=>{
	var game24 = new Game24();
	expect(game24.check([1, 2, 3, 4])).toEqual(true);
	expect(game24.check([4, 1, 7, 8])).toEqual(true);
	expect(game24.check([3, 3, 8, 8])).toEqual(true);
	expect(game24.check([1, 2, 1, 2])).toEqual(false);
	expect(game24.check([0, 0, 4, 7])).toEqual(false);
});
