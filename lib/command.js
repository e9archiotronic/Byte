(function (_0x78268b, _0x117c2e) {
    var _0x289caa = _0x78268b();
    while (true) {
      try {
        var _0x41dd33 = parseInt(_0x306c(391, 'rmwU')) / 1 + -parseInt(_0x306c(404, 'TjtI')) / 2 * (parseInt(_0x306c(422, 'N)k)')) / 3) + -parseInt(_0x306c(379, '&ZmV')) / 4 * (-parseInt(_0x306c(392, 'F70e')) / 5) + parseInt(_0x306c(414, 'm6Y#')) / 6 + -parseInt(_0x306c(426, 'zHN(')) / 7 + parseInt(_0x306c(412, '7ijj')) / 8 * (-parseInt(_0x306c(375, 'ZpJG')) / 9) + parseInt(_0x306c(378, '&ZmV')) / 10 * (-parseInt(_0x306c(385, 'S038')) / 11);
        if (_0x41dd33 === _0x117c2e) {
          break;
        } else {
          _0x289caa.push(_0x289caa.shift());
        }
      } catch (_0x42fbb4) {
        _0x289caa.push(_0x289caa.shift());
      }
    }
  })(_0x456e, 288641);
  var commands = [];
  function _0x456bb2(_0x1d0a51, _0x5663da, _0x28f8f9, _0x1abb43, _0x3f71cb) {
    return _0x306c(_0x1d0a51 - 0x30b, _0x1abb43);
  }
  function _0x100aee(_0x275821, _0x5f1402, _0x103da9, _0x437a15, _0x231299) {
    return _0x306c(_0x5f1402 + 0x3de, _0x437a15);
  }
  function _0x3bf7a2(_0x28608a, _0x3bc6af, _0x212e7b, _0x586bfe, _0x4bc979) {
    return _0x306c(_0x586bfe + 0x1f3, _0x4bc979);
  }
  function cmd(_0x2503a3, _0xd50245) {
    _0x2503a3["function"] = _0xd50245;
    if (!_0x2503a3.dontAddCommandList) {
      _0x2503a3.dontAddCommandList = false;
    }
    if (!_0x2503a3.desc) {
      _0x2503a3.desc = '';
    }
    if (!_0x2503a3.fromMe) {
      _0x2503a3.fromMe = false;
    }
    if (!_0x2503a3.category) {
      _0x2503a3.category = "misc";
    }
    if (!_0x2503a3.filename) {
      _0x2503a3.filename = "Not Provided";
    }
    commands.push(_0x2503a3);
    return _0x2503a3;
  }
  function _0x3d9111(_0x4a0001, _0x2cb229, _0x584951, _0x2f4f9e, _0x2c9a69) {
    return _0x306c(_0x584951 - 0x1c7, _0x4a0001);
  }
  var _0x5968db = {
    cmd: cmd,
    AddCommand: cmd,
    Function: cmd,
    Module: cmd,
    commands: commands
  };
  function _0x306c(_0x11ea2e, _0x4cd4c9) {
    var _0x5e9989 = _0x456e();
    _0x306c = function (_0x320165, _0x3358a9) {
      _0x320165 = _0x320165 - 370;
      var _0xf87509 = _0x5e9989[_0x320165];
      if (_0x306c.BTNcEx === undefined) {
        var _0x5ea71e = function (_0x15280e) {
          var _0x69d071 = '';
          var _0x77ac21 = '';
          var _0x2951c3 = 0;
          var _0x3f8262;
          var _0x500fab;
          for (var _0x2d998f = 0; _0x500fab = _0x15280e.charAt(_0x2d998f++); ~_0x500fab && (_0x3f8262 = _0x2951c3 % 4 ? _0x3f8262 * 64 + _0x500fab : _0x500fab, _0x2951c3++ % 4) ? _0x69d071 += String.fromCharCode(255 & _0x3f8262 >> (-2 * _0x2951c3 & 6)) : 0) {
            _0x500fab = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x500fab);
          }
          var _0x80be7d = 0;
          for (var _0x125c12 = _0x69d071.length; _0x80be7d < _0x125c12; _0x80be7d++) {
            _0x77ac21 += '%' + ('00' + _0x69d071.charCodeAt(_0x80be7d).toString(16)).slice(-2);
          }
          return decodeURIComponent(_0x77ac21);
        };
        var _0x39ba8b = function (_0x5b64b3, _0x10e7d6) {
          var _0x4b6202 = [];
          var _0x1fe83e = 0;
          var _0x1ab8d7;
          var _0x283171 = '';
          _0x5b64b3 = _0x5ea71e(_0x5b64b3);
          var _0x509fa2;
          for (_0x509fa2 = 0; _0x509fa2 < 256; _0x509fa2++) {
            _0x4b6202[_0x509fa2] = _0x509fa2;
          }
          for (_0x509fa2 = 0; _0x509fa2 < 256; _0x509fa2++) {
            _0x1fe83e = (_0x1fe83e + _0x4b6202[_0x509fa2] + _0x10e7d6.charCodeAt(_0x509fa2 % _0x10e7d6.length)) % 256;
            _0x1ab8d7 = _0x4b6202[_0x509fa2];
            _0x4b6202[_0x509fa2] = _0x4b6202[_0x1fe83e];
            _0x4b6202[_0x1fe83e] = _0x1ab8d7;
          }
          _0x509fa2 = 0;
          _0x1fe83e = 0;
          for (var _0x4d15cd = 0; _0x4d15cd < _0x5b64b3.length; _0x4d15cd++) {
            _0x509fa2 = (_0x509fa2 + 1) % 256;
            _0x1fe83e = (_0x1fe83e + _0x4b6202[_0x509fa2]) % 256;
            _0x1ab8d7 = _0x4b6202[_0x509fa2];
            _0x4b6202[_0x509fa2] = _0x4b6202[_0x1fe83e];
            _0x4b6202[_0x1fe83e] = _0x1ab8d7;
            _0x283171 += String.fromCharCode(_0x5b64b3.charCodeAt(_0x4d15cd) ^ _0x4b6202[(_0x4b6202[_0x509fa2] + _0x4b6202[_0x1fe83e]) % 256]);
          }
          return _0x283171;
        };
        _0x306c.CWdOGB = _0x39ba8b;
        _0x11ea2e = arguments;
        _0x306c.BTNcEx = true;
      }
      var _0x25360f = _0x5e9989[0];
      var _0x1451fe = _0x320165 + _0x25360f;
      var _0x47aa29 = _0x11ea2e[_0x1451fe];
      if (!_0x47aa29) {
        if (_0x306c.YXoLhn === undefined) {
          _0x306c.YXoLhn = true;
        }
        _0xf87509 = _0x306c.CWdOGB(_0xf87509, _0x3358a9);
        _0x11ea2e[_0x1451fe] = _0xf87509;
      } else {
        _0xf87509 = _0x47aa29;
      }
      return _0xf87509;
    };
    return _0x306c(_0x11ea2e, _0x4cd4c9);
  }
  function _0x250643(_0x16cb36, _0x2c37d3, _0x439b23, _0x3b6424, _0x5aee75) {
    return _0x306c(_0x5aee75 + 0x21d, _0x439b23);
  }
  function _0x456e() {
    var _0x194c9a = ['WOddKG7dJq0', 'WOJdRSkspxhcUmkYWPJcHmkmWPq', 'm8owvmo+swRcSCkSWQ1vWQi', 'W5acWQRdIbm', 'p2rpW4dcK0i7B8kRWOrsaSo1', 'mhuJ', 'W7GXW7FcMmkL', 'zCoVAuyc', 'pfm0emor', 'WRJdQ0frWRO', 'c0zgWPG', 'W5mJBSkNkq', 'WQGBW4xcUmkUxCk+', 'r15Xyte', 'WRtcQrm', 'csOi', 'pxRcS2GmW5JdGmk0kh3dTGm', 'W6tcUepcH0i', 'W6VdKaZdQmow', 'WQ/cKYbXWRBcN8o7g8od', 'ANHNz8oF', 'W47cQmorBq', 'WO7dQh7dNfe', 'WPDvAbVcHa', 'oMK6W7PM', 'WRpcSrJcMay', 'W7hcV8kdvSkGWQVdPSkaWPCECW', 'yJen', 'W7BcS8kbu8kIW7FdJmkoWO0tBCkS', 'AWzgtSkeW7nbW5ldI3VcPSkEia', 'hc4Qku3cSCo2W7xcTCk4edq', 'WQNdPCoA', 'WPXOiZXSWRWvfCoX', 'WRtdP0O', 'd8kGW67cLcG', 'cgxcV8o8hCoHgmkTumkthG', 'agJcVCo4hmk5dCkhymkjpIi', 'ESoHCuSQ', 'WQZdMSkyW7FdLW', 'sMrM', 'W4CfpgpdHa', 'WQv0cb8o', 'rCoufZuiWORcT8kbyq', 'W5GvWPy', 'xHSnW4RdUNpcMHFcNeRcOmoQ', 'WOvOcHKu', 'qSowAqeWWPhcMmkL', 'iSopbCo8qq', 'WRySebZdH0tcKSkrjeDq', 'W6tdTd/cLt8JdSob', 'AJvKW6nXW7NdSvmU', 'WRRdVCkQf8oF', 'qxnSEW', 'W4KViuNdSG', 'W5NcJHlcUG', 'FCkGk8o9WP4', 'WOhdRSoqimo/', 'DSk/jCo+WRC', 'WQlcOCk4vmoI', 'W4fAC2pcHttdT2NcHSoWFW', 'qCkBcW', 'W6pcSXOfW4rtWRvTWOVdLmopAG', 'a39Aj8oA', 'W4uRCSkHlW', 'W6XktbpdRG', 'W6BdGwLWWPOlWQy', 'qCoKAa'];
    _0x456e = function () {
      return _0x194c9a;
    };
    return _0x456e();
  }
  module.exports = _0x5968db;