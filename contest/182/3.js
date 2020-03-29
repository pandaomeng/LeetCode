var UndergroundSystem = function() {
  this.passengers = {};
  this.resMap = {};
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
  this.passengers[id] = [stationName, t].join(',');
  // console.log('this.passengers', this.passengers);
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
  if (this.passengers[id]) {
    const [start, startTime] = this.passengers[id].split(',');
    const key = `${start}-${stationName}`;
    this.resMap[key] = [...(this.resMap[key] || []), t - startTime];
    this.passengers[id] = undefined;
    // console.log('resMap', this.resMap);
  }
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(
  startStation,
  endStation
) {
  const key = `${startStation}-${endStation}`;
  const times = this.resMap[key];
  const sum = times.reduce((a, c) => a + c, 0);
  return sum / times.length;
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
