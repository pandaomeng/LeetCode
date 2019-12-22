const benchmarkList = [
  {
    value: '股票',
    label: '股票',
    children: [
      {
        label: '沪深300',
        value: '1782',
      },
      {
        label: '中证500',
        value: '2103',
      },
      {
        label: '中证800',
        value: '2107',
      },
    ],
  },
  {
    value: '债券',
    label: '债券',
    children: [
      {
        label: '国债指数',
        value: '23',
      },
      {
        label: '企债指数',
        value: '26',
      },
      {
        label: '中证债券指数',
        value: '10004293',
      },
    ],
  },
  {
    value: '货币',
    label: '货币',
    children: [
      {
        label: '中证货币基金指数',
        value: '30000044',
      },
    ],
  },
  {
    value: '商品',
    label: '商品',
    children: [
      {
        label: '南华商品指数',
        value: '94223',
      },
    ],
  },
];

const flattenBenchmark = (arr) => {
  return arr.reduce((a, c) => {
    if (c.children) {
      return { ...a, ...flattenBenchmark(c.children) };
    }
    return { ...a, [c.value]: c.label };
  }, {});
};

const benchmarkMap = flattenBenchmark(benchmarkList);

console.log('benchmarkMap :', benchmarkMap);
