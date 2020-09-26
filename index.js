/**
 * 配列の合計値を返す。
 * @param {Array} numbers 
 * @returns {Number} 
 */
function add(numbers) {
	return numbers.reduce((result, number) => result + number);
}

/**
 * 配列の中身を全て乗算した値を返します。
 * @param {Array} numbers 
 * @returns {Number}
 */
const multi = (numbers) => numbers.reduce((result, number) => result * number);

module.exports = {
	add,
	multi
}