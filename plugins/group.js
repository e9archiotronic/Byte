function _0x4b92(_0x54b3f8, _0x49d033) {
    const _0x2c4654 = _0x1981();
    _0x4b92 = function (_0x52037c, _0x1f4999) {
      _0x52037c = _0x52037c - 116;
      let _0x2340b5 = _0x2c4654[_0x52037c];
      if (_0x4b92.vnaZul === undefined) {
        var _0x45b1f7 = function (_0x54696f) {
          let _0x1b9af3 = '';
          let _0x1422ee = '';
          let _0x33b04d = 0;
          let _0x1ebc6c;
          let _0x2bddcb;
          for (let _0x48a4bc = 0; _0x2bddcb = _0x54696f.charAt(_0x48a4bc++); ~_0x2bddcb && (_0x1ebc6c = _0x33b04d % 4 ? _0x1ebc6c * 64 + _0x2bddcb : _0x2bddcb, _0x33b04d++ % 4) ? _0x1b9af3 += String.fromCharCode(255 & _0x1ebc6c >> (-2 * _0x33b04d & 6)) : 0) {
            _0x2bddcb = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x2bddcb);
          }
          let _0x34d6c4 = 0;
          for (let _0x5704a7 = _0x1b9af3.length; _0x34d6c4 < _0x5704a7; _0x34d6c4++) {
            _0x1422ee += '%' + ('00' + _0x1b9af3.charCodeAt(_0x34d6c4).toString(16)).slice(-2);
          }
          return decodeURIComponent(_0x1422ee);
        };
        const _0x439627 = function (_0x1c21b7, _0x20d5a2) {
          let _0x196f7e = [];
          let _0x3016ea = 0;
          let _0x2d45f2;
          let _0x3c06f5 = '';
          _0x1c21b7 = _0x45b1f7(_0x1c21b7);
          let _0x3f0998;
          for (_0x3f0998 = 0; _0x3f0998 < 256; _0x3f0998++) {
            _0x196f7e[_0x3f0998] = _0x3f0998;
          }
          for (_0x3f0998 = 0; _0x3f0998 < 256; _0x3f0998++) {
            _0x3016ea = (_0x3016ea + _0x196f7e[_0x3f0998] + _0x20d5a2.charCodeAt(_0x3f0998 % _0x20d5a2.length)) % 256;
            _0x2d45f2 = _0x196f7e[_0x3f0998];
            _0x196f7e[_0x3f0998] = _0x196f7e[_0x3016ea];
            _0x196f7e[_0x3016ea] = _0x2d45f2;
          }
          _0x3f0998 = 0;
          _0x3016ea = 0;
          for (let _0x4d6067 = 0; _0x4d6067 < _0x1c21b7.length; _0x4d6067++) {
            _0x3f0998 = (_0x3f0998 + 1) % 256;
            _0x3016ea = (_0x3016ea + _0x196f7e[_0x3f0998]) % 256;
            _0x2d45f2 = _0x196f7e[_0x3f0998];
            _0x196f7e[_0x3f0998] = _0x196f7e[_0x3016ea];
            _0x196f7e[_0x3016ea] = _0x2d45f2;
            _0x3c06f5 += String.fromCharCode(_0x1c21b7.charCodeAt(_0x4d6067) ^ _0x196f7e[(_0x196f7e[_0x3f0998] + _0x196f7e[_0x3016ea]) % 256]);
          }
          return _0x3c06f5;
        };
        _0x4b92.WvGErK = _0x439627;
        _0x54b3f8 = arguments;
        _0x4b92.vnaZul = true;
      }
      const _0xd9c957 = _0x2c4654[0];
      const _0x1b4722 = _0x52037c + _0xd9c957;
      const _0x41a179 = _0x54b3f8[_0x1b4722];
      if (!_0x41a179) {
        if (_0x4b92.aPOTch === undefined) {
          _0x4b92.aPOTch = true;
        }
        _0x2340b5 = _0x4b92.WvGErK(_0x2340b5, _0x1f4999);
        _0x54b3f8[_0x1b4722] = _0x2340b5;
      } else {
        _0x2340b5 = _0x41a179;
      }
      return _0x2340b5;
    };
    return _0x4b92(_0x54b3f8, _0x49d033);
  }
  (function (_0x4ecaca, _0x183ac4) {
    const _0x4d4abb = _0x4ecaca();
    while (true) {
      try {
        const _0x46ba09 = -parseInt(_0x4b92(428, '8Sa3')) / 1 + -parseInt(_0x4b92(859, '6vJJ')) / 2 * (parseInt(_0x4b92(1314, 'vmOF')) / 3) + parseInt(_0x4b92(583, '(@lp')) / 4 + parseInt(_0x4b92(882, '8ObD')) / 5 * (-parseInt(_0x4b92(342, 'E]Dy')) / 6) + parseInt(_0x4b92(721, 'W$JK')) / 7 * (-parseInt(_0x4b92(1079, 'rjxr')) / 8) + parseInt(_0x4b92(626, 'vQ1a')) / 9 + -parseInt(_0x4b92(1026, 'vAx8')) / 10 * (parseInt(_0x4b92(162, '%)v&')) / 11);
        if (_0x46ba09 === _0x183ac4) {
          break;
        } else {
          _0x4d4abb.push(_0x4d4abb.shift());
        }
      } catch (_0x124b7f) {
        _0x4d4abb.push(_0x4d4abb.shift());
      }
    }
  })(_0x1981, 473662);
  const config = require("../settings");
  const moment = require("moment-timezone");
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
  const {
    default: makeWASocket,
    useMultiFileAuthState,
    WA_DEFAULT_EPHEMERAL,
    jidNormalizedUser,
    proto,
    getDevice,
    generateWAMessageFromContent,
    fetchLatestBaileysVersion,
    makeInMemoryStore,
    getContentType,
    generateForwardMessageContent,
    downloadContentFromMessage,
    jidDecode
  } = require("@whiskeysockets/baileys");
  var tesadtag = '';
  if (config.LANG === 'SI') {
    tesadtag = "*මට tag කිරීමට text එකක් දෙන්න. !*";
  } else {
    tesadtag = "*Give me text to tag !*";
  }
  var descg = '';
  if (config.LANG === 'SI') {
    descg = "එය කණ්ඩායමේ සියලුම සාමාජිකයින් tag කරයි.";
  } else {
    descg = "It tag all members in group.";
  }
  var ONLGROUP = '';
  if (config.LANG === 'SI') {
    ONLGROUP = "*මෙය group නොවේ !*";
  } else {
    ONLGROUP = "*This is not a group !*";
  }
  var ADMIN = '';
  if (config.LANG === 'SI') {
    ADMIN = "ඔබ admin නොවේ !";
  } else {
    ADMIN = "You are not an admin !";
  }
  var tmsg = '';
  if (config.LANG === 'SI') {
    tmsg = "එය Bot link ලබා දෙයි.";
  } else {
    tmsg = "It gives bot link.";
  }
  var imgmsg = '';
  if (config.LANG === 'SI') {
    imgmsg = "මෙලෙස enable/disable value, උදා:- ${prefix}ephemeral enable.";
  } else {
    imgmsg = "Enter the enable/disable value, For Example ${prefix}ephemeral enable";
  }
  var BOTOW = '';
  if (config.LANG === 'SI') {
    BOTOW = "*ඔබ Bot's හිමිකරු හෝ  උපපරිපාලක නොවේ !*";
  } else {
    BOTOW = "*You are not bot's owner or moderator !*";
  }
  const _0x4f5d2b = {
    pattern: "kickall",
    react: '🔖',
    desc: "To kick all members in one time",
    category: "group",
    use: ".kickall",
    filename: __filename
  };
  cmd(_0x4f5d2b, async (_0x2ecbab, _0x3d51ba, _0x23be37, {
    from: _0x1d5833,
    prefix: _0x5ab678,
    l: _0x3ee97f,
    quoted: _0x337f3d,
    body: _0x34e95e,
    isCmd: _0x41d5cb,
    command: _0x9e9b0d,
    args: _0x2bc6d8,
    q: _0x4275db,
    isGroup: _0x4bf5d0,
    sender: _0x234871,
    senderNumber: _0x26c933,
    botNumber2: _0x56558b,
    botNumber: _0xd1b8cb,
    pushname: _0x59a381,
    isMe: _0x32e88b,
    isOwner: _0x339503,
    groupMetadata: _0x2f7314,
    groupName: _0x4f971f,
    participants: _0xc3d95a,
    groupAdmins: _0x1a38f8,
    isBotAdmins: _0x3b4b69,
    isAdmins: _0x5f1f82,
    reply: _0x3aede4
  }) => {
    try {
      if (!_0x4bf5d0) {
        return _0x3aede4(ONLGROUP);
      }
      if (!_0x5f1f82) {
        return _0x3aede4(ADMIN);
      }
      for (let _0x38778e of _0xc3d95a) {
        await sleep(1000);
        if (_0x38778e.id == _0xd1b8cb + "@s.whatsapp.net") {
          return;
        }
        if (_0x38778e.id == owner + "@s.whatsapp.net") {
          return;
        }
        await _0x2ecbab.groupParticipantsUpdate(_0x1d5833, [_0x38778e.id], "remove");
        await _0x2ecbab.sendText(_0x1d5833, '*' + _0x38778e.id.split('@')[0] + " Kick out !!!*");
      }
      const _0x518820 = {
        text: '✅',
        key: _0x3d51ba.key
      };
      const _0x1b9f35 = {
        react: _0x518820
      };
      await _0x2ecbab.sendMessage(_0x1d5833, _0x1b9f35);
    } catch (_0x33763a) {
      _0x3aede4("*Error !!*");
      _0x3ee97f(_0x33763a);
    }
  });
  const _0x3686cd = {};
  function _0x31b925(_0xbf00c, _0xd954a6, _0x37382d, _0x53f375, _0x463bae) {
    return _0x4b92(_0xbf00c - 0x24d, _0x37382d);
  }
  _0x3686cd.pattern = "alljid";
  _0x3686cd.react = '🔖';
  _0x3686cd.desc = "To take all members jid";
  _0x3686cd.category = "group";
  _0x3686cd.use = ".alljid";
  _0x3686cd.filename = __filename;
  cmd(_0x3686cd, async (_0x328cc7, _0x23576c, _0x4d457c, {
    from: _0x28c36f,
    prefix: _0x5bdbb2,
    l: _0x823237,
    quoted: _0x287b44,
    body: _0x20bdb6,
    isCmd: _0x5700cc,
    command: _0x3e4b3d,
    args: _0x3331fe,
    q: _0xb1009b,
    isGroup: _0x3b9eb1,
    sender: _0x315d23,
    senderNumber: _0xbd359f,
    botNumber2: _0x1ff6b5,
    botNumber: _0x4740a3,
    pushname: _0x4e43b5,
    isMe: _0x2877b3,
    isOwner: _0x55f1ea,
    groupMetadata: _0x22338a,
    groupName: _0x1a8165,
    participants: _0x349276,
    groupAdmins: _0x150daa,
    isBotAdmins: _0x49fc20,
    isAdmins: _0x5e1426,
    reply: _0xa16429
  }) => {
    try {
      if (!_0x3b9eb1) {
        return _0xa16429(ONLGROUP);
      }
      if (!_0x5e1426) {
        return _0xa16429(ADMIN);
      }
      let _0x5c9dc9 = '';
      let _0x9ce2fc = _0xb1009b.split(" ")[0];
      if (_0x9ce2fc === "members" || _0x9ce2fc === "member") {
        const _0x279ce8 = _0x23576c.metadata.participants || {};
        for (let _0x554263 of _0x279ce8) {
          _0x5c9dc9 += "📍 " + _0x554263.id + "\n";
        }
        if (_0x5c9dc9) {
          _0x23576c.reply("*「 LIST OF GROUP MEMBER'S JID 」*\n\n" + _0x5c9dc9);
        } else {
          _0x23576c.reply("*Request Denied!*");
        }
      } else {
        if (_0x9ce2fc == "user" || _0x9ce2fc == 'pm' || _0x9ce2fc == 'pc') {
          let _0x33ea5c = await store.chats.all().filter(_0x358e03 => _0x358e03.id.endsWith(".net")).map(_0x115389 => _0x115389);
          for (let _0x3dd9b1 of _0x33ea5c) {
            _0x5c9dc9 += "📍 " + _0x3dd9b1.id + "\n";
          }
          if (_0x5c9dc9) {
            _0x23576c.reply("*「 LIST OF PERSONAL CHAT JIDS 」*\n\nTotal " + _0x33ea5c.length + " users are text in personal chat.\n\n" + _0x5c9dc9);
          } else {
            _0x23576c.reply("*Request Denied!*");
          }
        } else {
          if (_0x9ce2fc == "group" || _0x9ce2fc == "groups" || _0x9ce2fc == 'gc') {
            n = await _0x23576c.bot.groupFetchAllParticipating();
            const _0x2b1704 = Object.entries(n).slice(0).map(_0x2de4c1 => _0x2de4c1[1]);
            for (var _0x21d731 of _0x2b1704.map(_0x7841fd => _0x7841fd.id)) {
              _0x5c9dc9 += "📍 " + _0x21d731 + "\n";
            }
            if (_0x5c9dc9) {
              _0x23576c.reply("*「 LIST OF GROUP CHAT JIDS」*\n\n" + _0x5c9dc9);
            } else {
              _0x23576c.reply("*Request Denied!*");
            }
          } else {
            return await _0x23576c.reply("*Use " + _0x5bdbb2 + "alljid pc| gc| member!*");
          }
        }
      }
      const _0x13d007 = {
        text: '✅',
        key: _0x23576c.key
      };
      const _0x4b6e06 = {
        react: _0x13d007
      };
      await _0x328cc7.sendMessage(_0x28c36f, _0x4b6e06);
    } catch (_0x3cae25) {
      _0xa16429("*Error !!*");
      _0x823237(_0x3cae25);
    }
  });
  const _0x1c3684 = {
    pattern: "opentime",
    react: '🔖',
    desc: "To open group to a time",
    category: "group",
    use: ".opentime",
    filename: __filename
  };
  cmd(_0x1c3684, async (_0x10593c, _0x3ee217, _0x10e61a, {
    from: _0x31e486,
    prefix: _0x42e987,
    l: _0x21523d,
    quoted: _0x997e9d,
    body: _0x2ca27b,
    isCmd: _0x37d008,
    command: _0x559dcc,
    args: _0x1e90e5,
    q: _0x15868d,
    isGroup: _0xad6da8,
    sender: _0x58830a,
    senderNumber: _0x2c6995,
    botNumber2: _0xc1fce,
    botNumber: _0x561f21,
    pushname: _0x2220a1,
    isMe: _0x4e00fb,
    isOwner: _0xc3428,
    groupMetadata: _0x40f4cb,
    groupName: _0xc4c1ed,
    participants: _0x5344a9,
    groupAdmins: _0x1bd7cc,
    isBotAdmins: _0x54b620,
    isAdmins: _0x3e63c2,
    reply: _0x1796ac
  }) => {
    try {
      if (!_0xad6da8) {
        return _0x1796ac(ONLGROUP);
      }
      if (!_0x3e63c2) {
        return _0x1796ac(ADMIN);
      }
      if (_0x1e90e5[1] == "second") {
        var _0x8a8ba3 = _0x1e90e5[0] * "1000";
      } else {
        if (_0x1e90e5[1] == "minute") {
          var _0x8a8ba3 = _0x1e90e5[0] * "60000";
        } else {
          if (_0x1e90e5[1] == "hour") {
            var _0x8a8ba3 = _0x1e90e5[0] * "3600000";
          } else {
            if (_0x1e90e5[1] == "day") {
              var _0x8a8ba3 = _0x1e90e5[0] * "86400000";
            } else {
              return _0x1796ac("*select:*\nsecond\nminute\nhour\n\n*example*\n10 second");
            }
          }
        }
      }
      _0x1796ac("Open time " + _0x15868d + " starting from now");
      setTimeout(() => {
        _0x10593c.groupSettingUpdate(_0x31e486, "not_announcement");
        _0x1796ac("*Open time* the group was opened by admin\n now members can send messages");
      }, _0x8a8ba3);
      const _0x52cb0a = {
        text: '✅',
        key: _0x3ee217.key
      };
      const _0x427ef9 = {
        react: _0x52cb0a
      };
      await _0x10593c.sendMessage(_0x31e486, _0x427ef9);
    } catch (_0x33dddb) {
      _0x1796ac("*Error !!*");
      _0x21523d(_0x33dddb);
    }
  });
  const _0x41d63a = {
    pattern: "closetime",
    react: '🔖',
    desc: "To close group to a time",
    category: "group",
    use: ".closstime",
    filename: __filename
  };
  cmd(_0x41d63a, async (_0xdaf534, _0x42aae8, _0x329301, {
    from: _0x163bfc,
    prefix: _0x5d4336,
    l: _0x30e405,
    quoted: _0x2825a2,
    body: _0x278b1e,
    isCmd: _0x4bdf2f,
    command: _0x3094d4,
    args: _0x474deb,
    q: _0x358a61,
    isGroup: _0x25f79b,
    sender: _0xba61e6,
    senderNumber: _0x2aa0e6,
    botNumber2: _0x8a194f,
    botNumber: _0x10452e,
    pushname: _0x1b2e1e,
    isMe: _0x310637,
    isOwner: _0x1e78d6,
    groupMetadata: _0x298500,
    groupName: _0x435357,
    participants: _0x4c1871,
    groupAdmins: _0x1f5dec,
    isBotAdmins: _0x5b7b09,
    isAdmins: _0x18f692,
    reply: _0x244b9a
  }) => {
    try {
      if (!_0x25f79b) {
        return _0x244b9a(ONLGROUP);
      }
      if (!_0x18f692) {
        return _0x244b9a(ADMIN);
      }
      if (_0x474deb[1] == "second") {
        var _0x319f37 = _0x474deb[0] * "1000";
      } else {
        if (_0x474deb[1] == "minute") {
          var _0x319f37 = _0x474deb[0] * "60000";
        } else {
          if (_0x474deb[1] == "hour") {
            var _0x319f37 = _0x474deb[0] * "3600000";
          } else {
            if (_0x474deb[1] == "day") {
              var _0x319f37 = _0x474deb[0] * "86400000";
            } else {
              return _0x244b9a("*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second");
            }
          }
        }
      }
      _0x244b9a("Close time " + _0x358a61 + " starting from now");
      setTimeout(() => {
        _0xdaf534.groupSettingUpdate(_0x163bfc, "announcement");
        _0x244b9a("*Close time* group closed by admin\nnow only admin can send messages");
      }, _0x319f37);
      const _0x380994 = {
        text: '✅',
        key: _0x42aae8.key
      };
      const _0x1a67a3 = {
        react: _0x380994
      };
      await _0xdaf534.sendMessage(_0x163bfc, _0x1a67a3);
    } catch (_0x4a456c) {
      _0x244b9a("*Error !!*");
      _0x30e405(_0x4a456c);
    }
  });
  const _0x50e7be = {
    pattern: "sendcontact",
    react: '🔖',
    desc: "To see group contacts",
    category: "group",
    use: ".sendcontact",
    filename: __filename
  };
  cmd(_0x50e7be, async (_0xceec44, _0x1b7a66, _0x17da30, {
    from: _0x546e39,
    prefix: _0x5388ca,
    l: _0x5a4d13,
    quoted: _0x490ded,
    body: _0x2a7d7c,
    isCmd: _0x1fced6,
    command: _0x23bcb1,
    args: _0x5a125b,
    q: _0x1dfbb0,
    isGroup: _0x5349a4,
    sender: _0x1bcb7e,
    senderNumber: _0x54db04,
    botNumber2: _0x56cfd0,
    botNumber: _0x5934d5,
    pushname: _0x46e77d,
    isMe: _0x31233e,
    isOwner: _0x62ffb1,
    groupMetadata: _0x52dd84,
    groupName: _0x1d7c82,
    participants: _0x5afe20,
    groupAdmins: _0x14be2a,
    isBotAdmins: _0x9a3368,
    isAdmins: _0xf9877f,
    reply: _0x2fc4ad
  }) => {
    try {
      if (!_0x5349a4) {
        return _0x2fc4ad(ONLGROUP);
      }
      if (!_0xf9877f) {
        return _0x2fc4ad(ADMIN);
      }
      if (!_0x1b7a66.mentionedJid) {
        return _0x2fc4ad("\nUse like this\n Example:.sendcontact @tag|name");
      }
      let _0x3c1401 = _0x1dfbb0.split(" ")[1] ? _0x1dfbb0.split(" ")[1] : "Contact";
      let _0x126cc9 = {
        'displayName': "Contact",
        'contacts': [{
          'displayName': _0x3c1401,
          'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:;" + _0x3c1401 + ";;;\nFN:" + _0x3c1401 + "\nitem1.TEL;waid=" + _0x1b7a66.mentionedJid.split('@')[0] + ':' + _0x1b7a66.mentionedJid.split('@')[0] + "\nitem1.X-ABLabel:Mobile\nEND:VCARD"
        }]
      };
      const _0x2e2fdb = {
        contacts: _0x126cc9
      };
      const _0x2bb0ae = {
        ephemeralExpiration: 0x15180
      };
      _0xceec44.sendMessage(_0x1b7a66.chat, _0x2e2fdb, _0x2bb0ae);
      const _0x286f21 = {
        text: '✅',
        key: _0x1b7a66.key
      };
      const _0x42ec06 = {
        react: _0x286f21
      };
      await _0xceec44.sendMessage(_0x546e39, _0x42ec06);
    } catch (_0x431bcd) {
      _0x2fc4ad("*Error !!*");
      _0x5a4d13(_0x431bcd);
    }
  });
  const _0x555888 = {
    pattern: "savecontact",
    react: '🔖',
    desc: "To save group contacts",
    category: "group",
    use: ".savecontact",
    filename: __filename
  };
  cmd(_0x555888, async (_0x45d70b, _0x167503, _0x1ac953, {
    from: _0x14cc43,
    prefix: _0x46713c,
    l: _0x241830,
    quoted: _0x4c3e95,
    body: _0x48e4d1,
    isCmd: _0x4fdc22,
    command: _0x457518,
    args: _0x27bb55,
    q: _0x4c476a,
    isGroup: _0x24e565,
    sender: _0x4fb92c,
    senderNumber: _0x78241e,
    botNumber2: _0x59e9bc,
    botNumber: _0x13a8f2,
    pushname: _0x4fa8d4,
    isMe: _0x39d283,
    isOwner: _0x496b35,
    groupMetadata: _0x80777f,
    groupName: _0x6088e8,
    participants: _0x3d9fb0,
    groupAdmins: _0x855635,
    isBotAdmins: _0x3e4763,
    isAdmins: _0x5c9a96,
    reply: _0x49d255
  }) => {
    try {
      if (!_0x24e565) {
        return _0x49d255(ONLGROUP);
      }
      if (!_0x5c9a96) {
        return _0x49d255(ADMIN);
      }
      let _0x197f96 = await _0x45d70b.groupMetadata(_0x1ac953.chat);
      vcard = '';
      noPort = 0;
      for (let _0xcfdd4b of _0x197f96.participants) {
        vcard += "BEGIN:VCARD\nVERSION:3.0\nFN:[" + noPort++ + "] +" + _0xcfdd4b.id.split('@')[0] + "\nTEL;type=CELL;type=VOICE;waid=" + _0xcfdd4b.id.split('@')[0] + ':+' + _0xcfdd4b.id.split('@')[0] + "\nEND:VCARD\n";
      }
      _0x49d255("\nBe patient bro, saving... " + _0x197f96.participants.length + " contact");
      require('fs').writeFileSync("./contacts.vcf", vcard.trim());
      await sleep(2000);
      const _0x8112f3 = {
        ephemeralExpiration: 0x15180,
        quoted: _0x1ac953
      };
      _0x45d70b.sendMessage(_0x167503.chat, {
        'document': require('fs').readFileSync("./contacts.vcf"),
        'mimetype': "text/vcard",
        'fileName': "Contact.vcf",
        'caption': "\nSucceed\nGroup: *" + _0x197f96.subject + "*\nContact: *" + _0x197f96.participants.length + '*'
      }, _0x8112f3);
      require('fs').unlinkSync("./contacts.vcf");
      const _0x15d59c = {
        text: '✅',
        key: _0x167503.key
      };
      const _0x133b17 = {
        react: _0x15d59c
      };
      await _0x45d70b.sendMessage(_0x14cc43, _0x133b17);
    } catch (_0x5baee6) {
      _0x49d255("*Error !!*");
      _0x241830(_0x5baee6);
    }
  });
  const _0x1c22a3 = {
    pattern: "getcontact",
    react: '🔖',
    desc: "To get group contacts",
    category: "group",
    use: ".getcontact",
    filename: __filename
  };
  cmd(_0x1c22a3, async (_0x1a36bd, _0xae9011, _0x3467a6, {
    from: _0x1bd365,
    prefix: _0xf0ea01,
    l: _0x95d2c9,
    quoted: _0x1c1aa6,
    body: _0x58b51c,
    isCmd: _0x12da0b,
    command: _0xef74b5,
    args: _0x3565e8,
    q: _0x6bdc21,
    isGroup: _0x4ec139,
    sender: _0x3172b3,
    senderNumber: _0x417eb9,
    botNumber2: _0x435ec6,
    botNumber: _0x2c9073,
    pushname: _0x2cf496,
    isMe: _0xc68f9e,
    isOwner: _0x205e59,
    groupMetadata: _0x2ea275,
    groupName: _0x45272a,
    participants: _0x2a6710,
    groupAdmins: _0x1b3e54,
    isBotAdmins: _0x218336,
    isAdmins: _0x507cfd,
    reply: _0x3dbc0a
  }) => {
    try {
      if (!_0x4ec139) {
        return _0x3dbc0a(ONLGROUP);
      }
      if (!_0x507cfd) {
        return _0x3dbc0a(ADMIN);
      }
      if (!_0xae9011.mentionedJid) {
        return _0x3dbc0a("\nUse like this\n Example:.contacttag @tag|name");
      }
      let _0x4f9afd = _0x6bdc21.split(" ")[1] ? _0x6bdc21.split(" ")[1] : "Contact";
      let _0x3e1b64 = {
        'displayName': "Contact",
        'contacts': [{
          'displayName': _0x4f9afd,
          'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:;" + _0x4f9afd + ";;;\nFN:" + _0x4f9afd + "\nitem1.TEL;waid=" + _0x3467a6.mentionedJid.split('@') + ':' + _0xae9011.mentionedJid[0].split('@') + "\nitem1.X-ABLabel:Mobile\nEND:VCARD"
        }]
      };
      const _0x559a87 = {
        ephemeralExpiration: 0x15180
      };
      _0x1a36bd.sendMessage(_0xae9011.chat, {
        'contacts': _0x3e1b64,
        'mentions': _0x2a6710.map(_0xcb7689 => _0xcb7689.id)
      }, _0x559a87);
      const _0x400e52 = {
        text: '✅',
        key: _0xae9011.key
      };
      const _0x42436a = {
        react: _0x400e52
      };
      await _0x1a36bd.sendMessage(_0x1bd365, _0x42436a);
    } catch (_0x2ef328) {
      _0x3dbc0a("*Error !!*");
      _0x95d2c9(_0x2ef328);
    }
  });
  const _0x548a40 = {
    pattern: "contacttag",
    react: '🔖',
    desc: "To tag group contacts",
    category: "group",
    use: ".contacttag",
    filename: __filename
  };
  cmd(_0x548a40, async (_0x5b7def, _0x5c7119, _0x214f41, {
    from: _0x59c9f7,
    prefix: _0x3bcc7e,
    l: _0x33fe22,
    quoted: _0x3fe0f3,
    body: _0xb522f,
    isCmd: _0x38c6a2,
    command: _0x4a9749,
    args: _0x3ebb0d,
    q: _0x3ac52e,
    isGroup: _0x9ff6ba,
    sender: _0x531a74,
    senderNumber: _0x2a29ba,
    botNumber2: _0x1986e7,
    botNumber: _0x485aaf,
    pushname: _0x5a2ba6,
    isMe: _0x44e02a,
    isOwner: _0x5a4f20,
    groupMetadata: _0x16be5e,
    groupName: _0x8bfbd1,
    participants: _0x3b93d4,
    groupAdmins: _0xde52a8,
    isBotAdmins: _0x35ed89,
    isAdmins: _0x5aaffb,
    reply: _0x8e2795
  }) => {
    try {
      if (!_0x9ff6ba) {
        return _0x8e2795(ONLGROUP);
      }
      if (!_0x5aaffb) {
        return _0x8e2795(ADMIN);
      }
      const _0x29af8a = {
        text: "\nGroup: *" + _0x16be5e.subject + "*\nMember: *" + _0x3b93d4.length + '*'
      };
      izumibigpp = await _0x5b7def.sendMessage(_0x5c7119.chat, _0x29af8a, {
        'quoted': _0x5c7119,
        'ephemeralExpiration': 0x15180
      });
      await sleep(1000);
      _0x5b7def.sendContact(_0x5c7119.chat, _0x3b93d4.map(_0x4122c7 => _0x4122c7.id), izumibigpp);
      const _0x3ce473 = {
        text: '✅',
        key: _0x5c7119.key
      };
      const _0x510cb7 = {
        react: _0x3ce473
      };
      await _0x5b7def.sendMessage(_0x59c9f7, _0x510cb7);
    } catch (_0x1b8518) {
      _0x8e2795("*Error !!*");
      _0x33fe22(_0x1b8518);
    }
  });
  const _0xf60229 = {
    pattern: "creatgc",
    react: '🔖',
    desc: "To create a group",
    category: "group",
    use: ".creatgc",
    filename: __filename
  };
  cmd(_0xf60229, async (_0x7c4f40, _0x3015db, _0x6c1958, {
    from: _0x521bec,
    prefix: _0x261c93,
    l: _0x30367e,
    quoted: _0x39a0d7,
    body: _0x11393e,
    isCmd: _0x54b707,
    command: _0xe74864,
    args: _0x2be2b1,
    q: _0x5d1d51,
    isGroup: _0x3f5ba1,
    sender: _0x28590d,
    senderNumber: _0x13400c,
    botNumber2: _0x45cdcf,
    botNumber: _0x5a2699,
    pushname: _0x9c9ed2,
    isMe: _0x4ca767,
    isOwner: _0x3942ae,
    groupMetadata: _0x4bcdc4,
    groupName: _0x13e393,
    participants: _0x1653f7,
    groupAdmins: _0x3b4958,
    isBotAdmins: _0x51fe52,
    isAdmins: _0x5bcaa7,
    reply: _0x543c6
  }) => {
    try {
      if (!_0x4ca767) {
        return await _0x543c6(BOTOW);
      }
      if (!_0x2be2b1.join(" ")) {
        return _0x543c6("Use " + (_0x261c93 + _0xe74864) + " groupname");
      }
      let _0x2c8b66 = await _0x7c4f40.groupCreate(_0x2be2b1.join(" "), []);
      let _0x33f655 = await _0x7c4f40.groupInviteCode(_0x2c8b66.id);
      const _0x30b109 = "     「 Create Group 」\n\n▸ Name : " + _0x2c8b66.subject + "\n▸ Owner : @" + _0x2c8b66.owner.split('@')[0] + "\n▸ Creation : " + moment(_0x2c8b66.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss") + "\n\nhttps://chat.whatsapp.com/" + _0x33f655;
      const _0x51164f = {
        quoted: _0x3015db
      };
      _0x7c4f40.sendMessage(_0x6c1958.chat, {
        'text': _0x30b109,
        'mentions': await _0x7c4f40.parseMention(_0x30b109)
      }, _0x51164f);
      const _0x4e45c6 = {
        text: '✅',
        key: _0x3015db.key
      };
      const _0xf60ad3 = {
        react: _0x4e45c6
      };
      await _0x7c4f40.sendMessage(_0x521bec, _0xf60ad3);
    } catch (_0x1acf8d) {
      _0x543c6("*Error !!*");
      _0x30367e(_0x1acf8d);
    }
  });
  const _0x583f7e = {
    pattern: "hidetag",
    react: '🔖',
    desc: descg,
    category: "group",
    use: ".hidetag <hi>",
    filename: __filename
  };
  cmd(_0x583f7e, async (_0x451cbd, _0x410422, _0x378c25, {
    from: _0x5efcc5,
    prefix: _0x2c59b9,
    l: _0x358d22,
    quoted: _0x59d6cd,
    body: _0x4a218e,
    isCmd: _0x1a3e4c,
    command: _0x470ea8,
    args: _0x4334d2,
    q: _0x4e1d08,
    isGroup: _0x365cb2,
    sender: _0x5c691d,
    senderNumber: _0x5d463e,
    botNumber2: _0x5bd1fc,
    botNumber: _0x19e6ff,
    pushname: _0x5f1d89,
    isMe: _0x4583a0,
    isOwner: _0x891542,
    groupMetadata: _0x56839f,
    groupName: _0xd164c3,
    participants: _0x27cb61,
    groupAdmins: _0x50864d,
    isBotAdmins: _0x1fdad9,
    isAdmins: _0x4cb841,
    reply: _0xd12817
  }) => {
    try {
      if (!_0x365cb2) {
        return _0xd12817(ONLGROUP);
      }
      if (!_0x4cb841) {
        return _0xd12817(ADMIN);
      }
      if (!_0x4e1d08) {
        return await _0xd12817(tesadtag);
      }
      _0x451cbd.sendMessage(_0x5efcc5, {
        'text': _0x4e1d08 ? _0x4e1d08 : '',
        'mentions': _0x27cb61.map(_0x5d6097 => _0x5d6097.id)
      });
      const _0x3264e7 = {
        text: '✅',
        key: _0x410422.key
      };
      const _0x2624be = {
        react: _0x3264e7
      };
      await _0x451cbd.sendMessage(_0x5efcc5, _0x2624be);
    } catch (_0xe4cb4d) {
      _0xd12817("*Error !!*");
      _0x358d22(_0xe4cb4d);
    }
  });
  const _0x10aa85 = {
    pattern: "tagall",
    react: '🔖',
    desc: descg,
    category: "group",
    use: ".hidetag <hi>",
    filename: __filename
  };
  cmd(_0x10aa85, async (_0x7216e7, _0x39b082, _0x1a3efe, {
    from: _0x286b31,
    prefix: _0x267659,
    l: _0x68f277,
    quoted: _0x50b5ff,
    body: _0x18a66f,
    isCmd: _0x183eac,
    command: _0x38d53f,
    args: _0x1c5349,
    q: _0x4bb25b,
    isGroup: _0x4ce20c,
    sender: _0x3bb963,
    senderNumber: _0x5e9624,
    botNumber2: _0x19da14,
    botNumber: _0x3e8f98,
    pushname: _0x3dda38,
    isMe: _0x3263e2,
    isOwner: _0x21c8e6,
    groupMetadata: _0x14a217,
    groupName: _0x3f3599,
    participants: _0x4fa25d,
    groupAdmins: _0x36dfbd,
    isBotAdmins: _0x190972,
    isAdmins: _0x87eeed,
    reply: _0x42339b
  }) => {
    try {
      if (!_0x4ce20c) {
        return _0x42339b(ONLGROUP);
      }
      if (!_0x190972) {
        return _0x42339b(botAdmin);
      }
      if (!_0x87eeed) {
        return _0x42339b(ADMIN);
      }
      let _0x2ea8d2 = " *ＧＲＯＵＰ  ＮＯＴＩＦＹ*\n                   \n*𝐌𝐄𝐒𝐒𝐀𝐆𝐄 : " + (_0x4bb25b ? _0x4bb25b : "blank") + "*\n\n";
      for (let _0xc1d1de of _0x4fa25d) {
        _0x2ea8d2 += "🔵 @" + _0xc1d1de.id.split('@')[0] + "\n";
      }
      _0x7216e7.sendMessage(_0x1a3efe.chat, {
        'text': _0x2ea8d2,
        'mentions': _0x4fa25d.map(_0xe10c5b => _0xe10c5b.id)
      });
      const _0x277601 = {
        text: '✅',
        key: _0x39b082.key
      };
      const _0x1c44e8 = {
        react: _0x277601
      };
      await _0x7216e7.sendMessage(_0x286b31, _0x1c44e8);
    } catch (_0x49d1d4) {
      _0x42339b('');
      _0x68f277(_0x49d1d4);
    }
  });
  const _0x3603ea = {};
  function _0x1981() {
    const _0x760a01 = ['W4rsgqiC', 'vCocW77cJSku', 'W6iJxSoOoa', 'W6pcUW52sq', 'WQSDx8oEW7K', 'W6i2wCkNjq', 'BmoKW5JcRG', 'Amo4uSk/WQ0', 'W5RcO8kSW6tdHW', '44cLhM8b', 'W7fZWRFdSw4', 'pmkgW5iyW7m', 'cCkXWQrZgq', 'W6u3zSkqhq', 'qmo5rWJcKW', 'WOLIrCkkWRm', 'WRC9xmk3fq', 'mmo6WPtdV8kN', 'W5FdLmozWPpdSa', 'hgmmW5tdMq', 'WODPWPxdR8o0', 'rmkxq8kWWQa', 'W7fYWQBdPa', 'WPf7W6ldOCkN', 'adf8W5dcOq', 'BHntCrm', 'WReXuCkOhq', 'BCoUW4G', 'E8opvCkcW5q', 'W4hdNSkCWPlcPa', 'oXpdI1hdOG', 'WQddQCkVwmk7', 'hCo3qa/cTq', 'uSkjWQrToq', 'W57cOt02EW', 'qmoHW4BcP8o0', 'hmkLWRe', 'WOHlW44qDq', 'C8oht8oh4lwf', 'hd9dW7xcGa', 'WQyydW', 'W7lcQ8km', 'xmowWQ8EW74', 'WOBdISk3rCkU', 'ut/cMx3cIq', 'WPycWOruFW', 'BmkoamogW54', 'W7XassyD', 't8oEWQSlW7u', 'WPxdL8oUgmoM', 'wmoMh8oYW7u', 'WQWIumoCW7O', 'WORcJ0ZdKGm', 'WOydWPZdUmk7', 'WPDwW7/dUmkw', 'uuelB1y', '4lE64lEi4lAJ4lAN4lAb', 'WRu+wmkqWPe', 'WPvmWOBdUmkO', 'WOzbWPFcT8of', 'CHuJ', 'W6/cVmkfW45t', 'es1wkhS', 'bmkAWP5BBW', 'W6Swu8kUjW', 'W7XdBXCt', 'W5TjEq', 'W4jAxCkDWOy', 'WQXeWOpdPCkf', 'W6rezCk7WPa', 'pZ58W7ZcSG', 'WOFdT0iBW7y', 'chm3raC', 'W40CzSkRWQG', 'W4fgwcqS', 'tSkYdKVdMa', 'kxKyWOZdTa', '8yQbNqm', 'WR/cJGVdK0y', 'WPjiWOhdVG', 'W4vFzq', 'esvKW6K', 'uILlW7BcKq', 'ueBdMhCY', 'w8kHW7uWW5a', 'WPrgW7hdR8kh', 'W4nnCmoRWPG', 'WQJcUINdTbu', 'kGmTW4VcRW', 'W5lcICk5W73dNG', 'WQviWOBdQCkM', 'WOhcKcPoFa', 'nmkEWP5kyq', 'WOnPWOBdUSo9', 'WRGGA8kKWRC', 'W5jss1Lj', 'WQBdHwCNW6q', 'WOTmW4arhW', 'WQCMkLJdGG', 'ts7cIhlcNa', 'W6aMemk7pW', 'vCokW4NcLmoB', 'W4v3xSkMWQq', 'WPPmbSoTkG', 'gCoKW4vJWOi', 'aIvspxa', 'WOWZEW', 'fmkKWRffxq', 'WODdW5eqmG', 'WQrhECk6WOy', 'W4CJASkPWQy', 'kcTEegu', '8jIvIY1i', 'WR3dH1e8W4m', 'W75TtCoEW5C', 'Fmo6uW', 'W4O9muJdNW', 'kMGnWPldMa', 'WRmdhuNdNG', 'W5T/WQ7dNhm', 'b3GmWPO', 'WPjUza', 'W51jBSoVWPq', 'WQCsx8kgWQy', 'W6aIjehdHW', 'Aq1O', 'fXnYCJO', 'WRtcSeqLW60', 'dba0', 'W791F8k4WOy', 'bcvslhe', 'rcGcA1a', 'z8omW6VcR8oz', 's0bFivG', 'W4XfqSoRWRa', 'scyfz2S', 'noc0LUc2HSohWOa', 'W7ddRSkm', 'wmoLWPu4W6S', 'W6BdKmolWOBcIG', 'WP1lW6ycbW', 'WPVcQGVdGGK', 'W7feuajg', 'nG1OzmkQ', 'W7rZWQVdTw4', 'l8ogFWlcNW', '77+6776K77Yk772X7767', 'WPlcOsldSq', 'W60oaNZcIq', 'icb+W4FcVq', 'WOeEF8oGW5G', 'WP88umkZbW', 'W7VcUSkbW5VdIa', 'W4mKvCkkaG', 'isfspxW', 'ktnvyHG', 'sCoeWQGlW7W', 'Bd4ZtGa', 'WRDjWP/dTmkH', 'maf0BKy', 'pmkLWPHEFq', 'WRNdTuSnW4O', 'uZ9vW7JcGG', 'WRD9C8kxW6K', 'y8oNWQmbW5e', 'W6rUv8o1WQW', 'qIviW77dHq', 'W5fdAa8X', '4lsD4lwU4lseW4hGTjm', 'WQyEz8kyeq', 'bmktWOTk', 'WRvRW4hdRSk+', 's1urBJu', 'WQm8jfK', 'rbufC14', 'F8oAuSkgWOq', 'WP41yCkHWQy', 'g8osWQVdM8k3', 'DGpcU3FcNa', 'WPKqh8krlq', 'eIDjBaO', 'xSoHWQO/W6K', 'WQS4D8ohW6S', 'd8k7sG', 'WPvfWPpdQq', 'xZrBW7ZcLq', 'WOfrW7/dUCkd', 'W5eyq8kDlW', 'fZjSW6FcJa', 'W4HWubK7', 'E8kAW5WaW6y', 'amoQW4Kdqa', 'W5nnDmo4WPu', 'WOKeh8kvjW', 'qCouW6tcJSoJ', 'iragbLm', 'WPrqW4OyoG', 'WRKNtmk9eW', 'W43GT7/GT5BGTB/GTje', 'W6WRxSk9pW', '8jIyUCktmSoeAa', 'WOTwW4a', 'eMqm', 'W4xdKSkMWPtdOG', 'BqDfwSkI', '4lsK4lAbgqin', 'WO89WO7cVSoK', 'WPOwnwhdNq', '8yscNs8', 'd8oMtW', 'WRbuvSkr', 'nmknWR1RoW', 'uZ5hW7u', 'WR1mW4JdMmoB', 'W4JcVcHDFq', 'BCoSrtG', 'WPr6WP3dU8oO', 'WObhW5yw', 'W7X04lA04lwO4lEa', 'W4vbuSkMWRS', 'WOm5teVcUa', 'W6TRFCkeWPy', '44kvW5hdV+kuHSkp', 'xwykWPi', 'aGWJWPKi', '4lsC4lAu4lAFdCkt', 'F8odra', 'W7aaqmkRia', 'W6fMDG', 'ecvJWQtcLW', '8yAbGVcEO5FXJAoY8ycbKVc1SBO', 'omoyxJJcGa', 'amo+W4XK', 'WPjlW7NdV8o5', 'WPX7aCobfG', 'aCoGdGBcLW', 'W7jPr8osWRm', 'WRSMumkPba', 'WRK3sW', 'WOddHSk4zG', 'W5ZcN8oAW7pdOG', 'ECoOqI/dSG', '4lAe4lAz4lwm4lEr4lwa', 'WRmTyG', 'zG10W7dcPG', 'W7NdTCkrWQddTq', 'BHTSA8k7', 'WRBdSvC0W6O', 'pSoEWOhdT8ko', 'W7NcVCk0W7RdIa', 'wCo8tZFdNG', 'gSkLWPbgva', 'uIRcIa', 'WR7dUhSaW4W', 'hmkSW7rLua', 'WPfMqmkEWRa', 'W7zKDr3cGG', 'WQNdTCkTWPpdRG', 'WRdcV0C+W7e', 'uquvpv0', 'nuuLWRJdPW', 'W60Rw8kTAW', 'W6W0kCosWQ4', 'W7ZdTmkuWOi', 'gSkZv8k2', 'pSoWzGZcSq', 'WP3cOYNdPtu', 'W5faimo4WPu', 'W4NcSGf6za', 'WPHdWPVdU8os', 'WOzxs8kIWQC', 'rI1sW63cGa', 'bJddH0JdOa', 'krDpyc0', 'WR/dVCovWPhdVW', 'WPXRW6CtdW', 'W6f/WQNdTe0', 'WRhcSSoAWPRdPa', 'gmkBDSk2WQ0', 'W7jYFION', 'WQ0MDSoBW6S', 'WPvgW7pdO8kD', '4lAL4lw6aEc0O+c0Qq', 'WODyWP3dQCkQ', 'WR9/aCobgG', 'e8k+WQ58wW', 'zSo9fJFdVG', 'nJnayaG', 'pt7dOgJdTa', 'W4udWOrF', 'ESoluSke', 'W6pcJZD9Eq', 'd8k0q8kNW6S', 'WRtcSe4YW68', 'WPaGACkOdG', 'dq40W5yC', 'fq7cIMZcKG', 'whrBtCkD', 'EmozWQddNmk1', 'vXmdAeK', 'WRBdUvm2W6W', 'WPJcIHVdKtW', 'tSk3d8kVWQa', 'W6HQWRBdTu0', 'xSoDWRqPW54', 'WQWoB8oGW7u', 'W5vptumD', 'WP9jW5ldKCkM', 'W5pdN8osWOxcNq', 'WPjkW73dQq', 'W7ddSSkbWPFdRG', 'W4iYBSkSWQ8', 'W5zfBmo+WPm', '8lIhRmovW6i', 'EdVcI1lcKq', 'lCoOWPDEzq', 'eYDspxq', 'WO42fMZdNa', 'WR0CbgNcKG', 'qMaNEJC', 'iGaxWP0j', 'rCkNWOn5WOu', 'W4XZg8kvaW', 'v0BdJMC', 'm8kmWQXYxq', 'CMbdtaqiWQddNG', 'D8oKw8kVWOi', 'W4bND8o8WPe', 'xa0JF8kN', 'W7ZcVsLDAG', 'b8o8dH/cLW', 'dCkPWQzItq', 'W7ldUCkBWOldPa', 'W7L/WR4', 'i3eBWOddLW', 'W4zwvrym', '4lw84lAz4lwc4ls94ls5', 'f8k5WPTddq', 'WQnpvmkbWOW', 'iGzcW6dcSG', 'WPmbW5lGTjBGTAa', 'a1SEWPpdKG', 'fXeyWOyz', '4lAHW6WcW6ldOq', 'bSoYWQKyW7q', 'qmoMW5ZcKSoz', 'emk/WQDeha', 'qLFcMgqx', 'WQpdHgm+WR4', 'xSosWROjW68', 'hCk4WPe', 'WQWiaNlcIq', 'BSoeW6hcMmoJ', 'gMXvW7JcKW', 'WPhdMSkWASk6', 'eaCJWPiW', 'hmkeWQDqaq', 'W6qWuCkKdG', 'DWDcACkl', 'wmoFWRizWPe', 'WOb7WOhdHCkw', 'WRmMrG', 'WR3dUXuEWQG', 'W4NcTSovW4fc', 'sCoiW5BcKSoQ', 'tCotW7SzW68', 'raquAq', 'WOGJBa', 'WRhdP8oGx8k1', 'W4zBgCohfG', 'W5HawSolWR8', 'W4vJqc4m', 'omoFEYlcJa', 'tSoqD0VcTq', 'hSkNWRPIrq', 'p1eNWRm', 'WRmXk0NdVW', 'DSovWQZdI8kZ', 'vmkaBmkdWPC', 'hCkMq8kRWRe', 'mCkHWPvKqa', 'W5zeWOhcVCkH', 'WP4Dv8oIW4y', 'pbHKCbC', 'bSo2WRCyW74', 'W7TZDq', 'v2hdU0yB', 'WOfxvCkK', 'WOBdNHOJWQK', 'FCo7W4pcPCoi', 'W7P/WQRdTxi', 'EHDHBCkH', 'WRnZWRddJCk3', 'jv8GWRFdUW', 'WR3cIa3dGG', 'W49MtSkUWRO', 'DJ/dMhNcLa', 'WPTmWOi', 'WOWOhMVcTG', 'WRpdJ8kXECk0', 'WQLBrmkJWQa', 'nYP3ou8', 'rmoqfHNdMa', 'x8omW7/cJSou', 'WPjat8kZWQW', 'WQm1muJdLq', 'WQRcHqJcL0W', 'W4NcTCkeW45m', 'WQHywSkcWPK', 'rCoRWPf2W5m', 'W6ZcRmkAW5zp', 'W6rIrmkHjG', 'WQuCn1xdOa', 'W7/cMMa4W6W', 'aaCGWPmt', 'tNiiCZu', 'W77cPZ7dUtm', 'pmoyWQJdGmkI', 'DSkRW4BcOCoD', 'WRRdVKyZW4G', 'imkOWQbKoq', 'WRDyvCkqWP8', 'mvm7WR3dMG', 'bmkuWOrkAq', 'W7NcNCktW5T4', 'WP41yCkHWO4', 'W6qCeq', 'edePt2O', 'WOine3pdMW', 'W7VdKCk3WPFdVq', 'qCoZWQOnW5e', 'W67cVmkbW4Xl', 'WQS3ASkpaq', 'WPj8WOhdR8oO', 'ts7cMx3cIq', 'fmklWOzxFa', 'tbVcSNJcKG', 'WP1wW4GfgG', 'ktDr', 'uZbjW5tcNG', 'WOPRW7NdVmkd', 'WO7cLmktWO3cUq', 'WO8mDCoAW4K', 'uSkPWODmhG', 'WOWKAG', 'WRJcIqddKWG', 'W6ZdUCkBWPldQa', 'W5JdKmkAWQldRW', 'WR4BBConW40', 'xW8jExm', 'W7JcJqX4va', 'WOhdVWmZW6C', 'f8k4ta', 'f8kcWQrrrW', 'bSkVWPbw', 'W67cMdC1WQ5tWRjp', 'bGjsb38', 'uqWj', 'FrPP', 'ySopW5FcUCo8', 'cCoKEsFcOq', 'kCoOuJBdVG', 'dvpdHhWs', 'eebg', 'WObAWOBdMmko', 'W5LnWOddVmo3', 'hwrskhi', 'W4FdNCojWQpcKW', 'WQxdJIiVWQ8', 'W7VcSmkzW5zp', 'WOddHSk4zSod', 'uW3dMhyl', 'dSowWRZdUCkr', 'cWSPWPmj', 'W5fCCmo+WPW', 'W6b/WQBdS3q', 'W7pdTCoBWPNcGq', 'BXTJBmkQ', 'BmolqmkeWOa', 'WPbYqqie', 'bHtdNuRdLq', 'W5jjCSoOW50', 'yxNdO1uZ', 'faCVWRK6', 'W5tcPsldSLW', 'WPBdNtO2WRy', 'W7BdUCo9WRpcLa', 'W6zZWQRdTq', 'W4CDW5ldRSkQ', 'WQXjW4ddNmke', 'zSo8rfhcNq', 'WOSxaxRcOq', 'W6iQuCk8', 'WOecW4OBDq', 'm3zmzHe', 'bdPO', 'q8ohWR4eWRS', 'WPddVLCYW7a', 'WORdO8otWPtdSa', 'WPX7b8obgG', 'W7RdM8kNWRNdIq', 'W5vesGio', 'CSo4WRFdNCk5', 'W6yWx8k9oW', 'emkqWQvNza', 'WRn2uSkjeCk3WR5L', 'WQThr8kpWPe', 'mCk/WP94tG', 'W6/dUCouWOma', 'W5NdTCkcWOddQG', 'WPLzW5ldVmoV', 'WRHqgSo/ja', 'WPf2BCkTWPS', '4lsB4lwP4lse4lwgW7a', 'W47cPtbzFG', 'jCoYW6zWWRe', 'W4/cLSkGW7ik', 'WPvtW7ZdPCkh', 'nSkTW4ehW7K', 'WRBdMszSWRu', 'WOz7WPC', 'WRSHA8opW7e', 'ASoUW5/cP8oA', 'cXynDf0', 'FcpcL3hcJG', 'W6RcVSkuW53dMW', 'jSo/W5JcRCol', 'cSkoWP5B', 'WRfQWQBdVmkd', 'WQhdTvSJ', 'W5NdTxKDoq', 'oSorWQtdGCk9', 'ccj3DWy', 'WR/cJqK', 'WPvxW4Obma', '4lw/eUc2L+c0M+c0Iq', 'WOPKWOhdTSo8', 'AZ1cs8kh', 'tSo+W6qMfa', 'bSkGWQnqdW', 'WQm1kW3dGq', 'DXT0', 'fGf/WRNcPW', 'WOBdHSkHDSkQ', 'WOSzvCo4W74', 'WPq8tCoAW6u', 'WOHxsmkZWQa', 'WRRdMSkcymkz', 'fIjVW67cNq', 'z8ohW5RcSCo2', 'WOddI8kLFa', 'WR0MF8koW7i', 'WRVdT3yNW6y', 'uCo5B8kIWQy', 'tuCwAJu', 'W6TUDmoSWO4', 'ASoHvY8', 'WPbhW50b', 'WRtdGYi4', 'WOu/ESk3', 'c8oLWPhdQ8kr', 'WQSXpa', 'y8kRW4xcQCod', 'bHaSWPO4', 'WPvDmCoFhG', 'WOXIW5FdN8kv', 'oWS9WQqo', 'WOFdK8kSE8ky', 'vaWfCXK', 'WQRdGa7dHaK', 'WQiqwq', 'WPq4nehdLa', 'wCkNW5qtW5e', 'gsjdjge', 'W7umACkQkG', 'gCoYW5b5WOe', 'sSoLwsJdSG', 'W7GTySkqcq', 'WPKvrSkRgW', 'caC0', 'fI5FWRNcHa', 'WOxdPMicW7u', 'W7VdTey7W6C', 'v0tdLq', 'WOldU2mnWP8', 'WQz1W4qmiG', 'rsnKW6NcNq', 'a3eDWOddMW', 'ymoEWPOyW78', 'WP81F8kPWRO', 'dCk3qCoIWRy', 'WQCQW7lcPdxcPSkSWQCUiMns', 'WPFdSmkSrmkM', 'WQiAofRcLa', 'WOJcHH/dOXC', 'WOv3ea', 'W4bHA8ojWQG', 'W5ZdU8kBWQpdIa', 'WPbPWOBdRCoW', 'WOzksCk8WQS', '8kcaHCo0', 'WODfW5hdImku', 'WRC9ACkKWPu', 'AmoKuW', 'WRKNsCkjWPy', 'bmo2W5D+WOu', 'W7P1u8ouWPK', 'W5HaWOFdQCkQ', 'axuiWPFdIG', 'W6vmESkjWOi', 'W7j0hSo2', 'W7Gkvmo6WR8', 'aIvIW7hcIa', 'AmoTt3VdTG', 'WODxW6xdV8oz', 'WRO9u8k5gG', 'rCoXW7tcOCo9', 'E8kovSkgWOC', 'jSkyfCoxW4q', 'j0u2aSkj', 'FCopvCkcWPm', 'W4DMqseg', 'WRmKkutdHG', 'W6/cSSkwWPNdOa', 'nZncBbi', 'W609aNZcNa', 'oCo2zahcIG', 'ASkFW4CWW5C', 'cmkDWOJdQSkB', 'W5zEv8kOaa', 'WQZcHq3dLri', 'WOjfWPFdSW', 'f2rsihG', 'c8oHxqRcNW', '4lAN4lAW4lE14lsK4lEN', 'WQ0bsSkigq', 'WR3cRCkCW49p', 'WRlcPdZdOsu', 'sSobDW/cTW', 'fHeO', 'WRZcI+c3VUc3UUc0La', 'fCo5W4rVW4a', 'W60xeG', 'W5NcUI1mkq', 'CJ3cIKZcRG', 'W5P8vSojWO4', 'cbNdIf8', 'xIBcNq', 'W7/cImkuW6PA', 'W47cMSkgW4e', 'W4JcOtfkCG', 'Ad7cRhRcKW', 'WOzcWQJdKSkf', 'WQ47mG', 'qIbjWOFdMW', 'CWRcTLK', 'sJJcNq', 'W77dRSovW5dcRq', 'W7pdSmkmW5BdRa', 'WQSugNJcLq', 'x0enpu0', 'WOi+ASkHWOK', 'W4pdKSoDWPu', 'uKzlW7dcIW', 'nJ1Hz8k8', 'WPPsqqie', 'W6qSvmoOjG', 'WQRdQCojWOlcSW', 'tmo4W6qM', 'W63cVmouW5FcPW', 'W7FdHIzSWQ8', 'WPLFW5ldSSkP', 'W4WDFmkVWOe', 'FCotua3dPG', 'uuBdHN8g', 'W4naACo4WPG', 'BSoiWPjuWRW', 'WRBdNZaTWQS', 'W5nyvXCi', 'WQaybhZcLW', 'W7hcVmoAW4zd', 'WRfoxG', 'W5DfvHyz', 'W6fQWQVdUxq', 'W4hdVSojWRdcHa', 'cCkyWO9tBq', 'WRyeFSoHW5G', 'r2FdKgOT', 'W5NcVmkrW4/dQq', 'aGddRLNdQW', 'WRhdTva0', 'W616z8oXnq', 'WQGPB8oAW7O', 'W5LyvW', 'W7BdHmk0WRVdUW', 'WQn2DSkaWQO', 'W6VcVSkBW5RdOG', 'ph59', 'xeCWEZy', 'W5rSEmkAWPe', 'W45NW5ChoG', 'W6dcSGPRxq', 'W7inACoCW7a', 'drJdHu7dNW', 'WPSBwCoKW5e', 'W5Tsqa', 'W5fwWO7dQeW', 'WOvpW4a', 'y8obW6dcMmoc', 'W57cPJ0', 'W7fUWRpdSwC', 'cJrYqHi', 'WPrgW6ddOmks', '4lw34lA54lsk4lwgW5m', 'r8o+W7lcUCoH', 'WRtdTfP3W6y', 'WOddR8kiFSkU', 'qJ49WRhdSG', 'W7VcUSkbW53dHW', 'WRJdSvm', 'ut5jW6ZcLq', 'WRSUr8k1mW', 'W6ldV8o7WQJcNG', 'wmowWRXkWQC', 'W4rjEmoV', 'jSkRWPhdOmko', 'W4auW4tcRSo6zI/cQGCHBW', 'cmo7qG7cLG', 'WOVcKWNcLG', 'E23dTvSo', 'WOD/da', 'W7vVrmkHjG', 'W45ut8krWPe', 'dcjawsu', 'dConWQhdJSkI', 'DmoBEmkiWQa', 'W41nx8kJWRK', 'vsdcKvVcSq', 'WODkW4qb', 'W6r+D8k7WQ8', 'eaCJWPiE', 'WQmAi23cNW', 'b8k+WO0OaG', 'mSoqW69pWRu', 'tSk4WOXPWOG', 'waDkjMy', 'vMi+WRpdGh3dTqtdUWPmi8oS', 'wrOKWPhdKW', 'WRldOKWIW7i', 'fSk8WPP6rq', 'le49', 'dXtdHetdHq', 'CCoBuq', 'oSo9dGJcIG', 'W7JcT8krW5f9', 'WQhdVWm2WQi', 'W61HzmkPWOq', 'Bb/dMfhcUW', 'W7lcT8kqW4zG', 'W5ZcQSkaW6JdTG', 'WP1vbCoVpG', 'D8oaqSklWOe', 'W5zesCk/WRC', 'hmkYd0RdKG', 'lGCJWOiu', 'wcCh', 'AmoOW5tcRCol', 'cSkUWR9fhq', 'CWT9kmk7', 'WPvGCSk3WOO', 'dmoEW4lcPCko', 'W6dcNmkCW4tdVq', 'f8kKW4Hfga', 'aSkHWQz4CG', 'pX7cIuJdMq', 'jSobxWRcKG', 'aYBdM0ddSa', 'cCkKqmk3WRu', 'WPbWAYW8', 'wYf/W6dcGq', 'aCoByIJcSq', 'ESodsmkj', 'EmoAWRFdGmkJ', 'xCkcWP1sba', 'WP5/fmowbW', '8kMzRmoLW6JcHgi', 'kYfpzG4', 'r8osWQi', 'W63cQmkq', 'W6/cMhP1W64SW7bdW6iTehiZ', 'WQW1tCkOhq', 'W64SrmkPka', 'W5yOuSkjaW', 'xSoeWRK/W7G', 'fxCyWP/dJG', 'WRldMdaTWRW', 'n8otWQddI8kC', 'xbHfW7/cIq', 'fCo0WOVcJ8kg', 'WP9WlSoKW6K', 'WR/cLaK', 'aCk4sSkMWO8', 'WPbsW4Wsna', 'fbvXgwu', 'W79BWQNdS1e', 'ESogWRmfW60', 'WR1dWP7dIvK', 'rfhdMwyp', 'wCoeWR4', 'WP5ZbCobgG', 'W77dQmkgWPFdVq', 'WP55W7tdTSk0', 'xmoYWQKcW7y', 'pCkxW6xdImkK', 'qe0murO', 'xSkTW7q8W5G', 'xf0kzq', 'tfewAa', 'WQLyvCkaWPu', 'W77dVSkzWPpcRq', 'h8oIWOJdUSkc', 'WQDnW4Sbna', 'bmkcWOTraG', 'bmkwWPH0qW', 'W4/JGl4gWOVcGa', 'WRlcICkqW4/dMG', 'W60UsCoOkG', 'wmooWQSpWQy', 'WRHjWQJdLCke', 'WOGbs8kzjW', 'cCk6WPPhda', 'aG8O', 'W7CndSodW45BW4FcLCkucr4z', 'W6fUDCkOWQK', 'WOnlBmk7WOG', 'WQLFxSkg', 'WRLZi8oykq', 'W7bFlSoSWPu', 'WQipdW', 'WP0uixRcOG', 'WOrcvSkIWQG', 'WQBdTu0JWQi', 'iCojWQJdN8kz', 'WOyvpx/dQG', 'usFdQMRdOW', 'zCkZEZtdTq', 'W5ucfG', 'W7nHt8o0WQC', 'WRxdMCknWPFdOa', 'vSohuCklWOi', 'lZny', 'tXj/W7BcLW', 'vcLuW6RdHq', 'WPbFWP3dSmoV', 'WPHYemoB', 'W4FdGmoXWRVcNq', 'prxdRx3dGq', 'q8oizdddSW', 'W51RWP7dOCoR', 'jSkRWPhdOa', 'aCksWOzBzG', 'qmoUW4xcO8og', 'n8k7WOhdSa', 'WOWSffZdMq', 'uZvv', 'omoIyZJcVW', 'aSoKWOzhhG', 'WOjlW4KqoW', 'm8k+WOv2eW', 'er5xW4NcSa', 'xmkRWP1wbq', 'fCoJW7jMWRG', 'rtXkW7dcKq', 'WP4HD8olW4W', 'WRWmFCoxW40', 'wcTRW7ZcLG', 'WQ07FSoC', 'cHZdJa', 'ymo2WPuT', 'WPndWOBdR8kM', 'WO9PWQpdR8kv', 'W55yyCo4WOK', 'W4FcUITzDW', 'W4FdHSosWOdcVq', 'WPFdQ8osWO3cISkWcW', 'DXDUyW', 'WQv5W5ldKSkj', 'W7pcTSkcWOjf', 'eCkRWPXbaG', 'FmoBBSkbWOi', 'WRflWQddH8o8', 'W4/dJ8ooW6VdMG', 'WPZdVLu2W64', 'W5lcMSkFW6NdJa', 'emo6W4PKW6O', 'WOnuW7i5da', 'WQXstSkg', 'rmohW5dcOSol', 'is4SWPqy', 'bJDZoxe', 'aSkbWP9fbG', 'W7hcMX5grG', 'WQ8Ku8k1aa', 'CSoOWRBdISo2', 'W5KOWOBdPSo9', '77Yw77YtWPyZ772r', 'WRBdPeOHW6m', 'W5tcVSkuW4JdIG', 'xZaVWPVdJa', 'FSknW4egWRy', 'WPn6W5hdQCk2', 'BCouWRGpW6S', 'gmkZxmoIWQC', 'WQVcHZBdNGq', 'W45XW5awnG', 'W4pdImozWOdcPa', 'WRJdIwqNW60', 'WQGpf3NcVG', 'gCkNWRPupG', 'WPnFWPpdSCkk', 'gSouwIxcKG', 'WQTjhmkhW5W', 'tSo9xG7cLG', 'W67cQXHDW4q', 'aaKOWOio', 'W6mre3ZcJq', 'kmkKW5lcR8oa', 'W7PZrCk8WOC', 'imkjWOvlEa', 'yeFdUxCE', 'AqZcQgFcIq', '4lED4lst4lwz4lEO4lEB', 'W67cVmkBW4zN', 'W4jjyCo4WOK', 'W6XHW7xcRmkd', 'nUkDUY1BWPO', 'WQC6smksWOy', 'eh8hWPa', 'g8kBWQj1DG', 't8onzHZdTa', 'amoYWOnRWOq', 'aaOSWOjt', 'W6TYy8oSWOO', 'WOH8DCkZ', 'bSkpWO8', 'ya9NW4VcOq', 'D8ohW5dcP8oE', 'uWKnAq', 'fJjJW6dcTq', 'WQFdQSkpxmow', 'W5FcMSorWOtcVq', 'qWqcExq', 'W7FcQCkm', 'BL4SkCoL', 'emkVWPO', 'W77cSSkzW5VdGq', 'oCorWQNdHCk/', 'W4NcTSovW5zl', 'emkkWOnuFG', 'WQpdGYyI', 'a3eBWOddLW', 'bmksWPPFzG', 'bSkpWP9niG', 'h3uhWPpdIG', 'h8kVWOzwaW', 'ebxcHInp', 's8kxWROgW7C', 'ufpdMNOl', 'W6JcQSkq', 'WOvwW5yujq', 'WQqLn1dcJq', 'yCo5CrpdJG', 'fSk0WPPKrq', 'o8ovWQtdM8kL', 'W4X7WRhdNmkD', 'W6VcUSkfW47dIG', 'BUobMGfpnq', 'pSo2ySkhWOG', 'xbqjyJW', 'eSkMWQb3rW', 'W5lcJmk8W6JdJq', 'sCoQW6NcPCoi', 'wuekFZC', 'WOztuSkIWQ4', 'cSo3xqG', 'WOziW7ebfW', 'WQuCbLFcLG', 'nmkVW4PXtG', 'eCk+WOfucW', 'WRlcQmkqW5ldIG', 'WQrEketdNa', 'kCozWOVdVSky', 'W6TTWRldNKm', 'y8ozWP4LW48', 'qWqpCLC', 'm2nhWOpdLG', 'W6rygrai', 'FUkuR8kdrCkx', 'W7RdTmo6WPVcHq', 'W7PLAmk4', 'WQFdTui0W7y', 'W7BdTxm', 'WO50C8kIWOm', 'wfGamxW', 'EmoBWOm+W6e', 'CSolvCkcW5q', 'WO8edM7dVW', 'WQm7k0K', 'amkVWOLbhG', 'A8oEdW', 'WRjLW7umiq', 'W4BdQ8oRWRhcOa', 'wafuo3O', 'ssC/WOqs', 'W7JcLJn2Da', 'eMqaWPhdKa', 'W5xcN8kFW6DL', 'AYFcIxlcMW', 'a8kZqSkGWQa', 'hCo0WOldM8kr', 'DCoKW6BcO8ow', 'DWxcReVcKq', 'W5uuWQtcUmobrCk5htJdUNu', 'vc7cGq', 'sZpdPN/cKq', 'W5tdN8oyW4ddUG', 'Ec9exSk8', 'kCkPfNVcTW', 'W7ddSSkqWPldHW', 'W6RcStWCCG', 'nmoRu8kvWPS', 'lmkvFCklWQe', 'W75Hzmk4WOy', 'WOegaq', 'WQ01nq', 'ASoQEmkfWOW', 'tCotWRydW7u', 'W6HEsteA', 'gbtdH0/dLa', 'g8oLW5O', 'vb9hW6hcLa', 'xSkxW7PlWRe', 'WPTdWQldQ8kh', 'WOOIymkWWRm', 'z8kdfJxdUa', 'rsLFW4FcI8oNW5FcVCoXW7ldGa', 'WOrEsG', 'e8oYW5DPWO8', 'wJJcI3/cMG', 'm8kuW4Pvyq', 'eWm5WOiy', 'tWzas8ke', 'WRtdKYycWQO', 'kSoyWOnfWQy', 'W7boWRFdGMW', 'WQfCx8khWOS', 'kmorWQdcHCoC', 'xcRcJhVcMG', 'W4j7WRxdPgK', 'WR4yghNcTG', 'WQ4zBCouW5W', 'eueiWRZdJG', 'md9pzfW', 'oCoyW7DnWQC', 'wI7cNbtcUG', 'eqCSWPuj', 'B8kEW7emW4e', 'fmkJWOrhba', 'pmoDW7lcGCo8', 'AfVdTeyN', 'WPDTWOhdRq', 'WQ4LECk7nG', 'cxddG3aC', 'bZDd', 'WQRcHrtdGG', 'bWS+WPCn', '4lwg4lsry+c3LUc1Sa', 'W5ZcVtLiya', 'cSknWOfyoa', 'wsz1tCkl', 'ktSEWRKz', 'WQ7dRCkxW7hdLWyqWPm', 'WQW7nKJdLG', 'aSkiWPLFBW', 'WROhsCk/jG', 'qeldGNyy', 'W4PnW5uqoW', '4ls64lwVEh58', 'aCoKW4y', 'jmk6WQfUeG', 'hSkBWRHaBG', 'BWTvW7tcNa', 'WR7dKZ4PWQS', 'aaS9WPCt', 'CG1ktSk3', 'n8kjWOz9qa', 'rmoEqq/dKG', 'jISgoNa', 'W7flzmoQWRS', 'qmo4amkXWQa', 'WRBdUeiJ', 'imoZqW7dMa', 'hCkzWO8VW5C', 'WPH7eSoufW', 'WP0cu8oSW5y', 'WOiIDG', 'W47dLmotWPtcVG', 'WObTWPZdQSov', 'WPPKWPFcHmoD', 'bwiwWPpcOW', 'W7dcVmkuW5BdOa', 'tZNcL3pcKG', 'WO7cGr7dGG8', 'WQldKrdcHHO', 'W6rygqCm', 'WQVcKWK', 'WRddVKD3W68', 'fJz7W6hcMW', '4lAS4lE34lAC4lwlW4S', 'xmkUWO1pbq', 'rCozW7SfW7u', 'W6iJrmkTla', 'W6z/WR/dPa', '4lwD4lAI4lsi4lsY4lEs', 'WPvzW4JcT8of', '4lAOzoc3PEc2M+c2RW', 'W4uhy8klgq', 'WQHBW68SdW', 'WP9QgCoCbW', 'W7mNqmkKmG', 'WP4ptSoNW44', 'y8o4W4lcPSoB', 'fZDvkhi', 'kSosWRddN8o2', 'W43cUmkhW5zd', 'B8knW50rW5S', 'ufBdLxaA', 'wCkhqCkUWP/cL3q', 'cG4OW7W4', 'WOCxjK3cJa', 'WOnqmSoNW40', 'c8oHwKVcVa', 'WQP/z8kbWR8', 'ASo/W6pcMSoL', 'huCTWQBdUG', 'BmoOvs/dVG', 'BXTJBmkc', 'bWC+WPu', 'W6aSxSkNpG', 'k8k8yCkKWOW', 'm8oyWRW', 'WQz4W7aZgq', 'W6uNq8kR', 'iUkwJeviia', 'qIrdW7C', 'hmkTWR1sdG', 'WQPIW57dIW', 'WQWPEmoAWQu', 'WQ1QW77dR8kk', 'WPX6W4CypW', 'vSorW73cO8oP', 'WR4fxSkuba', 'W5vWAYWT', 'W7xdLvS2W68', 'kmkWWQrQoq', 'FX95BCkO', 'xZTbrmo0', 'WRjzWO/dKu4', 'W4qqsKmg', 'AmolaCkaWOy', 'ndDvDXK', 'cxu+WR3dSa', 'WR9hWPRdVCon', 'g8owWPhdRSky', 'wWqv', 'u8o5sCkoWQy', 'WOLPbSoufa', 'tuCwBsC', 'hcjbW4BcNa', 'W595WQNdTNe', 'nZDgzG8', 'zCoZW5tcJSoF', 'gmk7WQD3qW', 'W59EEq', 'W4RdVSofWRxcLq', 'WPbnWOuhma', 'rCoiEbW', 'W7JcQSkgW4nn', 'WOfTWPpdRCoS', 'W4FcK8o1jCoEDSkDCLSKW7VcOG', 'W5FdPsqi', 'WPKsvMNcMG', 'gSofWPZdTCk+', 'W7NdTCkzWPpdOW', 'DCo7W53cQCoA', 'f8kjWODgdW', 'WPD4WRJdISki', 'W73dPdmPWRu', 'uq1mEfC', 'WQvrv8kEWPu', 'W79GDYy7', 'WODTW5ldR8oT', 'W4RcOs1poq', 'WPLFWOS', 'cZbyW7tcNa', 'E8oasmkcWPa', 'gXddNv/dLa', 'WPmVsCo5W5e', 'bqSHWPmt', 'hmk8WQD3va', 'WPb5qCkrWRS', 'WP81BSkMWRC', 'W6tcObnN', 'bb/dNuRdKG', 'l8kzWO1hvq', 'FmowWQKEW7i', 'jXbJ', 'dCkPWQbIqq', 'W7LUWOBdUvq', 'sCkTW7OrW74', 'WQddSZO6WQe', 'WRCXrG', 'W5DEB8oUWO0', 'W7GLFSodW70', 'ACkyWPmwW7K', '8kkzHSkdtCkYW54', 'W7FcTCkqW5RdPq', 'WRWLCSoaWR8', 'zCoJW5dcTa', 'WRzywSkxWOG', 'W69TDq', 'kmk/zCkWWQ8', 'jtTe', 'W4JcOxzkCa', 'WPVdGc7dR0y', 'FCo1WP0aW7C', 'DJRcQhpcHq', 'WO97aCowgW', 'et/cMxNcNa', 'vY7cLxVcJW', 'WRKfAmkpWOC', 'W5RdKmkLFmki', 'eHBcHsjiCCkpemkkztBcJG', 'WQ7dGbVdLXu', 'EGBcTf3cUa', 'CmoDW4lcMmo3', 'W6FdV8o4W4hcLW', 'W5tdKSozWO8', 'WP1VgSobfG', 'WP8nx8koW5G', 'xx4ktr0', 'vqWoEeS', 'EmkDW6xcJ8o2', 'eCkRWPXhdq', 'W7fKzv7dLW', 'W5JcSdzyxG', 'W6NdRCoPWOJcPW', 'lmoyWR3dMW', 'WPzhW4qwiq', 'WPjgW6JdUa', 'W5JcNmkAW4LW', '8y6BRbVcS8kUja', 'WQ8XxmkZgG', 'WP3cPsddUL0', 'qILEW60', 'hCkFACkNWQe', 'qSoUzaZdMq', 'WQBdN0qqW5S', 'W7H+FYy6', 'WRKWh8k+dq', 'EtPlzmkE', 'a3uiWOBdLW', 'ECkAW5irW5m', 'WO7dHdzSWRO', 'ACoGWQiNW5W', 'W4ZdJCk7WQddRa', 'WRVcGq/dGG8', 'WQi7mq', 'wHrekNG', 'gCkTWQD1', 'WRDyvCkqWRe', 'vSolW5Oo', 'dSkTWRPYAq', 'WR/dK8kLWRpdGW', 'fxLJW6hcJa', 'WRRdHHO1WR8', 'AbT1Fa', 'W5lcMSkDW4ddUG', 'W4RcPr5yFW', 'sYhcS2ZcMa', 'uILdjhC', 'WQtdV1aLW6C', 'W4ZcTmovW5hdNW', 'vaGFFeK', 'W6NcTSovW5bp', 'uxSFEX0', 'WQnovCo6ja', 'etj1W7a', 'ySoSfJRdUW', 'WRJcHokEOSkE', 'FX95A8kN', 'WQddPezDW6O', 'eZJdQ03dQW', 'WRroaCoBW5m', 'eSkiWO8', 'EbnKzSof', 'W5ddLSozW5VdVG', 'W7BcVmkm', 'W5vFC8o6WPO', 'lCotWQNdHSk4', 'xqGcAe0', 'W5yNW5JWUOod8jsHIG', 'W51jx8kcW5K', 'rmofFqpdKa', 'EbXIW6/cRa', 'WRFdLSkZr8kD', 'WPvtvmkZWQa', 'WQ4jbq', 'W6xcNSkJW5vA', 'WRLWrCkmWOC', 'WP0uBSkKWQi', 'W7NcTSkq', 'WOH/bSow', 'WRX7WQVdVgO', 'W7n+wCo1WO8', 'BH1UW6hcRW', 'cCkmWO10xa', 'W67cG8k7W4PP', 'bGHUjvC', 'kIf1jLq', 'fSkbW4CqW7S', 'WRhdTve2W7y', 'wgXbW6VcIG', 'pSobuCkcWPO', 'jSkoWPjhlq', 'rLpdNNys', 'tCodWQ4zWRe', 'WRxcHru', 'WPFdJmkUzSkn', 'W6fWDCkIWPC', 'CHHbW6JcKW', 'WQTjg8kwWPm', 'yCoHWQm/W7O', 'W7yrtCkUgW', 'W6RdR8kq', 'ymoIW53cPCoa', 'pWTYdLi', 'qsldNeJdKG', 'wvSwEtC', 'WR99WQBdLmka', 'x8osWRuoW5y', 'W73dHCk9WPJdPa', 'B8kDW5eFW7m', 'W7FdHsW4W7S', 'WOvfWOxGT6/GTOC', 'c8kLxmkJWQi', 'uqpcLZjv', 'WOf/g8obgG', 'W5xcV8kVW5BdRG', 'WRVcKX/dLWe', 'amkXESkYWQe', 'WPP2vrem', 'dmk/WPfbsW', 'AG7cGwNcIq', 'W7mNuCkRpW', 'W4T7WQldTLa', 'WRpdISkzq8kT', 'cbJdMuRdNW', 'W7XyvSoVWOC', 'aSouWQKpW7O', 'WPlcRWtdHtm', 'rmoxvGRcLq', 'WRLDnMNcMG', 'rmo5zmkJWOe', 'WR4Th8k9va', 'WQmGlfVdKW', 'WPzcsSkUWR0', 'CCoCwa', 'WPX6WOS', 'y1m3xbW', 'grtdMuFdIa', 'WQyEDSk/WOS', 'W7ZdVCkbWPpdQG', 'rYz3W6JcTq', 'W6qXASkagW', 'W6Pys8kCWPK', 'pCkDWQldNCk5', 'nSk4WRLhsW', 'W7eJqSk7lG', 'rsLiW73cQa', 'WPfnwmkGWPy', 'W7FcTSk0W7JdQW', 'W5rVAmkvWPm', 'W5Krz8kobq', 'B8oLW5BdRSka', 'W4nsvWCK', 'WOq9AG', 'WPVdPcS/WO4', 'e8kNWO0', 'WRGXtmk/', 'cHxdKaVdKa', 'k0eHWOZdTa', 'W6vNgsO6', 'dXtdMKG', 'W7xcTmkyW5VdGq', 'emo2W5O', 'dGVdHKxdLa', 'ceanBNi', 'WOvzWPVdSmkQ', 'dq06', 'WQ3cUIldNIu', 'W4ZcPZDjyW', 'w0ehytC', 'WQOpgwJcIW', '8kwIVmkj', 'i8k5WOnKka', 'WRFcLrJdLbm', 'WQ3cKaddNXi', 'ebiHWP8j', 'WQjuv8krWPi', 'W55+p8opWOu', 'W6zPWPldOgq', 'WQOTESonW6S', 'WOiPW73dPCkD', 'm8kMWOrYcW', 'W77cUmkbW4Dn', 'WQ/cLqpdGGm', 'WOtdGSk0zSkj', '44gUseFdVcK', 'bSoYWOnKWO8', 'o8kIWQnXFG', 'WPDaWPC', 'bmkRWPXhdG', 'W6VcUSkxW5ldIG', 'WQ0HumkOeq', 'wmoPDmkUWQu', 'v0BdJMDF', 'W6RcVSkfW5ldJG', 'gc9jW7FcKq', 'W4RdRCo7WRxcKW', 'W7ldImkpWRJdHq', 'WRlGTy/GTypcNSoT', 'dZ5P', 'WPpdPLSKW5O', 'W4hcMCkHW7JdGa', 'rmk5W7SnW5W', 'gSo7qqu', 'yCo5W57cTCoE', 'WObSWQtdICkT', 'EmoCtSkkW5q', 'WOm1FCoLW7K', 'W5zdCSo2WPW', 'qGqnFK0', 'v8kTWQX3sq', 'zGuOs0K', 'hSk6sSoOW48', 'aIfho3W', '8j65MSkrWOFdVbG', 'CmoIrmkOWRm', 'WP5TWPZdUSoX', 'WQWnbJpcMa', 'WQC8FSkpWQK', 'B8khW584W5a', 'W758xbqq', 'W5lcL8k0W64k', 'wa1YW7tcJq', 'WOFdGSkND8kF', 'W6vcWRxdVvq', 'W6THzmkLWOW', 'WPaxgum', 'a2ZdPLyX', 'dXJdMKRdKW', 'sHPjxSk/', 'E8oSrJFdRG', 'WPX2emkvvW', 'W6xcLW3dNWi', 'jG5ja0i', 'WQBcR8kbWO/dUmo4W4/cOW', 'WPfrW4a', 'W4CvFCk3WQW', 'W73GTjpGTPRGT7BdUW', 'mxDcW5pcTG', 'AaGCt0O', 'hSk5DCknWO8', 'WQeDwSkqWPe', 'WPdcPt4', 'WO9Yfmob', 'W5VcUZLrDG', 'WRiMEmk3mG', 'BSo7ws7dPW', 'WOTvA8kIWRO', 'WPrdW5ebma', 'pSoMACoDWPK', 'WQeYbgNdLq', 'WOBdHSkHCCky', 'kJNdJ2RdSa', 'WQldNYzgWRm', 'W4NcHJLeyG', 'tCoKW53cQ8op', 'EanujMa', 'kCkcWRTCCW', 'WQb5WRpdH8ox', 'esXhpq', 'W5eGuSkYga', 'WRbSWORdJ8kx', 'WPXRC8k7WPy', 'W4dcSce', 'WR86DmoBW68', 'fCk8WQbMvW', 'f8oGW4Hfga', 'WPddHSkZCq', 'j8o8BqpcMq', 'qNBdVeq4', 'gsfF', 'W6P2Amk+WQO', 'wt90F8kG', 'W4imiCk6W5C', 'WRm6wSk4pG', 'WRGAaf7dMq', 'wXPwW7pcSq', 'WPjLWPC', 'W6NcVmknW5y', 'fCksWOvLvW', 'fSo+W4vgWRu', 'ax8CWOtcNG', 'W67cICk/W4rf', 'dSkQWO58qW', 'W7XutGqD', 'WO97aCoqfa', 'W71VWRxcMGO', 'WOa+x8kZWOS', 'WRNdVfP3W7y', 'v8kfW5GuW6q', 'W6PyWRFdULm', 'aa0JWOiC', 'jmkRWQjZwq', 'W79Vy8k+WOy', 'FZJdLMNcLq', 'jKeGWPldTq', 'WRpcGrW', 'zmoNW5VcHmoC', 'zmoNW5dcRSof', 'WRC6o8obW7K', 'tCofW7TmWRS', 'W7SJjetdLG', 'WPbKWP3dVCo9', 'bHe+WPCA', 'W4lcOta', 'WRFdJmkUzSkn', 'W5PdACo1', 'hs5rwG8', 'WPNdUJOBWRC', 'W7votYtdJSonFSk2WPRcSCoZsxW', 'fWC1WOi', 'WRpcIqi', 'wrPjW5tcNG', 'fCorWQZdLSkV', 'b8kUq8kBWPW', 'aZvhdLa', 'oCojWQq', 'd8kYsW', 'WPfFWP3dQmk/', 'C8oVEbBdMq', 'hSkHWQr3sG', 'WRGmj0ddMa', 'WQpdS0iLW6y', 'aSkjWOTAtq', 'mIalWPWr', 'WOz4W5ldRCo3', 'WQTHWOldNmoR', 'xCk8hMhcTG', 'zSo1WOSPW74', 'b8oNW49JWPq', 'bcnO', 'WRpdJJaV', 'xc5jihS', 'W61RmmkTWO8', 'd8kTWRv1ua', 'j8o6vY3dSG', 'rSkhW4SSW6y', 'WPvtuSkZWQW', 'W5JdTtLoDG', 'WQZcQCogW4hcTCkiWOZcMmk3sZNcUdC', 'zverAJy', 'xSo8W7/cKSo0', 'katdMN7dGa', 'xW8yFfO', 'WQRdV8oYWQxdQG', 'kqKIWRa2', 'pCozW6xdJCkV', 'hSk6WRf3ua', 'idL5W6hcIG', 'hSk3w8k2WQa', 'W4rjvmkFW4m', 'W7xcSqK', 'WPnQWQddKSkl', 'W4fzB8oVWPG', 'DvldNNWj', 'fSkLWPLUjW', 'WQXZW7tdM8k5', 'W6LYF8k5WPm', 'y8oFrrpdJW', 'ghuq', 'pdretmoV', 'W6FJGBfwuCkY', 'fWOOWPG', 'WQldMcy', 'tvOeAt4', 'hHijAvC', 'WRJdKu00W5m', 'WRddMsW5WQS', 'gMGfWQ3dPW', 'WQxdR8obWPiA', 'W6fYAq', 'bcupDbq', 'WQKybx4', 'WOhdKmkL', 'W7uyvSkEoG', 'axuzWPJdHW', 'WOTEx8oNWQG', 'mKubWOldSW', 'WOvcW6tdQCku', 'WRtdIJCVWRm', 'WRtdVamYW6W', 'WQbZDCk4WOC', 'jsbeiX0', 'ALpdM2OO', 'o8keWODSoa', 'BmoaWRmdW6G', 'WQfnaSoHnG', 'W7fItGGC', 'W4bHFGaT', 'W51fBSk7WOK', 'W73cQmkgW5/dIa', '8kkrMSkd', 'WPKXAmoLW78', 'W4nCBmoYWOK', 'l8oewsBcOa', 'tfiqlq', 'WQGPACoAW7y', 'W4ZcMSorWOtcVq', 'WPH8WR3dImo+', 'WOzAr8kZ', 'W5HwWQxdMe4', 'WP4XAmkGWRa', 'W7BcTmkbW6hdJG', 'rCkIWPa7W5FcP8kLr8oQaYZcJW', 'dq06W5ys', 'W4bwtrCm', 'W4D0DIaH', 'W7BcQ8kmW6tdHG', 'zSo7tW', 'g8kKW4HdsG', 'WRDyvCkqWPK', 'wbDtkNy', 'W6nHFSkO', 'fmkEWOrArq', 'WODwW5eumG', 'W7RdRSkgWPNdOW', 'WOVGTAtGTOtGT7ZGT4K', 'cdz9', 'qGqCCua', 'W5DFWQJdU1O', 'hCk+WOLosG', 'WQpdJJS4', 'WQXVWOldKCkG', 'kmoKvHJcOa', 'WQlcJG3dMWm', 'DmoUW5dcO8oA', 'eCoKW5bRWOC', 'W6noxcGp', 'oN4QWPZdNW', 'WRpdOWSlWPa', 'WRJdU8ovWRtcHq', 'aar4W6BcKG', 'u2C9WRtdIa', 'ESoSvttdUq', '4lwl4lEr4lwp4lwx4lwB', 'stLHACkg', 'gSo0W4zNWOu', 'WQ49smklnG', 'W4dcVdTxmW', 'WPz7WOhdQmoT', 'WOrAvmkSWQy', 'irOuWQWv', 'yvOtyIy', 'W4bEB8o2WPi', 'za5mFLu', 'b8oYW41UWQ0', 'WQRcRmoaW4lcUmkkW7BcRCkNEGRcGa', 'ySocWROIW4m', 'jmoEWODfWQy', 'WOOFvCkqWOe', 'EGnoW6RcSa', 'kmkry8khWPa', 'WR1zjSomma', 'pmk/WOLQmG', 'xJ/cNq', 'axD9W6FcHa', 'fSkBWQ14rW', 'W4rosqzu', 'WQfosmkvWPS', 'FCkCW5y', 'WQDHW6aMbG', 'fcjIW7dcNq', 'W7D2q8oTWQ4', 'WQvUWQFdV8oF', 'W5NcSdLFzW', 'W5XjBSo8WOK', 'W5dcV8kVW7pdMG', 'pmoc776u772h7765', 'zCoKW5/cPa', 'WRq8iem', '8jIARY1pWP0C', 'W5PVmmkRWOy', 'cCoGqr7cIa', 'WPFdISkWC8kc', 'eaCJWPiP', 'smo2BCk0WRy', 'C8oltmkfWPe', 'FIq+', 'WRbnWOuFoG', 'WRW0CSknWRNcHGyT', 'kCozWORdHCko', 'W7dcSSol', 'rcLhW7RcKq', 'i3zgCrm', 'W6mTrmoP', 'vaqF', 'W5tdN8oeWPu', 'h8oYW5O', 'W5XaECk7WOK', 'qMXbW6VcIG', 'WRJcQLaK', 'W7f2WQJdO2u', 'WQe2kuG', 'WOviWPZdUCkc', 'W5PoE8k6WRq', 'roodMG/cJSkm', 'cG1Kl08', 'W4xdICopWOdcTW', 'a8kSWOfTgq', 'W4BcTcG', 'W7ZdTCkfWPFdOW', 'kcpdSexdGW', 'wbrhsSkj', 'W6JcUSkhW4RdHG', 'WO9ZbCouhq', 'WQ5pr8kcWQy', 'WPyOWP3dOmk4', 'WRC6yG', 'W6/dUmoF', 'xmoHWPWjW58', 'a0tdHhWk', 'fSk9W4aqWRy', 'W4ThsmkQWRW', 'WO8bBSknWRm', 'WQTis8ouWP8', '8lotUHK', 'mSoiWPZdGmkc', 'WQ4CaN7cKW', 'FCogqmkt', 'WQxdVez9WOG', 'W7XvWQ3dKuC', 'kSkJWPHWgq', 'WR8yg3lcJq', 'WO9Dt8kP', 'jSo/W5tcUmoA', 'WPRdQHaFWPO', 'r8oRWPD2W5e', 'WQvjxG', 'W5/cNSovWOtcHq', 'w1elBXe', 'WQfQWRRdImol', 'W4uibG', 'ySkbW5ZcQCoa', 'W4lcLCoFWO7cVq', 'rLVdGG', 's8ofWRqFW6S', 'W4xdISouWOtcVq', 'WOddNCooWO7cPq', 'WPTPWOldHmo1', 'WO9hW5W', 'xUkEKSkdwCk1', 'jXqgaey', 'WR5LW6FdM8kH', 'W7hdQmkuWPxdUq', 'WR4iw8kbWOq', 'brBdVfVdLq', 'kJLvxb0', 'EtHEW6ZcRG', 'W4vzEmkCWPa', 'oJuPuqi', 'BmoVys7dOa', 'l3VdV27dOW', 'W47cKt1pCa', 'FCoWrJ7cQG', 'tt3cThVcMG', 'y8o4W4lcOCoj', 'E8oDuSkgWPm', 'WODoW7u', 'WRBdPbL9WOG', 'WRPRhCoAbq', 'k8ktqmkPWP8', 'WR/cVmovW5BcRq', 'WP9/g8orpG', 'W6vLAq', 'EmojWQtdImo2', 'W4rezCo1', 'WPGIyCoLWQW', 'WOJcQGJdMa4', 'W6JcGbLgqq', 'f8k5WPTehW', 'WQSTDCokW5i', 'W4z1W6FdVgu', 'WQ5NC8kWW4m', 'W5JcVSkgW7fG', 'FCoeWRaSW5K', 'WODwWP9FxW', 'WOD2W5RdM8k0', 'WRKMxSk4mq', 'W7pcVSkm', 'WP5PWOi', 'WRddK8kUA8kA', 'y8omW6pcJ8oQ', 'sSorW7SlW64', 'WQ7cGrJdNWG', 'ea3cHHKX', 'WOddT8oLW4hcKG', 'WRD1W7NdOmkc', 'c8kKtSkMWOa', 'WQSAb3BcIW', 'vriFFf4', 'W51uW7hdPCkx', 'WQf5FCkyWQ0', 'pbL/z8k6', 'pCotWQtdJCk6', 'uG9pkN4', 'W57dQSkmWOZdOa', 'WRBJGl8mW43dGW', 'WOZcRYhdUti', 'B8oGwJ7dUq', 'WPWlAConW6O', 'W6xcQCkCW5bl', 'WO4pe3ZcJW', 'WOiqvCoBha', 'W6VcImkdW5HP', 'bJPgqI4', '44oHmh/cVW', 'WOLQx8kUWPG', 'WPXMWPFdQSos', 'p8opWQRdMSkM', 'ySoStW', 'BmoyBCkcWPm', 'WPbPWOBdQ8o/', 'W6/cVmkuW4fE', 'y8oArZ/dMq', 'nNqh', 'WOPaxW', 'W7f1WQNdTa', 'ssxcUKBcQG', 'WQzzumk+WPe', 'WQeGia', 'r2VdVLq0', 'aCkVWOzgjW', 'vs1sW7ZcGG', 'WRlcNSkhW4ZdGa', '44c6BgxdQ8ka', 'W4VcVSkbW4RdHG', 'WOzhW5CgDq', 'agafWP3dIG', 'dZFdIMldJa', 'WPys4P2XWPJdGW', 'iuepWP3dSq', 'DSoQW4xcTmol', 'WOW8yW', 'p8kMrmkPWOq', 'WOjTBCkqWPK', 'WOddJmoGymkj', 'W6lcOxHiCG', 'WRj4WR7cSge', 'dCoZwG7cNW', 'iCkdWQDSua', 'W63dLLZcHLy', 'WPldJdaFWPe', 'WRHFWRxdOM8', 'smosWRCpW68', '4lwByHhdOG', 'W493vmk1WQy', 'WOddGSkJzSkF', 'W5pcLCk3W5xdQq', 'WQFdTuiZW7e', 'vmo5WP4zW7a', 'esxcNwO', '8ksWMW8', 'WOZcSgeyW5y', 'u2uAWPhdJa', 'i8khWQPjcW', 'WRL5WPRdNSk7', 'x8ohWRCdW68', 'W7tdUCkmWOxdOG', 'WOjZCCkXWPW', 'WQqKvSkUfq', 'kxFdS19e', 'cmkoWPOEAW', 'fSkTWQ0', 'W6PsrmkTWQ8', 'W7WGFCkPWPa', 'wKCRwJS', 'ze4aFrC', 'W7/cQCkAW4VdNW', 'hmo2dSoJW68', 'cXH5W6hcTq', 'fgigWOhdJG', 'AXzSFmk8', 'wmoEWRypWRS', 'WPyNpv3dUW', 'WRRdPvn3W6e', 'W4HbAmkEWRS', 'CXb5ACkS', 'WOi4iMZdOa', 'iqDna3i', 'W4a+W4lcVSkO', 'emkTWRPItq', 'tquOWOiE', 'W63dTCoOWQBcLW', 'rCozW6JcRSoC', 'vSkKgLVdIa', 'W4tdQCovWQFcHW', 'W5VdRmkBWO/dUW', 'eMazW5RdNq', 'tmoOuCkpWPy', 'WRfYaa', 'W7VcSmkzW4De', 'WRiXje7dHG', 'DMBdJ2ql', 'u1j9', 'W6VdTmofWPVcMa', 'WPBdVXiLWRW', 'd8kTWRL5uG', 'WQTIrmkGlG', 'uILvW7O', 'lCovW7DmWO8', 'WRq+bmk0Ea', 'acfhkMe', 'Dmo/W5JcO8oh', 'DmoUW4hcRmox', 'W7f4emoI', 'qmkxWRypW7y', 'uuBdL3al', 'msybybm', 'W7WxD8kDoG', 'W6bUF8k5WO0', 'kCoOWRddU8k7', 'W47cPcjYyW', 'icG0WQ84', 'W6jiECk8WPm', 'W40Kz8kGW6m', 'eYLd', 'FX9Jkmk8', 'WRO9w8kkda', 'tCk+WPHmzW', 'mSo8WRtdU8k8', 'WQe5ia', 'W59tWONcSeq', 'sCk4WPm8W4u', 'W77cVCovW5/dMG', 'WQ5gWPNdI8kL', 'W5ddM8oiWPxcTq', 'WPK1D8kX', 'gIqEB1y', 'WODxW7e', 'va1qW4pcGa', 'rmkzx8kNWQS', 'W5tcMSoDWO/dSa', 'e8kHWOXOEq', 'txRdVveo', 'DgS6wgS', 'W5ziWPZdVmkT', 'W5vCAmo+WPa', 'BmkjW4ebW78', 'WQ3dQ8kXy8kk', 'uSoQW4GcsG', 'WPbbqW', 'umkeWQDEW6C', 'g8oLWOmRW4O', 'WPLPea', 'ahuDWPddMW', 'WOtdJJC4WRi', 'W7NdGYOOWR4', 'hSksrSkdWO4', 'W6JcUSkbW4RdIG', 'W47cPITDDa', 'bCo3vW', 'WRBdM8kzsmke', 'WPxdJCkUFCkz', 'WObbvCkMWQ4', 'A8kMuc7dUq', 'WPVcRspdOIm', 'seBdJW', 'Eq1+ACkO', 'W5NcICkX', 'W6a2vq', 'WP1iWOS', 'WQz+tmkWWRW', 'FqPOkmki', 'BeaatZO', 'zCo9BdNdOG', 'WRJcTmkaW4RcJW', 'qmosWRunW68', 'c8khWR1Mqq', 'gvhcIaRcMW', 'r0ldJW', 'BmohuCktWP0', 'AJDfzW', 'abtdKa'];
    _0x1981 = function () {
      return _0x760a01;
    };
    return _0x1981();
  }
  _0x3603ea.pattern = "tagadmin";
  _0x3603ea.react = '🔖';
  _0x3603ea.desc = descg;
  _0x3603ea.category = "group";
  _0x3603ea.use = ".tagadmin";
  _0x3603ea.filename = __filename;
  cmd(_0x3603ea, async (_0x20ec40, _0x4549e6, _0x2d6779, {
    from: _0x6a1e34,
    prefix: _0x47c2c,
    l: _0x5988c9,
    quoted: _0x22576a,
    body: _0x3584cf,
    isCmd: _0x207c83,
    command: _0x4ea09f,
    args: _0x2e72ca,
    q: _0x13166e,
    isGroup: _0x1caf50,
    sender: _0x5f13b0,
    senderNumber: _0x374793,
    botNumber2: _0xb36ca8,
    botNumber: _0x39d1dd,
    pushname: _0x393f4c,
    isMe: _0x1b3b17,
    isOwner: _0x25147a,
    groupMetadata: _0x381304,
    groupName: _0x2e07a1,
    participants: _0x348a1b,
    groupAdmins: _0x3ce587,
    isBotAdmins: _0x5d2729,
    isAdmins: _0x861a57,
    reply: _0x1e2cb2
  }) => {
    try {
      if (!_0x1caf50) {
        return _0x1e2cb2(ONLGROUP);
      }
      let _0x1eda69 = " _❗ " + _0x2e07a1 + "Admins ❗_\n                  \n*MASSAGE :* " + (_0x13166e ? _0x13166e : "blank") + "\n\n";
      for (let _0x5c5b86 of _0x3ce587) {
        _0x1eda69 += "    ";
      }
      _0x20ec40.sendMessage(_0x6a1e34, {
        'text': _0x1eda69,
        'mentions': _0x3ce587.map(_0x2757b9 => _0x2757b9.id)
      });
      const _0x371a22 = {
        text: '✅',
        key: _0x4549e6.key
      };
      const _0x15cba5 = {
        react: _0x371a22
      };
      await _0x20ec40.sendMessage(_0x6a1e34, _0x15cba5);
    } catch (_0x3d0c27) {
      _0x1e2cb2('');
      _0x5988c9(_0x3d0c27);
    }
  });
  const _0xa12c41 = {
    pattern: "mute",
    react: '🔖',
    desc: "close a group",
    category: "group",
    use: ".mute",
    filename: __filename
  };
  cmd(_0xa12c41, async (_0x529a00, _0x223c30, _0x52187d, {
    from: _0x538627,
    prefix: _0x1e72bb,
    l: _0x279f4a,
    quoted: _0x2e8ef0,
    body: _0x478ecd,
    isCmd: _0x5d02dc,
    command: _0x5567fc,
    args: _0x5d0929,
    q: _0x392cfe,
    isGroup: _0x47f9e5,
    sender: _0x13213d,
    senderNumber: _0x16403a,
    botNumber2: _0xd7044a,
    botNumber: _0x104deb,
    pushname: _0x268603,
    isMe: _0x1cba87,
    isOwner: _0x2ca46a,
    groupMetadata: _0x19cc70,
    groupName: _0x4a1886,
    participants: _0xc7328d,
    groupAdmins: _0x44224f,
    isBotAdmins: _0x1d8940,
    isAdmins: _0x2d898b,
    reply: _0x275eea
  }) => {
    function _0x1a7593(_0x2a506a, _0x49564d, _0x5af418, _0x69546b, _0x17d68f) {
      return _0x4b92(_0x69546b - 0xa6 - 0x24d, _0x2a506a);
    }
    function _0x102ea0(_0x2ea1da, _0x576607, _0x443456, _0x6ace38, _0x510b60) {
      return _0x4b92(_0x443456 - 0x53 - 0x34d, _0x2ea1da);
    }
    function _0x478eb3(_0x234b37, _0x480081, _0x3ae4c3, _0x261e6c, _0x6f6c58) {
      return _0x4b92(_0x6f6c58 - 0x7 - 0x24d, _0x234b37);
    }
    function _0x287121(_0x4483e8, _0x1695fc, _0x4728ce, _0x2b89fe, _0x428405) {
      return _0x4b92(_0x4483e8 + 0x239 + 0x9d, _0x4728ce);
    }
    function _0x26b6e9(_0x18e781, _0x3628c3, _0x3f2d98, _0x1937cf, _0x119156) {
      return _0x4b92(_0x119156 - 0xd - 0x23d, _0x3f2d98);
    }
    const _0x13d3bd = {
      'FiJrj': function (_0x63fa35, _0x8cb5c7) {
        return _0x63fa35(_0x8cb5c7);
      },
      'doqLM': "*Error !!*",
      'atQlX': function (_0x1cd286, _0x434bb3) {
        return _0x1cd286(_0x434bb3);
      },
      'rsNQi': function (_0x3f72a2, _0x1d29ba) {
        return _0x3f72a2 === _0x1d29ba;
      },
      'eqzNp': "CSBJN",
      'jDyTE': "CkvyX",
      'Dpnyv': function (_0x4f03c1, _0x4ee15b) {
        return _0x4f03c1(_0x4ee15b);
      },
      'XSWFN': function (_0x16ad95, _0x13328f) {
        return _0x16ad95(_0x13328f);
      },
      'RFphb': "announcement",
      'hpGHY': function (_0x47c1a0, _0x4b4616) {
        return _0x47c1a0(_0x4b4616);
      },
      'GZCvS': "🛑 GROUP IS CLOSED MY BOT OWNER"
    };
    try {
      if (!_0x47f9e5) {
        return _0x275eea(ONLGROUP);
      }
      if (!_0x1d8940) {
        return _0x275eea(botAdmin);
      }
      if (!_0x2d898b) {
        return _0x275eea(ADMIN);
      }
      await _0x529a00.groupSettingUpdate(_0x223c30.chat, "announcement");
      const _0x41c0a2 = await _0x529a00.sendMessage(_0x223c30.chat.G_MUTE);
      const _0xb409b9 = {
        text: '✅',
        key: _0x223c30.key
      };
      const _0xd6b6fa = {
        react: _0xb409b9
      };
      await _0x529a00.sendMessage(_0x538627, _0xd6b6fa);
    } catch (_0xc1aa26) {
      _0x275eea("🛑 GROUP IS CLOSED MY BOT OWNER");
      _0x279f4a(_0xc1aa26);
    }
  });
  const _0x2ac8d8 = {
    pattern: "unmute",
    react: '🔖',
    desc: "open a group",
    category: "group",
    use: ".unmute",
    filename: __filename
  };
  cmd(_0x2ac8d8, async (_0x1da74b, _0x6ff362, _0x38346e, {
    from: _0x3b5d3a,
    prefix: _0xa123b8,
    l: _0x2fa0a3,
    quoted: _0x5d54d9,
    body: _0x474af0,
    isCmd: _0x2a18e9,
    command: _0x1a2f46,
    args: _0x56ac21,
    q: _0x29003d,
    isGroup: _0x500aca,
    sender: _0x47e2d2,
    senderNumber: _0x5473d8,
    botNumber2: _0x84cafb,
    botNumber: _0x3b44c1,
    pushname: _0x58c4c9,
    isMe: _0xd4d8ad,
    isOwner: _0x127f11,
    groupMetadata: _0x352867,
    groupName: _0x261aee,
    participants: _0x11c57c,
    groupAdmins: _0x231112,
    isBotAdmins: _0x51b540,
    isAdmins: _0x6c6858,
    reply: _0x234755
  }) => {
    const _0x137861 = {
      'ZoxYp': function (_0x4bd75b, _0x5edbc6) {
        return _0x4bd75b(_0x5edbc6);
      },
      'vHcsh': "not_announcement",
      'pDaaa': function (_0x158d97, _0x2c43ca) {
        return _0x158d97(_0x2c43ca);
      },
      'CUAzR': "🛑 GROUP IS OPEN MY BOT OWNER",
      'kmRvT': function (_0x22fafe, _0x4ba95d) {
        return _0x22fafe(_0x4ba95d);
      }
    };
    function _0x4f0cc4(_0x5e0106, _0x4793ab, _0x5c389c, _0x3226da, _0x3802cf) {
      return _0x4b92(_0x5e0106 + 0x4c3 - 0x24d, _0x3802cf);
    }
    function _0x4b9b0b(_0x20f908, _0x556580, _0x4dc7c4, _0x3830aa, _0x1fdb52) {
      return _0x4b92(_0x4dc7c4 + 0x1b9 - 0x23d, _0x556580);
    }
    function _0x265c39(_0x5b6fca, _0x5ed965, _0x4547b0, _0x41ecf2, _0x42a37e) {
      return _0x4b92(_0x4547b0 - 0x137 + 0x9d, _0x5b6fca);
    }
    function _0x4576f4(_0x5d724b, _0x3beb75, _0x86efb, _0x1adc12, _0x58a387) {
      return _0x4b92(_0x3beb75 + 0x720 - 0x34d, _0x1adc12);
    }
    function _0x189f02(_0x3f56e2, _0x2e5cfa, _0x367bde, _0x5214c2, _0x34ad97) {
      return _0x4b92(_0x3f56e2 + 0x48d - 0x3d6, _0x2e5cfa);
    }
    try {
      if (!_0x500aca) {
        return _0x234755(ONLGROUP);
      }
      if (!_0x51b540) {
        return _0x234755(botAdmin);
      }
      if (!_0x6c6858) {
        return _0x234755(ADMIN);
      }
      await _0x1da74b.groupSettingUpdate(_0x6ff362.chat, "not_announcement");
      const _0xef542a = await _0x1da74b.sendMessage(_0x6ff362.chat.G_UNMUTE);
      const _0x361c7c = {
        text: '✅',
        key: _0x6ff362.key
      };
      const _0x5abb6b = {
        react: _0x361c7c
      };
      await _0x1da74b.sendMessage(_0x3b5d3a, _0x5abb6b);
    } catch (_0x4bffcb) {
      _0x234755("🛑 GROUP IS OPEN MY BOT OWNER");
      _0x2fa0a3(_0x4bffcb);
    }
  });
  const _0x1e4f55 = {
    pattern: "kick",
    react: '🔖',
    desc: "kick a member",
    category: "group",
    use: ".kick",
    filename: __filename
  };
  cmd(_0x1e4f55, async (_0x14b993, _0x33418f, _0x4f9e46, {
    from: _0x55a7d8,
    prefix: _0x51b8cf,
    l: _0x3ec90e,
    quoted: _0x5e933f,
    body: _0x2fcca1,
    isCmd: _0x495cdb,
    command: _0x31efe6,
    args: _0x35a4d5,
    q: _0xec215c,
    isGroup: _0x1f7376,
    sender: _0x7d936e,
    senderNumber: _0x2f9361,
    botNumber2: _0x377b63,
    botNumber: _0x2f91d3,
    pushname: _0x3b4138,
    isMe: _0x535570,
    isOwner: _0x482bb3,
    groupMetadata: _0x29be64,
    groupName: _0x8daa01,
    participants: _0x6800ec,
    groupAdmins: _0x5a1fa4,
    isBotAdmins: _0x581009,
    isAdmins: _0x168bbd,
    reply: _0x4d48e8
  }) => {
    function _0x2cbbd6(_0x548977, _0x49f609, _0x136d4d, _0x407129, _0x46297d) {
      return _0x4b92(_0x548977 - 0x2 - 0x34d, _0x407129);
    }
    function _0xfe0e11(_0x34fe81, _0x5128a5, _0x25eca8, _0x2ffc06, _0x2acc3f) {
      return _0x4b92(_0x2ffc06 + 0x11 - 0x3d6, _0x5128a5);
    }
    function _0x53a063(_0x15d3d1, _0x47b2fe, _0x4581be, _0x4b1d08, _0x1be5bf) {
      return _0x4b92(_0x47b2fe + 0x101 + 0x9d, _0x4b1d08);
    }
    function _0x234106(_0x43ff8f, _0x2ee1fc, _0x25a4fb, _0x2b5f92, _0x5ebaf8) {
      return _0x4b92(_0x2ee1fc + 0x4b - 0x3d6, _0x43ff8f);
    }
    const _0x2c7118 = {
      'xIBfZ': function (_0x24e1ac, _0x1eeaef) {
        return _0x24e1ac(_0x1eeaef);
      },
      'qdOjX': function (_0x147f90, _0x22ccf0) {
        return _0x147f90 + _0x22ccf0;
      },
      'mTzNH': "@s.whatsapp.net",
      'OCgRD': "remove",
      'FGLEU': function (_0x34f50c, _0x2b9725) {
        return _0x34f50c(_0x2b9725);
      },
      'UiVmZ': "*Error !!*"
    };
    function _0x40bfbf(_0x290a23, _0x285bb7, _0x3f0432, _0x39df05, _0x24bbed) {
      return _0x4b92(_0x3f0432 + 0x404 - 0x34d, _0x24bbed);
    }
    try {
      if (!_0x1f7376) {
        return _0x4d48e8(ONLGROUP);
      }
      if (!_0x581009) {
        return _0x4d48e8(botAdmin);
      }
      if (!_0x168bbd) {
        return _0x4d48e8(ADMIN);
      }
      let _0x549510 = _0x33418f.mentionedJid ? _0x33418f.mentionedJid : _0x33418f.quoted ? _0x33418f.quoted.sender : _0xec215c.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
      await _0x14b993.groupParticipantsUpdate(_0x33418f.chat, [_0x549510], "remove").then(_0x216bee => _0x4d48e8(jsonformat(_0x216bee)))["catch"](_0x485d58 => _0x4d48e8(jsonformat(_0x485d58)));
      const _0x50d693 = {
        text: '✅',
        key: _0x33418f.key
      };
      const _0x5cc614 = {
        react: _0x50d693
      };
      await _0x14b993.sendMessage(_0x55a7d8, _0x5cc614);
    } catch (_0x3a68f2) {
      _0x4d48e8("*Error !!*");
      _0x3ec90e(_0x3a68f2);
    }
  });
  const _0xf6c2a1 = {
    pattern: "add",
    react: '🔖',
    desc: "Add a member",
    category: "group",
    use: ".add",
    filename: __filename
  };
  cmd(_0xf6c2a1, async (_0x586141, _0x263133, _0x168da1, {
    from: _0x1ee04a,
    prefix: _0x2f08a4,
    l: _0x11a166,
    quoted: _0x564af5,
    body: _0x5796c2,
    isCmd: _0x5735c0,
    command: _0x5094fe,
    args: _0x53324f,
    q: _0x1477c5,
    isGroup: _0xd16408,
    sender: _0x219295,
    senderNumber: _0xed2b78,
    botNumber2: _0x524f8b,
    botNumber: _0x341b0e,
    pushname: _0x46cf29,
    isMe: _0x39baea,
    isOwner: _0x42eaa3,
    groupMetadata: _0x5831df,
    groupName: _0x54edae,
    participants: _0x3a979a,
    groupAdmins: _0xc8914b,
    isBotAdmins: _0x2900c4,
    isAdmins: _0x284bb5,
    reply: _0xdc3d65
  }) => {
    function _0x416fc4(_0xb9ddff, _0x8b6f17, _0x491d4a, _0x5c0827, _0xe9cbd3) {
      return _0x4b92(_0x8b6f17 + 0x2aa - 0x3d6, _0x5c0827);
    }
    function _0x5822ce(_0x248cde, _0x8538f0, _0x30acf5, _0x4072e5, _0x16d7ca) {
      return _0x4b92(_0x248cde + 0x3d4 - 0x34d, _0x16d7ca);
    }
    function _0x402068(_0x5d77a9, _0x5f575, _0x9b3019, _0x39840d, _0x3a3d92) {
      return _0x4b92(_0x39840d + 0x250 - 0x23d, _0x5d77a9);
    }
    function _0x31f185(_0x50e268, _0x21dabe, _0x2a7e6b, _0xc41d30, _0x278992) {
      return _0x4b92(_0x50e268 + 0x682 - 0x3d6, _0x278992);
    }
    const _0x2eb430 = {
      'poZOJ': function (_0x4cc34c, _0x551c31) {
        return _0x4cc34c(_0x551c31);
      },
      'tTfYy': function (_0x3e5755, _0x5c0c08) {
        return _0x3e5755 + _0x5c0c08;
      },
      'PvAUw': "@s.whatsapp.net",
      'XVHOj': "add",
      'AuCyO': "*Error !!*",
      'BfeBI': function (_0x48da71, _0x38af0e) {
        return _0x48da71(_0x38af0e);
      }
    };
    function _0x26e3a4(_0x17a8bd, _0x1cea27, _0xbf0292, _0x4d1438, _0x1fe5c8) {
      return _0x4b92(_0xbf0292 + 0x4ba - 0x24d, _0x1cea27);
    }
    try {
      if (!_0x2900c4) {
        return _0xdc3d65(botAdmin);
      }
      let _0x338204 = _0x263133.quoted ? _0x263133.quoted.sender : _0x1477c5.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
      await _0x586141.groupParticipantsUpdate(_0x263133.chat, [_0x338204], "add").then(_0x8afbd3 => _0xdc3d65(jsonformat(_0x8afbd3)))["catch"](_0x2e1992 => _0xdc3d65(jsonformat(_0x2e1992)));
      const _0x15fcb7 = {
        text: '✅',
        key: _0x263133.key
      };
      const _0x37e487 = {
        react: _0x15fcb7
      };
      await _0x586141.sendMessage(_0x1ee04a, _0x37e487);
    } catch (_0x39dacd) {
      _0xdc3d65("*Error !!*");
      _0x11a166(_0x39dacd);
    }
  });
  const _0x275e6f = {
    pattern: "promote",
    react: '🔖',
    desc: "promote admin to a member",
    category: "group",
    use: ".promote",
    filename: __filename
  };
  cmd(_0x275e6f, async (_0x5ab939, _0x5e5764, _0x2a5e3b, {
    from: _0xc29d9c,
    prefix: _0x573c6a,
    l: _0x568b17,
    quoted: _0x2b4314,
    body: _0x37294e,
    isCmd: _0x559206,
    command: _0x5b86d0,
    args: _0x4b765a,
    q: _0x4ab5c7,
    isGroup: _0x149e72,
    sender: _0x1adc23,
    senderNumber: _0x282934,
    botNumber2: _0x21567,
    botNumber: _0x5e44fa,
    pushname: _0x5cd4b5,
    isMe: _0x2df6cb,
    isOwner: _0x41bc8b,
    groupMetadata: _0x44d659,
    groupName: _0x367505,
    participants: _0x5e2977,
    groupAdmins: _0x3df9c7,
    isBotAdmins: _0x3fd138,
    isAdmins: _0x527fd6,
    reply: _0x1e7296
  }) => {
    const _0x44c10c = {
      'qwEWo': function (_0x58ce3a, _0x45fe7f) {
        return _0x58ce3a(_0x45fe7f);
      },
      'qqaGE': function (_0x4347df, _0x921c51) {
        return _0x4347df(_0x921c51);
      },
      'TlXTz': function (_0x26ff65, _0x16ea4b) {
        return _0x26ff65(_0x16ea4b);
      },
      'INoNR': function (_0x250316, _0x32630a) {
        return _0x250316 + _0x32630a;
      },
      'WDntV': "@s.whatsapp.net",
      'MVxUa': "promote",
      'dvxrI': "🛑 GROUP ADMIN PROMOTE BY MY BOT OWNER",
      'bYHni': function (_0x36372c, _0x3d9e7c) {
        return _0x36372c(_0x3d9e7c);
      },
      'HZoAj': "*Error !!*",
      'TNkvW': function (_0x3087b3, _0x5233fd) {
        return _0x3087b3(_0x5233fd);
      }
    };
    function _0x253314(_0x365e1f, _0x4514eb, _0x2c6a94, _0x51b0f9, _0x528d37) {
      return _0x4b92(_0x365e1f + 0x32c - 0x34d, _0x4514eb);
    }
    function _0x8a73da(_0x2fa6d0, _0x551de3, _0x5cc557, _0x5bdc6, _0x404805) {
      return _0x4b92(_0x404805 + 0x10e - 0x34d, _0x5cc557);
    }
    function _0x6ca1fa(_0x5f21be, _0x13a638, _0x248d4d, _0x568c73, _0x3bb816) {
      return _0x4b92(_0x248d4d + 0x1a5 - 0x34d, _0x5f21be);
    }
    function _0x2aa963(_0x215015, _0x477053, _0x28a6d2, _0x1c6384, _0x20cf23) {
      return _0x4b92(_0x20cf23 - 0x148 - 0x23d, _0x28a6d2);
    }
    function _0x580cbe(_0x172889, _0x28fa78, _0x58fb19, _0x162baa, _0x1f8005) {
      return _0x4b92(_0x1f8005 + 0x504 - 0x24d, _0x172889);
    }
    try {
      if (!_0x149e72) {
        return _0x1e7296(ONLGROUP);
      }
      if (!_0x3fd138) {
        return _0x1e7296(botAdmin);
      }
      if (!_0x527fd6) {
        return _0x1e7296(ADMIN);
      }
      let _0x5a1edf = _0x5e5764.mentionedJid ? _0x5e5764.mentionedJid : _0x5e5764.quoted ? _0x5e5764.quoted.sender : _0x4ab5c7.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
      await _0x5ab939.groupParticipantsUpdate(_0x5e5764.chat, [_0x5a1edf], "promote").then(_0x6550f4 => _0x1e7296(jsonformat(_0x6550f4)))["catch"](_0x5c7060 => _0x1e7296(jsonformat(_0x5c7060)));
      _0x1e7296("🛑 GROUP ADMIN PROMOTE BY MY BOT OWNER");
      const _0x405b76 = {
        text: '✅',
        key: _0x5e5764.key
      };
      const _0x11e844 = {
        react: _0x405b76
      };
      await _0x5ab939.sendMessage(_0xc29d9c, _0x11e844);
    } catch (_0x11fd3b) {
      _0x1e7296("*Error !!*");
      _0x568b17(_0x11fd3b);
    }
  });
  const _0x3be67d = {
    pattern: "demote",
    react: '🔖',
    desc: "demote admin to a member",
    category: "group",
    use: ".demote",
    filename: __filename
  };
  cmd(_0x3be67d, async (_0x3ceebe, _0x3afec3, _0x267edf, {
    from: _0x4c9600,
    prefix: _0x222290,
    l: _0x5a195e,
    quoted: _0x3562c3,
    body: _0x382e5b,
    isCmd: _0x2d879e,
    command: _0x51a133,
    args: _0x4a6c02,
    q: _0x38bb39,
    isGroup: _0x351dc5,
    sender: _0xe64476,
    senderNumber: _0x31c546,
    botNumber2: _0x5e275c,
    botNumber: _0x13a323,
    pushname: _0x35cad6,
    isMe: _0x3565d0,
    isOwner: _0x11d2b6,
    groupMetadata: _0x5d595c,
    groupName: _0x442fa3,
    participants: _0x38482e,
    groupAdmins: _0x25e1c8,
    isBotAdmins: _0x1fa7f5,
    isAdmins: _0x231c34,
    reply: _0x120580
  }) => {
    function _0x1eb486(_0x44741b, _0x297e20, _0x6ee253, _0xe8d707, _0x3da643) {
      return _0x4b92(_0x44741b + 0x140 + 0x9d, _0x297e20);
    }
    function _0xc55db2(_0x274887, _0x307116, _0xcb79bb, _0x16d356, _0x3fff0c) {
      return _0x4b92(_0x16d356 + 0x1e - 0x3d6, _0x3fff0c);
    }
    function _0xc18d8c(_0x24793e, _0x2969d2, _0x190c96, _0x35e371, _0x359e34) {
      return _0x4b92(_0x24793e + 0x39a - 0x23d, _0x35e371);
    }
    const _0x509037 = {
      'FGUIQ': function (_0x521735, _0x534a2e) {
        return _0x521735(_0x534a2e);
      },
      'PiWgY': function (_0x478841, _0x484fc3) {
        return _0x478841(_0x484fc3);
      },
      'oILCI': function (_0x45fc7e, _0xdbb678) {
        return _0x45fc7e + _0xdbb678;
      },
      'efqTY': "@s.whatsapp.net",
      'aDuQT': "demote",
      'tNYba': "🛑 GROUP ADMIN DEMOTE BY MY BOT OWNER",
      'yuLBd': function (_0x108834, _0x4c5f81) {
        return _0x108834(_0x4c5f81);
      },
      'FPVde': "*Error !!*",
      'nOteM': function (_0x622fa1, _0x1f041f) {
        return _0x622fa1(_0x1f041f);
      }
    };
    function _0x517be4(_0x550e1a, _0x551db4, _0xbc657c, _0x5ffe88, _0x572323) {
      return _0x4b92(_0x5ffe88 - 0x3fb + 0x9d, _0x550e1a);
    }
    function _0x9fcb52(_0x20206c, _0x49ce1b, _0x1a2ae0, _0x301e1d, _0x596e1c) {
      return _0x4b92(_0x301e1d + 0x18e - 0x23d, _0x49ce1b);
    }
    try {
      if (!_0x351dc5) {
        return _0x120580(ONLGROUP);
      }
      if (!_0x1fa7f5) {
        return _0x120580(botAdmin);
      }
      if (!_0x231c34) {
        return _0x120580(ADMIN);
      }
      let _0x4cdae6 = _0x3afec3.mentionedJid ? _0x3afec3.mentionedJid : _0x3afec3.quoted ? _0x3afec3.quoted.sender : _0x38bb39.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
      await _0x3ceebe.groupParticipantsUpdate(_0x3afec3.chat, [_0x4cdae6], "demote").then(_0xa04938 => _0x120580(jsonformat(_0xa04938)))["catch"](_0x3b195b => _0x120580(jsonformat(_0x3b195b)));
      _0x120580("🛑 GROUP ADMIN DEMOTE BY MY BOT OWNER");
      const _0x4350a3 = {
        text: '✅',
        key: _0x3afec3.key
      };
      const _0x1ebdc1 = {
        react: _0x4350a3
      };
      await _0x3ceebe.sendMessage(_0x4c9600, _0x1ebdc1);
    } catch (_0xfe47f2) {
      _0x120580("*Error !!*");
      _0x5a195e(_0xfe47f2);
    }
  });
  const _0x585b83 = {
    pattern: "setname",
    react: '🔖',
    desc: "To change group name",
    category: "group",
    use: ".setname",
    filename: __filename
  };
  cmd(_0x585b83, async (_0x3e1e9e, _0xdb6481, _0x432b15, {
    from: _0x30060f,
    prefix: _0x5bfe85,
    l: _0x3d6bd0,
    quoted: _0x471450,
    body: _0x2a7237,
    isCmd: _0x3bffe5,
    command: _0x1d068e,
    args: _0x17523d,
    q: _0x55d1bb,
    isGroup: _0x5957f6,
    sender: _0x1471f5,
    senderNumber: _0x45ac5d,
    botNumber2: _0x3f9999,
    botNumber: _0x2118d0,
    pushname: _0x375a62,
    isMe: _0x403f3f,
    isOwner: _0x1c9fde,
    groupMetadata: _0x43ea22,
    groupName: _0x3f0836,
    participants: _0xa81b70,
    groupAdmins: _0xb08cb9,
    isBotAdmins: _0x2827fa,
    isAdmins: _0x26c61c,
    reply: _0x9a2047
  }) => {
    function _0x5913ab(_0x1721f1, _0x54ed7a, _0x2cdd77, _0x195673, _0x388c8f) {
      return _0x4b92(_0x2cdd77 + 0x10b + 0x9d, _0x388c8f);
    }
    function _0x4cd57e(_0x4767e6, _0x1c947d, _0x264f0e, _0x42ec3b, _0x123ece) {
      return _0x4b92(_0x264f0e + 0x1f1 - 0x24d, _0x1c947d);
    }
    function _0x275ce8(_0x147864, _0x2418c7, _0x5e75c5, _0x50bd92, _0x471af8) {
      return _0x4b92(_0x471af8 + 0x1d7 + 0x9d, _0x2418c7);
    }
    const _0xec5bb2 = {
      'GiYQA': "0|2|1|3|4|5",
      'TwFLU': function (_0x2fc186, _0xc17a6f) {
        return _0x2fc186(_0xc17a6f);
      },
      'mAncQ': function (_0x3feb81, _0x2a9e4c) {
        return _0x3feb81(_0x2a9e4c);
      },
      'bjTtB': "*✅ SUCCESSFULLY CHANGED GROUP NAME*",
      'GIFEF': "*Error !!*"
    };
    function _0x482c30(_0xbd52be, _0x1f559b, _0x40eb71, _0x56a852, _0x42de83) {
      return _0x4b92(_0xbd52be - 0x5c + 0x9d, _0x42de83);
    }
    function _0x201f55(_0x4d71a1, _0x3754fd, _0x58df35, _0x1c267b, _0xf730a4) {
      return _0x4b92(_0x58df35 - 0x320 + 0x9d, _0x4d71a1);
    }
    try {
      if (!_0x5957f6) {
        return _0x9a2047(ONLGROUP);
      }
      if (!_0x2827fa) {
        return _0x9a2047(botAdmin);
      }
      if (!_0x26c61c) {
        return _0x9a2047(ADMIN);
      }
      await _0x3e1e9e.groupUpdateSubject(_0xdb6481.chat, _0x55d1bb).then(_0x44aff6 => _0x9a2047(mess.success))["catch"](_0x1998f2 => _0x9a2047(jsonformat(_0x1998f2)));
      _0x9a2047("*✅ SUCCESSFULLY CHANGED GROUP NAME*");
      const _0x56a6eb = {
        text: '✅',
        key: _0xdb6481.key
      };
      const _0x142d7f = {
        react: _0x56a6eb
      };
      await _0x3e1e9e.sendMessage(_0x30060f, _0x142d7f);
    } catch (_0x6ad73e) {
      _0x9a2047("*Error !!*");
      _0x3d6bd0(_0x6ad73e);
    }
  });
  const _0x4270d3 = {
    pattern: "setdesc",
    react: '🔖',
    desc: "To change group description",
    category: "group",
    use: ".setdesc",
    filename: __filename
  };
  cmd(_0x4270d3, async (_0x4fcf34, _0x26744e, _0x343e85, {
    from: _0xa406f8,
    prefix: _0x227488,
    l: _0x4e8bd4,
    quoted: _0x2d4fed,
    body: _0x1adf43,
    isCmd: _0x343b19,
    command: _0x595b67,
    args: _0x196e27,
    q: _0x470ee2,
    isGroup: _0x22bf08,
    sender: _0x572e78,
    senderNumber: _0x254876,
    botNumber2: _0x5c5681,
    botNumber: _0x6497a0,
    pushname: _0x5d4cfc,
    isMe: _0x3275d5,
    isOwner: _0x289d75,
    groupMetadata: _0x47d13d,
    groupName: _0x59f00,
    participants: _0x29de62,
    groupAdmins: _0x1e6b93,
    isBotAdmins: _0x3756ed,
    isAdmins: _0x382a27,
    reply: _0x4abf2d
  }) => {
    function _0xc5fe2e(_0x10fa5c, _0x1253b6, _0x1e344a, _0x5d4d8b, _0x303307) {
      return _0x4b92(_0x10fa5c + 0x114 - 0x3d6, _0x1253b6);
    }
    function _0x9e3906(_0x9fb868, _0x273aac, _0x46134a, _0x19ec42, _0xc97b8a) {
      return _0x4b92(_0x19ec42 - 0x484 + 0x9d, _0x273aac);
    }
    const _0x467c66 = {
      'nWDRD': "3|4|1|5|0|2",
      'tZfVq': function (_0x1e3c30, _0x5b5387) {
        return _0x1e3c30(_0x5b5387);
      },
      'vMYth': "*✅ SUCCESSFULLY CHANGED GROUP DESCRIPTION*",
      'XQHxJ': function (_0x22ad72, _0x57745e) {
        return _0x22ad72(_0x57745e);
      },
      'vnBXW': "*Error !!*"
    };
    function _0x230a3d(_0x2900ff, _0x660b9f, _0x21dbf8, _0x4073c6, _0x1adb44) {
      return _0x4b92(_0x660b9f + 0xb8 - 0x23d, _0x21dbf8);
    }
    function _0x310b3c(_0x21eebc, _0x59f9eb, _0x5e0ce9, _0x3fb0c8, _0x17e4cd) {
      return _0x4b92(_0x5e0ce9 + 0x24c - 0x23d, _0x59f9eb);
    }
    function _0x5ab247(_0x487cbb, _0x2692ff, _0x3649f1, _0x28e1c7, _0x5f49be) {
      return _0x4b92(_0x3649f1 + 0x39c - 0x34d, _0x28e1c7);
    }
    try {
      if (!_0x22bf08) {
        return _0x4abf2d(ONLGROUP);
      }
      if (!_0x3756ed) {
        return _0x4abf2d(botAdmin);
      }
      if (!_0x382a27) {
        return _0x4abf2d(ADMIN);
      }
      await _0x4fcf34.groupUpdateDescription(_0x26744e.chat, _0x470ee2).then(_0x2ebd6c => _0x4abf2d(mess.success))["catch"](_0x3a353f => _0x4abf2d(jsonformat(_0x3a353f)));
      _0x4abf2d("*✅ SUCCESSFULLY CHANGED GROUP DESCRIPTION*");
      const _0x366497 = {
        text: '✅',
        key: _0x26744e.key
      };
      const _0x341335 = {
        react: _0x366497
      };
      await _0x4fcf34.sendMessage(_0xa406f8, _0x341335);
    } catch (_0x2950bd) {
      _0x4abf2d("*Error !!*");
      _0x4e8bd4(_0x2950bd);
    }
  });
  const _0x35f902 = {
    pattern: "ephemeral",
    react: '🔖',
    desc: "To desappear & appear messages",
    category: "group",
    use: ".ephemeral",
    filename: __filename
  };
  cmd(_0x35f902, async (_0x28bc3a, _0x3bb103, _0x2ddd23, {
    from: _0x376b8c,
    prefix: _0x8dad87,
    l: _0x50cb60,
    quoted: _0x2ce5d7,
    body: _0x44094b,
    isCmd: _0x13f064,
    command: _0x459433,
    args: _0x57412d,
    q: _0x2b0f2a,
    isGroup: _0x559f11,
    sender: _0x3dcf0f,
    senderNumber: _0x47c35f,
    botNumber2: _0x3d1bfd,
    botNumber: _0x4e2b75,
    pushname: _0x2a4950,
    isMe: _0x3eff3d,
    isOwner: _0x26de37,
    groupMetadata: _0x13d20e,
    groupName: _0x21ed7f,
    participants: _0x4376c8,
    groupAdmins: _0x37e562,
    isBotAdmins: _0x2e4221,
    isAdmins: _0x3ed7a5,
    reply: _0x5b2eb9
  }) => {
    function _0x215aac(_0x4f0235, _0x57c59f, _0x261232, _0x163c46, _0x4a9b5c) {
      return _0x4b92(_0x4a9b5c + 0x496 - 0x34d, _0x57c59f);
    }
    function _0x569adf(_0x2c9549, _0x4b8f0e, _0xffcc6a, _0x2db072, _0x21428a) {
      return _0x4b92(_0xffcc6a + 0x721 - 0x34d, _0x2db072);
    }
    const _0x325d12 = {
      'DCrcu': "5|4|3|1|0|2",
      'rVqUr': function (_0x3980bc, _0x55ca5d) {
        return _0x3980bc === _0x55ca5d;
      },
      'bljDr': "enable",
      'HNTUl': function (_0x556af5, _0x32dc99) {
        return _0x556af5 === _0x32dc99;
      },
      'ltRZK': "disable",
      'gOZUB': function (_0x1d514c, _0x519e3c) {
        return _0x1d514c(_0x519e3c);
      },
      'CdOda': function (_0x2d437b, _0x5a2668) {
        return _0x2d437b(_0x5a2668);
      },
      'Mcnfq': function (_0x3ea2fb, _0x13ade6) {
        return _0x3ea2fb(_0x13ade6);
      },
      'lHipp': function (_0xc55193, _0x6bacbb) {
        return _0xc55193(_0x6bacbb);
      },
      'xGVwp': function (_0x38c68c, _0x37c838) {
        return _0x38c68c(_0x37c838);
      },
      'AbZkt': "*Error !!*"
    };
    function _0x5f0660(_0x5c4745, _0x2f9bc9, _0x3ed804, _0x38311d, _0x4ff95d) {
      return _0x4b92(_0x38311d - 0xc0 + 0x9d, _0x4ff95d);
    }
    function _0x533ea5(_0x49c3d6, _0x22a9ee, _0x710998, _0x4e3c15, _0x2fa3a7) {
      return _0x4b92(_0x2fa3a7 + 0x1cf - 0x23d, _0x49c3d6);
    }
    function _0x3de7ae(_0x4fc718, _0x1147b0, _0x458f16, _0x36584f, _0x2713ba) {
      return _0x4b92(_0x1147b0 + 0x588 - 0x3d6, _0x4fc718);
    }
    try {
      if (!_0x559f11) {
        return _0x5b2eb9(ONLGROUP);
      }
      if (!_0x2e4221) {
        return _0x5b2eb9(botAdmin);
      }
      if (!_0x3ed7a5) {
        return _0x5b2eb9(ADMIN);
      }
      if (!_0x2b0f2a) {
        return await _0x5b2eb9(imgmsg);
      }
      if (_0x57412d[0] === "enable") {
        const _0x2cf527 = {
          disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL
        };
        await _0x28bc3a.sendMessage(_0x3bb103.chat, _0x2cf527).then(_0x5143ca => _0x5b2eb9(jsonformat(_0x5143ca)))["catch"](_0x15c851 => _0x5b2eb9(jsonformat(_0x15c851)));
      } else {
        if (_0x57412d[0] === "disable") {
          const _0x592071 = {
            disappearingMessagesInChat: false
          };
          await _0x28bc3a.sendMessage(_0x3bb103.chat, _0x592071).then(_0x1d737b => _0x5b2eb9(jsonformat(_0x1d737b)))["catch"](_0x3e757c => _0x5b2eb9(jsonformat(_0x3e757c)));
        }
      }
      const _0x53ea34 = {
        text: '✅',
        key: _0x3bb103.key
      };
      const _0x5b9d04 = {
        react: _0x53ea34
      };
      await _0x28bc3a.sendMessage(_0x376b8c, _0x5b9d04);
    } catch (_0x472af8) {
      _0x5b2eb9("*Error !!*");
      _0x50cb60(_0x472af8);
    }
  });
  const _0x42c101 = {
    pattern: "autoreadsw",
    react: '🔖',
    desc: "To turn on auto read status",
    category: "group",
    use: ".autoreadsw",
    filename: __filename
  };
  cmd(_0x42c101, async (_0x396066, _0x15957f, _0x22e2d6, {
    from: _0x94e479,
    prefix: _0x41d6a7,
    l: _0x412699,
    quoted: _0x424083,
    body: _0x46506e,
    isCmd: _0x504133,
    command: _0x328403,
    args: _0xc412f,
    q: _0x42bec4,
    isGroup: _0x2b69cf,
    sender: _0x435312,
    senderNumber: _0x319871,
    botNumber2: _0x354d18,
    botNumber: _0x4ae6e2,
    pushname: _0x3bb4e2,
    isMe: _0x695dd3,
    isOwner: _0x131838,
    groupMetadata: _0x2fcd8b,
    groupName: _0x478d32,
    participants: _0x54cf99,
    groupAdmins: _0x19413b,
    isBotAdmins: _0x425705,
    isAdmins: _0x537507,
    reply: _0x1342a9
  }) => {
    function _0x58e050(_0x7f6e24, _0x2d2e65, _0x29d322, _0x15d582, _0x4c8874) {
      return _0x4b92(_0x7f6e24 + 0x9 - 0x24d, _0x4c8874);
    }
    function _0x45dbe8(_0x52877a, _0x4906b1, _0x731e03, _0x17fdd5, _0x494fba) {
      return _0x4b92(_0x52877a + 0x70e - 0x34d, _0x17fdd5);
    }
    function _0x38f908(_0x5a7199, _0x2cacf5, _0x4001ec, _0x3f0e41, _0x2f1f54) {
      return _0x4b92(_0x5a7199 + 0x10 - 0x24d, _0x2f1f54);
    }
    function _0x246996(_0xf6b33c, _0x58fa84, _0x1d0824, _0x2136e8, _0x123418) {
      return _0x4b92(_0x123418 + 0x141 - 0x3d6, _0x58fa84);
    }
    const _0x409288 = {
      'DjJBF': function (_0x589b7d, _0x2aa06b) {
        return _0x589b7d == _0x2aa06b;
      },
      'CJyYE': function (_0x516de7, _0x5c5529) {
        return _0x516de7(_0x5c5529);
      },
      'hOPXM': "*Already activated!*",
      'nOjAG': function (_0x44efba, _0x20c0e1) {
        return _0x44efba(_0x20c0e1);
      },
      'UEIdh': "*Successfully activate auto read status*",
      'tBMUd': function (_0x5dba4a, _0x4b541e) {
        return _0x5dba4a == _0x4b541e;
      },
      'AtmTy': "off",
      'EOgfG': function (_0x42ec7a, _0x484f78) {
        return _0x42ec7a(_0x484f78);
      },
      'VpILx': "*Already deactivated!*",
      'KNyzH': function (_0x54e05f, _0x40e45d) {
        return _0x54e05f(_0x40e45d);
      },
      'BWayw': "*Successfully turn off auto read status*",
      'dMBap': "Choose on or off!",
      'nrGkF': function (_0x299d94, _0x23053c) {
        return _0x299d94(_0x23053c);
      },
      'jSqdN': "*Error !!*",
      'eHrxR': function (_0x2afd0b, _0x5a0904) {
        return _0x2afd0b(_0x5a0904);
      }
    };
    function _0x19e7b2(_0x5bd8ff, _0x59c9e7, _0x2bfb47, _0x4d5583, _0x40dd0c) {
      return _0x4b92(_0x5bd8ff - 0xb9 - 0x23d, _0x40dd0c);
    }
    try {
      if (_0xc412f[0] == 'on') {
        if (autoreadsw) {
          return _0x1342a9("*Already activated!*");
        }
        autoreadsw = true;
        _0x1342a9("*Successfully activate auto read status*");
      } else {
        if (_0xc412f[0] == "off") {
          if (!autoreadsw) {
            return _0x1342a9("*Already deactivated!*");
          }
          autoreadsw = false;
          _0x1342a9("*Successfully turn off auto read status*");
        } else {
          _0x1342a9("Choose on or off!");
        }
      }
      const _0x2b59d8 = {
        text: '✅',
        key: _0x15957f.key
      };
      const _0x480261 = {
        react: _0x2b59d8
      };
      await _0x396066.sendMessage(_0x94e479, _0x480261);
    } catch (_0x26d774) {
      _0x1342a9("*Error !!*");
      _0x412699(_0x26d774);
    }
  });
  const _0x17eed8 = {};
  function _0x4ffd78(_0x32f411, _0x337606, _0x37b020, _0x2b8980, _0xf50573) {
    return _0x4b92(_0x37b020 + 0x9d, _0x32f411);
  }
  _0x17eed8.pattern = "delete";
  _0x17eed8.react = '🔖';
  _0x17eed8.desc = "To delete message";
  _0x17eed8.category = "group";
  _0x17eed8.use = ".delete";
  _0x17eed8.filename = __filename;
  cmd(_0x17eed8, async (_0x5378bb, _0x356919, _0x5734dd, {
    from: _0x8cdc0b,
    prefix: _0x1ed52d,
    l: _0x2e599c,
    quoted: _0x47c6e1,
    body: _0x41dbea,
    isCmd: _0x37e0b0,
    command: _0x2870a7,
    args: _0x39587d,
    q: _0x18da9e,
    isGroup: _0x24a0f2,
    sender: _0x36ef6e,
    senderNumber: _0x106275,
    botNumber2: _0x14d019,
    botNumber: _0x156e8c,
    pushname: _0x1c1464,
    isMe: _0x4d739e,
    isOwner: _0x5ecb77,
    groupMetadata: _0x387f94,
    groupName: _0x12e41f,
    participants: _0x513f02,
    groupAdmins: _0x59aac1,
    isBotAdmins: _0x4c69bd,
    isAdmins: _0x4317e0,
    reply: _0x1c2312
  }) => {
    function _0x4866ef(_0x3a6cc4, _0x294616, _0x5214d5, _0x1076c2, _0x303092) {
      return _0x4b92(_0x5214d5 - 0x112 - 0x23d, _0x294616);
    }
    function _0x282481(_0x4cd788, _0x40f9d8, _0x4f176f, _0x3aaa2d, _0x5319ba) {
      return _0x4b92(_0x5319ba - 0x15c - 0x24d, _0x3aaa2d);
    }
    function _0x1d863a(_0xb6afe4, _0x51e60f, _0x1ffa0e, _0x4f7137, _0x5dccf8) {
      return _0x4b92(_0x5dccf8 + 0x23 + 0x9d, _0x1ffa0e);
    }
    function _0x3e3256(_0x261413, _0x5a50c8, _0x486b9b, _0x40b611, _0xd624d3) {
      return _0x4b92(_0x5a50c8 + 0x4aa - 0x34d, _0xd624d3);
    }
    function _0x5d7f7e(_0x4644f1, _0x41cb07, _0xdafd33, _0x4535c7, _0x3a8928) {
      return _0x4b92(_0x41cb07 + 0x594 - 0x3d6, _0x4644f1);
    }
    const _0x1faf76 = {
      'ZBpLo': function (_0x6997da, _0xfefbf6) {
        return _0x6997da(_0xfefbf6);
      },
      'lXyiQ': "*Error !!*"
    };
    try {
      if (!_0x5734dd.quoted) {
        throw false;
      }
      let {
        chat: _0x3483de,
        fromMe: _0x528dfc,
        id: _0x4864d9,
        isBaileys: _0x44a7ea
      } = _0x5734dd.quoted;
      _0x5378bb.sendMessage(_0x5734dd.chat, {
        'delete': {
          'remoteJid': _0x5734dd.chat,
          'fromMe': true,
          'id': _0x5734dd.quoted.id,
          'participant': _0x5734dd.quoted.sender
        }
      });
      const _0x52a681 = {
        text: '✅',
        key: _0x356919.key
      };
      const _0x560725 = {
        react: _0x52a681
      };
      await _0x5378bb.sendMessage(_0x8cdc0b, _0x560725);
    } catch (_0x4e41ba) {
      _0x1c2312("*Error !!*");
      _0x2e599c(_0x4e41ba);
    }
  });
  const _0x5713c5 = {};
  function _0x5077ce(_0x5b70ab, _0x107c74, _0x1defc0, _0x2cb062, _0x296196) {
    return _0x4b92(_0x107c74 - 0x23d, _0x2cb062);
  }
  _0x5713c5.pattern = "join";
  _0x5713c5.react = '🔖';
  _0x5713c5.desc = "To join a group";
  _0x5713c5.category = "group";
  function _0x27e514(_0x533b9b, _0x1cddb6, _0x419b2a, _0x48b251, _0x25cd53) {
    return _0x4b92(_0x419b2a - 0x34d, _0x48b251);
  }
  function _0x454491(_0x59856c, _0x35c610, _0x3ba345, _0x1b1c6d, _0x3604fc) {
    return _0x4b92(_0x3604fc - 0x3d6, _0x35c610);
  }
  _0x5713c5.use = ".join";
  _0x5713c5.filename = __filename;
  cmd(_0x5713c5, async (_0x15182e, _0x42cbab, _0x260501, {
    from: _0x2084fa,
    prefix: _0x3fd240,
    l: _0x20e10e,
    quoted: _0x1bc704,
    body: _0x24959f,
    isCmd: _0x4b4adb,
    command: _0x52e107,
    args: _0x2389d6,
    q: _0xb855a4,
    isGroup: _0x24e6d0,
    sender: _0xb9cfdf,
    senderNumber: _0x49de10,
    botNumber2: _0x3312ea,
    botNumber: _0x48f400,
    pushname: _0x149566,
    isMe: _0x22138f,
    isOwner: _0x24c5e8,
    groupMetadata: _0x1cc27a,
    groupName: _0x7d01b6,
    participants: _0x39b0be,
    groupAdmins: _0x24266c,
    isBotAdmins: _0x5b98e4,
    isAdmins: _0x11b5ab,
    reply: _0x53a1ec
  }) => {
    function _0x4b135b(_0x453468, _0x3cb9ed, _0x31c9c6, _0x4b1c1f, _0x427ac9) {
      return _0x4b92(_0x31c9c6 - 0x133 - 0x24d, _0x453468);
    }
    function _0x430e6e(_0x53395f, _0x3d1991, _0x3ace74, _0x2ca7ab, _0x381a16) {
      return _0x4b92(_0x53395f + 0x4e - 0x34d, _0x2ca7ab);
    }
    const _0x5ce43c = {
      'jWGTC': function (_0x25c11d, _0x4c27bd) {
        return _0x25c11d(_0x4c27bd);
      },
      'CPHMQ': "Enter the Group Link!",
      'SqAIO': function (_0x2d71b8, _0x2c8589) {
        return _0x2d71b8(_0x2c8589);
      },
      'zpqeM': "whatsapp.com",
      'QuYor': "Invalid Link!",
      'SAxTu': function (_0x36012f) {
        return _0x36012f();
      },
      'kLjEa': "https://chat.whatsapp.com/",
      'QskFB': function (_0x1f7482, _0x117277) {
        return _0x1f7482(_0x117277);
      },
      'xBpjS': "*Error !!*"
    };
    function _0x2972c6(_0x883d53, _0x44611f, _0xc35cab, _0x4ad771, _0x709b34) {
      return _0x4b92(_0x709b34 + 0x2fb + 0x9d, _0x44611f);
    }
    function _0x33a889(_0x554382, _0x49e623, _0x191fb6, _0x2022ce, _0xbb0f45) {
      return _0x4b92(_0x49e623 + 0xc0 - 0x3d6, _0xbb0f45);
    }
    function _0xf118ea(_0x1703a4, _0xb1c449, _0x404bf2, _0x1f3d49, _0x1d4ba5) {
      return _0x4b92(_0x404bf2 + 0xdb - 0x23d, _0x1d4ba5);
    }
    try {
      if (!_0x22138f) {
        return await _0x53a1ec(BOTOW);
      }
      if (!_0xb855a4) {
        throw "Enter the Group Link!";
      }
      if (!isUrl(_0x2389d6[0]) && !_0x2389d6[0].includes("whatsapp.com")) {
        throw "Invalid Link!";
      }
      _0x53a1ec();
      let _0xede5a5 = _0x2389d6[0].split("https://chat.whatsapp.com/")[1];
      await _0x15182e.groupAcceptInvite(_0xede5a5).then(_0x3ed85c => _0x53a1ec(jsonformat(_0x3ed85c)))["catch"](_0x1ab8ed => _0x53a1ec(jsonformat(_0x1ab8ed)));
      const _0x4e41e3 = {
        text: '✅',
        key: _0x42cbab.key
      };
      const _0x1916b9 = {
        react: _0x4e41e3
      };
      await _0x15182e.sendMessage(_0x2084fa, _0x1916b9);
    } catch (_0x162995) {
      _0x53a1ec("*Error !!*");
      _0x20e10e(_0x162995);
    }
  });
  const _0x33b1f1 = {
    pattern: "leave",
    react: '🔖',
    desc: "To leave a group",
    category: "group",
    use: ".leave",
    filename: __filename
  };
  cmd(_0x33b1f1, async (_0x4ddbc9, _0x1a0992, _0x525c8b, {
    from: _0x5b71a0,
    prefix: _0x29219e,
    l: _0x13e7ac,
    quoted: _0x11046e,
    body: _0x159be8,
    isCmd: _0x513d57,
    command: _0xc827ee,
    args: _0x5797b2,
    q: _0x5b83c0,
    isGroup: _0xf155dd,
    sender: _0x7c7caa,
    senderNumber: _0x41c9c4,
    botNumber2: _0x2baf5d,
    botNumber: _0x843dd8,
    pushname: _0x5009f0,
    isMe: _0x5d9d4e,
    isOwner: _0x557ad2,
    groupMetadata: _0x4b026b,
    groupName: _0x2f00eb,
    participants: _0x5aa456,
    groupAdmins: _0x3ca74d,
    isBotAdmins: _0x5b41f7,
    isAdmins: _0x2d82d0,
    reply: _0xeceef1
  }) => {
    function _0x2a65f1(_0x1fad36, _0x5d2b48, _0x34f037, _0x333a5d, _0x3c390d) {
      return _0x4b92(_0x5d2b48 + 0x2d1 - 0x24d, _0x333a5d);
    }
    function _0x59f338(_0x20621a, _0x31131b, _0x7c9959, _0x3dd71c, _0x1cc897) {
      return _0x4b92(_0x7c9959 + 0x108 - 0x3d6, _0x20621a);
    }
    function _0x1b564e(_0xa811c1, _0x35ddfd, _0x49285d, _0x13406b, _0xcdc5a6) {
      return _0x4b92(_0x35ddfd - 0x112 - 0x24d, _0x49285d);
    }
    function _0xa50ecd(_0x399410, _0x1517f1, _0x2cf049, _0x321194, _0x31c19c) {
      return _0x4b92(_0x321194 + 0x45a - 0x23d, _0x2cf049);
    }
    function _0x242ec8(_0x465602, _0x348fb9, _0x25987c, _0x1477bb, _0x59fa92) {
      return _0x4b92(_0x465602 + 0x4d7 - 0x34d, _0x348fb9);
    }
    const _0x43805f = {
      'FAxRX': function (_0x1b225e, _0x4b95b1) {
        return _0x1b225e(_0x4b95b1);
      },
      'HnVJZ': "*Error !!*"
    };
    try {
      if (!_0x5d9d4e) {
        return await _0xeceef1(BOTOW);
      }
      await _0x4ddbc9.groupLeave(_0x1a0992.chat).then(_0x44075a => _0xeceef1(jsonformat(_0x44075a)))["catch"](_0x227fd6 => _0xeceef1(jsonformat(_0x227fd6)));
      const _0x117554 = {
        text: '✅',
        key: _0x1a0992.key
      };
      const _0x37bd8b = {
        react: _0x117554
      };
      await _0x4ddbc9.sendMessage(_0x5b71a0, _0x37bd8b);
    } catch (_0x3093d1) {
      _0xeceef1("*Error !!*");
      _0x13e7ac(_0x3093d1);
    }
  });