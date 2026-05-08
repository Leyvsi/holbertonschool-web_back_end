/**
 * Returns the result of the first promise to settle.
 * @param {Promise} chinaDownload - The first promise to track.
 * @param {Promise} USDownload - The second promise to track.
 * @returns {Promise} The value of the winning promise.
 */
export default function loadBalancer(chinaDownload, USDownload) {
  // Promise.race takes an iterable of promises and returns a promise that settles 
  // as soon as one of the promises in the iterable settles.
  return Promise.race([chinaDownload, USDownload]);
}
