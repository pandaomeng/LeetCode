/**
 * @param {string[][]} watchedVideos
 * @param {number[][]} friends
 * @param {number} id
 * @param {number} level
 * @return {string[]}
 */
var watchedVideosByFriends = function(watchedVideos, friends, id, level) {
  const usedMap = {};
  let resultMap = {};

  let queue = [{ id, level }];
  while (queue.length !== 0) {
    const currentTarget = queue.shift();
    let { id: currentId, level: currentLevel } = currentTarget;

    // console.log("usedMap :", usedMap);
    if (usedMap[currentId]) continue;
    usedMap[currentId] = true;

    if (currentTarget.level < 0) continue;

    if (currentTarget.level === 0) {
      for (let i = 0; i < watchedVideos[currentId].length; i++) {
        resultMap[watchedVideos[currentId][i]] =
          (resultMap[watchedVideos[currentId][i]] || 0) + 1;
      }
      continue;
    }

    for (let i = 0; i < friends[currentId].length; i++) {
      queue.push({ id: friends[currentId][i], level: currentLevel - 1 });
    }
  }

  return Object.keys(resultMap).sort((a, b) => {
    if (resultMap[a] === resultMap[b]) {
      return a.localeCompare(b);
    }
    return resultMap[a] - resultMap[b];
  });
};

console.log(
  "object",
  watchedVideosByFriends(
    [
      ["koe", "gdntrndv", "ihmxr", "g"],
      ["a", "igfj", "rgi", "syivo"],
      ["pndygs", "gjzdzad", "r", "vyxue", "ql"],
      ["qvlyqka", "ow", "ljrmkzxv"],
      ["um", "graiutx", "otqn", "wfotv"]
    ],
    [
      [3, 2, 1, 4],
      [4, 0, 2, 3],
      [3, 0, 1],
      [2, 0, 4, 1],
      [1, 3, 0]
    ],
    4,
    1
  )
);

console.log(
  "object",
  watchedVideosByFriends(
    [["A", "B"], ["C"], ["B", "C"], ["D"]],
    [
      [1, 2],
      [0, 3],
      [0, 3],
      [1, 2]
    ],
    0,
    1
  )
);
