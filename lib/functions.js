(function (_0x5450b3, _0x13c672) {
    const _0x21c2ae = _0x5450b3();
    while (true) {
      try {
        const _0x5ce122 = -parseInt(_0x3ea1(163, 'CrYg')) / 1 + parseInt(_0x3ea1(447, 'K3#L')) / 2 * (parseInt(_0x3ea1(429, 'EDbm')) / 3) + -parseInt(_0x3ea1(676, 'j9fH')) / 4 + parseInt(_0x3ea1(950, 'xKT0')) / 5 + -parseInt(_0x3ea1(861, '4fLv')) / 6 + -parseInt(_0x3ea1(431, '%2R3')) / 7 + parseInt(_0x3ea1(179, 'K3#L')) / 8;
        if (_0x5ce122 === _0x13c672) {
          break;
        } else {
          _0x21c2ae.push(_0x21c2ae.shift());
        }
      } catch (_0x2d552e) {
        _0x21c2ae.push(_0x21c2ae.shift());
      }
    }
  })(_0x4b65, 151476);
  const axios = require("axios");
  const fs = require('fs');
  const mimes = require("mime-types");
  const {
    fileTypeFromBuffer
  } = require("file-type");
  const getBuffer = async (_0x53bca5, _0x1aacd4) => {
    try {
      if (_0x1aacd4) {
        _0x1aacd4;
      } else {
        ({});
      }
      const _0x2748a2 = {
        DNT: 0x1,
        "Upgrade-Insecure-Request": 0x1
      };
      var _0x1d6b25 = await axios({
        'method': "get",
        'url': _0x53bca5,
        'headers': _0x2748a2,
        ..._0x1aacd4,
        'responseType': "arraybuffer"
      });
      return _0x1d6b25.data;
    } catch (_0x32a1b2) {
      console.log(_0x32a1b2);
    }
  };
  const getGroupAdmins = _0x372fe4 => {
    var _0x7ab2f2 = [];
    for (let _0x4c72ee of _0x372fe4) {
      if (_0x4c72ee.admin !== null) {
        _0x7ab2f2.push(_0x4c72ee.id);
      } else {
        '';
      }
    }
    return _0x7ab2f2;
  };
  const getRandom = _0x4e9ec7 => {
    return '' + Math.floor(Math.random() * 10000) + _0x4e9ec7;
  };
  const clockString = _0x28d645 => {
    let _0x5e7049 = isNaN(_0x28d645) ? '--' : Math.floor(_0x28d645 / 3600000);
    let _0x44ded9 = isNaN(_0x28d645) ? '--' : Math.floor(_0x28d645 / 60000) % 60;
    let _0x4a309f = isNaN(_0x28d645) ? '--' : Math.floor(_0x28d645 / 1000) % 60;
    return [_0x5e7049, _0x44ded9, _0x4a309f].map(_0x59f3d4 => _0x59f3d4.toString().padStart(2, 0)).join(':');
  };
  const h2k = _0x4db996 => {
    var _0x4e4e9d = ['', 'K', 'M', 'B', 'T', 'P', 'E'];
    var _0x3e8797 = Math.log10(Math.abs(_0x4db996)) / 3 | 0;
    if (_0x3e8797 == 0) {
      return _0x4db996;
    }
    var _0x1b3486 = _0x4e4e9d[_0x3e8797];
    var _0x543e2f = Math.pow(10, _0x3e8797 * 3);
    var _0x11c448 = _0x4db996 / _0x543e2f;
    var _0x2bc902 = _0x11c448.toFixed(1);
    if (/\.0$/.test(_0x2bc902)) {
      _0x2bc902 = _0x2bc902.substr(0, _0x2bc902.length - 2);
    }
    return _0x2bc902 + _0x1b3486;
  };
  const isUrl = _0x948b92 => {
    return _0x948b92.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'));
  };
  const Json = _0x1f8de5 => {
    return JSON.stringify(_0x1f8de5, null, 2);
  };
  const runtime = _0x3be608 => {
    _0x3be608 = Number(_0x3be608);
    var _0x3d7f63 = Math.floor(_0x3be608 / 86400);
    var _0x2ea6e0 = Math.floor(_0x3be608 % 86400 / 3600);
    var _0x7d00d4 = Math.floor(_0x3be608 % 3600 / 60);
    var _0x4d686b = Math.floor(_0x3be608 % 60);
    var _0x30d591 = _0x3d7f63 > 0 ? _0x3d7f63 + (_0x3d7f63 == 1 ? " day, " : " days, ") : '';
    var _0x21d180 = _0x2ea6e0 > 0 ? _0x2ea6e0 + (_0x2ea6e0 == 1 ? " hour, " : " hours, ") : '';
    var _0xa5573e = _0x7d00d4 > 0 ? _0x7d00d4 + (_0x7d00d4 == 1 ? " minute, " : " minutes, ") : '';
    var _0x7aa50c = _0x4d686b > 0 ? _0x4d686b + (_0x4d686b == 1 ? " second" : " seconds") : '';
    return _0x30d591 + _0x21d180 + _0xa5573e + _0x7aa50c;
  };
  const sleep = async _0x1f6da2 => {
    return new Promise(_0x817901 => setTimeout(_0x817901, _0x1f6da2));
  };
  const fetchJson = async (_0x203836, _0x3aa358) => {
    try {
      if (_0x3aa358) {
        _0x3aa358;
      } else {
        ({});
      }
      const _0x3b9571 = await axios({
        'method': "GET",
        'url': _0x203836,
        'headers': {
          'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"
        },
        ..._0x3aa358
      });
      return _0x3b9571.data;
    } catch (_0x282ae9) {
      return _0x282ae9;
    }
  };
  const jsonformat = _0x4d54c0 => {
    return JSON.stringify(_0x4d54c0, null, 2);
  };
  function _0x5c51e1(_0xd1701f, _0x59b046, _0x17d8a2, _0x3fb6cc, _0xfd81b9) {
    return _0x3ea1(_0xfd81b9 + 0x65, _0x17d8a2);
  }
  function _0x4b65() {
    const _0x3f2202 = ['W5pdJmkDW5K', 'malcS3xdVW', 'WRHLoL4', 'uCoxyCkAW4O', 'W7bBWPPLW5i', 'rZOOl10', 'WQtdI8okWQeB', 'WQRdNCozW7vN', 'W7RcK1e3ya', 'W6xdGKP2WR4', 'W7lcQanf', 'BmkbW47dImo6', 'W5nzbIy', 'W7b9p8oexG', 'W63cVWTvWPG', 'W4RcGtFcQ8kV', 'hqhcRh7dTW', 'uqZcIL3cRG', 'W78UWQhcOea', 'W4BdPSkUWRTW', 'fNpcOCkixG', 'W4FdSSkZWPDy', 'W4vJfN1Z', 'nSkRlIO', 'W7xdHK5N', 'WOu+vI8V', 'W7pdV8oxW6KJ', 'cY3cG0RdLW', 'WQVdH8oyW6jz', 'WPFcJLa', 'evVdVJud', 'W5ddJmkiW4H3', 'k0ldGbaH', 'WR0QFmobiW', 'WPHNW7bKW4K', 'WQ7dLSocW71P', 'ueu2BG0', 'WQDvWQSTla', 'z8kjjCk1kG', 'W7L4laBcIa', 'kCo9DxvmW4JdUvNcLsdcQ8oisa', 'W5WpeLa', 'pd3cPKpcIG', 'W67cRfCN', 'W5NdTmoOW7Sw', 'W5/cPCkHW6TR', 'xL7cMZ/cNq', 'WQtdGCodW7DF', 'zSkDW6ldNCo2', 'W7FdLKz8WR0', 'W6BcOCogb8kG', 'W5Wteue', 'W78JWQxcQN0', 'WQLrWO8QaG', 'WQ/cKWS', 'yCkmbduM', 'BSkmW5RdM8om', 'Dmo/tmkrW4K', 'EHlcSCkuEG', 'WOddNSkFW59X', 'W5DmWP1JW68', 'WPe+ta', 'AmksbSkzbq', 'jfldHXCV', 'WR9AdgpdNa', 'umocW5a', 'WOf9pSo/eq', 'WRWYka', 'WRnLnW', 'WO3dUSk/WOe', 'Dgevwqa', 'CSkaoIpdSW', 'fxlcOmkr', 'WQ7cKWSuWOO', 'WOuRvci+', 'WRi0qqmV', 'yXhcSCkntq', 'chpcGSkzra', 'WPzxgwxdUa', 'W5pcINqssa', 'DJS2lSoN', 'W71gWO8', 'WOn7WP4YaW', 'W7rgWRLwW64', 'WPu9BSoYdG', 'W43dNq3cUSk3', 'ESogF8k3W6u', 'W4xcLSotdSkj', 'WRbYo8oMWQy', 'W7DSnCozFq', 'W7vnWPW', 'W4nGcJa', 'WO5rnSoP', 'WOCLxxVdP8kiW7XZymkdxa', 'l17dMafJ', 'hSoLFXSc', 'WQbAWOy5hG', 'WOf3j2ZdOW', 'q8oyn0Hc', 'WPLCm8opoq', 'WOPPrhO2', 'WOZcJ8obW7CY', 'z8obqmksW7y', 'W71nWOTUW5K', 'WQVcGL86kq', 'dXFcVq', 'W4bxwq', 'WQTiW7n5W6m', 'WRKMEmoXoa', 'W5nTlmoXEq', 'fCk1W4G9WOG', 'W5NdGCofW6WY', 'BCk6iJy', 'k8o/Dh1mW43cMg7cUIFcRmoL', 'wZ7cHmk0yW', 'addcOvpcIq', 'W5GfvSoP', 'WP/cUdaFWO8', 'WR5SoSopeG', 'EmkChtNdOG', 'nSk9W6GZWPm', 'oSktWPNcJmot', 'WP0+qq', 'z8kjjCk1', 'W5m8WPlcN1O', 'qZSW', 'iJVcOKJdMa', 'WQBdKLldMSoW', 'WQlcLXeuWRq', 'f8kVW5qPWQC', 'WQRdKColW7zo', 'dSoVFqOe', 'BCoHymkDW4q', 'WQbPlem', 'W5dcHHdcSmkT', 'W4DXn8orFq', 'WQFcOGGMWQ4', 'mmkEzmoHW7m', 'fMxcQa', 'tIebfY0', 'Bmo7uCkCW7y', 'W4BdRCkPWR95', 'W6NcRMyLuW', 'zGlcRCktFG', 'WRRdGK7dNCo0', 'WPhdSfddICoB', 'WOLCnmoYmG', 'W5VdL8o+', 'q8oiW6iaW6e', 'tZWWmXu', 'C23dKM8u', 'rLZcJW', 'WQbHmSo2WQK', 'WQGAASoyeG', 'cxpcOSktqW', 'W4f/iSoc', 'W5RdIuTWWQm', 'zmo1WOP8pW', 'd8kOW4GR', 'WOrmmCoCWRK', 'v2ytyq', 'mCkRBSoJW5G', 'W4j1hcJcHW', 'W6tdO8kU', 'FCkbhcddIG', 'W7BcIYTGWO8', 'WRZcMtKEWPO', 'W5ddUmkUWR0', 'Ar4teCoc', 'W4n9m8oYzG', 'nfZcH8ktBW', 'fmklWQpcK8oA', 'WP01qr0h', 'tCoSWQ9zfW', 'W4JdSmkK', 'gCk0W50GWOW', 'W7O8BCoZoq', 'gmoKDrWW', 'W7hdI1TuWRW', 'c8kUW4iTWQC', 'mcfQnwa', 't3qAAc0', 'tmkummkXcW', 'WOPZW69KW4u', 'WRCQE8oJnW', 'uSosn111', 'qteIna', 'svdcLYBcTW', 'W7RdPmo3W7iX', 'F8ksbYW', 'WObqoSo4EW', 'y8kbW4/dL8oQ', 'ESkJiICl', 'WRldHeK', 'W6RcILiSzG', 'WPP3W7f0W4K', 'WRPQWP81oW', 'W6tdHCkIWQP3W7vaW5xcVCoeW4NcJNe', 'D3FdP24I', 'FCkhWO/cICkS', 'W5RdPCkjWQjy', 'F8knW4ZdNCoY', 'vSkzfdiL', 'WRRcKXiyWPy', 'WQ9EWO4waW', 'W4ddVCk8WQ4', 'ymokW5u7W4W', 'W6bTWQ12W7m', 'CSoGw8kmW5K', 'W7FdIuO', 'gLNcVmkWzq', 'hmkZFmo/W5K', 'ACkHaCkplq', 'WRZcNWSBWOC', 'W6vwtmkEoW', 'W6jNobBcTq', 'W74QWRNdQ3O', 'CCk6adyq', 'WQW4sCoKmW', 'hqFcPKFcSG', 'WQFdUSkEWORcUa', 'DNFdU3ij', 'WPhdGmkcWP3cRW', 'WQhcHtyzWPy', 'WRfZmeZdVq', 'WRTWWR0tkW', 'WPJdTCoNW5TA', 'q3ydzHW', 'Dmo+WRLSfa', 'WRSHECofgW', 'iSkvWPhcPmok', 'WRXXag/dKG', 'o8kBhdJdTq', 'ASoHxa', 'W5NdNmoKW7uH', 'vwabFre', 'oSkuEmoRW6y', 'v8k5bmkckG', 'WQBcGCoIW7OR', 'WQRdU8kxWRBcPG', 'pvpcVCk7wq', 'pGBcTg/dSq', 'WRVdJCodW7Dh', 'a8kOzSowW4m', 'W77cRbza', 'iGnKjuK', 'EKpcHMZdOa', 'WONdLCoFW5vr', 'e8kOW6ORWQ0', 'WRpdGL7dGCoX', 'yCoAbfvc', 'CLaQCqW', 'cmk0W5G3WQy', 'WR3dVLxdM8o/', 'W7xcNCo/W6y3', 'W7jOnCoGDW', 'WQ/dK3tdGmoZ', 'C8kAjmk8ca', 'W4pdVCkWW4Xu', 'Bmk+pJyX', 'W4L9nmodCG', 'dCo+wqOG', 'ESkDW4xdJG', 'BmkpW5ddImo2', 'WPaFFWqH', 'BZaklXa', 'WObCjmoUnW', 'WQL1WOe6', 'WRnAo0ldKa', 'W7r7BmoUW7u', 'WQzGW7LYW7q', 'W4ddUSkZWQ5Y', 'zCkEz8krcq', 'W7VcIKKlW5C', 'W5HQBCk9gW', 'WQ4QE8oK', 'WPpdOfBdO8o0', 'FSk7kcKY', 'us0XkrO', 'uSoCn1bs', 'WQX0mW', 'WPldHfddOmo1WQaYu8kytCok', 'yrO/i8oS', 'dmo/FHSc', 'WRRdK0tdNSoW', 'WOGhceRcVG', 'WRhdVSoNW6DS', 'FSkHfZ49', 'W7zXzCklWRu', 'pmk0W58UWQm', 'ECk5nYer', 'awpcJSk3zq', 'W4eHWO7cGeq', 'W6hcHcBcL8k2', 'W67cQbenW50', 'W49xuW', 'W4bas8kHka', 'd8kxWPbqWQVdOwaGBg7dPrC', 'b8kCDCoUW5a', 'q8oum3Dm', 't8o8WQ5jfW', 'jSktWPVcQmom', 'W4LbACkgia', 'tJGMndW', 'W7nviCoPuq', 'W4JcGarKWOW', 'jCkCzCoR', 'WQldI8oeW74', 'dmkYW4GUWO0', 'FComW4GKW5G', 'zdXxBZq', 'gCohDbWu', 'W7/cHWTf', 'f3pcMmkzvq', 'Cmk7iHxdOq', 'EXlcRmkaBW', 'B8kpz8k0aG', 'WOb8W7G', 'W4LtxSk+WOG', 'WRJcLW0dWOS', 'WRVdKmomW6jF', 'rSoeW6meW54', 'cCoVDsSo', 'W7jyF8kNbq', 'WRdcGJyzWOq', 'WRhdLvldGW', 'a8kDW5WxWRO', 'WP1RW691', 'r8onFCkGW6O', 'W63dV8k0W5P1', 'teVcGG', 'WQxdHCoD', 'maZcQwJdTq', 'WOjymW', 'irhcG3lcHW', 'ACkIjCkOlq', 'Amk7kcak', 'rmoLW40rW7i', 'jmoWqaSq', 'vMypFr0', 'W7q8WQ0', 'Ebuqj8oF', 'EImGeYm', 'WQfvWQmyla', 'wMVcRclcPq', 'WRXLiKNdVW', 'WRJcKmoJW6aK', 'WOLapCoTda', 'WRfYj8o6', 'wvZdMKS', 'w8oCuSkxW4S', 'xrZcRSkQwG', 'Cv4rxJ0', 'CrqijH4', 'zdSXgJe', 'DbJcRmktFG', 'vSoym3vo', 'lJ7cHK7cKG', 'W44gWOZcGMy', 'wudcHG7cOq', 'W4VcLWpcVCkM', 'umoFna', 'WRaEsGWK', 'WOTlomoWgW', 'WO4QCmoK', 'WRjqpCoMWQS', 'WQVdImocW7na', 'WPaPvYyh', 'q8oXW4GEW5e', 'WPtcM8kWW7y3', 'W6/cLqBcUSkU', 'WPFdKComW4aR', 'qConu8k7W48', 'WRHwWPWYdW', 'W4NcGcLhWPC', 'WOxdGCoEW6nk', 'WRJcNmo9W7y', 'WPO+vIW+', 'W4znEW', 'k8kVWOdcRSoj', 'CCk6bsuw', 'WPVdLSkew8o3W7ZcVcC2W6ddK1uB', 'kfRdKq', 'wYSCoW', 'WPZdSSkVWPhcHq', 'wmouW6izW60', 'ksFcHKJcUq', 'W4uptH3dVG', 'smoPehnD', 'DSkSpSkwcG', 'q8ocWOHj', 'tSk5nrqB', 'omkbW4eWWO0', 'WOfCoCo6iG', 'DapcJ8kcAa', 'W5hdUSkVW7P4', 'ANhdSW', 'qXxcHSkQxa', 'W6NcQaXfWPG', 'FbegeCod', 'AXKsha', 'x2CPzX4', 'WOlcVmowW5qS', 'asNcVLpdMG', 'fqRcRxtdHG', 'bCo+waeb', 'rCoynfa', 'W4BdN8k0WR4', 'W5DFwCk6', 'WPTbcg7dLG', 'W4BdNv1WWOK', 's8kCkHy7', 'AmohECknW6S', 'WQPtWOCXga', 'B8olW644W5q', 'WPJdKCkYWRBcLa', 'jvJdKW', 'W5pdMSoMW60', 'W5pdOmkUWRi', 'DConWQnChq', 'v8orkeTj', 'W55wC8kAgW', 'sKpdKhCT', 'CfOMtHe', 'W6hdHwD3WQe', 'cHpcRbq', 'W4XoC8kBia', 'W65RkmoE', 'W7XHdrRcOG', 'WRhdI1ldGCoN', 'W7ldRSk1W6Pl', 'ymo6wSkmW5K', 'oSk0WRBcJmoZ', 'W7NcOGXvWPG', 'aqtcKKVdTG', 'rYO6nGy', 'emo5DG', 'W5pdUSkQ', 'W7W3WQpcTNS', 'W57dHSkQW60T', 'W6/dQ2XIWPC', 'W6tdJmkIWQP8W7ifW6NcNCo2W6ZcJW', 'WPi0tYuM', 'W4f2imoeEW', 'WRjGoCogWOW', 'f8ouW4ekW7y', 'q1RdNv46', 'W4NdNmoK', 'W4Lbtq', 'WQZcHCoEW6mQ', 'nCkdECo4W78', 'W7W3WRRcQN0', 'WPpdKKRcJSkQ', 'W4hdN8kiW51N', 'W7namCoJxW', 'W47dP0L8WRK', 'WRHAWPSQ', 'gglcNCkzrW', 'WRSgBa', 'WO/dLCkIWQpcIq', 'hcBcVNxcHa', 'WQVcKuhcN8oP', 'BXWjmb4', 'W4mAWOdcJKO', 'zXBcPSk0BW', 'zbzInNy', 'W7pdPez3', 'WRVdJK7dMSoh', 'iSkAWPxcS8oO', 'W4mNcZD6', 'uSoFW5a', 'W77cOHvpWPe', 'WRVdGCodW7ro', 'WOHxmmoPpG', 'vmogW5qDW7a', 'W45NjIZcTW', 'WPNdHCk5WPhcHq', 'kJJcJelcLa', 'esRcH2BcTa', 'jsBcKfhcHq', 'W4j+iSoc', 'osFcHLxcHq', 'W6NcVq5iWOK', 'ySktk8kS', 'zCompK1Z', 'v0ZcHWpcKa', 'WQlcHrazWOq', 'WRNdKCocW6ro', 'WOVdMmk3WPe', 'W4ldU8kSWO9A', 'pCk8C8oKW7y', 'WQxcKXedWOS', 'FSkBW4/dImo6', 'W6Pifmogsq', 'zSkDW6ldICo5', 'WPHAd8ouoq', 'w8oxmLvl', 'W6ddVmk7WPLf', 'WOZdO8ogW51k', 'i8o4xCkwW4K', 'W4jQkmoDxG', 'WQv1lfNdVW', 'W5ldJCk4WO5F', 'W4RdOCk1', 'W4rYasBcVG', 'WQhcKmoOW6C', 'kSoVCYic', 'WRVcKCo/W6q2', 'W5DlpSoECa', 'WQXijCoyla', 'WRW9z8o9gq', 'g8o4FGiO', 'W4ddVmkTWRT5', 'jetdKW', 'WOnDpmoVgW', 'fSoVAa', 'W73dUMTWWQu', 'W5hcLW/cTSk3', 'bmkPWPJcJmoq', 'W6mZpSoSzW', 'WRTnomoeeW', 'WQH0eSo7WQ8', 'W5jwvCkAna', 'WPPQWOOnlG', 'WRjSleldQa', 'WQbVbutdOG', 'W6NcQafuWO8', 'lCkAWOFcTmoF', 'WRJcHSo3', 'W5Dgs8kVWPq', 'F8ouWPbDbq', 'WO3cNCkeWOdcKq', 'p8kcuCo+W70', 'W4RdU8k6', 'WQBcKmo+W7CG', 'WQj7W50', 'CJab', 'W67cQXflWQS', 'reRcTaRcUW', 'WOuVsIiK', 'W7JcImo+dSkQ', 'WOldKfNdR8oS', 'W4jWf8okuq', 'W67cVcdcJCkG', 'W57dM0zBWRq', 'xmoynfDA', 'bxpdRt4P', 'gW/cVHZcL2dcTJK', 'WRXqWOyTdW', 'WRRdLGX6n17cSgnDWPlcSIHL', 'WPVdL8k7WRhcRW', 'WOejyGi9', 'WQPIlq', 'xmocW50', 'f8kazmojW6G', 'W5DhsmkUWPq', 'W4NcJCoyhSkH', 'WPJcU8osW4CM', 'brNcGNldMW', 'ptFcMLu', 'FmoTW4azW6W', 'WP8MsG', 'F2hdP2C9', 'WRfYmuldQa', 'WOjeW49uW6C', 'bmksWPDzW6ZcPhGnwLW', 'qru3d8oW', 'kcbWnLy', 'ksdcNq', 'WPa3vYq4', 'lsdcM07cKG', 'W4vFtW', 'ySknja', 'WQ1DWPi5oq', 'tLdcHGRcVa', 'W5/dNmoIW70E', 'WQS6z8oKmW', 'tXJcLmk+wa', 'WQK7ACoIiG', 'W4Hxrmk6WPq', 'WOpdJSkZW6vS', 'qCkGbq', 'dGfSiq', 'W4lcGHlcTCkQ', 'C8oNk010', 'WQVcLKhcNmoP', 'sxtdM3a5', 'W7aJb0VcVa', 'cMpcOmkiuG', 'W6LlWPr1W5i', 'AhFcUINcTW', 'Fmk5W4NdImo3', 'W4b3mmoEFW', 'W43dJmkk', 'WQ3dKmkaW6nF', 'W5DBrCkZ', 'iaBcQxJdNq', 'W5SAdu3cVW', 'DSkYFSo+W70', 'WRL0oL3dVW', 'zCo5w8kxW44', 'ttGN', 'WOBdK1JdNSoI', 'WPewuLJdUW', 'W5SpduhcQa', 'WObniSoEeG', 'WQtcGmo/W6CG', 'jfldMHaN', 'f8k0WOhcLmoM', 'W7JcI1CvtW', 'WQ0gBa', 'wCoqW5aOW7m', 'W45Dq8kZ', 'W7ZdG21aWQm', 'W7pdLGDbW5y', 'WQ7dHCogW7vK', 'hqvmovC', 'k8kAWO3cTa', 'vCoEW5amW5u', 'CSkHjt4W', 'W44eWR/cLLC', 'zCkVpSkYlq', 'W7VdI0fNWQC', 'W47cImo0bmkb', 'W4xdP8kwW710', 'W5jBxCkpWQu', 'WQjyWPW2', 'emoVyHWg', 'WRlcMtCvWOS', 'W6T+k8o0EG', 'W67cOIriWOu', 'W6xdVmkXWR8', 'AmoEWQDHaq', 'WRVdS8oeW6rd', 'WQvMW65dW4u', 'WR1RjG3dNq', 'lCklWO3cT8oB', 'WPvKDComja', 'W6lcLxKXAG', 'WRjIjW', 'eeFcHCkVrq', 'W70Vdu/cRG', 'WQ4Gw8oKja', 'uvVdT0eU', 'W4PgFSk4WPG', 'l8klWPhcO8oX', 'WONdKSkL', 'WQ3cPrOBWOC', 'W6pcLuZcRmkW', 'WPm5FaKB', 'hSoJyq4j', 'WRBcGmo8W4CD', 'WQbLjW', 'tJW6mW', 'W410iSoJAG', 'ySkujmkUaG', 'W7ZcINSTFa', 'WOXjj8o4oa', 'WRLQcgVdNa', 'WQxcHrG', 'WOHupSoP', 'bc3cIhtdVq', 'W4VdImkd', 'W519tSknWPm', 'WQXZlCoIWQy', 'W7VcH0W3Ba', 'CCoMvCkmW5u', 'ECkvimkrnG', 'iqRcS0/dPW', 'ELpcOW7cUG', 'W7bqBSkqWQC', 'WR9rcx7dQa', 'W5vby8kzWO8', 'W7xcUbjGWPK', 'W5TGca', 'W63cLfeUsa', 'W4hcIXBcVmkp', 'qSkgW4tdQCor', 'W6raD8kwnq', 'WRHSgmo7ba', 'WQ1OWRS2ca', 'vCorl3v3', 'WRrlWQeWda', 'i8kxWPxcSW', 'W4bXjSo9DG', 'WRVcHHaeWOS', 'rduSlWy', 'WORcGXKrWOC', 'WQfAWPSTcW', 'WQ/dGCozW4jk', 'W7G9WRJcPhy', 'WOvZWROzbq', 'W5PMWPXcW4q', 'tKCTwYG', 'W69wm8oLvW', 'C8kSpG', 'g8k5W54', 'nCkjW4CWWRm', 'dgLTDei', 'WORdHCkWWOpcHq', 'WQfmWO8', 'iZFcKa', 'W6xdJ0H2', 'W4tcO3GmrG', 'W5hdMmkvW4H7', 'o37dIq', 'W47dJ8kZWP9I', 'emkPWQxcSmoz', 'irBcQwJdUq', 'FmkAftq', 'WQvsnmoUgW', 'C2FdP3i', 'W69WlCoiyG', 'ovBdHHaN', 'Fmo+W65yaq', 'o8kCCSoKW70', 'jmkey8ozW70', 'BXGveq', 'W5ddSmkZWR5A', 'rNet', 'AvRdNqO7', 'WQGWpXJdPG', 'W55ca8ocwq', 'C8kNpHiY', 'W7GRWQFcRge', 'ibDGige', 'WQ8ft8o8oG', 'W4FcKCor', 'BXtcSCkgsG', 'WPi+wYqU', 'W55hzmka', 'W4j8ksVcQq', 'W6NcUqnpWOC', 'rSosW4SDW7W', 'W7DvmSo6Aq', 'emoGwIKH', 'wvZcKI/cUW', 'qhOgCa', 'WO45x8oelG', 'WPramConpq', 'W5lcO8omgCkj', 'bbpcTKxdNW', 'W57cJCoLhSk2', 'W4/cGmoYkmkv', 'W5dcQCo0iCkj', 'omkqWRFcJSok', 'qCkXpJ7dRq', 'W6SGWRJdPwa', 'W5hcTYboWRG', 'Bmkilq', 'CmoLwmkrW4G', 'WRD3l8oSeW', 'fmk/W54', 'WPtdNfhdRW', 'mSkDFSoDW54', 'W5vhrCkPWOu', 'oaBcVG', 'W5rQgYFcNq', 'W69nFCkvpq', 'u8oem0f3', 'WQpcKWye', 'W5NcKSoAa8kW', 'tLhcLX8', 'm8klWOBcRSoq', 'W5OwWP/cSv8', 'ymoQW4iWW5S', 'W5pcVqVcGCko', 'uCoTWRLDfW', 'zb9Qixa', 'W4JdLmk3WPZdJa', 'WOrdaKhdOa', 'W61lD8kLba', 'W4/cIuClya', 'l8kEWPdcISoB', 'dSkcW6KEWRy', 'WOGcdLhcUq', 'eslcJvxdIq', 'WRZdPN7dL8oD', 'WRhcPSo0W6e0', 'F1Xu', 'W73cPary', 'ltZcJvlcTW', 'W77cQGXSWRi', 'W44gdKVcUq', 'W5ldRmkSWP1r', 'W6/cH0OI', 'W6iZomoSzq', 'W6XsgGZcGq', 'tY4gbc4', 'W4XMnWVcNa', 'zwFdTxi6', 'nqDSo2a', 'rcSSltS', 'W57cH8ofhG', 'jK7dSmoEiSoTW4dcKJieW6tcOW', 'W55UWQXSWPG', 'tmo+D8k8W6u', 'WPJdQCkhWQZcSq', 'ru3cGdhcQW', 'k1JdKb0', 'WObhjghdQq', 'rLWtrsO', 'W7xdNCkDW45/', 'dCoRyXSo', 'W75rWOLSW5y', 'W4hdICkxW5vW', 'xKZcLbJcPG', 'WOn+WQmDjG', 'WQDRo8o9WRe', 'WOP9W69PW6i', 'kSoexGCk', 'WQnob2RdRG', 'WPH1egZdOW', 'W5ldL8oMW60c', 'WRJcLmoKW7aT', 'WQjVnCoM', 'uSoKjhbv', 'zSkEpG', 'xmkAmq', 'duRcKWJcVq', 'WP1yi8o1', 'W5ldOmkYWQ5Y', 'W6NcVGngWPG', 'B2FdTwij', 'Acmqf8oB', 'W4vNdJBcGG', 'W4ddHCkxWQPD', 'iHBcQgJdTq', 'W6tcGmoDcmkJ', 'WQFdHK/dMSo8', 'EW/cGmkWqG', 'W5hcTa7cJCk7', 'f8onFYOp', 'WQZcPSoBW5WC', 'yxddU2SH', 'W6CbiMdcKG', 'uCkXgt7dJa', 'WO44sYOB', 'WQhcHtSsWOe', 'W4VcHSoBa8kQ', 'WPvIlmoM', 'W4tdImkzW5n6', 'WPXmomoPmW', 'W4xdG8kDW4H2', 'WO9YWRGUhq', 'WRG2Fmo1gG', 'vhyoBr0', 'ASkEmW', 'yMddKeq9', 'mbDWyYu', 'DCkhxINdRG', 'W5TNfJlcTa', 'iHTVkIG', 'W5xcLc7cKSkh', 'AL9mkrq', 'W6ZcVYLoWPW', 'eSk1WO3cImo0', 'WPuYscOK', 'WQ7cKW0', 'W4WvWQ7cGxW', 'WR8RmG', 'CXlcRSkcBW', 'WRldLe7dJ8oY', 'W7vCnSoHvW', 'W4DWjSoe', 'W5xdLCoIW6S', 'WQtdMmkuWP3cOW', 'WOfkWP0Kcq', 'W5bxuSkP', 'W6FcIq3cLCk1', 'W44ydKNcHG', 'EbtcJ8kFtG', 'W4BcNaxcRCkR', 'd8kUW64Era', 'xCknW4JdMCoM', 'WPZdKSoFW7Ha', 'W7hdLSksWOXc', 'W6ToWPDGW44', 'd3NcICkvtW', 'W4yoeG', 'W6JcIu46', 'shpcNW8', 'W6TBWPvLW6m', 'W7eQWQVcOwO', 'nCkrW6u2WPO', 'WP13W6DK', 'jmkAWPJcOSok', 'W7C6WPdcGKu', 'W6j3nCohCG', 'WQZdI8oAW75h', 'WQVdJCoDW7ff', 'WRn7W50', 'WQNcKbKtWOG', 'W67cS2Sfra', 'CbqLbqu', 'CmkDcHVdIG', 'W45XEmkgiW', 'W5JcN3imCW', 'FSoenvjm', 'W7pcVIvtWPi', 'WPZcM8o2W7W', 'F8omW6y4W5G', 'WRLPlv4', 'W7JcHtPhWQS', 'W5TxC8kanW', 'WQVdI8odW6zo', 'W7TxWOTGW5K', 'qSoHu8kkW5S', 'W53cKLeAqa', 'W47cHHVcQCkM', 'WR3cOIC+WOe', 'yJ7cRmkiFG', 'v3lcTcdcNW', 'zCoejCk8W6CWW5tdQHRcPW', 'fhJcQSkyFq', 'W4SKgxpcNW', 'W63cG0OGBq', 'WOVdN8k4WPhcHq', 'W5ddPCkXWRTU', 'DrSnktK', 'W5pdPgPIWRO', 'WP0svXWn', 'qSkVW6tdJCoE', 'tSo9W64EW54', 'W6FdImk4W4Xh', 'tmoRWQ9agW', 'CSkEeIe', 'W7dcRmoog8kb', 'W57cH8oohG', 'EGmWgrO', 'W5pdNCkwW5vQ', 'W5ldI8oZW7Wy', 'W4ZdJmovWOKW', 'W5fqWP1U', 'w3lcRSkfra', 'W5ldImkBW5e', 'W5Gle1dcOG', 'WPhdIe/dMCo0', 'WQ3dGmkx', 'Btyce8oB', 'wCoaW70dW4a', 'WPC1sr4h', 'vmoiW4OFW7W', 'zmoWqmklW5u', 'WQtdGLhdI8o2', 'BSkbhW', 'W6JcJ04IAW', 'WObkma', 'qmkdcdaZ', 'W4upd1dcOG', 'W67cMmoao8k1', 'tXVcImk2vG', 'iLldJrC', 'vqOLaCoD', 'W6JdJmocW6vz', 'vtBcH8os', 'WOzGW7jXW5G', 'DhhdTwej', 'vSkAmq', 'WRTDemoGWOK', 'W5rYhcFdPW', 'WONdISknW7vz', 'WRXEWPOQaW', 'iSkuBSo4', 'WPddOCoMW781', 'AHWBcSoy', 'ySkpW5tdN8o3', 'W5RcGIZcQCkS', 'iWZcSa', 'WRLqfq', 'jmkuD8oOW5q', 'WQK8ACo3mW', 'petdKry', 'kZ3cH1xcHq', 'CmkwcG', 'FMtcOvBcPqddGCky', 'A8kgacxdIq', 'lCofAZ0H', 'DSoZuSkDW44', 'W7VdGeXoW5hdNhfKcSoeWQ7cOW', 'tYOK', 'WRKGEmoPga', 'FvZcSbhcMa', 'W73cTWzJWRS', 'WP9Cj8oXnW', 'iMFdGa05', 'W49wldpcIa', 'W6G6WQxcSwO', 'rComWQjigW', 'tSkPfWNdTa', 'o1JdGqOQ', 'W4aWnKxcVW', 'WOddGL/dO8oW', 'ASkghdNdOG', 'W4DMadBcTa', 'f3NcRSkyEG', 'lKZcQ8k4ra', 'WPHxaSovaW', 'rCo6rSkpW50', 'W4xdNSkjW515', 'WQFcLXS6WOC', 'W5zCWPbJW5a', 'WR/dMCk4W5pdLa', 'WQDUomo3', 'WRpdLGP6n1VdUeDmWQ/cMru', 'W5lcHW3cRCkM', 'qvZcJXG', 'lHH2pNu', 'W43dTSk4WPDY', 'W5Xgy8kZWOy', 'W50ekMFcGq', 'wSo8WRi', 'WR0Ytgr/', 'ochcJfpcLa', 'lfpdNqu', 'WRO8xcGN', 'W6lcUsTpWPS', 'cCkOW4W+WQC', 'WOnWW5j6W5S', 'BNhdK3qd', 'W7BcOGuqW40', 'xZyafmoV', 'yw7dU2KE', 'W57dGCovW7WN', 't8kKnHyQ', 'o8kcCq', 'oqlcPgpcKa', 'lh3dNqa'];
    _0x4b65 = function () {
      return _0x3f2202;
    };
    return _0x4b65();
  }
  async function getsize(_0x58ee39) {
    function _0x3b46d2(_0xcbfe10) {
      let _0x39f05d = ['B', 'KB', 'MB', 'GB', 'TB'];
      let _0x221f33 = _0xcbfe10;
      let _0x185278;
      for (_0x185278 = 0; _0x221f33 >= 1024 && _0x185278 < 4; _0x185278++) {
        _0x221f33 /= 1024;
      }
      return _0x221f33.toFixed(2) + " " + _0x39f05d[_0x185278];
    }
    return _0x3b46d2((await axios.head(_0x58ee39)).headers["content-length"]);
  }
  function _0x1eabc6(_0x5daffd, _0x5627ff, _0x2724fe, _0x5cf428, _0x4db589) {
    return _0x3ea1(_0x5daffd + 0x214, _0x5cf428);
  }
  function formatBytes(_0xa85f0f) {
    let _0xfa0f7a = ['B', 'KB', 'MB', 'GB', 'TB'];
    let _0x82ac3b = _0xa85f0f;
    let _0x19445e;
    for (_0x19445e = 0; _0x82ac3b >= 1024 && _0x19445e < 4; _0x19445e++) {
      _0x82ac3b /= 1024;
    }
    return _0x82ac3b.toFixed(2) + " " + _0xfa0f7a[_0x19445e];
  }
  async function formatSize(_0x11df59, _0x744e88 = true, _0x240430 = 2) {
    const _0x1fe37e = _0x744e88 ? 1000 : 1024;
    if (Math.abs(_0x11df59) < _0x1fe37e) {
      return _0x11df59 + " B";
    }
    const _0xa70e28 = _0x744e88 ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
    let _0x4e8640 = -1;
    const _0x481f0e = 10 ** _0x240430;
    do {
      _0x11df59 /= _0x1fe37e;
      ++_0x4e8640;
    } while (Math.round(Math.abs(_0x11df59) * _0x481f0e) / _0x481f0e >= _0x1fe37e && _0x4e8640 < _0xa70e28.length - 1);
    return _0x11df59.toFixed(_0x240430) + " " + _0xa70e28[_0x4e8640];
  }
  async function getFile(_0x52cf68) {
    try {
      const _0x4c38b2 = require("file-type");
      const _0x2ac486 = await getBuffer(_0x52cf68);
      let _0x1284c9 = await _0x4c38b2.fromBuffer(_0x2ac486);
      let _0x5945d1 = './' + ('' + Math.floor(Math.random() * 10000) + ('.' + _0x1284c9.ext));
      await fs.promises.writeFile(_0x5945d1, _0x2ac486);
      return _0x5945d1;
    } catch (_0x4bebbb) {
      console.error("An error occurred:", _0x4bebbb.message);
    }
  }
  function _0x3ea1(_0x5478e8, _0x2058e4) {
    const _0x54729c = _0x4b65();
    _0x3ea1 = function (_0x906489, _0x94fc56) {
      _0x906489 = _0x906489 - 118;
      let _0x18406d = _0x54729c[_0x906489];
      if (_0x3ea1.YRsrNO === undefined) {
        var _0x337b8a = function (_0x18cb3e) {
          let _0x481c8c = '';
          let _0x25ec9a = '';
          let _0x10b11c = 0;
          let _0x22c138;
          let _0x4a8a73;
          for (let _0x21352f = 0; _0x4a8a73 = _0x18cb3e.charAt(_0x21352f++); ~_0x4a8a73 && (_0x22c138 = _0x10b11c % 4 ? _0x22c138 * 64 + _0x4a8a73 : _0x4a8a73, _0x10b11c++ % 4) ? _0x481c8c += String.fromCharCode(255 & _0x22c138 >> (-2 * _0x10b11c & 6)) : 0) {
            _0x4a8a73 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x4a8a73);
          }
          let _0x43649b = 0;
          for (let _0x3d2bb7 = _0x481c8c.length; _0x43649b < _0x3d2bb7; _0x43649b++) {
            _0x25ec9a += '%' + ('00' + _0x481c8c.charCodeAt(_0x43649b).toString(16)).slice(-2);
          }
          return decodeURIComponent(_0x25ec9a);
        };
        const _0x1e58b9 = function (_0x281421, _0x262d96) {
          let _0x5b48e0 = [];
          let _0x2d6eec = 0;
          let _0x1625cc;
          let _0x5a4ec8 = '';
          _0x281421 = _0x337b8a(_0x281421);
          let _0x562656;
          for (_0x562656 = 0; _0x562656 < 256; _0x562656++) {
            _0x5b48e0[_0x562656] = _0x562656;
          }
          for (_0x562656 = 0; _0x562656 < 256; _0x562656++) {
            _0x2d6eec = (_0x2d6eec + _0x5b48e0[_0x562656] + _0x262d96.charCodeAt(_0x562656 % _0x262d96.length)) % 256;
            _0x1625cc = _0x5b48e0[_0x562656];
            _0x5b48e0[_0x562656] = _0x5b48e0[_0x2d6eec];
            _0x5b48e0[_0x2d6eec] = _0x1625cc;
          }
          _0x562656 = 0;
          _0x2d6eec = 0;
          for (let _0xd71269 = 0; _0xd71269 < _0x281421.length; _0xd71269++) {
            _0x562656 = (_0x562656 + 1) % 256;
            _0x2d6eec = (_0x2d6eec + _0x5b48e0[_0x562656]) % 256;
            _0x1625cc = _0x5b48e0[_0x562656];
            _0x5b48e0[_0x562656] = _0x5b48e0[_0x2d6eec];
            _0x5b48e0[_0x2d6eec] = _0x1625cc;
            _0x5a4ec8 += String.fromCharCode(_0x281421.charCodeAt(_0xd71269) ^ _0x5b48e0[(_0x5b48e0[_0x562656] + _0x5b48e0[_0x2d6eec]) % 256]);
          }
          return _0x5a4ec8;
        };
        _0x3ea1.vAWeqj = _0x1e58b9;
        _0x5478e8 = arguments;
        _0x3ea1.YRsrNO = true;
      }
      const _0x2c07f6 = _0x54729c[0];
      const _0x42cf7a = _0x906489 + _0x2c07f6;
      const _0xbccc4f = _0x5478e8[_0x42cf7a];
      if (!_0xbccc4f) {
        if (_0x3ea1.bAvroX === undefined) {
          _0x3ea1.bAvroX = true;
        }
        _0x18406d = _0x3ea1.vAWeqj(_0x18406d, _0x94fc56);
        _0x5478e8[_0x42cf7a] = _0x18406d;
      } else {
        _0x18406d = _0xbccc4f;
      }
      return _0x18406d;
    };
    return _0x3ea1(_0x5478e8, _0x2058e4);
  }
  const smsg = (_0x19270a, _0x2c8c6c, _0x2ac6f4) => {
    if (!_0x2c8c6c) {
      return _0x2c8c6c;
    }
    let _0x3ae3bc = proto.WebMessageInfo;
    if (_0x2c8c6c.key) {
      _0x2c8c6c.id = _0x2c8c6c.key.id;
      _0x2c8c6c.isBaileys = _0x2c8c6c.id.startsWith("BAE5") && _0x2c8c6c.id.length === 16;
      _0x2c8c6c.chat = _0x2c8c6c.key.remoteJid;
      _0x2c8c6c.fromMe = _0x2c8c6c.key.fromMe;
      _0x2c8c6c.isGroup = _0x2c8c6c.chat.endsWith("@g.us");
      _0x2c8c6c.sender = _0x19270a.decodeJid(_0x2c8c6c.fromMe && _0x19270a.user.id || _0x2c8c6c.participant || _0x2c8c6c.key.participant || _0x2c8c6c.chat || '');
      if (_0x2c8c6c.isGroup) {
        _0x2c8c6c.participant = _0x19270a.decodeJid(_0x2c8c6c.key.participant) || '';
      }
    }
    if (_0x2c8c6c.message) {
      _0x2c8c6c.mtype = getContentType(_0x2c8c6c.message);
      _0x2c8c6c.msg = _0x2c8c6c.mtype == "viewOnceMessage" ? _0x2c8c6c.message[_0x2c8c6c.mtype].message[getContentType(_0x2c8c6c.message[_0x2c8c6c.mtype].message)] : _0x2c8c6c.message[_0x2c8c6c.mtype];
      _0x2c8c6c.body = _0x2c8c6c.message.conversation || _0x2c8c6c.msg.caption || _0x2c8c6c.msg.text || _0x2c8c6c.mtype == "listResponseMessage" && _0x2c8c6c.msg.singleSelectReply.selectedRowId || _0x2c8c6c.mtype == "buttonsResponseMessage" && _0x2c8c6c.msg.selectedButtonId || _0x2c8c6c.mtype == "viewOnceMessage" && _0x2c8c6c.msg.caption || _0x2c8c6c.text;
      let _0x237fe0 = _0x2c8c6c.quoted = _0x2c8c6c.msg.contextInfo ? _0x2c8c6c.msg.contextInfo.quotedMessage : null;
      _0x2c8c6c.mentionedJid = _0x2c8c6c.msg.contextInfo ? _0x2c8c6c.msg.contextInfo.mentionedJid : [];
      if (_0x2c8c6c.quoted) {
        let _0x466ce7 = Object.keys(_0x2c8c6c.quoted)[0];
        _0x2c8c6c.quoted = _0x2c8c6c.quoted[_0x466ce7];
        if (["productMessage"].includes(_0x466ce7)) {
          _0x466ce7 = Object.keys(_0x2c8c6c.quoted)[0];
          _0x2c8c6c.quoted = _0x2c8c6c.quoted[_0x466ce7];
        }
        if (typeof _0x2c8c6c.quoted === "string") {
          _0x2c8c6c.quoted = {
            'text': _0x2c8c6c.quoted
          };
        }
        _0x2c8c6c.quoted.mtype = _0x466ce7;
        _0x2c8c6c.quoted.id = _0x2c8c6c.msg.contextInfo.stanzaId;
        _0x2c8c6c.quoted.chat = _0x2c8c6c.msg.contextInfo.remoteJid || _0x2c8c6c.chat;
        _0x2c8c6c.quoted.isBaileys = _0x2c8c6c.quoted.id ? _0x2c8c6c.quoted.id.startsWith("BAE5") && _0x2c8c6c.quoted.id.length === 16 : false;
        _0x2c8c6c.quoted.sender = _0x19270a.decodeJid(_0x2c8c6c.msg.contextInfo.participant);
        _0x2c8c6c.quoted.fromMe = _0x2c8c6c.quoted.sender === _0x19270a.decodeJid(_0x19270a.user.id);
        _0x2c8c6c.quoted.text = _0x2c8c6c.quoted.text || _0x2c8c6c.quoted.caption || _0x2c8c6c.quoted.conversation || _0x2c8c6c.quoted.contentText || _0x2c8c6c.quoted.selectedDisplayText || _0x2c8c6c.quoted.title || '';
        _0x2c8c6c.quoted.mentionedJid = _0x2c8c6c.msg.contextInfo ? _0x2c8c6c.msg.contextInfo.mentionedJid : [];
        _0x2c8c6c.getQuotedObj = _0x2c8c6c.getQuotedMessage = async () => {
          if (!_0x2c8c6c.quoted.id) {
            return false;
          }
          let _0x23559f = await _0x2ac6f4.loadMessage(_0x2c8c6c.chat, _0x2c8c6c.quoted.id, _0x19270a);
          return exports.smsg(_0x19270a, _0x23559f, _0x2ac6f4);
        };
        let _0x566416 = _0x2c8c6c.quoted.fakeObj = _0x3ae3bc.fromObject({
          'key': {
            'remoteJid': _0x2c8c6c.quoted.chat,
            'fromMe': _0x2c8c6c.quoted.fromMe,
            'id': _0x2c8c6c.quoted.id
          },
          'message': _0x237fe0,
          ...(_0x2c8c6c.isGroup ? {
            'participant': _0x2c8c6c.quoted.sender
          } : {})
        });
        const _0x808a0b = {
          "delete": _0x566416.key
        };
        _0x2c8c6c.quoted["delete"] = () => _0x19270a.sendMessage(_0x2c8c6c.quoted.chat, _0x808a0b);
        _0x2c8c6c.quoted.copyNForward = (_0x3bccfd, _0x574b87 = false, _0x27bf74 = {}) => _0x19270a.copyNForward(_0x3bccfd, _0x566416, _0x574b87, _0x27bf74);
        _0x2c8c6c.quoted.download = () => _0x19270a.downloadMediaMessage(_0x2c8c6c.quoted);
      }
    }
    if (_0x2c8c6c.msg.url) {
      _0x2c8c6c.download = () => _0x19270a.downloadMediaMessage(_0x2c8c6c.msg);
    }
    _0x2c8c6c.text = _0x2c8c6c.msg.text || _0x2c8c6c.msg.caption || _0x2c8c6c.message.conversation || _0x2c8c6c.msg.contentText || _0x2c8c6c.msg.selectedDisplayText || _0x2c8c6c.msg.title || '';
    _0x2c8c6c.reply = (_0x52d913, _0x966493 = _0x2c8c6c.chat, _0x792509 = {}) => Buffer.isBuffer(_0x52d913) ? _0x19270a.sendMedia(_0x966493, _0x52d913, "file", '', _0x2c8c6c, {
      ..._0x792509
    }) : _0x19270a.sendText(_0x966493, _0x52d913, _0x2c8c6c, {
      ..._0x792509
    });
    _0x2c8c6c.copy = () => exports.smsg(_0x19270a, _0x3ae3bc.fromObject(_0x3ae3bc.toObject(_0x2c8c6c)));
    _0x2c8c6c.copyNForward = (_0x421f82 = _0x2c8c6c.chat, _0x15a835 = false, _0x399ac7 = {}) => _0x19270a.copyNForward(_0x421f82, _0x2c8c6c, _0x15a835, _0x399ac7);
    _0x19270a.appenTextMessage = async (_0x2cdc1e, _0x588203) => {
      let _0x2cc061 = await generateWAMessage(_0x2c8c6c.chat, {
        'text': _0x2cdc1e,
        'mentions': _0x2c8c6c.mentionedJid
      }, {
        'userJid': _0x19270a.user.id,
        'quoted': _0x2c8c6c.quoted && _0x2c8c6c.quoted.fakeObj
      });
      _0x2cc061.key.fromMe = areJidsSameUser(_0x2c8c6c.sender, _0x19270a.user.id);
      _0x2cc061.key.id = _0x2c8c6c.key.id;
      _0x2cc061.pushName = _0x2c8c6c.pushName;
      if (_0x2c8c6c.isGroup) {
        _0x2cc061.participant = _0x2c8c6c.sender;
      }
      let _0x33b06c = {
        ..._0x588203,
        'messages': [proto.WebMessageInfo.fromObject(_0x2cc061)],
        'type': "append"
      };
      _0x19270a.ev.emit("messages.upsert", _0x33b06c);
    };
    return _0x2c8c6c;
  };
  function isDecimal(_0x540bfa) {
    return !Number.isInteger(_0x540bfa);
  }
  async function fetchBuffer(_0x34afb5, _0x2ba8f7 = {}) {
    return new Promise(async (_0x33301f, _0x231a8e) => {
      try {
        if (/^https?:\/\//i.test(_0x34afb5)) {
          const _0x6e0b45 = {
            ...(!!_0x2ba8f7.headers ? _0x2ba8f7.headers : {})
          };
          const _0x50db4e = {
            'headers': _0x6e0b45,
            'responseType': "arraybuffer",
            ..._0x2ba8f7
          };
          let _0x290dc9 = await axios.get(_0x34afb5, _0x50db4e);
          let _0x431ba9 = await _0x290dc9?.["data"];
          let _0x2697d0 = /filename/i.test(_0x290dc9.headers?.["get"]("content-disposition")) ? _0x290dc9.headers?.["get"]("content-disposition")?.["match"](/filename=(.*)/)?.[1]?.["replace"](/["';]/g, '') : '';
          let _0x32aa50 = mimes.lookup(_0x2697d0) || _0x290dc9.headers.get("content-type") || (await fileTypeFromBuffer(_0x431ba9))?.["mime"];
          _0x33301f({
            'data': _0x431ba9,
            'size': Buffer.byteLength(_0x431ba9),
            'sizeH': formatSize(Buffer.byteLength(_0x431ba9)),
            'name': _0x2697d0,
            'mime': _0x32aa50,
            'ext': mimes.extension(_0x32aa50)
          });
        } else {
          if (/^data:.*?\/.*?;base64,/i.test(_0x34afb5)) {
            let _0x24bc4b = Buffer.from(_0x34afb5.split`,`[1], "base64");
            let _0x36ef10 = Buffer.byteLength(_0x24bc4b);
            _0x33301f({
              'data': _0x24bc4b,
              'size': _0x36ef10,
              'sizeH': formatSize(_0x36ef10),
              ...((await fileTypeFromBuffer(_0x24bc4b)) || {
                'mime': "application/octet-stream",
                'ext': ".bin"
              })
            });
          } else {
            if (fs.existsSync(_0x34afb5) && fs.statSync(_0x34afb5).isFile()) {
              let _0x391bcd = fs.readFileSync(_0x34afb5);
              let _0x1fa7c7 = Buffer.byteLength(_0x391bcd);
              _0x33301f({
                'data': _0x391bcd,
                'size': _0x1fa7c7,
                'sizeH': formatSize(_0x1fa7c7),
                ...((await fileTypeFromBuffer(_0x391bcd)) || {
                  'mime': "application/octet-stream",
                  'ext': ".bin"
                })
              });
            } else {
              if (Buffer.isBuffer(_0x34afb5)) {
                let _0x1eb3f9 = Buffer?.["byteLength"](_0x34afb5) || 0;
                _0x33301f({
                  'data': _0x34afb5,
                  'size': _0x1eb3f9,
                  'sizeH': formatSize(_0x1eb3f9),
                  ...((await fileTypeFromBuffer(_0x34afb5)) || {
                    'mime': "application/octet-stream",
                    'ext': ".bin"
                  })
                });
              } else {
                if (/^[a-zA-Z0-9+/]={0,2}$/i.test(_0x34afb5)) {
                  let _0x3f76c0 = Buffer.from(_0x34afb5, "base64");
                  let _0x3c7231 = Buffer.byteLength(_0x3f76c0);
                  _0x33301f({
                    'data': _0x3f76c0,
                    'size': _0x3c7231,
                    'sizeH': formatSize(_0x3c7231),
                    ...((await fileTypeFromBuffer(_0x3f76c0)) || {
                      'mime': "application/octet-stream",
                      'ext': ".bin"
                    })
                  });
                } else {
                  let _0xed7362 = Buffer.alloc(20);
                  let _0x58a8dc = Buffer.byteLength(_0xed7362);
                  _0x33301f({
                    'data': _0xed7362,
                    'size': _0x58a8dc,
                    'sizeH': formatSize(_0x58a8dc),
                    ...((await fileTypeFromBuffer(_0xed7362)) || {
                      'mime': "application/octet-stream",
                      'ext': ".bin"
                    })
                  });
                }
              }
            }
          }
        }
      } catch (_0x5cd37d) {
        _0x231a8e(new Error(_0x5cd37d?.["message"] || _0x5cd37d));
      }
    });
  }
  const _0xdfabee = {
    smsg: smsg
  };
  function _0x3d3c0e(_0x4f295b, _0x38d5cb, _0x479f2c, _0x4477fe, _0x407dd1) {
    return _0x3ea1(_0x38d5cb + 0x17b, _0x479f2c);
  }
  _0xdfabee.isDecimal = isDecimal;
  _0xdfabee.getBuffer = getBuffer;
  _0xdfabee.getGroupAdmins = getGroupAdmins;
  _0xdfabee.getRandom = getRandom;
  _0xdfabee.h2k = h2k;
  _0xdfabee.isUrl = isUrl;
  _0xdfabee.Json = Json;
  _0xdfabee.runtime = runtime;
  _0xdfabee.sleep = sleep;
  function _0x36b39c(_0x23ff50, _0x27b981, _0x437a39, _0x143383, _0x3ce18e) {
    return _0x3ea1(_0x23ff50 + 0x225, _0x27b981);
  }
  _0xdfabee.fetchJson = fetchJson;
  _0xdfabee.jsonformat = jsonformat;
  _0xdfabee.clockString = clockString;
  function _0x4e8657(_0x2234b6, _0xe31535, _0xdc1b8, _0x2ced55, _0x3c8ee6) {
    return _0x3ea1(_0x3c8ee6 - 0xd4, _0xe31535);
  }
  _0xdfabee.getsize = getsize;
  _0xdfabee.formatBytes = formatBytes;
  _0xdfabee.fetchBuffer = fetchBuffer;
  _0xdfabee.formatSize = formatSize;
  _0xdfabee.getFile = getFile;
  module.exports = _0xdfabee;