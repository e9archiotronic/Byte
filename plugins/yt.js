(function (_0x485eb1, _0x3c9386) {
    const _0x1a7777 = _0x485eb1();
    while (true) {
      try {
        const _0x411983 = parseInt(_0x3a01(1866, 'p2Fk')) / 1 * (-parseInt(_0x3a01(2357, 'OpJp')) / 2) + parseInt(_0x3a01(1707, 'HofG')) / 3 + parseInt(_0x3a01(1416, '())k')) / 4 + -parseInt(_0x3a01(2035, '(qvJ')) / 5 * (-parseInt(_0x3a01(3189, 'm&O7')) / 6) + -parseInt(_0x3a01(1614, 'wfDJ')) / 7 + -parseInt(_0x3a01(2280, '(qvJ')) / 8 + parseInt(_0x3a01(1998, 'F&t*')) / 9 * (parseInt(_0x3a01(3123, 'E]!p')) / 10);
        if (_0x411983 === _0x3c9386) {
          break;
        } else {
          _0x1a7777.push(_0x1a7777.shift());
        }
      } catch (_0x1b52a2) {
        _0x1a7777.push(_0x1a7777.shift());
      }
    }
  })(_0x5011, 906395);
  const config = require("../settings");
  const puppeteer = require("puppeteer");
  const dl = require("@bochilteam/scraper");
  const yts = require("yt-search");
  const ytdl = require("ytdl-core");
  const l = console.log;
  const fs = require("fs-extra");
  function _0x4fb9d4(_0x2ec1c7, _0x1028ff, _0x2cdcaa, _0x17e3f5, _0x400b24) {
    return _0x3a01(_0x17e3f5 + 0x204, _0x400b24);
  }
  function ytreg(_0x57591a) {
    return /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x57591a);
  }
  const dl2 = require("inrl-dl");
  const {
    smsg,
    getBuffer,
    getGroupAdmins,
    getRandom,
    getsize,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson
  } = require("../lib/functions");
  const {
    cmd,
    commands
  } = require("../lib/command");
  function _0x1d5310(_0x110bee, _0x350a27, _0x55ae7a, _0x3ad835, _0x36b9b7) {
    return _0x3a01(_0x55ae7a - 0x30c, _0x110bee);
  }
  const ytsSearchResults = new Map();
  let props;
  const audioSearchResults = new Map();
  let optionIndex = 1;
  const videoSearchResults = new Map();
  let titleUrlMap = {};
  const userContextMap = new Map();
  function formatUploadDate(_0x335f02) {
    const _0x359df2 = new Date(_0x335f02);
    return _0x359df2.getFullYear() + '-' + (_0x359df2.getMonth() + 1) + '-' + _0x359df2.getDate();
  }
  async function youtube720(_0x282839) {
    try {
      const _0xa430c7 = await puppeteer.launch();
      const _0x229d4b = await _0xa430c7.newPage();
      await _0x229d4b.goto("https://en.y2mate.is/");
      await _0x229d4b.waitForSelector("#txtUrl");
      await _0x229d4b.type("#txtUrl", _0x282839);
      await _0x229d4b.click("#btnSubmit");
      await _0x229d4b.waitForSelector("#tabVideo .tableVideo");
      await _0x229d4b.click("#tabVideo tr:nth-child(2) td .btn");
      await _0x229d4b.waitForSelector("#tabVideo tr:nth-child(2) td .btn a");
      const _0x30617a = await _0x229d4b.$eval("#tabVideo tr:nth-child(2) td .btn a", _0x1238bc => _0x1238bc.href);
      await _0xa430c7.close();
      return _0x30617a;
    } catch (_0x333a03) {
      console.error("Error occurred:", _0x333a03);
      return null;
    }
  }
  function _0x3a01(_0x378e82, _0x363b6d) {
    const _0x28dadd = _0x5011();
    _0x3a01 = function (_0x131f0, _0x1ae897) {
      _0x131f0 = _0x131f0 - 348;
      let _0x16b3a2 = _0x28dadd[_0x131f0];
      if (_0x3a01.StJpGt === undefined) {
        var _0x1c77da = function (_0x3d75af) {
          let _0x3154f2 = '';
          let _0x2de690 = '';
          let _0x316914 = 0;
          let _0x368e96;
          let _0x243b18;
          for (let _0x6a0de7 = 0; _0x243b18 = _0x3d75af.charAt(_0x6a0de7++); ~_0x243b18 && (_0x368e96 = _0x316914 % 4 ? _0x368e96 * 64 + _0x243b18 : _0x243b18, _0x316914++ % 4) ? _0x3154f2 += String.fromCharCode(255 & _0x368e96 >> (-2 * _0x316914 & 6)) : 0) {
            _0x243b18 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x243b18);
          }
          let _0x51d768 = 0;
          for (let _0x41778a = _0x3154f2.length; _0x51d768 < _0x41778a; _0x51d768++) {
            _0x2de690 += '%' + ('00' + _0x3154f2.charCodeAt(_0x51d768).toString(16)).slice(-2);
          }
          return decodeURIComponent(_0x2de690);
        };
        const _0x516a78 = function (_0x284d52, _0x3f55bd) {
          let _0x182de6 = [];
          let _0x53ee52 = 0;
          let _0x467877;
          let _0x459e68 = '';
          _0x284d52 = _0x1c77da(_0x284d52);
          let _0x4447a1;
          for (_0x4447a1 = 0; _0x4447a1 < 256; _0x4447a1++) {
            _0x182de6[_0x4447a1] = _0x4447a1;
          }
          for (_0x4447a1 = 0; _0x4447a1 < 256; _0x4447a1++) {
            _0x53ee52 = (_0x53ee52 + _0x182de6[_0x4447a1] + _0x3f55bd.charCodeAt(_0x4447a1 % _0x3f55bd.length)) % 256;
            _0x467877 = _0x182de6[_0x4447a1];
            _0x182de6[_0x4447a1] = _0x182de6[_0x53ee52];
            _0x182de6[_0x53ee52] = _0x467877;
          }
          _0x4447a1 = 0;
          _0x53ee52 = 0;
          for (let _0x19afb2 = 0; _0x19afb2 < _0x284d52.length; _0x19afb2++) {
            _0x4447a1 = (_0x4447a1 + 1) % 256;
            _0x53ee52 = (_0x53ee52 + _0x182de6[_0x4447a1]) % 256;
            _0x467877 = _0x182de6[_0x4447a1];
            _0x182de6[_0x4447a1] = _0x182de6[_0x53ee52];
            _0x182de6[_0x53ee52] = _0x467877;
            _0x459e68 += String.fromCharCode(_0x284d52.charCodeAt(_0x19afb2) ^ _0x182de6[(_0x182de6[_0x4447a1] + _0x182de6[_0x53ee52]) % 256]);
          }
          return _0x459e68;
        };
        _0x3a01.wgfRpO = _0x516a78;
        _0x378e82 = arguments;
        _0x3a01.StJpGt = true;
      }
      const _0x2527a7 = _0x28dadd[0];
      const _0x7adf40 = _0x131f0 + _0x2527a7;
      const _0x5ccad9 = _0x378e82[_0x7adf40];
      if (!_0x5ccad9) {
        if (_0x3a01.ukbjes === undefined) {
          _0x3a01.ukbjes = true;
        }
        _0x16b3a2 = _0x3a01.wgfRpO(_0x16b3a2, _0x1ae897);
        _0x378e82[_0x7adf40] = _0x16b3a2;
      } else {
        _0x16b3a2 = _0x5ccad9;
      }
      return _0x16b3a2;
    };
    return _0x3a01(_0x378e82, _0x363b6d);
  }
  var descv = '';
  if (config.LANG === 'SI') {
    descv = "Youtube වෙතින් videos බාගත කරයි.";
  } else {
    descv = "Download videos from Youtube.";
  }
  var descs = '';
  if (config.LANG === 'SI') {
    descs = "Youtube වෙතින් songs බාගත කරයි.";
  } else {
    descs = "Download songs from Youtube.";
  }
  var descyt = '';
  if (config.LANG === 'SI') {
    descyt = "Youtube වෙතින් video සහ songs බාගත කරයි.";
  } else {
    descyt = "Download videos and songs from Youtube.";
  }
  var descsh = '';
  if (config.LANG === 'SI') {
    descsh = "Youtube search බාගත කරයි.";
  } else {
    descsh = "Search and get details from youtube.";
  }
  function _0x2458bb(_0x4022f1, _0x80c470, _0x20cc4a, _0xcd88a3, _0x6cc449) {
    return _0x3a01(_0xcd88a3 + 0x31d, _0x20cc4a);
  }
  var N_FOUND = '';
  if (config.LANG === 'SI') {
    N_FOUND = "*මට කිසිවක් සොයාගත නොහැකි විය :(*";
  } else {
    N_FOUND = "*I couldn't find anything :(*";
  }
  var urlneed = '';
  if (config.LANG === 'SI') {
    urlneed = "*කරුණාකර Youtube url එකක් ලබා දෙන්න*";
  } else {
    urlneed = "*Please give me youtube url..*";
  }
  var urlneed1 = '';
  if (config.LANG === 'SI') {
    urlneed1 = "එය soundcloud වෙතින් songs බාගත කරයි.";
  } else {
    urlneed1 = "It downloads songs from soundcloud.";
  }
  var imgmsg = '';
  if (config.LANG === 'SI') {
    imgmsg = "```කරුණාකර වචන කිහිපයක් ලියන්න!```";
  } else {
    imgmsg = "```Please write a few words!```";
  }
  function _0x56e43d(_0x678638, _0x3b772d, _0x3b8f15, _0x73469a, _0x4f815d) {
    return _0x3a01(_0x678638 + 0x27a, _0x73469a);
  }
  var sizetoo = '';
  if (config.LANG === 'SI') {
    sizetoo = "_This Bro, file size is too big_\n ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​  *මෙම file එක upload කිරීමට මෙම bot host වෙන platform එකේ bandwith එක ප්‍රමානවත් නැත !*";
  } else {
    sizetoo = "_This Bro, file size is too big_\n​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ *The bandwidth of the platform where this bot is hosted is not enough to upload this file!*";
  }
  const _0x598f5c = {
    pattern: "test",
    use: ".yts lelena",
    react: '🔎',
    desc: "Search videos from youtube",
    category: "search",
    filename: __filename
  };
  cmd(_0x598f5c, async (_0x13f0ec, _0x166e2f, _0x262adc, {
    from: _0x4d27ba,
    q: _0x5a8d45,
    reply: _0x3dd6be
  }) => {
    try {
      if (!_0x5a8d45) {
        return _0x166e2f.reply("Enter YouTube Video Link or Search Query!");
      }
      const _0x3545fc = await yts(_0x5a8d45);
      if (_0x3545fc.videos.length > 0) {
        let _0x45c75a = [];
        const _0x3965f1 = "yts_" + optionIndex;
        const _0x46c745 = {};
        for (let _0x1571df = 0; _0x1571df < Math.min(5, _0x3545fc.videos.length); _0x1571df++) {
          const _0x3e136b = _0x3545fc.videos[_0x1571df];
          const _0x5a65ec = _0x3e136b.url;
          const _0x134004 = _0x3e136b.title;
          _0x46c745[optionIndex + '.' + (_0x1571df + 1)] = _0x5a65ec;
          _0x45c75a.push(".tet " + optionIndex + '.' + (_0x1571df + 1) + " " + _0x134004);
        }
        if (!videoSearchResults.has(_0x3965f1)) {
          videoSearchResults.set(_0x3965f1, {});
        }
        videoSearchResults.set(_0x3965f1, Object.assign(videoSearchResults.get(_0x3965f1), _0x46c745));
        await _0x13f0ec.sendPoll(_0x4d27ba, "Choose a video to download:", [..._0x45c75a]);
        optionIndex += 1;
      } else {
        return _0x166e2f.reply("No search results found.");
      }
    } catch (_0x4f5450) {
      _0x3dd6be("*Error !!*");
      l(_0x4f5450);
    }
  });
  const _0x258d63 = {
    pattern: "tet",
    use: ".yts lelena",
    react: '🔎'
  };
  function _0x1168ab(_0x3c2ac1, _0x21b058, _0x24af6e, _0x43bcc2, _0x1de0a5) {
    return _0x3a01(_0x21b058 - 0x357, _0x1de0a5);
  }
  function _0x5011() {
    const _0x43d580 = ['pCotWPNdKSoM', 'c8oNWQTs', 'dmknWObaEG', 'W5NdO8oEoSoY', 'jCoQWR1JEG', 'lxVdS8oOva', 'W6eke1BcJa', 'W7lcHtfQWOm', 'FmkexCoVdG', 'wJKfWO8M', 'Amkrd8oKW7e', 'W79XWPtdOWG', 'tmkrk09k', 'i3C0aq', 'WPJcOCkwtbm', 'sCklW44', 'W7JdMSkRW6uk', 'u2BdOG', 'p8k4WOO', 'ECozW60JWRy', 'W6qvcCoWW5S', 'WQRdIIWHuW', 'BmoAW6BcVSor', 'WRvneZNcJa', 'FSodaa', 'E3z2Fs8', 'E1nzwZq', 't3Tiws0', 'WP9WW55SzW', 'gCozg8kjWOy', 'WRP8fa', 'A8oAWO7dLLq', 'W6NdO2pcMGi', 'tSogW6FcISoM', 'nwSRdmk0', 'WOVdKXdcRCod', 'FmkxW6OjWQe', 'WPNcN8k7DdK', 'raxdUmo1yG', 'l8k4WPr5zG', 'x3ddTSk2pG', 'DmosW7GpWQy', 'BJupeCoK', 'W4yWmSoLW4y', 'aSkQWRKAta', 'WQ5Ifa', 'y8khaSkNaa', '4Ogy4Ocj4Ogm4OgI4Oor', 'WOVcSCozsXm', 'smk+WRPTW5m', 'hafjn8o6', 'sCokW73cGSoo', 'tSokW5qKDG', 'uZWOWOqh', 'W40HWPOCjG', 'W6zGf8o8W6G', 'WQNcJ8o/', 'W6ldHmk2', 'dYDQf8om', 'lSohhW', 'puFdMCoNDq', 'W6ZdGSkMjmkV', 'WPLLbcRcMG', 'xCodkKZdQW', 'x8ovWRhdJ8oL', 'W7CWmq', 'W7BGT4hGTAhGT5JGTiW', 'W6NdMCk4jCkT', '4OcH4OoI4Og/4Oon4OgN', 'W4JcN1rJWOi', 'emkEWRnzuq', 'tmkagSkVhW', 'WQXUbv7cKa', 'kmoMsJrk', 'W7Sok8oGW5O', 'wmoKf8oEW6y', 'm8o6cYfT', 'oGldGCoQxa', 'W5WtW5VdOWO', 'W7SwW5BdHY8', 'WPldGKpcSa', 'CGG3e8oy', 'WPRdK8oxnSkg', 'W6eHxKJcKG', 'WOTrqcxcLq', 'WO3dN8ojoW', 'WOVdLCoCB8ov', 'sSk7WPbzW7a', 'lSk5W4D2Da', 'W71zWPNcJKG', 'dCkyACkeW4O', 'WQhcVmoCm8oN', 'WOFcUZFcUca', 'W7bMWPdcJMy', 'W60JoCkZW4m', 'pmopfmk5WPC', 'j8ksWRvyqa', 'WRz0BCkLWOtdNtOnWP/dS1vvbq', 'wCoaWOtdL8oQ', 'wmoaW551', 'a0mrgmkx', '8jUfSU+5TG', 'WRNcJSo/g8oH', 'xmkNsG', 'W57dUhdcVH4', 'thzVDa', 'W4VcGwjVWQu', 'W4RdSmoMWPdcMG', 'WQ/dMmkizSo2', 'zwBdJSk2mG', 'WRdcIgrTWPG', 'wmkXvSkOia', 'qWHVhSoh', 'ymkpWPrKEW', 'WOVdN8obi8oF', 'WOFdOaOeEG', 'W4NcV8kCqvy', 'dCoiWPpdL8kf', 'WRK6WR4', 'WRXMc14', 'WOJdJd4IEq', 'WPz1bGq', 'W4xdHCodWPFcPW', 'DGflfSoA', 'hmkdWQjtwW', 'WQ3cMmoUW7ul', 'W6RcICo8fmo3', '4OoD4Ogq4Oor4OgP4Oov', 'DXyj', 'b2BdSmotsq', 'W7ldRmodWP7cOW', 'W7myWOVdJXy', 'Fw83wG', 'W5pdHmoWWPtcSW', 'p8oCcCk+', 'cSoimXHx', 'WQDPW5ZcL2y', 'DSoxWP/dLui', 'WOlcSCka', 'rGNdHW', 'uGGahSoA', 'W7JcGh9GWOi', 'rYtcKZ7cRW', 'rZPNemoo', 'WQddM8oKoCoZ', 'f8kBWPa', 'W7RdIvvOWOu', 'FCoeW6ODWQq', 'WORdJSoqo8o1', 'CaeehmoD', 'rGyrpCoJ', 'W5ldHmkQo8kT', 's8kUWO8', 'reVcMq', 'kmoPqYrR', '8jkNJFcDH4tWRAwh8j20I8kI', 'i2mZhCk/', 'W5nnWONdHHu', 'W4PKl8oSW4W', 'WOTrqgxdHq', 'W5VdGmonWQ/cVG', '4P26WOuSa28', 'W51/WPJdVWG', 'WRJdMCoDpCox', 'WQyxmuBcTq', 'm8k+W5uGja', 'hg1GCru', 'WQJdVmoiWOi', 'WOZdLmovlmok', 't8k2b8kJaa', 'ySouf8oPW5G', 'm8oSeIi', 'FmoqdCoUW70', 'aXZdKSonqW', 'vZGYWPCt', 'W5bSWRm', 'WOuvhxhcGa', 'W4LenCoRW7C', 'WPvYW44', 'xItcLZ4', '8l22QpcQHBlWSis38j22VFgiHBi', 'xmoaW7ZcKSoM', 'iokxQ+k+J8oMrG', 'W50LW7NdTHW', 'W5q3luC0', 'WOZdKKFcImom', 'W6/cLufHuW', 'x8kDn8kSgG', 'cCkIWRjZrW', 'W67dHmkSiCk3', 'W6NdK8k8ka', 'rmobsXu', 'dmkne2RdIW', 'W6DkWPe', 'W5ajefZcNa', 'WORdN8oFk8oR', 'WRNcM8oVW50m', 'W47dUvJcHHe', 'WR9Ubu/cKG', 'cutdK8ozFa', 'l8kZWQCbEq', 'W6nnWPldMH8', 'W5pdJSoTW5JcSW', 'cSolqWNdHG', 'WPFdHvW', 'WR7dLwDGWPu', 'iSkUwG', 'W6WVW4ZdOXW', 'WQ3cPSkwtGu', 'W4FdO8olsfy', 'WRLlW60pvG', '8jcYOo+5Iq', 'WOmwiL/cSa', 'W7vrWPVdLW', 'sCokW6C', 'k8oQWPnKEa', 'BCodW5OwWRu', 'WOHOeXJcJG', 'ymohcSoP', 'WPldTSkqWOut', 'WO1uWQJcTeZdPv3dTCown8oumq', 'W7aSj0SH', 'W4bImvy9', 'iSonWOldG0i', 'W77dHaW1sG', 'CSoeW5r/yW', 'BsFdM8oizG', 'lmoRqmkGW7y', 'WP/dVx7cRta', 'uwblrbS', 'WPJdS8oGgmof', 'ACkcW5VcR8k2', 'W4ldLCoHWQFcVW', 'WPldI8o3hSoL', 'rMpdHCkF', 'W5NcGmkBBW', 'g8kosCknW44', 'fmkpWPO5sa', 'uCoVW50DWRO', '8yQYPU+7Lq', 'sSonW7xcOmoj', 'q8oqaq', 'WOBcTCkD', 'W5NdOL/cPta', 'bmozuGpdHG', 'wNP1mYi', 'W6ldL8kRA8o1', 'W7rTW5ZcKxu', 'W4FcV0n+WRK', 'E8omWPZdK8oT', 'dmo2jW', 'pCo+eCk8WR4', 'F2hdSmkqfW', 'Emkrqmk6W5xdHcK', 'iokwOUk/NvddJa', 'W4nNWOVcJ2S', 'WQVdIXu4tq', 'zdutWOOB', 'WOZdLmovB8ow', 'vqpdL8oerq', 'W6DzxW/dVa', 'WOVdTCoObmo1', 'amklWRKnqq', 'EmokWOm', 'EIVdQCoQFa', 'W6r6WPNcGhm', 'lCkUumkR', 'WQjTh3NcKa', 'zSoHAdC', 'wmkRm8keoa', 'WOpdMv/cRmof', 'wdGR', 'pKpdG8o3xq', 'W7pcICornCoY', 'WRjEWPldNbC', 'WPZcPSkv', 'uhHLm3q', 'ymoBWO/dLq', 'W4tdKSoZWPNcRq', 'dxpdLc0', 'sCo6h8oBW5K', 'jYiXamk+', 'W70oW6/dRbu', 'rSofsHxcIa', 'bmkteedcLG', 'WQ8lmfC', 'f8o5W4WkWQfxBdZcPSomar5D', 't8kDW4RcLCk2', 'C8k+W4pcNSkp', 'W5fTfrJcNq', 'WOn5ebhcLG', 'FmosW6OF', 'WRmqiv3cUq', 'WQGppftdVa', 'WPFdNvtcKCou', 'sNNdNSkMmG', 'CbuRWO8y', 'WQ8VsXhdLW', 'k0ZdGW', 'WOxcTCkaxqq', 'WO3cVYFcUq', 's8onqW', 'xSkXnMHk', 'WPldM8oGWOuL', 't8kkamkJca', 'WQ3dLSoZWPCA', '4P2QW4RdNCo9gG', 'aCoAWPSNiW', 'WR7cG8o7W7e', 'WQiRlSkZW4e', 'W4tdVSoZWP3cPG', 'DmofW6tcSSoU', 'W5uaW6hdObG', 'WQm5WR9m', 'W5yRlfq9', 'bCkkBCkp', 'WQ3dRmozWPuD', 'ub7dGCoira', 'W6ldL8kRA8oW', 'uNddOSkX', 'D8ofW6a', 'WPq8ea/cGa', 'W6eaemoJW4y', 'tqpdGSoutW', 'smoEdmo5W6a', 'x8kSgSkIhq', 'd21+W5aB', 'uCk+g0Xc', 'WOFcSmkk', 'W6Dt8kQgG++7KW', 'WO8vWQ86WO8', 'n8ktWPmNra', 'W7zUWPJcG00', 'Fmk5pKTV', 's2S7FtC', 'tMPysIu', 'W4ZdRSoTWP3cMa', 'umolW7tcG8ot', 'dokwTEkuO+kvJokvIW', 'W5OnW7hdOri', 'W6eWpLNcTG', 'W4aMp0dcJW', 'WRxcTtFdOZu', 'ehrXjW', 'pfa2jmkW', 'W7rFcSo4W6u', 'a8kwWPnjW4q', 'DmkkxSoylW', 'W6SVpmo0W5a', 'WPhdKL7cVmoG', 'ESoHCahcQW', '4lsC4ls04lw6W5BGT4C', 'A8oxdKVdIa', 'W5z9jCozW6W', 'WPPApf7cSq', 'cHr2n8ot', 'jKFdLSoNxq', 'nSo8bsjg', 'WQzHfeK', 'W6fDWOK', 'vdxcPSoIEq', 'kCoRgCoIWRK', 'WOupaa', 'W6tdJmorDSoW', 'vrJdU8oRta', 'WR0GW5y', 'WQxdOhxcV8oN', 'B8oze8kNWRa', 'cmkwWPS0zW', 'qSojaSkVca', 'FCkEcG', 'WRZcJ8oQW7Cl', 'WOhcI+c0Uoc0OEc1SG', 'xSkUW7/cTmkb', 'kfDtt8oz', 'iCoUoZ5P', 'WQv6j2pcUW', 'jSozdG', 'iK48emoC', 'q0RcICklcG', 'W73cIgvSWPy', 'W6LSWO8', 'B8oaWPhdLCo3', 'umkxzCoSiG', 'kCkLWOvKwG', 'gSkTq8o8ka', 'WRRdJmoJhmoW', 'k8oWjWbU', 'WOtdGvVcVCoe', '4lEG4lEf4lwK4lsR4lwe', 'WQhcL8kRFaW', 'gxOvdmkI', 'WOrYdbtcGq', 'umklngv3', 'WPFdVXCesa', 'pe/dLSo3fG', 'pmopwSk6WRW', 'W7hcV8oIf8o2', 'rmoem8o1W4e', 'W7nTWOtcLq', 'wEkuGok+VeNdSa', 'yCk9b1H6', 'vGtdL8kp', 'WOpdOSoRpCod', 'W67cS8oKW6el', 'W4FdImoUWPhcUq', 'WQ5lW6yhzW', 'W6ZdM8kQ', 'sCoqfMBcJW', 'sJqYWOWU', 'WRDtlYNcQG', 'W7VILj7IVPTDW4u', 'WRzDWOVdJXy', 't8oXWQtdJNu', 'z8kQehq7', 'hmkFWOC2', 'FSkKaCkKka', 'wmktWOD1DW', 'W68OWORcIgm', 'B8kSh3L7', '4Okk4OoN4Ok74OgD4Okn', 'WPKxW7NdRHa', 'rmkGWO5f', 'zmkibSkvca', 'WOdcGmo8W4as', 'hSoVgtXk', 'WRRdIHCLyG', 'WP8ZW4KKAq', 'WRddHZ5LWPG', 'FhJdHmk5ba', 'rSobx1dcVq', 'kmopdG', 'xCkuW4lcHSkM', 'emk6B8kRW7u', 'W5dcJL97WOu', 'BdCZbCoK', 'WQLXWOJcKIC', 'WONdJ8ocjW', 'WPxdNryNrq', 'mM4UhCkJ', '8jQfHpgbLAZcO/gcPOJXIOsd', 'C8kNr8oPka', 'WRDJWP5SvG', 'W5uwb30', 'WOZcG8kluqi', 'WQSWmMBcNq', 'W5HbW63dSbu', 'q8oFaNdcJW', 'esFcT8ktCW', 'c8oijbe', 'WRhdT8ogWO80', 'W5FcPCo0e8oj', 'WQZdVCoenSoK', 'W7hcHZ8', 'W6tdMCkHzCoH', 'W7/cNhvGWP4', 'tCkmaa', 'W7lcQ8keW4yg', 'W6tcR8o5W6yq', 'h8kPWR5aCW', 'udq3WPuU', 'WRldJb1XvG', 'WPddKKpcRCob', 'W4FdOmobsfy', 'W4eTnv09', 'W6jzWONdMH8', 'W6ZcJgfLWOG', 'omoQW4C3pG', 'WR3cJ8oLW7aY', 'WQLMhv7cMq', 'E8okWP/dGSoM', 'E8owW60zWQq', 'W6G3c8olW7K', 'WRhdUmoEWPi6', 'W5DIlvaY', 'smk/pw5V', '4Oge4OkH4OgX4Oow4OoE', 'uWVdH8ovtW', 'WR3dLCosoSol', 'WPRdGXW2DW', 'W6CXlSoYW5i', 'f8kBWPb1mq', 'CCogW6WzW6m', 'W4W2W4RdQYG', 'vCkvWOqHAG', 'zsxdVmo1BW', 'W6vTW6OYW74', 'm8kKWOu', 'W4KiW6JdPW', 'W6CTlSk9', 'WPJdTSohWPGA', 'Banfd8og', 'W6STmf4W', 'W4egb3y', 'yCkxqmo6ea', 'BSkga8kOaa', 'CSoLa8o8W5O', 'q8o0WQldQ2y', 'zmocha', 'WQ/cHSoIW6ag', 'W7yWWR8BW74', 'dfddRcNdJG', 'W4fGWQFdLci', 'W6JcGSotoSoZ', 'W797f8o6WQm', 'W6xcQmoriSoJ', 'smokW7lcHCo3', 'W7JcMJXSWOK', 'fSkBWPKW', 'EmkxW5ZcICk5', 'smoEeM3dGW', 'WPhdVx7cRta', 'WPddNSouimkg', 'W4BdV2tcLG', 'iSoclrrL', 'v8krW4/cS8k+', 'lmoMfCkTWRe', 'W6eRcxyR', 'xmogW7/cG8oT', 'W7FdQmoeWR3cHq', 'dCkyWPf1vq', 'vCoudCoSW7W', 'thXVDW4', 'l1BcJCkJsa', 'tmogW7FcG8oS', 'W4WxdtxcIW', 'W6OQmmoqW5a', 'W4ZdLCkJoCkW', 'CeftqHi', '4lwg4lsn4lwi4lEY4lEh', 'lSoMbhGd', 'igCPdCkx', 'oNmYdmo3', 'W7mhk8ozW6q', 'WQHlkXNcNG', 'rHNdGmoatq', 'bNFdG27cUW', 'W5CofwhdNW', 'wmouhxC', 'dSkxW6m', 'W7bRWQZcQLe', 'imofwSk/WRW', 'W7yQWQ8hWQW', 'CKldT8kseG', 'C8o3WOBdKCoS', '4PAg4Ps0W5a', 'FSotW40uWOa', 'W7pcN3L8WPO', 'amkPWRzSua', 'W59WWRZdHJ8', 'u8khfW', 'W7LRWOtdGbK', 'lmkJWOH/zW', 'WP3cU8k1vXu', 'uxbWzIy', 'q1pdLtZdOa', 'jCk4WP8', 'vmkDW4RcG8kW', 'WQy6WQ4wWRS', 'y8ougmoUW6e', 'WOtcUCoCW4WW', 'WOZdLLNcTa', 'hmkvWOm7BW', 'jheNsCoG', 'p3efmmk0', 'ngpdPmozBG', 'u8kzW48', 'f8kXwSoYja', 'D8oCWO4', 'umoPWOhdVmoV', 'xSojeCkOaW', 'zmokWOxdGSo2', '4Oc04Ocs4Ock4Ocy4Ogi', 'W6BdTSolWOlcJq', 'WR7cHSoQW6az', 'WRVcNSo/W7Sr', 'WQpdGKtcSmoc', 'imkOqa', 'vmo2W5C7', 'oCk+ACk4W7e', 'FSoaW6tcImoV', 'WPVcL8oEp8os', 'WRZcHSo3E8kX', 'vNBdVCk5bW', 'rMLKmZu', 'yq0qdCod', 'WRLremoSW6i', 'W6RcGgvLWPq', 'W7z7qSoRW78', 'WPRcRCoKW7W9', 'Bmk9WQ9fW4K', 'hgldKYhdOq', 'WOTMW4u4yW', 'W4tdISkRWRrF', 'WPbWcqNcLG', 'wZ4cnmo8', 'mCoNmmojW5a', '4lsZ4ls74lAG4lEdW5e', 'jNaR', 'u8kgaCkYgq', 'ybxcHCoZga', 'WRRcGSoIW7Oy', 'WP/dK8oDkSoi', 'vZZcNmol', 'EmoCWPldI2O', '4Oo64Ocx4OgR4Og24OoK', 's8k7WOHmW6m', '4Okz4OcZ4Oo24OkL4OgX', 'WPNGT7dGTilGTjJGTRm', 'WQGFiNxcIG', 'vSkWumoGyq', 'WP7dK8oxnG', 'WR/dV8o1WPKt', 'aSkPE8kHW6W', 'W4ldHSoqWO3cNG', 'w8ojWQpdOf0', 'ErdcH8otga', 'nvqrjmku', 'WQ3dL8oVlCkK', 'bM5Db8om', 'WRvFna3cNa', 'xtiPWOi4', 'iSoMgxzf', 'W4NdK8k7kSkO', 'WRJcV8osW7y4', '4Ogf4OcP4Ok84Oki4OcZ', 'W7JdHCkQ', 'WPHZdKFdHq', 'wCodW7RcHCoO', 'rZJcIcldPG', 'WQ3dIHC2ua', 'W67cNmoIW7aA', 'ldxcP8oJCW', 'tCk1WP5xW4q', 'dmocdhNdIG', 'w8kMg8k6Aa', 'f8k2v8kOBW', 'W54jW6ldHZa', 'qetdSCkPWOO', 'CdW0WRmV', 'y8o4eSozW70', 'WOFcRmkZFsC', 'W6XTWOu', 'WPBdMmoEcSoQ', 'AmoKgJne', 'W6D9fSoYW6G', 'W5RdUvtcQcy', 'W5ekahNcGa', 'WOFdOs0gyq', 'W5aWlG', 'W4jkWPlcOL0', 'mSoIeGX7', 'W4qMggBcQq', 'W4mRlLy/', 'q8k5mwXv', 'W6rCWRBdNY8', 'WRFcHCo+W6ak', 'rCo2WOtdJNe', 'rNz0yti', 'umkNr8oona', 'ACkIumoOW60', 'CmoLW4LZEG', 'W7bDWPNdGG', 'D8owW70', 'ASk0u39P', 'DSoaWONcMmkJ', 'W58VvG3dJW', 'BhXGysa', 'xCkuW4lcK8kS', 'WPBdM8ov', 'E8o1uJ3cJq', 'WQVcRSk7Cae', 'chVdGG', 'W4JdKmo1WP3dPW', 'FSoeWOtdK8oK', 'tSoAW7hcG8kJ', 'W7RcJh56', 'bvRdIaddUG', 'WOVdHeq', 'W4NdGmoZ', 'WOddHCok', 'WR84WOmNWOS', 'ugpdKSkh', 'W6eTnv09', '4lsK4lE34lwH4lsdwG', 'WPBdLCkrlCop', '4OQ74OgG4Pss4PwJ4Psb', 'BmoMW5FcO8om', 'EmoxjgtdOW', 'cKNdPSooFG', 'kmk1aY8', '4Okv4OoI4OcA4Occ4Oo6', 'xCokW6C', 'W7ldTmoaW4i', 'BCkfW4ZdGmoQ', 'BSoyexhdJG', 'W6f7d8k+W7q', 'ACoTbtvq', 'WPDxrexdHq', 'sCkIoh99', 'wCofsbtcQW', 'dokwQokuO+kvJokaUq', 'nSofd8o9WQi', '4lAkjSouWOtcQG', 'W5ldHmoMWPVcGq', 'WQCSuSoU', 'EmovwCo4W7S', 'AqeC', 'WPhdM8oc', 'dSkVWPj3Fq', 'WPRdIG4/tW', 'WOCUWR8qWQC', 'WOXPgu7cRW', 'va4fWQeP', 'acfOsmki', 'WQ4kiq', 'WQDUaG', 'i8kPWPvoFq', 'W4BdJMxcNG8', 'WPvEbuZcVG', 'WRNcG8kxAYq', 'W73dG8k8iW', 'iVcWSi4', '4OcA4Ok64OgYWQ3cVW', 'WQ/dO2xcJSoU', 'uCokW6O', 'rNxdP+c1MEc3Qa', '4Oc84Ooj4Oc44Okd4Ogk', 'qGBdMSovuW', 'bYKHyJy', 'r2tdK8of', 'wtGY', 'uhHL', 'WPr0WOO8Aq', 'gmozvmk3gq', 'e1lcG8kbwW', 'W6fDWPpdIJC', 'WPBdUCoblmoL', 'W6BcLvKGvG', 'W7xdOmkKm8kt', 'amk9r8kGW40', 'W7ejW6VdSZO', 'trSYWPOn', 'W6vbff7cKW', 'W5FcI8kbD8kw', 'WQikjLdcUW', 'W7uWnmoNW5a', 'CSoFWP/dJui', 'WQGymrhcPq', 'lbimg8kj', 'aSokiqjj', '4PwU4Psn4Psw4PAW4PsB', 'W4JdJmoHWP/cRW', 'fmkFWPOYDW', 'CvtdPCkBWPG', 'u8kzW4/dH8oK', 'WQDEWRxcPui', 'WRNdGa0ytq', 'v3tdHmkeWQW', 'W4nGbmoUW50', 'xtzNzI0', 'rCkiemoMwW', 'W50oW6/dRbu', 'Amk9oSktpG', 'vZiO', 'DmobW5ddHCo2', 'y8osWOldJv4', 'W4FdPSonsfy', 'FmocW6SDWRC', 'W7dcNxK', 'qSk9b31Y', 'W5mgvhJcGa', 'W7P4b8onW7q', 'v8ovW4pcG8of', 'WP/cVCkDxrK', 'pCkJrSoOW6W', 'smokW6pcISo6', 'W71ZqSo/W7G', 'WRiloq', '4P6RW5BdHwVdOq', 'vwpdGSkVWR8', '4lEE4lw64ls74lsJ4lE1', 'W4yTkSo9W5K', 'z0qtfSon', 'W4/dVMtcOq', 'lNddOr7dTG', 'ySk3bhj3', 'r8k6WO5DW6q', 'W7xdT8k/oCkQ', 'b8kmzCkdW6a', 'WPf2W5m', 'w8ojomoyW5i', 'BSoEW7WlWOa', 'egP0W5a7', 'WRNcHCohW640', 'W5NdN8odpCoj', 'W5DKWPNcGhq', 'WO/cK8k0W4JcUG', 'W4RdQNVcOce', 'p8oUgbHI', 'A8knAZq', 'DSoBWPNcMuy', 'wCooW6FcG8oK', '4Ogb4Oob4OoT4OcD4OcF', 'ySkEja', 'W4Csh1tcRG', 'W7CvWPBdIWm', 'WQeKqSoVW7G', 'W4nGWPpcMf8', 'W7ZcS/cZLytVUBK', 'WOhcI/c/LyO', 'WRTMbvFcKG', 'WQ3dH8k6lSkZ', 'ESomqXhcLq', 'FSkSW6u', 'f8kHuSo8ja', 'WOhcUmoIW5uV', 'WR7cI8o/W6aA', 'WO7dKLZcVCod', 'i8oMhtHp', 't2XYEW', 'WRnfmGtcQa', 'z8oyhCoOW7O', 'WRBdHaO', 'WRmwaehcRa', 'ftNINkKz4Pwb', 'pCkEumk8W4S', '4Oct4Ok84Oks4Og34Ooi', 'WOVdGNpcQSoS', 'CSokW4NcICos', 'EmoxWOldMCoX', 'x8khgmkVaG', 'ACkUgNH+', 'WP7cOSoFW54M', 'lSoNsI9x', 'jmo5a8kZWRy', 'x8k74PwN4R+4WO8', 'pLhdJsZdGq', 'vSk9WO5zW7q', 'WPFdHfu', 'uNddSW', 'vMNdGCkfWRi', 'WRBdJaPXrq', 'zmothmkTW6a', 'W4GcgNhcQq', 'W6Kdvc/dJW', 'W7NdN8k7j8kK', 'pmkFWOa0AG', 'WPDqWQJcUGK', 'WR3dQ8otWP5w', 'rCkxW57cK8kG', 'WOzDmbVcUG', 'gNpdIsRdGG', 'WQZdUmoeWOit', 'gmkVq8k8', 'W63cJh9TWRW', 'xmoefMS', '8lIWLo+4NG', 'FmkGmmkdiW', 'WQVdISo/W7WA', 'zg7dGSk4WOK', '8jkGV++4Va', 'WQ3dKqS4tq', 'BSkgf8kZaq', 'rCkNq8oKoa', 'WRzGbbVcGa', 'W4OwgNhcHG', 'WRurpwJcIW', 'wCocaa', 'FmoiWPu', 'o8oygW', 'pCkIv8kKW7W', 'rSkWFmohbq', 'WQiYm1tcMW', 'WO0qhwVcTq', 'W6hdK8kHlmk1', 's8ovqHNcIq', 'WRO5WPKbWRK', 'uNZdS8kVnG', 'ugXLm+c2GW', 'nSodW7WiW6m', 'ggVdS8ogDW', 'WP4yaeFcIq', 'r8kQWPmCW6u', 'utjMWOiI', 'WPJdKYaJAa', 'W6zRWQ3dRaK', 'gmkVq8oTjG', 'WRddLmohlSok', 'W7WmawhcKa', 'o8opaSkP', 'cK3dLmo2vq', 'osjJe8or', 'W5xdVe/cIHe', 'wdqQWOuL', 'WOLUi0JcNq', 'W7VdGM7cIcu', 'jmo9cWLw', 'BSofuHhcJW', 'oCobe8kEWRi', 'WQJdOmoaWPm', 'sCkooLK7', 'W5f4fq/cHG', 'oMW1bCo3', 'mmk/tSk4WQO', 'iuWgg8k9', 'CJyrjCoA', 'iSkVW4zWEW', 'nSofd8kPWQa', 'AbddV8o0ta', 'fmk2uSoQfW', 'hgtdLsVdQW', 'uHSXWRCk', 'WQu+WRqgWPm', 'iSkzWOn1EW', 'W75nWPpdGJe', 'tCofuG', 'CCoeWRKsWQW', 'W6BcG8oeoq', 'hmkzWOVcNSk6', 'qwpdGG', 'a8oMhtHp', 'W57dUxtcOq', 'W43cO8o3gq', 'EdaDmCod', 'FSkysCoPW6rbCKG9fSokWP9zW5W', 'WPBdM8ovB8oF', 'FCkvDmo/jq', 'WR/dIraLwG', 'W6BcHCowlW', 'wYqRWPqX', 'xwJdKCkyW74', 'bNRdPmkGjG', '4OoP4Ok84Oc74Oot4OkM', 'F8o1CGFcPW', 'W5hcGmovn8o1', 'w3zVzWi', 'ewSZg8k7', 'aCkSySk8W7O', 'WQKypf3cRW', 'wW8DjSoT', 'wM52wa0', 'A8kCemkVaW', 'W4tdMmk5kSkT', 'Bqiso8o/', 'rmk1WOXLW70', 'imktWReHuG', 'W7BcHeDkWOe', 'n8oAW6Li', 'BComgcrm', 'W5BdM0xcGWC', 'w0FdNSkbWQW', 'W7mdchOd', 'fYxcV8oZaW', 'W7JdGSkmiCk3', 'cgpdGYFdOa', 'rmkmWOryW5i', 'g8o/W5XnW6u', 'e8kFWO0', 'thWHDI0', 'WPuZW4yPAG', 'lxJdJSoeEG', 'W6JdHCk8kSkM', 'dhBdUCowAG', 'WPBdNKtcTmoi', 'u8k6WO9u', 'WO3cSCkwgam', 'wCo7iwVdUq', 'AeTswIy', 'lSkIrCkX', 'WRLAb8o7W6K', 'gxiHaCkY', 'W48Bf3pcPW', 'W7LAbmoVW78', 'W48cW6hdPGW', '4OkU4Ogj4Ogj4Oc44OgA', 'Cqelg8oR', 'AvbICbO', 'WO3dLLtdUmkC', 'WOlcGCkoxZe', 'W7X1bG', 'WQxcUCorW5uE', 'r0RdKSopuW', 'tbJdIG', 'AmoEeM3dGW', 'ChZdTmkJWQK', 'xCkvW44', 'WQ7cUCkrW5DC', 'D8kThgH+', 'EmkxW4JcKSk4', 'WOm1WR8AWQ4', 'r2FdMSkcWQO', 'WQRdRq88zq', 'imkQgfddJa', 'W4ZdRNNcRrG', 'WORcHCo8W7Ot', 'y8oucCoHW6W', 'uNddTmk3', 'WQrdcvJcVW', 'CXyhWOW8', 'eSogpIDS', 'u2VdKW', 'lSoLdWvA', 'W5hdGmo0WOZcRW', 'ACoXc8oI', 'z8k6WO5DW6q', 'WQNdSqSMBW', 'mNCZaCk1', 'WRn1fa/cJG', '4Pws4PskB+kvVEk9KG', 'cCoWdsnn', 'W5xdHmoZWOW', 'CLfmAGO', 'qhRdTCoJmG', '4Ok04Oka4OcC4Ooc4OgE', 'CSkSr8oTmW', 'nSoAW6Li', 'wmkmfCkLga', 'eZKWpxi', 'mfG3lmkR', 'a2xdHmo6CW', '4Okj4Ogj4Ogw4Oky4Ok+', 'tmkHW5i', 'WQHMf0i', 'W5CgfxBcKq', 'W5ZcGgv7WPa', 'nCoaW57dKCkT', 'EmoadmoOWRu', 'keVdM8oMvG', 'WPerWOilWRG', 'wSkVW7/cHmk7', 'lmofeJvR', '8jgXKU+6Na', 'imkkcSkXWRq', 'W7HXgW', 'vWpdH8ontW', 'WRn1qSoOW6W', 'WQdcJCkRW7uk', 'WPvFjK7cJq', '4OcT4OcE4Okm4Ooi4Ogy', 'D8odW6amWQy', 'y8o4bM53', 'WRRdIH43yq', 'qCk1mvjR', 'wCkkW6JcHSkM', 'FSoEwCoVW7W', 'W7yNjCoN', 'u8ojg8k0ta', 'WPRdQHWNtW', 'hsvmaCos', 'W7ZGT4hGTAhGTRBGTBu', 'kmk+r8kHW7y', 'oCodh8kQWQy', 'BCoinxRdTW', 'W79zWO0', 'lSoge8kPWQW', 'B8oaWOddMSo6', 'WPVcSCkywWi', '4OgZ4OoX4Oo/4OgE4Oci', 'sCkAW44', 'BSohWRhdVCo7', 'p1FdRqFdNq', 'WQT3j27cJq', 'xmoaW6hcI8kJ', 'W754WPNdGxe', 'ECkfWOpdG8oH', 'WRVcMSoNW7SE', 'W5tcHvLXaW', 'wJiXWO4N', 'W5Wxb0O', 'bmkCWObDza', 'WQCUWRuwWRS', 'BbZdTSoWwa', 'ugNdKSks', 'W4awe8ogW6C', 'EmokWOpcLSoL', 'W60WdSo2W5K', 'imoShH9n', 'FwhdVCk/WRa', 'hZnxuGK', 'tmkUWPGCWQi', 'zmoYbLFdGG', 'feGFamk8', 'eSkxWRLCW6m', 'W67cNSoj', 'WO4ZW5WLyG', 'hgtdIW', 'WR1DlJO', 'W7JcJ8oAomoZ', 'n8oJWPNdMSoM', 'BCofW7u', 'lxpdKY/dPG', '4lAt4lsI4lAL4lEm4lAy', 'uCkQWP1yW5y', 'WQymmvJcSW', 'WO8nWOGvWPy', 'WP7dN8ofbSoi', 'fv9OFYy', 'W65SW5ZcH2G', 'WRCIWOuwWRS', 'rCoyW53cJSkX', 'eSopWPNcL8o1', 'dCkDsCk4W7O', 'uwNdMmkFWR8', 'dhNdLga', 'D8kXwNzs', 'pmkLt8kHW7C', 'tIG1WOG', 'W5emiwxcLq', 'DSkaW4dcQmk2', 'wJG1WOm', 'yfRdImkxfG', 'tSkab8k2aa', 'vSoiW4aLiW', 'stWVWPqn', 'yJj/gq', 'W7FcHCoum8oP', 'pCopg8k+WQe', 'uwNdHmko', 'EHRdVSotAW', 'WRmOWQKdWRK', 'W63cJgu', 'raldICoKyW', 'WQXXA8kJW4u', 'iCoGbIjg', 'qSoKlxBdPq', 'W5hdQZFdS38', 'WO8ZghdcHa', 'awpdTcJdNW', 'W5qTW7FdJaS', 'rmoUW5y', 'WOtcLCk9DZ0', 'W4/dK2xcNdC', 'W7nrWPFdIq8', 'W4KomwxcTa', 'DCk9eM54', 'WPrNW4i', 'W6bBWPu', 'uSkXqmoPjG', 'sCkkW4C', 'WOL2W54', 'W5WsW6VdOX4', 'gCo1aCk4mq', 'W6qWmSo+WPu', 'peFdLSoGta', 'W7NcPSobdSoh', 'W47dHmk3eSkY', 'WQpdHCo4W7Cn', 'j03dMq', 'k8ofdCkZWRK', 'oSoEd8k/WRa', 'WPBdImoi', 'W6KNja', 'ua/dNCofzW', 'W7aJkCo6W5O', 'z8ozbJnc', 'W4ldGmo0WP3cRq', 'm8oLd2Wj', 'xg/dH8kEWRS', 'uhZdO8kMpa', '4PAg4Psl4PAk4PsY4PAo', 'g1ldM8oSwq', 'WPxdGx7cRmoE', 'zmopvb3cHW', 'gSoFW7/cH8o3', 'W5bSWOBcKva', 'EuXnDIe', 'W4aXmvi2', 'fMSalSk7', 'WOBcUSkvqq', 'iSoMsInr', 'W4xcG8ohomoQ', 'x8oKW7xcG8oe', '4Oc34OoZ4OkG4OoS4OoE', 'E8okW5ZcIXC', 'W4TIjmoKW7u', 'W7hcIhuPWOG', 'W7pcICoaoSo/', 'WPRcSCkxxdS', 'WOJcUCkC', 'W4BcONDFWR0', 'W6HPWPJdGtq', 'FxqUdCk/', 'WRO+WRyhWRa', 'hM5XhCoq', 'xgBdQ8k6hq', 'hmkcWQiaEq', 'wCkkWORdJq', 'r3xdKW', '4Ooe4Oce4Og64OcW4Oo8', 'smo2e0/dPG', 'W6CohNZcSq', 'FSoqhCkTW6m', 'WRJcICoSW6CV', 'WP95gs/cPW', '8jUvNVc7HQdXJAEbWQVWLyw8', 'x8oCW6dcH8oK', 'zCkFW4e', 'WRhdIX5X', 'WQBdMeFcTSob', '4OcN4Ok64OgU4Oci4OkK', 'dCo+W4WeW6a', 'A8osW7CyWO4', 'W6jnWO7dHG', 'jCkjsCoDWRu', 'y8k2eG', 'W7eWj8oYW5a', 'zCoHW6hIGRlIGkW', '4OoX4Ocy4OkH4Ogh4Ocn', 'D8oChSoPW5S', 'v8kRW5lcICk2', 'W5eTihhcQq', 's8ofemoJW6W', 'xSoubgFdQq', 'WPJdMCoAyCkg', 'uXeRWOOO', 'ACowW5ddKmoS', 'WPvHW5m', 'WPn/W48FFW', 'qNRdQCk3eG', 'WQJdSmoeWPOt', 'DmotWRfoW6O', 'WPLYW54Pyq', 'iw8MhCo0', 'as91', 'r8kagG', 'bmkxfaddHG', 'W6fHWPdcHgK', 'FmolWOtcLSo3', 'pCkRWO9IuG', 'fNa1bSkO', 'W4ZdRNNcRqu', 'tSopur7cIG', 'W4mkghdcIW', 'W6nTWPpcKG', 'FCkfaCkdoG', 'WQWCla', 'WPr/fblcNq', 'lCkKvmkMW7u', 'WRnRWQBcOLm', 'hmkqbGhcKW', 'o8k/WOLICq', 'WQVdLWS0rW', 'C8kKvSoVfq', 'vWmZnmoA', 'kSofwSkOWQC', 'W6BcMfXrWRm', 'ihJdKs/dOW', '4PEs4Pss4Psn4PEd4PEL', 'W6vFhv7cLG', 'jSk5hxG7', 'W5tdJ8oPWONcVW', 'W7NcLSk5iSkL', 'D8o/W6eqWO4', 'W7FdICo0WQVcNq', 'wCkwW4O', 'o8kUu8kKW7G', 'xmosW60DWQO', 't8oRqbxcOq', 'WQGymrhdRW', 'W6tdOpc9POnF', 'cEkFQIyNW7a', 'B2hcP8kNpa', 'WQFcJSkRW6Ck', 'pmkJWOjZna', 'p8kIrW', 'WPL4WOq', 'W4JcTmkzwa', 'ttGrWQm7', 'WPT/W4mTDq', 'wCkmgSkIlG', 'fhldOmo2qG', 'w1HaEc0', 'taVdLW', 'y8kHhMHH', 'W7BdNmocWOqz', 'AvNdSSkYeq', 'xmo3WRRdKCoQ', 'ESocW60iWQW', 'rmouWRZdLCoV', 'dCkkWPG6yG', 'xCoWWPNdHUkcIa', 'WRqVWRq', 'WQVdKqWZrG', '8l2XPpcQGO3WSiop8j2XSSo1', 'jSkHhgLV', 'WOddISouB8oq', 'W4Cgvoc3LEc0Va', 'W5y2i0Cc', 'BmoAWPZdKfm', 'smk9W47cJSkH', 'vWxdV8oosq', '4OoI4OoF4OoY4OcZ4Og9', 'oKVdG8oVxq', 'WR/dIbW', 'W4qxtJxcLq', 't2XXyYy', 'E8ohaeZdRG', 'vIGvWOyB', 'W44gdq', 'F8omW73cSCoL', 'WPBcK8kWWQJdQG', 'W4WMyKaK', 'W6jEWPxcHwi', 'WPTWW4fIjG', 'WQ/XHPkW8kIYQpcFKkZWVRoq', 'W4KaW6ZdTHW', 'WRldKbC9Aa', 'WO4+l3NcJq', 'q8oIrCoHjq', 'lSkZWRaqta', 'sGBdLSoYuW', 'lmkjWO4aCa', 'W6hdMCkO', 'WORdJSodjSoi', 'ESouaa', 'W4uubmo+W78', 'W5BcHqpcSmokkCkdWPJdOG', 'WQqmWRaHWRm', 'WOuHi0C0', 'rJCHrJa', 'W7ukjvyL', 'AXajgSoj', 'BCkGW5XpW7u', 'W4ZdGmoW', 'z8o6e8oWWQK', 'F8owW7m2WQW', 'oSkUtCkSW5q', 'wqCtWPms', 'WQZcJCkXvZi', 'WPBdL8krnSoj', '4lEq4lEE4lEu4lA14lsy', 'WQVdLXu', 'rHJdGCoowa', 'W7W0o3y/', 'tConWOZdK0y', 'rCohWOhdI04', 'WR7cUmo/W44m', 'pYiZemkQ', 'phddLZtdNW', 'AXaega', 'WR58W50IAG', '4Ocj4Ok14OoG4OkY4OcS', 'bCkebmoY', 'weP2xJi', 't8kgvmkZhG', 'WQRcHCo8W7Ot', '8k6LIpcJTlFXIiAz8k2MPFcRLRi', 'W4ldKulcT8oa', 'W4ixffCY', 'h3/dGYVdOa', 'xeNdJ8kzWPm', 'WQyvpexcPq', 'vHCFkSoA', 'k8khWPzEwG', 'WP3dK8oEB8ow', 'bJX/', 'W7NdHfJcNra', 'iCoGbd9q', 'CerexSkd', '4Pw24Pwf4PEx4PAt4Psd', '4Ocw4OkU4Oo74Ok94Oki', 'WQtcUSoSW58Q', '4R+QWPftW5NdVa', 'hGSpWQqo', 'FmoDagldNa', 'WPlcL8kWWOG', 'vCo/luhdMG', 'CMK1mXm', 'WPFdLLZcSCoz', 'hSk8WQuTua', 'e8kLWPnIyq', 'W4SeW7NdOq0', 'nmknW5lcJb7dMINcTIRcJmoZbdO', 'WPikWQKMWR0', 'W7xcJgG', 'xSojdM7dPW', 'WP9YccFcQW', 'wCojamk/ha', 'x8oDW6hcICoX', 'zXDfcCoa', '4lAx4lAG4Ok+4lsA4lAs4lAJ4lsy', 'W60JoCkZW4W', 'xNrK', 'm8oSghzc', 'WQVcHCkRW6en', 'WQnJuvJcHq', 'WQ80WQ8wWQS', 'pSo9dJOo', 'WQtcU8o8W5Gm', 'n8ookSk5WRi', 'fchcT8kZ', 'WPddNSouimov', 'WP5Ugq', 'tSoIr8oNyq', 'DxpdS8kzWRm', 'ifFdTmoNqG', 'u8kzeq', 'WOildudcUG', '4OcO4OgH4Ok44OkQ4OcH', 'WOz0bq/cIG', '4lAf4lwq4lwDnK0', 'W47dRwlcId4', 'iSkhsCoDWRu', 'WP0lewJcRW', 'dgtdLshdVq', 'W6NdMvNcQa8', 'y8k7b3L/', 'vwhdTCkQpq', 'W47dUCkcbSka', 'W7Chm8o3W4q', 'ACkVvSk6W7a', 'iSoNWOv+Fq', 'W7G9quS', 'xSkmdmkY', 'WRnilIJcVq', 'h8kNhCoVBW', 'WO1MoeJcOq', 'WRhdH3hcK8o8', '8k63TFcWPzVWK5ArW6ZINzK', 'nmkP4lEC4lAz4lA/', 'WPNdPISMBW', 'hmkLrSkWW6K', 'W7/dHmkQl8o7', 'vc0HoSoM', 'sSk8WOG', 'ECocW70vWQW', 'DCoucSoU', 'W5aLnvJcGq', 'xZeVWPqY', 'W6RcICoj', 'hdPfgmou', '8jE0I/cGLkZWPPwn8kMNNFcKHjq', 'W43cGCo0WOhcUG', '4Okm4Ocd4Oo34OoQ4Ocm', 'qq/dL8on', 'FCoKgSoyW7C', 'yuFdQmkjpa', 'gCo8fKRdL8ojda', 'cNFdKYVdQa', 'CYJWRQEB77Uv', 'tSkQWO5FW7G', 'ACkJtmk7W60', 'txXXFZO', 'n8of4P2uWPBdLW', '4Oc54Ocn4Ok94OoG4Oov', 'w2lcLSknWRe', 'xdGIWOW', 'W6JcISofaCos', 'WRRdKCo7jCod', 'v8kIWQ9kW4q', 'ACoBWPi', 'ySoIWRf4', 'WO93W4mJDq', 'W4mAoh8F', 'E8kgemkjfa', '4lAY4lEqWPpdKKu', 'rCobqG', 'h2H0CI8', 'WQPgW54FqW', 'FgLssWu', '8j2YLSol', 'WQiKnmo/W5a', 'W7/dK8kUkmk1', 'mCkzWQ0FqG', 'WQXNee8', 'W7tdOXa9rG', 'WQNcJ8o/W5Kq', 'iSodf8k4WQe', 'D8kDbvzk', 'omoHW5a4WOy', 'WQZcJ8kL', 'nSkeWQ8mW6m', 'WOOdlwxcRW', 'W719e8oRW6G', 'W40jW73cOG8', 'W7aGjh7cJG', 'amoWa8oyyq', 'u8oDW4OgWRO', 'u8k6WRzmW7G', 'sCojqaNdHG', 'yCohcSoP', 'mUc0J+c0VLZGTzK', 'WQ1O4P2yW4ft', 'WRddNdmgEW', 'W7RdOCkUeCkt', 'vNXS', 'W6Lel8onW58', '4Ogm4Okc4OgH4OgD4OcO', 'tSoPW53cOmov', 'WOddUNRcKCoA', 'iCoQcq', 'F8oYW78ZWQe', 'WQhcJCofmSoV', 'Fmo6W4zNyq', 'vgHhqGa', 'CmonzqRcSq', 'W5ddM2xcPYC', 'WPrttcxcTq', 'pmk5tW', 'ssZcJw4', 'WOWkWQ4vWPC', 'EmowWOpdL8oK', 'EdSUWQiQ', 'oCk+umkG', 'W4NdMCk4jCkT', 'is1fcSoi', 'CCotW7WtW6m', 'tCojqaK', 'CfZdG8kgha', 'aWVcK8oyrq', 'hSktWPGWBq', 'WQrQcbu', 'c8kFBCkDW4S', 'W50eW6S', 'q2ldTmkJCW', 'W6ZcOCkaW5yh', 'wtXNq8k6', 'd1VdP8o6ya', 'sCokW4XLCW', 'cdDzbSoh', 'W6HvWR7dUt4', 'z8kaWQTYW5W', 'vWldHSomsa', 'iSoQhG', 'omobW7ayWQy', 'tSkUWPjyW5W', '8lsbQVcTSk7WQycO8l+JUVcCOki', 'WOVcMmo5W7Sn', 'pmopg8kVWRy', 'rCobqLdcLq', 'bmkHsSkbW7O', 'k8khWQfcxa', 'lCkIumk4W7u', 'zKqHhSoD', 'W47cGhTDWRK', 'WQqiW53dNW8', 'DHyhjSor', 'qmkxpeHE', 'WPxdN8oDkSoi', 'CWBdLSoawq', 'ymoa8yA0Gtq', '4ls/4lAq4lAg4lEH4lEL', 'qMFdGSkFWRS', 'vCkMWPHzW78', 'W5ldLCoYWPhcPa', 'DCoEdSoJW7K', 'F8owwCo9W7O', 'WOddJSoc', 'W6fXeSoYW7q', 'kbH1bCok', 'CCknFmoCba', '4OcO4Ooe4Oo34Oc34OkB', 'W6LNdSoNW4m', 'WQb9uwJcKG', 'W4JcGwvAWQy', 'hgSic8kY', 'yFc3SA/XIOo38korNVcJSyy', 'WRJcG8oUW6mm', 'W68Jm8o3W7K', 'W77cMq84rW', 'Dmo4hh94', 'WRddQSkqWPae', 'W6e8rWVcHW', 'vCozW7RcGSoM', 'r8kRWR9tW70', 'ccbYlCox', 'W4RdImoKWQZcOq', 'wCoPgmogW7i', 'tSo+W505WOW', 'W791g8o8W6W', 'F8k+w2etBghdJJCqjSo2W5G', 'emkAWR9Mvq', 'WPbqW6Sbtq', 'WOiMsL0', 'AXuqgSkj', 'WRKE8kE2ICkT', 'WR7cGmo/g8oH', 'ASk2W6/cGmkM', 'jCkNa8kRW6S', 'tSopsatcPW', 'bNhdSSkXoG', 'ACokW7/cG8oG', 'uCkQWP1FW6q', 'W6v9bSo7W6i', 'yWGmhSoA', 'kSkxWOa', 'WPP5gvpdJW', 'W7iYW7FcKfO', 'DGWax8oC', '4lE34lsnwUc1PEc0Ja', 'W5RdUgtcQdi', 'W5mMW4RdHd4', 'ASk/WPr6nq', 'AmoxWPW', 'W7S0a8oWW6K', 'fSoGdXrZ', 'ECoBW7WVWRC', 'kCkRWPjZCW', 'qSoXW601WQS', 'WRRcG8o/W7GA', 'pLFdHmoR', 'qgpdL8kiWQO', 'WOnWxG', 'W7C4qaZdH8ozW6qsaMqcW4i7', 'iSkPgszg', 'u2FdQW', '8yo3Hpc3TPtWNlwnWRNWK5s6', 'wYxcN3ZcTH7cRSkEW4BdGfazW4O', 'W6VcR8oXg8on', 'W7BcKhvEWOq', 'oSozhW', 'xSkMvSoNyq', 'WQiwjH8', 'vriammoO', 'xmo3W6BcP8oj', 'FSooW54', 'WPBdKKJcRa', 'WPxcKCkGWONcVW', 'B8koWRj7', 'xSoubgddMW', 'us8/', 'tmojsHxcIa', 'WQ/cHSoUW4Cl', 'WPKxW7hdPHW', 'uUkEOSkwWQ/cQW', 'omklW68vWQC', 'WPZcK8ksttm', 'WOTvWQJdKLK', 'ANZdQCkOCW', 'sSoycwBdGq', 'W7D7fCoWW6e', 'tSoaWPhdHmoG', 'ttGY', 'CSoqdCoOW7i', 'W43dUuhcKY8', 'qSkSx8oHlW', 'WPCvmfdcRW', 'xCopW5SFWPS', 'pmopfmk5WPG', 'WQWTWP0UWO4', 'hSkvWPSHzG', 'hmkoW4lcG8kW', 'WPzAW40BrW', 'ySkaWQzpW4y', 'jCkKWOe2', 'FSkjgMX5', 'W696a1FdLG', 'sCojWRJdJSo5', 'cSkFfCkQbq', 'swpdLslcRG', 'pmoEcmk0WRS', 'wCkqW5/cSSks', 'WPi0WQ0mWRi', 'WRnzi1JcUa', 'dCkuWPG8Bq', 'W6vjgfFcKG', 'W67cI8kRW60q', 'WQqYWRqf', 'W4ZdRMm', 'ra/dH8oSrq', '4lAn4lwy4lE5WQJGT7W', 'u1ldO8kDWRG', 'j8kUWPW8Ca', 'WO3cUc/dU2ZdOmkCtuJcLMldRNG', 'wCkmvmkJaG', 'vHJdNW', 'WRJdSmoFW5yg', 'W43cQZBdQh8', 'WOZcU8kkfG', 'W4L8aCohW70', 'D8omWOC', 'WOTQbvRcNG', 'WRX9c1RcKG', 'W5P3W58+BW', 'v8k7kMv9', 'tNndvWK', 'imkkfSk4WRK', 'lCkKtCk8W5G', 'W5eTf0mH', 'W7ZcJhvL', 'W4xdHmoZ', 'l8kPWPj5zG', 'W5fkWOxdTWK', 'WQ/dVmowWPu9', 'W7WmeLpcGG', 'W6zCWPRcRu8', 't8kkamkPhG', 'qCoqc2FdOW', 'l8kpD8kcW40', 'vJW1', 'zCkzjNbp', 'W4OeW7BdPJq', 'FSoqhq', 'kmoVqsXR', 'WR5jcHdcLW', 'WRVcMCoIW5yA', 'wSoyawBdGa', 'W5CgWRJdSHy', 'f8kpWOaGyq', 'WQVcUCo/W6yA', 'CmoeWP7dKSop', 'W5NdNuhcHbS', 'vYBdHSkzWRe', 'WOv3gNtcLa', 'WPJdJCo2c8os', 'BmkxW78vWQ0', 'WOL2W4qOsW', 'W6j6WR/cGhq', 'vNtdS8k3nG', 'CmoxWOxdNG', 'W7VdN8kRlSkU', 'wCo2W5FcJCoV', 'W7fzWO3dMHm', 'WPhcMSohjSoc', 'W5ddVNNcVq', 'W5abp2tcNW', 'WRhdI1C', 'WOH2W5OGzW', 'y8kEohTA', 'WQxcH8kavtW', 'm8ksW4lcHSoZ', '4Oc14Ogw4Ogn4OoR4Oga', 'jSk5wG', 'i8kAB8kPW74', 'hdXQ', 's8oouI/cKW', 'WRC2WR8', 'yCklD8ondG', 'WReqmvtcSW', '4Ocj4OgV4OgU4Og04OkI', 'bmo0a8oyyq', 'WR0+WQm/', 'W6JdL8k7iSkU', '4OgI4OcD4OkS4Ogf4Oke', 'W7S8qf3dJW', 'xwNcLSkjWRC', 'nCoScZvx', 'mCovdmo/W7W', 'wCoFcwRdGq', 'W4fvWO/dVI8', 'vhX4', 'WPq8eW3cIG', 'kmoOdNys', 'W5xdHmoYW5JcQW', 'uXNdSmooAa', 'WQJdJb00ta', 'WPVcSCkjva8', 'omkVWPz6Bq', 'dCoBg8k1WOm', 'WROmWOmPWRa', 'WQ/cN8oVW70q', 'utW/bCoX', 'rmknWQrkW7C', 'wCodcq', 'fmoQeXjn', 'oCkVWOHYwq', 'DWyax8o/', 'kSozcCk8WRi', 'W6GpW4ldLWG', 'oSkJWRnAFa', 'oKFdHCkJwq', 'jSk+gNb+', 'yLpdGSk4WPS', 'r8oPtZ3cLa', 'kmkwWPe0Ca', 'lmk4umkPW74', 'WPDvWQddSLK', 'W4BcQ2hcOde', 'WRuCjv3cVq', 'uNddV8k3', 'hSktWPGHzG', 'W4RdUxS', 'W5tdH8kdkmkT', 'W58ZmhtcVW', 't8otvrhcGq', 'z8onWPJdMea', 'iCkDWQXzBG', 'W4hdT8kbda', 'WPhdVmodWOux', 'WOeEaL7cNq', 'lSkLWOHIvq', 'DCoyfSkTW6u', 'sSkrW4/cGSo1', 'WQJdSCovW5ya', 'WPSVphtcOq', 'g3pdHI3dUW', 'WPrYW4mG', 'dd11e8of', 'DCovoSoIW7G', 'W5XmW7pdPWa', 'B8oBd8k4WQC', 'v8kxWRf0W5W', 'hcbVa8ox', 'pCowWPNdJmoM', 'gZzTh8oQ', 'sCkiamkJcW', 'WQHPahdcOG', 'iwCMcSkU', 'tSoSe8oDmG', 'xcKOW4aQ', 'WRdcHge9', 'bc9OfSoU', 'jSogh8o8W78', 'W79Tl8oiW4a', 'WQiwDutcRG', 'nokuSokuLUkwSokuMW', 'WOPMW5KK', 'tSovp2tdTW', 'ESoaWOtdV8oT', 'B8ood8kVWRW', 'W43cR1jdWOm', 'rCkgvmkKbq', 'CmkGzSoccq', 'W6lcLSk/j8kG', 'WR96aLm', 'lmkwfNL/', 'vmoyW53cJSkX', 'qHpdRmovtW', 'd1hdIYVdMq', 'fmkbrxldMG', 'zmofdCoIW7S', 'BmoLW7lcJ8oY', 'f0/dPmkXhZTs', 'WRVcMmoN', 'mfbvl8kj', 'tmojsbNcLq', 'B8kai8kYWQa', 'x8oBdSozW7G', 'sSowWRZdT8o2', 'W5bdW4yPzW', 'W7raoSoDW7S', 'mSoRisDz', 'texdOmkibG', 'nNe0cmk9', 'aCksWQ0rra', 'WPxdR8osgSoe', 'W5ddJCozWPNcMq', 'WOrUda', 'W4WhvhpcIG', 'WRO0WR0', 'rCoGm8oUW78', 'WQFcMCo/', 'ecfZbSox', 'WOhdLKtcVCok', 'BCk9cG', 'vHNdLG', 'W4DZdmoBW6e', 'W5pdOmobWPFcRG', 'W77dJaPXvW', 'rfldVCkrWPy', 'DXCa', 'sxNdHc3dUG', 'ASoTWO7dMKG', 'W6GuW7ldTsK', 'wZNdTSocCW', 'BIBdGSoRrG', 'D8oCWOBdKfm', 'DCohWQ0', 'W5SvW4ldPtC', 'pCkYu8kT', 'WRj1WRNcJIm', 'qSkWxW', 'ESoqWQFdKN8', 'cghdOSk3CW', 'vxddQCkNeq', 'W4uKuc3dJW', 'A19Jrse', 'WRBdL8ogWPSC', 'igCPdCkk', 'WR3dLCogiCok', 'zq0dbG', 'WPBdM8ovB8ku', 'hCkI4P6xWQGv', 'WQ/cK+kwSUk8Jvy', 'dgxdLc/dQa', 'u8olW7BcICkJ', 'CWhdNCoBwW', 'W47dGmoKW5JdVG', 'vmoNdNVdVq', 'W77dK8kHl8km', 'zCo7W7VcJ8oW', 'W6arbNRcLW', 'W6bDWPZdIJW', 'gCoAWOeNBW', 'W4iRjeO', '4lw14lEovdtdJW', 'W47dGmoK', 'qcBcL8okW7q', 'WRm6WQ4lWRe', 'W6TNWPS', 'C8obW6xcH8oV', 'EJiXWO4N', '4lwv4lA04lEl4lEPW5K', 'WRxdNmkqj8oZ', 'n8oGWOldHmoS', 'W5CTnwFcGG', 'dSktWPeIqa', 'tmk8WPKCW7e', 'WOBdOxBcRSoj', 'WQ3cNSoIW7Sr', 'z8kRahv8', 'wCk3rCoYla', 'W4z6b8oMW70', 'p8kfqCo9WRu', 'qCowWOtdLLq', 'WOFILRtIVlrRW6S', 'CHewfW', 'W5elaxJcHW', 'B8ojW57cMmkP', 'u3H4Csi', 'gSo5W5RcOSog', 'aNpdNHm', 'W53cOxXzWP8', 'DSoEc8o0', 'WQtcSCkksXC', 'W5T2e8oeW54', 'wCofrWlcHq', 'W5XsWORdUHC', 'vmoAW4v7mG', 'WPxdK8ovB8ot', 'W5CzW5ldHYG', 'c8koWOy8Bq', 'WQRcHq84rW', 'nSo7jrLN', 'aCkzWQumrW', 'wSk/WPKCW6y', 'WOvWbuFdHq', 'cSkdtSkyW7C', 'WRldM1xcUCoE', 'W6JcImovoCo1', 'W6RcHKr5WOe', 'gSoAfSkYWRq', 'smkxW77cL8kL', 'utWIW4b/', 'W6zKWPxcLx4', 'urJdPCo7ua', 'rWW2oCoe', 'W4BdSmkHlmko', 'WPZdLCocyq', 'ASk8WO9YCq', 'dCkDWQpcLG', 'ESouamkJ', 'r8omWPNdLLu', 'WOhGTAhGTzNGTyNdQG', 'WR/dJpcZKRpcPL4', 'hNNdIa/dGq', 'g3pdLYldRG', 'pCkUw8k8', 'W7aKW5ZdJLK', '4OoY4OkX4Ok64Oge4OkT', 'WQq+WRSbWQO', 'mSoGq0W7', 'WRNdIGSO', 'sCkrfMBdGW', 'f1JcGmojtrxdSxhcMW', 'tSokW6VcKG', 'jwSJdmk1', 'xSoaW73cKSoc', 'WQilj17cRG', 'rIn2rG', 'W6rrWPNdIXu', 'WPtdOaGPqG', 'F8o+W40uWQy', 't8kDW58', 'cxpdOmoACG', 'W6HNW5ZcG24', 'WP3dICkrpmoj', 'WQFIN511z8k1', '4lw44lsm4lws4lwj4lsa', 'W5ldHmo0', 'ECoqcG', 'W5JcNNz/WRC', 'Dmk9a3bI', 'gmoohmkFWOa', 'b0ZdGCoIva', 'tGxdHCoitW', 'W5yggNhcQa', 'smkIdmkikq', 'WOBcTCkDgeu', 'imkXWPidtW', 'WQZdPflcR8o4', 'D8oeW7XCWQi', 'WRhdHb1Xfa', 'xhFdSCkiWRm', 'z8o/g8k4WRK', 'W7CRl8o2W4W', 'WQu+W7OsWQW', 'tr3dVCorFq', 'u3XVDdC', 'EmogWRJdT8oo', 'WQmPWRy', 'WPtdRmoZWRhcSGbs', '4R26W4ZcMGldRW', 'iCoEpJvn', 'WPFdNCkrlSot', 'WQhcOCoSW4a6', 'k0GagCkB', '4P65WOxcTmodW7e', 'WR3dHa00ra', 'WPX8W4u4yW', 'W7v9dSo7W6m', 'W5nrWO/dLZe', 'uCkGWPeCW6K', 'AComWOtdMSoM', 'WRX5eW7cJG', 'F8oFW5FcH8oT', '4Ocn4Oot4Og44Ocx4Ocq', 'WOJdRd0uBa', 'hdxcGmkBW74', 'u8opuWtcKW', 'AtCCeCok', 'rSk8WO9DW7C', 'iSomoCkEWOi', 'WRuCnflcQa', 'msDqpSoK', '4Psd4OcG4OMz4Ogl4PAk', 'WP59bf3cMW', 'W5tcUCo9m8oa', 'WPbXbq', 'ws7cL27dVG', 'qCkmdq', 'wmoaW7FcNW', 'xxtdPCkoWRi', 'oSk/WPv+', 'W5fQcrNcIG', 'W5vpWRpcQwe', 'tmkkWPrEW6C', 'W4qtewC', 'DmoccSoSW7i', 'W67cJmoKW6ys', '8kouRVgaLOlWNAwL8y2LS8kb', 'WO1PnhNcNG', 'oeVdK8oMvW', 'W5mkehdcIG', 'awxdKSossG', 'W5JcO8ohgCoK', 'x8oIg8o6W4a', 'WPRcSCkn', 'WR9xWO3dMHm', 'WRFdVmoj', 'W5znWO/dJW4', 'hCkUWP5sDq', 'WRZdISkQWRvv', 'WPTnfZhcNa', 'rmkob8oMcG', 'hSkqbGhcKW', 'WQPFiNtcMG', 'ACkVeL1F', 'c8kaCokxN8o1', 'W6DXgSoQ', 'g8kEWQXgFW', 'tq3cK8oaxW', 'sCkzW4FcJSkH', 'jSoLaYjA', 'W5bSWPpdLd8', '4Ogc4Ooa4OcO4Ood4Oks', 'E8ovhuFdJG', 'WPdcOmkkzW', 'WRq+WOW', 'rmo/lCoSW7a', 'nCkPs3Cj', 'WOvHc0lcJW', 'iCkGWPmEvG', 'W5BIL6NIL6dILQBIGzq', 'W7BdH8ojWOdcIa', 'WRHUWPtdIW0', 'B8oRfLFdHW', 'W73cGIS', 'jmopaW', '4Okg4Ok94Ooe4Oga4Ook', 'h+c2Poc2T+c3Ngm', 'WRbGa8o8W5S', 'W7BdJ8ozWPmb', 'WP8bWRq3WRu', 'bmous2tcGq', 'eg9YW5a7', 'W7aroLFcQa', 'wN01WPuP', 'rwFdOSkIjW', 'WQ4unfBcUq', 'q1JdGIVdQW', 'W7JdJSo1WOZcVW', 'W6JcGhvSWP4', 'gYT1b8oo', 'wx/dU8kBWPC', 'EHRcH8oZ', 'qhZdQ8kMpq', 'FSoqhCkTWQi', 'h8kFWOatDG', 'wCoBW7lcUCo2', 'WPRcJCoLW5et', 'WQP/W48TDq', 'h8o9ecXp', 'WOrVbq', 'WR52W54TBW', 'rUkCS8kN8y2MTFcIL6a', 'i2S3da', 'pgmJ', 'A2tdN8kUWQ0', 'bxFdNM7dLa', 'g1/dQX3dGW', '4lAb4lwJ4lEu4lEjWO8', 'WQhcLCoFi8oY', 'WRXQh1/cUG', 'W6Oko3FcJq', 'E2JdGmkkWRi', 'bwtdMCoKDW', 'W4pdJSoKWOe', 'gwddNmozAa', 'dmkvW5qXBa', 'm/c0G6xWSlkH8ykHGVgkG78', 'rCovuGxcHa', 'W4nvnmoVW4a', 'jWXwaCoX', 'nmo9gd9n', 'u8kzW4/dH8oM', 'W6xcG8ohomoQ', 'dmoyfIpdMW', 'ySklu8kT', 'W69PWO8', 'kmoOdNyu', 'W7aNpmoWW4e', 'cCklamkOpW', 'WRBcOmomW6q+', '4Oov4OkU4OgY4OgA4OcO', 'W5FdImoKWP3cPq', 'WQhdKmogp8oI', 'xSkltYm', 'WRSCWPqaWO8', 'wSovvrG', 'nMeZ', 'C8oFWPldNCox', 'W7CyWO7dNH8', 'dCkwWPa7ja', 'W7Xsjmo3W5C', 'v8oJW7ZcQmoX', 'ASosW7GFWRC', 'fspcT8ktCW', 'wY41WOeS', 'DSkTahq', 'WO52W5i4', 'omkMW5G', 'ttKGmMK', 'WRbYFCoIW4a', 'mSoTaZKd', 'dhxdKYVdQW', 'WQPGaHVcKq', 'WPv4iXlcGG', 'jKVdKmoRxq', 'n8o8kCktWOu', 'WPeriwlcIW', 'sxbLDIW', 'W5egdge', 'q8kWcCoMnq', 'j3fNd8k1', '8yIXMo+5TG', 'thb7DG', 'taVdL8kbgq', 'WPCyW6ZdSvK', 'pmk4rG', 'WQRdSdqtEG', 'sCkDWRfVW6e', 'WOVcQ/c/L6/dQG', 'Bryix+c0Ua', 'hx/dKYldQG', 'BSopur7cIG', 'DmosdCkTW7q', 'tSk+ofn3', 'jmoOhJne', 'qNpdHCkd', 'x8ossG', 'qSoqdg8', 'xSokW6dcHq', 'WPauWPu2WPS', 'W7aNlCo/W4W', 'W5qIWPP0DG', 'W5ZdKLpcOJK', 'WQuwmuG', 'B8kOnw1r', 'rSojqLdcKW', 'C2yYg8kZ', '4PEx4PwMW7BIL6pIV7W', 'WQBdTqGGvq', '4lwlW4ZGTBpGTORGTlW', 'WQdcV8odW6e1', 'W7dcKufHuW', 'WPRdM8ofkSob', 'WOZcHCkasZa', 'WOVdN8oqlmos', 'W5tcH2TWWOK', 'W5JcGCo0WPFdQG', 'iCklWRG2BW', 'oZLUe8og', 'cUc1N+c2U+c1MUc3Gq', 'W5mRjLy+', 'fmocW7ZcKmoQ', 'AmkrfSo/WRu', 'hCkjWOC0za', 'W7xcGCoPi8oU', 'DCkgWRH5W58', 'rSobxXxcLa', 'CSk9c2G', 'W5mmfxiA', 'ffCOpCkJ', 'W7hcGmorl8oK', 'WPFdLxVcQCox', '4Oox4Oks4Ok74Oo94Og9', 'WPpdRJG9va', 'yaebeW', 'CmoBWORdMLm', 'mmkKzSkgW7W', 'w8kCg8kYcq', 'WRBdHeRcJCoE', 'WOBcPSka', 'wMTZFde', 'buGMamkR', 'smkCWOvsW7m', 'W6SMFCoMW5S', 'W53dU8k7gmkM', 'WR/dStuEuG', 'rCkBdq', 'WRhdHb1XwG', '4Oc34OoZ4OkG4OoSW7u', 'pSkpWOn/ya', 'W7vDWOK', '4PE14PsmFG', 'WRjEWPtdGH8', 'gCkZWQucya', 'tg1ZEI0', 'WO3dTCoWdSox', 'WQfWbrZcNa', 'WOhdImoZW5JcVG', 'nSoTobfn', 'jvFdQqK', 'WO/dK8ovkSoj', 'oKulo8kE', 'WPdcK8kZW4ZdU1evFg3cP3JcNupdMa', 'f8k0wSoSja', 'W5xdHmo4WOW', 'WQZdRmodWP4', 'xMldM8khWRe', 'WOrVnI3cOW', 'lLZdVYFdQq', 'B3VdSCkIpW', 'rCoDWORdTLm', 'iupdK8kJcq', 'acPJhCor', 'WPRdLSo/WQiZ', 'bexdVCoGyq', 'qxBdOmkiWRu', 'WOhdGmkGWOhcPq', 'WQWVlCkN', 'nSoyWOVdH8o1', 'W4xdQgdcIbG', 'tWVdISodsW', 'WRpdUmouW5yp', 'WRxdT8otWPOd', 'vN1KFgm', 'qgpdHSkhWR8', 'oCo6fSkLWRm', '4Oom4OgY4OgE4Oc64Oox', '4lwe4lw/wtnc', 'BCk1rSo/gW', 'n8oag8kOWOu', 'W6SMomo8W4y', 'zCkrd8oKW7e', 'W7HXlSoCW7W', 'WRVcUmkA', 'w3X1CIO', 'WQaYWR4hWRe', 'nCoUq2W', 'jSkQr8oOWQ0', 'W4tdSSo0WORcRW', '4OUq4Ooi4PEB4PEe4PsV', 'WQLGaXVcLG', 'W5pdHmoHWPVcVG', 'WQ56fvlcMa', 'vMddJCkZoW', 'AmowW60iWQy', 'aSkZtmk+W78', 'Cmk4amkXjq', 's8osW7GoWQa', 'W7qeW6VdSrG', 'WOpdMutdUmoz', 'FmoqWPtdN8oS', 'W5/cJNXtWQm', 'WOX6W44PAq', 'WRiwWP4lWRO', 'W5DwWONdIWG', '4P2vpdyuWOO', 'wJL1EYy', 'W6/dKCk4dCkW', 'wmoLW4pcKmoo', 't8oDW78', 'WR/dTCoFWOut', 'p1Oah8kT', 'rNz0zZy', 'b0Sudmky', 'W67cIgv9WPq', 'uq/dG8onuW', 'BCk0ymoVeq', 'WRJcRCkUDJ0', 'k8oMtmk4W60', 'omoVc8kQWRe', 'tXWrcSoe', 'cCkDdmkYoq', 'pSoQWPb/Ca', 'gxFdKZRdQG', 'WPJdQJyfzG', 'rSkCWOHoW7u', 'W63cQhXtWQu', 'tCoDdhFdLG', 'jSo4Esi7', 'gCoyqSo/xSkyzuSDWRhdKMRdTG', 'W5VdPgdcPZK', 'W7zdemo3W7K', 'W7r8WPNcHsC', '4Oky4OcF4OgP4Okv4Okg', 'W4ldLHdcRSom', 'bMpdItO', 'eSk9WQytra', 'W7v6WPNcHt0', 'W5tcUNH7WPW', 'r8oWm8oeW4C', 'WPddJmovcmox', 'k8k/WOjLEW', 'W4zUeSowW64', '4lA04lAR4lE54lEsWOK', 'W6NcIhH9WRC', 'z8kLWPzIFq', 'jSooh8kYWQy', 'W4VdSCoNWRpcNW', 'WRDTgLtcNG', 'x8kBga', '4OkU4OgO4Og/4OcE4OoU', 'be8blCk8', 'emoQW6hcLmoS', 'W7fkBatdPqGiW55LWPlcO8oNgq', 'W6zDWOxdMG', 'WQC5WOKQWRG', 'W4ldT8oSWPpcUq', 'WQdcHSk4gdS', 'vg/dMSkoWRa', 'hJOJWPrR', 'W7ldR8ozWPjw', 'W5yNlfCC', 'sCoMf2RdMW', 'W7D7dmoQW4W', 'WPj9fbJcIa', 'p8k4WPrZCa', 'W4ZdPhNcRIy', 'WP1gW7WOzq', 'zSoQW5C4jq', 'w3xdGG', 'lCk5WQq+Aa', 'W4aJnLO+', 'dCkUv8kPW7a', 'W7e7aCoXW6a', 'ymoefSo5W7a', 'tatcNq', 'zKddLmk9WRW', 'W5BcGGddRSkyymkQWP7dGK/cSSkn', 'o3e3bmky', 'WPZcOmknvXG', 'ySkr4lEp4lwc4lsj', 'W48KjLpcOG', 'omkVWOD1ya', 'imoxvmoSda', 'W6jNWO/dJW', 'WPDvWQdcSGK', 'hJq1W4a/', 'FmoyW7CiWOi', '4Ps54Oc04OQ54OgS4PEF', 'W4e3hxtcJq', 'W7njDudcQq', 'nokvN+k+VCoayq', 'WRxdTGa/qa', '4OkY4OgQ4Okt4Okj4OgY', 'xY8LWOHR', 'W5ysW7FILQXA', '4OkQ4OkQ4Okl4OoZ4Oob', 'WRPUhvlcGW', 'WQBdUmo9WQec', 'paldMmoGwW', 'W6zrWONdGH8', 'W7hcJCoeiSoJ', 'pCkdWRiqDa', 'smokW6pcISoI', 'vCoBWRpcGmoS', 'leFcL+c1G+c3Oq', 'cvFdSSoXvq', 'WPZcTSkYsqW', 't8kDW4xcG8ky', 'WOvLbMNcUG', 'WRnRW6ucyq', 'rW7dSmoorW', 'W5zxWORdGby', 'W4KKfmoBW7e', 'W5f6eHlcGG', 'W4ZcHGddOmkD', '8jwXNE+4Qq', 'w3jjCIi', 'Ew/dOmkYWP8', 'WOL6W4qRAG', 't8kgb8oO', 'wSooWQBdOva', 'W5CTlXmO', 'WORcImoTW7Oi', 'd3/dIYVdOq', 'FCojW7JcRSoK', 'smoFgSomW68', 'yCk4WRj5W4y', 'WPP5gq', 'tWOFWRei', 'De5sArO', 'FSkrdmo9W7K', '8jAsL/cKGj3WTQkg8koYGSoh', 'FCo7eSoCW4i', 'hJeJWOWU', 'W70eW6ZdOXa', 'CmovqcJcPW', 'rYi9fmo9', 'sCocfMldIa', 'A8osW7GoWQa', 'WRVdVmoeWR8y', 'W4KuW6VdQG', 'k8opcCk+', 'a8k5WPvyW7u', 'WR/cHSoVoSk0', 'W5arga', 'uColWPhdJe4', 'DCkiymogcq', 'zCoeg8oOWRu', 'amkQWOuKDq', 'vhddPSkGjW', 'j2C/hq', 'WQiNl8oHW5O', 'sCokW7lcLmoG', 'nCoSgJPA', 'rCkkwSo9W7u', '4OcH4OkR4OcT4Og74OoT', 'aNpdNG', 'evRcK8oqxW', 'W4CNjL8', 'zSokWOpcMuG', 'WQjseWZcNG', 'A8kYa1PD', 's8ovuHJcIq', 'BSoEW70zWQW', 'W61HWRRcJwq', 'bmkqamk1ta', 'EY4SfmoC', 'rCkiemoMfq', 'W5asWRJdQHy', 'W7hdJ0JcNqW', 'W60WFCoaW5a', 'WPVcSCkjvbC', 'WPTNfbVcLq', 'WRisWQVdRZa', 'eCkpWRCNqG', 'c8oPlSkTWQy', 'omk+tmk8W7W', 'WRRdIHOIta', 'qCoqewddHW', 'WQ3cTSkFvGe', 'Amoffmo9WQe', 'W7aZWOPSjG', 'WRJcI8ohW6eo', 'W7qRoCo2W5O', 'W6nHeCo2', 'FaKOWPOo', '8jwJP/gcKkhWUzgk8kIrSVggKRC', 'W6bYdmoBW5G', 'rM7dG8kgWRW', 'z8oQcYjg', 'CSkXb3b+', 'eCkEWPe6Ca', 'W5SmdmosW6y', 'WRNdQSkqWOaF', 'sNtdSSkTma', 'iSo7gdLr', 'sSoAW6dcJG', 'W6fDW53dNGG', 'iCkVWP8', 'w8ocbspcLq', 'g3VdHJRcTq', 'WPtdNLxcR8oE', 'WQBdL8oaWRae', 'vwpdGG', 'woc0UEc0ShvW', 'W6mUnmoNW4W', 'jwxdRGBdUW', 'eMtdMCkFW74', 'zaZdMmoPtq', 'cSogvb/cIW', 'sSoFW7/cN8oY', 'W5fmdbJcJG', 'qGFdLG', 'B8otfCkOWQe', 'W6DOWPZcSwS', 'Dmodc8oIW6C', 'WRpdUmou', 'DCkSeML/', 'W7HNlCoyW6W', 'W40AeelcKa', 'hsDYhSoh', 'WOVdNSoAWPq4', 'uwFdGSkoWRK', 'W6BdK8k2', 'WQbJhq', 'wgLgvWi', 'imk4vW', 'cxJdT8o3', 'W7PNfG', 'EmokW5ddG8oX', 'q8knvmk1gq', 's0JdS8k4WRm', 'BCozW71s', 'rJ4KWOeA', 'W7z9WPpcLwi', 'ahxdTSooCq', 'WQ3cKmo6W6CW', 'WQVcPCkyuca', 'WQmCjLi', 'wCofuG', 'W554nSooW6i', 'ACk9sSkSW7W', 'W6iAhMFcJa', 'W7VdP8o0WRhcOG', 'B8ka8kg1R++7MG', 'B8oSWOpdNLi', 'rCosxW', 'W5JcML1pWRu', 't8oiW7VdHSo3', 'BYSEWPCG', 'q8oeqX/dHG', 'dMv2W4a6', 'rSoBWP/dMe4', 'FmoQrXNcLW', '4lAlnEc0NEc1Uoc3Qq', 'W7SJlCobW7G', 'W4xdHmoZWPS', 'emkFWPuXzG', 'W4ldNKpdUmoz', 'DMNdGCkfWRi', 'rmkGE8oVja', 'xxtdJW', 'ymoyc2JcJW', 'WPlcLWZcRSoe', 'WRddOmoFgSon', 'n8o8gt4', 'WRj1WR8', 'aKWpeCkP', 'W6XXW7O', 'g1hdKSkJta', 'W57dP37cVsW', 'W7eNm8o3W7G', 'lgtdLshdVq', 'hhldJIhcRW', 'W5v+W5OPyq', 'W67cN8ovDSoN', 'vfhdOSkFWOK', 'E8kFlmkXbW', 'rCoejNhdRG', 'WR1QefJcGW', 'xhbNAMm', 'ECofrWlcHq', 'W4aSnHmL', 'WQhcQ8oY', '4lse4lws4lAR4lEBW58', 'WOfPeXu', 'WQbUfrVcJG', 'W4RdSCkjhCku', 'cYeXyW', 'WRe+WQ4', 'dSkLWOvJEq', 'yaff4lA/4lwW', 'W4OJjHmN', 'f3avo8kq', 'WQ1QfvC', 'WOFcSmoLW4eu', 'W48iW7ZdPXy', 'DvxdGCkpWQG', 'kCkDW4ddPSkJ', 'dCkiWPG', 'WOn5ar7cMW', 'W6qMcCo7W7y', 'v3xdHCkkWRK', 'cg3dUmoxFq', 'WQ3dK8k9oCkU', 'W5bKkSoPW4q', 'WP5UmXJcGW', 'q8opsa', 'W6RdP8oUWP/cHq', 'zchdUSouAq', 'W4hINOFcOpgdLkpWP5E4', 'imoyaW', 'oYlGT5BGT7pdUG', 'WRmPWPKdWQ0', 'cs/dGCotrq', 'uSkWqCoNmW', 'WQD7WPpcJ2a', 'gNpcHYVdOq', 'zWxdHmoprG', 'W6rVW6Os', '8j+YGw92WOKs', 'a+c0J+c1Noc2JCkW', 'WRRdGtO+tG', 'ymkAWOPZDq', 'mEc0Ooc3O8kTW6a', 'w8kzW4hcRCk6', 'WR1Pk3pcKW', 'W43cISkrpSot', 'WOasWP4NWPe', 'W77dKaS9aG', 'gSktW6xcJ8oN', 'wmofvHZcNW', 'kc1fhmog', 'W5CofwhdIW', 'W6CSkCkZW4e', 'W6v9WQxcJ24', 'WRikma', 'W6bDWPZdJq4', 'cSkceCk/ta', 'W5ieW6e', 'WQ3dGbC1BG', 'jCkRWOi', 'gG1/amot', 'r8kGWOTsW7W', 'zIJdNCoICa', 'W5aXjW', 'WQ7dVmoaWPOp', 'vSkVvG', 'dLhdNqtdNW', 'W6H9WOJcLgu', 'Da0bgSog', 'WOG8fHtcIW', 'wCoNl0FdJq', 'sCkJWP1+W6y', 'WRNdOGmBCW', 'tSkDW4RcHmkH', 'WRbwW5KQta', 'iupdK8kJwq', 'W6fHWPdcLwi', 'bSo0f3hdGa', 'WRhdIru', 'WOJcU8okW6qv', 'WRzwobtcIq', 'xmkaemkJaW', 'cSottWRcGW', 't8kAb8kNcW', 'WRDhW4W/Ca', 'tCoCaa', 'WOusaxdcLW', 'kKFdHmoG', 'BmoYtItcQa', '4PYkW5fVi8kp', 'FrtcH8oZ', 'WQRcHrC0va', 'WR9ZeHdcJG', '4lwI4lED4lEa4lEXW5C', 'W7DxWO7cJHW', 'eLO9jmkz', 'dCkKvmkMW7u', 'm8kBBSkhW5y', 'WPj2WOOQAq', 'pmkJWOjZEW', 'FmkfWOBdL8oV', 'WOzYdblcJG', 'WQpdL8k6l8kY', 'D8obW7ayWQy', 'WO9d4P2Ch+kxPW', 'W7VcJCo9aCoY', 'WPX9dHK', 'W5tcR0DXcq', 'W5dcMCovjmo/', 'W7j5bW', 'W73dL8k7p8kK', 'WPZcMSosj8oj', 'pSkOWPWbtq', 'WR3dTCozWOip', 'eLRcI8krEG', 'x8ouc2FdOG', 'WOtdRCokWOWA', 'o0ZdM8oQvG', 'wmkoWPW8Ca', 'ACkQcG', 'WPOlWOGhWRS', 'qCkRv8oTlG', 'i8ogi8k4WRq', 'awnLgSol', 'D8owW71CWQ4', 'WRNdQSodWPCr', 'gYT2hSoB', 'W4xdK03cUZa', 'W7TnWR7dNdS', '4OcX4OkK4Oky4OoT4Oki', 'dSkiCCk/W5u', 'mCoGdJnm', 'W7eUW53dQZG', 'W6ZdG8kRiSkU', 'j03dMCkTga', 'WR/cGSo/g8oH', 'rSkmgSkHga', 'aX7dL8kbba', 'WOpdM1NcRmou', 'CmoCha', 'W5NGTkdGTApGT7tGTBu', 'oCodhSk4WRO', 'tSknn8kPaq', 'Cf5pxW', 'b8oRbtvl', 'AWbfcSoh', 'rCoDewBdJG', 'FmkIg8klcq', 'r8ofvbpcJG', 'WOJcUmkqta8', 'eepdSGxdOa', '4Oof4OoH4Oka4OkF4Og0', 'WONdKKK', 'a+c0J+c0RUc2HSkW', 'A8omWPtdK8oS', 'W6ePzW', 'FCoLW4VcJ8oL', 'W5/cKeHkWQC', 'xmk/f1Tu', 'bhFdLW', 'bmoDtmo2ha', 'WOVdN8oqk8oG', 'W4GuW7FdTHW', 'B8obh8kKW7u', 'W646luu3', 'WQi0nmo3W5a', 'W7yVWQGBW74', 'F0NdUCkCWOW', 'ad9Zf8kc', 'W7tdMmkS', 'smkQWOu', 'wMPYCIq', 'cctcT8o7yW', 'n2C0cG', '4OcA4Ok64OgY4Okg4OkE', 'W4OvW7NdTIO', 'W7aqetxcKq', 'swFdVG', 'z03dVCkoea', 'WQ/dS8o1cSoP', 'WPVdLWS+uq', 'vmkBD8oJlq', 'smoufMa', 'WObPdWNcIG', 'W5RcQ2tcRdK', 'W7nFWPxcI0q', 'wmo0l3tdLq', 'tmknW6hcL8k9', 'W5JcGCo2WPhcRG', 'ESkGWOLiW6u', 'WQyoeNxcQa', 'DHameCoo', 'y8ocd1ldHW', '4lEJaUc0REc0Uoc2GG', 'W7GIW6GpWR8', 'W5f5eG/cGa', 'f8oHhmklWPK', 'iLtdMSoACW', 'W6xdJSo3WPBcPG', '8yIrPo+6VW', 'wSoTWP/dGCov', 'pxtdIqxdPG', '4OgI4Ogf4Ocn4Og54OkP', 'tsaOpmoD', 'CSolWPJdKq', 'WRmOfmo3W6K', 'WOBdNL/dUmoD', 'W7frWPVdL1O', 'i8kSWQHGxq', 'WQFcJSoUW7TF', 'ACk6xcyd', 'ogmfaSkc', 'rbZcL8kPwa', 'WRNcO8kAW5y', 'W5rnlSo5W6K', 'rbW2dSoO', 'p8kWWQW8zq', 'EbijWRqo', 'W7OunSoRW6C', 'lmoSeW', 'W7NcJSoBoCoV', 'uCo8W6RcImoG', 'W7xcICocDSoN', 'amozhCk3WRq', 'W5uJnKC0', 'rZW2WRig', 'W7JdHmkJ', 'D8kzW57cHCky', 'W6H2WPJdTaK', 'ywpdL8kzWR0', 'W40jW63dRXS', 'WR9vW50Hyq', 'w8oDW7dcJSkJ', 'WQmmj1dcQa', 'WO3cRCobW5WT', 'WPhdPd0uCq', 'WPldM1hcOCop', 'yCodWRqpWQy', 'tMXUzYy', 'CZm8lSoQ', '8lUZHE+7SG', 'txddVG', 'CmkXf3L0', 'wKzYDI8', 'xmoyW64sWQ8', 'v2NdHCof', 'W73dT8kKjCkX', 'WONIN7ldMFctLPBWRPsZ', 'WQTziuJcRa', 'W695gf/cKG', 'tmk6WOHjW7i', 'WOXhhgVcMq', 'W6tcUSoNW7eE', 'WPrVeXZcIa', 'WQjQa1JcNW', 'bmomm8kvWPe', 'W7ZdPfdcUJy', 'lmkLv8oOW60', 'EYW3WOG4', 'sCosewBdIW', 'WPhdLYOOEG', 'WQ7cRmksAdC', 'WOL2WOOPAa', 'bCk6WR90Ba', 'Fw83xq', 'ctRdN8oesW', 'ddBdHcBdOa', 'W5fcWP3cIhy', 'uSoIqmo4ja', 'C3qUdCk/', 'WOhdKmoqoSo2', 'kCoZkCkzWPS', 'A8oEW6mz', 'W4RdV2lcQZa', 'rmkNxCoSda', 'W5NdQSojWRZcVW', 'WOf9faNcIG', 'WQrCcfxcLa', '4lEZ4lwK4lsgW4FGTAq', 'qSk2rSoQja', 'B8oCe8k5WRa', 'WP59ba', 'FaKi', 'WQyUWQKk', 'wmkcW7ZcLSo3', 'r3tdMG', 'ruRdH8ojtW', 'hSkfvvpcJW', 'FxeOb8k9', 'W4JdSKlcQSoc', '4P6tW6j3W70Z', 'WOddKLtcTa'];
    _0x5011 = function () {
      return _0x43d580;
    };
    return _0x5011();
  }
  _0x258d63.desc = "Search videos from youtube";
  _0x258d63.category = "search";
  _0x258d63.filename = __filename;
  cmd(_0x258d63, async (_0x2d9015, _0x4c48c0, _0x1c39c8, {
    from: _0x40646d,
    q: _0x1c4410,
    reply: _0x429a2b
  }) => {
    try {
      if (!_0x1c4410) {
        return _0x4c48c0.reply("Please specify the video you want to play. Use the format: play [unique-key]");
      }
      const _0x48a295 = _0x1c4410.match(/(\d+)\.(\d+)/);
      if (!_0x48a295) {
        return _0x4c48c0.reply("Invalid format. Please provide a valid unique key (e.g., 1.1)");
      }
      const _0x2c79b1 = parseInt(_0x48a295[1]);
      const _0x2abeaa = parseInt(_0x48a295[2]);
      const _0x4f34c4 = "yts_" + _0x2c79b1;
      if (videoSearchResults.has(_0x4f34c4)) {
        const _0x52054c = videoSearchResults.get(_0x4f34c4)[_0x2c79b1 + '.' + _0x2abeaa];
        if (_0x52054c) {
          try {
            const _0x57d52e = await ytdl.getInfo(_0x52054c);
            const _0x5bd8e7 = _0x57d52e.title || _0x57d52e.videoDetails && _0x57d52e.videoDetails.title || "N/A";
            const _0x30104f = formatUploadDate(_0x57d52e.videoDetails.uploadDate) || "N/A";
            const _0x226846 = "\n╭═════════•∞•══╮\n│⿻ *X-BYTE*\n│  *Youtube Mp4 Player* ✨\n│⿻ *Title:* " + _0x5bd8e7 + "\n│⿻ *Author:* " + (_0x57d52e.videoDetails.author.name || "N/A") + "\n│⿻ *Duration:* " + _0x57d52e.videoDetails.lengthSeconds + "s\n│⿻ *Views:* " + (_0x57d52e.videoDetails.viewCount.toLocaleString() || "N/A") + "\n│⿻ *Upload Date:* " + _0x30104f + "\n╰══•∞•═════════╯\n";
            await _0x2d9015.sendPoll(_0x40646d, _0x226846, [".audiotype " + _0x2c79b1 + '.' + _0x2abeaa, ".𝐕𝐢𝐝𝐞𝐨 " + _0x2c79b1 + '.' + _0x2abeaa, ".𝐀𝐮𝐝𝐢𝐨𝐝𝐨𝐜𝐮𝐦𝐞𝐧𝐭 " + _0x2c79b1 + '.' + _0x2abeaa, ".𝐕𝐢𝐝𝐞𝐨𝐝𝐨𝐜𝐮𝐦𝐞𝐧𝐭 " + _0x2c79b1 + '.' + _0x2abeaa]);
          } catch (_0x1522ec) {
            console.error("Error during poll creation:", _0x1522ec);
            return _0x4c48c0.reply("Unexpected error occurred during poll creation.");
          }
        } else {
          return _0x4c48c0.reply("Invalid sub-option. Please choose a valid sub-option.");
        }
      } else {
        return _0x4c48c0.reply("Invalid unique key. Please provide a valid unique key.");
      }
    } catch (_0x140860) {
      _0x429a2b("*Error !!*");
      l(_0x140860);
    }
  });
  const _0x569596 = {
    pattern: "audiotype",
    use: ".yts lelena",
    react: '🔎',
    desc: "Search videos from youtube",
    category: "search",
    filename: __filename
  };
  cmd(_0x569596, async (_0x38d8f1, _0x5ba998, _0x2f2763, {
    from: _0x5a8e0a,
    q: _0x1469ab,
    reply: _0x38f4df
  }) => {
    try {
      if (!_0x1469ab) {
        return _0x5ba998.reply("Please specify the unique key for audio playback. Use the format: audio [unique-key]");
      }
      const _0x414a7f = _0x1469ab.match(/(\d+)\.(\d+)/);
      if (!_0x414a7f) {
        return _0x5ba998.reply("Invalid format. Please provide a valid unique key (e.g., 1.1)");
      }
      const _0x4f9aac = parseInt(_0x414a7f[1]);
      const _0x420757 = parseInt(_0x414a7f[2]);
      const _0x5579c8 = "yts_" + _0x4f9aac;
      if (videoSearchResults.has(_0x5579c8)) {
        const _0x4af8e0 = videoSearchResults.get(_0x5579c8)[_0x4f9aac + '.' + _0x420757];
        if (_0x4af8e0) {
          try {
            const _0x52e43f = await ytdl.getInfo(_0x4af8e0);
            const _0x47bbb2 = _0x52e43f.videoDetails.thumbnails[0].url;
            const _0x1ab71b = _0x52e43f.title || _0x52e43f.videoDetails && _0x52e43f.videoDetails.title || "N/A";
            const _0x5bd9c4 = formatUploadDate(_0x52e43f.videoDetails.uploadDate) || "N/A";
            const _0x4d7869 = "\n╭═════════•∞•══╮\n│⿻ *X-BYTE*\n│  *Youtube Mp4 Player* ✨\n│⿻ *Title:* " + _0x1ab71b + "\n│⿻ *Author:* " + (_0x52e43f.videoDetails.author.name || "N/A") + "\n│⿻ *Duration:* " + _0x52e43f.videoDetails.lengthSeconds + "s\n│⿻ *Views:* " + (_0x52e43f.videoDetails.viewCount.toLocaleString() || "N/A") + "\n│⿻ *Upload Date:* " + _0x5bd9c4 + "\n╰══•∞•═════════╯\n";
            const _0x14879b = ytdl(_0x4af8e0, {
              'quality': "highestaudio",
              'filter': "audioonly"
            });
            const _0x282545 = await streamToBuffer(_0x14879b);
            const _0x3bd7a6 = {
              url: _0x47bbb2
            };
            const _0x3e7915 = {
              image: _0x3bd7a6,
              caption: _0x4d7869
            };
            const _0x4f0ac9 = {
              quoted: _0x5ba998
            };
            await _0x38d8f1.sendMessage(_0x5a8e0a, _0x3e7915, _0x4f0ac9);
            const _0xa212d2 = {
              audio: _0x282545,
              mimetype: "audio/mpeg"
            };
            await _0x38d8f1.sendMessage(_0x2f2763.chat, _0xa212d2);
          } catch (_0x164346) {
            console.error("Error during audio playback:", _0x164346);
            return _0x5ba998.reply("Unexpected error occurred during audio playback.");
          }
        } else {
          return _0x5ba998.reply("Invalid sub-option. Please choose a valid sub-option.");
        }
      } else {
        return _0x5ba998.reply("Invalid unique key. Please provide a valid unique key.");
      }
    } catch (_0x3b1372) {
      _0x38f4df("*Error !!*");
      l(_0x3b1372);
    }
  });
  const _0x31069c = {
    pattern: "yts",
    alias: ["ytsearch"],
    use: ".yts lelena",
    react: '🔎',
    desc: "Search videos from youtube",
    category: "search",
    filename: __filename
  };
  cmd(_0x31069c, async (_0x201b01, _0x1ae990, _0x4d86cb, {
    from: _0x2c65df,
    q: _0x1bafdd,
    reply: _0x58118e
  }) => {
    try {
      if (!_0x1bafdd) {
        return await _0x58118e("*Please enter a query to search!*");
      }
      var _0xee8a28 = await yts(_0x1bafdd);
      var _0x249a14 = '';
      _0xee8a28.videos.map(_0x20356b => {
        _0x249a14 += " *🖲️" + _0x20356b.title + "*\n🔗 " + _0x20356b.url + "\n\n";
      });
      const _0x3f2741 = {
        text: _0x249a14
      };
      const _0x322c92 = {
        quoted: _0x1ae990
      };
      await _0x201b01.sendMessage(_0x2c65df, _0x3f2741, _0x322c92);
    } catch (_0x119f3c) {
      _0x58118e("*Error !!*");
      l(_0x119f3c);
    }
  });
  if (config.COMMAND_TYPE === "button") {
    const _0x10747f = {
      pattern: "movie",
      react: "🗃️",
      desc: "Download movie in yt",
      category: "download",
      use: ".movie",
      filename: __filename
    };
    cmd(_0x10747f, async (_0x2e53c8, _0x501975, _0x23a978, {
      from: _0x5049a0,
      q: _0x2906da,
      pushname: _0x197ab8,
      reply: _0x3a1f35
    }) => {
      try {
        if (!_0x2906da) {
          return await _0x3a1f35("*Please enter a query to search!*");
        }
        var _0x6f587f = await yts(_0x2906da);
        var _0x417d5d = '';
        _0x6f587f.videos.map(_0x4a1589 => {
          _0x417d5d += " *🖲️" + _0x4a1589.title + "*\n🔗 " + _0x4a1589.url + "\n\n";
        });
        const _0x52e31c = [];
        _0x6f587f.videos.map(_0xa8f253 => {
          _0x52e31c.push({
            'header': '',
            'title': _0xa8f253.title,
            'description': " *🖲" + _0xa8f253.title + "*\n🔗 " + _0xa8f253.url + "\n\n",
            'id': ".vid " + _0xa8f253.url
          });
        });
        const _0x2cdb79 = {
          display_text: config.BTN,
          url: config.BTNURL,
          merchant_url: config.BTNURL
        };
        let _0x31642f = [{
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify(_0x2cdb79)
        }, {
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Select news types",
            'sections': [{
              'title': "Please select a category",
              'highlight_label': "X-BYTE",
              'rows': _0x52e31c
            }]
          })
        }];
        const _0x290c94 = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: "> 📥 X-BYTE YT MOVIEDL 📥\n\t MOVIE DOWNLOADER 📥"
        };
        return await _0x2e53c8.sendButtonMessage(_0x5049a0, _0x31642f, _0x23a978, _0x290c94);
      } catch (_0x386700) {
        _0x3a1f35("*Error !!*");
        console.log(_0x386700);
      }
    });
    const _0x325c9b = {
      pattern: "vid",
      use: ".video lelena",
      react: '🎥',
      desc: '',
      category: '',
      filename: __filename
    };
    cmd(_0x325c9b, async (_0x1ede6d, _0x3d594b, _0x3dff77, {
      from: _0xff9190,
      q: _0x77f54c,
      reply: _0x259a9d
    }) => {
      try {
        if (!_0x77f54c) {
          return await _0x259a9d("*Please enter a query or a url!*");
        }
        const _0x4d499d = _0x77f54c.replace(/\?si=[^&]*/, '');
        var _0x47c905 = await yts(_0x4d499d);
        var _0x328d6d = _0x47c905.videos[0];
        const _0x4df642 = "`✦ 𝗠𝗢𝗩𝗜𝗘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 ✦`\n    \n> *`➤ Title` :* " + _0x328d6d.title + "\n    \n> *`➤ Views` :* " + _0x328d6d.views + "\n    \n> *`➤ Duration` :* " + _0x328d6d.duration + "\n    \n    ";
        const _0x11765b = [];
        const _0x36ca1e = new Map();
        for (let _0x4df785 = 0; _0x4df785 < 1; _0x4df785++) {
          const _0x30eca1 = commands[_0x4df785];
          if (!_0x30eca1.dontAddCommandList && _0x30eca1.pattern !== undefined) {
            const _0x509cef = _0x30eca1.category.toUpperCase();
            if (!_0x36ca1e.has(_0x509cef)) {
              _0x11765b.push(_0x509cef);
              _0x36ca1e.set(_0x509cef, []);
            }
            _0x36ca1e.get(_0x509cef).push(_0x30eca1.pattern);
          }
        }
        const _0x31183e = [];
        for (const _0xee16dc of _0x11765b) {
          _0x31183e.push({
            'header': "Document type videos",
            'title': "240P VIDEO",
            'description': "Download 240 quality video",
            'id': ".24p " + _0x328d6d.url
          });
          _0x31183e.push({
            'header': '',
            'title': "360P VIDEO",
            'description': "Download 360 quality video",
            'id': ".36p " + _0x328d6d.url
          });
          _0x31183e.push({
            'header': '',
            'title': "480P VIDEO",
            'description': "Download 480 quality video",
            'id': ".48p " + _0x328d6d.url
          });
          _0x31183e.push({
            'header': '',
            'title': "720P VIDEO",
            'description': "Download 720 quality video",
            'id': ".72p " + _0x328d6d.url
          });
          _0x31183e.push({
            'header': '',
            'title': "1080P VIDEO",
            'description': "Download 1080 quality video",
            'id': ".108p " + _0x328d6d.url
          });
        }
        const _0x2249dc = {
          display_text: config.BTN,
          url: config.BTNURL,
          merchant_url: config.BTNURL
        };
        let _0x3f61f8 = [{
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify(_0x2249dc)
        }, {
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Document type videos",
            'sections': [{
              'title': "Please select a category",
              'highlight_label': "X-BYTE",
              'rows': _0x31183e
            }]
          })
        }];
        const _0xef58e1 = {
          image: _0x328d6d.thumbnail,
          header: '',
          footer: config.FOOTER,
          body: _0x4df642
        };
        return await _0x1ede6d.sendButtonMessage(_0xff9190, _0x3f61f8, _0x3d594b, _0xef58e1);
      } catch (_0x594f1c) {
        _0x259a9d("*Error !!*");
        l(_0x594f1c);
      }
    });
    const _0x248964 = {
      pattern: "video",
      alias: ["ytmp4"],
      use: ".video lelena",
      react: '🎥',
      desc: "Download videos from youtube",
      category: "download",
      filename: __filename
    };
    cmd(_0x248964, async (_0x5bdfbb, _0x5f5cd1, _0x2c5411, {
      from: _0x5ac959,
      q: _0xea514d,
      reply: _0x1e203d
    }) => {
      function _0x317deb(_0x5c9460, _0x5f0f4a, _0x113f68, _0x1bc5a0, _0x5eeb06) {
        return _0x3a01(_0x113f68 - 0x2b5 + 0x204, _0x5f0f4a);
      }
      const _0x245eb0 = {
        'xbkoi': function (_0x580b5d, _0x8d98b2) {
          return _0x580b5d(_0x8d98b2);
        },
        'JjwRM': function (_0x2733fa, _0x2f7e9d) {
          return _0x2733fa(_0x2f7e9d);
        },
        'lvmYK': function (_0x2a2270, _0x5ab36e) {
          return _0x2a2270(_0x5ab36e);
        },
        'xPqqv': function (_0x1bde2c, _0x4d8215) {
          return _0x1bde2c(_0x4d8215);
        },
        'jxcfB': function (_0xe9e946, _0x3a65dc) {
          return _0xe9e946(_0x3a65dc);
        },
        'rAAod': "*Bro, File size is too big!*",
        'eymtz': function (_0x29b0dd, _0x2c7950) {
          return _0x29b0dd(_0x2c7950);
        },
        'KWSzY': "error",
        'jNvmj': "finish",
        'zslyN': function (_0x2b0fe1, _0x4ad625) {
          return _0x2b0fe1(_0x4ad625);
        },
        'DCTps': "*Error !!*",
        'zASZV': function (_0x178729, _0x212c85) {
          return _0x178729(_0x212c85);
        },
        'OiObh': function (_0x3f1012, _0x488451) {
          return _0x3f1012 === _0x488451;
        },
        'DfegT': "TlHxz",
        'KjSzy': "*Please enter a query or a url!*",
        'CpSXF': function (_0x2960d9, _0x5e5210) {
          return _0x2960d9 < _0x5e5210;
        },
        'xJGpA': "ARJgi",
        'VJaiq': function (_0x2ac641, _0x12cf02) {
          return _0x2ac641 !== _0x12cf02;
        },
        'aIQWc': "CZsTh",
        'VUsrQ': function (_0x3172e7, _0x3bcca4) {
          return _0x3172e7 === _0x3bcca4;
        },
        'xnLkX': "ZTUOE",
        'oRqMj': "lbCcg",
        'lXGvw': "ErXqf",
        'MAYNt': "WdzpW",
        'rhhYW': "Normal types videos",
        'OrSyY': "240P VIDEO",
        'BqahV': "Download 240 quality video",
        'LPRee': function (_0x4012af, _0x8534da) {
          return _0x4012af + _0x8534da;
        },
        'NVfKp': ".240p ",
        'mIiMr': "360P VIDEO",
        'sefcK': "Download 360 quality video",
        'xJqXA': function (_0x1a9330, _0x554022) {
          return _0x1a9330 + _0x554022;
        },
        'xQipb': ".360p ",
        'huSfP': "480P VIDEO",
        'juVXL': "Download 480 quality video",
        'gBXvg': function (_0x4c33dd, _0x518474) {
          return _0x4c33dd + _0x518474;
        },
        'GUoTy': ".480p ",
        'BwNEV': "720P VIDEO",
        'EBnCZ': "Download 720 quality video",
        'gfqKU': function (_0x4b1228, _0x211c4e) {
          return _0x4b1228 + _0x211c4e;
        },
        'FwgvF': ".720p ",
        'QvXwk': "1080P VIDEO",
        'NBPsS': "Download 1080 quality video",
        'zPMOO': function (_0x2d8f91, _0x4891f7) {
          return _0x2d8f91 + _0x4891f7;
        },
        'TISeB': ".1080p ",
        'LsIHt': "uOOEX",
        'EyFEw': "wqdIs",
        'srzae': "Document type videos",
        'zTxNj': ".24p ",
        'pAknp': function (_0x13a1e1, _0xee5041) {
          return _0x13a1e1 + _0xee5041;
        },
        'UhsfT': ".36p ",
        'NMhiL': function (_0x4b25d5, _0x698097) {
          return _0x4b25d5 + _0x698097;
        },
        'CRSpF': ".48p ",
        'TbnKi': function (_0x66a03f, _0x481874) {
          return _0x66a03f + _0x481874;
        },
        'mjpFF': ".72p ",
        'NGFKy': function (_0x156c25, _0x388096) {
          return _0x156c25 + _0x388096;
        },
        'rTkak': ".108p ",
        'GfdZD': "cta_url",
        'jCAMK': "single_select",
        'jSCAb': "Normal type videos",
        'rxkmH': "Please select a category",
        'Dbfnw': "X-BYTE",
        'wWaZR': function (_0x1bb356, _0x56e3a3) {
          return _0x1bb356 === _0x56e3a3;
        },
        'keLBq': "KiVYA",
        'LSymJ': function (_0x4f337f, _0x18916e) {
          return _0x4f337f(_0x18916e);
        }
      };
      function _0x18c0ec(_0x119cdb, _0x4ceeee, _0x4fa2a9, _0x4ee8f1, _0x279a08) {
        return _0x3a01(_0x279a08 - 0x5c + 0x31d, _0x4ceeee);
      }
      function _0x5ff892(_0x47f67f, _0x867cb6, _0x536889, _0x172992, _0x130e95) {
        return _0x3a01(_0x536889 + 0x5e6 - 0x357, _0x47f67f);
      }
      function _0x2c42ad(_0x2e86cd, _0x5f5821, _0x592ff3, _0x30ebad, _0x19d778) {
        return _0x3a01(_0x19d778 + 0x12 - 0x30c, _0x5f5821);
      }
      function _0x12cbaf(_0x12b985, _0x21d9bb, _0x2f4579, _0x59484a, _0xefbe9a) {
        return _0x3a01(_0x59484a + 0x420 - 0x357, _0x12b985);
      }
      try {
        if (!_0xea514d) {
          return await _0x1e203d("*Please enter a query or a url!*");
        }
        const _0x35aa1d = _0xea514d.replace(/\?si=[^&]*/, '');
        var _0x21ddb5 = await yts(_0x35aa1d);
        var _0xc300b1 = _0x21ddb5.videos[0];
        const _0x379a9e = "`✦ 𝗩𝗜𝗗𝗘𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 ✦`\n    \n> *`➤ Title` :* " + _0xc300b1.title + "\n    \n> *`➤ Views` :* " + _0xc300b1.views + "\n    \n> *`➤ Duration` :* " + _0xc300b1.duration + "\n    \n> *`➤ URL` :* " + _0xc300b1.url + "\n    ";
        const _0x53649c = [];
        const _0x247141 = new Map();
        for (let _0x285a5e = 0; _0x285a5e < 1; _0x285a5e++) {
          const _0x52c0b7 = commands[_0x285a5e];
          if (!_0x52c0b7.dontAddCommandList && _0x52c0b7.pattern !== undefined) {
            const _0x479033 = _0x52c0b7.category.toUpperCase();
            if (!_0x247141.has(_0x479033)) {
              _0x53649c.push(_0x479033);
              _0x247141.set(_0x479033, []);
            }
            _0x247141.get(_0x479033).push(_0x52c0b7.pattern);
          }
        }
        const _0x2d9d67 = [];
        for (const _0x30540a of _0x53649c) {
          _0x2d9d67.push({
            'header': "Normal types videos",
            'title': "240P VIDEO",
            'description': "Download 240 quality video",
            'id': ".240p " + _0xc300b1.url
          });
          _0x2d9d67.push({
            'header': '',
            'title': "360P VIDEO",
            'description': "Download 360 quality video",
            'id': ".360p " + _0xc300b1.url
          });
          _0x2d9d67.push({
            'header': '',
            'title': "480P VIDEO",
            'description': "Download 480 quality video",
            'id': ".480p " + _0xc300b1.url
          });
          _0x2d9d67.push({
            'header': '',
            'title': "720P VIDEO",
            'description': "Download 720 quality video",
            'id': ".720p " + _0xc300b1.url
          });
          _0x2d9d67.push({
            'header': '',
            'title': "1080P VIDEO",
            'description': "Download 1080 quality video",
            'id': ".1080p " + _0xc300b1.url
          });
        }
        const _0x3b795d = [];
        for (const _0x2abca0 of _0x53649c) {
          _0x3b795d.push({
            'header': "Document type videos",
            'title': "240P VIDEO",
            'description': "Download 240 quality video",
            'id': ".24p " + _0xc300b1.url
          });
          _0x3b795d.push({
            'header': '',
            'title': "360P VIDEO",
            'description': "Download 360 quality video",
            'id': ".36p " + _0xc300b1.url
          });
          _0x3b795d.push({
            'header': '',
            'title': "480P VIDEO",
            'description': "Download 480 quality video",
            'id': ".48p " + _0xc300b1.url
          });
          _0x3b795d.push({
            'header': '',
            'title': "720P VIDEO",
            'description': "Download 720 quality video",
            'id': ".72p " + _0xc300b1.url
          });
          _0x3b795d.push({
            'header': '',
            'title': "1080P VIDEO",
            'description': "Download 1080 quality video",
            'id': ".108p " + _0xc300b1.url
          });
        }
        const _0x364324 = {
          display_text: config.BTN,
          url: config.BTNURL,
          merchant_url: config.BTNURL
        };
        let _0x39dae9 = [{
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify(_0x364324)
        }, {
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Normal type videos",
            'sections': [{
              'title': "Please select a category",
              'highlight_label': "X-BYTE",
              'rows': _0x2d9d67
            }]
          })
        }, {
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Document type videos",
            'sections': [{
              'title': "Please select a category",
              'highlight_label': "X-BYTE",
              'rows': _0x3b795d
            }]
          })
        }];
        const _0x1c2b40 = {
          image: _0xc300b1.thumbnail,
          header: '',
          footer: config.FOOTER,
          body: _0x379a9e
        };
        return await _0x5bdfbb.sendButtonMessage(_0x5ac959, _0x39dae9, _0x5f5cd1, _0x1c2b40);
      } catch (_0x3deff2) {
        _0x1e203d("*Error !!*");
        l(_0x3deff2);
      }
    });
    const _0x2be40c = {
      pattern: "yt360",
      react: '🎥',
      dontAddCommandList: true,
      filename: __filename
    };
    cmd(_0x2be40c, async (_0x207fbb, _0x3c3acb, _0x343963, {
      from: _0x140aea,
      q: _0x3ba731,
      reply: _0x131237
    }) => {
      const _0x5ab812 = {
        'qrOOD': function (_0x235d31, _0x2d04de) {
          return _0x235d31(_0x2d04de);
        },
        'ZPWuz': "*Error !!*",
        'puJph': function (_0x4b9437, _0x49c860) {
          return _0x4b9437 === _0x49c860;
        },
        'MLqJl': "sbHge",
        'fmgdN': "error",
        'eQysF': "finish",
        'dTiah': function (_0x148e76, _0x502d0e) {
          return _0x148e76(_0x502d0e);
        },
        'hydWu': function (_0x2a17a7, _0x399b76) {
          return _0x2a17a7 + _0x399b76;
        },
        'dkHaa': function (_0x5c301c, _0x5565c8) {
          return _0x5c301c + _0x5565c8;
        },
        'ZhcYp': " *🖲️",
        'SpAKQ': "*\n🔗 ",
        'vkiCg': function (_0xac9789, _0x356dd1) {
          return _0xac9789(_0x356dd1);
        },
        'KbXiu': function (_0x413a35, _0x4fe9c8) {
          return _0x413a35(_0x4fe9c8);
        },
        'lmEpQ': function (_0x26d840, _0x44dc98) {
          return _0x26d840(_0x44dc98);
        },
        'GCRwL': function (_0x3b8c15, _0x4c87a3) {
          return _0x3b8c15(_0x4c87a3);
        },
        'TgnEl': function (_0x849983, _0x456bf2) {
          return _0x849983 !== _0x456bf2;
        },
        'FfhBa': function (_0x5ca9db, _0x1e3d4a) {
          return _0x5ca9db(_0x1e3d4a);
        },
        'zXZre': "*Bro, File size is too big!*",
        'nyJWX': "neyRH",
        'HgAtc': function (_0xca63e1, _0x513ece) {
          return _0xca63e1(_0x513ece);
        },
        'lsBYn': "*Need a youtube url!*",
        'TFbVb': ".mp4",
        'yErWZ': function (_0xaf8fc5, _0x5efcb6, _0x16d4df) {
          return _0xaf8fc5(_0x5efcb6, _0x16d4df);
        },
        'YkxYD': function (_0x58d789, _0x4d71fe) {
          return _0x58d789(_0x4d71fe);
        },
        'YOwOb': "*360p quality not found please try another!*",
        'MzxTs': function (_0x1cf401, _0x573c47) {
          return _0x1cf401 / _0x573c47;
        },
        'WMFDf': function (_0x56c121, _0x248cbf) {
          return _0x56c121 * _0x248cbf;
        },
        'qfdbJ': function (_0x2e5a29, _0x294bd2) {
          return _0x2e5a29 <= _0x294bd2;
        },
        'nUHuJ': "YbiEs",
        'OsjQh': function (_0x1e8d7d, _0x3a50e1) {
          return _0x1e8d7d <= _0x3a50e1;
        },
        'pSRAp': "Eqqhs",
        'qsYYf': "EaBpN",
        'DOevl': "spVck",
        'SMCfi': "gTXCv",
        'pczzT': "video/mp4",
        'HCRDz': function (_0x2fcc54, _0x13dfed) {
          return _0x2fcc54 + _0x13dfed;
        },
        'mOmeR': function (_0x4939ee, _0x311724) {
          return _0x4939ee === _0x311724;
        },
        'rBGBT': "SmrPU",
        'ietwX': function (_0x1aa890, _0x5860f3) {
          return _0x1aa890 === _0x5860f3;
        },
        'ePSOm': "WfIxB",
        'tEJwz': "lQjnM",
        'AVswh': function (_0x38b8d4, _0x4c8f07) {
          return _0x38b8d4(_0x4c8f07);
        }
      };
      function _0x43c57d(_0x35467c, _0x47f12b, _0x5287be, _0x217071, _0xdd6257) {
        return _0x3a01(_0x217071 - 0x388 + 0x204, _0x5287be);
      }
      function _0x1346a9(_0x399cb3, _0x4a8f9b, _0x2adee9, _0x54059b, _0x45b3c9) {
        return _0x3a01(_0x45b3c9 - 0x16 + 0x31d, _0x4a8f9b);
      }
      function _0x19fc07(_0x222e2b, _0x58f009, _0x23b5a1, _0x5f1386, _0x22cd3e) {
        return _0x3a01(_0x5f1386 + 0x151 + 0x204, _0x222e2b);
      }
      function _0x56fb29(_0x100231, _0x220a14, _0x3c4ff4, _0x5e53d6, _0x39c48b) {
        return _0x3a01(_0x220a14 - 0x36c + 0x204, _0x39c48b);
      }
      function _0x4ff0f3(_0x14aae7, _0x38b600, _0x3e302a, _0xec1669, _0x2bfd05) {
        return _0x3a01(_0x3e302a - 0xdb + 0x204, _0xec1669);
      }
      try {
        if (!_0x3ba731) {
          return await _0x131237("*Need a youtube url!*");
        }
        let _0x4a787b = await ytdl.getInfo(_0x3ba731);
        let _0x3625bf = _0x4a787b.videoDetails.title;
        let _0x5515d4 = getRandom(".mp4");
        const _0x7dd441 = {
          filter: _0x584000 => _0x584000.container == "mp4" && _0x584000.itag == '18'
        };
        const _0x46db00 = ytdl(_0x3ba731, _0x7dd441).pipe(fs.createWriteStream('./' + _0x5515d4));
        await new Promise((_0x1183c3, _0x4d771d) => {
          function _0x4234c(_0x830e36, _0x1ee847, _0x2e88a1, _0x114910, _0x2c6e18) {
            return _0x3a01(_0x2c6e18 + 0x190 - 0x36c + 0x204, _0x114910);
          }
          function _0x3af2a6(_0x265c41, _0x16fed0, _0x331fed, _0x2d8d85, _0x2d665e) {
            return _0x3a01(_0x2d665e - 0x3e2 + 0x151 + 0x204, _0x331fed);
          }
          function _0x166163(_0x24d410, _0x4bedf8, _0x4bed48, _0x3fc871, _0x5acf12) {
            return _0x3a01(_0x24d410 - 0x33e + 0x151 + 0x204, _0x4bedf8);
          }
          function _0x50d201(_0x3d2636, _0x3cabd8, _0x5719de, _0x4d1287, _0x2ede4a) {
            return _0x3a01(_0x3cabd8 + 0x376 - 0x36c + 0x204, _0x3d2636);
          }
          function _0x466a8c(_0x6b1618, _0x48fca3, _0x28f9e9, _0x4f32c4, _0x1e6933) {
            return _0x3a01(_0x1e6933 - 0x44f - 0xdb + 0x204, _0x6b1618);
          }
          _0x46db00.on("error", _0x4d771d);
          _0x46db00.on("finish", _0x1183c3);
        });
        if (!_0x46db00) {
          return _0x131237("*360p quality not found please try another!*");
        }
        let _0x74f49f = fs.statSync('./' + _0x5515d4);
        let _0x1006f9 = _0x74f49f.size / 1048576;
        if (_0x1006f9 <= 1024) {
          if (_0x1006f9 <= 100) {
            const _0x44d592 = {
              quoted: _0x3c3acb
            };
            const _0x3c0d37 = await _0x207fbb.sendMessage(_0x140aea, {
              'video': fs.readFileSync('./' + _0x5515d4)
            }, _0x44d592);
            const _0x212680 = {
              text: '🎼',
              key: _0x3c0d37.key
            };
            const _0x19ff29 = {
              react: _0x212680
            };
            await _0x207fbb.sendMessage(_0x140aea, _0x19ff29);
            const _0x4f1d45 = {
              text: '✅',
              key: _0x3c3acb.key
            };
            const _0x172881 = {
              react: _0x4f1d45
            };
            await _0x207fbb.sendMessage(_0x140aea, _0x172881);
            return fs.unlinkSync('./' + _0x5515d4);
          } else {
            const _0x52b7b6 = {
              quoted: _0x3c3acb
            };
            const _0xe61297 = await _0x207fbb.sendMessage(_0x140aea, {
              'document': fs.readFileSync('./' + _0x5515d4),
              'mimetype': "video/mp4",
              'fileName': _0x3625bf + ".mp4"
            }, _0x52b7b6);
            const _0x25f7e6 = {
              text: '🎼',
              key: _0xe61297.key
            };
            const _0x2a492e = {
              react: _0x25f7e6
            };
            await _0x207fbb.sendMessage(_0x140aea, _0x2a492e);
            const _0xec74d0 = {
              text: '✅',
              key: _0x3c3acb.key
            };
            const _0x509b21 = {
              react: _0xec74d0
            };
            await _0x207fbb.sendMessage(_0x140aea, _0x509b21);
            return fs.unlinkSync('./' + _0x5515d4);
          }
        } else {
          fs.unlinkSync('./' + _0x5515d4);
          return _0x131237("*Bro, File size is too big!*");
        }
      } catch (_0x4bde4f) {
        _0x131237("*Error !!*");
        l(_0x4bde4f);
      }
    });
    const _0x21ea3e = {
      pattern: "yt720",
      react: '🎥',
      dontAddCommandList: true,
      filename: __filename
    };
    cmd(_0x21ea3e, async (_0x152700, _0x168958, _0x3af8ac, {
      from: _0xad8657,
      q: _0x421098,
      reply: _0x55b086
    }) => {
      function _0x27bc80(_0x100a2b, _0x23c935, _0x2abc48, _0x2c5eb4, _0x422cf) {
        return _0x3a01(_0x100a2b - 0xe6 + 0x204, _0x2c5eb4);
      }
      function _0x29c091(_0x3dbc1d, _0x251ca4, _0x3be42a, _0x34613c, _0x44c217) {
        return _0x3a01(_0x34613c - 0x6f7 + 0x31d, _0x44c217);
      }
      function _0x54cf59(_0x49a6f7, _0x1d632c, _0xc74542, _0x2a5d1d, _0x334c4b) {
        return _0x3a01(_0xc74542 + 0x146 - 0x30c, _0x1d632c);
      }
      function _0xc606e6(_0x4c4ea1, _0x9e6e88, _0x1e37e0, _0x1326d6, _0x43c8d2) {
        return _0x3a01(_0x43c8d2 + 0x596 - 0x357, _0x1e37e0);
      }
      function _0x30af86(_0x3be12e, _0x535d09, _0x1b8669, _0x411dc0, _0x5eb879) {
        return _0x3a01(_0x411dc0 + 0x2cd - 0x357, _0x5eb879);
      }
      const _0x5ef68b = {
        'WdfBU': "Document type videos",
        'fiHle': "240P VIDEO",
        'GRoJo': "Download 240 quality video",
        'ZFtIh': function (_0x1acbd5, _0x26830f) {
          return _0x1acbd5 + _0x26830f;
        },
        'fGleV': ".24p ",
        'AiryK': "360P VIDEO",
        'DkQMF': "Download 360 quality video",
        'vcgsP': ".36p ",
        'aTUvf': "480P VIDEO",
        'WISTz': "Download 480 quality video",
        'rrVZz': function (_0x2d3ab5, _0x5f0bc4) {
          return _0x2d3ab5 + _0x5f0bc4;
        },
        'OpYbx': ".48p ",
        'cLopd': "720P VIDEO",
        'REjEW': "Download 720 quality video",
        'psCoB': ".72p ",
        'yhYDG': "1080P VIDEO",
        'gIThe': "Download 1080 quality video",
        'cgPuT': ".108p ",
        'fWTcn': function (_0x224b89, _0x599fad) {
          return _0x224b89(_0x599fad);
        },
        'xVkxR': "*Error !!*",
        'wooAN': function (_0x40043b, _0x52074c) {
          return _0x40043b(_0x52074c);
        },
        'DrRRJ': "Invalid sub-option. Please choose a valid sub-option.",
        'ZQtwI': function (_0x274225, _0x15e8fe) {
          return _0x274225(_0x15e8fe);
        },
        'kaBkX': "*Need a youtube url!*",
        'CrxYs': function (_0x58ab8c, _0x113f64) {
          return _0x58ab8c === _0x113f64;
        },
        'qbSHf': "YWKdq",
        'pKBLO': "AyYCV",
        'iGLRD': " MB",
        'Gyjri': function (_0x1c3d54, _0x39059f) {
          return _0x1c3d54 !== _0x39059f;
        },
        'ujdIy': "IcYJA",
        'ZgdGO': function (_0x154b76, _0x2b4d7c) {
          return _0x154b76 * _0x2b4d7c;
        },
        'MHMyI': " GB",
        'JgJcY': function (_0x4043b8, _0x2aabf8) {
          return _0x4043b8 <= _0x2aabf8;
        },
        'VuuXR': function (_0x3854de, _0x133668) {
          return _0x3854de <= _0x133668;
        },
        'JIXSQ': "gEfOb",
        'zvGLP': "JEsfJ",
        'MOOwR': "ZrDYs",
        'YDTWB': "video/mp4",
        'GVYmJ': function (_0x3b9a20, _0x394263) {
          return _0x3b9a20 + _0x394263;
        },
        'mbnBg': ".mp4",
        'NgNrt': function (_0x48649f, _0x3aa7cc) {
          return _0x48649f(_0x3aa7cc);
        },
        'ECKTj': "*Bro, File size is too big!*",
        'RGOHf': function (_0x3d6fc0, _0x2539fd) {
          return _0x3d6fc0(_0x2539fd);
        }
      };
      try {
        if (!_0x421098) {
          return await _0x55b086("*Need a youtube url!*");
        }
        let _0x1ae735 = await ytdl.getInfo(_0x421098);
        let _0x24cc74 = _0x1ae735.videoDetails.title;
        const _0x455c40 = await youtube720(_0x421098);
        let _0x16ccb2 = await getsize(_0x455c40);
        if (_0x16ccb2.includes('MB')) {
          _0x16ccb2 = _0x16ccb2.replace(" MB", '');
        } else if (_0x16ccb2.includes('GB')) {
          _0x16ccb2 = _0x16ccb2.replace(" GB", '') * 1024;
        }
        if (_0x16ccb2 <= 1024) {
          if (_0x16ccb2 <= 100) {
            const _0x3558b1 = {
              url: _0x455c40
            };
            const _0x5d30a0 = {
              video: _0x3558b1
            };
            const _0x4e011a = {
              quoted: _0x168958
            };
            const _0x55138c = await _0x152700.sendMessage(_0xad8657, _0x5d30a0, _0x4e011a);
            const _0x23ace6 = {
              text: '🎼',
              key: _0x55138c.key
            };
            const _0x128c2f = {
              react: _0x23ace6
            };
            await _0x152700.sendMessage(_0xad8657, _0x128c2f);
            const _0x1fa8c2 = {
              text: '✅',
              key: _0x168958.key
            };
            const _0x5410c1 = {
              react: _0x1fa8c2
            };
            await _0x152700.sendMessage(_0xad8657, _0x5410c1);
          } else {
            const _0x2afdb8 = {
              url: _0x455c40
            };
            const _0xe90f76 = {
              quoted: _0x168958
            };
            const _0x2a35b0 = await _0x152700.sendMessage(_0xad8657, {
              'document': _0x2afdb8,
              'mimetype': "video/mp4",
              'fileName': _0x24cc74 + ".mp4"
            }, _0xe90f76);
            const _0x3604ab = {
              text: '🎼',
              key: _0x2a35b0.key
            };
            const _0x5b68b7 = {
              react: _0x3604ab
            };
            await _0x152700.sendMessage(_0xad8657, _0x5b68b7);
            const _0x1cd0ac = {
              text: '✅',
              key: _0x168958.key
            };
            const _0x54d692 = {
              react: _0x1cd0ac
            };
            await _0x152700.sendMessage(_0xad8657, _0x54d692);
          }
        } else {
          _0x55b086("*Bro, File size is too big!*");
        }
      } catch (_0x4984e4) {
        _0x55b086("*Error !!*");
        l(_0x4984e4);
      }
    });
    const _0x4724b4 = {
      pattern: "song",
      alias: ["ytmp3"],
      use: ".song lelena",
      react: '🎧',
      desc: "Download audios from youtube",
      category: "download",
      filename: __filename
    };
    cmd(_0x4724b4, async (_0x7ef149, _0x3ae818, _0x20902e, {
      from: _0x1e36d8,
      q: _0x37edf5,
      reply: _0x2c4e72
    }) => {
      function _0x5dc418(_0x882813, _0x18b0d2, _0x361394, _0x2ac837, _0x2cece3) {
        return _0x3a01(_0x882813 + 0x488 - 0x357, _0x2cece3);
      }
      function _0x2905c8(_0x5818f0, _0x49590e, _0x204383, _0x3531c7, _0x4154ad) {
        return _0x3a01(_0x4154ad + 0x6df - 0x357, _0x49590e);
      }
      function _0x5f5363(_0x401487, _0x591595, _0x207630, _0x5e2ab1, _0x258cad) {
        return _0x3a01(_0x591595 - 0x345 + 0x27a, _0x5e2ab1);
      }
      const _0x57b649 = {
        'YaUvU': function (_0x11b77c, _0x436ccc) {
          return _0x11b77c(_0x436ccc);
        },
        'vcydu': "*Please enter a query or a url!*",
        'JxkOc': function (_0x2416c8, _0x34db5b) {
          return _0x2416c8(_0x34db5b);
        },
        'GHowV': "quick_reply",
        'aijgu': "Audio",
        'uEndq': function (_0x43550c, _0x4be801) {
          return _0x43550c + _0x4be801;
        },
        'wcPKV': ".audsong ",
        'ycQYD': "Document",
        'PijTH': ".docsong ",
        'XvFzx': "*Error !!*"
      };
      function _0x255bc6(_0x382ac9, _0x578547, _0x3c4203, _0x534582, _0x23cebf) {
        return _0x3a01(_0x382ac9 + 0x716 - 0x357, _0x534582);
      }
      function _0x44d9f3(_0x435628, _0x7b3688, _0x179ab8, _0x5cdc26, _0x2c8d2a) {
        return _0x3a01(_0x179ab8 - 0x22f + 0x27a, _0x2c8d2a);
      }
      try {
        if (!_0x37edf5) {
          return await _0x2c4e72("*Please enter a query or a url!*");
        }
        const _0x22c586 = _0x37edf5.replace(/\?si=[^&]*/, '');
        var _0x475c90 = await yts(_0x22c586);
        var _0xccf38f = _0x475c90.videos[0];
        const _0x2998d8 = "`✦ 𝗦𝗢𝗡𝗚 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 ✦`\n\n> *`➤ Title` :* " + _0xccf38f.title + "\n\n> *`➤ Views` :* " + _0xccf38f.views + "\n\n> *`➤ Duration` :* " + _0xccf38f.duration + "\n\n> *`➤ URL` :* " + _0xccf38f.url + "\n";
        let _0x588d98 = [{
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "Audio",
            'id': ".audsong " + _0xccf38f.url
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "Document",
            'id': ".docsong " + _0xccf38f.url
          })
        }];
        const _0x3ae5fc = {
          image: _0xccf38f.thumbnail,
          header: '',
          footer: config.FOOTER,
          body: _0x2998d8
        };
        return await _0x7ef149.sendButtonMessage(_0x1e36d8, _0x588d98, _0x3ae818, _0x3ae5fc);
      } catch (_0x3b8674) {
        _0x2c4e72("*Error !!*");
        l(_0x3b8674);
      }
    });
    const _0x38825a = {
      pattern: "audsong",
      react: '🎧',
      dontAddCommandList: true,
      filename: __filename
    };
    cmd(_0x38825a, async (_0x429592, _0x65db8b, _0x2bbd8b, {
      from: _0x46f8a0,
      q: _0x30d674,
      reply: _0x24ac27
    }) => {
      function _0x492322(_0xf9bfcd, _0x385971, _0x5034e6, _0x174cd1, _0x2ac277) {
        return _0x3a01(_0x174cd1 - 0xdf + 0x204, _0x2ac277);
      }
      function _0x4c0194(_0x42aa4d, _0x5dd7ab, _0x16e308, _0x199b8b, _0x23160a) {
        return _0x3a01(_0x199b8b - 0xb3 - 0x30c, _0x5dd7ab);
      }
      const _0x450db5 = {
        'WRSIe': "error",
        'GYLgd': "finish",
        'ciurj': function (_0xdf68f6, _0x57cf20) {
          return _0xdf68f6(_0x57cf20);
        },
        'pbIJn': "*Need a youtube url!*",
        'utCjv': function (_0xc51bd5, _0x1c2133) {
          return _0xc51bd5(_0x1c2133);
        },
        'Rwhad': ".mp3",
        'GmBNp': function (_0x164301, _0x157cbc, _0x534214) {
          return _0x164301(_0x157cbc, _0x534214);
        },
        'UgVKs': function (_0x32221e, _0x518c80) {
          return _0x32221e / _0x518c80;
        },
        'tUMBY': function (_0x49ae7a, _0x106d77) {
          return _0x49ae7a * _0x106d77;
        },
        'BpAyf': function (_0x4e7f46, _0x5745b4) {
          return _0x4e7f46 <= _0x5745b4;
        },
        'dAAkn': "audio/mpeg",
        'vTKzH': "*Bro, File size is too big!*",
        'gzpYm': "*Error !!*"
      };
      function _0x5cd4b9(_0x3d11e8, _0x389695, _0x2987ee, _0xfb911b, _0x3214dd) {
        return _0x3a01(_0x3214dd + 0x35 + 0x204, _0x2987ee);
      }
      function _0x4d0234(_0x182670, _0x235a2a, _0x25dc70, _0x84622e, _0x554efc) {
        return _0x3a01(_0x84622e - 0xb2 + 0x27a, _0x182670);
      }
      function _0x15e787(_0x16e3a6, _0x30bf26, _0xb7c854, _0x1b9551, _0x395203) {
        return _0x3a01(_0x395203 + 0x527 - 0x30c, _0x1b9551);
      }
      try {
        if (!_0x30d674) {
          return await _0x24ac27("*Need a youtube url!*");
        }
        let _0x13f60a = await ytdl.getInfo(_0x30d674);
        let _0x2603a2 = _0x13f60a.videoDetails.title;
        let _0xb0df1a = getRandom(".mp3");
        const _0x5080ff = {
          filter: _0x31513b => _0x31513b.audioBitrate == 160 || _0x31513b.audioBitrate == 128
        };
        const _0x39fff2 = ytdl(_0x30d674, _0x5080ff).pipe(fs.createWriteStream('./' + _0xb0df1a));
        await new Promise((_0x26fee4, _0x47f027) => {
          function _0x47827f(_0x389ec0, _0x196402, _0xbe4c62, _0x576d76, _0x498169) {
            return _0x3a01(_0x498169 - 0x353 - 0xdf + 0x204, _0x576d76);
          }
          function _0x3979a7(_0x5da778, _0x34f488, _0x3813ac, _0x592430, _0x596257) {
            return _0x3a01(_0x5da778 - 0x320 - 0xb2 + 0x27a, _0x596257);
          }
          _0x39fff2.on("error", _0x47f027);
          _0x39fff2.on("finish", _0x26fee4);
        });
        let _0x5dfeff = fs.statSync('./' + _0xb0df1a);
        let _0x46f72d = _0x5dfeff.size / 1048576;
        if (_0x46f72d <= 1024) {
          const _0xab03b8 = {
            quoted: _0x65db8b
          };
          let _0xa14133 = await _0x429592.sendMessage(_0x46f8a0, {
            'audio': fs.readFileSync('./' + _0xb0df1a),
            'mimetype': "audio/mpeg",
            'fileName': _0x2603a2 + ".mp3"
          }, _0xab03b8);
          const _0xd88b2b = {
            text: '🎼',
            key: _0xa14133.key
          };
          const _0x11ed59 = {
            react: _0xd88b2b
          };
          await _0x429592.sendMessage(_0x46f8a0, _0x11ed59);
          const _0x14bff1 = {
            text: '✅',
            key: _0x65db8b.key
          };
          const _0x2b1be9 = {
            react: _0x14bff1
          };
          await _0x429592.sendMessage(_0x46f8a0, _0x2b1be9);
          return fs.unlinkSync('./' + _0xb0df1a);
        } else {
          _0x24ac27("*Bro, File size is too big!*");
        }
        fs.unlinkSync('./' + _0xb0df1a);
      } catch (_0x532c82) {
        _0x24ac27("*Error !!*");
        l(_0x532c82);
      }
    });
    const _0x11f03e = {
      pattern: "docsong",
      react: '🎧',
      dontAddCommandList: true,
      filename: __filename
    };
    cmd(_0x11f03e, async (_0x1a41fa, _0x3a0dfc, _0x76b354, {
      from: _0x2f7791,
      q: _0xf20ccd,
      reply: _0xf9a837
    }) => {
      function _0x55a100(_0x129bef, _0x2f8a8f, _0x29d2b3, _0x465301, _0x3309c0) {
        return _0x3a01(_0x3309c0 - 0x6e9 + 0x31d, _0x2f8a8f);
      }
      function _0x4dfec4(_0x3fd77c, _0x18e671, _0x247f90, _0x589443, _0x1844cc) {
        return _0x3a01(_0x18e671 - 0x248 + 0x31d, _0x247f90);
      }
      function _0x34a231(_0x29b452, _0x78fd00, _0x40fa3f, _0x5d4ec5, _0x30a5fc) {
        return _0x3a01(_0x29b452 - 0x17 - 0x357, _0x40fa3f);
      }
      function _0x25ce15(_0x2da253, _0x4212a4, _0x2e404f, _0x4a4398, _0x316954) {
        return _0x3a01(_0x4212a4 - 0x3fe + 0x204, _0x4a4398);
      }
      const _0x586445 = {
        'usiBe': "error",
        'tmYuh': "finish",
        'EcnWf': function (_0x127725, _0x45c6fe) {
          return _0x127725(_0x45c6fe);
        },
        'QieBP': "*Need a youtube url!*",
        'YZgKU': function (_0x5e5fbf, _0x3013d7) {
          return _0x5e5fbf(_0x3013d7);
        },
        'Jnzyx': ".mp3",
        'DIyAp': function (_0x3dfa17, _0x4082b2, _0x4fd640) {
          return _0x3dfa17(_0x4082b2, _0x4fd640);
        },
        'tHvmF': function (_0x645a85, _0x2f9e0c) {
          return _0x645a85 / _0x2f9e0c;
        },
        'rOYKS': function (_0x14c0cc, _0x2ded9d) {
          return _0x14c0cc * _0x2ded9d;
        },
        'yequm': function (_0x3b0a16, _0x25392a) {
          return _0x3b0a16 <= _0x25392a;
        },
        'DiKEz': "audio/mpeg",
        'QyWNK': function (_0x31c6dd, _0x4b1f21) {
          return _0x31c6dd + _0x4b1f21;
        },
        'cAUlT': "*Bro, File size is too big!*",
        'CpHwI': function (_0x436e41, _0x25a4be) {
          return _0x436e41(_0x25a4be);
        },
        'ExBcX': "*Error !!*",
        'OLuqB': function (_0x598561, _0x111b97) {
          return _0x598561(_0x111b97);
        }
      };
      function _0x118a33(_0x1fb20c, _0x30260d, _0x38f063, _0xc5cc2, _0x5a52a7) {
        return _0x3a01(_0x5a52a7 - 0x566 + 0x31d, _0x38f063);
      }
      try {
        if (!_0xf20ccd) {
          return await _0xf9a837("*Need a youtube url!*");
        }
        let _0x37f4d5 = await ytdl.getInfo(_0xf20ccd);
        let _0x49f692 = _0x37f4d5.videoDetails.title;
        let _0x248e30 = getRandom(".mp3");
        const _0x7b4764 = {
          filter: _0xe385a2 => _0xe385a2.audioBitrate == 160 || _0xe385a2.audioBitrate == 128
        };
        const _0x3534d3 = ytdl(_0xf20ccd, _0x7b4764).pipe(fs.createWriteStream('./' + _0x248e30));
        await new Promise((_0xe1ce3d, _0x587a1a) => {
          function _0x5bfdd8(_0x28e783, _0x160075, _0x49251f, _0x235f50, _0xfd602c) {
            return _0x3a01(_0xfd602c + 0x30f - 0x6e9 + 0x31d, _0x49251f);
          }
          function _0x5e0860(_0x598b64, _0x2d28b7, _0x18d404, _0x335140, _0x1a140c) {
            return _0x3a01(_0x2d28b7 + 0x732 - 0x6e9 + 0x31d, _0x18d404);
          }
          _0x3534d3.on("error", _0x587a1a);
          _0x3534d3.on("finish", _0xe1ce3d);
        });
        let _0x1eb9b1 = fs.statSync('./' + _0x248e30);
        let _0x24575a = _0x1eb9b1.size / 1048576;
        if (_0x24575a <= 1024) {
          const _0x13910c = {
            quoted: _0x3a0dfc
          };
          let _0x44ee4b = await _0x1a41fa.sendMessage(_0x2f7791, {
            'document': fs.readFileSync('./' + _0x248e30),
            'mimetype': "audio/mpeg",
            'fileName': _0x49f692 + ".mp3"
          }, _0x13910c);
          const _0x453505 = {
            text: '🎼',
            key: _0x44ee4b.key
          };
          const _0x36950f = {
            react: _0x453505
          };
          await _0x1a41fa.sendMessage(_0x2f7791, _0x36950f);
          const _0x594895 = {
            text: '✅',
            key: _0x3a0dfc.key
          };
          const _0x1adcfe = {
            react: _0x594895
          };
          await _0x1a41fa.sendMessage(_0x2f7791, _0x1adcfe);
          return fs.unlinkSync('./' + _0x248e30);
        } else {
          _0xf9a837("*Bro, File size is too big!*");
        }
        fs.unlinkSync('./' + _0x248e30);
      } catch (_0x3c5650) {
        _0xf9a837("*Error !!*");
        l(_0x3c5650);
      }
    });
    const _0x5e24e0 = {
      pattern: "240p",
      react: '🎥',
      dontAddCommandList: true,
      filename: __filename
    };
    cmd(_0x5e24e0, async (_0x167b67, _0x25d0e3, _0x5cc71e, {
      from: _0x567ad8,
      q: _0x5939b7,
      reply: _0x52e661
    }) => {
      const _0x5bc93d = {
        'eFKgA': function (_0x247b6b, _0xabb470) {
          return _0x247b6b(_0xabb470);
        },
        'PAVqM': function (_0x36f5e4, _0x58049d) {
          return _0x36f5e4(_0x58049d);
        },
        'dxVUz': "240p"
      };
      function _0x2362f4(_0x2759ac, _0x4482d8, _0x18888b, _0xee387a, _0x49c02e) {
        return _0x3a01(_0xee387a - 0xd7 + 0x204, _0x4482d8);
      }
      function _0x263d22(_0x138fba, _0x1c2357, _0x254241, _0x281812, _0x283aad) {
        return _0x3a01(_0x1c2357 + 0x351 - 0x30c, _0x138fba);
      }
      function _0x2a9a40(_0x28fb6a, _0x2c057a, _0x5212c2, _0x101ac4, _0x5e5087) {
        return _0x3a01(_0x28fb6a - 0xc0 - 0x30c, _0x2c057a);
      }
      function _0x470d1d(_0x860fd1, _0x466ea4, _0x1edc04, _0x24c20e, _0x5394dc) {
        return _0x3a01(_0x1edc04 - 0x104 + 0x204, _0x860fd1);
      }
      function _0xb67be8(_0x392944, _0x9ed29b, _0x236918, _0x3d2ac4, _0x3fd8f8) {
        return _0x3a01(_0x9ed29b - 0x2ee + 0x204, _0x3d2ac4);
      }
      try {
        if (!/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x5939b7)) {
          return await _0x52e661(urlneed);
        }
        const _0x5b7078 = await dl.youtubedl(_0x5939b7);
        let _0x416a0b = await getsize(await _0x5b7078.video["240p"].download());
        const _0x1808e8 = {
          quoted: _0x5cc71e
        };
        let _0x5eb257 = await _0x167b67.sendMessage(_0x567ad8, {
          'video': {
            'url': await _0x5b7078.video["240p"].download()
          },
          'caption': config.FOOTER
        }, _0x1808e8);
        const _0x5b2d39 = {
          text: '🎥',
          key: _0x5eb257.key
        };
        const _0x617bfd = {
          react: _0x5b2d39
        };
        await _0x167b67.sendMessage(_0x567ad8, _0x617bfd);
      } catch (_0x70318e) {
        _0x52e661(N_FOUND);
        l(_0x70318e);
      }
    });
    const _0x565e98 = {
      pattern: "360p",
      use: ".360p <video url>",
      react: "📽️",
      desc: "Download yt videos.",
      category: '',
      filename: __filename
    };
    cmd(_0x565e98, async (_0x2de9e9, _0x9c45fe, _0x88cad9, {
      from: _0x25d3e0,
      q: _0x3875e5,
      reply: _0x29c333
    }) => {
      function _0x29aac5(_0x5a5a24, _0x26595a, _0x4508cc, _0x5ccdb0, _0xedbb55) {
        return _0x3a01(_0x4508cc + 0x26 - 0x357, _0x5a5a24);
      }
      function _0x307d9a(_0x5e81f1, _0x2b67ea, _0x4af259, _0x5b8cdc, _0x509352) {
        return _0x3a01(_0x4af259 + 0x1ba - 0x357, _0x5b8cdc);
      }
      function _0x2e54ae(_0x2e49ed, _0x112c6b, _0x12cab2, _0x4802e5, _0x2f0fb7) {
        return _0x3a01(_0x4802e5 - 0x3da + 0x204, _0x2e49ed);
      }
      function _0x26dca3(_0x1cb696, _0x14e596, _0x11af9e, _0x407165, _0x2a9143) {
        return _0x3a01(_0x407165 + 0x54 + 0x31d, _0x2a9143);
      }
      const _0x37c543 = {
        'YqLcl': function (_0x24830b, _0x49bd21) {
          return _0x24830b(_0x49bd21);
        },
        'NarSd': "360p",
        'BiIsV': function (_0x2af7b4, _0x1a7071) {
          return _0x2af7b4(_0x1a7071);
        }
      };
      function _0x4fb4bc(_0x5c1ff0, _0x14b497, _0x4155d3, _0x24dc49, _0x373d2d) {
        return _0x3a01(_0x14b497 + 0x36f - 0x357, _0x24dc49);
      }
      try {
        if (!/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x3875e5)) {
          return await _0x29c333(urlneed);
        }
        const _0x14e23f = await dl.youtubedl(_0x3875e5);
        let _0x17d1a8 = await getsize(await _0x14e23f.video["360p"].download());
        const _0x5c9c79 = {
          quoted: _0x88cad9
        };
        let _0x1e3fbb = await _0x2de9e9.sendMessage(_0x25d3e0, {
          'video': {
            'url': await _0x14e23f.video["360p"].download()
          },
          'caption': config.FOOTER
        }, _0x5c9c79);
        const _0x595700 = {
          text: '🎥',
          key: _0x1e3fbb.key
        };
        const _0x8da6cc = {
          react: _0x595700
        };
        await _0x2de9e9.sendMessage(_0x25d3e0, _0x8da6cc);
      } catch (_0x4a9217) {
        _0x29c333(N_FOUND);
        l(_0x4a9217);
      }
    });
    const _0x34335c = {
      pattern: "480p",
      use: ".480p <video url>",
      react: "📽️",
      desc: "Download yt videos.",
      category: '',
      filename: __filename
    };
    cmd(_0x34335c, async (_0x5d30c1, _0x14e558, _0x1e3418, {
      from: _0x14f4e9,
      q: _0x1a5526,
      reply: _0x3bd5e4
    }) => {
      function _0x58569d(_0x4d6841, _0x5af193, _0x5b0b4b, _0x2df10c, _0x21f97c) {
        return _0x3a01(_0x21f97c + 0x1e5 - 0x357, _0x5af193);
      }
      function _0x88c40c(_0x985cd1, _0xb6ddb6, _0x18ed88, _0x3bbdc5, _0x48abfd) {
        return _0x3a01(_0xb6ddb6 - 0x392 + 0x27a, _0x18ed88);
      }
      const _0x145ded = {
        'yapRM': function (_0x5ceb17, _0xa499e8) {
          return _0x5ceb17(_0xa499e8);
        },
        'JxAUG': function (_0x2a5a4b, _0x3553b9) {
          return _0x2a5a4b(_0x3553b9);
        },
        'gGzJP': "480p",
        'tsawN': function (_0x935059, _0x3cb949) {
          return _0x935059(_0x3cb949);
        },
        'btZgN': function (_0x542ceb, _0x34d9bd) {
          return _0x542ceb(_0x34d9bd);
        }
      };
      function _0x3e3bb9(_0x14c3ec, _0x1a4eb9, _0xdeb7d, _0x36efb9, _0x4f9d3f) {
        return _0x3a01(_0x14c3ec + 0x6ab - 0x357, _0x4f9d3f);
      }
      function _0x28f197(_0x4dbec9, _0x26c8e3, _0x10b49d, _0x580edb, _0x2e8c1e) {
        return _0x3a01(_0x26c8e3 - 0x89 + 0x27a, _0x580edb);
      }
      function _0x24ce0e(_0x24adb1, _0x555a4c, _0x15b554, _0x105780, _0xb733b8) {
        return _0x3a01(_0x105780 + 0x166 + 0x27a, _0x24adb1);
      }
      try {
        if (!/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x1a5526)) {
          return await _0x3bd5e4(urlneed);
        }
        const _0x4b88aa = await dl.youtubedl(_0x1a5526);
        let _0x565ca5 = await getsize(await _0x4b88aa.video["480p"].download());
        const _0x964967 = {
          quoted: _0x1e3418
        };
        let _0x227bf9 = await _0x5d30c1.sendMessage(_0x14f4e9, {
          'video': {
            'url': await _0x4b88aa.video["480p"].download()
          },
          'caption': config.FOOTER
        }, _0x964967);
        const _0x3969ac = {
          text: '🎥',
          key: _0x227bf9.key
        };
        const _0x2154fd = {
          react: _0x3969ac
        };
        await _0x5d30c1.sendMessage(_0x14f4e9, _0x2154fd);
      } catch (_0x10074d) {
        _0x3bd5e4(N_FOUND);
        l(_0x10074d);
      }
    });
    const _0x216a2c = {
      pattern: "720p",
      use: ".720p <video url>",
      react: "📽️",
      desc: "Download yt videos.",
      category: '',
      filename: __filename
    };
    cmd(_0x216a2c, async (_0x38e6bd, _0x3ad904, _0x596de3, {
      from: _0x270122,
      q: _0x7fd481,
      reply: _0x7f793f
    }) => {
      function _0x4efd79(_0x53b0df, _0x20bb4c, _0x52c09, _0x31c8a3, _0x495b5d) {
        return _0x3a01(_0x20bb4c - 0x124 + 0x31d, _0x53b0df);
      }
      const _0x511b48 = {
        'zmCWD': function (_0x1bc5b7, _0x1e1fa8) {
          return _0x1bc5b7(_0x1e1fa8);
        },
        'UCPkk': function (_0x4c3121, _0x5053ea) {
          return _0x4c3121(_0x5053ea);
        },
        'lIgWA': "720p",
        'Mxtum': function (_0x2373c1, _0x4dea6b) {
          return _0x2373c1(_0x4dea6b);
        },
        'BmjiT': function (_0x4fd92c, _0x2e347c) {
          return _0x4fd92c(_0x2e347c);
        }
      };
      function _0x4f5706(_0x3b1be7, _0x250f3, _0x466c6e, _0x34fe73, _0x3a5c4d) {
        return _0x3a01(_0x3b1be7 - 0x17 + 0x27a, _0x3a5c4d);
      }
      function _0x4fe83d(_0x2b680a, _0x3f9f81, _0x3ac175, _0x1b1cbd, _0x55a989) {
        return _0x3a01(_0x3f9f81 - 0x17c + 0x204, _0x2b680a);
      }
      function _0x5e724c(_0x2f6e21, _0x3f9e23, _0x57c711, _0x1b3ff3, _0x55a4fa) {
        return _0x3a01(_0x57c711 - 0x39e + 0x31d, _0x1b3ff3);
      }
      function _0x4036a9(_0x5a4551, _0x551fe1, _0x587531, _0x8b688b, _0x380192) {
        return _0x3a01(_0x587531 - 0x4fb + 0x31d, _0x8b688b);
      }
      try {
        if (!/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x7fd481)) {
          return await _0x7f793f(urlneed);
        }
        const _0x279ee8 = await dl.youtubedl(_0x7fd481);
        let _0x29a272 = await getsize(await _0x279ee8.video["720p"].download());
        const _0x3d719e = {
          quoted: _0x596de3
        };
        let _0x53e2ba = await _0x38e6bd.sendMessage(_0x270122, {
          'video': {
            'url': await _0x279ee8.video["720p"].download()
          },
          'caption': config.FOOTER
        }, _0x3d719e);
        const _0x41be53 = {
          text: '🎥',
          key: _0x53e2ba.key
        };
        const _0x22ed98 = {
          react: _0x41be53
        };
        await _0x38e6bd.sendMessage(_0x270122, _0x22ed98);
      } catch (_0x5a732f) {
        _0x7f793f(N_FOUND);
        l(_0x5a732f);
      }
    });
    const _0xae6b5e = {
      pattern: "1080p",
      use: ".1080p <video url>",
      react: "📽️",
      desc: "Download yt videos.",
      category: '',
      filename: __filename
    };
    cmd(_0xae6b5e, async (_0x1a8f82, _0x2c19cc, _0x20c763, {
      from: _0x385af8,
      q: _0x4a769f,
      reply: _0x1fc805
    }) => {
      function _0xe56d61(_0x2eefc6, _0x3af5c2, _0x3b4757, _0x458eac, _0x304d7b) {
        return _0x3a01(_0x3af5c2 - 0x4ae + 0x204, _0x458eac);
      }
      function _0x2c0bb2(_0x80e00f, _0x321285, _0x5c6dc8, _0x22265f, _0x250988) {
        return _0x3a01(_0x80e00f + 0x5fa - 0x30c, _0x5c6dc8);
      }
      function _0x31ca33(_0x5de735, _0x3506be, _0x840cef, _0xb5b9ee, _0x36da35) {
        return _0x3a01(_0xb5b9ee + 0x1f5 - 0x357, _0x36da35);
      }
      const _0x1fa37a = {
        'cYDkl': function (_0x365a9b, _0x1e797e) {
          return _0x365a9b(_0x1e797e);
        },
        'OGeQr': "1080p",
        'ZufXA': function (_0x27fd88, _0x3abb8b) {
          return _0x27fd88(_0x3abb8b);
        }
      };
      function _0x3853a2(_0xf5e073, _0x252330, _0x415ec4, _0x2f6feb, _0x523dee) {
        return _0x3a01(_0xf5e073 + 0x4bc - 0x30c, _0x252330);
      }
      function _0x14bc01(_0x2e284b, _0x99d8ff, _0x340bcb, _0x301eee, _0x45f51a) {
        return _0x3a01(_0x301eee + 0x3b1 - 0x357, _0x340bcb);
      }
      try {
        if (!/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x4a769f)) {
          return await _0x1fc805(urlneed);
        }
        const _0x277a25 = await dl.youtubedl(_0x4a769f);
        let _0xc75a8c = await getsize(await _0x277a25.video["1080p"].download());
        const _0x4f08e0 = {
          quoted: _0x20c763
        };
        let _0x855413 = await _0x1a8f82.sendMessage(_0x385af8, {
          'video': {
            'url': await _0x277a25.video["1080p"].download()
          },
          'caption': config.FOOTER
        }, _0x4f08e0);
        const _0x2ea8f4 = {
          text: '🎥',
          key: _0x855413.key
        };
        const _0xde75e5 = {
          react: _0x2ea8f4
        };
        await _0x1a8f82.sendMessage(_0x385af8, _0xde75e5);
      } catch (_0x554a71) {
        _0x1fc805(N_FOUND);
        l(_0x554a71);
      }
    });
    const _0xe60cf2 = {
      pattern: "24p",
      use: ".240p <video url>",
      react: "📽️",
      desc: "Download yt videos.",
      category: '',
      filename: __filename
    };
    cmd(_0xe60cf2, async (_0x517acd, _0x2752b4, _0x190ea1, {
      from: _0x7855c1,
      q: _0x1814d1,
      reply: _0x2ac9bb
    }) => {
      function _0x1630ad(_0x45e07d, _0x100357, _0x3cf2cb, _0x2d750c, _0x4c9bfa) {
        return _0x3a01(_0x4c9bfa + 0x4eb - 0x30c, _0x3cf2cb);
      }
      const _0x200785 = {
        'cZpEq': function (_0x2f6972, _0x104095) {
          return _0x2f6972(_0x104095);
        },
        'uJDhV': function (_0x45c5be, _0x54324f) {
          return _0x45c5be(_0x54324f);
        },
        'yoENe': function (_0x23216a, _0x5e863b) {
          return _0x23216a(_0x5e863b);
        },
        'xjauP': "240p",
        'bdZgX': "video.mp4",
        'woLzK': "video/mp4",
        'HXaKg': function (_0x20601a, _0xe4e816) {
          return _0x20601a(_0xe4e816);
        }
      };
      function _0xc74a2d(_0x349e82, _0x24ba0d, _0x25e899, _0x35407a, _0x4a3f56) {
        return _0x3a01(_0x4a3f56 - 0x6f0 + 0x31d, _0x349e82);
      }
      function _0x20ec55(_0x5514fb, _0x3d660f, _0xc2ca94, _0x1a5ff3, _0x1dde4b) {
        return _0x3a01(_0xc2ca94 - 0x318 + 0x27a, _0x5514fb);
      }
      function _0x212adb(_0x5e2131, _0x20d973, _0x22099a, _0x436af0, _0xf07808) {
        return _0x3a01(_0xf07808 - 0x5c0 + 0x31d, _0x436af0);
      }
      function _0x3f0f8d(_0x561169, _0x161a7c, _0x5e76f7, _0x271533, _0x7c6b17) {
        return _0x3a01(_0x271533 + 0x609 - 0x30c, _0x7c6b17);
      }
      try {
        if (!/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x1814d1)) {
          return await _0x2ac9bb(urlneed);
        }
        const _0x98ac81 = await dl.youtubedl(_0x1814d1);
        let _0x541872 = await getsize(await _0x98ac81.video["240p"].download());
        const _0x4d0c7a = {
          quoted: _0x190ea1
        };
        let _0x358b39 = await _0x517acd.sendMessage(_0x7855c1, {
          'document': {
            'url': await _0x98ac81.video["240p"].download()
          },
          'fileName': "video.mp4",
          'mimetype': "video/mp4",
          'caption': config.FOOTER
        }, _0x4d0c7a);
        const _0x2df75f = {
          text: '🎥',
          key: _0x358b39.key
        };
        const _0x1133ee = {
          react: _0x2df75f
        };
        await _0x517acd.sendMessage(_0x7855c1, _0x1133ee);
      } catch (_0x1a1a36) {
        _0x2ac9bb(N_FOUND);
        l(_0x1a1a36);
      }
    });
    const _0x4f92a8 = {
      pattern: "36p",
      use: ".240p <video url>",
      react: "📽️",
      desc: "Download yt videos.",
      category: '',
      filename: __filename
    };
    cmd(_0x4f92a8, async (_0x18ba27, _0xe49fc8, _0x418117, {
      from: _0x925fcb,
      q: _0x20348e,
      reply: _0x44d11e
    }) => {
      function _0x2656bd(_0x5355f4, _0x1c1a3b, _0x290202, _0x9ddcbf, _0x210926) {
        return _0x3a01(_0x290202 + 0x29b - 0x30c, _0x9ddcbf);
      }
      function _0x3bb3ca(_0x36fea5, _0x37c8c9, _0x164033, _0x5d3746, _0x4c61ec) {
        return _0x3a01(_0x4c61ec + 0x648 - 0x357, _0x36fea5);
      }
      function _0x1da202(_0x31d941, _0x2619ca, _0x5aab4a, _0x2b6265, _0x1822e2) {
        return _0x3a01(_0x2619ca + 0x125 - 0x357, _0x5aab4a);
      }
      function _0x34da52(_0x407cdf, _0x3433d4, _0x4e7200, _0x110916, _0x5ca608) {
        return _0x3a01(_0x110916 - 0x5d1 + 0x31d, _0x3433d4);
      }
      function _0x48da79(_0x1c4f16, _0x2ace1c, _0x2459a8, _0x16841e, _0x37a3f3) {
        return _0x3a01(_0x2459a8 - 0x502 + 0x31d, _0x16841e);
      }
      const _0x481abb = {
        'ZmCzW': function (_0x3f8cf6, _0x336daf) {
          return _0x3f8cf6(_0x336daf);
        },
        'GfFPy': function (_0x3eb226, _0x4fa2af) {
          return _0x3eb226(_0x4fa2af);
        },
        'DSJLS': "360p",
        'HcCxj': "video.mp4",
        'rWjCm': "video/mp4",
        'hmVCp': function (_0x4c7831, _0x43fe4d) {
          return _0x4c7831(_0x43fe4d);
        },
        'EFwmg': function (_0x14d7c6, _0x9f8167) {
          return _0x14d7c6(_0x9f8167);
        }
      };
      try {
        if (!/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x20348e)) {
          return await _0x44d11e(urlneed);
        }
        const _0x5b0c78 = await dl.youtubedl(_0x20348e);
        let _0x44f96c = await getsize(await _0x5b0c78.video["360p"].download());
        const _0x50aecc = {
          quoted: _0x418117
        };
        let _0x4527df = await _0x18ba27.sendMessage(_0x925fcb, {
          'document': {
            'url': await _0x5b0c78.video["360p"].download()
          },
          'fileName': "video.mp4",
          'mimetype': "video/mp4",
          'caption': config.FOOTER
        }, _0x50aecc);
        const _0x4f5d1a = {
          text: '🎥',
          key: _0x4527df.key
        };
        const _0x5deab1 = {
          react: _0x4f5d1a
        };
        await _0x18ba27.sendMessage(_0x925fcb, _0x5deab1);
      } catch (_0x26f5df) {
        _0x44d11e(N_FOUND);
        l(_0x26f5df);
      }
    });
    const _0x2fd552 = {
      pattern: "48p",
      use: ".480p <video url>",
      react: "📽️",
      desc: "Download yt videos.",
      category: '',
      filename: __filename
    };
    cmd(_0x2fd552, async (_0x96a095, _0x20339f, _0x4e347b, {
      from: _0x5e4be6,
      q: _0x3b443d,
      reply: _0x322e6f
    }) => {
      function _0x1759df(_0x360e6d, _0x31a25f, _0x5babc5, _0x1fa0a4, _0x5d4a11) {
        return _0x3a01(_0x1fa0a4 + 0x51 - 0x30c, _0x5d4a11);
      }
      function _0x4ccc00(_0x2b0e19, _0x35d191, _0x391ade, _0x35e31a, _0x47e2e7) {
        return _0x3a01(_0x2b0e19 - 0x7c - 0x30c, _0x47e2e7);
      }
      function _0x3cb65f(_0x4240d2, _0x5c187b, _0x2c85a4, _0xeeb67b, _0x53f90e) {
        return _0x3a01(_0x5c187b + 0xb4 + 0x27a, _0x53f90e);
      }
      const _0x822dd4 = {
        'bJPvM': function (_0x2c58e2, _0x1deef7) {
          return _0x2c58e2(_0x1deef7);
        },
        'UNTae': function (_0x319b97, _0x457879) {
          return _0x319b97(_0x457879);
        },
        'awGDt': "480p",
        'JcPzD': "video.mp4",
        'CkJje': "video/mp4",
        'GKIuC': function (_0x5490db, _0x382947) {
          return _0x5490db(_0x382947);
        },
        'WsLAu': function (_0x2ac843, _0x2224c7) {
          return _0x2ac843(_0x2224c7);
        }
      };
      function _0xe61e58(_0x476fe8, _0x197283, _0x59eb2b, _0x2eaeed, _0x22edc2) {
        return _0x3a01(_0x2eaeed - 0x2b2 + 0x27a, _0x197283);
      }
      function _0x5bc625(_0x2b4d38, _0x253b8c, _0x2d7845, _0x19707b, _0x31f6fd) {
        return _0x3a01(_0x2d7845 - 0x249 + 0x27a, _0x2b4d38);
      }
      try {
        if (!/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x3b443d)) {
          return await _0x322e6f(urlneed);
        }
        const _0x2d2665 = await dl.youtubedl(_0x3b443d);
        let _0x1f591c = await getsize(await _0x2d2665.video["480p"].download());
        const _0x10a64f = {
          quoted: _0x4e347b
        };
        let _0x5be35b = await _0x96a095.sendMessage(_0x5e4be6, {
          'document': {
            'url': await _0x2d2665.video["480p"].download()
          },
          'fileName': "video.mp4",
          'mimetype': "video/mp4",
          'caption': config.FOOTER
        }, _0x10a64f);
        const _0x24c6c9 = {
          text: '🎥',
          key: _0x5be35b.key
        };
        const _0x4e0cae = {
          react: _0x24c6c9
        };
        await _0x96a095.sendMessage(_0x5e4be6, _0x4e0cae);
      } catch (_0x9a69fa) {
        _0x322e6f(N_FOUND);
        l(_0x9a69fa);
      }
    });
    const _0x3ac1de = {
      pattern: "72p",
      use: ".720p <video url>",
      react: "📽️",
      desc: "Download yt videos.",
      category: '',
      filename: __filename
    };
    cmd(_0x3ac1de, async (_0x57a092, _0x2f80a1, _0x1d48a4, {
      from: _0x3fb41c,
      q: _0xa4c12a,
      reply: _0x3069e3
    }) => {
      function _0x1d9633(_0x345caa, _0x1eb2e9, _0x209250, _0x24161d, _0x5f5a61) {
        return _0x3a01(_0x24161d - 0x47e + 0x27a, _0x5f5a61);
      }
      function _0x26d75f(_0x142b6d, _0x58f7e0, _0x2a8dbc, _0x22f1d2, _0x22c172) {
        return _0x3a01(_0x142b6d - 0x4ed + 0x31d, _0x58f7e0);
      }
      const _0x1b676d = {
        'GfkHg': function (_0x496813, _0x5dd65b) {
          return _0x496813(_0x5dd65b);
        },
        'BzBHw': "720p",
        'sfnEU': "video.mp4",
        'TWpQA': "video/mp4",
        'zPDaZ': function (_0x380c17, _0x36bd07) {
          return _0x380c17(_0x36bd07);
        },
        'BfEBi': function (_0x40ec80, _0x347fab) {
          return _0x40ec80(_0x347fab);
        }
      };
      function _0x3c5229(_0x15fcb3, _0x51d287, _0x290345, _0x1ecc8b, _0x27fc82) {
        return _0x3a01(_0x27fc82 + 0x6d2 - 0x30c, _0x290345);
      }
      function _0x3a3e71(_0x4b7c71, _0x4d6fdd, _0x1e40ac, _0x2cf50a, _0x261a0b) {
        return _0x3a01(_0x1e40ac - 0x81 - 0x30c, _0x261a0b);
      }
      function _0x4725a8(_0x4296f6, _0x5aac59, _0x487386, _0x1be490, _0x1f9e4f) {
        return _0x3a01(_0x4296f6 - 0x55c + 0x204, _0x487386);
      }
      try {
        if (!/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0xa4c12a)) {
          return await _0x3069e3(urlneed);
        }
        const _0x33dc99 = await dl.youtubedl(_0xa4c12a);
        let _0x242ebc = await getsize(await _0x33dc99.video["720p"].download());
        const _0x23d086 = {
          quoted: _0x1d48a4
        };
        let _0x318c3c = await _0x57a092.sendMessage(_0x3fb41c, {
          'document': {
            'url': await _0x33dc99.video["720p"].download()
          },
          'fileName': "video.mp4",
          'mimetype': "video/mp4",
          'caption': config.FOOTER
        }, _0x23d086);
        const _0x840913 = {
          text: '🎥',
          key: _0x318c3c.key
        };
        const _0xc67376 = {
          react: _0x840913
        };
        await _0x57a092.sendMessage(_0x3fb41c, _0xc67376);
      } catch (_0x100159) {
        _0x3069e3(N_FOUND);
        l(_0x100159);
      }
    });
    const _0x27094f = {
      pattern: "108p",
      use: ".1080p <video url>",
      react: "📽️",
      desc: "Download yt videos.",
      category: '',
      filename: __filename
    };
    cmd(_0x27094f, async (_0x64c19, _0x2035fa, _0x1fb707, {
      from: _0x6967e7,
      q: _0x43318f,
      reply: _0x35cff6
    }) => {
      const _0x4782f5 = {
        'gajJo': function (_0x10d9a5, _0x7ecdf6) {
          return _0x10d9a5(_0x7ecdf6);
        },
        'jPgKU': function (_0x28434f, _0x881baa) {
          return _0x28434f(_0x881baa);
        },
        'KfIHD': "1080p",
        'fWTtW': "video.mp4",
        'wEqwd': "video/mp4"
      };
      function _0x22e54e(_0x2aee10, _0x12a067, _0x347da3, _0x442f2b, _0x597ed0) {
        return _0x3a01(_0x442f2b + 0xeb + 0x204, _0x12a067);
      }
      function _0x373ddf(_0xedcdce, _0x20b862, _0x57ba17, _0x539104, _0x1406a8) {
        return _0x3a01(_0x57ba17 + 0x297 - 0x357, _0x539104);
      }
      function _0x4c40a2(_0x3570e, _0xfbdcdc, _0x36b886, _0x4bf547, _0x41ef96) {
        return _0x3a01(_0x3570e + 0x168 + 0x204, _0x41ef96);
      }
      function _0x515ebd(_0x4a2027, _0x47fe11, _0xe7f00e, _0x33b084, _0x961a0b) {
        return _0x3a01(_0x47fe11 + 0x3d8 - 0x357, _0x4a2027);
      }
      function _0x5c8789(_0x2ef8e2, _0x2ec25b, _0x20a2f4, _0x5a450d, _0x4c6fe8) {
        return _0x3a01(_0x20a2f4 - 0xcc + 0x204, _0x4c6fe8);
      }
      try {
        if (!/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/.test(_0x43318f)) {
          return await _0x35cff6(urlneed);
        }
        const _0x46ade8 = await dl.youtubedl(_0x43318f);
        let _0x5e9ad5 = await getsize(await _0x46ade8.video["1080p"].download());
        const _0xd31835 = {
          quoted: _0x1fb707
        };
        let _0x17d770 = await _0x64c19.sendMessage(_0x6967e7, {
          'document': {
            'url': await _0x46ade8.video["1080p"].download()
          },
          'fileName': "video.mp4",
          'mimetype': "video/mp4",
          'caption': config.FOOTER
        }, _0xd31835);
        const _0x319f39 = {
          text: '🎥',
          key: _0x17d770.key
        };
        const _0xbbb34 = {
          react: _0x319f39
        };
        await _0x64c19.sendMessage(_0x6967e7, _0xbbb34);
      } catch (_0x47f162) {
        _0x35cff6(N_FOUND);
        l(_0x47f162);
      }
    });
  }