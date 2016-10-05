
var ladderCreator = function(count) {
	this.steps = count;
	this.size = '';
	this.getSize = function() {
		if (this.steps <= 3) {
			this.size = 'small';
		}
		else 
		if (this.steps <= 6) {
			this.size = 'medium';
		}
		else 
			this.size = 'large';
	};
	this.checkSize = function() {
		this.getSize();
		console.log('size for ' + this.steps + ' steps is');
		console.log(this.size);
	}
}

//ladderCreator.checkSize(1);
var largeLadder = new ladderCreator(8);
largeLadder.checkSize();