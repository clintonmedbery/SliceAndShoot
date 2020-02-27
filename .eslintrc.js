let OFF = 0, WARN = 1, ERROR = 2;


module.exports = {
	'env': {
		'browser': true,
		'es6': true
	},
	extends: ['airbnb-base', 'prettier'],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': ['error'],
		'class-methods-use-this': 0,
		'import/prefer-default-export': 0,
		"quotes": [ OFF, "single" ],
	}
};