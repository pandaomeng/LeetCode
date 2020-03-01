/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function(votes) {
  let teamNum = votes[0].length;
  if (votes.length === 1) {
    return votes[0];
  }
  let res = {};
  let length = votes.length;
  for (let i = 0; i < length; i++) {
    let current = votes[i].split("");

    for (let j = 0; j < current.length; j++) {
      res[current[j]] = res[current[j]] || {};
      res[current[j]][j] = (res[current[j]][j] | 0) + 1;
    }
  }

  const result = votes[0].split("").sort((a, b) => {
    let i = 0;
    for (i = 0; i < teamNum; i++) {
      const numA = res[a][i] | 0;
      const numB = res[b][i] | 0;
      if (numA === numB) {
        continue;
      }
      return numB - numA;
    }
    return a.charCodeAt(0) - b.charCodeAt(0);
  });

  return result.join("");
};

// console.log("rankTeams", rankTeams(["ABC", "ACB", "ABC", "ACB", "ACB"]));
console.log(
  "rankTeams",
  rankTeams([
    "FVSHJIEMNGYPTQOURLWCZKAX",
    "AITFQORCEHPVJMXGKSLNZWUY",
    "OTERVXFZUMHNIYSCQAWGPKJL",
    "VMSERIJYLZNWCPQTOKFUHAXG",
    "VNHOZWKQCEFYPSGLAMXJIUTR",
    "ANPHQIJMXCWOSKTYGULFVERZ",
    "RFYUXJEWCKQOMGATHZVILNSP",
    "SCPYUMQJTVEXKRNLIOWGHAFZ",
    "VIKTSJCEYQGLOMPZWAHFXURN",
    "SVJICLXKHQZTFWNPYRGMEUAO",
    "JRCTHYKIGSXPOZLUQAVNEWFM",
    "NGMSWJITREHFZVQCUKXYAPOL",
    "WUXJOQKGNSYLHEZAFIPMRCVT",
    "PKYQIOLXFCRGHZNAMJVUTWES",
    "FERSGNMJVZXWAYLIKCPUQHTO",
    "HPLRIUQMTSGYJVAXWNOCZEKF",
    "JUVWPTEGCOFYSKXNRMHQALIZ",
    "MWPIAZCNSLEYRTHFKQXUOVGJ",
    "EZXLUNFVCMORSIWKTYHJAQPG",
    "HRQNLTKJFIEGMCSXAZPYOVUW",
    "LOHXVYGWRIJMCPSQENUAKTZF",
    "XKUTWPRGHOAQFLVYMJSNEIZC",
    "WTCRQMVKPHOSLGAXZUEFYNJI"
  ])
);
