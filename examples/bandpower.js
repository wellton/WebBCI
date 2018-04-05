var bci = require('../index.js');

// Generate 1 second of sample data
var sampleRate = 512;
var duration = 1;
var amplitudes = [1, 2, 4, 8];
var frequencies = [
	1, // 1 Hz, delta range
	5, // 5 Hz, theta range
	8, // 8 Hz, alpha range
	17 // 17 Hz, beta range
];

var signal = bci.generateSignal(amplitudes, frequencies, sampleRate, duration);

// Compute average power in each frequency band
var fftSize = sampleRate * duration;
console.log(bci.signalBandPower(signal, fftSize, sampleRate, 'delta')); // 85
console.log(bci.signalBandPower(signal, fftSize, sampleRate, 'theta')); // 128
console.log(bci.signalBandPower(signal, fftSize, sampleRate, 'alpha')); // 205
console.log(bci.signalBandPower(signal, fftSize, sampleRate, 'beta'));  // 114