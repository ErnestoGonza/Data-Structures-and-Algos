/*

Return an array of strings (all of length n) whose values are all the possible
ways of creating strings from the letters 'r', 'p', and 's'.

For example:

rps(0) -> ['']
rps(1) -> ['r', 'p', 's']
rps(2) -> ['rr', 'rp', 'rs', 'pr', 'pp', 'ps', 'sr', 'sp', 'ss']
rps(3) -> [
  'rrr', 'rrp', 'rrs', 'rpr', 'rpp', 'rps', 'rsr', 'rsp', 'rss',
  'prr', 'prp', 'prs', 'ppr', 'ppp', 'pps', 'psr', 'psp', 'pss',
  'srr', 'srp', 'srs', 'spr', 'spp', 'sps', 'ssr', 'ssp', 'sss'
]

The strings must be returned in the order suggested above.

*/

const rps = (n) => {
  if (n === 0) return [''];

  function rps2(num, path = '') {
    if (num === 0) return result.push(path);

    rps2(num - 1, path.concat('r'));
    rps2(num - 1, path.concat('p'));
    rps2(num - 1, path.concat('s'));
  }
  const result = [];
  rps2(n);
  return result;
};

rps(2);
/*

Extension:

Return an array of strings (all of length n) whose values are all the possible
ways of creating strings from the letters in 'chars'. Assume that there will be
no duplicates in 'chars'.

This is equivalent to returning all possible passwords of length n given a
character set 'chars'.

For example:

passwords('ab', 1) -> ['a', 'b']
passwords('abxy', 2) -> [
  'aa', 'ab', 'ax', 'ay',
  'ba', 'bb', 'bx', 'by',
  'xa', 'xb', 'xx', 'xy',
  'ya', 'yb', 'yx', 'yy'
]

The strings must be returned in order reflecting the order of letters in 'chars'

*/

const passwords = (chars, n) => {
  let result = [];
  function backtrack(temp, index) {
    if (index === n) {
      result.push(temp);
      return;
    }
    for (let i = 0; i < chars.length; i++) {
      backtrack(temp + chars[i], index + 1);
    }
  }
  backtrack('', 0);
  return result;
};

module.exports = { rps, passwords };
