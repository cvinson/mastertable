'use strict'

function degreesToPoints(degrees) {
  return (degrees * degrees + degrees) / 2
}

function pointsToDegrees(points) {
  return Math.floor(0.5 * ((Math.sqrt(8 * points + 1)) - 1));
}

module.exports = {
  degreesToPoints: degreesToPoints,
  pointsToDegrees: pointsToDegrees
}
