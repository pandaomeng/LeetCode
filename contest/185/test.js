let set1 = [1, 2];
let set2 = [3, 4];
let set3 = [5, 6];

loop1: for (var i in set1) {
  loop2: for (var j in set2) {
    loop3: for (var k in set3) {
      break loop2; // breaks out of loop3 and loop2
    }
  }
}
