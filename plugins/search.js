(function (_0x9dfb99, _0x5e5443) {
    const _0x523570 = _0x9dfb99();
    while (true) {
      try {
        const _0x3c25ff = parseInt(_0xa94a(4386, 'ex9D')) / 1 + -parseInt(_0xa94a(736, 'FQ]A')) / 2 + parseInt(_0xa94a(3147, '7bJk')) / 3 + parseInt(_0xa94a(621, 'N@4r')) / 4 + parseInt(_0xa94a(4352, 'qI5A')) / 5 * (-parseInt(_0xa94a(4165, '7bJk')) / 6) + -parseInt(_0xa94a(906, 'PkvJ')) / 7 * (-parseInt(_0xa94a(2697, 'vC#!')) / 8) + -parseInt(_0xa94a(1611, 'PkvJ')) / 9;
        if (_0x3c25ff === _0x5e5443) {
          break;
        } else {
          _0x523570.push(_0x523570.shift());
        }
      } catch (_0x177d45) {
        _0x523570.push(_0x523570.shift());
      }
    }
  })(_0x5e8c, 758100);
  const config = require("../settings");
  const {
    cmd,
    commands
  } = require("../lib/command");
  const {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson,
    jsonformat
  } = require("../lib/functions");
  const axios = require("axios");
  const fetch = require("node-fetch");
  const {
    lyrics,
    lyricsv2
  } = require("@bochilteam/scraper");
  var {
    subsearch,
    subdl
  } = require("@sl-code-lords/si-subdl");
  const Esana = require("@sl-code-lords/esana-news");
  var api = new Esana();
  const sirasanews = require("sirasa-news");
  const derananews = require("@kaveesha-sithum/derana-news");
  const uptime = process.uptime();
  const day = Math.floor(uptime / 86400);
  const hours = Math.floor(uptime % 86400 / 3600);
  const minutes = Math.floor(uptime % 3600 / 60);
  const seconds = Math.floor(uptime % 60);
  var cants = '';
  if (config.LANG === 'SI') {
    cants = "I cant find this anime.";
  } else {
    cants = "I cant find this anime.";
  }
  var N_FOUND = '';
  if (config.LANG === 'SI') {
    N_FOUND = "*මට කිසිවක් සොයාගත නොහැකි විය :(*";
  } else {
    N_FOUND = "*I couldn't find anything :(*";
  }
  var tmsg5 = '';
  if (config.LANG === 'SI') {
    tmsg5 = "*කරුණාකර මට ගීතයක නමක් දෙන්න. !*";
  } else {
    tmsg5 = "*Please give me a song name. !*";
  }
  var tmsg = '';
  function _0x15f023(_0x3ae17c, _0x44db72, _0x31a1df, _0x470f7b, _0xfaf0) {
    return _0xa94a(_0x44db72 + 0x208, _0xfaf0);
  }
  if (config.LANG === 'SI') {
    tmsg = "එය Tech news ලබා දෙයි.";
  } else {
    tmsg = "It gives Tech news.";
  }
  var tmsg3 = '';
  if (config.LANG === 'SI') {
    tmsg3 = "එය IOS news ලබා දෙයි.";
  } else {
    tmsg3 = "It gives IOS news.";
  }
  var needus = '';
  if (config.LANG === 'SI') {
    needus = "*කරුණාකර මට chatgpt AI හි සෙවීමට වචන ලබා දෙන්න !*";
  } else {
    needus = "*Please give me words to search on chatgpt ai !*";
  }
  var descg = '';
  if (config.LANG === 'SI') {
    descg = "එය ලබා දී ඇති දුරකථන අංකයේ හිමිකරු සොයා ගනී.";
  } else {
    descg = "It find owner of given phone number.";
  }
  var desct = '';
  if (config.LANG === 'SI') {
    desct = "එය ඔබ ලබා දුන් දේ සඳහා chatgpt AI මත සොයයි.";
  } else {
    desct = "It search on chatgpt ai for what you provided.";
  }
  var descgs = '';
  if (config.LANG === 'SI') {
    descgs = "එය ලබා දී ඇති anime නම පිළිබඳ විස්තර සපයයි.";
  } else {
    descgs = "It gives details of given anime name.";
  }
  function _0xa94a(_0x54f003, _0x1bf047) {
    const _0x3c46b2 = _0x5e8c();
    _0xa94a = function (_0xc5cb77, _0x52a17f) {
      _0xc5cb77 = _0xc5cb77 - 386;
      let _0xe39d5 = _0x3c46b2[_0xc5cb77];
      if (_0xa94a.wgSITB === undefined) {
        var _0x230bbc = function (_0x2bcc53) {
          let _0x3e2af2 = '';
          let _0x2872f0 = '';
          let _0x3136e7 = 0;
          let _0x2f1fa4;
          let _0x3859ea;
          for (let _0x590c3f = 0; _0x3859ea = _0x2bcc53.charAt(_0x590c3f++); ~_0x3859ea && (_0x2f1fa4 = _0x3136e7 % 4 ? _0x2f1fa4 * 64 + _0x3859ea : _0x3859ea, _0x3136e7++ % 4) ? _0x3e2af2 += String.fromCharCode(255 & _0x2f1fa4 >> (-2 * _0x3136e7 & 6)) : 0) {
            _0x3859ea = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x3859ea);
          }
          let _0xc20934 = 0;
          for (let _0x583c17 = _0x3e2af2.length; _0xc20934 < _0x583c17; _0xc20934++) {
            _0x2872f0 += '%' + ('00' + _0x3e2af2.charCodeAt(_0xc20934).toString(16)).slice(-2);
          }
          return decodeURIComponent(_0x2872f0);
        };
        const _0x772caa = function (_0x420f19, _0x1c96a8) {
          let _0x29f1f4 = [];
          let _0xc8db05 = 0;
          let _0x253824;
          let _0x52a9e7 = '';
          _0x420f19 = _0x230bbc(_0x420f19);
          let _0x15be4e;
          for (_0x15be4e = 0; _0x15be4e < 256; _0x15be4e++) {
            _0x29f1f4[_0x15be4e] = _0x15be4e;
          }
          for (_0x15be4e = 0; _0x15be4e < 256; _0x15be4e++) {
            _0xc8db05 = (_0xc8db05 + _0x29f1f4[_0x15be4e] + _0x1c96a8.charCodeAt(_0x15be4e % _0x1c96a8.length)) % 256;
            _0x253824 = _0x29f1f4[_0x15be4e];
            _0x29f1f4[_0x15be4e] = _0x29f1f4[_0xc8db05];
            _0x29f1f4[_0xc8db05] = _0x253824;
          }
          _0x15be4e = 0;
          _0xc8db05 = 0;
          for (let _0x456810 = 0; _0x456810 < _0x420f19.length; _0x456810++) {
            _0x15be4e = (_0x15be4e + 1) % 256;
            _0xc8db05 = (_0xc8db05 + _0x29f1f4[_0x15be4e]) % 256;
            _0x253824 = _0x29f1f4[_0x15be4e];
            _0x29f1f4[_0x15be4e] = _0x29f1f4[_0xc8db05];
            _0x29f1f4[_0xc8db05] = _0x253824;
            _0x52a9e7 += String.fromCharCode(_0x420f19.charCodeAt(_0x456810) ^ _0x29f1f4[(_0x29f1f4[_0x15be4e] + _0x29f1f4[_0xc8db05]) % 256]);
          }
          return _0x52a9e7;
        };
        _0xa94a.BjUysx = _0x772caa;
        _0x54f003 = arguments;
        _0xa94a.wgSITB = true;
      }
      const _0x169009 = _0x3c46b2[0];
      const _0x141386 = _0xc5cb77 + _0x169009;
      const _0x4980ba = _0x54f003[_0x141386];
      if (!_0x4980ba) {
        if (_0xa94a.FQcbuU === undefined) {
          _0xa94a.FQcbuU = true;
        }
        _0xe39d5 = _0xa94a.BjUysx(_0xe39d5, _0x52a17f);
        _0x54f003[_0x141386] = _0xe39d5;
      } else {
        _0xe39d5 = _0x4980ba;
      }
      return _0xe39d5;
    };
    return _0xa94a(_0x54f003, _0x1bf047);
  }
  const _0x44aa47 = {
    pattern: "anime",
    alias: ["animesearch", "sanime"],
    react: '⛩️',
    desc: descgs,
    category: "search"
  };
  function _0x5b3592(_0x186d7e, _0x1748d9, _0x2fa992, _0x4f37e0, _0xd03428) {
    return _0xa94a(_0xd03428 + 0x320, _0x186d7e);
  }
  _0x44aa47.use = ".anime astro";
  _0x44aa47.filename = __filename;
  cmd(_0x44aa47, async (_0x5f20f7, _0x3ebf24, _0x134072, {
    from: _0x41f1c8,
    l: _0x2214d2,
    prefix: _0x1c77cb,
    quoted: _0x32ca54,
    body: _0x3aee58,
    isCmd: _0x56a3e7,
    command: _0x2a1325,
    args: _0x2448f1,
    q: _0xdb5ea,
    isGroup: _0x4bdfaf,
    sender: _0x52adbf,
    senderNumber: _0x409a42,
    botNumber2: _0x577ac8,
    botNumber: _0x3b62fe,
    pushname: _0xca1fb4,
    isMe: _0x28ab78,
    isOwner: _0x550715,
    groupMetadata: _0x35d9c0,
    groupName: _0x38450f,
    participants: _0x6ac4b3,
    groupAdmins: _0x45b843,
    isBotAdmins: _0x246212,
    isAdmins: _0x20676d,
    reply: _0x1e0dd0
  }) => {
    try {
      if (!_0xdb5ea) {
        return _0x1e0dd0("Give a anime name");
      }
      let _0x1a2419 = await fetchJson("https://api.jikan.moe/v4/anime?q=" + _0xdb5ea);
      const _0x3edf74 = [];
      for (let _0x5dbc97 of _0x1a2419.data) {
        _0x3edf74.push({
          'header': _0x5dbc97 + 1,
          'title': "Anime number",
          'description': '' + _0x5dbc97.title,
          'id': ".animeeg " + _0x5dbc97.mal_id
        });
      }
      const _0x1bc076 = {
        display_text: config.BTN,
        url: config.BTNURL,
        merchant_url: config.BTNURL
      };
      let _0x344be9 = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify(_0x1bc076)
      }, {
        'name': "single_select",
        'buttonParamsJson': JSON.stringify({
          'title': "Select news types",
          'sections': [{
            'title': "Please select a category",
            'highlight_label': "X-BYTE",
            'rows': _0x3edf74
          }]
        })
      }];
      const _0x2b692d = {
        image: config.LOGO,
        header: '',
        footer: config.FOOTER,
        body: "X-BYTE ANIME SEARCH\n\n\t > ANIME SEARCHER 🚶"
      };
      return await _0x5f20f7.sendButtonMessage(_0x41f1c8, _0x344be9, _0x134072, _0x2b692d);
    } catch (_0x1aa836) {
      _0x1e0dd0("*Error !!*");
      console.log(_0x1aa836);
    }
  });
  const _0x95ac85 = {
    pattern: "animeeg",
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x95ac85, async (_0x347af1, _0x470fcc, _0x38df51, {
    from: _0x2a3805,
    l: _0xbf3248,
    quoted: _0x19cdf3,
    body: _0x34a462,
    isCmd: _0x5e3f47,
    command: _0x57dec4,
    args: _0xcba493,
    q: _0x1568d0,
    isGroup: _0x1b6f18,
    sender: _0x4fd477,
    senderNumber: _0x5d9113,
    botNumber2: _0x300aaa,
    botNumber: _0x355283,
    pushname: _0x16b5ff,
    isMe: _0xa9f784,
    isOwner: _0x4f3124,
    groupMetadata: _0x556ccb,
    groupName: _0x1a915b,
    participants: _0x166a9f,
    groupAdmins: _0x2073a3,
    isBotAdmins: _0xf1908e,
    isAdmins: _0x58ba9b,
    reply: _0x28bca9
  }) => {
    try {
      const _0x207516 = {
        text: '🔃',
        key: _0x470fcc.key
      };
      const _0x53076e = {
        react: _0x207516
      };
      await _0x347af1.sendMessage(_0x2a3805, _0x53076e);
      res = await fetchJson("https://api.jikan.moe/v4/anime/" + _0x1568d0);
      let _0xcf9a4b = "*TITLE:* *" + res.data.title + "*\n*ENGLISH:* *" + res.data.title_english + "*\n*JAPANESE:* *" + res.data.title_japanese + "*\n*TYPE ANIME:* *" + res.data.type + "*\n*ADAPTER:* *" + res.data.source + "*\n*TOTAL EPISODE:* *" + res.data.episodes + "*\n*STATUS:* *" + res.data.status + "*\n*ONGOING:* *" + (res.data.airing ? 'Ya' : "DRIS") + "*\n*AIRED:* *" + res.data.aired.string + "*\n*DURATION:* *" + res.data.duration + "*\n*RATING:* *" + res.data.rating + "*\n*SCORE:* *" + res.data.score + "*\n*RANK:* *" + res.data.rank + "*\n*STUDIO:* *" + res.data.studios[0].name + "* ";
      const _0x5c4bd7 = {
        url: res.data.images.jpg.image_url
      };
      const _0x2f4f2b = {
        image: _0x5c4bd7,
        caption: _0xcf9a4b
      };
      const _0x2da20e = {
        quoted: _0x470fcc
      };
      _0x347af1.sendMessage(_0x2a3805, _0x2f4f2b, _0x2da20e)["catch"](_0x3e6a9e => _0x28bca9(''));
      const _0x3d41b6 = {
        text: '✔',
        key: _0x470fcc.key
      };
      const _0x128a72 = {
        react: _0x3d41b6
      };
      await _0x347af1.sendMessage(_0x2a3805, _0x128a72);
    } catch (_0x4f48a5) {
      _0x28bca9(cants);
      _0xbf3248(_0x4f48a5);
    }
  });
  const _0x2ca7a7 = {
    pattern: "tiktokstalk",
    react: "🎙️",
    desc: "To search tiktok username",
    category: "search",
    use: ".tiktokstalk <tt user name>",
    filename: __filename
  };
  cmd(_0x2ca7a7, async (_0x4ae771, _0x226328, _0x129a77, {
    from: _0x43f144,
    l: _0x9da841,
    quoted: _0x42134b,
    body: _0x36c598,
    isCmd: _0x792e2c,
    command: _0x563310,
    args: _0x2db42d,
    q: _0x45c490,
    isGroup: _0x3e0849,
    sender: _0x18c5b9,
    senderNumber: _0x271046,
    botNumber2: _0x1d4dd9,
    botNumber: _0x2e58bc,
    pushname: _0x8fbefa,
    isMe: _0x528e2f,
    isOwner: _0x3383cb,
    groupMetadata: _0x52abd2,
    groupName: _0x5b669e,
    participants: _0x47f249,
    groupAdmins: _0x3712eb,
    isBotAdmins: _0x535c2b,
    isAdmins: _0x5dd351,
    reply: _0x3003c3
  }) => {
    try {
      if (!_0x45c490) {
        return _0x3003c3("please give a tiktok username");
      }
      const _0x453b96 = await fetchJson("https://api.maher-zubair.tech/stalk/tiktok?q=" + _0x45c490);
      let _0x554326 = " X - B Y T E  𝗧𝗧 𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘 𝗦𝗘𝗔𝗥𝗖𝗛\n\n*📚 NAME:* " + _0x453b96.result.name + "\n*🔖 USERNAME:* " + _0x453b96.result.username + "\n*⛓️ FOLLOWERS:* " + _0x453b96.result.followers + "\n*✨ FOLLOWING:* " + _0x453b96.result.following + "\n*📃 DESCRIPTION:* " + _0x453b96.result.desc + "\n*👍 LIKES:* " + _0x453b96.result.likes + "\n*🚀 BIO:* " + _0x453b96.result.bio;
      const _0x19ed91 = {
        url: _0x453b96.result.profile
      };
      const _0x9ea5cc = {
        image: _0x19ed91,
        caption: _0x554326
      };
      const _0x32d8fd = {
        quoted: _0x226328
      };
      return await _0x4ae771.sendMessage(_0x43f144, _0x9ea5cc, _0x32d8fd);
      const _0x2a04fb = {
        text: '✅',
        key: _0x226328.key
      };
      const _0x2494f5 = {
        react: _0x2a04fb
      };
      await _0x4ae771.sendMessage(_0x43f144, _0x2494f5);
    } catch (_0x34fd6a) {
      _0x9da841(_0x34fd6a);
    }
  });
  const _0x36f79c = {
    pattern: "igstalk",
    react: "🎙️",
    desc: "To search instagram username",
    category: "search",
    use: ".igstalk <tt user name>",
    filename: __filename
  };
  cmd(_0x36f79c, async (_0x3aed36, _0x298c00, _0xef4163, {
    from: _0x53a5f9,
    l: _0x39a8ad,
    quoted: _0x4ea28b,
    body: _0x47f88e,
    isCmd: _0x577690,
    command: _0x239a3e,
    args: _0x1c8124,
    q: _0x495371,
    isGroup: _0x23ead2,
    sender: _0x4fae42,
    senderNumber: _0xcae2ad,
    botNumber2: _0x26fb02,
    botNumber: _0x37d9d0,
    pushname: _0x10ce35,
    isMe: _0x18386e,
    isOwner: _0x285ff1,
    groupMetadata: _0x26f55f,
    groupName: _0x1a4c41,
    participants: _0xfd18f6,
    groupAdmins: _0x492a6d,
    isBotAdmins: _0x30557c,
    isAdmins: _0x3f5b55,
    reply: _0x366067
  }) => {
    try {
      if (!_0x495371) {
        return _0x366067("please give a instagram username");
      }
      const _0x25093b = await fetchJson("https://api.maher-zubair.tech/stalk/instagram?q=" + _0x495371);
      let _0x445b35 = " X - B Y T E  𝗜𝗚 𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘 𝗦𝗘𝗔𝗥𝗖𝗛\n\n*📚 NAME:* " + _0x25093b.result.username + "\n*🔖 USERNAME:* " + _0x25093b.result.fullname + "\n*⛓️ FOLLOWERS:* " + _0x25093b.result.followers + "\n*✨ FOLLOWING:* " + _0x25093b.result.posts + "\n*📃 DESCRIPTION:* " + _0x25093b.result.following + "\n*🚀 BIO:* " + _0x25093b.result.bio;
      const _0x56efea = {
        url: _0x25093b.result.photo_profile
      };
      const _0x2481aa = {
        image: _0x56efea,
        caption: _0x445b35
      };
      const _0x40f97a = {
        quoted: _0x298c00
      };
      return await _0x3aed36.sendMessage(_0x53a5f9, _0x2481aa, _0x40f97a);
      const _0x2a6751 = {
        text: '✅',
        key: _0x298c00.key
      };
      const _0x2c803b = {
        react: _0x2a6751
      };
      await _0x3aed36.sendMessage(_0x53a5f9, _0x2c803b);
    } catch (_0x1a9195) {
      _0x39a8ad(_0x1a9195);
    }
  });
  if (config.COMMAND_TYPE === "button") {
    const _0x286b6f = {
      pattern: "news",
      react: "🗃️",
      desc: "Get news",
      category: "search",
      use: ".news",
      filename: __filename
    };
    cmd(_0x286b6f, async (_0x57c195, _0xe0cca, _0x601498, {
      from: _0x5473ba,
      pushname: _0x1c130f,
      reply: _0x2293a6
    }) => {
      try {
        const _0x2bc3ab = [];
        const _0x47048d = new Map();
        for (let _0x49327d = 0; _0x49327d < 1; _0x49327d++) {
          const _0x49e113 = commands[_0x49327d];
          if (!_0x49e113.dontAddCommandList && _0x49e113.pattern !== undefined) {
            const _0x570cc5 = _0x49e113.category.toUpperCase();
            if (!_0x47048d.has(_0x570cc5)) {
              _0x2bc3ab.push(_0x570cc5);
              _0x47048d.set(_0x570cc5, []);
            }
            _0x47048d.get(_0x570cc5).push(_0x49e113.pattern);
          }
        }
        const _0x1aa093 = [];
        for (const _0x4f39ba of _0x2bc3ab) {
          const _0x3e7097 = {
            header: "Select you want to see news",
            title: "Ios News",
            description: '',
            id: ".ios"
          };
          const _0x173824 = {
            header: '',
            title: "wabeta News",
            description: '',
            id: ".wabeta"
          };
          const _0x2015e6 = {
            header: '',
            title: "Nasa News",
            description: '',
            id: ".nasanews"
          };
          const _0x3cacc5 = {
            header: '',
            title: "Tech News",
            description: '',
            id: ".technews"
          };
          const _0x57dbf1 = {
            header: '',
            title: "Sirasa News",
            description: '',
            id: ".sirasanews"
          };
          const _0x427923 = {
            header: '',
            title: "Esana News",
            description: '',
            id: ".esananews"
          };
          const _0x365d0a = {
            header: '',
            title: "Derana News",
            description: '',
            id: ".derananews"
          };
          const _0x61520e = {
            header: '',
            title: "Hiru News",
            description: '',
            id: ".hirunews"
          };
          const _0x229bf1 = {
            header: '',
            title: "Cricket News",
            description: '',
            id: ".cricketnews"
          };
          _0x1aa093.push(_0x3e7097);
          _0x1aa093.push(_0x173824);
          _0x1aa093.push(_0x2015e6);
          _0x1aa093.push(_0x3cacc5);
          _0x1aa093.push(_0x57dbf1);
          _0x1aa093.push(_0x427923);
          _0x1aa093.push(_0x365d0a);
          _0x1aa093.push(_0x61520e);
          _0x1aa093.push(_0x229bf1);
        }
        const _0x26222b = {
          display_text: config.BTN,
          url: config.BTNURL,
          merchant_url: config.BTNURL
        };
        let _0x4d25d4 = [{
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify(_0x26222b)
        }, {
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Select news types",
            'sections': [{
              'title': "Please select a category",
              'highlight_label': "X-BYTE",
              'rows': _0x1aa093
            }]
          })
        }];
        const _0x3a345b = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: "`✦ 𝗡𝗘𝗪𝗦 𝗦𝗘𝗔𝗥𝗖𝗛 ✦`\n    "
        };
        return await _0x57c195.sendButtonMessage(_0x5473ba, _0x4d25d4, _0x601498, _0x3a345b);
      } catch (_0x15de7a) {
        _0x2293a6("*Error !!*");
        console.log(_0x15de7a);
      }
    });
    const _0x1bc984 = {
      pattern: "ios",
      alias: ["apple", "applenews"],
      react: '🍎',
      desc: tmsg,
      category: "search",
      use: ".ios"
    };
    cmd(_0x1bc984, async (_0x52be65, _0x2c2f2f, _0x3203a6, {
      from: _0xd9af39,
      q: _0x3ecd9a,
      reply: _0x31df73
    }) => {
      function _0xe2e1b4(_0x353a17, _0x319e54, _0x24d70a, _0xb59b20, _0x537696) {
        return _0xa94a(_0xb59b20 + 0x5b + 0x320, _0x537696);
      }
      const _0x318f69 = {
        'zxsbr': function (_0x2b0cd3, _0x504f2b) {
          return _0x2b0cd3(_0x504f2b);
        },
        'OzkHR': "No images found for the given prompt",
        'zkIvW': function (_0x233f7c, _0x4cc54d) {
          return _0x233f7c !== _0x4cc54d;
        },
        'VfCPM': "VyMoO",
        'dbYpG': "aRvbu",
        'IrKWT': "lfBCY",
        'mYCWS': "Kskcf"
      };
      function _0x67279(_0x3109ef, _0x21ae8a, _0x12d68f, _0x51d4c7, _0x2a8106) {
        return _0xa94a(_0x2a8106 - 0x44f + 0x1cb, _0x21ae8a);
      }
      function _0x5c5df5(_0x5e9ac4, _0x1558b5, _0x2145ad, _0x29e117, _0x366f07) {
        return _0xa94a(_0x2145ad - 0x3a0 + 0x208, _0x29e117);
      }
      function _0x898ba0(_0x3c101e, _0x4244c0, _0x590069, _0x5247c6, _0xe4f490) {
        return _0xa94a(_0x3c101e + 0x359 - 0x0, _0x4244c0);
      }
      function _0x454421(_0x1a4250, _0x33b21f, _0x50a1b9, _0x4cecdf, _0x5d1d52) {
        return _0xa94a(_0x4cecdf - 0x2c9 + 0x1cb, _0x1a4250);
      }
      try {
        const _0x25c60b = await fetchJson("https://api.maher-zubair.tech/details/ios");
        let _0x51924d = " X - B Y T E ＩＯＳ ＮＥＷＳ \n\n*🔖 Title:* " + _0x25c60b.result.title + "\n*⛓️ Link:* " + _0x25c60b.result.link + "\n*📚 Description:* " + _0x25c60b.result.desc;
        const _0x546fdd = {
          url: _0x25c60b.result.images
        };
        const _0x18ba2b = {
          image: _0x546fdd,
          caption: _0x51924d
        };
        const _0x1f4881 = {
          quoted: _0x3203a6
        };
        return await _0x52be65.sendMessage(_0xd9af39, _0x18ba2b, _0x1f4881);
        const _0x17c844 = {
          text: '✅',
          key: _0x3203a6.key
        };
        const _0x29c339 = {
          react: _0x17c844
        };
        await _0x52be65.sendMessage(_0xd9af39, _0x29c339);
      } catch (_0x36208e) {
        l(_0x36208e);
      }
    });
    const _0x5e0846 = {
      pattern: "wabeta",
      alias: ["wabetainfo", "betawa"],
      react: '✔️',
      desc: "To see info of wabeta",
      category: "search",
      use: ".wabeta"
    };
    cmd(_0x5e0846, async (_0x35a224, _0x3748cd, _0x444345, {
      from: _0x4eff17,
      q: _0x17022e,
      reply: _0x55a48b
    }) => {
      function _0x3659e1(_0x38d7d2, _0x3e8fdb, _0x5a8634, _0x56b43f, _0x54182a) {
        return _0xa94a(_0x56b43f - 0x21a + 0x1cb, _0x5a8634);
      }
      const _0x44a6fb = {
        'nHDYY': function (_0x573ae9, _0x1e54e9) {
          return _0x573ae9(_0x1e54e9);
        },
        'DIAQp': "Unable to generate",
        'oZaQu': function (_0x48f840) {
          return _0x48f840();
        },
        'wjbyV': function (_0x202f48, _0x3ce391) {
          return _0x202f48(_0x3ce391);
        },
        'UFZFq': function (_0x4f789f, _0x45eea0) {
          return _0x4f789f === _0x45eea0;
        },
        'bHEPG': "OTywf",
        'YsRHa': "BkgPd",
        'fPCtb': function (_0x3b1ecf, _0x2f52e0) {
          return _0x3b1ecf(_0x2f52e0);
        },
        'ahFZy': "UcuLY"
      };
      function _0x5d6728(_0x5517fb, _0x59f10, _0x54afd7, _0x37ebf1, _0xbbc235) {
        return _0xa94a(_0xbbc235 - 0x4a5 + 0x1cb, _0x37ebf1);
      }
      function _0x235115(_0x4719aa, _0x482a8f, _0x4a2062, _0x113b20, _0x5282fc) {
        return _0xa94a(_0x5282fc - 0x668 + 0x320, _0x4a2062);
      }
      function _0x15fde2(_0x2ff207, _0x1decde, _0x43c5b9, _0x16b254, _0x19230a) {
        return _0xa94a(_0x2ff207 - 0x30d + 0x1cb, _0x43c5b9);
      }
      function _0x20f201(_0x107063, _0x2e0f14, _0x206aa3, _0x12e931, _0x3fe32a) {
        return _0xa94a(_0x107063 + 0x8a + 0x320, _0x3fe32a);
      }
      try {
        const _0x1a065b = await fetchJson("https://api.maher-zubair.tech/details/wabetainfo");
        let _0x3f1d4a = " X - B Y T E ＷＡＢＥＴＡＩＮＦＯ \n\n*🥏 Title :* " + _0x1a065b.result.title + "\n*📅 Date :* " + _0x1a065b.result.date + "\n*🖥️ Platform :* " + _0x1a065b.result.subtitle + "\n*🔗 URL :* " + _0x1a065b.result.link + "\n*🗞️ Short Desc :* " + _0x1a065b.result.desc;
        const _0x441204 = {
          url: _0x1a065b.result.image
        };
        const _0x17d782 = {
          image: _0x441204,
          caption: _0x3f1d4a
        };
        const _0x49f796 = {
          quoted: _0x444345
        };
        return await _0x35a224.sendMessage(_0x4eff17, _0x17d782, _0x49f796);
        const _0x1f55c9 = {
          text: '✅',
          key: _0x444345.key
        };
        const _0x1eac03 = {
          react: _0x1f55c9
        };
        await _0x35a224.sendMessage(_0x4eff17, _0x1eac03);
      } catch (_0xb1728b) {
        l(_0xb1728b);
      }
    });
    const _0x22aa23 = {
      pattern: "nasanews",
      react: '📡',
      desc: "To see nasa news info",
      category: "search",
      use: ".nasanews"
    };
    cmd(_0x22aa23, async (_0x28feff, _0x4b9578, _0x45dc39, {
      from: _0x213f14,
      q: _0x3751c3,
      reply: _0x40e62b
    }) => {
      function _0x2a2478(_0x34c959, _0x593065, _0x4b7328, _0xe524f9, _0x562dc1) {
        return _0xa94a(_0x34c959 + 0x3b8 - 0x3a7, _0x593065);
      }
      function _0x1ca1b9(_0x4bb7b2, _0x39b761, _0x3efb19, _0x50e400, _0x2b5ce5) {
        return _0xa94a(_0x3efb19 - 0xa6 + 0x1cb, _0x39b761);
      }
      function _0x377e68(_0x34c182, _0x749377, _0x24acf2, _0x1e4996, _0x2bb9de) {
        return _0xa94a(_0x749377 - 0x2a9 - 0x0, _0x1e4996);
      }
      const _0x51ecc5 = {
        'HnYgM': function (_0x2d83da) {
          return _0x2d83da();
        },
        'SBWUd': function (_0x3e60a7, _0xc69422) {
          return _0x3e60a7(_0xc69422);
        },
        'SgXaM': "Unable to generate images to the given prompt",
        'dgLKQ': function (_0x5a8cdd, _0xd61379) {
          return _0x5a8cdd !== _0xd61379;
        },
        'grmum': "VbVvi",
        'cgQfa': "THjNI",
        'sMsOA': function (_0x26e0ef, _0x11192c) {
          return _0x26e0ef(_0x11192c);
        },
        'faUzA': function (_0x292445, _0x182669) {
          return _0x292445 !== _0x182669;
        },
        'KMsQs': "WVfGH",
        'OUXgP': function (_0x15c6b4, _0x217da5) {
          return _0x15c6b4(_0x217da5);
        }
      };
      function _0x443799(_0x423cb3, _0x595245, _0x49e550, _0x49e2a8, _0x38622f) {
        return _0xa94a(_0x423cb3 - 0x3c - 0x3a7, _0x595245);
      }
      function _0x518416(_0x1bcd8a, _0x478a4b, _0x1e3b4a, _0x108290, _0x39b610) {
        return _0xa94a(_0x478a4b - 0x39d + 0x208, _0x1e3b4a);
      }
      try {
        const _0x5da407 = await fetchJson("https://api.maher-zubair.tech/details/nasa");
        const _0x1cbb1a = " X - B Y T E ＮＡＳＡ ＮＥＷＳ \n\n🪄 𝙏𝙄𝙏𝙇𝙀: " + _0x5da407.result.title + "\n📆𝘿𝘼𝙏𝙀: " + _0x5da407.result.date + "\n🚀 𝙑𝙀𝙍𝙎𝙄𝙊𝙉: " + _0x5da407.result.service_version + "\n🔖𝙐𝙍𝙇: " + _0x5da407.result.url + "\n📝 𝙀𝙓𝙋𝙇𝘼𝙉𝘼𝙏𝙄𝙊𝙉: " + _0x5da407.result.explanation;
        const _0x39daa5 = {
          url: _0x5da407.result.hdurl
        };
        const _0x5ca980 = {
          image: _0x39daa5,
          caption: _0x1cbb1a
        };
        const _0x1c048b = {
          quoted: _0x45dc39
        };
        return _0x28feff.sendMessage(_0x213f14, _0x5ca980, _0x1c048b);
        const _0x36960a = {
          text: '✅',
          key: _0x45dc39.key
        };
        const _0x43b29f = {
          react: _0x36960a
        };
        await _0x28feff.sendMessage(_0x213f14, _0x43b29f);
      } catch (_0x52ce31) {
        l(_0x52ce31);
      }
    });
    const _0x232fb7 = {
      pattern: "technews",
      alias: ["tech", "gadgets360"],
      react: '📡',
      desc: tmsg,
      category: '',
      use: ".technews"
    };
    cmd(_0x232fb7, async (_0x19708d, _0x26dd46, _0x3450ca, {
      from: _0x185928,
      q: _0x5ef693,
      reply: _0x44025e
    }) => {
      function _0x292eb7(_0x39d1d0, _0x13ae6e, _0x108de7, _0x325470, _0x5e9434) {
        return _0xa94a(_0x108de7 - 0x192 + 0x320, _0x39d1d0);
      }
      function _0x69c6f9(_0x550d04, _0x2e5c12, _0x33f19d, _0x26a419, _0xcc17f4) {
        return _0xa94a(_0x33f19d - 0x3c3 + 0x320, _0x550d04);
      }
      function _0x198a9c(_0x594713, _0x443e1a, _0x825214, _0xa2cba2, _0x27bd5d) {
        return _0xa94a(_0x443e1a + 0x3b6 - 0x0, _0xa2cba2);
      }
      function _0x51a297(_0x37c572, _0x4932cb, _0x339696, _0x539f4a, _0x678130) {
        return _0xa94a(_0x539f4a - 0x224 + 0x1cb, _0x4932cb);
      }
      const _0x211e25 = {
        'aQunz': function (_0x4605cf, _0x1d8efb) {
          return _0x4605cf(_0x1d8efb);
        },
        'ndFwY': function (_0x3b211b, _0x55c024) {
          return _0x3b211b(_0x55c024);
        },
        'IwCRN': function (_0x1bd07f) {
          return _0x1bd07f();
        },
        'OLZdc': function (_0x319b7b, _0x5e338d) {
          return _0x319b7b !== _0x5e338d;
        },
        'pxBAq': "cpkIN",
        'IPEjv': "tech-news-scraper",
        'AzYlV': function (_0x17bbad, _0x22ad56) {
          return _0x17bbad < _0x22ad56;
        },
        'vZxAi': function (_0x275d08, _0x475e2a) {
          return _0x275d08 === _0x475e2a;
        },
        'FgQqy': "IldAH",
        'BVZaL': "3|2|0|1|4",
        'KSnCn': function (_0x247360, _0x486136) {
          return _0x247360 === _0x486136;
        },
        'tpCMu': "qEqIV",
        'EDUdV': "CLPgG",
        'DayKG': function (_0x4020ae) {
          return _0x4020ae();
        }
      };
      function _0x11a24a(_0x24a51a, _0x2a0088, _0x247e5c, _0x29aabc, _0x2d1fed) {
        return _0xa94a(_0x24a51a + 0x16f + 0x208, _0x29aabc);
      }
      try {
        const _0x5868a9 = require("tech-news-scraper");
        const _0x4d4a36 = await _0x5868a9.allNews();
        let _0x5a0a04 = " X - B Y T E ＴＥＣＨ ＮＥＷＳ \n\n";
        for (let _0x35f398 = 0; _0x35f398 < 16; _0x35f398++) {
          _0x5a0a04 += "*⛓️ No:* " + _0x4d4a36.result[_0x35f398].no + "\n";
          _0x5a0a04 += "*📃 Title:* " + _0x4d4a36.result[_0x35f398].title + "\n";
          _0x5a0a04 += "*📚 CatName:* " + _0x4d4a36.result[_0x35f398].catname + "\n";
          _0x5a0a04 += "*🕒 Time:* " + _0x4d4a36.result[_0x35f398].date + "\n";
          _0x5a0a04 += "*📎 Link:* " + _0x4d4a36.result[_0x35f398].link + "\n\n--------------------------------------------\n\n\n";
        }
        return await _0x44025e(_0x5a0a04);
        const _0xdf998f = {
          url: _0x4d4a36.result[i].img
        };
        const _0x3611d2 = {
          image: _0xdf998f,
          caption: _0x5a0a04
        };
        const _0xd5bc0f = {
          quoted: _0x3450ca
        };
        return await _0x19708d.sendMessage(_0x185928, _0x3611d2, _0xd5bc0f);
        const _0x289f1e = {
          text: '✅',
          key: _0x3450ca.key
        };
        const _0x10f3c4 = {
          react: _0x289f1e
        };
        await _0x19708d.sendMessage(_0x185928, _0x10f3c4);
      } catch (_0x566e43) {
        _0x44025e();
        l(_0x566e43);
      }
    });
    const _0xaa27d0 = {
      pattern: "sirasanews",
      react: "🎙️",
      desc: "To see esana news",
      category: '',
      use: ".esananews",
      filename: __filename
    };
    cmd(_0xaa27d0, async (_0x7d9b27, _0x5d3238, _0x430a1f, {
      from: _0x5bd469,
      q: _0x3c3dc2,
      reply: _0x4a1aec
    }) => {
      function _0x278b69(_0x5ddd64, _0x2c67d7, _0x45802a, _0x6f3307, _0x1c78d4) {
        return _0xa94a(_0x1c78d4 + 0x258 - 0x0, _0x6f3307);
      }
      function _0x7c86d7(_0x10a065, _0x2996b8, _0x37fc9d, _0x494151, _0x38e378) {
        return _0xa94a(_0x37fc9d + 0x19 + 0x1cb, _0x494151);
      }
      function _0x26d1c6(_0x4b9444, _0x300780, _0x4685bf, _0x3b90f6, _0x20b5b3) {
        return _0xa94a(_0x300780 - 0x190 + 0x320, _0x4b9444);
      }
      function _0x5589a4(_0x4d23ff, _0xa227e6, _0x2bc57b, _0x20ed4a, _0x2673e2) {
        return _0xa94a(_0x20ed4a + 0xe0 + 0x208, _0x4d23ff);
      }
      function _0x21cef3(_0xafe14b, _0x13ed91, _0x3ae625, _0x5923e0, _0x493fb3) {
        return _0xa94a(_0x13ed91 - 0x137 + 0x1cb, _0x5923e0);
      }
      const _0x4febd1 = {
        'Teajx': function (_0x55d74e, _0x5e02f8) {
          return _0x55d74e(_0x5e02f8);
        },
        'bPLAU': "Please provide a phone number.",
        'yFeZa': function (_0x50f942, _0x98762a) {
          return _0x50f942(_0x98762a);
        },
        'VVfOo': function (_0xaedae2) {
          return _0xaedae2();
        },
        'ppWSP': function (_0x9f3462, _0x14906f) {
          return _0x9f3462 !== _0x14906f;
        },
        'yzlgq': "wcayl",
        'TCakl': function (_0x39b106, _0x33eb51) {
          return _0x39b106 !== _0x33eb51;
        },
        'DJdlR': "JcYIr",
        'ITdwp': "cnSBf",
        'RqGXo': function (_0x105fc, _0x1f9b49) {
          return _0x105fc(_0x1f9b49);
        }
      };
      const _0x5a2786 = await sirasanews();
      try {
        const _0x368b68 = "⛶ X - B Y T E  𝙎𝙄𝙍𝘼𝙎𝘼 𝙉𝙀𝙒𝙎 ⛶    \n🌹⃝⃘̉̉̉̉̉̉🧚 *𝕋𝕀𝕋𝕃𝔼:* " + _0x5a2786.result.title + "\n\n🌹⃝⃘̉̉̉̉̉̉🧚 *𝔻𝔸𝕋𝔼 𝔸ℕ𝔻 𝕋𝕀𝕄𝔼* : " + _0x5a2786.result.dateandtime + "\n\n🌹⃝⃘̉̉̉̉̉̉🧚 *𝔻𝔼𝕊ℂℝ𝕀𝕃𝕋𝕀𝕆ℕ:* " + _0x5a2786.result.description + "\n\n🌹⃝⃘̉̉̉̉̉̉🧚 *ℕ𝔼𝕎𝕊 𝕃𝕀ℕ𝕂:* " + _0x5a2786.result.link;
        const _0xa220dc = {
          url: _0x5a2786.result.image
        };
        const _0x1505ce = {
          image: _0xa220dc,
          caption: _0x368b68
        };
        const _0x4a5511 = {
          quoted: _0x430a1f
        };
        await _0x7d9b27.sendMessage(_0x5bd469, _0x1505ce, _0x4a5511);
        const _0x142129 = {
          text: '✅',
          key: _0x430a1f.key
        };
        const _0x2feeb4 = {
          react: _0x142129
        };
        await _0x7d9b27.sendMessage(_0x5bd469, _0x2feeb4);
      } catch (_0x76a9df) {
        _0x4a1aec();
        l(_0x76a9df);
      }
    });
    const _0x4beb83 = {
      pattern: "esananews",
      react: "🎙️",
      desc: "To see esana news",
      category: '',
      use: ".sirasa",
      filename: __filename
    };
    cmd(_0x4beb83, async (_0x44d2d2, _0x254a24, _0x2bb80b, {
      from: _0x15a756,
      q: _0x24392b,
      reply: _0x18fd99
    }) => {
      function _0x379d17(_0x5121c2, _0x2bcbcc, _0x2af101, _0x66311d, _0x1e5b64) {
        return _0xa94a(_0x1e5b64 - 0xde - 0x0, _0x66311d);
      }
      const _0x45959b = {
        'dLOls': function (_0x2c9b1f, _0x3517c2) {
          return _0x2c9b1f(_0x3517c2);
        },
        'KdDgZ': "*Error !!*",
        'AoDCP': function (_0x2d4083, _0x523b90) {
          return _0x2d4083 === _0x523b90;
        },
        'ORufp': "EzQPs",
        'QlvQS': "ZIIRS",
        'cMGIq': function (_0x3d83da, _0x45bfbc) {
          return _0x3d83da || _0x45bfbc;
        },
        'mcTQo': "tpjnU",
        'wwRcu': function (_0x21fcda) {
          return _0x21fcda();
        }
      };
      function _0x24dd30(_0x4af2fd, _0x1428f3, _0x4f2991, _0x11d874, _0x3f1fc3) {
        return _0xa94a(_0x11d874 + 0x112 - 0x3a7, _0x3f1fc3);
      }
      function _0xb1db48(_0x5bc13c, _0x3839ce, _0x1acd1f, _0x145b50, _0x1ba6ce) {
        return _0xa94a(_0x145b50 + 0xfa - 0x0, _0x5bc13c);
      }
      function _0x632c99(_0x3cf720, _0x423786, _0x31ccab, _0x700e90, _0x28975c) {
        return _0xa94a(_0x700e90 + 0x2c6 - 0x0, _0x28975c);
      }
      function _0x80f175(_0x111af1, _0x31366d, _0x424c08, _0x569297, _0x51d819) {
        return _0xa94a(_0x569297 + 0x334 - 0x3a7, _0x51d819);
      }
      try {
        const _0x2e81e0 = await api.latest_id();
        const _0x257fb2 = _0x2e81e0.results.news_id;
        let _0x56d724 = _0x24392b || _0x257fb2;
        const _0xa69a2a = await api.news(_0x56d724);
        const _0x1d6d4b = _0xa69a2a.results;
        const _0x4646e = {
          url: _0x1d6d4b.COVER
        };
        const _0x288713 = {
          image: _0x4646e,
          caption: "\n*┠─❲ 👩🏻‍🎨 X-BYTE 🗞️❳* \n\n*┃◉* *⇨ ᴛɪᴛᴇʟ :*\n " + _0x1d6d4b.TITLE + "\n\n*┃◉* *⇨ ᴅᴀᴛᴇ :*\n " + _0x1d6d4b.PUBLISHED + "\n\n*┃◉* *⇨ ᴜʀʟ :*\n " + _0x1d6d4b.URL + "\n\n*┃◉* *⇨ Description :*\n " + _0x1d6d4b.DESCRIPTION + "\n\n*𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 𝚅𝙰𝙹𝙸𝚁𝙰 𝚈𝚃 ®*\n\n"
        };
        const _0xc2c6e0 = {
          quoted: _0x2bb80b
        };
        const _0x3641de = await _0x44d2d2.sendMessage(_0x15a756, _0x288713, _0xc2c6e0);
        const _0x19ca64 = {
          text: '✅',
          key: _0x2bb80b.key
        };
        const _0x3a5a8f = {
          react: _0x19ca64
        };
        await _0x44d2d2.sendMessage(_0x15a756, _0x3a5a8f);
      } catch (_0x28db1f) {
        _0x18fd99();
        l(_0x28db1f);
      }
    });
    const _0x4cce65 = {
      pattern: "derananews",
      react: "🎙️",
      desc: "To see derana news",
      category: '',
      use: ".derananews",
      filename: __filename
    };
    cmd(_0x4cce65, async (_0x2e83cf, _0x51dfee, _0x1c6186, {
      from: _0x6acae0,
      q: _0x2ff1e9,
      reply: _0x2a2f86
    }) => {
      function _0x3f06bb(_0xc48178, _0x23cef2, _0x2f3a89, _0x370a73, _0x292d66) {
        return _0xa94a(_0x370a73 - 0x25f + 0x208, _0x292d66);
      }
      function _0x2ed477(_0x28a9b9, _0x26a5e4, _0x3eafea, _0x5147d5, _0x5662ce) {
        return _0xa94a(_0x5147d5 - 0x3a1 - 0x0, _0x3eafea);
      }
      function _0xd46be4(_0x226146, _0x4c1d37, _0x208190, _0x16bd15, _0x5412a2) {
        return _0xa94a(_0x5412a2 + 0xb6 - 0x0, _0x208190);
      }
      function _0x16731b(_0x561f2a, _0x33ff, _0x543e46, _0x4aac29, _0x1e9a86) {
        return _0xa94a(_0x1e9a86 + 0x3b + 0x1cb, _0x561f2a);
      }
      const _0x31630c = {
        'Kwzmc': function (_0x47d3ef, _0x5a5536) {
          return _0x47d3ef(_0x5a5536);
        },
        'QZuaO': "Select you want to see news",
        'dgwRT': function (_0x2c1f9a) {
          return _0x2c1f9a();
        },
        'HHppB': function (_0x2061f7, _0x11e693) {
          return _0x2061f7 === _0x11e693;
        },
        'xmmtv': "WOuKd",
        'obtbK': "unEqB",
        'QxBmo': function (_0x244253, _0x170f07) {
          return _0x244253 !== _0x170f07;
        },
        'kXzJM': "RXSSU",
        'KElZZ': "AeFbM"
      };
      function _0x14ff0f(_0x4ce95e, _0x20de5b, _0x584c82, _0x53431c, _0xd0dde5) {
        return _0xa94a(_0x4ce95e + 0x372 - 0x3a7, _0xd0dde5);
      }
      const _0x30b572 = await derananews();
      try {
        const _0x376e47 = "  X - B Y T E  𝘿𝙀𝙍𝘼𝙉𝘼 𝙉𝙀𝙒𝙎 \n    \n🌹⃝⃘̉̉̉̉̉̉🧚 *𝕋𝕀𝕋𝕃𝔼:* " + _0x30b572.title + "\n\n🌹⃝⃘̉̉̉̉̉̉🧚 *ℕ𝔼𝕎𝕊 𝕃𝕀ℕ𝕂:* " + _0x30b572.link + "\n\n🌹⃝⃘̉̉̉̉̉̉🧚 *𝔻𝔼𝕊ℂℝ𝕀𝕃𝕋𝕀𝕆ℕ:* " + _0x30b572.description;
        const _0x317f9f = {
          url: _0x30b572.image
        };
        const _0x4ab8c2 = {
          image: _0x317f9f,
          caption: _0x376e47
        };
        const _0x275fc4 = {
          quoted: _0x1c6186
        };
        await _0x2e83cf.sendMessage(_0x6acae0, _0x4ab8c2, _0x275fc4);
        const _0x2e744e = {
          text: '✅',
          key: _0x1c6186.key
        };
        const _0x394790 = {
          react: _0x2e744e
        };
        await _0x2e83cf.sendMessage(_0x6acae0, _0x394790);
      } catch (_0xa8f444) {
        _0x2a2f86();
        l(_0xa8f444);
      }
    });
    const _0x5bd86f = {
      pattern: "hirunews",
      react: '🔖',
      desc: "To see info of hirunews",
      category: '',
      use: ".hirunews",
      filename: __filename
    };
    cmd(_0x5bd86f, async (_0x591366, _0x1cebd3, _0x4bf874, {
      from: _0x319992,
      q: _0xb3dc6f,
      reply: _0x4c500e
    }) => {
      function _0x346652(_0x2997a8, _0xc97804, _0x47c3fe, _0x1e3dc9, _0x20c52a) {
        return _0xa94a(_0x47c3fe + 0x2a6 - 0x0, _0x20c52a);
      }
      const _0x228376 = {
        'KQUWo': function (_0x394135) {
          return _0x394135();
        },
        'gaFDw': function (_0x458a52, _0x4bc826) {
          return _0x458a52(_0x4bc826);
        },
        'fNiEw': function (_0x3a1cd9, _0x32e814) {
          return _0x3a1cd9 !== _0x32e814;
        },
        'FoZnP': "UWuyj",
        'prLnF': "hirunews-scrap",
        'fRoOX': "qUuoq",
        'ltJyQ': "FFUQf"
      };
      function _0x5b8100(_0x4423ef, _0x250c4d, _0x4470f3, _0x5c903f, _0x3bce28) {
        return _0xa94a(_0x4470f3 - 0x507 + 0x208, _0x250c4d);
      }
      function _0x98e1bd(_0xee00f6, _0x4a4701, _0x1622bb, _0x2f91b7, _0x4bee5f) {
        return _0xa94a(_0x4a4701 + 0x5cc - 0x3a7, _0x4bee5f);
      }
      function _0x24cea9(_0x39e65e, _0x44473d, _0x2c540e, _0x441e6a, _0x581348) {
        return _0xa94a(_0x44473d - 0x3df - 0x0, _0x2c540e);
      }
      function _0x47f0ce(_0x245548, _0x2dc884, _0x1d1c87, _0x4836a9, _0x394eed) {
        return _0xa94a(_0x394eed + 0x537 - 0x3a7, _0x1d1c87);
      }
      try {
        const _0x194ee = require("hirunews-scrap");
        var _0x179f6a = new _0x194ee();
        const _0x39a77a = await _0x179f6a.MainNews();
        const _0x3b63c2 = _0x39a77a.results;
        const _0x4fb087 = _0x3b63c2.title;
        const _0x3bcfd5 = _0x3b63c2.news;
        const _0x22cfcc = _0x3b63c2.date;
        const _0x12cf83 = _0x3b63c2.thumb;
        const _0x500ee1 = {
          url: _0x12cf83
        };
        const _0x4476da = {
          image: _0x500ee1,
          caption: "\n X - B Y T E 𝙃𝙄𝙍𝙐 𝙉𝙀𝙒𝙎 \n\n📍➣*" + _0x4fb087 + "* \n●━━━━━━━━━━━━━━━━━━━━━●  \n📃➣" + _0x3bcfd5 + " \n●━━━━━━━━━━━━━━━━━━━━━● \n📅➣" + _0x22cfcc + "\n●━━━━━━━━━━━━━━━━━━━━━●\n\n🗞️ *News From hirunews.lk*\n\n🔗 *Create By Hamza rathnayaka*\n\n📍 *SL News*\n\n👤 *Owner Number* :- http://wa.me/9471199757\n\n\n●━━━━━━━━━━━━━━━━━━━━━●"
        };
        const _0x470e99 = {
          quoted: _0x4bf874
        };
        const _0x2548e5 = await _0x591366.sendMessage(_0x319992, _0x4476da, _0x470e99);
        const _0x3cc43d = {
          text: '📰',
          key: _0x2548e5.key
        };
        const _0x512320 = {
          react: _0x3cc43d
        };
        await _0x591366.sendMessage(_0x319992, _0x512320);
      } catch (_0x18b9b9) {
        _0x4c500e();
        l(_0x18b9b9);
      }
    });
    const _0x3cf025 = {
      pattern: "cricketnews",
      react: "🎙️",
      desc: "To see info cricket news",
      category: '',
      use: ".cricketnews",
      filename: __filename
    };
    cmd(_0x3cf025, async (_0x24d142, _0x183af1, _0x4cf531, {
      from: _0x3fd4c8,
      q: _0x597945,
      reply: _0x44aabd
    }) => {
      function _0xa40b1b(_0x593a7d, _0x4c0492, _0x5f4b66, _0x36a426, _0x3b309e) {
        return _0xa94a(_0x5f4b66 - 0x328 + 0x208, _0x593a7d);
      }
      function _0x391273(_0x15aa2b, _0x3febff, _0x4eedf9, _0x3c3cc9, _0x423561) {
        return _0xa94a(_0x3c3cc9 - 0x168 + 0x208, _0x3febff);
      }
      function _0x50495(_0x96d6db, _0x289e63, _0x43d5f2, _0x4837e9, _0xe71c96) {
        return _0xa94a(_0x96d6db - 0x36e + 0x1cb, _0xe71c96);
      }
      function _0x22b049(_0x5b82b0, _0x188ba8, _0x51355f, _0x112a59, _0x5d9ce4) {
        return _0xa94a(_0x5d9ce4 + 0x484 - 0x3a7, _0x188ba8);
      }
      function _0x1c6ca0(_0x4ff5a5, _0x1e12bf, _0x62813a, _0x5c38fc, _0x25c6cd) {
        return _0xa94a(_0x1e12bf - 0x23c + 0x208, _0x4ff5a5);
      }
      const _0x56ead1 = {
        'TOgcv': function (_0x2963d5) {
          return _0x2963d5();
        },
        'ngPJV': function (_0x530bda, _0x2d2648) {
          return _0x530bda(_0x2d2648);
        },
        'YUhLW': function (_0x255472, _0x261a6c) {
          return _0x255472 + _0x261a6c;
        },
        'eeVYF': function (_0x2251d9, _0x1e377a) {
          return _0x2251d9 + _0x1e377a;
        },
        'KlnfI': "\n*Match Name  :* ",
        'oivvu': "\n*Match Status  :* ",
        'qPEkn': function (_0x4eb86c, _0x3c6ac1) {
          return _0x4eb86c + _0x3c6ac1;
        },
        'fpLNv': "\n*Match  Date   :* ",
        'LLbOE': function (_0x581efa, _0x574e16) {
          return _0x581efa + _0x574e16;
        },
        'uFrGR': "\n*Match Started :* ",
        'njjNz': function (_0x25cbc6, _0xc6d292) {
          return _0x25cbc6 + _0xc6d292;
        },
        'krAfk': "\n*Match Ended:* ",
        'XSvoR': function (_0x35ac95, _0x118ddf) {
          return _0x35ac95 !== _0x118ddf;
        },
        'HDzjN': "VPZPs",
        'eilRZ': "XUcAY",
        'OBfDD': function (_0x322c5d, _0x1dcb11) {
          return _0x322c5d(_0x1dcb11);
        },
        'MrHIB': function (_0x56ad4e, _0x38ac66) {
          return _0x56ad4e(_0x38ac66);
        },
        'xYJxy': "https://api.cricapi.com/v1/currentMatches?apikey=f68d1cb5-a9c9-47c5-8fcd-fbfe52bace78",
        'YvESr': function (_0x5a37fb, _0x317d81) {
          return _0x5a37fb < _0x317d81;
        },
        'KSsIT': function (_0x1d6bc4, _0x9f0163) {
          return _0x1d6bc4 === _0x9f0163;
        },
        'PuGkp': "ozzsi",
        'JPdNv': function (_0x11ad62, _0x12483a) {
          return _0x11ad62 + _0x12483a;
        },
        'MqeLu': function (_0x1a7c22, _0x2459b0) {
          return _0x1a7c22 + _0x2459b0;
        },
        'LWniG': function (_0x59f874, _0x48020e) {
          return _0x59f874 + _0x48020e;
        },
        'rDLhz': function (_0x582d56, _0x141369) {
          return _0x582d56 === _0x141369;
        },
        'WlenJ': "PuhGu",
        'QzjdE': "DemcZ",
        'IRFOq': function (_0xdd4f, _0x101234) {
          return _0xdd4f(_0x101234);
        }
      };
      try {
        _0x44aabd("*_Please Wait, Getting Cricket Info_*");
        const _0x224f6b = await fetch("https://api.cricapi.com/v1/currentMatches?apikey=f68d1cb5-a9c9-47c5-8fcd-fbfe52bace78");
        const _0x466b37 = await _0x224f6b.json();
        console.log(_0x466b37);
        for (let _0x17c113 = 0; _0x17c113 < _0x466b37.data.length; _0x17c113++) {
          let _0xe08fa5 = _0x17c113 + 1;
          _0x597945 += "\n*--------------------- MATCH " + _0x17c113 + "-------------------*";
          _0x597945 += "\n*Match Name  :* " + _0x466b37.data[_0x17c113].name;
          _0x597945 += "\n*Match Status  :* " + _0x466b37.data[_0x17c113].status;
          _0x597945 += "\n*Match  Date   :* " + _0x466b37.data[_0x17c113].dateTimeGMT;
          _0x597945 += "\n*Match Started :* " + _0x466b37.data[_0x17c113].matchStarted;
          _0x597945 += "\n*Match Ended:* " + _0x466b37.data[_0x17c113].matchEnded;
        }
        return await _0x44aabd(_0x597945);
        const _0x496704 = {
          text: '✅',
          key: _0x4cf531.key
        };
        const _0x84d5be = {
          react: _0x496704
        };
        await _0x24d142.sendMessage(_0x3fd4c8, _0x84d5be);
      } catch (_0x5260e4) {
        _0x44aabd();
        l(_0x5260e4);
      }
    });
  }
  const _0x21d194 = {
    pattern: "manga",
    react: "🎙️",
    desc: "To see info of manga",
    category: "search",
    use: ".manga",
    filename: __filename
  };
  cmd(_0x21d194, async (_0x4b2e33, _0x433fdf, _0x336f62, {
    from: _0x42ff31,
    l: _0x21aacf,
    prefix: _0x1e76e4,
    quoted: _0x3d77d9,
    body: _0x1e3e2d,
    isCmd: _0x19ea37,
    command: _0x231685,
    args: _0x23cfff,
    q: _0x3a72ad,
    isGroup: _0x570b1d,
    sender: _0x57c650,
    senderNumber: _0x3f2332,
    botNumber2: _0x481805,
    botNumber: _0x4e3302,
    pushname: _0x2e07be,
    isMe: _0x3829ab,
    isOwner: _0x54d945,
    groupMetadata: _0x44bdc6,
    groupName: _0x552ef5,
    participants: _0x43e2a4,
    groupAdmins: _0x1c90ef,
    isBotAdmins: _0x571def,
    isAdmins: _0x28a8ae,
    reply: _0x2f5b1f
  }) => {
    function _0x3ba149(_0x5ea422, _0x39a257, _0xd49741, _0x394636, _0x89875b) {
      return _0xa94a(_0x89875b + 0x154 + 0x208, _0xd49741);
    }
    function _0x39f114(_0x3913c9, _0x4b24e8, _0x396b3e, _0x5e6c91, _0xd2175) {
      return _0xa94a(_0x4b24e8 + 0x126 - 0x0, _0x5e6c91);
    }
    function _0x1cfa6f(_0x112602, _0x1bfec9, _0x44e5d1, _0x2d815d, _0x4e083b) {
      return _0xa94a(_0x112602 + 0x117 - 0x0, _0x1bfec9);
    }
    function _0x3a7d7b(_0x3ff613, _0x132b1c, _0x2f6231, _0x46f2a5, _0x3fcfdb) {
      return _0xa94a(_0x132b1c + 0x17d - 0x3a7, _0x46f2a5);
    }
    const _0x48e669 = {
      'XCaTN': "4|1|0|3|2",
      'fGMJk': function (_0x4b23a0, _0x2a95fb) {
        return _0x4b23a0 !== _0x2a95fb;
      },
      'WGeLZ': "QvosF",
      'VuTRR': function (_0x218e03, _0x1f9295) {
        return _0x218e03(_0x1f9295);
      },
      'zcabH': "@shineiichijo/marika",
      'WkQgE': function (_0x278257, _0x19b716) {
        return _0x278257 < _0x19b716;
      },
      'jduBV': function (_0x247899, _0xc2eb07) {
        return _0x247899 === _0xc2eb07;
      },
      'JFvyC': "tXQEW",
      'aoweU': "BnrSt",
      'joHBA': function (_0x4c15d1, _0x258673) {
        return _0x4c15d1 < _0x258673;
      },
      'FLPEO': "QaaiC",
      'jccbk': function (_0x4acb49, _0x377bbb) {
        return _0x4acb49 !== _0x377bbb;
      },
      'mLaeS': "zBtpd",
      'koEEm': function (_0x3130da) {
        return _0x3130da();
      }
    };
    function _0x46cdae(_0x1a1f2f, _0x3a5f3d, _0x371193, _0x18568c, _0xc0b5e) {
      return _0xa94a(_0x3a5f3d - 0x44e + 0x1cb, _0x371193);
    }
    try {
      const {
        Manga: _0x34033e
      } = require("@shineiichijo/marika");
      const _0x451224 = new _0x34033e();
      if (!_0x3a72ad) {
        return _0x2f5b1f("Which manga do you want to search?\nExample " + _0x1e76e4 + "manga naruto");
      }
      let _0x454f55 = await _0x451224.searchManga(_0x3a72ad);
      let _0x8aaf27 = "🎀 *Title: " + _0x454f55.data[0].title + "*\n";
      _0x8aaf27 += "📈 *Status: " + _0x454f55.data[0].status + "*\n";
      _0x8aaf27 += "🌸 *Total Volumes: " + _0x454f55.data[0].volumes + "*\n";
      _0x8aaf27 += "🎗 *Total Chapters: " + _0x454f55.data[0].chapters + "*\n";
      _0x8aaf27 += "🧧 *Genres:*\n";
      for (let _0xcef242 = 0; _0xcef242 < _0x454f55.data[0].genres.length; _0xcef242++) {
        _0x8aaf27 += "\t\t\t\t\t\t\t\t*" + _0x454f55.data[0].genres[_0xcef242].name + "*\n";
      }
      _0x8aaf27 += "✨ *Published on: " + _0x454f55.data[0].published.from + "*\n";
      _0x8aaf27 += "🌟 *Score: " + _0x454f55.data[0].scored + "*\n";
      _0x8aaf27 += "🎐 *Popularity: " + _0x454f55.data[0].popularity + "*\n";
      _0x8aaf27 += "🎏 *Favorites: " + _0x454f55.data[0].favorites + "*\n";
      _0x8aaf27 += "✍ *Authors:*\n";
      for (let _0x10161c = 0; _0x10161c < _0x454f55.data[0].authors.length; _0x10161c++) {
        _0x8aaf27 += "\t\t\t\t\t\t\t\t\t*" + _0x454f55.data[0].authors[_0x10161c].name + "* *(" + _0x454f55.data[0].authors[0].type + ")*\n";
      }
      _0x8aaf27 += "\n🌐 *URL: " + _0x454f55.data[0].url + "*\n\n";
      if (_0x454f55.data[0].background !== null) {
        _0x8aaf27 += "🎆 *Background:* " + _0x454f55.data[0].background;
      }
      _0x8aaf27 += "❄️ *Description:* " + _0x454f55.data[0].synopsis.replace(/\[Written by MAL Rewrite]/g, '');
      const _0xafcb61 = {
        url: _0x454f55.data[0].images.jpg.large_image_url
      };
      const _0x3a9d88 = {
        image: _0xafcb61,
        caption: _0x8aaf27
      };
      const _0x336058 = {
        quoted: _0x433fdf
      };
      _0x4b2e33.sendMessage(_0x42ff31, _0x3a9d88, _0x336058);
      const _0x2c6513 = {
        text: '✅',
        key: _0x433fdf.key
      };
      const _0x1a6b12 = {
        react: _0x2c6513
      };
      await _0x4b2e33.sendMessage(_0x42ff31, _0x1a6b12);
    } catch (_0x25ff93) {
      _0x2f5b1f();
      _0x21aacf(_0x25ff93);
    }
  });
  const _0xe7829e = {
    pattern: "weather",
    react: "🎙️",
    desc: "To see info of weather",
    category: "search",
    use: ".weather",
    filename: __filename
  };
  function _0x436aee(_0x546d1f, _0x5cbda5, _0xeda63d, _0x3f59dd, _0x221e61) {
    return _0xa94a(_0xeda63d + 0x1cb, _0x5cbda5);
  }
  cmd(_0xe7829e, async (_0x4fdd56, _0x2f9e87, _0x3d0dec, {
    from: _0x4ed2b6,
    l: _0x5d8c8f,
    prefix: _0x2c9a3f,
    quoted: _0x5a381a,
    body: _0x221696,
    isCmd: _0x246a78,
    command: _0x5a081,
    args: _0x227a45,
    q: _0x2543d3,
    isGroup: _0x339619,
    sender: _0x4f3fac,
    senderNumber: _0x2dfdd4,
    botNumber2: _0x4e24ef,
    botNumber: _0x13a7bb,
    pushname: _0x4e4201,
    isMe: _0x115fff,
    isOwner: _0xf373e3,
    groupMetadata: _0x2e52b0,
    groupName: _0x464816,
    participants: _0x363b51,
    groupAdmins: _0x31783d,
    isBotAdmins: _0x449638,
    isAdmins: _0x5a3b13,
    reply: _0x499c84
  }) => {
    function _0x2c8e70(_0x42014d, _0x13f0f6, _0x29a202, _0xbfd1d, _0xf3095d) {
      return _0xa94a(_0x13f0f6 - 0x347 + 0x1cb, _0x29a202);
    }
    function _0x55af88(_0x14274f, _0x15d3b6, _0x15ac9b, _0x28f087, _0x3fd4c2) {
      return _0xa94a(_0x15ac9b + 0x296 - 0x0, _0x3fd4c2);
    }
    const _0x2aa143 = {
      'QOxnD': "0|11|12|2|9|5|10|4|8|3|13|6|7|1",
      'qRPSZ': function (_0x1dd625, _0x27fa0d) {
        return _0x1dd625 === _0x27fa0d;
      },
      'DVgLw': function (_0x58d6d5, _0x2dc44b) {
        return _0x58d6d5 === _0x2dc44b;
      },
      'bTAyN': function (_0x176dc4, _0x46ab4c) {
        return _0x176dc4 === _0x46ab4c;
      },
      'OKrwU': function (_0x4e06b1, _0x2a22bb) {
        return _0x4e06b1 !== _0x2a22bb;
      },
      'ECoMD': "OjcXN",
      'lHFAw': "aJiJy",
      'CapyD': function (_0x3a3600, _0x5b8df5) {
        return _0x3a3600(_0x5b8df5);
      },
      'sbDWr': "What location?",
      'VVZNt': function (_0x12cd3e, _0x1f4ecf) {
        return _0x12cd3e === _0x1f4ecf;
      },
      'pAruZ': "soMar",
      'pEeIj': "IneBj",
      'yMbwS': function (_0x250821) {
        return _0x250821();
      },
      'AvIrS': function (_0x542924, _0x46e0dc) {
        return _0x542924(_0x46e0dc);
      }
    };
    function _0x309a3b(_0x3e3a92, _0x2fd0ca, _0x4aa23b, _0x264b46, _0x2e768e) {
      return _0xa94a(_0x2e768e - 0x635 + 0x320, _0x3e3a92);
    }
    function _0x5ef9f3(_0x57a6e6, _0x28a9fb, _0x3d2c05, _0x368649, _0x1ca9b2) {
      return _0xa94a(_0x57a6e6 + 0x2f5 - 0x3a7, _0x3d2c05);
    }
    function _0x24c576(_0x58f57c, _0x53100e, _0x30c080, _0x325be6, _0x2c82ae) {
      return _0xa94a(_0x30c080 - 0xde - 0x0, _0x2c82ae);
    }
    try {
      if (!_0x2543d3) {
        return _0x499c84("What location?");
      }
      let _0x3d2c63 = _0x2543d3.split(" ")[0];
      let _0x1b4909 = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + _0x3d2c63 + "&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en");
      let _0x58e944 = '';
      _0x58e944 += "*🗺️Weather of  " + _0x3d2c63 + "*\n\n";
      _0x58e944 += "*Weather:-* " + _0x1b4909.data.weather[0].main + "\n";
      _0x58e944 += "*Description:-* " + _0x1b4909.data.weather[0].description + "\n";
      _0x58e944 += "*Avg Temp:-* " + _0x1b4909.data.main.temp + "\n";
      _0x58e944 += "*Feels Like:-* " + _0x1b4909.data.main.feels_like + "\n";
      _0x58e944 += "*Pressure:-* " + _0x1b4909.data.main.pressure + "\n";
      _0x58e944 += "*Humidity:-* " + _0x1b4909.data.main.humidity + "\n";
      _0x58e944 += "*Humidity:-* " + _0x1b4909.data.wind.speed + "\n";
      _0x58e944 += "*Latitude:-* " + _0x1b4909.data.coord.lat + "\n";
      _0x58e944 += "*Longitude:-* " + _0x1b4909.data.coord.lon + "\n";
      _0x58e944 += "*Country:-* " + _0x1b4909.data.sys.country + "\n";
      const _0x86c0a4 = {
        text: _0x58e944
      };
      const _0xc9fd = {
        quoted: _0x2f9e87
      };
      _0x4fdd56.sendMessage(_0x4ed2b6, _0x86c0a4, _0xc9fd);
      const _0x2fdd5d = {
        text: '✅',
        key: _0x2f9e87.key
      };
      const _0x265195 = {
        react: _0x2fdd5d
      };
      await _0x4fdd56.sendMessage(_0x4ed2b6, _0x265195);
    } catch (_0x21d34b) {
      _0x499c84();
      _0x5d8c8f(_0x21d34b);
    }
  });
  const _0x431db9 = {
    pattern: "cricketscore",
    alias: ["score"],
    react: "🎙️",
    desc: "To see info of cricket",
    category: "search",
    use: ".cricketscore",
    filename: __filename
  };
  cmd(_0x431db9, async (_0x4ff9f5, _0x3f4c94, _0x564a39, {
    from: _0xa7f723,
    l: _0x50a637,
    prefix: _0x306dfe,
    quoted: _0x491adb,
    body: _0x285135,
    isCmd: _0x1b242e,
    command: _0x4c82ee,
    args: _0x10e715,
    q: _0x18022c,
    isGroup: _0x3a83ee,
    sender: _0x5c5fe9,
    senderNumber: _0x53aded,
    botNumber2: _0xf61994,
    botNumber: _0x5f0b81,
    pushname: _0x250c36,
    isMe: _0x3c2508,
    isOwner: _0x137469,
    groupMetadata: _0x51dc7b,
    groupName: _0x1b55dd,
    participants: _0x4262f6,
    groupAdmins: _0x1b1751,
    isBotAdmins: _0x5d15de,
    isAdmins: _0x328b6e,
    reply: _0x16ba84
  }) => {
    function _0x3ce7ac(_0x3b6f93, _0x8359ed, _0x3fd2ec, _0x530c31, _0x7a26d4) {
      return _0xa94a(_0x8359ed - 0x282 + 0x320, _0x3fd2ec);
    }
    function _0x3b9a52(_0x5d34e3, _0x16ae7e, _0x21b2a8, _0x43907e, _0x1f92d0) {
      return _0xa94a(_0x16ae7e - 0x30e + 0x208, _0x1f92d0);
    }
    function _0x2a68ac(_0x55705a, _0x56e67b, _0x5e5078, _0x2066d5, _0x3c81db) {
      return _0xa94a(_0x5e5078 + 0x420 - 0x3a7, _0x2066d5);
    }
    function _0x4e5571(_0x3cbd9e, _0x36588b, _0x40e973, _0x280d0b, _0x32b72b) {
      return _0xa94a(_0x36588b + 0xcf + 0x208, _0x280d0b);
    }
    const _0x4a8230 = {
      'zqtST': function (_0x4e5087) {
        return _0x4e5087();
      },
      'MEuox': function (_0x1ca314, _0x161cbf) {
        return _0x1ca314(_0x161cbf);
      },
      'QMnoY': function (_0x391652) {
        return _0x391652();
      },
      'qpBLQ': function (_0x5b488e, _0x25668f) {
        return _0x5b488e(_0x25668f);
      },
      'xfkyc': "N/A",
      'epxnS': function (_0x4d0073, _0x31effd) {
        return _0x4d0073(_0x31effd);
      },
      'LMrIy': function (_0x3376e6, _0x487c46) {
        return _0x3376e6 + _0x487c46;
      },
      'bgbau': "⛔ *Error accurated !!*\n\n",
      'tGvId': function (_0x2d5fef, _0x3ae666) {
        return _0x2d5fef(_0x3ae666);
      },
      'Ohxwk': function (_0xc259ed, _0x554998) {
        return _0xc259ed !== _0x554998;
      },
      'IgljO': "UhNZO",
      'rVGeL': function (_0x588926, _0x994cdf) {
        return _0x588926 === _0x994cdf;
      },
      'KIXBY': "PHKJh",
      'JALdb': "Uesdg",
      'pUrbi': function (_0x90a322, _0x57705c) {
        return _0x90a322(_0x57705c);
      },
      'SFCkl': function (_0x41df42, _0x2557de) {
        return _0x41df42(_0x2557de);
      },
      'pEMcy': "XZlua",
      'gVzIJ': "data not found",
      'LiBFf': "IOmls",
      'YyvZe': "OoJmK",
      'gwRBX': function (_0x4b3afe, _0x4ccb84) {
        return _0x4b3afe === _0x4ccb84;
      },
      'dqpHl': "inxcX",
      'ABXdo': "VFtuE",
      'qQYYP': function (_0xff8d1c, _0x5da67e) {
        return _0xff8d1c !== _0x5da67e;
      },
      'NXgNV': function (_0x39a60b, _0x448fd9) {
        return _0x39a60b !== _0x448fd9;
      },
      'CIKFi': "DaYTE",
      'MzjVQ': "plTro",
      'EMWNe': "6|11|1|4|13|10|8|3|5|9|2|7|0|12",
      'VDYXi': function (_0x4638b0, _0x43e809) {
        return _0x4638b0 === _0x43e809;
      },
      'zKrEZ': function (_0x2d324f, _0x4f3219) {
        return _0x2d324f === _0x4f3219;
      },
      'JUcSX': "sJPDd",
      'kWFKT': "3|4|0|2|1"
    };
    function _0x2b0a38(_0x41034f, _0x49f733, _0x59028b, _0x1cd7b6, _0x2963f0) {
      return _0xa94a(_0x1cd7b6 + 0x8c + 0x1cb, _0x41034f);
    }
    try {
      if (!_0x18022c) {
        return _0x3f4c94.reply("*Provide a match ID for cricket score.*\nExample: !cricketscore 12345");
      }
      const _0x49f022 = encodeURIComponent(_0x18022c);
      const _0x3f5916 = "https://cricket-olive.vercel.app/score?id=" + _0x49f022;
      const _0x20abaf = await fetch(_0x3f5916);
      if (!_0x20abaf.ok) {
        return _0x3f4c94.reply("Invalid response from the cricket score API. Status code: " + _0x20abaf.status);
      }
      const _0x1d353a = await _0x20abaf.json();
      let _0x5da7d4 = "╭══════════════•∞•══╮\n";
      _0x5da7d4 += "│⿻   * X - B Y T E*\n";
      _0x5da7d4 += "│⿻   *LIVE MATCH INFO* ✨\n";
      _0x5da7d4 += "│⿻\n";
      if (_0x1d353a.update && _0x1d353a.update.toLowerCase() !== "data not found") {
        _0x5da7d4 += "│⿻   *" + _0x1d353a.title + "*\n";
        _0x5da7d4 += "│⿻   *" + _0x1d353a.update + "*\n";
        _0x5da7d4 += "│⿻ \n";
      } else {
        await _0x564a39.reply("*Update:* Data not found for the specified match ID.");
        return;
      }
      if (_0x1d353a.livescore && _0x1d353a.livescore.toLowerCase() !== "data not found") {
        _0x5da7d4 += "│⿻   *Live Score:* " + _0x1d353a.livescore + "\n";
        _0x5da7d4 += "│⿻   *Run Rate:* " + _0x1d353a.runrate + "\n";
        _0x5da7d4 += "│⿻\n";
        _0x5da7d4 += "│⿻   *Batter 1:* " + _0x1d353a.batterone + "\n";
        _0x5da7d4 += "│⿻   *" + _0x1d353a.batsmanonerun + " (" + _0x1d353a.batsmanoneball + ")* SR: " + _0x1d353a.batsmanonesr + " " + (_0x1d353a.batsmanone === _0x1d353a.batterone ? '' : '') + "\n";
        _0x5da7d4 += "│⿻\n";
        _0x5da7d4 += "│⿻   *Batter 2:* " + _0x1d353a.battertwo + "\n";
        _0x5da7d4 += "│⿻   *" + _0x1d353a.batsmantworun + " (" + _0x1d353a.batsmantwoball + ")* SR: " + _0x1d353a.batsmantwosr + " " + (_0x1d353a.battertwo === _0x1d353a.battertwo ? '' : '') + "\n";
        _0x5da7d4 += "│⿻\n";
        _0x5da7d4 += "│⿻   *Bowler 1:* " + _0x1d353a.bowlerone + "\n";
        _0x5da7d4 += "│⿻   *" + _0x1d353a.bowleroneover + " overs, " + _0x1d353a.bowleronerun + '/' + _0x1d353a.bowleronewickers + ", Econ:* " + _0x1d353a.bowleroneeconomy + " " + (_0x1d353a.bowlerone === _0x1d353a.bowlerone ? '' : '') + "\n";
        _0x5da7d4 += "│⿻\n";
        _0x5da7d4 += "│⿻    *Bowler 2:* " + _0x1d353a.bowlertwo + "\n";
        _0x5da7d4 += "│⿻   *" + _0x1d353a.bowlertwoover + " overs, " + _0x1d353a.bowlertworun + '/' + _0x1d353a.bowlertwowickers + ", Econ:* " + _0x1d353a.bowlertwoeconomy + " " + (_0x1d353a.bowlertwo === _0x1d353a.bowlertwo ? '' : '') + "\n";
      }
      _0x5da7d4 += "╰══•∞•═══════════════╯ ";
      await _0x564a39.reply(_0x5da7d4);
    } catch (_0x451dd2) {
      console.error(_0x451dd2);
      return _0x3f4c94.reply("An error occurred while processing the cricket score request. " + _0x451dd2.message);
    }
  });
  const _0x187cbf = {
    pattern: "gitstalk",
    react: "🎙️",
    desc: "To search github info",
    category: "gitstalk",
    use: ".xnxxsearch <xnxx name>",
    filename: __filename
  };
  cmd(_0x187cbf, async (_0x598470, _0x19229c, _0x29633e, {
    from: _0x49a6c9,
    l: _0x45fe85,
    prefix: _0x11a0d4,
    quoted: _0x333c22,
    body: _0x1e6b7f,
    isCmd: _0x2b1a03,
    command: _0x410753,
    args: _0x2de5b6,
    q: _0x55ac6f,
    isGroup: _0x2f2f49,
    sender: _0x30cdae,
    senderNumber: _0x5ac35f,
    botNumber2: _0x1bd512,
    botNumber: _0x316199,
    pushname: _0x590250,
    isMe: _0x5baf4f,
    isOwner: _0x167df3,
    groupMetadata: _0xa2bbd8,
    groupName: _0x155530,
    participants: _0x1db7a1,
    groupAdmins: _0x5a29b4,
    isBotAdmins: _0x36bb5d,
    isAdmins: _0x5b3207,
    reply: _0x250cd7
  }) => {
    function _0xd2d11c(_0x585701, _0x2dcef9, _0x2c40bd, _0x31b691, _0x4d3b51) {
      return _0xa94a(_0x2dcef9 - 0x110 + 0x1cb, _0x2c40bd);
    }
    function _0x5c59ca(_0x42180b, _0xd4cd96, _0x50c42c, _0x451c46, _0x47ac64) {
      return _0xa94a(_0x50c42c - 0x4dc + 0x208, _0xd4cd96);
    }
    function _0x1d3497(_0x472143, _0x82db2b, _0x2c7a49, _0xfaf4a8, _0x2607bc) {
      return _0xa94a(_0x2607bc - 0x622 + 0x320, _0xfaf4a8);
    }
    function _0x5e5911(_0x17d788, _0x4ad3cd, _0x3350dc, _0x5270c9, _0xa41c57) {
      return _0xa94a(_0x5270c9 + 0x54e - 0x3a7, _0x3350dc);
    }
    const _0x4cb082 = {
      'vCnHA': function (_0x545a63, _0x2e1ae7) {
        return _0x545a63(_0x2e1ae7);
      },
      'iJTjr': function (_0x5e3850) {
        return _0x5e3850();
      },
      'cRuJR': function (_0x1de244, _0x5664ee) {
        return _0x1de244 === _0x5664ee;
      },
      'jVsjf': "ijLkn",
      'AUcFE': "RvDsi",
      'fjRUK': "N/A",
      'Vnjhg': function (_0x1cdc7a, _0x32962b) {
        return _0x1cdc7a(_0x32962b);
      },
      'JGUHB': function (_0x3f701e, _0x40a128) {
        return _0x3f701e(_0x40a128);
      },
      'haJGx': function (_0x9812e7, _0x9b3065) {
        return _0x9812e7 === _0x9b3065;
      },
      'ynnnB': "TKNPq",
      'HBAuA': "wZMaR",
      'BuJdB': "Mention a GitHub username to stalk.",
      'IzVyl': function (_0x1af1b5, _0x200b5d) {
        return _0x1af1b5 !== _0x200b5d;
      },
      'dTrti': function (_0x514249, _0x51e69e) {
        return _0x514249 === _0x51e69e;
      },
      'sDhry': "YwIlO",
      'Ezybg': "stxKA",
      'LLDKM': "Yes",
      'GXHTj': function (_0x222e0e, _0x5100b9) {
        return _0x222e0e(_0x5100b9);
      },
      'srbZA': function (_0x4f3f10, _0x18f551) {
        return _0x4f3f10 > _0x18f551;
      },
      'ZprGS': function (_0x50a78a, _0x5103cd) {
        return _0x50a78a !== _0x5103cd;
      },
      'KBPna': "LmkkW",
      'StRoj': "sVYgU",
      'SkxoI': "TqLVT",
      'lFqsf': "mxhiJ",
      'IaLJO': "3|0|4|1|2",
      'WJLLR': "An error occurred while fetching GitHub data.",
      'CRnaA': function (_0x38f727) {
        return _0x38f727();
      },
      'xyMkJ': function (_0x33b66c, _0x1ba05d) {
        return _0x33b66c(_0x1ba05d);
      },
      'YBkjY': "Error fetching GitHub data:"
    };
    function _0x1f9b7f(_0x555900, _0x464d00, _0xfdb9e1, _0x415e0e, _0x3b240e) {
      return _0xa94a(_0x555900 - 0x237 - 0x0, _0xfdb9e1);
    }
    try {
      if (!_0x2de5b6[0]) {
        return _0x29633e.reply("Mention a GitHub username to stalk.");
      }
      const _0x1d0a8b = _0x2de5b6[0];
      const _0xc97529 = await axios.get("https://api.github.com/users/" + _0x1d0a8b);
      const _0x44fa53 = _0xc97529.data;
      if (_0xc97529.status !== 200) {
        return _0x19229c.reply("❌ GitHub user not found.");
      }
      let _0x5b9652 = "🌟 *GitHub Profile - @" + _0x44fa53.login + "*\n\n";
      _0x5b9652 += "  ◦  *Name*: " + (_0x44fa53.name || "N/A") + "\n";
      _0x5b9652 += "  ◦  *Username*: @" + _0x44fa53.login + "\n";
      _0x5b9652 += "  ◦  *Bio*: " + (_0x44fa53.bio || "N/A") + "\n";
      _0x5b9652 += "  ◦  *ID*: " + _0x44fa53.id + "\n";
      _0x5b9652 += "  ◦  *Node ID*: " + _0x44fa53.node_id + "\n";
      _0x5b9652 += "  ◦  *Profile URL*: " + _0x44fa53.avatar_url + "\n";
      _0x5b9652 += "  ◦  *GitHub URL*: " + _0x44fa53.html_url + "\n";
      _0x5b9652 += "  ◦  *Type*: " + _0x44fa53.type + "\n";
      _0x5b9652 += "  ◦  *Admin*: " + (_0x44fa53.site_admin ? "Yes" : 'No') + "\n";
      _0x5b9652 += "  ◦  *Company*: " + (_0x44fa53.company || "N/A") + "\n";
      _0x5b9652 += "  ◦  *Blog*: " + (_0x44fa53.blog || "N/A") + "\n";
      _0x5b9652 += "  ◦  *Location*: " + (_0x44fa53.location || "N/A") + "\n";
      _0x5b9652 += "  ◦  *Email*: " + (_0x44fa53.email || "N/A") + "\n";
      _0x5b9652 += "  ◦  *Public Repositories*: " + _0x44fa53.public_repos + "\n";
      _0x5b9652 += "  ◦  *Public Gists*: " + _0x44fa53.public_gists + "\n";
      _0x5b9652 += "  ◦  *Followers*: " + _0x44fa53.followers + "\n";
      _0x5b9652 += "  ◦  *Following*: " + _0x44fa53.following + "\n";
      _0x5b9652 += "  ◦  *Created At*: " + _0x44fa53.created_at + "\n";
      _0x5b9652 += "  ◦  *Updated At*: " + _0x44fa53.updated_at + "\n";
      const _0x589165 = await fetch("https://api.github.com/users/" + _0x1d0a8b + "/repos?per_page=5&sort=stargazers_count&direction=desc");
      const _0x5cbcf2 = await _0x589165.json();
      if (_0x5cbcf2.length > 0) {
        const _0x3d412f = _0x5cbcf2.slice(0, 5);
        const _0x5c814f = _0x3d412f.map(_0x41717d => {
          function _0x3d2941(_0x2036bb, _0x4621e5, _0x349d19, _0x42cdcb, _0x43329e) {
            return _0xa94a(_0x42cdcb + 0x599 - 0x237 - 0x0, _0x4621e5);
          }
          function _0x58f572(_0x248a61, _0x114f0a, _0x358fda, _0x4fb26d, _0x5a97fa) {
            return _0xa94a(_0x358fda + 0x265 - 0x4dc + 0x208, _0x248a61);
          }
          function _0x53e485(_0x42b823, _0x1877c3, _0x4719c4, _0x4c1da5, _0x30e58b) {
            return _0xa94a(_0x30e58b - 0x3e + 0x54e - 0x3a7, _0x4719c4);
          }
          function _0x4ebae5(_0x496749, _0x282000, _0x258836, _0x12c88e, _0x125af5) {
            return _0xa94a(_0x282000 + 0xb0 - 0x237 - 0x0, _0x12c88e);
          }
          const _0x4c535f = {
            'LirPl': function (_0x2148d1) {
              function _0x4758fb(_0x5934ae, _0x522969, _0x2930bd, _0xda2d8c, _0x4b3baa) {
                return _0xa94a(_0x2930bd + 0x223, _0x4b3baa);
              }
              return _0x2148d1();
            },
            'CplVH': function (_0xa503c, _0x850797) {
              function _0x4f6f05(_0x39bab4, _0x2693f3, _0x501dfc, _0x5c6809, _0x275fb8) {
                return _0xa94a(_0x501dfc + 0x360, _0x39bab4);
              }
              return _0xa503c(_0x850797);
            }
          };
          function _0xc3666d(_0x508e07, _0x4afd23, _0x31096c, _0x240ee6, _0x1d8667) {
            return _0xa94a(_0x1d8667 + 0x1b4 + 0x54e - 0x3a7, _0x240ee6);
          }
          return "  ◦  *Repository*: [" + _0x41717d.name + '](' + _0x41717d.html_url + ")\n  ◦  *Description*: " + (_0x41717d.description || "N/A") + "\n  ◦  *Stars*: " + _0x41717d.stargazers_count + "\n  ◦  *Forks*: " + _0x41717d.forks;
        });
        const _0x5e8b09 = "📚 *Top Starred Repositories*\n\n" + _0x5c814f.join("\n\n");
        _0x5b9652 += "\n\n" + _0x5e8b09;
      } else {
        _0x5b9652 += "\n\nNo public repositories found.";
      }
      const _0x4d4f1a = {
        url: _0x44fa53.avatar_url
      };
      const _0x2b6000 = {
        image: _0x4d4f1a,
        caption: _0x5b9652
      };
      await _0x598470.sendMessage(_0x19229c.chat, _0x2b6000, {
        'quoted': _0x19229c
      });
      const _0xcbc8be = {
        text: '✔',
        key: _0x29633e.key
      };
      const _0x31c29c = {
        react: _0xcbc8be
      };
      await _0x598470.sendMessage(_0x29633e.chat, _0x31c29c);
    } catch (_0x275d01) {
      console.error("Error fetching GitHub data:", _0x275d01);
      const _0x15156e = {
        quoted: _0x19229c
      };
      await _0x598470.sendMessage(_0x29633e.chat, "An error occurred while fetching GitHub data.", _0x15156e);
      const _0x3bad94 = {
        text: '✅',
        key: _0x19229c.key
      };
      const _0x2e03c4 = {
        react: _0x3bad94
      };
      await _0x598470.sendMessage(_0x49a6c9, _0x2e03c4);
      _0x250cd7();
      _0x45fe85(e);
    }
  });
  const _0x3383b6 = {
    pattern: "infobot",
    react: "🎙️",
    desc: "To see info of bot",
    category: "search",
    use: ".infobot",
    filename: __filename
  };
  cmd(_0x3383b6, async (_0x26be17, _0x4f83b3, _0x575696, {
    from: _0x52198f,
    l: _0x1d4559,
    prefix: _0x318b28,
    quoted: _0x1574ad,
    body: _0x5c34f3,
    isCmd: _0x16a452,
    command: _0x375655,
    args: _0x41f039,
    q: _0x36bca6,
    isGroup: _0x3d7045,
    sender: _0x479de9,
    senderNumber: _0x36d9d8,
    botNumber2: _0x8a6fcb,
    botNumber: _0xe9d025,
    pushname: _0x5105b0,
    isMe: _0xef5602,
    isOwner: _0xd707d9,
    groupMetadata: _0x2afc51,
    groupName: _0x89ad74,
    participants: _0x277eee,
    groupAdmins: _0x33c9fb,
    isBotAdmins: _0x160f36,
    isAdmins: _0x4026d2,
    reply: _0x5490e4
  }) => {
    function _0x3e9d00(_0x3dc7c9, _0x543ac0, _0x3a2118, _0x225aa2, _0x898e9e) {
      return _0xa94a(_0x543ac0 - 0x5 - 0x0, _0x898e9e);
    }
    function _0x5150bc(_0x12a7b1, _0x3321c0, _0x2add21, _0x2d35ce, _0x51cca0) {
      return _0xa94a(_0x2d35ce - 0xc4 - 0x0, _0x3321c0);
    }
    function _0x2e056b(_0x10e7d5, _0x302724, _0xc992a2, _0x500bce, _0x20ea26) {
      return _0xa94a(_0xc992a2 - 0x2b6 + 0x1cb, _0x10e7d5);
    }
    function _0x43b940(_0x2a196a, _0x5bd427, _0x57a3a5, _0x4b98bb, _0x378be5) {
      return _0xa94a(_0x57a3a5 - 0x5af + 0x208, _0x378be5);
    }
    const _0x51b7ac = {
      'iQkMJ': ".menu",
      'ilGSM': ".ping",
      'NCLvM': function (_0x3b43c8) {
        return _0x3b43c8();
      },
      'raOso': function (_0x376c64, _0x58aad6) {
        return _0x376c64(_0x58aad6);
      }
    };
    function _0x4cb8fa(_0x4399a0, _0x2f3396, _0x86e447, _0x2208e0, _0x28ddee) {
      return _0xa94a(_0x4399a0 - 0x33b + 0x320, _0x2208e0);
    }
    try {
      const _0x310379 = "\n╭━──━─◈─━─━╮\n│🔖 *Bot Name* : X-BYTE\n│🔖 *Owner Name* : Hamza\n│🔖 *Owner Number* : 923072380380\n│🔖 *Prefix* : .\n│🔖 *Runtime* : _*" + hours + "h " + minutes + "m " + seconds + "s*_\n╰━━─━─◈─━─━╯";
      const _0x1b04bf = [".menu", ".ping"];
      _0x26be17.sendPoll(_0x4f83b3.chat, _0x310379, _0x1b04bf);
      const _0x4db298 = {
        text: '✅',
        key: _0x4f83b3.key
      };
      const _0x48a4d1 = {
        react: _0x4db298
      };
      await _0x26be17.sendMessage(_0x52198f, _0x48a4d1);
    } catch (_0x2b1126) {
      _0x5490e4();
      _0x1d4559(_0x2b1126);
    }
  });
  const _0x1990af = {
    pattern: "nofind",
    react: "🎙️",
    desc: "To see same to the number",
    category: "search",
    use: ".nofind",
    filename: __filename
  };
  cmd(_0x1990af, async (_0x7d8975, _0x47070d, _0x5b9f6a, {
    from: _0x4fe30b,
    l: _0x123038,
    prefix: _0x1a2e5a,
    quoted: _0x24d864,
    body: _0x133c0c,
    isCmd: _0x4d16ba,
    command: _0x251119,
    args: _0x5237a0,
    q: _0x1d91e8,
    isGroup: _0x47dcc9,
    sender: _0x1d14ab,
    senderNumber: _0x5f085c,
    botNumber2: _0x3d0e10,
    botNumber: _0x352f0a,
    pushname: _0x56ee9c,
    isMe: _0x3e8ff5,
    isOwner: _0x4d845e,
    groupMetadata: _0x12b9fb,
    groupName: _0x546508,
    participants: _0x327949,
    groupAdmins: _0x5d8115,
    isBotAdmins: _0x5854e3,
    isAdmins: _0x3cd782,
    reply: _0x48ee29
  }) => {
    function _0x2a0f5e(_0x54ad4f, _0x77802d, _0x2326f5, _0x5e20ed, _0x46af68) {
      return _0xa94a(_0x77802d + 0xe + 0x1cb, _0x5e20ed);
    }
    function _0xb5ad21(_0x504a83, _0x15479a, _0x377107, _0x251b65, _0x299ede) {
      return _0xa94a(_0x504a83 + 0xef - 0x3a7, _0x299ede);
    }
    function _0x580f4d(_0x3f0395, _0x4c44f5, _0x189b57, _0x367905, _0x131d77) {
      return _0xa94a(_0x131d77 + 0x1b0 + 0x1cb, _0x3f0395);
    }
    const _0x5457b0 = {
      'EwfZX': "Give a number to search",
      'stCDk': function (_0x26e351, _0x147327) {
        return _0x26e351 + _0x147327;
      },
      'RHdrG': function (_0x3e7f16, _0x529f1b) {
        return _0x3e7f16 < _0x529f1b;
      },
      'DWjZE': function (_0x15338d, _0x2cd02d) {
        return _0x15338d + _0x2cd02d;
      },
      'xJgwD': "@s.whatsapp.net",
      'WLuKz': function (_0x440757) {
        return _0x440757();
      },
      'WeGGy': function (_0x64422f, _0x1fb285) {
        return _0x64422f(_0x1fb285);
      }
    };
    function _0x29f13f(_0x419520, _0x363b00, _0x61fce5, _0x51b790, _0x5e74ae) {
      return _0xa94a(_0x61fce5 - 0x519 + 0x208, _0x363b00);
    }
    function _0x12bfba(_0x4024c8, _0x1cacdc, _0x4620da, _0x1122b8, _0x1821cc) {
      return _0xa94a(_0x1122b8 - 0x2b6 + 0x1cb, _0x1821cc);
    }
    try {
      if (!_0x1d91e8) {
        throw "Give a number to search";
      }
      if (!_0x1d91e8.match(/x/g)) {
        throw "*Example: " + (_0x1a2e5a + _0x251119) + " 923072380xxx";
      }
      let _0x56859c = _0x1d91e8.match(/x/g).length;
      let _0x2930b7 = Math.pow(10, _0x56859c);
      let _0x1eaef3 = [];
      for (let _0x527c9f = 0; _0x527c9f < _0x2930b7; _0x527c9f++) {
        let _0x40030f = [..._0x527c9f.toString().padStart(_0x56859c, '0')];
        let _0x41de82 = _0x1d91e8.replace(/x/g, () => _0x40030f.shift()) + "@s.whatsapp.net";
        if (await _0x7d8975.onWhatsApp(_0x41de82).then(_0x12696e => (_0x12696e[0] || {}).exists)) {
          let _0x113fec = await _0x7d8975.fetchStatus(_0x41de82)["catch"](_0x7b6340 => {});
          const _0xe774a1 = {
            'exists': true,
            'jid': _0x41de82,
            ..._0x113fec
          };
          _0x1eaef3.push(_0xe774a1);
        } else {
          const _0x530906 = {
            exists: false,
            jid: _0x41de82
          };
          _0x1eaef3.push(_0x530906);
        }
      }
      const _0x3a63a7 = {
        text: '✅',
        key: _0x47070d.key
      };
      const _0xd533eb = {
        react: _0x3a63a7
      };
      await _0x7d8975.sendMessage(_0x4fe30b, _0xd533eb);
    } catch (_0x254a2e) {
      _0x48ee29();
      _0x123038(_0x254a2e);
    }
  });
  const _0x370913 = {
    pattern: "google",
    react: "🎙️",
    desc: "To search infomations",
    category: "search",
    use: ".google <search name>",
    filename: __filename
  };
  cmd(_0x370913, async (_0x1ebc27, _0x3ff6e4, _0x28e98d, {
    from: _0xfd92c5,
    l: _0x5e2d27,
    prefix: _0x1865b4,
    quoted: _0x125821,
    body: _0x7b8239,
    isCmd: _0x5176bb,
    command: _0x5c98dc,
    args: _0x3f75f0,
    q: _0x2e8cd2,
    isGroup: _0x81e14c,
    sender: _0x5e6c11,
    senderNumber: _0x21fd7a,
    botNumber2: _0xabe11d,
    botNumber: _0x5029ee,
    pushname: _0x464535,
    isMe: _0x1168c9,
    isOwner: _0x43e8db,
    groupMetadata: _0x24ab1c,
    groupName: _0x5e6a7b,
    participants: _0x59a343,
    groupAdmins: _0x4a4cd0,
    isBotAdmins: _0x483d0b,
    isAdmins: _0x1cad96,
    reply: _0x5a7eca
  }) => {
    const _0x498aad = {
      'NOtzT': function (_0x3df514, _0x4e5d67) {
        return _0x3df514 + _0x4e5d67;
      },
      'RNSBP': function (_0x388ada, _0x2cd06f) {
        return _0x388ada(_0x2cd06f);
      },
      'OoJgN': "google-it",
      'QQoqX': function (_0x713f6f, _0x147336) {
        return _0x713f6f(_0x147336);
      },
      'PEkRv': "cta_url",
      'RjLbW': "see in google",
      'chPGT': "quick_reply",
      'kIQvg': "restart again",
      'bNbMX': function (_0x47ccc4, _0x320f9c) {
        return _0x47ccc4 + _0x320f9c;
      },
      'AYdUu': ".google ",
      'LTxec': "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png",
      'LpiVY': "X-BYTE GOOGLE SEARCH",
      'yaQop': function (_0x4dbcf5) {
        return _0x4dbcf5();
      },
      'PUVee': function (_0x2033ca, _0x37bd08) {
        return _0x2033ca(_0x37bd08);
      }
    };
    function _0x3bd776(_0x5a9610, _0x58b9a5, _0x4b868e, _0x39eb95, _0x3eed49) {
      return _0xa94a(_0x58b9a5 - 0x511 + 0x1cb, _0x3eed49);
    }
    function _0x57ab50(_0xe59c5, _0x4ca9bc, _0x40220f, _0x40c462, _0x6ba19a) {
      return _0xa94a(_0x6ba19a - 0x2ef - 0x0, _0x4ca9bc);
    }
    function _0x287047(_0x4fccfd, _0x546c80, _0xc68450, _0x26035c, _0x11fae8) {
      return _0xa94a(_0x11fae8 + 0x12a + 0x208, _0xc68450);
    }
    function _0x54fe15(_0x30a4bb, _0x41cc5d, _0x34d6bd, _0x16a997, _0x40df92) {
      return _0xa94a(_0x40df92 + 0x5f - 0x3a7, _0x34d6bd);
    }
    function _0x3f6e71(_0x42d25a, _0xa7d85b, _0x218f94, _0x140712, _0x540929) {
      return _0xa94a(_0x42d25a + 0x1f0 - 0x3a7, _0x540929);
    }
    try {
      if (!_0x2e8cd2) {
        throw "Example : " + (_0x1865b4 + _0x5c98dc) + " what is a bot";
      }
      let _0x21eff3 = require("google-it");
      const _0x55e5a6 = {
        query: _0x2e8cd2
      };
      _0x21eff3(_0x55e5a6).then(_0x4e1e42 => {
        function _0x3d5c23(_0x24693f, _0x902c13, _0x9d716f, _0x252ed0, _0x128b4a) {
          return _0xa94a(_0x128b4a - 0xb2 + 0x1f0 - 0x3a7, _0x902c13);
        }
        function _0x29a154(_0x4228b6, _0x4ade0f, _0x5f4342, _0x1d58a8, _0x5c84c3) {
          return _0xa94a(_0x4228b6 - 0x646 + 0x12a + 0x208, _0x5c84c3);
        }
        function _0x39030c(_0xa2c735, _0x1ae7dd, _0x3a9194, _0x3b5b28, _0x4a7a9d) {
          return _0xa94a(_0xa2c735 + 0x92 - 0x2ef - 0x0, _0x1ae7dd);
        }
        function _0x57ecd2(_0x48e8f5, _0x103484, _0x4fd741, _0xbb22c2, _0x230d29) {
          return _0xa94a(_0x103484 - 0x6c7 + 0x12a + 0x208, _0x48e8f5);
        }
        let _0x97747 = "Google Search From : " + _0x2e8cd2 + "\n\n";
        for (let _0x3b94d3 of _0x4e1e42) {
          _0x97747 += "⭔ *Title* : " + _0x3b94d3.title + "\n";
          _0x97747 += "⭔ *Description* : " + _0x3b94d3.snippet + "\n";
          _0x97747 += "⭔ *Link* : " + _0x3b94d3.link + "\n\n────────────────────────\n\n";
        }
        function _0x58a9b7(_0x33822a, _0x1bafed, _0xd51bbf, _0x42afcf, _0x1685b1) {
          return _0xa94a(_0x33822a + 0xb6 + 0x12a + 0x208, _0x1685b1);
        }
        _0x3ff6e4.reply(_0x97747);
      });
      let _0x3a5e1d = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "see in google",
          'url': _0x2e8cd2,
          'merchant_url': _0x2e8cd2
        })
      }, {
        'name': "quick_reply",
        'buttonParamsJson': JSON.stringify({
          'display_text': "restart again",
          'id': ".google " + _0x2e8cd2
        })
      }];
      const _0xf45a89 = {
        image: "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png",
        header: '',
        footer: config.FOOTER,
        body: "X-BYTE GOOGLE SEARCH"
      };
      return await _0x1ebc27.sendButtonMessage(_0xfd92c5, _0x3a5e1d, _0x28e98d, _0xf45a89);
      const _0x5361b4 = {
        text: '✅',
        key: _0x3ff6e4.key
      };
      const _0x56300d = {
        react: _0x5361b4
      };
      await _0x1ebc27.sendMessage(_0xfd92c5, _0x56300d);
    } catch (_0x255345) {
      _0x5a7eca();
      _0x5e2d27(_0x255345);
    }
  });
  const _0x41e663 = {};
  function _0x5e8c() {
    const _0x3204df = ['W7ZdNqz4WOm', 'AmkzWOTmWRy', 'W7CWW4ZdJmoZ', 'ktVcHCkMW4e', 'fCojpXy', '4PA5W4JIM5TUyW', 'mKNcOIyB', 'mKNcOt8w', 'wSkBFa', 'WPCuW7zDW6a', 'W6vIW4q', 'q8oCW5VcUCke', 'dKqQt8oQ', 'h1W9', 'W6H1W4tcJSkK', 'rCkBsvJdUW', 'EJ7cS8o6', 'BshdQ8oGmW', 'xCkyqvau', 'q8kVWR8ewa', 'W7iSW4BdMCkL', 'erusyCol', 'WOv8W75XoW', 'WO/cLXikiG', 'qSk0WQaLFa', 'W7y/W4xdLmoI', 'WOmU4PAw4PwX4PEz', 'netcTYq', '4QYJsK/cK3W', 'W6WlWQRdQxW', 'W5PqW7CdWQ0', 'WO/dVtW', 'W60eahJdKa', 'W63cJmon', 'W4ldNurzyCo4DfO', 'xJDgW4uf', 'rvNcLCkeWRe', 'j3RcQamW', 'W7qcFmk5zq', 'W7JcIbrIWOm', 'bSkUzUkxN0C', 'WRbHW6Pmma', 'xJqn', 'u2qpuaa', 'W5xcUCkkBuW', 'a0bf', 'WO/dVJFcHmkd', 'WRNdOdFdM8kn', 'WQBdICkWW5dcVa', 'W6/cQYBdSZe', 'W5tcJt8', 'uIuiW4nm', 'hCkmrMFdLa', 'WRddG8k/W4G', 'WPf+W7f2hq', 'WOaRWQy', 'iLXZheW', 'W649jLddQq', 'bSo4W73cSHK', 'd8odjq', '4Psn4PAp4Pwh4Ps44PwM', 'W6P4WOCG', 'yYTBsWW', 'vSkiCvpdMG', 'mHSrE8oQ', 'cSkixgi', 'W65GW4tcL8k4', 'uCkmDG', 'WQfAW7jqnW', 'W4BcMmkzDr8', 'nemcgG', 'r8kyWQCDEq', 'WPhcKWCBkq', 'W7jKWPddJ8oL', 'oqtcR3m4', 'lKnjWOO9', 'WOdcIKDjtW', 'CN9BtaS', 'W6OxACkUEa', 'W7a7W5NdK8k1', 'pGJcVmkhW6e', 'sGBXI7kpwMG', 'W6XDWQ4', 'W4BdVSk3', 'cKmWqCoJ', 'v8o+WR7dOmoq', 'x2pcRZy', 'WP8OW73dGsC', 'W6ZcIKe', 'W5C9g3hdQa', 'W5ZcKfFdJ8of', 'ALVcRwGN', 'W7VcScq', '4PE+4RYju1HH', 'x3jDtJ8', 'WOSuW73dIZy', 'W5qCu23dRq', 'sa/cJ3Hq', 'ydlcQ8oNBq', 'WPtdTZpdImkv', 'WR3cIeGW', 'F8o+kvCu', 'rMvyWOGk', 'WPlcNv1eCq', 'W5r8WPRcQSkV', 'DtZcOCo6zW', '4PUb4PEP4PsO4Psd4PAz', 'DKRcPG', 'W4Lph8oMha', 'ncVcVgTv', 'pSorm3FcLa', 'W5ugb27dQq', 'iSo6i1Op', 'bLiNg0W', 'BLNcTMi5', 'ndRcRCkPiq', 'CuCFgSoE', 'cqBcNSkkWQm', 'BvxcPxmf', 'WRFdQH1NWOa', 'z8oRpW', 'vNtcK04a', 'xSkqW5JdT2K', 'dSoEuf0h', 'vCoTW5JcLSkD', 'WRFdPbnKWOu', '4PsQ4Psh4PEw4Pwd4Ps9', 'vKC8t0a', 'WPO/W6XZeW', 'W71CW4NcNbW', 'vxxcRuGU', '4Q26WQL9W4VdOa', 'DvNcQ2C4', 'sNLNAIC', 'oH8qtq', 'nSkZrhBdUa', 'W7CewmkqwW', 'W4hcP8kazH4', 'sCopfhOV', 'dJhcJCkBWRq', 'kaNdRdrVWQJcRINcKmo0kmkd', '4lA4sUc3IUc0Ldu', 'mH3cUSkOW7S', 'WP3cMX9syq', '4PwQ4R6pW5NdI8o5', 'WQ3cImkTW5xcSG', 'EGpdVsSk', 'fLNcHHGO', 'FeVcRgaW', 'CSkPW65YWPa', 'W6hdUSkGb8kL', 'ffiNg0W', 'W5VcKatcR3q', 'a1uNamoZ', 'W6KHumkIwq', '4Pss4RYAWOScW7C', 'W7/cKvVdT8om', 'w2JXJzEBWQVdTa', 'nSkKzHm', 'W6HDW4ZcQs4', '4lsf4lEZ4lw7WP/cRq', 'FeVcVhm+', 'W4DeWPVcRq', 'tGvGpSo5', 'W4DOW4BcM8o3', 'W4L2WQ4ZWQW', 't1PNmSo7', 'o8oubIVdLq', 'baCkr8o6', 'W7tdQ8kbBbS', 'FSo6mvy', '4Pw04R+iwq', 'bNyEdfa', 'faOmxmoS', 'zwPBuaG', 'xJag', 'WOHeW7xdOdq', 'fmkFWRddHSkQ', 'W6NdJqPK', 'jKpcVIyv', 'vbb6m8oB', 'aSkvWRdcKG', '8ysDPmo2W6aUBq', 'BeRcNHf0', 'gCkcWRe', 'WP51W7Dveq', 'WOnLWQzUfW', 'W6tcHstdTJO', 'kSkSW73dTva', 'W7FcVq4aoq', 'fwni', 'W7yuBCkOFG', '8ycqQfnsfCon', 'qmkcWROLtq', 'W5mX4OkKoLi', 'W6rGW4tcMW', 'dtD1i8oI', 'sbTdp8o3', 'yudcLaP0', 'WO9oWPZcQSkc', 'lCoTWRhcUq', 'W4XsWP7cUCoi', 'eMrSWOOp', 'W68gc1ZdSW', 'WPhcMYO9pa', 'jmogmW', 'ra5rt8kU', 'sWvzdCog', 'DSkiW4DhWRK', 'WOFdNSkYW5JcJG', 'zCo6kLWu', 'kSoVnLam', 'i8oAWRlcHb4', 'WPFdTIBcQG', 'nCk/WP3cQmkF', 'WONdH8kUW5lcLW', 'xSkdW6VdNNq', 'xuj/a18', 'W6fOW5FcQCkB', 'WP/cIKDkDG', 'mSoAocNdKq', 'rWjGwHhdTmo/w8o3rqddKa', 'ysNcQa', 'oSo/WRG', 'a8o8WQJcVq', 'W4PRW5S8WPG', 'iYFcUmkHW7i', 'W5VdJYnHWPu', 'WO/dKCk9W5hcUG', 'arSrx8o6', 'WPzpWP7cSSk4', 'WQddVqJdHCkX', 'WRmos8kYwq', 'yoc2KEc1Poc2HvO', 'W4afqmkPsW', 'WQBdH8kZW4/cTa', 'hbGtrmo2', 'fCkyWPJcOCkF', 'srr9oW', 'hNuYACos', 'ymk8WRON', 'W61+WO01WPK', 'vsWTW7i5', 'As4KW6uK', 'z8kLjqZcLW', 'wuVcSYW0', 'cL7cMGyY', 'umoTW6JcH8kN', 'WP4bW5/dOq0', '4Pw04RYlW6JdHSoR', 'W6XYWPynWRG', 'DwrcuXe', 'W7pcNuRdSSkD', 'aGdcN8kyW68', 'WPhcJcm8ka', 'gdFdRNekA8oymCo2AZRcUW', 'nFcPGRxcIpcNUlFWSOIR', '4PIJ4PIv4PMa4PUU4PME', 'W6j0W4tcISk4', 't8kpW60', 'wWemqCo+', 'qSoKW6JcMCkm', 'umkaW7dcGM0', 'W5GxW6ddRCkF', 'jsFcQ8kLWQq', 'WOafW4e', 'WPBdVCozov5oWOPsfshcK2S', 'nmognZpdLq', 'W7a7W4JdNmk4', 'W6ZcMLZdTCop', 'W6BcO8kGtcG', 'WOKbW4ldPJi', 'aaaj', '8lYAJpgiQBlWROQXWPRIMO4', 'W5NcGHqBaG', 'W67dUSk+gCku', 'W6JcIajIWOm', 'W4VcUmoazW0', 'cSkmw2ddQW', 'kvNcTmkV', 'y25Cqa', 'W4inhx3dQW', 'WOpdG8kZW4JcSa', 'dSkkrvac', 'AL3cRxC+', 'W7iRW4xdNSk+', 'WQxcN0zFAG', 'eXm6au8', 'WQiQW4BcN8k/', 'WRBcVNVdQwS', 'W7NcKf3dUq', 'W47cNsK6la', 'BMzka0u', 'uaZcQM8z', 'W7y3W4tdMSkw', 'h0vjWP0Z', 'CHT1nCo6', 'W4ePW5VdL8k/', '8ycqLdexoCoT', 'fSknueuB', 'W5BcHsmjba', 'W4HOWRqAWQO', '4PUZ4PMW4PQQ4PQQ4PU5', 'W7P4WOW3WPS', 'DfNcTM8', 'kvZcPImv', 'f8kxWQ3cLq', 'vmkaD1pdMq', 'WO/dKHWEyq', 'Amk0WQaP', 'zv1tbCoc', 'dbKmtCkm', 'tdyLW4Ky', 'mI4WWQnd', 'W4rHW4NcScy', 'sf7cU8keWQ4', 'bv8lySof', 'WPbEWOtcRCok', 'W6FcSWVdUqy', 'aSkDE2NdSW', 'WPbAWP7cUW', 'W4ZcJsGQba', 'dw5a', 'DCoii2mg', 'W7JdTWf1WOa', 'D8koW4rfWRS', 'W5iAf1RdVa', 'vSkTW7TNWPG', 'WOyxxSkRta', 'W4xdR8k6emkJ', 'WQytW4VdQcm', 'pIZcR8oTW6u', 'kXeoqCkB', 'ovFcQwqL', 'uSkpW6VdG2u', 'WP12WRtcL8kw', 'zCkLWQaLzq', '8lQlQeGW', 'zsf4bmom', 'W6uHW4tcKCo3', '4PAD4PAO4PwY4Psq4PES', 'cYvzW5rA', 'ASoHkLui', 'bh0qcL0', 'g0bFW6C', 'zrRWR6s3WQtdGq', 'B1FcS3q6', 'kKDBWRu6', 'D13cQhi', 'nHa0E8oO', '4BEeY6/QNi7dRa', 'WPfwW5ZdOCkg', 'jr8lWRn8', 'arNcMmkmWRW', 'W5D8WRmEWQy', 'oLGnESol', 'WPv+W6P2fW', 'W5/dSSkRe8oW', 'W6Do4PMI77Qkyfm', 'W73cNLVcRSoB', 'W4pdUSkGbCkN', 'W4RcQSkiBb8', 'FSo8emoSW7K', 'W6ZcI1JdRW', 'dHVcLSkFWRW', 'xCkoW5ZdGM0', 'W5RdVSk8eW', '4lAG4lAQ4lE4aoc0Va', 'W4VcJsuMza', 'WRj/W693hq', 'cSkryKm7', 'nhVdVSkP', 'eabfe8k/', 'EmkrA1/dSa', 'CMznrHC', 'CI/cVe1Q', 'WPPEWOdcVCkv', 'W7vZW5W', 'W7b4W586WPW', 'jYfPtbC', 'bmk5yM7dGq', 'gmolWRJcMsO', 'AGxcSgbE', 'WQRdG8oNW5lcRa', 'WOmU8lQTIokaHokaVC2pZjZpGC6IZ5O', 'W7FcUmkLssm', 'WQXc8ks0Imk5rW', 'WPdcNuboAq', 'WQJdLCoOW5xcTG', 'Dx9yta', 'aWmrWQTW', 'l38zWP0w', 'd8kzwg/dVa', 'FgJdQa', 'W61+W4BdMCoS', 'p0eyoh0', 't10ItSoJ', 'kSo/WQ7cTbC', 'c3lcUgji', 'W71bW6VcQq', 'W6PfW6yfWRa', 'W6XwWRpdRhe', 'W7rCgCkQxq', 'WQaRW7lcKCkG', 'g8kBra', 'bSkK8k6ZUKFdGW', 'W4tcPmkAzXG', 'WRLsWOFcLSks', '8kMiI/gpMO3WV6UZ8k66L8oG', 'W5ldLrxcOa', '8lkQP/cSUiRWR4M68l2PNqC', 'WRBWPPoz4Oki8k+sPhBVVO/VVk8', 'xmkLWRVcG8k5', 'WO3dGCofxsm', 'WPPEWOdcVq', 'W6K7W5a', 'gZOHASog', 'WPNcGdazmG', 'fHOer8o4', 'fv1GWP0Q', 'iCo4W7LHjW', 'W6DOW5BcHW', '4lEy4lA+4lEu4lsnnq', 'W61WW6hcQsi', 'Ab0Fxmkm', 'WOabWO8', 'zwPguuS', 'EmkFDG7dPG', 'lYTAWPSr', '8jA7UpcOQi/cQFcqIiBXIAUs', 'W7j1W4FcKq', 'qXrGnG', 'W4KpBCk7FG', 'WQpWLPoU8kobTCoffG', 'zMviqHW', 'eITxWP8i', 'v8kgCLRdMa', 'rmkbAh/dJa', 'nSkIyxpdNq', 'ymoiW7hcMSko', 'WOiwW4G', 'W4VdSSkIbCk+', 'WPfxW43cThm', 'WOldSYBdIG', 'y8o1WRSQkG', 'FSkWW7PMaa', 'wwVdT3Gw', 'wmoHzKOc', 'mmoBotpdKq', 'WPnj4PYGW7Pl', 'rmk5wMZdVW', '4Ps0WQZIMipdSSoa', 'ECoVivXh', 'WQFcLLTPwa', 'W6hdSSk8mmk8', 'garFW6O/', 'bKa3sCoR', '4PU6WQL9W4ldUW', 'hXCnW58z', 'a8knsG', 'pSkjW4jqWQi', 'W61PWP44WOi', 'WOicWO/dQG', 'hrKkWQK', 'qSkEv1xdIa', 'WPCEC8kqAa', 'W6rGW4tcNW', 'zcVdQ8o6ja', 'WOW8j0RdLq', 'wMncWOG', 'Ae5EACkH', 'n0lcPaa4', '8jk0JIuCW7Pt', 'rrrGjmo7', 'iSkGAvuo', 'W4ZdQ8kAEGK', 'W6OQW53dJ8k/', '8yo+L8kMmdRcVG', 'WQdWNyww8yk0J/c4TOdWLBE4', 'WPjLW6m', 'W7iRW5RdLW', 'wmknW7RdNG', 'W77cOZZdOtS', 'WRFdLSkRW5xcRq', 'k1eADmob', 'jJG6CCk2', 'CCkVW4L6WRa', 'W6GeW7CFWRa', 'ELFcQM8J', 'WQeasmkQwq', 'W5hcKgxdRCoO', 'v8o/W63cS8kn', 'm8o/EW', 'amoJj8oG', 'vvjfe/c4VQ0', 'u8k6W5xdGfG', 'W73cVaGBgW', 'WPTiWOdcV8ka', 'W6RcPZZdTdC', 'tHe0jCoZ', 'at8trmkC', 'W7XxW7y', '4lAhuoc3KEc3U8op', 'bSkFWRVcKSk4', 'W7WYWPW7WOq', 'n1hcSwC4', 'W6BcN8kSquW', 'oXvEBmko', 'W44Ca3ldHG', 'mSowiY/dHG', 'mWdcJ8kiW5S', 'W5NXHkoNdu7dTq', 'W5xcSSkSzGG', 'qdtdPmo6iG', 'CCkdW63dMca', 'pfaWsCkc', 'WOmbW5/dSxO', 'FCkLWPyawW', 'ba8xWQL0', 'CsZcTW', 'W51+WQpcTCog', 'AmoiiCovW7O', 'WQ7cR8k4vsm', 'pmo4WRZcOqu', 'W7lcKeG', 'BffTqbe', 'ACkNWPCTEq', 'vSkUW6r2WPi', 'Fmk/xfC', 'ir1fqmo6', 'WOGxW4ldPcC', 'cmkmtw/dQG', 'W7tcUYGnjW', 'W686W5JdSmkL', 'gCoEueWE', '4BwPY7llUHpcPq', '4Ps74RYrWR/cJsa', 'WRhcS3u', 'WO7dT3ldJmki', 't2pcPce', 'zSkmAvpdNG', '8l+eMpc5PPpWR6sztpcFT6y', 'pmo4WRZcUrS', 'sCoGi8oVW7W', 'zmkHWQa8Eq', 'oSogbWZdHq', 'qG5vt8kU', 'W57dPcj3WQS', 'lFcDVki', 'tSoAcgW1', 'lrhdRxij', 'qCo8W7lcU8kE', 'zWOfW4y4', 'xdGyW5Wd', 'W79VWPW8W4K', 'WPtdPIxdHmkw', 'AHtcQwS', 'W518WO89WP0', 'W7JcKfRdRSoh', 'WPBcMfO', 'W7OoW4L74PAP', 'W57dGGqalW', 'jKpcOcej', 'oCoPWQ8', 'WPj/W7jTfW', '4PwxWPxIM4T9WP4', '8y+/TU+4Sa', 'WPKbW4NdSq', '4Ooq4l28nq', 'WO4mWPhcPqq', 'ymogo8onW6S', 'lSoDWQJcUWO', 'WQicwG', 'DK3cKeOz', 'pSkiW4rr', 'i3enzW', 'W5VdPZ1eWQK', 'aEg0NUg3Mog1O+g0UW', 'WO3dGCofttK', 'WOpcJL1zzW', 'DsSGW6qI', 'WRtdTqxdK8o3', 'mvy9huW', 'xaxcTL9A', 'WOtdIglILPBILPC', 'W7qBW5pILlJdHW', 'vbXMnSoL', 'WO3dNxb9CqtcU1vzW41OpCoE', '4PAN4PEl4PEV4Psj4PwS', 'WPD0W7v5', 'WPldTZhdG8kp', '4Pw84OkD4Ogv4OcQ4Og0', 'F8kmWOrxWQq', 'FtBcOCoocG', 'C25ms0O', 'W7DWWP4ZWOW', 'W7jwbSoXcq', 'W7WWW4ZdIG', 'WQtdOMlIHB1+', 'rISdW5O', 'FeRdOhbQ', 'iYC4y8k7', 'W5ahhhFdRq', 't11kuSoV', 'a39yWPmt', 'WQGkrG', 'BKxcPJ8u', 'g38YcNO', 'xYaaq8oW', 'E8o4WR7cTCkd', 'Amk2WPScBW', 'W6zOW5ZcM8k5', 'iSk7WRSQyW', 'vmoBW4ZcH8kS', 'W7NdIqzX', 'W40mkmkPAa', 'xLFcPYrm', 'jdBcOCkH', '4Pw04PwZ4PwL4PsY4PAF', 'v8kpW7hdMtO', 'vmklW7BdGW', 'W7XwW7m', 'smoVpSoKW6W', 'bSkDxhpdQG', 'hvuIq8oW', 'eHnZtWK', 'vmkfBfFdJG', 'WRddK8kJW5NdOW', 'W6xcOCkY', 'W5qotSkyyG', 'kSoOW73cUH4', 'umkADLFdMG', 'W7FdSCk6rtK', 'yfJcVwOj', 'EmoPnK1h', 'W5RdTCk4kSks', '4lEJ4lA6ndtdVG', '4Pwt4R65W6JdRCkR', 'ncVcTSoMkG', 'ySkeW5HxWRS', '4PAc4R+6WPddNSo3', 'hruntmki', 'WQinW4ddI8kP', 'd8oddXy', 'W67cHmovi0W', 'sNBcVMXF', 'qCkVWR4AwW', 'rrSCW5Go', 'tCkAW7xdG1u', 'fvncW7SP', 'W6P0WOS4WOW', 'tMFcVG', 'W60gCmkU', 'W6akW7dcRYi', 'W5RcTZm8jq', 'etqnW4yF', 'B29AuqK', 'wdlcQSoIzW', 'm8ouoJe', 'rIzIz28', 'uq7cTSoohG', 'W57dQ8kIcCkK', 'Z7xXG4APwgVWTBsp', '4Ps+4Pwy4PwP4PAP4PwR', '4ls/W6ZGTjtGTPtGT7C', '4PsC4R6wW7KUgq', 'iXuh', 'b2vqWPCA', 'xSkPbmoZW6G', 'CfxcU2mb', 'jYVcOmkSW6u', '8kUFRSkCWQtdV8on', 'hqyrq8oS', 'WPzJW7u', 'W5FcJsCQla', 'EmoRk0K', 'WRjxWRFcQmkd', 'wmk8x1tcNG', 'Yz3HTQNHT5ZcLSot', 'iCotW4zwWRtdUmokWP4', 'odlcVmkKW6q', 'WPzMW7u0', 'kXGFxa', 'W69fW6aEWQS', 'WQLrW6dcUdK', 'fNn7WRSo', 'W4X8WOSXWO0', 'WOJcMWCuja', 'iJeACCk8', 'i03cOJ4t', 'gCoqWR8', 'WRzdW5uGuG', 'FSkdWPmPrG', 'WORdTZxdMCka', 'W47cU8oYe8k/', 'zeLStrq', 'WOFdK8k7dCk5', 'W7pcKLGW', 'FuRcPYyw', '4PsT4Pw84PAc4PsA4PsQ', 'z2tcPCo5lG', 'WOJdKHurlW', 'dw9rWP9ztSkjk1rZmWxdVq', 'W7NcMKhdSSog', 'vae6mmo/', 'W5dcMJ8', 'W7BdMJn2WOC', 'dH3cMSko', 'DqONW6zk', 'WQtcHcFdUti', 'lqinD8km', 'BbNcRMfw', 'du80', 'vWKeWRnW', 'WP3cIaLQAW', 'ymkoW5W', 'W75xWR3cSsa', '4lEWEEc3H+c1SEc3Ka', 'BadcUhPq', 'kfxcVt9A', 'wcVcRCoFhG', 'dSoE4lAz4lAs4lA4', 'FSkWWQC5zG', 'sSkpW7hdIu0', 'aMPnWPS', 'jthcO8kgWRq', 'r8o6pW', 'xCkiDuldMa', 'wg/cPa', 'xmkzW77dG2e', 'zMpcPdfD', 'WP94W6HX', 'kZmYxSkK', 'WQKe4OkXW71H', 'fSoPWRZcPW', 'FvtdTdOo', 'sSkNW5ldJfO', 'oSkTW4juWRi', 'tdWjW5Oj', 'msuQWPnq', 'W4CfcW', 's8kpW6/dGxK', 'W50gESk7yW', 'WOmuW4JdTWK', '4Bs+4BwT4BEtYAtkUq', 'umkgW7BdNI4', 'W53cHZeIla', 'xYBcPcft', 'DZagW6S7', 'A8ooW7xcUmkZ', '4lEN4lsQ4lEx4lE24lsN', 'umojyL/dIW', 'WRJcRxLdyW', 'echcVmkIW7K', 'g8kuDNe8', 's8kpW77dJNq', 'W4dcRSkbEWK', 'ffivw8oW', 'W4ZcJsi', 'iG/dNKSw', 'W7/cI0RcOmoQ', 'e0qG', 'bH4SumoH', 'iremFCor', 'DfNcQ2i/', 'WOFcM1Kxlq', 'WQaoWPW', 'qSkdz0/dQW', 'WP1AWOFcSmkg', 'gmkiEeVdLq', 'WQylymkNsa', 'WR57WPaMW4K', 'Drb4mSo3', 'lmoTWQ3cVaq', 'WOmoW5SqWQ0', 'jbuqt8kB', 'WO/cHWeDEW', 'c1uWqW', 'WRFdKSk/W7FcMa', 'hSkftwldQG', 'W4npW4xcH8k2', 'WOXEWPlcVCkt', 'uN3cS1Sn', 'uX1XjCk2', 'fGqrWPHG', 'W45UWPdcL8k6', 'C3LwguG', 'p8o4WRtcUH4', 'rCkSW73ILlnq', 'WPzEWPlcUSkc', 'w2FcOZzz', '8kwqNokdTpgfOAlcR/cVHOtWU5El8yMfLq', 'xmkGWR3cHmkN', 'WP8hW5NcUKO', 'bgroWPyA', 'W7BdSaHAWQe', 'bx7dSVcTU4W', 'tmoAW6G', 'F8kWWRu+Aq', 'rtPJ', 'u8kgD13dJG', 'WR5ZWOO5WOS', 'EeJdQmoT4PwT', 'vxJWPPYk4Ogc4OgLZRpmI8+zZjhnQG', 'E8oZothdMa', 'WOyDhxFdTW', 'mmk7hG5x', 'agfRWQ80', 'W4yJWRqQtG', 'fHGr', 'uCoTW67cPSkd', 'WPhdTZpdN8kj', 'j8kKBtNcSW', 'w8kIW7pcS8kc', 'WQRcHSkGW5pcTG', 'fmoNobBdRq', 'rrPJo8oZ', 'uCoTW6RcSCkc', 'dX3cN8ks', 'iudcUwPl', 'WPpcGaO', 'WP3dPmoaAbW', 'W7hdJuGWW40', 'WOmoWR7dSgy', 'WQpcRMDOuq', 'W6SlW7aeWRC', 'avpcPYzD', 'E8o2W4JcQ8kg', 'WQJdO8kcW4VcTG', 'W7pdIr91', 'Eg/cPsnp', 'W5r5W4pcJCkn', 'W5jyW7pcSCkt', 'W5yDhxy', 'WOVdTYddImkj', 'xL3cQYe5', 'm8oAithdKq', '4Ps38yweKXBcL3K', 'vqy+BCk2', 'oI/cOCoQlW', 'W7hcISkECWG', '8jELHUkhGVcTTB5GWRy', 'WQJcSItdUIO', 'W5BdHICLpa', 'WOFcILfz', 'W59GW48PWRa', 'W63cQINdOq', 'WRtdLJ3dO8kf', 'eSkS4Pw4W7ldIG', 'm0NcVc43', 'rM9luqa', 'hYCeWQLY', 'v8kpW6JdNG', 'W73cNLVdO8ol', 'W77cICoOW5/cQW', 'bamrWQjk', 'EmkWW65MkG', 'sZaCW4qp', 'WQeou8kQ', 'B8kS4Ps7W7vq', 'W6ZcPCk5r20', 'BCkeWQeICa', 'WRpdKGlcRCko', 'x8oTW64', 'WOJcMGyviW', 'W4CnW6RdRCkf', 'WOWtWP7dPda', 'WRJcLXGwgW', 'y35TAHu', 'kx0YaKW', '4lES4lwebg04', 'pSoVnWZdGq', 'kL3dR09SW5lcPmoKW6u', 'WRqmzmkZEW', 'W7DZWOWGWOG', 'psiYr8k7', 'vSkiDuldLa', 'WPtWMicYDmodWQi', 'WPBdJ0GnDG', 'W5zaW7RcT8kf', 'kWqFD8kA', '8lAYQ040', 'xqtcVvXp', 'oWqmqCkb', 'ySkmBM/cGq', 'W7S9WPKMWOy', 'vCk8W7ddVg4', 'CaNcRwDu', 'AZrAea', 'tdWgW4WN', 'W5pcU8kSrbK', 'W5NcRK1aAW', 'gSkmuhC', 'W6ldUmk+kCkh', 'aCkzWQBcGq', 'W6tdPrbNWR8', 'W6NcNriCgW', 'W7/cK0pdJSog', 'WQ9mWQhcR8kK', '4PEft+kAOSoMfG', 'W6RcOSo5i8kc', 'jM3dVCk+Dmk2WQdcHsa6WOZcSgW', 'rSoKW7VdSSkn', '4Ogk4OMQ4OoB4PA74PAj', 'W77cTZVdVq', 'pK3ILl8Ugq', 'a8kaWRZcJ8kM', 'W53cMYmVoW', 'W6hdRmkKqsa', 'W5mwW57dS8ok', 'oc/cQCkQW64', 'W7Oezmk8qG', 'W5VdTSk2c8kt', 'W5NcGsORjW', 'WQpcNHOtja', 'm33cSMa+', 'W7/dN8kHkmk0', 'F8o6m10o', 'd2bnWPuu', 'W5VcJtuToW', 'pHvErCkk', 'vSkgW7m', 'WPBcNqKCoa', 'q2/cPtDs', 'W63dNqf4', 'EqJcRq', 'tNxcPcnB', 'W6NdJmkKoSkv', 'W7z4WP4WWOW', '4PUH4PQ+4PUn4PQU4PIk', 'WRewFmkPwa', 'qmkuWPOl', 'A8oRkfWv', '4lAoEuNcGG', 'C1FcTM8', 'W7FcUmk2vdG', 'AtPGlCoc', 'Y43lGCI84Bwz4BA0', 'WQDCW7GjWQe', 'WOxdVsddJSob', 'WOb0W6DOgW', 'ASoiW4/cSCka', '4PsytEkzHc4t', 'iXNdV3iC', 'WRFcQNPUua', 'gstcR8k8W40', '8yASHxlcGCk1oG', 'W4ZcIYK8la', 'eW8wWQrN', 'WOOl8lopH+kaIUkbJS2DZkVmLm2BZ5K', '4lsM4lwyd+c1Goc0GW', 'W5xcPmkbBa', 'WPRcN11eBq', 'iHmRWOLp', 'W6tcHmk5td4', 'WPFcLWO', 'WQDuW7mCWRy', '4PUjEFcNM7NWP7Ml8lkiVq', 'AX/cTq', '4PEX4R+QWOW', 'uSkaC1pdKW', 'W4mChx3dTG', '4Pwa4PsS4PEs4Pwk4Pw6', 'qSkWWQm/', 'zatcQu1w', 'W77dIqz1WOS', 'W7BcPW7dUIO', 'x2/cOY5z', 'W6ZcRINdTJu', 'WOz8W6r/cG', 'pJPfW70', 'W7FdRmk0tYK', 'W7ldSSkJaCk3', 'zhdcVJj3', 'W7VdNW/cOmkd', 'fCovWRVcMcu', 'WOWBW5ldV8on', 'tSkichddTG', 'WQ3dHCkSW5NcQW', 'W63cOZZdSdK', '4Psq4PEH4PAR4PsI4PEx', 'W7v4WOy', 'aXCle8oV', 'gGaC', 'BKlcSZKB', 'W7a7W5RdJ8kJ', 'FHX6ESoK', 'rSo5W53cTCk9', 'W44CgM7cOW', '8kUbSWq4W5JdGq', 'p8ouiJtdGG', '4PQQ4PU74PQA4PUz4PIy', 'W4RcIcZdUqW', 'WPTmWOa', 'bJmWBCkT', 'W5BcTWeklG', '8lYzIVgiQztWROM+8lo4I8o1', 'W6FcRYNdSJS', 'W6DKW57cM8kL', 'otBcPCkHW5q', 'DmkiW59BW60', 'EadcKL9+', 'W6TfW78dW7C', 'W7FcKKVdOSoX', 'aHm9cL4', 'amoSjmoMW6C', 'W5BcVCkqEci', '4lAX4lEmW7FGT63GT6u', 'W4hdR8kDcSk6', 'mSonlYxdJG', 'omkRvMmU', 'W4NdUSk6aq', 'oSk2Df1q', 'kxWtzCol', 'WRhdQ8kjW7hcIa', 'WPxdOKW', 'rtRWR6s3WQtdIW', 'W77dHWb1', 'W50/WQLPhq', 'WOtdNdddPSk5', 'WP7dQCkwW4NcTG', 'WPKauCkJbG', 'W7RdItruWPS', 'WPxGTBlGT73GTPRGT6i', '4P6WW5i0etu', 'pComWOypW7O', 'W51/WQ4CWP4', 'eW8wWQq', 'fH4qWRq1', 'ZOdWLQwjW71H8kMLLW', '8kkcQeuzW4VdKG', 'nIiQySo0', 'WQJdJ8kPW5C', 'vrbNiSo6', 'W6/cQG7dJYC', 'Emk8WQaGBW', 'nej6WQLF', 'lSoHWRG', 'jHxcJCkcWQ8', 'WOpdOshdISkg', 'W4ZcN1TcBW', 'WQqqWPhdOYK', 'W4tcRSkdjW0', 'WORcO1H+za', 'WReBsmkP', 'wZWBW4S', 'W6DU4PAX4PAf4Pwa', 'auRcNHr5', 'WOJdSZ/dJG', 'ofWMtSoo', 'h8kCWQ3dHSk7', 'WO/dUaddK8km', 'iI7cOCkUW64', 'qSo5W63cUG', '8j6wLFgiLiFWN7wo8kAKK8oG', 'A13cRhq7', '8lYAIpgiQA/WROQ48lo4UmoV', 'W4CKW5ddNCkR', 'WQ7cTHWWjq', 'W7NdVSkVcSkO', 'xmoMoCoIW7S', 'WQbsW7xcV8kf', 'W5pcRSkxFq', 'W5ibgNldVa', 'afqMcSkK', 'WPf0W7j7eq', 'oHODrmo0', 'WRPbvSkIeW', 'WO0SC8kWCq', 'W7BdOsnMWOS', '4P++W48dBhC', 'W4VcHcm', 'WQTsW6DonG', 'WQ8ouCkHsq', 'W5VdHYH+WRW', 'eGaexSk/', 'W7VdHX58WOm', 'bmktWQa', 'gmkndI59', 'W7TZWOSXWPS', 'WP/cGe4', 'W5FdN0ZdOCon', 'ygPPzXi', 'mmol8lELQFgiP5ZWS4AY', 'a1ixz8oT', 'eWSrWQy', 'W5BXG7kPwa/dOW', 'cYBILlfIha', 'gqStWP5C', 'EL3cSY82', 'ne3dSW', '4lAw4lsWWR/GTA7GTRm', 'kY8zqCkC', 'W6qXW5ZdKCkO', 'W6ScFmk/lq', 'hLizkfe', 'umkfWQBcJ8k/', 'W6RdH8kPW5xcTa', 'W6T0W5OWWOW', 'W57cGuXACq', 'W53dUSk6fmk1', 'W7HrW7KfWRW', 'WPKnW4xdQsu', 'W7atFmkZyG', '8ksYGEkaPFcFOkjQeftcPG', 'FSk4ughdKG', 'aSkgtW', 'B8oVWQ/cVbm', 'mSkts0mv', 'W6TfW6ifWRW', 'W6/cVmkFxYi', '4Ooq4Og84OcS4Oov4OcV', 'bmkvWRVcK8kN', 'FmkiW4vj', 'WPXJW78', '4Q2eW4hcGxBcVG', 'mIpcVmkIW7K', 'E8oNnSoLW6u', 'W6RcGdegpW', 'EtRcO8oSzW', 'EdRcSmoSna', 'W5z9WP80W6m', 'W71nW6iDWRW', 'WQ5JW5hcJmkZ', 'W7TlW6mFWR0', 'W4ZdTCk6f8k/', 'bmoqW6NdH8oH', 'W4xcQSkBFqK', 'WPX3WQy6', 'W7lcRxXKAq', '8lMFOYJdSfNdPq', 'ledcGZ4a', 'WQddG8k0W58', 'sbFcI8kcWRO', '4PE+4Ps74PEZ4PEE4PEN', 'WRBdICkQW4ZcRq', 'W4VcICkksJ8', 'phucCSoh', 'W7hcNCkjrGm', 'd2DCW5OQ', 'W4XFW4pdP8ob', '8lYzJ8o9ag3XGl6Q', '8l+hGFc5PlZWR6Ah8kAxQVc0Hiu', 'W6/cHcmVoG', 'k0NcQW', 'r2pcUsvi', 'WPFcOJX/W4W', 'W70kW7SuW7y', 'lvLkuWO', 'gIGTE8k6', 'W7HrW7ZcQs4', 'fwrxWP1F', 'BCo8iGyt', 'lqqDqmkg', 'WOmUWR7dSgy', 'gSkmtcpcUa', 'oxTyWP0A', 'W5lcIsGPka', 'oHuqxmkI', 'W4JdO8k6xq', 'W6VcISkHtG', 'eazfFCo6', 'W5hcJtuR', 'W5tcNamkeq', 'FmkyW5LlWRq', 'aNqLjK0', 'FSkWWRuVFG', 'aadcJCkBWQO', 'W5VcGti3CW', 'nYVcPmkOW6u', 'CmkbW4SO', 'av1dWRm1', '8lIXTEkdSVcQKzldU8k+eFcGTkO', 'W4JdUSk9bCoW', 'kXektCki', 'Y6/HT6VkOUg3VCMu', 'WQ3ILitIL67ILiJILA0', 'WOXuWP3cU8ki', 'WPFcOLiWW4W', 'zCo+mLai', 'W6PnW6ii', 'tmoLpSo0W6e', 'W6DbW6ec', 'W6VcTmk1vdK', 'W7xcMLVdS8oa', 'eSkKWRRcKSkI', 'br4sWQG', 'ECkNWRG', '4PERrokyRmkLAG', 'bSkfWRVcJG', 'D1FcU2qi', 'WQdcHLTmCq', 'rmkCAKldMa', 'WQzpvSkOwG', 'heDOWQip', 'WOreW5ldRse', 'dH3cLCkoWRC', 'zCojWQ/cPX8', 'W6/cRcNcUda', 'EX/cQ2fl', 'obZcLSkfWRW', 'W5ZcItiRlG', 'WP8BWOpcTSki', 'W58gWOdcVhi', 'xJbA', 'W77cHcq7ja', 'rSopcL0f', 'W7Lfh8oT', 'rISt8yo7VFcyQia', 'W7PbW4KvWRG', '4lAL4lEW4lEE4lstnq', 'WO/dOIBdGSko', 'sMVcSG', 'h140', '4PsP4R+9W7DIha', '8jEPI/giQB7WKPIt8lQzH8kS', 'WO/cLX0Cda', 'bX0mASoo', 'a8ofWRddJha', 'vG7cICo7pq', 'brdcImkKWRa', 'W6VcJsuMAq', 'WQFdH8k3W4JcSa', 'W6GvW79bWRe', 'WOFdI8kIbCkX', 'W4GhcNVcTa', 'W7WXcfpdJa', 'amkirwy', 'EX/cMM9k', 'W6XwWR7cPZ4', 'WR5iWP/dS8ke', 'WQv/W6XYhW', 'u8oLWRhcTCki', 'rSkaA1hdKq', 'WPuas8kJtW', 'nIFcVa', 'W6mmxSkYwq', 'wsZdT3GC', 'qSkkze/dKq', 'r8o/W7S', 'rSkLW7j6WR4', 'e3HC', 'c1uWq8o2', '8lMaI+kaHFgjSRBcRo+8UU+8SU+9QW', 'WOfLW7f1fW', 'vJL5', 'nhtcGW8T', 'tcpcIKXP', 'wKDiW6O4', 'n8oFbaJdVW', 'w0XOzq', 'dCklv0W', 'iSkzDG', 'D13cRse4', 'W73cPYNdPZ0', 'W5NdT8kRwSo6', 'hNhXJPgkz8ol', 'W7P4WOW3', 'DmoaamoLW4u', 'lwuouSo+', 'fqusWQTW', 'FNLgqby', 'WQxcRMnKua', 'gCkRW5BcJEc2Ua', 'W6fnW6qeWRC', 'E2RcSInp', 'W6JcQYtdSda', 'eSkmxq', 'W7j8WO0ZWOW', 'W5etqCkpDa', 'WQ0SW4ZdJ8kJ', 'vmkeW4zbWO0', 'WOdcN0veDG', 'sSoHW7pcPSkC', 'WR8DW7DEWQS', 'dSoJWPNcLIa', 'arFcKSkoWQ0', 'W7XkW7jlW7m', 'W5/dVt9IWPy', 'qmo1WPOPFq', 'oW8lWQbH', 'EfZcSMG5', 'WPFcMtSCcq', 'W6VdOIhdUZG', '772F77YD7721772acq', 'W61OW5KDWQO', 'W71SW6mtW7K', 'AfbEcmoL', '4PwgdokzJ2Pq', 'W6DbW6tcRG', 'WR0wWQhdPh8', 'aJyiuCkS', 'DZRcSmoSia', 'iJBcQCk5W74', 'WQOCsW', '8lUfN/cFLPdIHi/IHPhWNPwt', 'W6JcVehdImoI', 'd8ogkLFdJq', 'WP7cT8oADv0', 'W5BcHmknFG0', 'WPlcLJupga', 'W6O7W4JdM8kP', 'nmocjq', 'hSkvWQNcGSkU', 'x2/cUIDM', 'WQ0kuCkY', 'qmoIBCkTWQK', 'W7hcH2yNja', 'WQCos8kN', 'WP1AWOFcU8ka', 'WOnWW7jUhq', '8yAUNXhdHmkuoW', 'bv8GgKS', 'vSohevSR', 'zCoIiXKb', 'W5BcVw7dTCoI', 'W5tcPCkNsYe', 'lCoTWRtcP14', 'dSkJgmoWW6C', 'W7ZdHHT9WOK', 'fCkkufqe', 'zgPBrGi', 'nsFcU8kU', 'wZ0RW4Ch', 'WQNdG8o5', 'kXeoxmkg', 'W47cV8kaEWu', 'Br3cTwDn', 'AhxcQCo7W68', 'gW3cL8keWQK', 'W7z0WO8', 'qq7cTNTx', 'hvuZtmo9', 'WQRcVmk+tIO', 'fg5yWPKl', 'rKXqWOWA', 'ySkgW6b4WP8', 'W7OkFmkJ', 'xFcLTyC', 'W4PXW4qJWPW', 'nghdPmoFjG', 'WPtcKWDf', 'AK3cV29q', 'w8klW6VdNM0', 'W43cQMFdSCot', 'W6RcOZZdTa', 'lSo4WQ7cTaa', 'W57dVSk8qmk+', 'ELFcSNe2', '4P2cW5VcR8k8ba', 'WOFcHKzdka', 'wSoPW6ZdQmoh', 'kr4xrCkk', 'WP8bW5ddPJq', 'DwHh', 'W7ZcNLVdTmog', 'bg9v', 'WRFcHSkMW5lcSa', 'WQKjWRzF', '8lQ0Pq/WVzwl8lUKV/gpHRG', 'W61fW6iuWO0', 'avBcPs1k', 'W75fW7quWQ0', 'W5pdK1LfBq', 'W4pcRSkCAG', '4PA24PEc4Psc4PE74PAX', 'WRhdLCkI', 'zCk2W70', 'EdRcQSoUmG', 'WRdcHSkHW5xcTW', 'A11aCGS', 'aLmxCCoR', 'WPVcMXub', 'WQWOW4LNW5hdHCkmEHKXWPHQhW', '8jYnJo+7MW', 'rSoSnSoJW6W', 'W63dIqzKWOK', 'ySkiW4HjWRi', '4Pss4RYAWQe', 'f0eWbWK', 'WRFdKSkMW47cVG', 'ir1fumo3', 'mIpcUmk5W6i', 'W4O4W47dJSkk', 'WQH+44kMWRu', 'WO5oWOdcTG', 'jCkBWRdcICkc', 'WRCou8oMFW', 'FSoHkfW', 'W4GxW7VdVSoS', 'W78gpCoOBW', 'DWNcVc5y', 'WPlcN0acya', 'W7NcMLS', 'o2NdQSk8Aa', 'WRbps8k/ta', 'sSoSi8oMW6a', '4lww4lEL4lsZ4lsr4lw9', 'WQhdLmoQW4BcRa', 'swNcSZS', 'W7TQWOX5WPO', 'fCklAKi', 'WP9WW7i', 'eSkvWRVcHq', 'mc/cUmkHW64', 'W7utdSo3qa', 'q8oDW4FcI8k6', '8kMgLpgpLjBWVAoj4Ogd8yMbU3BcSq', 'rSoBoSodW6O', 'W6NdIXOWWQu', 'WOmfW5ZdOa', 'ptVcUSkKW6G', 'aHCxqa', 'WOxcNGya', 'W7P4WPTUW4m', 'W6OSb3ddIq', 'WQldTYhdImkt', 'fCkrWRZcG8kS', 'iwrwWP0t', 'WRCgs8kQwq', 'qYBcHdDE', 'pve3rCk+', 'W7VcIWddQCot', 'buCHbKC', 'WOPsWOFcSSkc', 'W6tdH8kPW5xcTa', 'wmkeW6VdSNu', 'WRCkr8kY', 'rqDM', 'qUc3Joc1NSol4lwd', 'W77dIqjKWOu', 'W7RcQIFdPY0', 'oSkDWQpcJCkC', 'Fc/cSmo5na', 'mc/cRq', 'WP3cJL90sW', 'DCkMW70', 'Fv3cRgi', 'n0xcVc4', 'W4C0W4tdPYW', 'W4hcJHldSt0', 'wsKKW6yC', 'WPfWW7jPfq', 'WQj+W4/dJCkJ', 'fwPxWP8i', '4lwb4lwy4lEZWRxGT6y', 'xZCDuSoY', 'W43cQYpdGbK', 'WONdV8kEW4JcQa', 'W6XgW7lcRY8', 'W55LW6q/WOm', 'WR4U4PAr8yIfNxm', 'heqXsCoQ', 'W6DdWRpcSYO', '776N77+W772PWRxVVAK', 'uIZcL0K', 'AZziW5Sp', 'p1hcUZW', 'WQiPW4hdNSk4', 'WRGnW6JdGtO', 'efO/cKC', 'W6RcMLFdTa', 'W4FdTmkNdG', 'grClvmoR', 'zCkgW7FcNZe', 'vIDebmom', '4PAF4R2tuJddJa', 'WOFdQ+kuIsLm', 'qNxcOW', 'iCk2W7FdTq', 'W4VcRSkbBHG', 'nLbHWQfJ', 'eLyGda', 'W6/cQCkUhsS', 'EeRcTI86', 'nCouiJW', 'WOBcNeW', 'W5DjWPVcPq', 'oLtcOsGi', 'kmopoJRdHq', 'r8kmDKpdKq', 'jHettq', 'cKCW', 'umoeW7JdHhq', 'WPRcJaLQAW', 'v0j8Bce', 'xmoPW6NcOq', 'gmooW7hcPCkg', '8kUdNEkbM/cOGi/cHpcWH7lWLyw88kQ2VG', 'WQpIM7FVUPZdVqu8', 'qmkAya', 'W7RdKHXcWQe', 'W6a3W4FdMmkL', 'WPxdTYy', 'W5nKW5hcJmk0', 'WOFdJ09mAW', 'abbfzSon', 'D3Tgr1G', 'DqJcOa', 'rG5vt8kR', 'WP/cHHiNna', 'E8kgW77dJMS', 'WP3cLrylyq', 'W4mgW5JdQYC', 'W40nfW', 'WQSoDCkbra', 'W6/cUc3dPY0', 'W6pcOY/dSc0', 'pYxcI8kFW6C', 'W6W7W57dJa', 'eHKwWQzY', 'tmoFW6FcH8k7', 'iSk/WQ/cHCk9', 'amkmx3a', 'WPhcG0HoAq', 'WRpcMueG', 'g8kuWRNcQCkI', 'WQJWQlob4OkY8yYsQCoe77Yq77YU', 'oCkSBxC', '4PswW4hIMlycW70', 'cM8WrCoO', 'WRddRSkYW57dUq', 'jbKitCkC', 'ignJtSoH', 'WRpWP6osW7PdW40', 'BeVcUG', 'W6naW6mZWO8', 'WRdcHv89W4e', 'gCkhxKNdMW', '4PAC4RYed8kGWOm', 'pCkVA2JdTq', 'dN5BW5qC', 'W4NcRCka', 'DqJcK8oyjq', 'W6xcV8kYabO', 'xHyWW60G', 'jWiAw8oa', 'v8kfW6VcJwy', 'Dv3cRsfL', 'WRlcMaOUfq', 'DCksW5HdWRa', 'W7igFmk0Aa', 'jLWGg0W', 'eCkCCgmE', 'ermruG', 'uMJcT20U', 'WOtdVsy', 'WQaBxSkzsq', 'WRFcISoN', 'WPdcLZWWfa', 'W6bsW7mFW7K', 'WReWsSk0ua', 'uIJcHSo+da', 'W4BdVZFcI8ka', 'lNtdQ8oUlG', 'i8oPWQ/dTui', 'naZcTcmu', 'eXmNaaK', 'vYKkWQnW', 'gmo+eW7cJG', 'W41NWPCKWRm', 'tSkeW6NdP0i', 'mglcHSkOW7W', 'jSoRWQ7cOre', 'p8oJ4Psr4Ps24PA9', 'k8oPWQ7cTGi', 'tL9hyaG', 'W6HnW6jDW7K', '8joUNmosWRpcHmo/', 'gbiuFSkc', '4PAV4R2GW65aW7a', 'WRRcV2XhDa', 'd8kotxdcOW', 'BLpcPqvL', 'WPJcLWaB', 'FudWPOErnv0', 'gGdcMmkJW6O', 'lf/dQJKkWOtdU8oiW7xcVCkSWPe8', 'xxhcNLaN', 'mY3cV8kHW64', 'W6JcPYRdSw8', 'BCoGivGE', 'W6rNW5xdJmoM', 'W6FcSJZdVde', 'br5fWQzY', 'W41U8lobGokFOW', '4PsT4PAU4Pw04Pw04PsN', 'WPxdOMWCca', 'W7BcPCk0sYG', '8jYPJVcwQAFWPiUb8kEBMWO', 'W7jKW4pcI8k7', 'WO7cLWanlq', 'W6hcQmo3vYu', 'WQtdRmoTaa', 'oXuFwSkm', 'W7TGW5OzWQm', 'WOddVsdcI8kc', 'bfSlrmom', 'WRWsW57dTGy', 'W7RcMLZdOW', 'W7iqiSoGlq', 'b0WLBSkN', 'W5dcU3ddLmo6', 'oXuk', 'AGJcVs54', '4lA24lsuzUc2Ioc3NW', '4P6477U9u1ifW4C', 'W7q6s8knxG', 'xCo5W7dcPSom', 'W4StW63dVCoS', 'W4/cGcK6jG', '4Pw7W57IMRKexq', 'W6DeWPhILAnG', 'W60lFCk4Ea', 'lqmnsCki', 'x8oLW7RcUa', 'qrPMD8oI', 'uCkiCvC', 'WR3dH8kwW5pcQq', 'WPddUZBdJSob', 'FX/cVtfA', 'W5mBcW', 'W4RcH8oTcM0', 'g8kdrKVdLq', '8lMaI+kaHFgjSRBcPGy', 'W48wxmkixW', 'ySkS77+RW6fq', '4PYVkWvZea', 'W43cNsG8ka', 'ttWBW50g', 'W5enhg0', 'bfyYdf0', 'os7cJmkkWPy', 'W7dcMa/dG8or', 'v8kdW7ldIca', 'W6fqW6ibWQO', 'FfJdTg8a', 'W7BdJqS', 'WP3dOCop', 'WPtcLXiCja', 'WOjKW6LUhq', 'WRRcIbOxaa', 'bqeBzmkA', 'WO4lW5/dQI0', 'vSkgA1NdKa', 'W4CpW4tdR8oE', '77+h772n776d776Kya', 'tZGCW5Wp', 'buCqk0i', 't0JcShm/', 'zZtcSCo7ja', 'WRnPiSkova', 'hmoUW7lcS8kj', '4OoT4OcO4OoG4Oon4Oo0', 'W4vOW7q+WPW', 'tCodimomW7W', 'W57cIGpdNZy', 'FmoA8y2qVmoRWPi', 'z8okW4tcLmkB', 'W7iMW6VdVSk9', 'W4RcU8kmcCk+', 'wSoGomoPWQm', '4PwP4OcR4Oom4Ocs4Oge', 'W6ddO8k2cCkY', 'shlcVI1s', 'DmoOluae', 'naulWRn8', 'W5/cQ2ZdImkd', 'W4FcPstdVXe', 'u8oDW6VcVmkq', 'iSk9ugBdUG', 'g8krWQ/cG8k4', 'W7qczSk+', 'BqJcT2P0', 'W7TqW6eE', 'W5tcMmkEBWm', 'bSkrWRZcKSkU', 'z2FcUsvj', 'W4XPW4tcKY4', '8y2KRpcsP7OgWP3cNq', 'hvuWvCoO', 'WRZdQWtdR8kf', 'W6PPW58HWPO', 'W5BcHseVia', 'kH/cNSk7WR0', 'W7ZcPZVdOdi', 'DCoCW45m', 'ySkoW4ycWR8', 'WPb1WPlcS8kc', '4Ps/4Pwz4PwO4PAO4PwQ', 'W6/cIKddTmog', 'cSoWWQ7cRSoE', '4lEU4lEu4lwH4lEXha', '8yo+Io+6Iq', 'dHJcMmkm', 'gSkaxg/dVa', '4PsTjUkzIMiw', 'pVcPOku', 'WOtcKCoUqokuTG', 'fvnI', 'WQhcQM5Ktq', 'bSkCWPZcLmkK', 'WRBdUGRdSCkM', 'fCkFWQBcKmkU', 'WQtdKaddOCot', 'W4K+WQL7ca', 'erVcJmolWQ4', 'W75kW6a7WPS', 'WPXuWOtcSSkc', 'W7LrW6dcTq', 'WQRdG8kWW4/cHG', 'F8ormY/dLq', 'jSoundJdGa', 'WOFcH0WnBa', 'zflcRJvA', 'W4JcU8kGaCk9', 'WQD+WQzPhq', '4PsL4OgJ4OgT44cMW48', 'W6/cRcFdUZS', 'mSkvjdJdHa', 'jJhcT8k/W7K', 'W6HjW7y', 'jXTbwCos', 'qSklW6DaWOa', 'W7TLW7igWPm', 'BNZcHHjp', 'WO4hW4tdTYe', 'WO3dQ8of4OEHta', 'u8o4WR7cQ8kf', 'FxRcUMmu', 'bey9', 'YBZHT7xHTBzyY5G', 'f0e6beG', 'W7GnjSk3yG', 'AZaCW4qp', 'FqxdUuby', 'WONcGb8', 'AL3cVNm0', 'f8koW7RdN2e', 'FWhcTwTl', '4lwI4lwvcEc2UEc2Ta', 'W6JcOCoKqmo6', '4Psm4PEv4PEu4Pwm4Psk', 'FSoRAbnT', 'iCo/W7q', 'tHH1mmoZ', 'e8oG8lIMUIaV', 'e8ouhGq', '4PAl4R+FWRpdVwS', 'WPhcJL1EBW', 'r2/cUsK', 'lJCZySke', 'xZmjW4mC', 'DZpdPmoAmW', '4OcU4PEE4Psw4PwP4Ps3', 'W7FcQCk5raa', 'W63cRcKglq', 'WOJdTYxdMa', 'W67dIWb5WPW', 'WOxdUJpdM8kv', 'W5pcMaSugq', 'p8odsfFdIq', 'mmksWR3cImkm', 'dqFcISkkWR4', '4Pso4R21zHLh', 'W71mW7nrWRO', 'iLZcPH8u', 'W5RcKc89pq', 'stamW40o', 'rSkmA1ldSa', 'W7TbW6yDWQa', 'tIr/gSoC', 'W6hcHSkUBIa', 'FqlcTNXD', '8lIXTEkdSVcQKzldU8kug10', '4Oo+4Og34OkI4Okw4Ogt', '4BEG6P+d4Bw0Y7HH', 'emkFsKa7', 'W47cPCkxAJq', 'vmk7C1tdIa', 'bqqeWQPW', 'eHCr', 'W6OgACkOBG', 'ZO3XJksnagFIH6O', 'W73cUZS', 'npcKIBa', 'W7/dHWv8WOK', 'g8kmDLFdKW', 'W44CgM7dQG', 'jL8Wamok', 'W7pcIeGW', 'is48WP98', 'W57dR8kVeSk3', 'W5m5hNJdQq', 'ZzJWSRAmFCkE8lswJG', 'xIWCW4af', 'Emo8pXLh', 'WPxdSsddGSkr', 'mXJIMB4l4PYA', 'gCkFueew', 'bHettCov', '4Pwt4R2oDN3cLa', 'q8kdW68', 'gbGoW6P3', 'CJtcTSoIna', 'yCksWPiIyG', 'nglcPSkSW7G', 'WQZcJezyBa', 'WRBcNvTcCa', 'pthdP8k6W6O', 'WRvVWPNcI8o7kSkqswrwW4el', 'EmogoCo0W5W', 'kmoLWPtcOti', 'W6DqW7BcSZ8', 'tMxcVIrv', 'gWtcI8kfW4m', 'WQhcHSkJW5NcQW', '4PsM4Pw04Psv4Pww4Pwz', 'WQytW7itWRS', '4PsM4Pw04Psv4Pww4PAx', 'csTwWPXF', 'yfVcSYqo', 'W6/dHWaWWO0', 'gmkvWQBcKG', 'WOybW4G', 'bXene8oz', 'W7VdIJLbWQ0', 'WQVdLmk+', 'W63cOmkYd3K', 'W7uWW4ZdJCoS', 'a2uzWOOx', 'ocZcRW', '4PwF4OkF4Okn44oCW4O', 'BL3cVNu/', 'W7ZcPYNdTIO', 'hbaGt8oG', 'W6NcRI0', 'w8oji3u9', 'g1WMcSkK', 'gmkdWRZcH8kS', 'W6XtW6vrWP8', '4OoG4Oo84Oc64Oc+4Ocr', 'WOtdOMJcTx4', 'W7XxW7m', 'W5hcR8kIBbq', '4lwg4lA44ls7uEc1Qa', 'WO7dTZpdJ8ke', 'WQq3W58', 'dSkBrvyu', 'vmoCW53cPSki', 'W6/dJrv5WOm', '4PwV4PEO4PsP4Psc4PAy', '4BwwWPxQNAFHTzRHTRq', 'D8kSWQq', 'mSouiJJdKW', 'WR0nW5/cPqm', '77Yy776L776S77+ZW4O', 'tXa0mmo/', 'W5pdJ+kxJW0I', '8yAZUUkbN/c1OzPFWRNWQ5k14P+T', 'W6XlWRGXWQu', 'F8ktW5i', '4Pwr4PwJ4Psj4PEA4Psm', 'W7tcK8o+WONdOq', 'aMX1WReU', 'ivJcTtOo', 'sb3cTNXr', 'W7/cIIKTiq', 'W71bW64f', 'bSoF8yQnTEkdL+kdLC2MZkBpK8+aZ7S', 'tCkpW6FdMq', 'EdtcO8oGkq', 'FrJcVM8U', 'cqdcNSkBWQ0', 'WOTi772d77Y6WRK', 'hCo5eHBdUq', 'WQCCh8oMha', 'WQmeWPNILjlILyO', 'W7nKW5hcJmk0', 'zSkXWQeoxa', 'qmoLW7VcOCok', 'W6OaESkZFq', 'x8kAALG', 'WQhcTsNcUZm', 'WQGtW5FdNXG', 'WRzPW6D3ca', 'hY4jW4yE', 'a1uKuSoL', 'WOb0W6H+nq', 's8kzWR/cJsa', 'xI0nWOGd', 'zCkgW5C', '4PAo4PEc4Pwi4PAv4PwE', 'dSoaoCoHW6y', '8kceVE+4QW', 'W7/cKKO', 'xSoHmCoFW6e', 'lmo14Oo2Bca', 'W5ncW6v1cG', 'W6rbWRG', '8kkaMVcMN4JIGPlWSicbrSk5AGy', 'CNLd', 'WOZcHWaq', 'sbpcNmkfWRW', 'es0OWO1+', 'W5S3rG', 'omkMW5pcS8kE', 'dmkixhddTa', 'C8kfzfhcHW', 'WRmoWRy', 'W6akW7SqWRe', 'fmkAbfys', 'W4hcRYFdSJW', 'bCkAaJNcUq', 'wgpcUszX', 'WRddJ8kOW5ldSW', 'W5RdGMz0Aq', 'B8oVmLWa', 'gSkmeINcUq', '4PwV4PsW4Pwd4PsG4Pwn', 'xYVcT8oAmq', 'A1FcSwqG', 'uZmCW44e', 'ACo1WOCPAW', '4Bwk4BAm4BEg4BEsua', 'gWG9WQHX', 'CokFH8kl8jw0TVc6LAe', 'DSo2nvSv', 'WOJdKGOxna', 'W6VdJqa', 'fh5x', 'EmkWWQW4', 'W4JcJqFdGrS', 'W53cJYqVpa', 'W6P1WPO6', 'lFcDO6WdmCoL', 'zwDara', 'W6mPz8kSFG', 'WQ4kaq', 'mePZWRmT', 'WRrojCo3ia', 'WOWjW5q', '8jgDVo+6KmoSDXhdIq', 'hCkDsxFdRa', 'WQpWLPgI', 'WPJcKWCz', 'e8khWRS', 'FSkHWQmJBW', 'ACkvWPS', 'W5NcLLNdPCkd', 'W5hdN15vBa', 'sgNcOIXi', 'oIJcRCo7jG', 'oSkrs0mB', 'xokBOo+5Ne9NWQ4', 'WQnmj8k7Fq', '4Psl4PAN4PEg4PA94PEy', 'CHtcQ2DA', 'dSkxueWc', 'W7PbW7GvWPq', 'qSoSBCkNWQG', 'wL0srmoO', 'xSkNomo1W64', 'WPj/W6nTcW', 'zSonW5ldSSkV', 'WOnKW7vY', 'W4HEW4RcSr0', 'h14YceW', 'iv7cSsjA', 'lbeksq', 'WRKdAmk6lq', 'W4FcMLW', 'bmoIiYtdNG', 'W77cSsiBpa', 'W7LfW6ifWRW', 'WOnJW6nPcW', 'fCkvWOpcTmkX', 'W4/cQSkbBG0', 'qLtJG7BdOq', 'ud7cT8oQzW', 'W6TWW5ddNSkI', 'WO3cU+kuQeddSa', 'WP/cN2r3uG', 'W7dcPmkYacO', 'dmkBWOhcKmkC', 'FCoaW5lcNCk9', 'W7hcHsGHeq', 'qmoOiCoEW4a', 'k8oEhYVdOW', 'lmoJWRddUGy', 'i8ohmZNcLa', 'WQOcxSkHwq', '4Pw34PwB4Pw/4Ocb4OM7', 'W7nfW5JcJmkU', 'WOqkW5RcV2O', 'j0NcVc8i', 'E8oLjdldGG', 'tubfW6W', '8l2EVE+6Na', 'W4CCcZ7cOW', 'rdFcOCoOna', 'hqFcNa', 'd8kFq0uz', 'WOaXW690hG', 'fCojjrBcNq', 'cv8XamoN', 'W5VcKhVdKmoG', 'wSoMbmoZW7S', 'i8oAodG', 'FfdcSqv0', 'W7qgjSo6la', 'W6BcPYNdStS', 'WO4uW5RdJa4', 'WP7dJ35iya', 'W7b+W4FdNSkH', 'W5dcVHWnaW', 'eSkrWRZcHW', 'W7OeW7lcSYi', '776R77+17727WRxWQlce4Oo58lYaSq', 'WQyCtmkNwW', 'bY0qqCoZ', 'hen5cSkK', 'l8oSWR3dN3O', 'WOrkW5ZdPcG', 'EGJcQM0', 'W4DibxVdOa', '8kMfQFcOTRJWSjwWWPxWM6E9', 'W61bW6dcVG', 'WOVdSZ7dTmki', 'W6mZW4W', 'hbGPwmoX', 'WO/dMhLY8k+dHG', 'j8k8WQFcLmkZ', 'lSkSWPpcSaC', 'sISe', 'WPhcL0Lsyq', 'hSkPD2yz', 'W5LQW5xcRX4', 'gmkOA0u5', 'WO/cGH8rnq', 'DCkrW4jrWRG', 'W6S9W4ldMSk+', 'cmknqvyz', 'WR3cOUkwVEkuKEkxRq', 'WQ7dHSo9CGW', 'vrP6mG', 'W5ubhh/dQG', 'peqIvmoX', 'wgJcLI93', 'qLvZpSoG', 'u8oIW7hcVmkp', 'W6XKW57cMCkJ', 'nSo/W7q', 'WR/cGbOBkG', 'yNHCqGi', 'W4RdSSkOgq', 'WRm3CCkQAa', '8lAlNVgoUktXIzU08jcPOSkP', 'BmkFqgxdJW', 'W6XxW6dcVcW', 'W7b8WPiX', 'yIilrSop', 'tmoqWOG', 'Emk5W5HOWP0', 'W7lcSr86oa', 'W7qXW5pdVSoh', 'W6HxW7mvW7K', 'tbbT', 'BCkpW7ldNtO', 'W7VcH1/dRmoc', 'd8kBruCd', 'WRFdG8kPW5JcLa', 'WQtdRokuSqbT', 'W69nW7OuWRC', 'cM5yWOKA', 'W57dOJHiWOG', 'FXFcVhXk', 'WRxXHzka8k65TVcrMR/WMjMY', 'bHCxumoW', 'tc0jW5WF', 'W7SmBmkJ', 'vCkmW4PlWRS', 'YRlHTOZcS+g3N+g3RW', 'vtZcJfLw', 'wSk0W4HXWO8', 'aLyRgW', 'EJRcQCoSBq', 'md8YFSoD', 'fw5n', 'W4FcHCkCzIq', 'AL3dV2y+', 'equjWQT6', 'W7iNcx3dRW', 'kHb5', 'FokvNUkvKUkvR+kuQq', 'W610WOS7WPS', 'EYBcHbz9', 'gCoaW4ZdMwe', 'y8keW4vgWPO', 'y8o8pW', 'zGqBs8kh', 'cKjJeCk+', 'EmkMWPu8EG', 'iSoJj1Ca', 'FCoMk3aw', 'qL5DzdW', 'W7hcKuO', 'W64XW4RdNSk4', 'WRtXGkkx', 'xmk1WRRcLmkK', 'W6f1W5pcLSkY', 'W6ZcOZZdOtS', '8kASSXNdKcT4', 't2FcOYm', 'igmjp1O', 'W6NdJryWW40', 'DfNcS14+', 'WPJcLWaBmW', 'r8kiAbBdIa', 'W71xWQvhW6K', 'WONcQmkazem', '8kciV/cKIB3WUQU58lo5IpgjMze', 'WQXI8ksSP+kbHokdI8Y6ZRFoQSY7ZzO', 'hCk9yG', 'wKBdISoCW6RcVxeIW5ffWOpdP8kj', 'aauOWOjN', 'hSkmtuCC', 'zCoQiXKg', 'tCkfWP1IkG', 'W68/W4ddKq', '4lwxWRlGT6/GTj3GTk4', 'W6HKW5hcMSkY', 'W6JdGXrOWRK', 'hmoTW7dcU8kh', 'WQNdIr7cS8ks', 'sfRcR0u1', 'A2risGS', 'WQVdISkYW5hcVa', 't8oVnLat', 'W45KW5xcMSo3', 'aCkDcgxdTG', 'WRTpWQdcQSkf', 'W7ddIHDIW4y', 'W5uBW73dLSkQ', 'WQdIGkpcKmouWPK', 'qHrMnmo+', 'W5r/WPBcRCke', 'W54BW5NcMSkc', 'W6NcI8oQWPhdTa', 'W5mX4PwGoLG', 'cSkFrKed', 'W6JcRSkKCdS', 'Ee3cQ2K4', 'pmkWBwKY', 'aSkrWRZcK8k4', 'sg3cSJyC', 'WOyxWPVcV2a', '6P2GY53dQoQFVog2LW', 'qCo7lG', 'bKyGbW', 'n1NcSwG6', 'WPxcGqm', 'r8ouba4', 'W7tcHGz1WO8', 'WPL+W690', 'W6a7W53dNSk7', 'gmokW6ldHG', 'xtGqWQK1', 'W6uHoKFcUq', 'jVgkGi5SswW', 'W4Spd3C', 'pCoPWQ7cObW', 'W5VcItiR', 'W7HyW6JcR8k6', 'bq8wWRj5', 'oCkTz1ev', 'WOZcKWCmja', 'W6VdGrz1W4W', 'gSkrvL0', '8yk5GVgbQQBXHkUt8jo4G3e', 'WOBdSmkDW53cLq', 'dsumB8k2', 'W4vVW5tcM8kZ', 'W6tcI8oN', 'WOdcGwfVtW', 'tCoOi8oIW64', 'WQLjW7KhWRa', 'W67WTQ+x', 'bH/dK8olW6m', 'W6rwWO0rWRm', 'bL8ThW', 'imkCrwhdVa', 'd8kJquNdOa', 'W4PyWPlcV8os', 'WOmlW5FdRc4', 'W5BdHISViq', 'WOZcNqmnlq', 'BCoLeSo9W6e', 'dsv8omo4', 'tevyWPCA', 'W6CSW5RcKa', 'W4JdO8kNe8kK', 'W4RcQSkBAGq', 'iZmVESon', '8kkYMmkjWOxcV8k5', 'iK3cSseD', 'WPxdOMWpdq', 'iIFcPSkPW4y', 'W6DUWPhcPwa', 'vCkpW7VcJxC', 'wwNcTcDp', 'umouba', 'r8kJWPGzuW', 'EGZcRw8', 'fGymWQzM', '6PYo4Bwz4BwW4BAWsG', 'W57dHsGRpG', 'W6q0W7VdQSkh', '8kc0J/cPPkhWL4AlWQ3WLyE9', 'xSkeW5Xr', 'WPj8W6m', 'bHSrxmoT', 'ESkID0hdQa', 'WOdcM0HzDW', 'CxJdQa', 'DCkeWOTmWRi', 'zmkry17dJa', 'W7GVW53dRmky', 'W4BcP8kgAb8', 'kSkSWRZdTrK', '4PE84R+aW7K', 'W4H7WRWeWQq', 'WRrPaSoq', 'BqhdV2O3', 'WRbAWOdcV8oh', 'BCkHWR0IBq', 'AIBdUau0', 'WPXctG', 'WRhdOdVdN8ke', '4Pw74Pww4PAh4Pss4PwS', 'f186dLO', 'WOubW5ddOsu', '8jkMHFcNLy3WP7AJWP3WO5El', 'WO3dImkXW53cTq', 'pCoIWRZcUbu', 'WQtdRokdTqbN', 'W41e4PwxWQvG', 'WO4mW5ddSq', 'W7L4WOS', 'oxejACow', 'WQD0W6vYwa', 'W7NdPwDciG', 'WOXEWOdcQ8kl', 'lSoIWQNcOH8', 'WOzJW6O', 'W6HjW7nlW7m', 'W5DoW4xcTCkZ', 'WObCW7vvoq', 'W7XiW7iFW74', 'umojDutdKG', '4PwV4Ps2sa', 'W7KkW73cUd8', 'W7CqlhpdTG', 'E8k+W5e', 'WPbWW7j/hW', 'W5ZcTGldUZm', 'W63cJmoNW6/cIW', 'f8kcW7BdN3u', 'icRcPCkeW7O', 'WQlcINPmDa', '4lAD4ls0zM0c', 'WQtdRmo9Bbq', 'W67cRmoTW73cKa', 'gCkhW7RcJwe', 'ffO9caq', 'iGqeWQv5', 'W6zwW68', 'WOmUWRTCW7q', 'ochcU8kNWPa', 'wbFcPSogaG', 'g0S7bMm', 'fXuqt8kd', 'rCkiCuldMa', 'WOhcJL1eBa', 'W6VcStVdTdK', 'jSoDkvCa', 'ha8C', 'aHVcKmkf', 'W45iWQKXWOW', 'bmkMWO/cG8kh', 'WRGGW7JdINO', 'W6WeW7lcRJ8', 'agKRlKa', 'W4xcIXddLWC', 'mvNcVt4F', 'W6XYW4eEWR8', 'WONcGry', 'nmohDM/cJG', '4Q2/jSo9bLK', 'v8kSW6RcVCok', 'xCkvhN/cQq', 'qCoPW7/cOmkj', 'W6RcUGO', 'W6XhW7JdVsi', 'f8kns0O', '4Pwn4R23W73dTva', '4lE14ls74lEg4lE84lsq', '4PEX4RYuiW', 'EN/cRIvQ', 'WPTLW7jQcW', 'yGz1oCo3', 'W6lcNSkDtJu', 'WQqksW', 'D8o+hSoRW4y', 'FvNcQ2a', 'wmk8x1tcVq', 'eNrfWOvh', 'W73cKehdR8oo', 'pmkGW70', 'wf0YheG', 'W5NcVuXDBq', '77+v77+a772swo+9Qa', '8jsSKo+5Ma', 'W55tWPi', 'EIZcOCoOmW', '4PEg4R2DW40', 'WPBcNfPmzq', 'W5/cJtddUXO', 'brmrr8o6', 'n1FcSMu1', 'ECkrW59lWRG', 'FfVcTYe5', 'pJdcSq', 'gHWa', 'gSkBsKef', 'W7H2W4pcJHe', 'W5hcHZjUlW', 'W5dcHwK7oG', 'W5RcIIldMXC', 'mmoAitJdOq', 'wXSkqa', 'uCo5W6ZcOmkp', '8lAWGokbO/cySkiZ77Yf776F776j', 'ngFcHG', 'W5asWPpcNW', 'mKpcVc8', 'WRCnACkPBa', 'lbuns8kD', 'CKRcNMC8', 'WPbCWOBcV8ka', 'W57cMXJdUra', 'omobmY4', 'w8kpW63cJxq', 'WRL0WRRcKmkG', 'W7zOWPi9WO0', 'W6PfW6FcUcW', 'w2JXJzkaWQVdRq', 'a3Xk', 'e8k/W6/dIwe', 'zJ7cPCoQmW', 'gKiGzCo0', 'ts/cJLTD', 'W5n+W7b/cG', 'eJBcICkAWOS', 'W7eIiLldIW', 'abhcMmkpWRW', 'omoFWOK', 'BGZcRxPC', 'WQyDeSk8sq', '4PAT4PAB4PEo4PwG4PEq', 'W7hcVSk7', 'W77cICoOW53cQq', 'W6lcPYBdSIO', 'W6JcO8k5', 'WRLdmSo6', 'W4JcUCkw', 'a8kcWQq', 'aqZcNW5A', 'BN9haXy', 'W4ijgN8', '8kc3IpgpLQ3XJ6EQW5dWS6El', 'dCkixgBdVG', 'zmknW44iW7C', 'bfWHt0G', 'WQ8awa', 'ndlcSmkJW5G', 'jmoJWPJcKb0', 'nmkvbtJdLq', 'g8kMWR7cGCk4', 'EmkSWQqP', 'WPnBvNJcRG', 'ESkiW48', '4lweW6lGTOVGTyNGT6q', 'WQPsmCoPo8k9sfK7tSk/tW', 'omkBjtNdLG', 'W4mRd3FdSa', '4PAg4RY3W7CaBq', 'b2zC', 'W6X4WP43WP0', 'mYpcVmk+W6y', '8yoGRhLbBCoO', 'cSkmw2a', 'FSkzWPGiBq', 'W5yjgMRdVa', 'vCobW7HNWPy', 'WRNWP6gG4Oox8jYaTYZWMAIq8jU7LW', 'WP/GTyFGTP/GT7/GTOm', 'WO5lWQtcJCk3', 'WQ8FCSkCBa', '4lEX4lwD4lsAW4BGTAq', 'W6jbW6O', 'W47dUSk+fmk5', 'WO3cHXWmja', 'WP0fW4xdSsu', 'pqmBwSkC', '8kUDNCkHWQddR8od', '4PE4g+kzRSo+W40', 'r8kgDXBdKG', 'zCopWQ/cSbe', 'hmkmchhdVa', 'WQddH8kZW50', 'BNTBsGO', 'W7qmW4tdJCk0', 'W7BcQCk2qZK', 'jXVcS8kmWPC', 'W5pcHHyanq', 'W4BcP8knFae', 'oH8qtCkk', 'mfNcScyt', 'WRHCW7vlcW', 'jpc9HONVUOJcQr/dJq', '8l2xQ/cXLjJdT/c4TRlWLBEf', 'tSkdW7hdIG', 'WRiAumkYwq', 'WOhcILLbEW', 'lmoJWQ/cSfa', 'tYeLa0u', 'hmkmw3BdTq', 'W43cTZRdPZS', 'qCkqWO4HzW', 'cCkwuuKv', 'jv7dSIqB', 'W6FcRc7dUJm', 'rbP6i8o/', 'rJJcO8oJiW', 'WOJcLWSm', 'W6VcTtS', 'W4BdUCkHgmoW', 'FaldTse', 'dLCM', 'W7uikmoMEq', 'W7bUW4pcL8kJ', 'vSkoW7RcGgW', 'W7BcQCo3ex8', 'W6O9WOONWOW', 'WR8BWR7cMSoh', 'sNZcSJbp', 'fNLqWPKA', 'FfVcVM07', 'uCoKW7VcT8ky', 'W61jmSo6', 'Fmk/W63dQLK', 'W70gE8k5FW', 'W6pcQCk5uIG', 'vmkeW5LdWRK', '77+i772t776cWQxWR5g34OgB8lgcTq', '4P2UehqiW48', 'WP7dL8kEW6VcSq', 'hmkmswddRq', 'W7JdN0JdQCov', 'gWqFwSkB', 'W7TUWOW1WO4', 'umoJW6O', 'W43dGrWWWQ8', 'hXRcR8kdW50', 'uXX/i8o5', 'W6/dUcvEWR8', 'xSoJW73cS8kE', 'W5FcJSkIAHu', 'CSk1W6PBWPK', '8lkNLpcSTitIHyVIHk3WVAwu', 'W7hcNvVdOSoO', 'vSoAW4VcU8ky', 'gqhcNmkyWQ0', 'CX3cRta', 'oHunxCkd', '4PQj4PQf4PQH4PQT4PUR', 'w8oHW7/cTCkp', 'ExtcT8oQnq', 'wr3cQgTV', 'W6GeW7GuWQ4', 'WOWpW5dcR0O', 'tmoOjCoJW6G', 'WQldJmkvW6NcKG', 'mSouiJpdLq', 'WPddICoNW4/cVa', 'rCoIW7VcOmok', 'pqis', 'j8o5WR/dUXm', 'h1e3vmoH', 'W6rKW4pcNCkL', 'FCkveZ7dMW', 'W7npWP4GWRO', 'l8kLWQdcQSkC', 'dSoyWOJcHKO', 'F8ksW4jwWRG', 'WP9OW7rZgW', 'qSk4W59uWO4', 'W5ZdRSkHfmk1', 'WR0wW57dOtu', 'W5JcIIC8lq', 'fCkfWRRcLmkU', 'W5xcV8kyzG', 'wSoPW7/cTSkp', 'WOzitJtdKa', 'W7ypW5ddRSk0', 'W6pdUSkJbCo6', 'W4abaNVdTW', 'ttWjW4SE', 'gLigqCo2', 'o8oLWRlcU00', '4lwX4lwF4lsE4lE64lsc', 'W7fUW7tcQG8', 'WOFcPCkozaK', 'WO3dSSkJW4VcQq', 'WOikW5tcPs4', 'sfv7mCk2', 'WPJcILa', 'iIynqSkj', 'WPPAWOFcVW', 'Fv3cRgiL', 'WOFcM0bdzq', 'WOXsWPdcTCkc', '4PAl4R+FWPK', 'hCkCsNFdSa', '4Ps44PER4PAE4PAS4Psb', 'W6HmW5VcImk7', 'W4hcMCkarJq', 'pCkSEK3dMa', 'WOZcHLmzka', 'eJyjymkf', 'aCkBtq', 'oZlcRW', 'bmkeWR/cIq', 'eXJIMB4HFq', 'dLWQqCo3', 'WQL3W6mtWQ0', 'WOSbW4xdPIG', 'bWBdMCkgWRy', 'cWumwSkk', 'lSoGWRtcTam', 'kwXatai', 'dsecdKG', 'W5NcJezyBa', 'WRdcSZ0/', 'WQZcHuHDyW', 'emkFsKmw', 'lYFcJmkOWOO', 'ir0Ft8kk', 'W7vVW7xcJ8kv', '77YU77Y577Yoa++9IW', 'W7NcRd7dNXW', 'd2zyWP0A', 'tCoQiSo1W6G', 'W4W7W57dJa', 'W5VcHYG6ca', 'DCkzW4jrWQm', 'WQCktmkLtG', 'W6VcVSkU', 'aNSaCSoQ', 'W7OmESk/', 'vrP5D8kS', 'W5lcUCkd', 'a2tdMebZ', 'hvyQ', 'vCkpWR/cKxm', 'W47cV8khkr8', '4PAypEkzONtdGW', 'ydRcQmkPeq', 'DtFcRW', 'rmkGcgddTG', 'W4OkoLNdSa', 'xmkyWR/cNdO', 'n8kGWOhdHSk5', 'eaewuSo4', 'amo4odldRq', 'gLy9cf0', '4lEH4lwp4lE3cG', 'W5ZcMvBdLSoB', 'WP4XW7jYhq', 'WQpHTitHTPpHT5FiOq', 'DZRcTmoGAq', 'r0dcPJfA', 'jv/cUITx', 'b8ofos/dNa', 's8o7fmoMW7O', 'bCkvWRW', 'W6PnW6FcPa', 'WRtdG8kQW5pcSW', 'W691WPdcMmk4', 'ttWyW4qt', 'vtSHgCkL', 'yCk0WR0I', 'n03cSc8o', '4Q+nW7Otzmkj', 'ucObW5Wf', '8kwqNokdTpgfOAldKKnNWRG', '4Q6NmCkSxH0', 'rW0DW44H', 'W6HfWP4tWRK', 'W7LfW6FcQs4', 'WQxdGCkIW4/dOW', 'ymkTW7BdPey', 'W7BcO8k5rq', 'CcxcNvDG', '8yo/Io+6IuOkWRb6', 'WOldTYhdImkt', 'W6ZcQCk2rcG', 'dmkls1as', 'WROmW5ddSwa', 'EmkvW59sWQq', '4lAe4lsJ4lA0gmkD', 'A8kUkfGk', 'g18X', 'sSkpW7hdIui', 'pH5fWRrW', 'F8k5yxJdIW', 'lvu04PAXWRy', 'xmkEW6ZdJM8', 'WO92WRNcQSkH', 'W68ggh/dTq', 'fmkFWR/cISkU', '4PAm4RY5Amk1FG', 'WQSGW5RdJZe', 'W4FWPPg/WQumDG', 'pd4FrCkk', 'mHdcVCkhW5K', 'WQRcPsS/iG', 'W4ZdR8k7e8oQ', 'oSoqlW', 'hqBcLq', 'lsCgCSog', 'CMvldq', 'BCoIFbnh', 'W6D+W53dKmoS', 'CwNcUsCg', 'W658WOSGWOW', 'fXmGaeC', 'nH0lr8o2', 'F8kuW4vgW7C', 'WRxdLXpdUCkI', 'd8kztxe', 'zhLouW', 'W68gE8o6wq', 'W7/dN2hdPCou', 'W6XYWPeXWPS', 'W5rZWOBcS8ko', 'tNtcPg0', '8jMuT/c3P7NXIQo04Ok08ygdImofgq', 'W4ujgNVdVG', 'WR7cPZ4koW', 'qCkVv33dTG', 'ovBcVI0l', 'vZ0pW4PniYPaA8o6WQFcUW', 'W7LiW7BcVdG', 'W6u/W6/dU8k7', 'bCkvWQBcGSkg', 'cHFcN8kkW6G', 'W7tdMaz5WOm', 'iYFcU8k4W6C', 'v8kiCuxdKa', 'W7BcQCkKvse', 'WOD0W6i6oq', 'pxmAtmoM', 'kqiktCkl', 'lvHkWRmR', 'WQ3dI8kOW5BcSa', 'FmkiW51hWQq', 'WQSatCkYha', 'xtu1WQTW', 'W6xdTSkAd8k/', 'WPHYW5v8eW', 'W4BcV8kk', 'WRBcR8kZfcK', 'h2nfWOGc', 'wmkzWQFcLq', '4PsQ4Psh4Psy', '4Q+Dbmk8nCk8', 'aSoqWRVcHCkK', 'qCohzexdLa', 'i8oqjJhdLq', 'FdxcRCoIkq', 'vSoqW7ldHG', 'W69OWPaGWOW', 'W4ruWQG2WQu', 'sab6mW', 'pd3cRCkNWPW', 'WQLlW6auWQS', 'W5qhahVdTG', 'W4KmcZpdTq', 'CZlcOSoW', 'W4RdTSo9agC', 'W70cFmk7', 'jb43WQH/', 'omoynZRdKq', 'mWldVW', 'W6HQW684WRO', '8ygPLFc8UzFWO5UJpVcyUkS', 'W4ddGCkKa8kv', 'WQygu8kuzG', 'W4VcOSkbyG', 'W61fW6iu', 'CYTCqaO', 'ySk+W75Sma', 'WOZdKIamia', 'hfuTrmoj', 'W6xdRmk5vsa', 'BvhcQ20Y', 'W6NdGr1+W4y', 'bGyxwSoX', 'xmkGWRWlFW', 'WPO/W7bZea', 'j17cVZ8x', 'WPv0W7j5ea', 'a8kdWQ0', 'gXmivG', '4QYHuK9NW7y', 'wIPiWPqz', 'W65ceSoRfG', 'WRbTW4VcH8o/', '8kANLFcTP4hWVjwa8yU3R/cxTQi', 'W6TfW6FcQs4', 'yNLSqHy', 'AGdcQw1o', 'fmoqWQZcH8k/', '4PAy4PwI4Psj4PEB4Psm', 'CKbeAae', 'oCoPWQ7dTrq', 'vWbNpW', 'WOnJW6LIaq', 'W6/cQCkU', 'W4mBrbtcKW', 'WPLAWPFcUCkc', 'W4LUW4pdNSkz', 'q8oSjCoKW6e', 'wSkEW7ddNYa', 'y2PBqG', 'AMxcLMba', 'ebCceW', 'zmkjW4vdWQ4', 'W4PYW58NWOW', 'WPBdPmkmFb4', 'WRCkzCk+BW', 'xmkDCfldMa', 'bmkvWRJcISkY', 'hfuIuSoN', 'WOpWLPIwuFglIRtWRlMv', 'amo4WQFcVHy', 'haBcGmkVWRW', 'Cmk3oGSB', 'faSvWRn8', 'uCkiCvm', 'WP8lW5/dOcu', 'pa4HWQbp', 'WR1WW6T/qG', '4PAcW6ZIMyOazW', 'WPaQBCkiFq', 'fSkBxq', 'WRektmkZua', '77YP776T772UgE+9Iq', 'i8o4WPFcRce', 'wWueuCo6', 'BuFcTsvl', 'WQnJW7RcQY4', 'pKFcINPy', 'pNVcPmoPjW', 'W6NcQCo3ahC', 'DgjBtbC', 'WPtdPIxdHmkt', 'WQpdR2xcUhm', 'W6RcQZVdPti', 'ibPJ4PYiWO4', 'W6RcQZRdSd0', 'W63cQMJdUZS', 'lmkUzHLh', 'WR7dNXxcOa', 'x8kfW6RdG2q', 'lNhdPmkJ', 'd8kBv1eB', 'jaBcQCkCWR8', 'xCkDCuBdJG', 'W6WqBq', '8kAPUFcTQAdWVjUg8yU5GqO', 'evBcUc4/', 'dCkmD3xdVa', 'WQzxW5XCcq', 'WR7dN+kxICkGWOm', 'W5mwW57dVSkQ', '4PEb4R6uh8oMha', 'WP7dIGBdOmku', 'W5pdHxTyBa', 'xmkPDSkMWQm', 'W7uvW6Pd', 'ASkGWRGGza', 'W7nSWPehWP4', 'sNlcSMiC', 'WRjsWP3cTCoh', 'sutcKaDS', 'W7y7W4RdL8oJ', 'YiNHTkdiIUg1TSMz', 'u8oIW7FcV8kp', '4PEU4PATWPVcPwO', 'f8kCWQhcH8k4', '4O+Tp8kSye0', 'hXaTmSkK', 'pSkXANa+', 'zMzk', 'oSoRWOfNWPK', 'qmoPW7/cSCkE', 'aLWFaf4', 'cmkDue0y', 'nexcPIyF', 'dSoNiSoQW6S', 'W6/dJqfLWOa', 'bbVcNG', 'W63cL0RdPa', 'W5tcUCknuY0', 'fue6dei', 'me3cPJ4F', 'gHhcMmkiWQ0', 'W67cV8k4tG', 'WRqatCkI', '8jMEOE+7Ka', 'W4bTWRCQba', '8l66IFcVM5lWQRMq8ycBHpc/Uiu', 'tZunWPjk', 'W6BcM8kMkr4', 'athcRmkvW68', 'hmkmue0e', '4lso4lwqzUc3UUc2MW', 'rmo1WP0cta', 'l1BcQdKt', 'tL3cMeyU', 'wSojDLpdNa', 'drhcNSol', 'y8kiW4vfWRS', '4PAy4PwI4Psj4PsvbW', '4PIo4PQp4PI+4PMW4PMz', 'WPPYW61/cG', 'B39BuXy', 'W4DKW57cJmkY', 'gLzZvqK', 'wNKBW40g', 'c2PnWPKx', 'aHKa', 'bX8wWQ8', 'wSkdBaNdJa', 'lmoJWQ/cSa', 'W7LQWQ0wWRe', 'ssrU', 'rwaXrCoI', 'whTDtam', 'WOD2W7jVfW', 'BKVdV+c2Voc3Oq', 'c8o8at/dUa', 'gWdcI8koWRW', 'pbWBeSop', '8kASLbNdKdH+', 'WPBcMXC', 'WOXEWOpcSSkE', 'W64eWQXr', 'usFcT3PJ', 'umkzW6S', 'wJZcTmo5mq', 'W7P8WOS1', 'WQ3dKSkOW47cSa', 'WOaOW5ddObm', 'WQDdW7KEWR4', 'WOmaW7FdSHK', 'u18UDW', 'FWdcVa', 'W4dcOSkjCa', 'WRahvSkGsa', '4Bs+YBxcV8kxkG', 'y2/cUqfT', 'W4ZdT8kNaCkJ', 'hSkwrva', 'CtJcSmkPjG', 'Bv3cP3u', 'WOzstG', 'ma8lWQjN', 'WOtcGv9Nqa', 'W6BcRCk0sYO', 'WRCpCCkOza', 'W6e/W53dMSkR', 'xCknW6JdV1q', 'ywravWa', '8ksYGEkaPFcFOkix77YS772/776S', 'hCo0gbO', 'pIuSt8kB', 'C8kgW7PeWRy', 'W5JdQCkI', 'W4inhx0', 'W6RdLmkbj8kC', 'W6RdRmoTcKC', 'hCkAeINcUq', 'W41YW7tcKtW', 'naBdSG', 'bxBcV21A', '4lA0goc0Noc3NEc3Rq', 'WOLHWR7cV8k1', 'FspdRSkPFq', 'W7aoACk9Aa', 'W4bjWPZcQg0', 'hmkqufmy', 'iCkkWRlcICkM', 'fbyWvCo2', 'ymk3WOWJBG', 'W4SqW67cHCoM', 'smk0WQ0htq', 'CHXsWOjk', 'WOD0W75U', 'vSkiDq', 'WQtdTSo3F2C', 'DWdcUgLC', 'fmkDbhys', 'tYVcTsPD', 'a3HkWPSy', 'W4xdVSkVbmk1', 'BqJcT2PP', 'CCkv4PAWFCku', 'wwpcPdDq', '8j6yHVcSURPhksW', 'uCkEW6VdNxm', 'vSo8oSoDW44', 'gmknv0uq', 'mKNcSYKo', '4PUTW4RcTCoOCG', 'vWhcVu9X', 'W7FcUmkLrsG', 'W6XaWRpcScO', 'W5NdUSkNdmkJ', 'WQG3W7ldLWK', 'kCoGWRlcUGi', 'twNcOIXy', 'W7RdJqy', 'baKkWRvW', 'W6hcRgJdTh4', 'EaeTW5Ks', 'shtcSIni', 'W4ZdLYddMCko', 'pCoJWQJcUXq', 'gmoj77YZaSkD', '4Ps5W6dcLq', 'ZlBWQBAYWOHa8kcNTG', 'zmoJ8jwmUUkbHokdR8YtZzFoJ8+TZla', 'W69nW7/cUcu', 'ACo7WQiPEa', 'W60ktmkNuG', 'W7XIW6hcMHK', 'mJRcTmoGda', '4Pso4RYUW7rg', 'DCoBWOec', '4PAyW5/IMRlcOmkj', 'psqavWa', 'zgbiuqO', 'W65bW73cRY4', 'W4mMuCkwAW', 'xmkUW6XT', 'xedcVMWN', 'WOddUZ7dJSkp', 'W7rUWPa6', 'FHmIW6aK', 'WQtXJ7sAWRukbq', 'W5ZdKUkwLvHH', 'mZSzyJddQa/cHhm', 'W7hdJt1yWRK', 'orJcJ8k6WOO', 'fX0D', 'A13cVMiJ', 'h3NIGyRcIea', 'WO7cNr0D', 'nLGYguW', 'bmouhGqS', 'W4/cNv/dHmob', 'WPldN8kkW5pcLG', 'WQnOW7ZcSYW', 'W6y8W7ddJ8kl', 'WQLQW7BcQJG', 'tYWBW4a', 'WOWRaxpdQq', 'fb8adq', 'W7HmACkZiG', 'W7ZdHGzNWOm', 'psep', 'bq8eWQrH', 'eXWLwWy', 'zmkmW5TbWQa', 'qMxcVcDi', 'hSoNe2FcNG', 'WOf0W7vVfa', 'yLbu4OEaW48', 'W5PbW7OuWRO', 'hKqcWQ5H', '4PAa4R6LWQm', 'xmkJuvZdJW', 'W7nGW57cM8kG', 'W5xcOSkkEKW', 'tSotacK', 'wmktW4ddMwu', 'WQNGTQhGTjtGT6VGTAm', 'bSkeBokuUUkwRG', 'W7ldRSk8da', 'WOD4W7j2hq', 'W7fVWPPRWOa', 'cbacAq', 'FmkyE3dcMq', 'W6ZcNdqRla', 'WOdcU++/O++9HmoW', 'W57dVSkVeSkZ', 'W7aXW4FdMG', 'aXhcGa', '8jkDPIuCW7Tx', 'rIzIzW', 'gSkzWQBcJq', 'z8kWWQ0', 'EdlcSSoSna', 'e3Lv', 'Emk/W7ZdQ0u', 'gX3cIq', 'e0eHafS', 'eaukWQb5', 'dSkBqqqE', 'W5ybbxVdOa', 'W71YWPeGWOa', 'gSoRWOScW7C', 'mYVcPW', 'WQX3W5NdPmoh', 'W4mtW5tdPdq', 'W5LiW7BcVdG', 'qLtdKW', 'BmoHomowW6O', 'bHxcL8koWQ4', 'FCkGWR0Vyq', 'xCkruKef', 'FSoRj1Ot', 'BYlcU3Ly', 'oJJcTSoGja', 'sSoOi8oM', 'WPTEW5pcSmkc', 'FSoBW7dcU8kT', 'ACo9nvGa', 'W6XJW4pcRSkH', 'W65GW53cMW', 'h8oqis4', 'WPNcGqazjG', 'rSoLW7hcVmoa', 'ncuWWOLb', 'rSoLW6RcVSkp', 'rZZcNmoOcG', 'W5ddKJyBlG', 'lL/cT3a', 'bHujwW', 'W6XxW6uqWR4', 'WRORWPa', 'W6rlW7qyWRu', 'AYJcQNHG', '8kAZJMdcNX5L', 'swNcOc5z', 'hbVcTCkeWQ4', 'WR7GTzdGT7BGTlRGTBe', 'W4VcSSkDya8', 'W6fVW5/cKmkY', 'vhFcNuGB', 'W7BcMK7dPmog', 'W7ziW53cV8k2', 'W7e7W4FdM8kb', 'lsSf', 'WP/cKWCDjG', 'W4tdTCkTdmkL', 'FSk9W6tdReC', 'Amk0WQaTkG', 'CdmlW7aK', 'w8kF8kQ3Uo+6U8keW6u', 'dIT4WPyt', 'bwHmWOGn', 'ALFdSY4', 'e8kdWRVcH8kS', 'd8kfqwldQG', 'W4JcTSkNfa', 'pK3dOY4', 'WOdcM1TeBa', 'e0aGdK4', 'WPfvW43cSdW', 'WQnMW7/cSIW', 'WQRdHCk+', '4BwrWPxHTzVHTzJcLa', 'o1akr8op', 'aeCQtSoJ', 'WOFcGhXDCG', 'ffiRvSoO', 'psdcSCkmW74', 'WQOFoSkMpq', 'W6/dNav/WPS', 'BJHrD8of', 'iSoNiuOt', '8lYwIpgiPjXNW5/cGa', 'W6ZcRCkK', 'naZcQYup', 'umojBfJdMW', 'n8oCoJJdMG', 'pCo/W7FdR1a', 'W5VcQL3dH8o6', 'W4tdNHKznCkKC1idW4GAzW', 'W57cGaauma', 'eXmJhuy', 'W7tcUCkKsa', 'BHJcQMy', 'W4rib3ddVW', 'ZB/XG6ssW4BdOEkhGW', 'umkmu2/dUW', 'dSowosJdMG', 'D8oWiCoDW6W', 'luVcGqyV', 'b8kAAxhdQW', '8y6mV++7Ia', 'tCkdW6VdGwu', 'k8oxosNdJG', 'WPFcTmoHaCkG', 'WRddG8kKW5tdTG', 'WRLwW5nsoG', 'pfuVrCoN', 'CfxcVMyY', '772e77+a77YA77YIWRK', 'W4mBhx/dVG', 'WOKbag3dRq', 'lNtdQ8oOnW', 'aaea', 'tubf', 'W67dHbTZWOK', 'W6HYW7S+WQe', 'xmoSnSoKW70', 'rmk8WQy5kG', 'WRFdG8kMW47cUG', 'W47cR8koAt8', 'WPxcJNXxqW', 'aauCcmkA', 'jKe6deW', 'hSo1zSk2W7u', 'lrmwb8kd', 'FSoHl2a2', 'cYBdVqzz', 'W5hcS2pdJ8o0', 'W5xcRSkoAHG', 'ySkHW7ddUf0', 'hCkarMtcUq', 'FalcVxC', 'oIFcSq', 'F8kHWRu4FW', 'WPFdOGtdHmkd', 'pq3cT8kLWOm', 'a8oxnbFdJq', 'W7bGW4tcISkY', 'W5ZcIty6ia', 'vSkyWR/dMMG', 'pKZdSW', 'ugRcMu4M', '4PAC8jIhQxtdG8k+', 'W6xcOSk4tIG', 'W4JcU8kRe8kX', 'W5FcUCkazbW', 'F8k3WPaBEa', 'dSofW73GTjhGTQi', '4PwWW5dIMzxdHSoH', 'rgrAtre', '776c776OW67VVy7VV7u', 'WO7dHSo94PsJ4PAe', 'd8oFW7NcM2e', 'xmo6W6lcTCkF', 'dCkFufas', 'WRPfbCoMzW', 'AGFcR2qL', 'W4VcV3/cHSom', 'a0e/', 'bqCwwW', 'W609WOWXWOG', 'W7TrW7GdWRG', 'WQ9ZWOtcKSoH', 'xcSbW4Sb', 'WPRcMX8DlW', 'WR3cGaCrmG', 'lvPSWQ0q', 'hcFcU8k+W6O', 'W47dOCoLtbq', 'WP/cNcLUoG', 'WQxdKSkIWPZcSa', 'Ct99hSo8', 'jSoCodO', 'WPDWW7j7', 'F8o6j0Sa', 'W79bW7HrWQK', 'je3cPIS', 'FmkqWRefya', '4Ps/u2i', 'AqBdSHKO', 'W6rUW57cISkw', 'aHCer8o3', 'xpctPQNVUAb+WQtdRa', 'WOybW4xcPtm', '4PsE4PwT4PEz4Pso4Ps5', 'w8kdB3JdHW', 'BSoNkq', 'W5GhBmkOAa', 'xmoOoCoS', 'iLuTvmoT', 'rdpcQ8oNiG', 'baeKWP1H', 'W6WeW7RcSY0', 'pCo9ebZdGW', 'rvNdLmogW7q', 'WRekxSkLsa', 'iWmiWQi1', '4PAjlSkz', '4lAO4lwqWR/GTjdGTRy', 'bmokjCoIW6G', 'xgJcOqH+', 'sx3dV0az', 'WP3dP8o6hmoO', 'qCk2Bfi', 'tdWAWOGe', 'W5FcSwJcUSkj', 'W6dcOte', 'W5tcQmkaEWK', 'jKBcGb8X', 'lXKkw8kB', 'W7BcI1VdSmoq', 'Cmk8D3hdPa', '8lITPU+4Oa', 'hCkvWRe', 'W5jsWRGB', '4Os78l+fRmkN8l+fVVc9PPm', 'eMDCW4bv', 'wCo6Eq', 'FuPfW6C1', 'WPBcSXCHeG', 'WRdcIe7dOSog', 'Cs/dPmohiG', 'dSoOD8ouW6W', 'W63cJ0RdPCoh', 'W6/cV8kgCtW', 'gmkkv0Cy', 'oCopWRpcNte', 'x8kmW4rfWRu', 'kHekw8kc', 'wmkgW7BdJhm', '4PwV4PQF4PYokSko', 'fxTvWPml', '8l2yVSkq8yk6MFc4UjdWLBMq', 'W4FdUmkTaSk7', 'W547qmkozW', 'W6zwW6O', 'bfi9c0y', 'a8kixgddSq', 'W6nlW78F', 'vt8Kz8oC', 'zFc8Kj7dTstdNW', 'W4qhgxldVa', 'sftILj/dI8o5', 'gqhcLSkFWRW', 'W6L3W5xcKmo3', '4Ps54PEQ4PAF4PAT4Psa', 'idFcP8k5W64', 'WP/cNcLUpq', 'ymkvWPy', 'W6ZdTCkNdCk1', 'AgvkhG', 'WOVcSIBdG8ke', 'W603W5/dICk5', 'W4BcPCkokqi', 'xpctOOLpASkG', '4Pwc4R+xW7jQwG', 'W5iBW4ldRCk6', 'e8oBja7dGa', 'AmoRmLGo', 'iJBcU8oNWRe', 'W7exymkUqW', 'W6v1W57cM8kG', 'omkM4P62W7lcRa', 'u8kqqvme', 'BaZcLYKv', 'gCkFuevz', 'oSo+WRe', 'WPtdTYhdNSkn', 'W5/dVSk9fCk8', 'W5qnd33dRq', 'FmojW6JcUSkB', 'WRfPWPy/WP0', '4Pwi4PwW4Pw+4PsO4PEV', 'CNHk', 'qCoRnuOg', '8kc7JpgpMQJXJ6UQW5dWS6Q6', '4Q+kpCovgmka', 'WO1EWPlcRmke', 'xSo8nCoRW6a', '4Pwa4PsS4PsB', 'm8oaW5ldJhq', 'otpcN8ksWO4', 'aadcLmkhWOy', 'W5ddMJPzWQ4', 'avm6gSkU', 'e3TDWPSl', 'W5ePbeVdTG', 'WOFdL8kNfSk1', 'W5ldPd5FWRS', 'W57cJeFdQCon', 'AMPbraq', 'WOxdSYldN8ki', 'W6P+W6ddU8oS', 'a3GdW5O', 'W7ldSdtcPa', 'WRn8WO89', 'l8kCqgic', 'DtxcOCo+na', 'WQNdHWRdJmkX', 'W5BXG7sHwbxdIW', 'W5hcIsSR', 'wJhcVCoFeW', '8k2xI8oY8k+2KVcwL43XIzsw', 'W7aRW4C', 'W4/cOSkDFai', 'gXFcI8kcWQK', 'WPdcL1m', 'zY/cPCo9mG', 'W4JcQuNdJ8om', 'D1NcSMq', 'W5TfW6FcUhe', 'jKxcVI8u', 'ESofWPdcVHG', 'nNNcGc0o', 'WONcPSkwjWu', 'kfmPy8oE', 'W6TKW4K', 'FSoNjr8g', 'vX0kWRvX', 'xmoqWR8', 'pCkmsxhdUG', 'W5ZdRSkReSkP', 'nvniWOHk', 'AGtcRwjC', 'W7X2WRGDWQS', 'wgpcTJbF', 'osFdQmk+W7S', 'W40ngNddVa', 'W4FdPsrfWP0', 'W6JcQCo3', 'W7bXWP/cN8kN', 'WQjKWOpcNW', 'm0KRlfW', 'W6HjW7m', 'W6HwW7uzW7K', 'A8klW6VdHg4', 'mdlcUmkHW64', 'fSknDxug', 'amo+nSoLW6W', 'W65OWOW8', 'Bg5w', 'r8oulG', 'zKxcVbD1', 'FSkWWQC4AW', 'W6iHW4xcJCkY', 'W5RcJbKVpq', 'W6W9W551W4m', 'W7XuW7iqWQ0', '4PE84PEY4PwZ4PUx4PYm', 'gXxcL8kcWRq', 'WPxcSH7dGSkk', '4PEX4RYucq0I', 'sHRcVhD6', 'W4KAb3VdQG', 'DJRcRCo7Aq', 'v3HlEWe', 'e8kAbeSa', 'gmoKWRtcTHG', 'WPZcNu1Elq', 'bGpcUSkdW5e', 'wfaHbKO', '8lMFSYJdSf3dOW', 'dv80tmoH', 's3ZcS1qW', 'v8kSW7dcS8kh', 'nCo0WQ7cTWi', 'W5eQW5VdMSkP', '4PE1mEkyMZPs', 'W6biW5tcJGy', 'W5n4W7u6gq', 'W6W/W4FdMSk7', 'W4hcTmk2tt0', 'W4RcQSkbBsa', 'WQxdOdVdImkk', 'W77dHX1IWOG', 'kXCstSkG', 'bblcU8kOWOa', 'YkLi4Bw14Bsz4BAD', 'h8kMWR4', 'tbLZ', 'arFcKSkoWQS', 'F8o5W4hdR8oc', 'W7ugkmo3lq', 'w0JdQmoTWQS', 'bG7cVCkgW7e', 't35naXa', 'W5NdSSk6dmk1', 'bCkmuq', 'w8o4W7lcT8oq', 'WP9wWPy', 'uCkwW4PqWRm', 'pd3cT8kSW6m', 'W5VWN4oy4OoZ8yQGRxtVVjtVVlW', 'W6GLz8knsa', 'mHmFsSkN', 'D13dV28I', 'nspcVmkS', '4P+7uSkEWRRcHq', 'ut4RW7Og', '77+A77+D77YidE+8TG', 'h8kaWRZcJ8kK', 'W4VdQCkHdq', 'fX0sx8o6', 'b8keswtdVa', 'W6DdW5xcLYC', 'WOxdPJVdHmkp', 'WOyba3hdSW', 'W7anBSk1BW', 'W594WRK2WQq', 'tWezW5RILPK', 'gWtcLCkcWQ0', '4lA14lEV4lEP4lAGcq', '4Pw34PwQ4PwL4PEh4Psv', 'wmoGm8oIWQK', 'W43cJtu7jq', 'zgPFvWW', 'W7FcI1y', 'WONdO8o9WPBdUq', 'W4K+WQLUhq', '4Pss4RYAWOSO', 'W5mAaG', 'W4ZdTCk6qmkK', 'pCoPWRZcTGq', '8kc1SpcPPktWL4Ab8l6fP+kgQW', 'ECo/W7xcSCkm', 'B8oRdwSD', 'W6LSW5tcNa', 'Bv3cVgL4', '8jA7IVcOQ4pWV4M48l2QG8kc', 'BCoGkvCc', 'WO7cLXiBnq', 'fcihCmo5', 'WRy8AmkdCq', 'eUc1Joc1Joc1Qmok', 'W69ZW4K', 'ymo+c2m3', 'rbrKi8o/', 'bXCwrSoZ', 'BIZcQ3TJ', 'zJ7cT8o8kW', 'jYFcUG', 'W6rbW6ucWRG', 'ztRILypILkdILOq', 'W4xcOSka', 'fgrxWP8i', 'sXPZ', 'W4KgvdtcKW', 'tM7cI00K', 'h8kRBfNcLW', 'WQddLaFdUSkh', 'WO3cU8oKjmk1', 'W4BdNvWzmq', 'WQnjka', 'W77cUmk9qq0', 'W5dcKcq6pq', 'WPnj4PUB77UvlCok', 'W6WlW6bfW7y', 'A8kVWPmwyW', 'lqpcTI8i', 'jeFdUq', 'zIJcRCoMkq', 'tGfHoCoZ', 'WOf0W6D5da', 'W5NcHcCP', '4lwBW5lGT6/GTQVGT6W', 'xCoSoCoJW4q', 'gZiPFCkl', 'WR7dN+kaJCkGWOK', 'W6/dGqjKWOu', 'hCkmcgtdSa', 'W57dSSoJe8kL', '77+e77YIWQBWMBcq4Oos8jIYRwK', 'W7b0W4pcLG', 'o8ksrunn', 'WPDuWOa', 'W5tdJX56WQm', '4Psv4PwA4PEf4PAi4Pwg', 'WPhcGty9pq', 'pLeIsCoh', 'hrCxxSo+', 'vCoBWOecW70', 'W4tcQSkBBaS', 'EhlcTJzj', 'W5TsW5icWRa', 'kr4rrSkk', '4PwZuUkBUbpcTq', 'W6nuW7q', 'WOPAWPRcSSku', 'W4pdUSkJbq', 'WPVcILS', 'WO7cIZaxjq', 'bHCeqCo8', 'W49gghVdQW', 'mmobWPec', 'oJpcRCo7mG', 'BGarW4qh', 'y8k7W7qVyG', 'vZWjW4Wp', 'tZGmW7SE', 'W5qnhNldOa', 'WRddOJ3dMCkj', 'W68/W4FdM8ka', 'aCkBuq', 'W5tcPCkgErW', 'W4hdJCkHmCk+', 'WP7dLSk1W7VcIG', 'BSk0WQa4BW', 'obGiy8kj', 'W57cHsm', 'W7NdJqfZ', 'oSkgchddVa', 'ffWKa0W', 'W4BGTzhGTOVGTAVGTli', 'W6tcHUkuOCkCW7K', 'BqJcUhXA', 'vvGJxmoT', '8kwpRE+7TG', 'ymk8WR8PEq', 'W4RcRCk6rxC', 'W4RcGSkwBqG', 'W5tdRMpdL8oz', 'gqSiWQi', 'WRmVz8k5Ba', '4PsR4Psg4PEx4Pwc4Ps8', 'qCoPW7dcTSkN', 'kSo9WQJcSam', 'WP/cNr0xla', 'W4JdQmk9aCk3', 'hbZcJmkgWRS', 'W68gkmk3Aa', 'W6OeW6hcUdS', 'gfiGdKC', 'fmohWRlcGc0', 'zN1ovWq', 'xNlcOY1s', 'm103cK0', 'zSoJWR7cOCkp', 'wmktWRRcJ8kO', 'WOFWUAs0', '4PwZ4Og+4Ook44cagq', 'W5XjWRebWRS', 'aCoaetBdHa', 'W7pcHLBdR8oH', 'qmkdwgq', 'E3tcUcrv', 'BCo8jvfh', 'FCkcW79ZWRG', 'WQXc4Pwo4PsE4P+R', 'rvNdLmogW7m', 'W4RcVe7dQ8op', 'g0HpeW', 'nxhdJSkd', 'W7GwFmkYyG', 's8kpW6ZdMgW', 'Dg5brYC', 'yJumwSka', 'AHBdSG', 'WPb+W7n0da', 'uhCoWOzm', 'W63dO8kJuJG', 'WPNdKHOwjW', 'qN7dS/gfP47cRW', 'BGjxbCoy', 'W41vWROq', 'DcBdNuG2', 'W7jKW5hcNCkJ', 'iCo+WRJcPKO', 'k8oTWQNcTa', 'WODWW7jVcW', 'j1artSop', 'arpcMmkaW6u', 'W4WEWRXrW7m', 'WPTmWOddSmkj', 'CXGMW68', 'BahWKBM+x/cyQlq', 'bqNcHSkDW7O', 'W6lcGSk+ztO', 'W6dcOYhdUq', 'bHClv8os', 'WPSnW5q', 'sg7dTXfi', 'thTCCbm', 'zmkWWRuOBW', 'DK3dPxzx', '776H77YY776rW57VV7K', 'WQqjWRTCW7q', 'zc7cPSoLlG', 'gcaer8om', 'bvyYhuO', 'BqhdV2Dx', 'lKFdQgbA', 'W4lcUmkCAaS', 'utGfW40', 'oe3cUWiI', 'kH8gf8kE', 'W6ZdIhW', 'W7TxWQNdVq', 'aqBcJmkfWRW', 'WRddISkIWPBdUq', 'oSkGW51fW7C', 'WQNcNbiAlq', 'tCo8jCo1W6W', 'lCoJWQRcUru', 'l1/dTZ8k', 'W6DdWRyFWRG', 'hCoPWQ3cUGm', 'DmkhjvpdJW', 'W5unahRdLa', 'D8ozW6ZcLCkZ', 'jeNcOsKi', '8y2MU/csPkpWKPwH8lkhTmk+', 'W6fMW4lcN8k6', 'BCk7WRe7Eq', 'W6HkW69BW6m', 'YPpdTEg3KmUdYPm', 'W6CVW5ZdMSk/', '4PAeFUkyTmkFW6y', 'C3xcSW9E', 'w8oEaN4e', 'zmkVW4PpWRi', 'AhLw', 'W5LgW5NcT8kr', 'aSk6WQ7cS8oC', 'dZqYumoP', '4PsZW5jtCVcVGAe', 'WRtdK8kLW5dcSa', 'W7SeWRDqW7m', 'WQGCW4JdI8k4', 'W6LXW4tcL8k4', 'imk4BLNdMa', 'W71YWO0X', 'B8oMzNWj', 'WQFcSFgmU6ddSmo7', 'jfNcOcSo', 'AwOptqa', '4OgM4OgH4Og24OcG4Okm', 'W4pcQSkBAa', 'W5VcJtu', 'BJhcP8kJW6W', 'W5DnWQSDWQy', '8lIWTW/cQSoWW68', 'fmk6FK4U', 'WQXpumkGha', 'gSozodVdVq', 'CNHkuqS', 'W5RdVSkVfmk4', 'W4pcQSkBBdG', 'WPldHwTJza', '8lAiMFgoUjtXIzUj8jcRN/c/IkC', 'WQpdOtpdHCka', 'p8kKrMZdGa', 'WQbSW5hcISk0', 'WQPuW5pcRCkc', 'W51lWRycWRW', 'iIyNWPjV', 'bKaWvmoL', '8kAZIbNdKa', 'fSkrua', '4PAiW6lIM5xcTxq', 'zEkuVokvG+kuOokwHa', 'dL0M', 'W7xcMLVcOmoq', 'ksmKEmkE', 'ba8eWRv2', 'WOyOu8kSuG', 'WPOuWPlcRSko', 'F1GOuSoR', 'r3Gbva0', 'BSoVmKOk', 'W5FcItu', 'W5xcKGCRiG', 'huq0tW', 'WPlcN0aazG', 'tLTIpSo+', 'esNdUcnm', 'WOFdVJK', 'iYFcQCkUW78', '4P2CW4hdReVcOW', 'bL/cKd0X', 'WPBdHYddICki', 'BCk4WRe', 'W61bW6us', 'WOOlWPddNSo3', 'm8ouiI7dMq', '4PEM4PAs4Pws4PAR4PEH', 'WQhcRN1Ktq', '4PAK4R6tza', 'FsVcSmoGka', 'W51LW7rVhq', 'WQ9LW5hcISk2', 'AmoVmLG', 'W6JdMH4', 'dwJdSVcTTQtVUkpINzG', 'e1O6dee', 'dbxcJCkk', 'zuxcJMig', 'yNKcwra', 'W57cKaFdJqC', 'W6vnW7GA', 'WOFcHL1bzW', 'W5pdJqvJ', 'W41e4OktWQvQ', 'FCklW6VdJca', 'uGD4', 'fMPnWO4A', 'rMFcVIW', 'WRrUWPdcJCk/', 'faCrw8oW', 'W7FcRcBdUXW', 'W7uLECkPAW', 'uGtcM0HF', 'WPbEWP3cQG', 'WOW1W4tdQZO', 'zmkiW4zhW70', 'W7dcNfBcUSkj', 'eCkrqW', 'WPFcI2PcBW', 'W63cI13dQCon', 'gCkFueu', 'g1u7va', 'eXmGcKu', 'iSkHWR0NFG', 'W6TUWPO', 'W6lcPCk7rsm', 'CWNcQefq', '4Pw24PwR4PwK4PEg4Psu', 'W684W7/dRSki', 'CSk0W75tWOy', 'W5LiW7ZcQq', 'tCkWt07dHa', 'hmkmrgBdUa', 'W6GeW7FcSMS', 'WPpdOtC', 'BqZVV7/VVA5A', '8kkfPeuzW53dKG', 'W5ZcMI8TiG', 'WRtGTAxGTPtGTztGTiG', '4lwhWOJGTRBGT4lGTzq', 'eSkHWR4', 'fviNcK4', 'W4tdQ8k6cCk/', 'uYJcRgfb', 'oCkvotpcLa', 'W7CTW4W', '4Q2ngmo1tt4', 'qbrTi8kM', 'W6a/W4ddJCoI', 'W6WeWQNdT2S', 'W6buWR7cSsq', 'WOtcLbikmW', 'pCoJWRddTuO', '4PAE4PsC4PArxUkxQW', 'crNcNa', 'nchcVa', 'qSkmzeldLq', 'WO4fW4xdOcC', 'W7VcSIZdTcO', 'W53dRSk9ca', 'W77cTYRdUtC', 'WOXTWRtcU8kR', 'pJ7cUMfl', 'dHJcLSkeWQS', 'w/cYNyz9WP7dSq', 'W4fnW73cNHO', 'W59XWQ8CWQe', 'WQ/cPJiSfa', 'ECkmW4PfWRi', 'wSkaC0ddIa', 'pmoPWRZcPXm', 'WRftWOVcQCkm', 'tCkfWOajwa', 'W7aoWQXrWOi', 'CmoGWQH7DG', 'hv8Trq', 'gXLpe8kL', 'lmkwWRSOBW', 'W5qCgxe', '4PsZ4Pw14Psu4Pwx4PAw', 'dSo6WPtcPYm', 'W7RcNLVdOq', 'W7LmW7KFWRW', 'vNCyW4CA', 's8kEW6JdGNi', 'WPD4W7vQfa', 'W6KSumkZuG', 'W6hdKmklmSo6', 'FZ7cVq', 'WQBdH8k1W5G', 'qNBcOYTt', 'W61nW73cSCkW', 'EmksWQifBG', 'WQmeWPX7W7m', 'zHS0mSoK', 'sCk0W4nUWOa', 'WPqxW5xWQjQw8yglIG', 'WOdcIKHFyq', 'gLiwvSo+', 'WRpWP6s8W7O', 'oxK9g3m', 'W40CW4/dU8ki', 'W7X8WOKbWQq', 'W6XOW57cLq', 'qmoSimo0', 'W6VcRYNdVdi', 'WQaH4PwwW57dTW', 'W73cNLVdPCoe', 'W6VdVmkFeCkP', 'WOJcGayD', 'WQxdI8kI', 'W5BXG66O', 'WOFdOdVdN8ky', 'hbhdMCkPWQa', 'WP3cIL5E', 'eLiNdG', 'BLtcHhGw', 'xCoqlUkuPVcIPPK', 'W4JdOtVdMCka', 'WQldQmkUW7NcRG', 'h8k6WPZcJmk5', 'k8kOFMOd', 'ACkUl1Cb', 'W67dJrX0WQe', '8ycSGUkaRUkaHS+UZzVmS826ZzJpUFc8Ly4', 'heaVsCoW', '8lA/LmopiZ8z', 'a8oqjJldHW', 'ndhcU8kSW6W', 'W49WW5qIWRi', 'ecmir8k9', 'bVgkH4lWRPMA8j6iOVcwQP0', 'WOVcJKbLwG', 'fauqWQLH', 'gCkBv0C', 'WP9sWOhcT8kj', 'WR3dJH1IW4W', '4OsBmEg2NCMW4BwJ', 'WPFcJL1m', 'ESk4W7hdJee', 'W6bjW7CwWRW', 'W7nKW57cMSkA', 'av0LjwS', '4PEW4Ocs4OkJ4OoT4Ooe', '4PAC4PAO4PA64Psq4PET', 'baKxWQ5L', 'gmoedGq', 'bfyGh0y', 'ef/cTHiE', 'yaZILlrQwG', 'nt8OWRvV', 'W7BcLqZdOW4', 'W4VdTmkIdmk/', 'WOquW4xdRc8', 'h8k+yfFdIq', 'rr/cJmoonq', 'EmoRjve', 'hCoeWRNcPZC', 'bWysxmo6', 'WOhcIKHoDG', 'hX0mxq', 'WOTfqZpcTa', '4lsF4lw4Aoc0Qoc3Qa', 'W6PHW5SZWPy', 'zmkiW4rmW70', 'W4/cNtuM', 'hSkbr23dVa', 'fqSrWRnW', 'W7e7W4JdJCkV', 'iudcUwPg', 'WP3cNbypmG', 'nd3cQ2Tk', 'dSkos0Oe', '8lAVSE+5Oq', 'Df3dV282', 'WQ9HzZq', 'W4JcUvVdTCoM', 'A8kZW6VdM1K', 'xCklW6VdJa', 'mKNcOIyd', 'WOJcIWmD', '8yo9TU+4PG', 'W6HiWQ0ZWP0', 'WP8bW4ldScW', 'nSo6W7S/yW', 'W5aBW63cHCoM', 'f8oiWOJcTYC', 'WOVdSdFdMCop', 'W6rbWQNdT2S', 'W5jyWPddHa', 'FJlcTSoOtq', 'ucSr', 'DCkcW58cWRy', 'WPHqW6XPlq', 'W7KXWQBIL7Xy', '4PEs4Pso4PE54PEV4PAC', 'WR3cNtC7eq', 'rt0lW5aC', 'gmoEueTx', 'CdRcSmoO', 'W4DEWPe', 'AmoRnvOv', 'sSoSjCoMW6C', 'nSo6W7STEG', 'W4ZdUr1HWRq', 'BaJcUg1n', 'w3pcPcO', 'c0eZAmoO', 'nmkvjI/dMW', 'W7DGW5lcM8kJ', 'W5hcRSkCksu', 'C2jBtWa', '8lQ5QSoF8kIAKVgbI4ZWK6U/', 'W7b8W586WOW', '4ls+4lsEW7K', 'umkAW6VdHg8', 'cf8Sr8oO', 'W4aRW6pdM8ko', 'CZ7cQ8kM', 'nSkMBa', 'WQNdHmkIW47dTW', '4lwC4lwaFa', 'WQaHWORdNG', 'cmkJWRhcS8kA', 'WOmo8lUKG++5Hhm/', 'W5ZdKKLy', 'vJqjW48p', 'W6tdR8kPW5RcTG', 'e8kcW7FcLSkJ', 'BSoHmvuc', 'y8kHWRe/', 'fahcP8kaW48', '4PE1W4/IMRqnka', 'pCk8oGSB', 'WP7cUKjSua', 'zCoJj14c', 'W71mW4pcPaC', 'qwFdKWq', 'yCoAW7lcSCkj', 'b2CdW5bF', 'amkixgRdRW', 'W6xcR8kYf3u', 'W7moW6tdLCko', 'gKq3t8oQ', 'W6JcRIFdUIW', 'mIZcM8kpW60', 'W54B4PsvW77dHW', '4Pw34R6jrrpcVW', 'p8o5WQ7cVq', 'W6NdGrLKWOm', 'tmkeW7VcGW', 'WORcICkg', 'W5ZcPYtdSd8', 'W7qgjG', '77+F77Yz77+w77+Q77+g', 'r8kmzfxdIq', 'EWdcQCk5W78', 'WR7XGQEj8l2vU/c7Pi3XJ4Af', 'irWB', 'W5ZXGBUX8koBHFc1Uyud', 'o8o+WQJcSbm', 'W7ThW7VdVq0', 'qmolaLCy', 'dSkZFCkN', 'lpgkGR3WRi+X4Oca8ks+H8o6WP/cSW', '4PAM4PEk4PEU4Psi4PwT', 'd8khr23dVa', 'b31yWO4E', 'j8k3WOZcKCkN', '8yYxPUkhKVcYLPVcKCkz', 'W4eiqmkpBG', '8kceSFcKHBJWUQE98lo1HokhHq', 'WP/HT4NlMUg1JUg1KG', 'WOuqW4xdTtm', 'eXSjvSoX', 'BaZcLN1w', 'eLfaWQSU', 'eX4kxmoT', 'W6jbW68', 'jSoNWOVcKdu', 'W6LTW4tcM8k2', 'DmkaW59d', 'W7fVWPPUW4K', 'h0CQvqK', 'W60MW7ddK8kb', 'ysJcOq', 'W7S9WOS7W4K', 'W67cNLVdTmog', 'WOXiW5NdPmoh', '8jUjSpgkQl538lQlO/cPQPK', 'jatcUSkkW5K', 'WOpcMLPf', 'WRabvSk2ta', 'W6NdGqz8WOK', 'W5pcOSkBzqK', 'W6mWW4ddKSkP', 'ydtcKCo5nW', 'W67dPmkMW4JcRq', '4PApbokyJSo9yq', 'WPdcMX0t', 'dCkbsxC', 'W4PnW7JcIaW', 'W7ldGWfKWO0', 'pmkVFxVdNq', 'bfu6', 'WPFdKSkMW4JcRa', 'dSooWOxcSr8', 'vd9ee8oY', 'W4JcHJaecW', 'nSkaqgFdKa', 'W5lcUmkkEWi', 'lmkKfu0g', 'vCkpW7hdINq', 'du7dMq', '4Psu4PwB4PEe4PAj4Pwh', 'W5e7W4xdMSkV', 'xmkGWQtcG8kQ', '4PAa4R6LWONcN8oS', 'WPxdIgXM', 'WRXdW7n8ca', 'yCo8WRxdUHy', 'mSorEZVdLG', 'xb/cVSoJcq', 'rbrGmSoX', 'WOegW6NdQIq', 'deXvWPKB', 'W6SZW4JdMmkP', 'ookFGEkySEkxKUkxQG', 'W6TVWPm', 'W7RcQYFdU2q', 'rSo9i8o3W7O', 'rSo1W67cTW', 'et4Qx8oS', '4PY4egLWW6G', 'WQD4W6T/wa', 'w3tcUc9m', 'u8kSW5dcT8kD', 'vZ4mWRn5', 'ispcVmk5W64', 'eLW9g2G', 'W5aWwmo6nW', 'EmoBWOec', 'WQFdH8kZW5NcVG', 'WPTjW5pcKmks', 'CwhdQCkJzW', 'W4qrW5m', 'Caj4bmoV', '4Psg4Psk4PsU4PsI4PwK', 'aFcEUly', 'WRDPWQpcTCog', 'WPfsW43cSJW', 'WQ7cStS', 't8odiGK', 'twNcUdzz', 'vSkgWQNcJmkI', 'B8kAW7ddN2G', 'wb18a0a', 'W7ScFmkPya', 'aSkzWRZcISkU', 'A3TIEtu', 'W6y/W53dNG', 'W60SW5a', 'opc8K7BIG5/XHBcJx/gdM6VWSPMY', 'WRakuCkICq', 'tmoOo8oR', 'C25xvW', 'W7ldNae+WPG', 'WPBcLHrBAW', 'pWq8WQby', 'W7jGWPdcJmk2', 'ACo1WRe/AW', 'EfBcUNyK', '4lE2ySkRWQxdQG', 'pYFcV8k+'];
    _0x5e8c = function () {
      return _0x3204df;
    };
    return _0x5e8c();
  }
  _0x41e663.pattern = "lyrics";
  _0x41e663.alias = ["lyric"];
  _0x41e663.react = "🎙️";
  _0x41e663.desc = "song lyrics search";
  _0x41e663.category = "search";
  _0x41e663.use = ".lyric <song name>";
  _0x41e663.filename = __filename;
  cmd(_0x41e663, async (_0x4e838a, _0x21efbf, _0x4f017a, {
    from: _0x1c1a6c,
    l: _0xb28e73,
    quoted: _0xfee92b,
    body: _0x2624b4,
    isCmd: _0x5d8e0b,
    command: _0x4c9f0e,
    args: _0x237c9d,
    q: _0x328483,
    isGroup: _0x33c77a,
    sender: _0x47287d,
    senderNumber: _0x524a03,
    botNumber2: _0x30efc5,
    botNumber: _0xb6ed8,
    pushname: _0x281b32,
    isMe: _0x52196d,
    isOwner: _0x3aa7bf,
    groupMetadata: _0x4cca85,
    groupName: _0x7e6e67,
    participants: _0x4ac927,
    groupAdmins: _0x3decb4,
    isBotAdmins: _0x2ffa82,
    isAdmins: _0x3c1a4a,
    reply: _0x332527
  }) => {
    function _0x5b4d8e(_0x5e4418, _0x2afd2b, _0x1476b1, _0x5bb47a, _0x240340) {
      return _0xa94a(_0x2afd2b - 0x358 + 0x208, _0x5e4418);
    }
    function _0x4e98a8(_0x505821, _0x22fa1a, _0x236cd0, _0x490067, _0x30f333) {
      return _0xa94a(_0x22fa1a - 0x394 + 0x1cb, _0x236cd0);
    }
    function _0x2805de(_0x4d72fe, _0x1f642c, _0xceaf6e, _0x957817, _0x8ab7ed) {
      return _0xa94a(_0x957817 - 0xce + 0x208, _0x1f642c);
    }
    const _0x281484 = {
      'gzGZi': function (_0x18855d, _0x59ddea) {
        return _0x18855d(_0x59ddea);
      },
      'zdcxv': function (_0x436961, _0x115001) {
        return _0x436961 + _0x115001;
      },
      'TyrDZ': "https://api.sdbots.tech/lyrics?song=",
      'woFgL': function (_0x95e8ed, _0x1a3d71) {
        return _0x95e8ed(_0x1a3d71);
      },
      'VJiIj': function (_0x436497) {
        return _0x436497();
      },
      'uRLoT': function (_0x3e605d) {
        return _0x3e605d();
      },
      'TxssZ': function (_0x320329, _0x189e76) {
        return _0x320329(_0x189e76);
      }
    };
    function _0x1e22d1(_0x383604, _0x322686, _0x3982cf, _0x2e8c5e, _0x4db830) {
      return _0xa94a(_0x322686 + 0x1bd + 0x208, _0x383604);
    }
    function _0x97f06e(_0x5d9b0c, _0x482d67, _0x23c561, _0x254450, _0x411293) {
      return _0xa94a(_0x411293 - 0x13f + 0x208, _0x254450);
    }
    try {
      if (!_0x328483) {
        return _0x332527(tmsg5);
      }
      const _0x4e19dc = await fetchJson("https://api.sdbots.tech/lyrics?song=" + _0x328483);
      if (_0x4e19dc.lyrics) {
        _0x332527("\n┌───[ X - B Y T E]\n\n   *LYRICS SEARCH*\n   \n*" + _0x4e19dc.title + "*\n_" + _0x4e19dc.artist + "_\n\n\n" + _0x4e19dc.lyrics + "\n\n└───────────◉");
      } else {
        _0x332527();
      }
    } catch (_0x11704d) {
      _0x332527();
      _0xb28e73(_0x11704d);
    }
  });
  const _0x5b430d = {
    pattern: "itunes",
    react: "🎙️",
    desc: '',
    category: "search",
    use: ".itunes <song name>",
    filename: __filename
  };
  cmd(_0x5b430d, async (_0x4ab97e, _0x181cbf, _0x35fbb0, {
    from: _0x469978,
    l: _0x25d4b9,
    quoted: _0x568b25,
    body: _0x529a1d,
    isCmd: _0x1d8399,
    command: _0x225fb1,
    args: _0x5b3b30,
    q: _0x80386b,
    isGroup: _0xe11fdd,
    sender: _0xf6396f,
    senderNumber: _0x38bf92,
    botNumber2: _0x20e02e,
    botNumber: _0x33f04d,
    pushname: _0x4f1044,
    isMe: _0x3b64ac,
    isOwner: _0xf34fab,
    groupMetadata: _0x1f8141,
    groupName: _0x3607bb,
    participants: _0x2b8bf0,
    groupAdmins: _0x94404,
    isBotAdmins: _0x3b378d,
    isAdmins: _0x4c55c0,
    reply: _0x240bf8
  }) => {
    function _0x25f97f(_0x3dd595, _0xa7d336, _0x47a502, _0x14386d, _0x1ee49f) {
      return _0xa94a(_0x14386d - 0x167 - 0x0, _0x3dd595);
    }
    function _0x5be451(_0x5a2d60, _0x591b9b, _0x2d2359, _0x5e116e, _0xac6680) {
      return _0xa94a(_0x591b9b - 0x2c4 + 0x208, _0x5e116e);
    }
    function _0x5e0278(_0x105bb8, _0x1edb78, _0x521815, _0x4b5988, _0x217c59) {
      return _0xa94a(_0x105bb8 + 0x147 + 0x1cb, _0x521815);
    }
    const _0x321ef5 = {
      'oxbtt': function (_0x373890, _0x4ad94f) {
        return _0x373890(_0x4ad94f);
      },
      'FMAgL': "Please provide a song name",
      'xeFot': function (_0x143a91, _0x4c5705) {
        return _0x143a91(_0x4c5705);
      },
      'vaPHL': function (_0x30cd64, _0x4a30bf) {
        return _0x30cd64 + _0x4a30bf;
      },
      'CPOQk': "JSON response:",
      'CNuya': function (_0x3d35ac) {
        return _0x3d35ac();
      }
    };
    function _0x2e9762(_0x1633c5, _0x34b5cc, _0x3222c4, _0x16a605, _0x54e5ec) {
      return _0xa94a(_0x1633c5 + 0x1fd - 0x3a7, _0x34b5cc);
    }
    function _0x22da0f(_0x5f51df, _0x3ff59b, _0x156cf7, _0x12b990, _0x2e64bc) {
      return _0xa94a(_0x5f51df - 0x13e + 0x320, _0x12b990);
    }
    try {
      if (!_0x80386b) {
        return _0x240bf8("Please provide a song name");
      }
      let _0x49fe03 = await fetch("https://api.popcat.xyz/itunes?q=" + _0x80386b);
      if (!_0x49fe03.ok) {
        throw new Error("API request failed with status " + _0x49fe03.status);
      }
      let _0x9e541e = await _0x49fe03.json();
      console.log("JSON response:", _0x9e541e);
      let _0x29aab0 = "*Song Information:*\n\n     • *Name:* " + _0x9e541e.name + "\n\n     • *Artist:* " + _0x9e541e.artist + "\n\n     • *Album:* " + _0x9e541e.album + "\n\n     • *Release Date:* " + _0x9e541e.release_date + "\n\n     • *Price:* " + _0x9e541e.price + "\n\n     • *Length:* " + _0x9e541e.length + "\n\n     • *Genre:* " + _0x9e541e.genre + "\n\n     • *URL:* " + _0x9e541e.url;
      if (_0x9e541e.thumbnail) {
        const _0x43a1c4 = {
          url: _0x9e541e.thumbnail
        };
        const _0xe1feeb = {
          image: _0x43a1c4,
          caption: _0x29aab0
        };
        await _0x4ab97e.sendMessage(_0x181cbf.chat, _0xe1feeb, {
          'quoted': _0x181cbf
        });
      }
      const _0x440b61 = {
        text: '✅',
        key: _0x181cbf.key
      };
      const _0x6fa149 = {
        react: _0x440b61
      };
      await _0x4ab97e.sendMessage(_0x469978, _0x6fa149);
    } catch (_0x21574c) {
      _0x240bf8();
      _0x25d4b9(_0x21574c);
    }
  });
  const _0x42a9ec = {
    pattern: "true",
    alias: ["truecaller"],
    react: '💯',
    desc: descg,
    category: "search",
    use: ".true <phone number>",
    filename: __filename
  };
  cmd(_0x42a9ec, async (_0x4151fc, _0x415135, _0x47e679, {
    from: _0xc4eb7b,
    l: _0x4cc0f8,
    quoted: _0x3a018f,
    body: _0x236071,
    isCmd: _0x1fb81b,
    command: _0x5a3ea3,
    args: _0x359c3e,
    q: _0xf10a77,
    isGroup: _0xe4fff6,
    sender: _0x4c67f5,
    senderNumber: _0x13ae62,
    botNumber2: _0x56106c,
    botNumber: _0x1f5274,
    pushname: _0x285bf8,
    isMe: _0x582ec4,
    isOwner: _0xf7111d,
    groupMetadata: _0x14e0e2,
    groupName: _0x3cbd15,
    participants: _0x4684e6,
    groupAdmins: _0x49393e,
    isBotAdmins: _0x1e574b,
    isAdmins: _0x3868cc,
    reply: _0x3783bd
  }) => {
    const _0x2710a8 = {
      'UyNNZ': function (_0x9cd190, _0x1dde87) {
        return _0x9cd190(_0x1dde87);
      },
      'ZqYWh': "Please provide a phone number.",
      'PYPlN': "a1i0h--loh5IMkhktEDXmgSLUQDHGrXDUbWqFoWEgiItBNgppvYin-rG97CRLpuh",
      'bBGEP': function (_0x2c3487, _0x3d1d65) {
        return _0x2c3487(_0x3d1d65);
      },
      'mKCRn': function (_0xf548ca, _0x4e4266) {
        return _0xf548ca > _0x4e4266;
      },
      'fbKQA': "3|6|0|5|7|2|1|8|9|4",
      'tuCgW': "*Error !!*"
    };
    function _0x50abf6(_0x46dd54, _0x585a32, _0x1c533, _0x465bb1, _0x43f5cf) {
      return _0xa94a(_0x465bb1 - 0x5db + 0x208, _0x43f5cf);
    }
    function _0x47676e(_0x5a4803, _0x521cd0, _0x4c8ec8, _0x40ab9b, _0x2da010) {
      return _0xa94a(_0x2da010 + 0x780 - 0x3a7, _0x4c8ec8);
    }
    function _0x506ae4(_0x384078, _0x2f3f4a, _0x1ffd9a, _0xe90655, _0x2d4968) {
      return _0xa94a(_0x2d4968 + 0x704 - 0x3a7, _0x1ffd9a);
    }
    function _0x34a79a(_0x5102fa, _0x436b63, _0x354fa5, _0x54ee86, _0x139e44) {
      return _0xa94a(_0x436b63 + 0x28b - 0x3a7, _0x354fa5);
    }
    function _0x5bb1f1(_0x13a0e9, _0x35ac0f, _0x412add, _0xcdb00e, _0x3ac16d) {
      return _0xa94a(_0xcdb00e + 0x1bc + 0x208, _0x3ac16d);
    }
    try {
      if (!_0xf10a77) {
        return _0x3783bd("Please provide a phone number.");
      }
      const _0x2c4d71 = "https://sid-bhai.vercel.app/api/truecaller?phone=" + encodeURIComponent(_0xf10a77) + "&id=" + "a1i0h--loh5IMkhktEDXmgSLUQDHGrXDUbWqFoWEgiItBNgppvYin-rG97CRLpuh";
      let _0x4fbf06 = await axios.get(_0x2c4d71);
      console.log(_0x4fbf06);
      let _0x504608 = _0x4fbf06.data;
      const {
        name: _0x260f7c,
        alternateName: _0x57fbcb,
        addresses: _0x265a19,
        email: _0x50e921,
        countryDetails: _0x1c7b91
      } = _0x504608;
      let _0x1b5dbc = "╭––『 *Phone Detail* 』\n";
      _0x1b5dbc += "┆ ⚝ *Name:* " + _0x260f7c + "\n";
      if (_0x265a19 && _0x265a19.length > 0) {
        _0x1b5dbc += "┆ ⚝ *Address:* " + _0x265a19[0].city + ", " + _0x265a19[0].countryCode + "\n";
        _0x1b5dbc += "┆ ⚝ *Time Zone:* " + _0x265a19[0].timeZone + "\n";
        _0x1b5dbc += "┆ ⚝ *Pin Code* " + _0x265a19[0].zipCode + "\n";
        _0x1b5dbc += "┆ ⚝ *Street* " + _0x265a19[0].street + "\n";
      }
      _0x1b5dbc += "┆ ⚝ *Email:* " + _0x50e921 + "\n";
      _0x1b5dbc += "╰–––––––––––––––༓\n";
      if (_0x1c7b91) {
        _0x1b5dbc += "╭––『 *countryDetails* 』\n";
        _0x1b5dbc += "┆ ⚝ *Name:* " + _0x1c7b91.name + "\n";
        _0x1b5dbc += "┆ ⚝ *Native:* " + _0x1c7b91.native + "\n";
        _0x1b5dbc += "┆ ⚝ *Phone Code:* +" + _0x1c7b91.phone[0] + "\n";
        _0x1b5dbc += "┆ ⚝ *Continent:* " + _0x1c7b91.continent + "\n";
        _0x1b5dbc += "┆ ⚝ *Capital:* " + _0x1c7b91.capital + "\n";
        _0x1b5dbc += "┆ ⚝ *Currency:* " + _0x1c7b91.currency.join(", ") + "\n";
        _0x1b5dbc += "┆ ⚝ *Languages:* " + _0x1c7b91.languages.join(", ") + "\n";
        _0x1b5dbc += "┆ ⚝ *Flag:* " + _0x1c7b91.flag + "\n";
        _0x1b5dbc += "╰–––––––––––––––༓";
      }
      const _0x3d1e68 = {
        'q': _0x1b5dbc
      };
      const _0x33c59e = {
        quoted: _0x415135
      };
      await _0x4151fc.sendMessage(_0xc4eb7b, _0x3d1e68, _0x33c59e);
    } catch (_0x5bbf62) {
      _0x3783bd("*Error !!*");
      _0x4cc0f8(_0x5bbf62);
    }
  });
  const _0x2e3263 = {
    pattern: 'ip',
    alias: ["ipstalk", "sip", "searchip", "ip-locator"],
    react: '🌐',
    desc: desct,
    category: "search",
    use: ".ipstalk 112.134.193.130",
    filename: __filename
  };
  cmd(_0x2e3263, async (_0xeb48f, _0x41cf1a, _0x8dfce, {
    from: _0x151237,
    l: _0x5bec9e,
    quoted: _0x452bdd,
    body: _0x4ce154,
    isCmd: _0x3e2ee8,
    command: _0x460d94,
    args: _0x22cd93,
    q: _0x268bc7,
    isGroup: _0x434271,
    sender: _0x1a4d02,
    senderNumber: _0xc4d350,
    botNumber2: _0x3bbccd,
    botNumber: _0x38a5b0,
    pushname: _0x17d49c,
    isMe: _0x10f0b2,
    isOwner: _0x486757,
    groupMetadata: _0x13c379,
    groupName: _0x54aed6,
    participants: _0x3e3ae1,
    groupAdmins: _0x2105cc,
    isBotAdmins: _0x4b5578,
    isAdmins: _0x16e9b6,
    reply: _0xda98ac
  }) => {
    function _0x1c12b1(_0x248690, _0x2b7172, _0x239669, _0x3f4463, _0x20ad9c) {
      return _0xa94a(_0x2b7172 + 0x303 - 0x3a7, _0x20ad9c);
    }
    function _0xedb7a9(_0x181cb2, _0x11afed, _0x1cc76f, _0x2a4302, _0x1e4a0d) {
      return _0xa94a(_0x1e4a0d - 0x60c + 0x320, _0x1cc76f);
    }
    function _0x36b2f6(_0x550a6e, _0x1358fb, _0x1e8be2, _0x32a7ed, _0x206acd) {
      return _0xa94a(_0x550a6e + 0x60a - 0x3a7, _0x32a7ed);
    }
    function _0x57e2ed(_0x37af4a, _0x3bad25, _0x27cd36, _0x218ee6, _0x4b5b6b) {
      return _0xa94a(_0x37af4a + 0x4f - 0x0, _0x3bad25);
    }
    const _0x251e2e = {
      'qhmIq': function (_0x24ba9d, _0x4728fa) {
        return _0x24ba9d(_0x4728fa);
      },
      'Qxfhq': "IP :",
      'mLMOg': "STATUS :",
      'oJtJj': "CONTINENT :",
      'EoTPC': "COUNTRY :",
      'LDinP': "COUNTRYCODE :",
      'WPDGc': "REGIONNAME :",
      'HwpVN': "CITY :",
      'adUfi': "ZIP :",
      'PhXZG': "CURRENCY :",
      'FzioA': "ISP :",
      'QeSav': "MOBILE :",
      'FbunG': "PROXY :",
      'lpMZP': function (_0x4bd0a7, _0x503815) {
        return _0x4bd0a7 + _0x503815;
      },
      'Rcgjd': "https://api.techniknews.net/ipgeo/",
      'aSZPq': function (_0x557625, _0x1c199a) {
        return _0x557625 + _0x1c199a;
      },
      'lVoQn': function (_0x21631d, _0x45bb33) {
        return _0x21631d + _0x45bb33;
      },
      'JFCHH': function (_0x24928f, _0x566fee) {
        return _0x24928f + _0x566fee;
      },
      'lBeCS': function (_0xb6ccb7, _0x133b21) {
        return _0xb6ccb7 + _0x133b21;
      },
      'mdqOi': function (_0x4798f5, _0x6c3367) {
        return _0x4798f5 + _0x6c3367;
      },
      'BhoQc': function (_0x26ed51, _0x5a78f5) {
        return _0x26ed51 + _0x5a78f5;
      },
      'CikUG': function (_0x49bc9e, _0x2f4cc4) {
        return _0x49bc9e + _0x2f4cc4;
      },
      'rLLDg': function (_0x437f4f, _0x1297c8) {
        return _0x437f4f + _0x1297c8;
      },
      'ksQQq': function (_0x45356c, _0x58f7d1) {
        return _0x45356c + _0x58f7d1;
      },
      'JrHLH': function (_0x10f908, _0x3d8fb2) {
        return _0x10f908 + _0x3d8fb2;
      },
      'navYI': function (_0x1ea9f7, _0x4f9e98) {
        return _0x1ea9f7 + _0x4f9e98;
      },
      'FsBwK': function (_0xb584bd, _0x59011e) {
        return _0xb584bd + _0x59011e;
      },
      'xXTKu': function (_0x3877ba, _0x1cef65) {
        return _0x3877ba + _0x1cef65;
      },
      'yNpgL': function (_0x14a1dc, _0x18686c) {
        return _0x14a1dc + _0x18686c;
      },
      'QbpDb': function (_0x41b221, _0x2210d8) {
        return _0x41b221 + _0x2210d8;
      },
      'PNFrU': function (_0x45ab7b, _0x5c4807) {
        return _0x45ab7b + _0x5c4807;
      },
      'waicn': function (_0x22e75f, _0x4252eb) {
        return _0x22e75f + _0x4252eb;
      },
      'vURgt': function (_0x40e5e0, _0x5a8bb4) {
        return _0x40e5e0 + _0x5a8bb4;
      },
      'cglfO': function (_0x368d8a, _0x3630d7) {
        return _0x368d8a + _0x3630d7;
      },
      'RCYlb': function (_0xfd0b19, _0xff7a75) {
        return _0xfd0b19 + _0xff7a75;
      },
      'lbXod': function (_0x3c7095, _0x4d1387) {
        return _0x3c7095 + _0x4d1387;
      },
      'ukfxU': function (_0x24a7d1, _0x15ed0f) {
        return _0x24a7d1 + _0x15ed0f;
      },
      'mfVQD': function (_0x367efd, _0x4e2c2b) {
        return _0x367efd + _0x4e2c2b;
      },
      'dBebC': function (_0x8a8de0, _0x18a90f) {
        return _0x8a8de0 + _0x18a90f;
      },
      'aOXEJ': function (_0x588723, _0x4950c3) {
        return _0x588723 + _0x4950c3;
      },
      'QLorx': function (_0x3bd71b, _0xb60cec) {
        return _0x3bd71b + _0xb60cec;
      },
      'hXsJJ': function (_0x2ccab2, _0x5bef9b) {
        return _0x2ccab2 + _0x5bef9b;
      },
      'ngFJl': function (_0x38c789, _0xe7bb5f) {
        return _0x38c789 + _0xe7bb5f;
      },
      'rAdwJ': function (_0x17a26b, _0x2998f0) {
        return _0x17a26b + _0x2998f0;
      },
      'zLQXp': function (_0x508cfb, _0x11f27b) {
        return _0x508cfb + _0x11f27b;
      },
      'RtJnm': function (_0x295597, _0x1f6dc7) {
        return _0x295597 + _0x1f6dc7;
      },
      'xWDvP': "*🔴 ",
      'EUrGY': "* ```",
      'wnvJB': "```\n",
      'cWSBn': "*🌐",
      'MxniM': "*🗺",
      'Wzzom': "*🔢",
      'rNCet': "*🌍",
      'zFWcv': "*🚩",
      'ULBUz': "*🏛",
      'SUHqp': "*💸",
      'TweyC': "*📡",
      'Cwrhs': "*🛡",
      'NQFZA': "*📱",
      'XDQcj': "```\n\n",
      'NmnoX': "└───────────◉",
      'QGDwl': function (_0x1b2681, _0x422df4) {
        return _0x1b2681(_0x422df4);
      },
      'bUUqQ': function (_0x592fd0, _0x293ff4) {
        return _0x592fd0(_0x293ff4);
      }
    };
    function _0x55abf4(_0x536cb8, _0x220b74, _0x22ccbd, _0x4f5452, _0x2fb961) {
      return _0xa94a(_0x22ccbd - 0x82 - 0x0, _0x220b74);
    }
    try {
      if (!_0x268bc7) {
        return _0xda98ac(needus);
      }
      if (!_0x268bc7.includes('.')) {
        return _0xda98ac(needus);
      }
      const _0xbf9cd8 = await fetchJson("https://api.techniknews.net/ipgeo/" + _0x268bc7);
      const _0x11ca75 = "[ X - B Y T E]\n\n    *IP STALKER*\n    \n*🔴 IP :* ```" + _0x268bc7 + "```\n" + '*✅' + "STATUS :" + "* ```" + _0xbf9cd8.status + "```\n" + "*🌐" + "CONTINENT :" + "* ```" + _0xbf9cd8.continent + "```\n" + "*🗺" + "COUNTRY :" + "* ```" + _0xbf9cd8.country + "```\n" + "*🔢" + "COUNTRYCODE :" + "* ```" + _0xbf9cd8.countryCode + "```\n" + "*🌍" + "REGIONNAME :" + "* ```" + _0xbf9cd8.regionName + "```\n" + "*🚩" + "CITY :" + "* ```" + _0xbf9cd8.city + "```\n" + "*🏛" + "ZIP :" + "* ```" + _0xbf9cd8.zip + "```\n" + "*💸" + "CURRENCY :" + "* ```" + _0xbf9cd8.currency + "```\n" + "*📡" + "ISP :" + "* ```" + _0xbf9cd8.isp + "```\n" + "*🛡" + "PROXY :" + "* ```" + _0xbf9cd8.proxy + "```\n" + "*📱" + "MOBILE :" + "* ```" + _0xbf9cd8.mobile + "```\n\n" + "└───────────◉";
      const _0x5bc476 = {
        text: _0x11ca75
      };
      const _0xe1901e = {
        quoted: _0x41cf1a
      };
      await _0xeb48f.sendMessage(_0x151237, _0x5bc476, _0xe1901e);
    } catch (_0xeee6f4) {
      _0xda98ac(cantf);
      _0x5bec9e(_0xeee6f4);
    }
  });
  const _0x394871 = {
    pattern: "pemoji",
    react: '🔖',
    desc: "imoji to image convert",
    category: "search",
    use: ".pemoji",
    filename: __filename
  };
  cmd(_0x394871, async (_0xeb8289, _0x445cc7, _0x2119bb, {
    from: _0x1f5c4a,
    l: _0x27c9ef,
    quoted: _0x6a3bc,
    body: _0x545aef,
    isCmd: _0x5842fa,
    command: _0x7c4ab,
    args: _0x819c25,
    q: _0x5ded7a,
    isGroup: _0x2f416d,
    sender: _0x18f317,
    senderNumber: _0xff31b9,
    botNumber2: _0x427f14,
    botNumber: _0x38cdff,
    pushname: _0x120c79,
    isMe: _0x2b4fd8,
    isOwner: _0x347ba9,
    groupMetadata: _0x346800,
    groupName: _0x37c421,
    participants: _0x13964b,
    groupAdmins: _0x30c807,
    isBotAdmins: _0xf7d325,
    isAdmins: _0x1c28b0,
    reply: _0xf64828
  }) => {
    function _0x27816e(_0x70f581, _0x26a77d, _0x1466ce, _0x408762, _0xdcc58e) {
      return _0xa94a(_0x26a77d + 0x61 + 0x320, _0x1466ce);
    }
    function _0x4e8a97(_0x214feb, _0x10c3d7, _0xf7178b, _0x44e979, _0x5303ec) {
      return _0xa94a(_0x10c3d7 + 0x23 - 0x0, _0x214feb);
    }
    function _0x10a414(_0x437872, _0x8b2b0d, _0x3f2177, _0x5a4182, _0x5bc4b2) {
      return _0xa94a(_0x5bc4b2 - 0x2fb + 0x1cb, _0x3f2177);
    }
    const _0x5b60ab = {
      'leOHU': function (_0x1398f9, _0x1bfcdd) {
        return _0x1398f9(_0x1bfcdd);
      },
      'dVUir': function (_0x41bdd1) {
        return _0x41bdd1();
      },
      'sMMaZ': function (_0x2f8c51, _0xd344eb) {
        return _0x2f8c51(_0xd344eb);
      }
    };
    function _0x17c0f4(_0x4a1cec, _0xa19477, _0x4d3c90, _0x2760dc, _0x15cb1f) {
      return _0xa94a(_0xa19477 - 0x1a + 0x1cb, _0x4d3c90);
    }
    function _0x195227(_0x17594b, _0x23b81c, _0x30650b, _0x351e64, _0x5e5963) {
      return _0xa94a(_0x30650b - 0x51c + 0x320, _0x351e64);
    }
    try {
      if (!_0x5ded7a) {
        return _0xf64828("*👸💬 Please Give me a imoji*\nExample - ." + _0x7c4ab + '👸');
      }
      const _0x2b45c5 = {
        text: '✨',
        key: _0x445cc7.key
      };
      const _0x23e9ec = {
        react: _0x2b45c5
      };
      await _0xeb8289.sendMessage(_0x1f5c4a, _0x23e9ec);
      await _0xeb8289.sendMessage(_0x445cc7.chat, {
        'image': {
          'url': "https://api.vihangayt.me/search/semoji?q=" + encodeURIComponent(_0x5ded7a) + " "
        },
        'caption': '' + global.cap
      }, {
        'quoted': _0x445cc7
      });
      const _0x39a5f8 = {
        text: '✅',
        key: _0x445cc7.key
      };
      const _0x3fbcc1 = {
        react: _0x39a5f8
      };
      await _0xeb8289.sendMessage(_0x1f5c4a, _0x3fbcc1);
    } catch (_0x3bcf58) {
      _0xf64828();
      _0x27c9ef(_0x3bcf58);
    }
  });
  function _0x15d042(_0x4a116f, _0xf44549, _0x1c1624, _0x3b53d9, _0x3a61c3) {
    return _0xa94a(_0x4a116f - 0x3a7, _0x1c1624);
  }
  const _0x5f5837 = {
    pattern: "bard",
    alias: ["bardai", "gbard", "googlebard", "googleai", "ai2"],
    react: '👾',
    desc: desct,
    category: "search",
    use: ".bard ha",
    filename: __filename
  };
  cmd(_0x5f5837, async (_0x21fe21, _0x563033, _0x4e3ac0, {
    from: _0x52e32b,
    l: _0x5b31fb,
    prefix: _0x3c6939,
    quoted: _0x1f565f,
    body: _0x429f53,
    isCmd: _0x23e481,
    command: _0xe7beb7,
    args: _0x896d68,
    q: _0x11753e,
    isGroup: _0x6f5a00,
    sender: _0x446635,
    senderNumber: _0xc9ddd0,
    botNumber2: _0x5a6680,
    botNumber: _0x16aa8a,
    pushname: _0x29d70f,
    isMe: _0x242792,
    isOwner: _0x1856b9,
    groupMetadata: _0x4370c3,
    groupName: _0x413a2c,
    participants: _0x4e04a2,
    groupAdmins: _0x3f6ac7,
    isBotAdmins: _0xe2daf4,
    isAdmins: _0x39da76,
    reply: _0x2fc064
  }) => {
    function _0x5c6c3c(_0x5c1612, _0x16454d, _0x32c3ec, _0x21c28e, _0x4b72d4) {
      return _0xa94a(_0x4b72d4 - 0x372 - 0x0, _0x21c28e);
    }
    function _0x3dda56(_0x36ccda, _0x5c678d, _0x27aa5d, _0x2bcbcd, _0x5ea316) {
      return _0xa94a(_0x5c678d - 0x558 + 0x208, _0x2bcbcd);
    }
    function _0x52b4a8(_0x2c2923, _0x352cc1, _0x2c0062, _0xa05ff8, _0x13325b) {
      return _0xa94a(_0x2c0062 - 0x316 + 0x320, _0x13325b);
    }
    function _0xa015f(_0x411484, _0xe034cf, _0x2cd2f6, _0x59c816, _0x473e7d) {
      return _0xa94a(_0x473e7d + 0x270 - 0x0, _0x2cd2f6);
    }
    const _0x1430df = {
      'BUMrz': function (_0x2f86ce, _0x290b95) {
        return _0x2f86ce(_0x290b95);
      },
      'QGfyW': "https://gist.githubusercontent.com/vihangayt0/7dbb65f6adfe21538f7febd13982569a/raw/apilis.json",
      'TciNN': function (_0x5543b7, _0x2dfd53) {
        return _0x5543b7 * _0x2dfd53;
      },
      'cxyxz': function (_0x3dd077, _0x1e4320) {
        return _0x3dd077 + _0x1e4320;
      },
      'roiYQ': function (_0x9fcc75, _0x11a8bf) {
        return _0x9fcc75 + _0x11a8bf;
      },
      'cEMBO': "api/bard?text=",
      'bptUn': "&apikey=",
      'xaiHX': function (_0x35a87d, _0x4e9a7d) {
        return _0x35a87d(_0x4e9a7d);
      },
      'YfHsF': function (_0x121a1b, _0x2ad5dc) {
        return _0x121a1b + _0x2ad5dc;
      },
      'AlPHH': "https://api.akuari.my.id/ai/gbard?chat=",
      'oxYlM': function (_0x428cb6, _0x3be80b) {
        return _0x428cb6(_0x3be80b);
      }
    };
    function _0x201961(_0x46cbb4, _0x51fcc9, _0x5957ea, _0x4b0ab0, _0x2f3f1a) {
      return _0xa94a(_0x4b0ab0 - 0x4d6 + 0x320, _0x46cbb4);
    }
    try {
      if (!_0x11753e) {
        return _0x2fc064(needus);
      }
      let _0x1dc438 = await fetchJson("https://gist.githubusercontent.com/vihangayt0/7dbb65f6adfe21538f7febd13982569a/raw/apilis.json");
      let _0x2d7ece = _0x1dc438.users;
      let _0x527e20 = _0x2d7ece[Math.floor(Math.random() * _0x2d7ece.length)];
      const _0x1f006c = await fetchJson(_0x1dc438.xz + "api/bard?text=" + _0x11753e + "&apikey=" + _0x527e20);
      return await _0x2fc064(_0x1f006c.content);
    } catch (_0x2d83db) {
      try {
        const _0x28cbb8 = await fetchJson("https://api.akuari.my.id/ai/gbard?chat=" + _0x11753e);
        return await _0x2fc064(_0x28cbb8.respon);
      } catch (_0x47414d) {
        _0x2fc064(cantf);
        _0x5b31fb(_0x47414d);
      }
    }
  });
  const _0x38468c = {
    pattern: "bingimgai",
    alias: ["midj"],
    react: '📷',
    desc: "Generate Images using Bing AI"
  };
  function _0x31395f(_0x5f262e, _0x4dfa78, _0x9780fd, _0x3d4b6e, _0x4e3101) {
    return _0xa94a(_0x9780fd - 0x0, _0x3d4b6e);
  }
  _0x38468c.category = "search";
  _0x38468c.use = ".bingimgai <prompt>";
  _0x38468c.filename = __filename;
  cmd(_0x38468c, async (_0x221fa6, _0x35a3b1, _0x19e6e3, {
    from: _0x3f28c6,
    l: _0x5578fe,
    quoted: _0x47e0cd,
    body: _0x1d35a0,
    isCmd: _0x3ccf67,
    command: _0x16c18b,
    args: _0x27ca54,
    q: _0xb155f2,
    isGroup: _0xb17bbd,
    sender: _0x13a0f5,
    senderNumber: _0xa92a29,
    botNumber2: _0x2c1287,
    botNumber: _0x445985,
    pushname: _0x271b74,
    isMe: _0x3ffb9b,
    isOwner: _0x4577e9,
    groupMetadata: _0x353dce,
    groupName: _0x519e4a,
    participants: _0x4eee0c,
    groupAdmins: _0x4eea20,
    isBotAdmins: _0x2373c3,
    isAdmins: _0x38c6e0,
    reply: _0x4d9e50
  }) => {
    function _0x212b6f(_0x2d5fc7, _0x4503c6, _0x3bef67, _0xe9f82b, _0x3377ca) {
      return _0xa94a(_0x2d5fc7 + 0x772 - 0x3a7, _0x4503c6);
    }
    function _0x43a35f(_0x59e0ea, _0x16a813, _0x44d738, _0x19e119, _0x6001f3) {
      return _0xa94a(_0x59e0ea + 0x783 - 0x3a7, _0x6001f3);
    }
    function _0x5f0df2(_0x178cb5, _0x5e1844, _0x552125, _0x17abe6, _0x334412) {
      return _0xa94a(_0x334412 - 0x5cc + 0x208, _0x552125);
    }
    const _0x4b3b1f = {
      'lbsPv': function (_0x12521a, _0x297f5a) {
        return _0x12521a(_0x297f5a);
      },
      'PbjVm': "*Give me a prompt to generate images*",
      'kcSfk': function (_0x49c777, _0x48c180) {
        return _0x49c777 + _0x48c180;
      },
      'mUkAR': function (_0x32b1d3, _0x5ce49e) {
        return _0x32b1d3 + _0x5ce49e;
      },
      'mGFnh': "https://api.yanzbotz.my.id/api/text2img/bing-image?prompt=",
      'VWXGc': "&apiKey=vihangayt0",
      'CxudW': function (_0x2fe3f7, _0x346149) {
        return _0x2fe3f7 > _0x346149;
      },
      'CidRv': function (_0x171188, _0x34bdca) {
        return _0x171188 < _0x34bdca;
      },
      'FDkJq': function (_0x2c8193, _0xdc08f5) {
        return _0x2c8193(_0xdc08f5);
      },
      'skAZt': "No images found for the given prompt",
      'IThCm': function (_0x181d87, _0x399f4a) {
        return _0x181d87(_0x399f4a);
      },
      'SVlcc': "Unable to generate images to the given prompt",
      'uEsvY': function (_0x4936c7, _0x3fe82d) {
        return _0x4936c7(_0x3fe82d);
      }
    };
    function _0x2bd5fc(_0x1435c5, _0x16b7e0, _0x3f6514, _0x59769a, _0x5d0611) {
      return _0xa94a(_0x5d0611 - 0x4b0 + 0x208, _0x3f6514);
    }
    function _0x4c8bed(_0x45de67, _0xd3d93a, _0x339294, _0x3e16f3, _0x5103ce) {
      return _0xa94a(_0x45de67 - 0x483 + 0x320, _0x5103ce);
    }
    try {
      if (!_0xb155f2) {
        return await _0x4d9e50("*Give me a prompt to generate images*");
      }
      let _0x184c9e = await fetchJson("https://api.yanzbotz.my.id/api/text2img/bing-image?prompt=" + _0xb155f2 + "&apiKey=vihangayt0");
      if (_0x184c9e && _0x184c9e.result && Array.isArray(_0x184c9e.result) && _0x184c9e.result.length > 0) {
        for (let _0x3be92d = 0; _0x3be92d < _0x184c9e.result.length; _0x3be92d++) {
          const _0x3631a5 = {
            url: _0x184c9e.result[_0x3be92d]
          };
          const _0x1a4535 = {
            image: _0x3631a5,
            caption: config.FOOTER
          };
          const _0x5dcc83 = {
            quoted: _0x35a3b1
          };
          await _0x221fa6.sendMessage(_0x3f28c6, _0x1a4535, _0x5dcc83);
        }
      } else {
        _0x4d9e50("No images found for the given prompt");
      }
    } catch (_0x234327) {
      _0x4d9e50("Unable to generate images to the given prompt");
      _0x5578fe(_0x234327);
    }
  });
  const _0x1155ae = {
    pattern: "blackbox",
    alias: ['bb'],
    react: '👾',
    desc: "Blackbox ai chat",
    category: "search",
    use: ".blackbox hi",
    filename: __filename
  };
  cmd(_0x1155ae, async (_0x91bc65, _0x5196fd, _0x353c01, {
    from: _0x3d41c0,
    l: _0x1c5ecc,
    prefix: _0x142b3e,
    quoted: _0x2f0b51,
    body: _0x5d4839,
    isCmd: _0x13babe,
    command: _0x506b09,
    args: _0x37fa08,
    q: _0x2eab9e,
    isGroup: _0x5a7213,
    sender: _0xcfc292,
    senderNumber: _0xeda4f,
    botNumber2: _0x23f1ec,
    botNumber: _0x216e94,
    pushname: _0x380a79,
    isMe: _0x4fcce4,
    isOwner: _0xa3befb,
    groupMetadata: _0xb7b686,
    groupName: _0x296bdb,
    participants: _0x90c05f,
    groupAdmins: _0x25ecc0,
    isBotAdmins: _0x9545f9,
    isAdmins: _0x68fc1f,
    reply: _0x5eb4ad
  }) => {
    const _0x5a532d = {
      'jPJmX': function (_0x107e0b, _0x276b2f) {
        return _0x107e0b(_0x276b2f);
      },
      'RKtJO': "Need a keyword",
      'aSWQb': function (_0x782ed0, _0x2c8da3) {
        return _0x782ed0(_0x2c8da3);
      },
      'BTlSZ': function (_0x71f645, _0x5064d0) {
        return _0x71f645 + _0x5064d0;
      },
      'GpqeV': "https://api.vihangayt.asia/ai/blackbox?q=",
      'OvipK': function (_0x28edfe, _0x3fe279) {
        return _0x28edfe(_0x3fe279);
      },
      'UiYDz': "Unable to generate"
    };
    function _0x63d8f7(_0x179904, _0x2943ff, _0xc92782, _0x1e778b, _0x489be4) {
      return _0xa94a(_0x1e778b - 0x2ed + 0x1cb, _0x179904);
    }
    function _0x5a55a1(_0x29b5f2, _0xb31236, _0x22b218, _0x100b94, _0x262a9c) {
      return _0xa94a(_0x262a9c - 0x2cc + 0x320, _0x22b218);
    }
    function _0x54d18c(_0x348b8e, _0x20d817, _0x57043e, _0x58a399, _0x4124e6) {
      return _0xa94a(_0x58a399 - 0x498 + 0x208, _0x57043e);
    }
    function _0x3c0931(_0x240a8b, _0x15112a, _0x319794, _0x54cbec, _0x4f8108) {
      return _0xa94a(_0x240a8b + 0x13b - 0x3a7, _0x54cbec);
    }
    function _0x266e75(_0x102906, _0x58d155, _0x4ae15c, _0x20166f, _0x2a2038) {
      return _0xa94a(_0x102906 - 0x2fb + 0x320, _0x58d155);
    }
    try {
      if (!_0x2eab9e) {
        return _0x5eb4ad("Need a keyword");
      }
      var _0x26ef57 = (await fetchJson("https://api.vihangayt.asia/ai/blackbox?q=" + _0x2eab9e)).result;
      return await _0x5eb4ad(_0x26ef57);
    } catch (_0xf8e070) {
      _0x5eb4ad("Unable to generate");
      _0x1c5ecc(_0xf8e070);
    }
  });
  const _0x5b66fa = {
    pattern: "slsubsearch",
    react: '🔎',
    desc: "Search All Subtitles  from Web Site",
    category: "search",
    use: ".slsubsearch",
    filename: __filename
  };
  cmd(_0x5b66fa, async (_0x4a20ac, _0xd690f8, _0x34f4a0, {
    from: _0x17d0d2,
    l: _0x5c4da3,
    quoted: _0x299aea,
    body: _0x4ce0a9,
    isCmd: _0x3654cc,
    command: _0x403c28,
    args: _0x539a77,
    q: _0x3362eb,
    isGroup: _0x134179,
    sender: _0x38fa10,
    senderNumber: _0x26620e,
    botNumber2: _0x2182d1,
    botNumber: _0x261ac8,
    pushname: _0x1ced39,
    isMe: _0x3ff703,
    isOwner: _0x3e49bc,
    groupMetadata: _0x2a0cd6,
    groupName: _0x22c1fc,
    participants: _0x483ab6,
    groupAdmins: _0x84c7e4,
    isBotAdmins: _0x4341cf,
    isCreator: _0x5c72e4,
    isDev: _0x2f4c97,
    isAdmins: _0x59c717,
    reply: _0x391629
  }) => {
    function _0x545cba(_0x2af372, _0x18b2ac, _0x422382, _0x1d5f4f, _0x45ed6e) {
      return _0xa94a(_0x18b2ac + 0x313 - 0x0, _0x1d5f4f);
    }
    const _0x2e74da = {
      'ZIWbL': function (_0x2fdc85, _0xb160ee) {
        return _0x2fdc85(_0xb160ee);
      },
      'iqClX': "❗ *Please enter movie name to Search Subtitles*",
      'uMNMQ': "\n❍⚯────────────────────⚯❍\n        🌐  *𝚂𝙻 𝚂𝚄𝙱 𝚂𝙴𝙰𝚁𝙲𝙷 𝙻𝙸𝚂𝚃*  🌐\n ⚡ *X-BYTE ꜱʟ ꜱᴜʙᴛɪᴛʟᴇ ꜱᴇᴀʀᴄʜᴇʀ* ⚡\n❍⚯────────────────────⚯❍\n\n\n",
      'zJovs': "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png",
      'QyygV': function (_0x14185b, _0x2590a3) {
        return _0x14185b + _0x2590a3;
      },
      'rgKZH': "*X-BYTE ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ Hamza*",
      'NCNEB': function (_0x2b7324, _0x379bb8) {
        return _0x2b7324 + _0x379bb8;
      },
      'oVZCJ': "⛔ *Error accurated !!*\n\n"
    };
    function _0x1cfdd7(_0xd6a5c7, _0x4f2b97, _0x4feca3, _0x373dfc, _0x19d10f) {
      return _0xa94a(_0xd6a5c7 - 0x35a + 0x320, _0x373dfc);
    }
    function _0x34a514(_0x45ed36, _0x2de3ed, _0x2f082a, _0x5be6bf, _0x21f96f) {
      return _0xa94a(_0x45ed36 + 0x6e0 - 0x3a7, _0x5be6bf);
    }
    function _0x2b9994(_0x212b7d, _0x3fa4d2, _0xe11179, _0x48d996, _0x37a42e) {
      return _0xa94a(_0xe11179 - 0x251 + 0x320, _0x48d996);
    }
    function _0x38560d(_0x8bc772, _0x4dc2d4, _0x46ab94, _0x455b2b, _0xef39c6) {
      return _0xa94a(_0xef39c6 + 0x17 + 0x208, _0x4dc2d4);
    }
    try {
      if (!_0x3362eb) {
        return _0x391629("❗ *Please enter movie name to Search Subtitles*");
      }
      const _0x370537 = await subsearch(_0x3362eb);
      let _0x4fc2ab = "\n❍⚯────────────────────⚯❍\n        🌐  *𝚂𝙻 𝚂𝚄𝙱 𝚂𝙴𝙰𝚁𝙲𝙷 𝙻𝙸𝚂𝚃*  🌐\n ⚡ *X-BYTE ꜱʟ ꜱᴜʙᴛɪᴛʟᴇ ꜱᴇᴀʀᴄʜᴇʀ* ⚡\n❍⚯────────────────────⚯❍\n\n\n";
      for (let _0x1369c8 of _0x370537.results) {
        _0x4fc2ab += "📃 *" + _0x1369c8.no + " - " + _0x1369c8.title + "*\n🔗 _Link : " + _0x1369c8.link + "_ \n\n\n";
      }
      const _0x946ba5 = {
        url: "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png"
      };
      const _0xed5b5c = {
        quoted: _0xd690f8
      };
      await _0x4a20ac.sendMessage(_0x17d0d2, {
        'image': _0x946ba5,
        'caption': _0x4fc2ab + "*X-BYTE ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴇᴅ ʙʏ Hamza*"
      }, _0xed5b5c);
    } catch (_0x365bb6) {
      _0x391629("⛔ *Error accurated !!*\n\n" + _0x365bb6);
      _0x5c4da3(_0x365bb6);
    }
  });
  const _0x3c9416 = {
    pattern: "imdb",
    react: '🍎',
    desc: "To check imdb",
    category: "search",
    use: ".imdb"
  };
  cmd(_0x3c9416, async (_0x23e6a3, _0x34617f, _0xadb1d4, {
    from: _0x59fdad,
    l: _0x5606e1,
    quoted: _0x53186e,
    body: _0x44c8fc,
    isCmd: _0x4ff725,
    command: _0x140f63,
    args: _0x1f6801,
    q: _0x636037,
    isGroup: _0x3d0f77,
    sender: _0x31675f,
    senderNumber: _0x30b276,
    botNumber2: _0x10b89e,
    botNumber: _0x511c01,
    pushname: _0x2c6aca,
    isMe: _0x54b519,
    isOwner: _0x1396c8,
    groupMetadata: _0x57122d,
    groupName: _0x1da0c9,
    participants: _0x15d790,
    groupAdmins: _0x3c5602,
    isBotAdmins: _0x1be906,
    isAdmins: _0x1d7dc7,
    reply: _0x2313c
  }) => {
    function _0x2f5b54(_0x4b80f0, _0x3b0023, _0x3591f1, _0x306b7c, _0x397985) {
      return _0xa94a(_0x397985 + 0x184 + 0x208, _0x3591f1);
    }
    function _0x5e0ac1(_0x502aed, _0x1b0609, _0x4d91ad, _0x22c35c, _0x2e4e46) {
      return _0xa94a(_0x2e4e46 + 0x54f - 0x3a7, _0x22c35c);
    }
    function _0xb0735c(_0x76dfd9, _0x2c5684, _0x571c01, _0x59c0c6, _0x241277) {
      return _0xa94a(_0x2c5684 - 0x1e2 + 0x320, _0x241277);
    }
    const _0x3b24ff = {
      'ceKRz': function (_0x393435, _0x8eb472) {
        return _0x393435(_0x8eb472);
      },
      'RDoHd': function (_0x46898b, _0x7fcc3f) {
        return _0x46898b + _0x7fcc3f;
      },
      'LrPwf': "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n",
      'KvLUY': " ``` IMDB SEARCH```\n",
      'MmFBo': "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n",
      'NjyVT': function (_0x463d21, _0x29ce05) {
        return _0x463d21 + _0x29ce05;
      },
      'ZOQuo': "🎬Title      : ",
      'MEZmm': function (_0x320fde, _0x54a575) {
        return _0x320fde + _0x54a575;
      },
      'VuKNC': "📅Year       : ",
      'Vporh': function (_0x46fcd0, _0x592876) {
        return _0x46fcd0 + _0x592876;
      },
      'RbdFu': "⭐Rated      : ",
      'fEtpm': function (_0x59da23, _0x40e653) {
        return _0x59da23 + _0x40e653;
      },
      'Omogb': function (_0xaea20d, _0x2c4e32) {
        return _0xaea20d + _0x2c4e32;
      },
      'ijRxm': "📆Released   : ",
      'HinCQ': function (_0x197000, _0x3c83ee) {
        return _0x197000 + _0x3c83ee;
      },
      'XyrmZ': "⏳Runtime    : ",
      'vImAa': "🌀Genre      : ",
      'PQPMn': function (_0x25a60d, _0x3aa754) {
        return _0x25a60d + _0x3aa754;
      },
      'npyrI': function (_0x4039c5, _0x7b10e0) {
        return _0x4039c5 + _0x7b10e0;
      },
      'hRmDc': "👨🏻‍💻Director   : ",
      'uQpfp': function (_0x2c7a35, _0x17d361) {
        return _0x2c7a35 + _0x17d361;
      },
      'ikVEE': "✍Writer     : ",
      'wAjUo': function (_0x54a6e7, _0xaa098b) {
        return _0x54a6e7 + _0xaa098b;
      },
      'fWRUF': "👨Actors     : ",
      'dcONe': "📃Plot       : ",
      'vmxkC': function (_0x131673, _0x221f08) {
        return _0x131673 + _0x221f08;
      },
      'HfgqF': function (_0x47c1dd, _0xc9a5ff) {
        return _0x47c1dd + _0xc9a5ff;
      },
      'hMkvl': "🌐Language   : ",
      'OcpIW': "🌍Country    : ",
      'VwLMN': function (_0x100ab5, _0x5b9d21) {
        return _0x100ab5 + _0x5b9d21;
      },
      'jzAek': "🎖️Awards     : ",
      'lEEwo': "📦BoxOffice  : ",
      'EtStb': function (_0x1e056c, _0x44377a) {
        return _0x1e056c + _0x44377a;
      },
      'kAjsU': "🏙️Production : ",
      'tQyQx': function (_0x445540, _0x35aab9) {
        return _0x445540 + _0x35aab9;
      },
      'QYylm': "🌟imdbRating : ",
      'EzxCu': "✅imdbVotes  : "
    };
    function _0x3c838f(_0x57e421, _0x3fd6d7, _0x49dc0b, _0x1abde9, _0x288df9) {
      return _0xa94a(_0x57e421 + 0x65 - 0x0, _0x3fd6d7);
    }
    function _0x53c8bf(_0x2ef8b3, _0x1f86b0, _0x1ca2a6, _0x64db4f, _0x47c381) {
      return _0xa94a(_0x1f86b0 - 0x16a + 0x320, _0x47c381);
    }
    try {
      if (!_0x636037) {
        return _0x2313c("_Name a Series or movie");
      }
      let _0x36250f = await axios.get("http://www.omdbapi.com/?apikey=742b2d09&t=" + _0x636037 + "&plot=full");
      let _0x21be9a = '';
      console.log(_0x36250f.data);
      _0x21be9a += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n ``` IMDB SEARCH```\n⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";
      _0x21be9a += "🎬Title      : " + _0x36250f.data.Title + "\n";
      _0x21be9a += "📅Year       : " + _0x36250f.data.Year + "\n";
      _0x21be9a += "⭐Rated      : " + _0x36250f.data.Rated + "\n";
      _0x21be9a += "📆Released   : " + _0x36250f.data.Released + "\n";
      _0x21be9a += "⏳Runtime    : " + _0x36250f.data.Runtime + "\n";
      _0x21be9a += "🌀Genre      : " + _0x36250f.data.Genre + "\n";
      _0x21be9a += "👨🏻‍💻Director   : " + _0x36250f.data.Director + "\n";
      _0x21be9a += "✍Writer     : " + _0x36250f.data.Writer + "\n";
      _0x21be9a += "👨Actors     : " + _0x36250f.data.Actors + "\n";
      _0x21be9a += "📃Plot       : " + _0x36250f.data.Plot + "\n";
      _0x21be9a += "🌐Language   : " + _0x36250f.data.Language + "\n";
      _0x21be9a += "🌍Country    : " + _0x36250f.data.Country + "\n";
      _0x21be9a += "🎖️Awards     : " + _0x36250f.data.Awards + "\n";
      _0x21be9a += "📦BoxOffice  : " + _0x36250f.data.BoxOffice + "\n";
      _0x21be9a += "🏙️Production : " + _0x36250f.data.Production + "\n";
      _0x21be9a += "🌟imdbRating : " + _0x36250f.data.imdbRating + "\n";
      _0x21be9a += "✅imdbVotes  : " + _0x36250f.data.imdbVotes + '';
      const _0x3f2295 = {
        url: _0x36250f.data.Poster
      };
      const _0xbda4b6 = {
        image: _0x3f2295,
        caption: _0x21be9a
      };
      const _0x5c340d = {
        quoted: _0x34617f
      };
      _0x23e6a3.sendMessage(_0xadb1d4.chat, _0xbda4b6, _0x5c340d);
      const _0x57af4c = {
        text: '✅',
        key: _0x34617f.key
      };
      const _0x3c4605 = {
        react: _0x57af4c
      };
      await _0x23e6a3.sendMessage(_0x59fdad, _0x3c4605);
    } catch (_0x390c55) {
      _0x5606e1(_0x390c55);
    }
  });