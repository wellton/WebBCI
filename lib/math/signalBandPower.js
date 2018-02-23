var psd = require('./psd.js');
var psdBandPower = require('./psdBandPower.js');

/**
 * Compute the average power across a given frequency band in a signal.
 * @memberof module:webbci
 * @param {number[]} signal - The signal.
 * @param {number} length - Size of the fourier transform used to compute the PSD.
 * @param {number} sampleRate - The sample rate of the signal.
 * @param {(number[]|string)} - The frequency band provided as an array [frequencyStart, frequencyStop] or a
 * string <code>delta</code> (1-3 Hz), <code>theta</code> (4-7 Hz), <code>alpha</code> (8-12 Hz), <code>beta</code> (13-30 Hz), or <code>gamma</code> (31-50 Hz).
 * While string representations
 * allow for easier prototyping, the use of a specific band passed as an array is recommended, as band string representations may change in
 * future updates.
 * @returns {number} The average power in the frequency band.
 */
function signalBandPower(signal, length, sampleRate, band) {
	var p = psd(signal, length);
	return psdBandPower(p, length, sampleRate, band);
}

module.exports = signalBandPower;