var ladder = {
	steps: 3,
	size: '',
	getSize: function() {
		if (this.steps <= 3) {
			this.size = 'small';
		}
		else 
		if (this.steps <= 6) {
			this.size = 'medium';
		}
		else 
			this.size = 'large';
	},
	checkSize: function() {
		this.getSize();
		console.log(this.steps);
		console.log(this.size);
	}
}

ladder.checkSize();
console.log('$$$$');
console.log(ladder['checkSize']);
var largeLadder = new ladder;
largeLadder.checkSize();