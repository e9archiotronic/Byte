(function (_0x13a391, _0x3806ec) {
    const _0x458761 = _0x13a391();
    while (true) {
      try {
        const _0x266164 = parseInt(_0x10cc(2492, 'S3YK')) / 1 * (parseInt(_0x10cc(3531, 'mnFs')) / 2) + parseInt(_0x10cc(2651, 'CmR(')) / 3 * (-parseInt(_0x10cc(2781, 'CmR(')) / 4) + -parseInt(_0x10cc(1088, 'CmR(')) / 5 + parseInt(_0x10cc(3680, 'W4GC')) / 6 + -parseInt(_0x10cc(1978, '7Ei@')) / 7 * (-parseInt(_0x10cc(3197, 'eSAt')) / 8) + parseInt(_0x10cc(3477, '7PN$')) / 9 * (-parseInt(_0x10cc(1573, 'bLlT')) / 10) + parseInt(_0x10cc(1880, 'Sq21')) / 11 * (parseInt(_0x10cc(2279, 'PCIH')) / 12);
        if (_0x266164 === _0x3806ec) {
          break;
        } else {
          _0x458761.push(_0x458761.shift());
        }
      } catch (_0x5befb4) {
        _0x458761.push(_0x458761.shift());
      }
    }
  })(_0x138f, 936871);
  const config = require("../settings");
  const os = require('os');
  const fs = require('fs');
  function _0x506a47(_0x4da53b, _0x529055, _0x47b0b6, _0xc785f5, _0x35fc6b) {
    return _0x10cc(_0x47b0b6 - 0xf5, _0x35fc6b);
  }
  const owner = JSON.parse(fs.readFileSync("./lib/owner.json"));
  const l = console.log;
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
    clockString,
    jsonformat,
    forwardMessage
  } = require("../lib/functions");
  function genMsgId() {
    let _0x1ccec0 = "3EB";
    for (let _0x3358c1 = "3EB".length; _0x3358c1 < 22; _0x3358c1++) {
      const _0x30463d = Math.floor(Math.random() * "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".length);
      _0x1ccec0 += "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(_0x30463d);
    }
    return _0x1ccec0;
  }
  const reportedMessages = {};
  if (config.COMMAND_TYPE === "button") {
    const _0x5b9ebd = {
      pattern: "alive",
      react: '🍬',
      desc: "Check bot online or no.",
      category: "main",
      use: ".alive",
      filename: __filename
    };
    cmd(_0x5b9ebd, async (_0x1c786e, _0xe50afd, _0x288bbd, {
      from: _0x1b5590,
      prefix: _0x43be50,
      l: _0x7abd6d,
      quoted: _0x25fbda,
      body: _0x7af733,
      isCmd: _0x2d96a3,
      command: _0x96ce30,
      args: _0x107e26,
      q: _0x129ca8,
      isGroup: _0xeb1c08,
      sender: _0x514f73,
      senderNumber: _0x1f851b,
      botNumber2: _0x46921a,
      botNumber: _0x5ed83e,
      pushname: _0x35e518,
      isMe: _0x5214a8,
      isOwner: _0x48c06f,
      groupMetadata: _0x3f0bf3,
      groupName: _0x3554a6,
      participants: _0x451883,
      groupAdmins: _0x79a84e,
      isBotAdmins: _0x3fa692,
      isAdmins: _0x119dac,
      reply: _0x24a39f
    }) => {
      try {
        if (os.hostname().length == 12) {
          hostname = "replit";
        } else {
          if (os.hostname().length == 36) {
            hostname = "heroku";
          } else {
            if (os.hostname().length == 8) {
              hostname = "koyeb";
            } else {
              hostname = os.hostname();
            }
          }
        }
        const _0x2eae7c = "👋 Hello " + _0x35e518 + " I'm alive" + "\n*Im X-Byte*\n> *Version:* " + require("../package.json").version + "\n> *Memory:* " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB\n> *Runtime:* " + runtime(process.uptime()) + "\n> *Platform:* " + hostname;
        const _0x15cb75 = {
          display_text: config.BTN,
          url: config.BTNURL,
          merchant_url: config.BTNURL
        };
        let _0x9fd767 = [{
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify(_0x15cb75)
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "Get Menu",
            'id': ".menu"
          })
        }];
        const _0x5a3846 = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: _0x2eae7c
        };
        return await _0x1c786e.sendButtonMessage(_0x1b5590, _0x9fd767, _0x288bbd, _0x5a3846);
      } catch (_0x4525f4) {
        _0x24a39f("*Error !!*");
        console.log(_0x4525f4);
      }
    });
    const _0x4448d4 = {
      pattern: 'sc',
      react: "🗃️",
      alias: ["repo", "script", "status"],
      desc: "Get bot's command list.",
      category: "main",
      use: ".sc",
      filename: __filename
    };
    cmd(_0x4448d4, async (_0x5292d0, _0x1a80bd, _0x535317, {
      from: _0x5493d6,
      prefix: _0x2816c4,
      l: _0x15fba3,
      quoted: _0x218618,
      body: _0x291730,
      isCmd: _0x315b43,
      command: _0x19e22c,
      args: _0x5f266b,
      q: _0x43ae30,
      isGroup: _0x21d1e3,
      sender: _0xc0e065,
      senderNumber: _0x16e4fc,
      botNumber2: _0x802717,
      botNumber: _0x501655,
      pushname: _0x4701d9,
      isMe: _0x9821e,
      isOwner: _0x29da2b,
      groupMetadata: _0x199af7,
      groupName: _0x4a3587,
      participants: _0x3e2e9d,
      groupAdmins: _0x3957a1,
      isBotAdmins: _0x29a338,
      isAdmins: _0xfc45f7,
      reply: _0x147d28
    }) => {
      try {
        if (os.hostname().length == 12) {
          hostname = "replit";
        } else {
          if (os.hostname().length == 36) {
            hostname = "heroku";
          } else {
            if (os.hostname().length == 8) {
              hostname = "koyeb";
            } else {
              hostname = os.hostname();
            }
          }
        }
        const _0x2cfda9 = "👋 Hello " + _0x4701d9 + "\n*X-Byte Commands*\n  \n> *Version:* " + require("../package.json").version + "\n> *Memory:* " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB\n> *Runtime:* " + runtime(process.uptime()) + "\n> *Platform:* " + hostname;
        let _0x5a5ac0 = [{
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify({
            'display_text': "YT CHANNEL",
            'url': "https://youtube.com/@TalkDrove",
            'merchant_url': "https://youtube.com/@TalkDrove"
          })
        }, {
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify({
            'display_text': "FB Profile",
            'url': "https://www.facebook.com/talkdrove",
            'merchant_url': "https://www.facebook.com/talkdrove"
          })
        }, {
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify({
            'display_text': "Whatsapp number",
            'url': "https://wa.me/923072380380",
            'merchant_url': "https://wa.me/923072380380"
          })
        }, {
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify({
            'display_text': "MY WA CHANNEL",
            'url': "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l",
            'merchant_url': "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l"
          })
        }, {
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify({
            'display_text': "MY BOT REPO",
            'url': "https://github.com/HyHamza/X-Byte",
            'merchant_url': "https://github.com/HyHamza/X-Byte"
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "Menu",
            'id': ".menu"
          })
        }];
        const _0x4ac44e = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: _0x2cfda9
        };
        return await _0x5292d0.sendButtonMessage(_0x5493d6, _0x5a5ac0, _0x535317, _0x4ac44e);
      } catch (_0x3c7661) {
        _0x147d28("*Error !!*");
        console.log(_0x3c7661);
      }
    });
    const _0x542b06 = {
      pattern: "menu",
      react: "🗃️",
      alias: ["panel", "list", "commands"],
      desc: "Get bot's command list.",
      category: "main",
      use: ".menu",
      filename: __filename
    };
    cmd(_0x542b06, async (_0x3a3ae0, _0x5d149b, _0x3b8a7f, {
      from: _0x5dacad,
      prefix: _0xc543ce,
      l: _0x4e3d14,
      quoted: _0x2ad67d,
      body: _0x4a273d,
      isCmd: _0x58ff10,
      command: _0xb57a1c,
      args: _0x3f9f32,
      q: _0xe6c526,
      isGroup: _0x512021,
      sender: _0x13861b,
      senderNumber: _0x2351ba,
      botNumber2: _0x504e4b,
      botNumber: _0x1f3279,
      pushname: _0x457280,
      isMe: _0x2fe93b,
      isOwner: _0x39abc8,
      groupMetadata: _0x592529,
      groupName: _0xefee68,
      participants: _0x4ed2b6,
      groupAdmins: _0x5e156c,
      isBotAdmins: _0x447245,
      isAdmins: _0x40584b,
      reply: _0x34b7e1
    }) => {
      try {
        if (os.hostname().length == 12) {
          hostname = "replit";
        } else {
          if (os.hostname().length == 36) {
            hostname = "heroku";
          } else {
            if (os.hostname().length == 8) {
              hostname = "koyeb";
            } else {
              hostname = os.hostname();
            }
          }
        }
        const _0x32d4b0 = "👋 Hello " + _0x457280 + "\n*X-Byte commands*\n  \n> *Version:* " + require("../package.json").version + "\n> *Memory:* " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB\n> *Runtime:* " + runtime(process.uptime()) + "\n> *Platform:* " + hostname;
        const _0x463791 = [];
        const _0x181fa0 = new Map();
        for (let _0x37434c = 0; _0x37434c < 1; _0x37434c++) {
          const _0x57d5c5 = commands[_0x37434c];
          if (!_0x57d5c5.dontAddCommandList && _0x57d5c5.pattern !== undefined) {
            const _0x1c783d = _0x57d5c5.category.toUpperCase();
            if (!_0x181fa0.has(_0x1c783d)) {
              _0x463791.push(_0x1c783d);
              _0x181fa0.set(_0x1c783d, []);
            }
            _0x181fa0.get(_0x1c783d).push(_0x57d5c5.pattern);
          }
        }
        const _0x10cdf6 = [];
        for (const _0x7dca68 of _0x463791) {
          const _0x41d75d = {
            header: "Select menu type",
            title: "DOWNLOAD MENU",
            description: "Download commands",
            id: ".downmenu"
          };
          const _0x48e60c = {
            header: '',
            title: "SEARCH MENU",
            description: "Search commands",
            id: ".searchmenu"
          };
          const _0x55776a = {
            header: '',
            title: "CONVERT MENU",
            description: "Convert commands",
            id: ".convertmenu"
          };
          const _0x5a637b = {
            header: '',
            title: "MAIN MENU",
            description: "Main commands",
            id: ".mainmenu"
          };
          const _0x24709f = {
            header: '',
            title: "GROUP MENU",
            description: "Group commands",
            id: ".groupmenu"
          };
          const _0x4c56eb = {
            header: '',
            title: "LOGO MENU",
            description: "Logo commands",
            id: ".logomenu"
          };
          const _0x82d34a = {
            header: '',
            title: "BUG MENU",
            description: "Bug commands",
            id: ".bugmenu"
          };
          const _0x305f13 = {
            header: '',
            title: "OTHER MENU",
            description: "Other commands",
            id: ".othermenu"
          };
          _0x10cdf6.push(_0x41d75d);
          _0x10cdf6.push(_0x48e60c);
          _0x10cdf6.push(_0x55776a);
          _0x10cdf6.push(_0x5a637b);
          _0x10cdf6.push(_0x24709f);
          _0x10cdf6.push(_0x4c56eb);
          _0x10cdf6.push(_0x82d34a);
          _0x10cdf6.push(_0x305f13);
        }
        const _0x5dce00 = {
          display_text: config.BTN,
          url: config.BTNURL,
          merchant_url: config.BTNURL
        };
        let _0x22d798 = [{
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify(_0x5dce00)
        }, {
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Select a Category :)",
            'sections': [{
              'title': "Please select a category",
              'highlight_label': "TalkDrove",
              'rows': _0x10cdf6
            }]
          })
        }];
        const _0x54ced1 = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: _0x32d4b0
        };
        return await _0x3a3ae0.sendButtonMessage(_0x5dacad, _0x22d798, _0x3b8a7f, _0x54ced1);
      } catch (_0x104d7e) {
        _0x34b7e1("*Error !!*");
        console.log(_0x104d7e);
      }
    });
    const _0x57e463 = {
      pattern: "menu2",
      react: '📂',
      alias: ["help"],
      desc: "Get bot's command list.",
      category: "main",
      use: ".menu",
      filename: __filename
    };
    cmd(_0x57e463, async (_0x188b80, _0x2d3e0, _0x12fbc5, {
      from: _0x7e5aba,
      prefix: _0x378838,
      l: _0x401553,
      quoted: _0x3353d0,
      body: _0x44ec1e,
      isCmd: _0x3902fa,
      command: _0x52549a,
      args: _0x338f52,
      q: _0x147fc6,
      isGroup: _0x2f113e,
      sender: _0x5b6283,
      senderNumber: _0x1b6926,
      botNumber2: _0x495a08,
      botNumber: _0x3d623e,
      pushname: _0x2f5e9b,
      isMe: _0x343431,
      isOwner: _0x8e106d,
      groupMetadata: _0x14bb61,
      groupName: _0x154222,
      participants: _0x2d17e7,
      groupAdmins: _0xdaeb7,
      isBotAdmins: _0x3d6b7c,
      isAdmins: _0x16161e,
      reply: _0x4e92c9
    }) => {
      function _0x30f1f6(_0x5532b3, _0x229f15, _0x1cd964, _0x5511af, _0x4dbd19) {
        return _0x10cc(_0x1cd964 - 0x106 - 0x1d1, _0x229f15);
      }
      function _0x31f976(_0x3ebd78, _0x537f39, _0x243812, _0x4b5197, _0x2932d8) {
        return _0x10cc(_0x2932d8 + 0x2bb - 0xf5, _0x537f39);
      }
      function _0x2c7558(_0x16e686, _0x4d6f7d, _0x34d490, _0x5037a8, _0x2c67f9) {
        return _0x10cc(_0x5037a8 + 0x15e - 0x1a5, _0x2c67f9);
      }
      const _0x3ba94a = {
        'rtWFy': function (_0x1b0b38, _0x4f03e9) {
          return _0x1b0b38(_0x4f03e9);
        },
        'TSZkj': "*Error !!*",
        'KqrYi': function (_0x49cb0e, _0x70df92) {
          return _0x49cb0e(_0x70df92);
        },
        'OlaMR': function (_0x37d031, _0x51e412) {
          return _0x37d031 === _0x51e412;
        },
        'QSItU': "true",
        'XjqrT': function (_0x21c49e, _0x199562) {
          return _0x21c49e * _0x199562;
        },
        'XmOtR': function (_0x4dcae7, _0x21e4df) {
          return _0x4dcae7 === _0x21e4df;
        },
        'MuEyF': "other",
        'ASeEQ': "This report has already been forwarded to the owner. Please wait for a response.",
        'VvraX': function (_0x4b1dfd, _0x463877) {
          return _0x4b1dfd === _0x463877;
        },
        'foRlu': "search",
        'GykYw': function (_0x53aa37, _0x33172c) {
          return _0x53aa37 === _0x33172c;
        },
        'IqKIM': "download",
        'FbQNX': "bug",
        'qlnQg': function (_0x3ec6a6, _0x1da814) {
          return _0x3ec6a6 + _0x1da814;
        },
        'gbZGX': function (_0x1a090b, _0x23ca53) {
          return _0x1a090b + _0x23ca53;
        },
        'AJwmI': "*This is an owner command...*",
        'kYcHo': function (_0x3f6fa6, _0x3aad89) {
          return _0x3f6fa6(_0x3aad89);
        },
        'vOTlI': "Unable to scan directory: ",
        'TvjWp': function (_0x2e87b1, _0x4df13e) {
          return _0x2e87b1(_0x4df13e);
        },
        'aglls': function (_0x713b6b, _0x1ef19f) {
          return _0x713b6b + _0x1ef19f;
        },
        'roZuX': function (_0x5cdf71, _0x24f204) {
          return _0x5cdf71 !== _0x24f204;
        },
        'UYroQ': "iVDGt",
        'OBKOX': "ffpKQ",
        'VzSgi': function (_0x6567ac, _0xf63a5) {
          return _0x6567ac < _0xf63a5;
        },
        'vmYfW': function (_0x564215, _0x440bb7) {
          return _0x564215 === _0x440bb7;
        },
        'vaPyM': "SxLIj",
        'QksJZ': function (_0xaa9b44, _0x31e1fa) {
          return _0xaa9b44 === _0x31e1fa;
        },
        'eZRON': "maGME",
        'DctUD': "Gzqma",
        'euBCW': "WQPwy",
        'inKkC': function (_0x22f690, _0x2eb299) {
          return _0x22f690 < _0x2eb299;
        },
        'NaPVn': "bNBLZ",
        'DJsuv': function (_0x37d876, _0x5561a0) {
          return _0x37d876 === _0x5561a0;
        },
        'ApWsB': function (_0x434a2c, _0x3eb780) {
          return _0x434a2c === _0x3eb780;
        },
        'wtqJq': "jtYMz",
        'RXRRe': function (_0x260d4f, _0x566f5a) {
          return _0x260d4f === _0x566f5a;
        },
        'DoGej': "NaoMo",
        'DEPrg': "kYUkr",
        'aQBiT': function (_0x193ed7, _0x176448) {
          return _0x193ed7 < _0x176448;
        },
        'SHCiK': "mqmCj",
        'mblCS': function (_0x3834d3, _0x328ac3) {
          return _0x3834d3 === _0x328ac3;
        },
        'XEiIl': "convert",
        'YuzMN': "YqyfR",
        'pbZyv': "LGrfs",
        'JvkZH': "LrLMa",
        'GTYyO': function (_0x8e2db1, _0x16a7b0) {
          return _0x8e2db1 < _0x16a7b0;
        },
        'kKdIC': function (_0x1cf794, _0x329242) {
          return _0x1cf794 === _0x329242;
        },
        'KHdga': "lslde",
        'MYgFR': "logo",
        'YTBYv': "khgPf",
        'aPsVW': function (_0x2887b1, _0x28650b) {
          return _0x2887b1 !== _0x28650b;
        },
        'fXnPY': "EhWLz",
        'xYBpZ': "BpGiR",
        'oDsiC': function (_0x3dc5f9, _0x4f680f) {
          return _0x3dc5f9 < _0x4f680f;
        },
        'uqfia': function (_0x5aead8, _0x4cd19e) {
          return _0x5aead8 === _0x4cd19e;
        },
        'HlHCs': "ytuZs",
        'IxHGr': "main",
        'LEQaz': "jSsEJ",
        'UmpBc': function (_0x389b9a, _0x583dc6) {
          return _0x389b9a !== _0x583dc6;
        },
        'wCUjL': "USdAx",
        'yOqLX': "bgimP",
        'wCgWB': "HCbav",
        'slkfm': "group",
        'pYDNc': "Qlypl",
        'PkGCj': "FuIAN",
        'hpkJD': function (_0x32299f, _0x173103) {
          return _0x32299f < _0x173103;
        },
        'BsZNH': function (_0x217ad3, _0x5f2c85) {
          return _0x217ad3 !== _0x5f2c85;
        },
        'GylEu': "CHLOv",
        'BqQLT': "ABSfS",
        'sGkMZ': function (_0x2f0865, _0x203345) {
          return _0x2f0865 === _0x203345;
        },
        'MnUXt': "eNwkH",
        'nFnac': "UgntN",
        'hQntz': "vHypg",
        'vXCyj': function (_0x211178, _0x5228e1) {
          return _0x211178 === _0x5228e1;
        },
        'qIjsI': "yVnhh",
        'KsbZO': "JTCYp",
        'xTeYF': function (_0x374cd9, _0x2f9d34) {
          return _0x374cd9 === _0x2f9d34;
        },
        'jlInS': "JZjPL",
        'ETFiN': function (_0x366048, _0x2e8218) {
          return _0x366048 !== _0x2e8218;
        },
        'RNvko': "zxFdt",
        'Itujr': "vMJeU",
        'HkgOp': function (_0x4e58e7, _0x690ddd) {
          return _0x4e58e7(_0x690ddd);
        },
        'EAtVV': function (_0x1410ee, _0x1154d3) {
          return _0x1410ee / _0x1154d3;
        },
        'dzDww': function (_0x3328cf, _0x24b54c) {
          return _0x3328cf / _0x24b54c;
        },
        'dnRwo': function (_0x469876) {
          return _0x469876();
        },
        'chsKP': "latkk",
        'IrnPm': function (_0x15393d, _0x3db7f9) {
          return _0x15393d(_0x3db7f9);
        },
        'iUqHh': function (_0x5d4619, _0x3bb4fa) {
          return _0x5d4619(_0x3bb4fa);
        }
      };
      function _0x2df827(_0x4e28a4, _0x31b85d, _0x2a1c13, _0x481d34, _0xabfa0c) {
        return _0x10cc(_0x2a1c13 + 0x60d - 0x24d, _0x4e28a4);
      }
      function _0x17dd40(_0xd894e7, _0x593aa2, _0xdbb2f0, _0x72fa01, _0x5627eb) {
        return _0x10cc(_0x593aa2 + 0x2ca - 0xf5, _0x72fa01);
      }
      try {
        let _0x1f9061 = '';
        for (let _0x4fa158 = 0; _0x4fa158 < commands.length; _0x4fa158++) {
          if (commands[_0x4fa158].category === "download") {
            if (!commands[_0x4fa158].dontAddCommandList) {
              _0x1f9061 += "*Command :* " + commands[_0x4fa158].pattern + "\n";
            }
          }
        }
        ;
        let _0x3ea1e0 = '';
        for (let _0xc0ad7 = 0; _0xc0ad7 < commands.length; _0xc0ad7++) {
          if (commands[_0xc0ad7].category === "search") {
            if (!commands[_0xc0ad7].dontAddCommandList) {
              _0x3ea1e0 += "*Command :* " + commands[_0xc0ad7].pattern + "\n";
            }
          }
        }
        ;
        let _0x2ace9b = '';
        for (let _0x617090 = 0; _0x617090 < commands.length; _0x617090++) {
          if (commands[_0x617090].category === "convert") {
            if (!commands[_0x617090].dontAddCommandList) {
              _0x2ace9b += "*Command :* " + commands[_0x617090].pattern + "\n";
            }
          }
        }
        ;
        let _0x4046ab = '';
        for (let _0x2a82bd = 0; _0x2a82bd < commands.length; _0x2a82bd++) {
          if (commands[_0x2a82bd].category === "logo") {
            if (!commands[_0x2a82bd].dontAddCommandList) {
              _0x4046ab += "*Command :* " + commands[_0x2a82bd].pattern + "\n";
            }
          }
        }
        ;
        let _0x9abccf = '';
        for (let _0x5ebe59 = 0; _0x5ebe59 < commands.length; _0x5ebe59++) {
          if (commands[_0x5ebe59].category === "main") {
            if (!commands[_0x5ebe59].dontAddCommandList) {
              _0x9abccf += "*Command :* " + commands[_0x5ebe59].pattern + "\n";
            }
          }
        }
        ;
        let _0x8d8eb5 = '';
        for (let _0x224fb4 = 0; _0x224fb4 < commands.length; _0x224fb4++) {
          if (commands[_0x224fb4].category === "group") {
            if (!commands[_0x224fb4].dontAddCommandList) {
              _0x8d8eb5 += "*Command :* " + commands[_0x224fb4].pattern + "\n";
            }
          }
        }
        ;
        let _0x253600 = '';
        for (let _0x40ac3a = 0; _0x40ac3a < commands.length; _0x40ac3a++) {
          if (commands[_0x40ac3a].category === "bug") {
            if (!commands[_0x40ac3a].dontAddCommandList) {
              _0x253600 += "*Command :* " + commands[_0x40ac3a].pattern + "\n";
            }
          }
        }
        ;
        let _0x5829ec = '';
        for (let _0x180506 = 0; _0x180506 < commands.length; _0x180506++) {
          if (commands[_0x180506].category === "other") {
            if (!commands[_0x180506].dontAddCommandList) {
              _0x5829ec += "*Command :* " + commands[_0x180506].pattern + "\n";
            }
          }
        }
        ;
        let _0x8e9c18 = "*Hellow👸* " + _0x2f5e9b + "\n\n*╭─     ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ*\n*│🕵️‍♂️ 𝘙𝘶𝘯 𝘛𝘪𝘮𝘦 -* " + runtime(process.uptime()) + " \n*│🕵️‍♂️ 𝘙𝘢𝘮 𝘜𝘴𝘦 -* " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB\n*╰──────────●●►*\n*👸 𝘝𝘈𝘑𝘐𝘙𝘈 𝘔𝘥 𝘊𝘰𝘮𝘮𝘢𝘮𝘥 𝘗𝘢𝘯𝘦𝘭*\n> *╭──────────●●►*\n> *│ DOWNLOAD COMMANDS*\n> *│   ───────*\n\n" + _0x1f9061 + "*╰───────────●●►*\n> *╭──────────●●►*\n> *│ SEARCH COMMANDS*\n> *│   ───────*\n\n" + _0x3ea1e0 + "*╰───────────●●►*\n\n> *╭──────────●●►*\n> *│ CONVERT COMMANDS*\n> *│   ───────*\n\n" + _0x2ace9b + "*╰───────────●●►*\n\n> *╭──────────●●►*\n> *│ LOGO COMMANDS*\n> *│   ───────*\n\n" + _0x4046ab + "*╰───────────●●►*\n\n> *╭──────────●●►*\n> *│ MAIN COMMANDS*\n> *│   ───────*\n\n" + _0x9abccf + "*╰───────────●●►*\n\n> *╭──────────●●►*\n> *│ GROUP COMMANDS*\n> *│   ───────*\n\n" + _0x8d8eb5 + "*╰───────────●●►*\n\n> *╭──────────●●►*\n> *│ BUG COMMANDS*\n> *│   ───────*\n\n" + _0x253600 + "*╰───────────●●►*\n\n> *╭──────────●●►*\n> *│ OTHER COMMANDS*\n> *│   ───────*\n\n" + _0x5829ec + "*╰───────────●●►*\t\n\n👨‍💻 ᴠᴀᴊɪʀᴀ ᴍᴅ ʙʏ ᴛᴇᴄʜɴɪᴄᴀʟ ᴄʏʙᴇʀꜱ 👨‍💻";
        const _0x1150b3 = {
          url: config.LOGO
        };
        const _0x557193 = {
          image: _0x1150b3,
          caption: _0x8e9c18
        };
        await _0x188b80.sendMessage(_0x7e5aba, _0x557193, {
          'quoted': _0x2d3e0,
          'messageId': genMsgId()
        });
      } catch (_0x192cbd) {
        _0x4e92c9("*Error !!*");
        _0x401553(_0x192cbd);
      }
    });
    const _0x2e9e6e = {
      pattern: "downmenu",
      react: '📂',
      desc: "Get bot's command list.",
      category: '',
      use: ".menu",
      filename: __filename
    };
    cmd(_0x2e9e6e, async (_0x419772, _0x2cd43b, _0x599e20, {
      from: _0x452de4,
      prefix: _0x3946e9,
      l: _0x45ff22,
      quoted: _0x23ee2d,
      body: _0x47ebd5,
      isCmd: _0x11ccda,
      command: _0x2dbe14,
      args: _0x23dc4a,
      q: _0x4d53f2,
      isGroup: _0x42fbd7,
      sender: _0x2dd361,
      senderNumber: _0x139bc1,
      botNumber2: _0x2ffc56,
      botNumber: _0x1aa2c2,
      pushname: _0x3c48eb,
      isMe: _0xf0f5b1,
      isOwner: _0x17c3e1,
      groupMetadata: _0x15c771,
      groupName: _0x455891,
      participants: _0x10f926,
      groupAdmins: _0x3d5c7e,
      isBotAdmins: _0x1a8a32,
      isAdmins: _0x3790c5,
      reply: _0x49ca47
    }) => {
      function _0xd0128a(_0x2c63e0, _0x55ccbc, _0x140411, _0x49230b, _0x2a6c34) {
        return _0x10cc(_0x49230b - 0x13c - 0x10d, _0x2a6c34);
      }
      function _0x4e4fb1(_0x40e57e, _0x330727, _0x1c4c62, _0x13e913, _0x16c243) {
        return _0x10cc(_0x330727 + 0x362 - 0x24d, _0x40e57e);
      }
      const _0x4ddcd8 = {
        'kCskw': function (_0x5c7e30, _0x458744) {
          return _0x5c7e30 === _0x458744;
        },
        'lFItK': "search",
        'XxgfM': function (_0x1797db, _0x565b40) {
          return _0x1797db === _0x565b40;
        },
        'fzNtu': "logo",
        'xJMRO': function (_0x5415fc, _0x44e62d) {
          return _0x5415fc(_0x44e62d);
        },
        'lFpbp': "*Error !!*",
        'ZNVnM': function (_0x1933bc, _0x3d85e0) {
          return _0x1933bc(_0x3d85e0);
        },
        'plmxm': function (_0x495360, _0x437412) {
          return _0x495360 * _0x437412;
        },
        'pLmHg': "JwXoR",
        'lmxIM': function (_0xebfd7f, _0x5bb636) {
          return _0xebfd7f < _0x5bb636;
        },
        'bXokZ': function (_0xaa7c4b, _0x996d97) {
          return _0xaa7c4b === _0x996d97;
        },
        'McNZG': "QODtj",
        'MjJhY': function (_0x1ab3fe, _0x14e909) {
          return _0x1ab3fe === _0x14e909;
        },
        'STFom': "download",
        'WeJHk': function (_0x19e37d, _0x3635f7) {
          return _0x19e37d !== _0x3635f7;
        },
        'oobhr': "NoEjk",
        'fbMHC': "KpNeR",
        'KjUZm': "QAoZM",
        'jYSCA': "hykxh",
        'deRap': function (_0x28cda6) {
          return _0x28cda6();
        },
        'MdTMN': "fumfo",
        'cEnnA': function (_0x44297c, _0x3f5561) {
          return _0x44297c(_0x3f5561);
        },
        'SzwbS': function (_0x40fbde, _0x4b632d) {
          return _0x40fbde(_0x4b632d);
        }
      };
      function _0x1f1d77(_0x1f4461, _0x22f42f, _0x2cf675, _0x4e2a95, _0x4ba3b2) {
        return _0x10cc(_0x4e2a95 + 0x53e - 0x24d, _0x2cf675);
      }
      function _0x2bbcbf(_0x59de5b, _0x29262d, _0x266638, _0x3ad21e, _0x3a1e47) {
        return _0x10cc(_0x3ad21e + 0x2c3 - 0x10d, _0x29262d);
      }
      function _0x277978(_0x50eb43, _0x5530b8, _0x2052d7, _0x55ee39, _0x475ac8) {
        return _0x10cc(_0x2052d7 - 0xae - 0x24d, _0x5530b8);
      }
      try {
        let _0x2abda3 = '';
        for (let _0x5f2522 = 0; _0x5f2522 < commands.length; _0x5f2522++) {
          if (commands[_0x5f2522].category === "download") {
            if (!commands[_0x5f2522].dontAddCommandList) {
              _0x2abda3 += "*Command :* " + commands[_0x5f2522].pattern + "\n*Desc :* " + commands[_0x5f2522].desc + "\n*Use:* " + commands[_0x5f2522].use + "\n\n";
            }
          }
        }
        ;
        let _0xbb4f82 = "\n> *╭──────────●●►*\n> *│ DOWNLOAD COMMANDS*\n> *│   ───────*\n" + _0x2abda3 + "*╰───────────●●►*\nPowered by TalkDrove";
        const _0x454809 = {
          url: config.LOGO
        };
        const _0x12aaa2 = {
          image: _0x454809,
          caption: _0xbb4f82
        };
        await _0x419772.sendMessage(_0x452de4, _0x12aaa2, {
          'quoted': _0x2cd43b,
          'messageId': genMsgId()
        });
      } catch (_0x46868f) {
        _0x49ca47("*Error !!*");
        _0x45ff22(_0x46868f);
      }
    });
    const _0x3a6eab = {
      pattern: "searchmenu",
      react: '📂',
      desc: "Get bot's command list.",
      category: '',
      use: ".menu",
      filename: __filename
    };
    cmd(_0x3a6eab, async (_0x1f9090, _0x2ce969, _0x236e76, {
      from: _0x5cf376,
      prefix: _0x44fa53,
      l: _0x549473,
      quoted: _0x3dfcbd,
      body: _0x5ae803,
      isCmd: _0x24bfa9,
      command: _0x1770bc,
      args: _0x117056,
      q: _0x4da5f3,
      isGroup: _0x141307,
      sender: _0x20dee0,
      senderNumber: _0x27cb52,
      botNumber2: _0x1bc052,
      botNumber: _0x129ecf,
      pushname: _0xa2807,
      isMe: _0x1551e6,
      isOwner: _0x61e1d1,
      groupMetadata: _0x247261,
      groupName: _0x42da7b,
      participants: _0x3630c2,
      groupAdmins: _0xf82548,
      isBotAdmins: _0x2256a7,
      isAdmins: _0x4da708,
      reply: _0x3488eb
    }) => {
      function _0x21de39(_0x5593ed, _0x2b0a2d, _0x5717d1, _0x388b20, _0x2aeba4) {
        return _0x10cc(_0x5717d1 + 0x3e - 0x1a5, _0x2b0a2d);
      }
      const _0x2e3b97 = {
        'vFEmE': function (_0x4ce01c, _0x1f9eea) {
          return _0x4ce01c(_0x1f9eea);
        },
        'APJGy': "This is an owner command...",
        'EkAir': function (_0x5bc1e4, _0x1523e0) {
          return _0x5bc1e4(_0x1523e0);
        },
        'VMqyU': function (_0x668885, _0x50bcec) {
          return _0x668885 === _0x50bcec;
        },
        'JlvIa': "group",
        'AmtNK': function (_0x4f9fbb, _0x8ae453) {
          return _0x4f9fbb(_0x8ae453);
        },
        'MhaEW': "*Error !!*",
        'MGYEb': function (_0x2e3055, _0x53d49c) {
          return _0x2e3055(_0x53d49c);
        },
        'DvGdX': function (_0x5883ce, _0x27cd7a) {
          return _0x5883ce(_0x27cd7a);
        },
        'PqvaZ': "*This is an owner command...*",
        'QhCxE': function (_0x4dcb50, _0x126d06) {
          return _0x4dcb50(_0x126d06);
        },
        'kmJEf': function (_0x45aa23, _0x489c5d) {
          return _0x45aa23 !== _0x489c5d;
        },
        'RvhUv': "zHpYg",
        'HyUdI': "IgWNZ",
        'rXdPA': function (_0x4b44b5, _0x5740fd) {
          return _0x4b44b5 < _0x5740fd;
        },
        'eZfQx': "JagmL",
        'jUZTz': "search",
        'hmgQS': function (_0xeb8f7f, _0x430bd1) {
          return _0xeb8f7f !== _0x430bd1;
        },
        'BbVIX': "aRScu",
        'XZqoa': "EHdQP",
        'Vdaah': "YGxJX",
        'Skshu': function (_0x125b55) {
          return _0x125b55();
        },
        'nvevx': "vqOBC",
        'aFaJK': "CxBry",
        'aGkfD': function (_0x4c030e, _0x692555) {
          return _0x4c030e(_0x692555);
        }
      };
      function _0x2faea0(_0x260223, _0x201a1e, _0x97532b, _0x1bdc7f, _0x5aa553) {
        return _0x10cc(_0x97532b - 0x14f - 0x24d, _0x260223);
      }
      function _0x41c756(_0x22929f, _0x4dda37, _0x111de6, _0x3557fa, _0x5bc54c) {
        return _0x10cc(_0x111de6 - 0xe9 - 0x10d, _0x4dda37);
      }
      function _0x5696d4(_0x15bf15, _0x1b42c9, _0xcc1cd5, _0x56b6b3, _0x11eaac) {
        return _0x10cc(_0x15bf15 - 0xc9 - 0x1a5, _0x1b42c9);
      }
      function _0x338d2a(_0x3ab0c7, _0xf7432c, _0x41e012, _0x4f3b81, _0x1655f2) {
        return _0x10cc(_0xf7432c - 0x1ae - 0x1d1, _0x4f3b81);
      }
      try {
        let _0x12ed53 = '';
        for (let _0x1169d8 = 0; _0x1169d8 < commands.length; _0x1169d8++) {
          if (commands[_0x1169d8].category === "search") {
            if (!commands[_0x1169d8].dontAddCommandList) {
              _0x12ed53 += "*Command :* " + commands[_0x1169d8].pattern + "\n*Desc :* " + commands[_0x1169d8].desc + "\n*Use:* " + commands[_0x1169d8].use + "\n\n";
            }
          }
        }
        ;
        let _0x45eb07 = "\n> *╭──────────●●►*\n> *│ SEARCH COMMANDS*\n> *│   ───────*\n" + _0x12ed53 + "*╰───────────●●►*\nPowered by TalkDrove";
        const _0x41011a = {
          url: config.LOGO
        };
        const _0x4d334e = {
          image: _0x41011a,
          caption: _0x45eb07
        };
        await _0x1f9090.sendMessage(_0x5cf376, _0x4d334e, {
          'quoted': _0x2ce969,
          'messageId': genMsgId()
        });
      } catch (_0x1d8112) {
        _0x3488eb("*Error !!*");
        _0x549473(_0x1d8112);
      }
    });
    const _0x38fa9b = {
      pattern: "convertmenu",
      react: '📂',
      desc: "Get bot's command list.",
      category: '',
      use: ".menu",
      filename: __filename
    };
    cmd(_0x38fa9b, async (_0x246517, _0x21dd7c, _0x21a369, {
      from: _0x40dc93,
      prefix: _0x3e351c,
      l: _0x27b897,
      quoted: _0x4348e4,
      body: _0xb4a1f8,
      isCmd: _0x433ff3,
      command: _0x44951e,
      args: _0xd8697,
      q: _0x48dbf4,
      isGroup: _0x2e933f,
      sender: _0x1467a3,
      senderNumber: _0x5b9500,
      botNumber2: _0x576d86,
      botNumber: _0x23d35f,
      pushname: _0x50c76a,
      isMe: _0x30ee42,
      isOwner: _0x402df9,
      groupMetadata: _0x25a82d,
      groupName: _0x16ae24,
      participants: _0x1e18da,
      groupAdmins: _0xbb47dd,
      isBotAdmins: _0x1f6caf,
      isAdmins: _0x128aa5,
      reply: _0x1574e8
    }) => {
      function _0x24c780(_0x50bec9, _0x55f29d, _0x1c18f3, _0x522699, _0x4eeff8) {
        return _0x10cc(_0x55f29d + 0x1b6 - 0x24d, _0x50bec9);
      }
      function _0x26bdf6(_0x569170, _0x5486be, _0x5ba84c, _0xa8861b, _0x4219e3) {
        return _0x10cc(_0x4219e3 - 0x83 - 0x10d, _0x569170);
      }
      const _0x361347 = {
        'qKoqA': function (_0x4ef26a, _0x15b124) {
          return _0x4ef26a(_0x15b124);
        },
        'qqnDA': "*Error !!*",
        'aeCAu': function (_0x11d0fd, _0x26f8de) {
          return _0x11d0fd !== _0x26f8de;
        },
        'gLRvc': "HxRtn",
        'IXBoA': "MQXTI",
        'PPNJt': function (_0x4ec43f, _0x239569) {
          return _0x4ec43f < _0x239569;
        },
        'tDcpy': function (_0x24cda1, _0x5b80d3) {
          return _0x24cda1 !== _0x5b80d3;
        },
        'BamDn': "GInUQ",
        'tJEip': "EyPyb",
        'lJSMy': function (_0x240187, _0x5b5ea0) {
          return _0x240187 === _0x5b5ea0;
        },
        'OYhwC': "convert",
        'Svwtk': function (_0x1dc909, _0x4441a1) {
          return _0x1dc909 === _0x4441a1;
        },
        'PeWDS': "iIKHt",
        'ETjey': function (_0x2f29b8, _0x299b51) {
          return _0x2f29b8 === _0x299b51;
        },
        'fvlKB': "ydbXF",
        'WUpZm': "tMSXv",
        'kberS': function (_0x2dbedf) {
          return _0x2dbedf();
        },
        'fMgbj': "hpYQV",
        'sCGIu': function (_0x4d90f4, _0xc36cca) {
          return _0x4d90f4(_0xc36cca);
        },
        'qNFMH': function (_0x3eb300, _0x27e9f8) {
          return _0x3eb300(_0x27e9f8);
        }
      };
      function _0x5a1977(_0x233387, _0x19e8d3, _0x733298, _0x187350, _0x3b39b3) {
        return _0x10cc(_0x187350 + 0x37b - 0x1a5, _0x233387);
      }
      function _0x485d72(_0x62df98, _0x57f9cb, _0x7af271, _0x4a926f, _0x568849) {
        return _0x10cc(_0x568849 + 0x301 - 0x10d, _0x4a926f);
      }
      function _0x4d1720(_0x1b3c58, _0x1d8a5d, _0x421d01, _0x393861, _0x46829d) {
        return _0x10cc(_0x393861 - 0x6c - 0x10d, _0x1d8a5d);
      }
      try {
        let _0x4b2f8d = '';
        for (let _0x21bbc8 = 0; _0x21bbc8 < commands.length; _0x21bbc8++) {
          if (commands[_0x21bbc8].category === "convert") {
            if (!commands[_0x21bbc8].dontAddCommandList) {
              _0x4b2f8d += "*Command :* " + commands[_0x21bbc8].pattern + "\n*Desc :* " + commands[_0x21bbc8].desc + "\n*Use:* " + commands[_0x21bbc8].use + "\n\n";
            }
          }
        }
        ;
        let _0x269b93 = "\n> *╭──────────●●►*\n> *│ CONVERT COMMANDS*\n> *│   ───────*\n" + _0x4b2f8d + "*╰───────────●●►*\nPowered by TalkDrove";
        const _0x2dfe0a = {
          url: config.LOGO
        };
        const _0xf05028 = {
          image: _0x2dfe0a,
          caption: _0x269b93
        };
        await _0x246517.sendMessage(_0x40dc93, _0xf05028, {
          'quoted': _0x21dd7c,
          'messageId': genMsgId()
        });
      } catch (_0x5a2373) {
        _0x1574e8("*Error !!*");
        _0x27b897(_0x5a2373);
      }
    });
    const _0x1f6074 = {
      pattern: "logomenu",
      react: '📂',
      desc: "Get bot's command list.",
      category: '',
      use: ".menu",
      filename: __filename
    };
    cmd(_0x1f6074, async (_0x2a2297, _0x4e885, _0x31c159, {
      from: _0x4bb3cc,
      prefix: _0x1d6188,
      l: _0x32857d,
      quoted: _0x271a35,
      body: _0x57fa5f,
      isCmd: _0x4f3d9b,
      command: _0x311dcc,
      args: _0x2919f4,
      q: _0x1369ce,
      isGroup: _0x40bc0f,
      sender: _0x50ac9a,
      senderNumber: _0x3a3587,
      botNumber2: _0x460793,
      botNumber: _0x279395,
      pushname: _0x384973,
      isMe: _0x19165e,
      isOwner: _0x239917,
      groupMetadata: _0x331d46,
      groupName: _0x2b70f8,
      participants: _0x4f38ca,
      groupAdmins: _0x2309fc,
      isBotAdmins: _0x29773a,
      isAdmins: _0x24839d,
      reply: _0x573e4d
    }) => {
      function _0x3c317c(_0x56c25d, _0x53db69, _0x100c38, _0x450db0, _0x5eeee3) {
        return _0x10cc(_0x100c38 + 0x94 - 0x1a5, _0x5eeee3);
      }
      function _0x2ced17(_0x52e644, _0x118d5f, _0x577545, _0x54ba94, _0x28504a) {
        return _0x10cc(_0x118d5f + 0x1d0 - 0x10d, _0x28504a);
      }
      function _0x5b2568(_0x1d3617, _0x27361d, _0x1b4769, _0xa9d25a, _0x28d1c1) {
        return _0x10cc(_0x27361d - 0x1b1 - 0x1d1, _0x1b4769);
      }
      const _0x45f65e = {
        'YjPPg': function (_0x5ead50, _0x40a5db) {
          return _0x5ead50 === _0x40a5db;
        },
        'QdLqy': "main",
        'kfLse': function (_0x4074b3, _0x1c46bd) {
          return _0x4074b3 === _0x1c46bd;
        },
        'XZFmh': "convert",
        'Adtoo': function (_0x2af474, _0x1b9b84) {
          return _0x2af474(_0x1b9b84);
        },
        'PQFmp': "*Error !!*",
        'agHbD': function (_0x1a8e17, _0x247417) {
          return _0x1a8e17(_0x247417);
        },
        'lhkAX': function (_0x2c989a, _0x238f21) {
          return _0x2c989a(_0x238f21);
        },
        'hBeJI': function (_0x15c7bd, _0xb76f80) {
          return _0x15c7bd(_0xb76f80);
        },
        'TViwb': function (_0x337961, _0x1d49f0) {
          return _0x337961 !== _0x1d49f0;
        },
        'KWdCg': "QubeX",
        'wGIYk': "aapkJ",
        'idTEE': function (_0x3e2b3d, _0x2353a5) {
          return _0x3e2b3d < _0x2353a5;
        },
        'fdQKA': "GWTGy",
        'BRAgh': "CebYv",
        'spUnw': "logo",
        'IalXT': function (_0x975793, _0x71aa96) {
          return _0x975793 === _0x71aa96;
        },
        'MPYnt': "XHYrV",
        'gLCLG': "ozYEg",
        'LotKu': "NFCKV",
        'fLvgJ': function (_0xb12e0e) {
          return _0xb12e0e();
        },
        'pnpks': function (_0x446a91, _0xbff1fa) {
          return _0x446a91 === _0xbff1fa;
        },
        'JfaPs': "vFHbN"
      };
      function _0x2ce368(_0x5f15d9, _0x37c335, _0x50903b, _0x420b0e, _0x49e216) {
        return _0x10cc(_0x420b0e + 0xcf - 0xf5, _0x37c335);
      }
      function _0x1e1f92(_0x2a008d, _0x3833ff, _0x52519c, _0x2fccdd, _0x4d5700) {
        return _0x10cc(_0x52519c + 0x116 - 0x1a5, _0x4d5700);
      }
      try {
        let _0x36dfbb = '';
        for (let _0x281d5c = 0; _0x281d5c < commands.length; _0x281d5c++) {
          if (commands[_0x281d5c].category === "logo") {
            if (!commands[_0x281d5c].dontAddCommandList) {
              _0x36dfbb += "*Command :* " + commands[_0x281d5c].pattern + "\n*Desc :* " + commands[_0x281d5c].desc + "\n*Use:* " + commands[_0x281d5c].use + "\n\n";
            }
          }
        }
        ;
        let _0x1725f5 = "\n> *╭──────────●●►*\n> *│ LOGO COMMANDS*\n> *│   ───────*\n" + _0x36dfbb + "*╰───────────●●►*\nPowered by TalkDrove";
        const _0x472cb0 = {
          url: config.LOGO
        };
        const _0x36719c = {
          image: _0x472cb0,
          caption: _0x1725f5
        };
        await _0x2a2297.sendMessage(_0x4bb3cc, _0x36719c, {
          'quoted': _0x4e885,
          'messageId': genMsgId()
        });
      } catch (_0x4561b3) {
        _0x573e4d("*Error !!*");
        _0x32857d(_0x4561b3);
      }
    });
    const _0x55cd9f = {
      pattern: "mainmenu",
      react: '📂',
      desc: "Get bot's command list.",
      category: '',
      use: ".main",
      filename: __filename
    };
    cmd(_0x55cd9f, async (_0x19c6d7, _0x268e08, _0x451792, {
      from: _0x2223b,
      prefix: _0x131747,
      l: _0x34582f,
      quoted: _0x1f0201,
      body: _0xe89a22,
      isCmd: _0x476461,
      command: _0x31021b,
      args: _0x55acf2,
      q: _0x1fc184,
      isGroup: _0x1266fe,
      sender: _0x1f54f5,
      senderNumber: _0x23dee8,
      botNumber2: _0x3a28b8,
      botNumber: _0x2494cb,
      pushname: _0x3dab72,
      isMe: _0x290284,
      isOwner: _0x40427b,
      groupMetadata: _0x1d204d,
      groupName: _0x4f4c92,
      participants: _0x571a7d,
      groupAdmins: _0x46205b,
      isBotAdmins: _0x19c4c2,
      isAdmins: _0x1320af,
      reply: _0x8ba8aa
    }) => {
      function _0x576672(_0x106185, _0x180e77, _0x581651, _0x1b45b6, _0x5076de) {
        return _0x10cc(_0x1b45b6 + 0x388 - 0xf5, _0x180e77);
      }
      function _0x564da2(_0x3fa0d9, _0x1b3f0d, _0x215883, _0x323ccf, _0x27969f) {
        return _0x10cc(_0x1b3f0d - 0x205 - 0x10d, _0x215883);
      }
      function _0x44e981(_0x341f4e, _0x6e4402, _0x3d4fb6, _0x27c2ad, _0x25ff38) {
        return _0x10cc(_0x25ff38 + 0x1b2 - 0x1a5, _0x3d4fb6);
      }
      const _0x529837 = {
        'TdCYN': function (_0x530ecb, _0x159782) {
          return _0x530ecb === _0x159782;
        },
        'TXcgY': "bug",
        'wNsmQ': "logo",
        'WLUMJ': function (_0x41c6c5, _0x2cd492) {
          return _0x41c6c5 !== _0x2cd492;
        },
        'mPULA': "EYWCd",
        'DLGtA': "XkeYm",
        'uQnxN': function (_0x504ac9, _0x358e6b) {
          return _0x504ac9 < _0x358e6b;
        },
        'lcPIz': function (_0x37897b, _0x372616) {
          return _0x37897b !== _0x372616;
        },
        'htPdM': "QxLiN",
        'nUSxW': "main",
        'bAfAI': "JibEl",
        'dSpVa': "IqOjA",
        'qVOoZ': function (_0x17ff5f, _0x1871de) {
          return _0x17ff5f !== _0x1871de;
        },
        'wDUxa': "wbGrS",
        'urHYM': function (_0x15f8f5) {
          return _0x15f8f5();
        },
        'ZNcTm': function (_0xb12daf, _0x13d602) {
          return _0xb12daf === _0x13d602;
        },
        'QQpbh': "GWyZP",
        'Yjhza': "yGiGH",
        'RDdwb': function (_0x1e04aa, _0x29779a) {
          return _0x1e04aa(_0x29779a);
        },
        'KvzCO': "*Error !!*",
        'oIRFI': function (_0x2f69f0, _0x4e90f6) {
          return _0x2f69f0(_0x4e90f6);
        }
      };
      function _0x26294e(_0x11c138, _0x325730, _0x16a02e, _0x3ba0c7, _0x39bdfc) {
        return _0x10cc(_0x11c138 + 0x23d - 0x10d, _0x39bdfc);
      }
      function _0x4e3cf3(_0x19bb52, _0x7041d4, _0x5b3e53, _0x2543ab, _0x4e6b4e) {
        return _0x10cc(_0x19bb52 + 0x3a2 - 0x1a5, _0x4e6b4e);
      }
      try {
        let _0x5be7de = '';
        for (let _0x2a7fb3 = 0; _0x2a7fb3 < commands.length; _0x2a7fb3++) {
          if (commands[_0x2a7fb3].category === "main") {
            if (!commands[_0x2a7fb3].dontAddCommandList) {
              _0x5be7de += "*Command :* " + commands[_0x2a7fb3].pattern + "\n*Desc :* " + commands[_0x2a7fb3].desc + "\n*Use:* " + commands[_0x2a7fb3].use + "\n\n";
            }
          }
        }
        ;
        let _0x3e8641 = "\n> *╭──────────●●►*\n> *│ MAIN COMMANDS*\n> *│   ───────*\n" + _0x5be7de + "*╰───────────●●►*\nPowered by TalkDrove";
        const _0x5592c1 = {
          url: config.LOGO
        };
        const _0x430391 = {
          image: _0x5592c1,
          caption: _0x3e8641
        };
        await _0x19c6d7.sendMessage(_0x2223b, _0x430391, {
          'quoted': _0x268e08,
          'messageId': genMsgId()
        });
      } catch (_0x3c3b33) {
        _0x8ba8aa("*Error !!*");
        _0x34582f(_0x3c3b33);
      }
    });
    const _0x50ce04 = {
      pattern: "groupmenu",
      react: '📂',
      desc: "Get bot's command list.",
      category: '',
      use: ".menu",
      filename: __filename
    };
    cmd(_0x50ce04, async (_0x1616e8, _0x12f103, _0x43a469, {
      from: _0x35312c,
      pushname: _0x56420a,
      reply: _0x95e2be
    }) => {
      function _0x1a276c(_0x3b550b, _0x26741c, _0x5d49c3, _0x3ec3ab, _0x393f18) {
        return _0x10cc(_0x5d49c3 - 0x185 - 0x10d, _0x3ec3ab);
      }
      function _0x20d38b(_0x22505e, _0x197bb9, _0x34506a, _0x586dc3, _0x20a45c) {
        return _0x10cc(_0x197bb9 - 0x230 - 0xf5, _0x586dc3);
      }
      function _0x368331(_0x1ade5f, _0x203b20, _0x5079e8, _0x3ed03b, _0xe004ba) {
        return _0x10cc(_0x3ed03b - 0x19f - 0xf5, _0x1ade5f);
      }
      function _0x3ba397(_0x2f4719, _0x45be18, _0x54d065, _0x5c0999, _0x44a453) {
        return _0x10cc(_0x45be18 - 0x4b - 0x10d, _0x2f4719);
      }
      function _0x387c5d(_0x2012f8, _0x32e628, _0x5a67bd, _0x2c1f5a, _0x2b4180) {
        return _0x10cc(_0x32e628 + 0x1c3 - 0x1d1, _0x5a67bd);
      }
      const _0x29718b = {
        'EfuGV': function (_0x531296, _0xd9b685) {
          return _0x531296 === _0xd9b685;
        },
        'rahTH': "download",
        'nHtDt': function (_0x4d02db, _0x266490) {
          return _0x4d02db(_0x266490);
        },
        'JGXIU': "*Error !!*",
        'tjrFG': function (_0x3aa95e, _0x256235) {
          return _0x3aa95e(_0x256235);
        },
        'aYCIv': function (_0x16aa6e, _0x2c5b7e) {
          return _0x16aa6e !== _0x2c5b7e;
        },
        'gKmUw': "HSUpk",
        'HzhrF': "WRVMW",
        'fHByz': function (_0x6a0020, _0x57dfc0) {
          return _0x6a0020 < _0x57dfc0;
        },
        'BWolC': function (_0x3d2806, _0x560625) {
          return _0x3d2806 !== _0x560625;
        },
        'LrlSK': "DwHip",
        'tvpjx': "VZnyi",
        'QelES': function (_0x33f1bd, _0x29057c) {
          return _0x33f1bd === _0x29057c;
        },
        'JvGHu': "group",
        'RDGcr': "hKubt",
        'wMhmm': "HpNZW",
        'vxAiy': function (_0x184872, _0x3ec132) {
          return _0x184872 === _0x3ec132;
        },
        'ebdAa': "juyTm",
        'rvvlG': function (_0xdb5211) {
          return _0xdb5211();
        },
        'WmuJq': "HUouY",
        'pLpoc': "DSOxG",
        'fCujD': function (_0x43b608, _0x283489) {
          return _0x43b608(_0x283489);
        },
        'RrfUo': function (_0x3d000a, _0x41da86) {
          return _0x3d000a(_0x41da86);
        }
      };
      try {
        let _0x4568fa = '';
        for (let _0x2903a7 = 0; _0x2903a7 < commands.length; _0x2903a7++) {
          if (commands[_0x2903a7].category === "group") {
            if (!commands[_0x2903a7].dontAddCommandList) {
              _0x4568fa += "*Command :* " + commands[_0x2903a7].pattern + "\n*Desc :* " + commands[_0x2903a7].desc + "\n*Use:* " + commands[_0x2903a7].use + "\n\n";
            }
          }
        }
        ;
        let _0x56515f = "\n> *╭──────────●●►*\n> *│ GROUP COMMANDS*\n> *│   ───────*\n" + _0x4568fa + "*╰───────────●●►*\nPowered by TalkDrove";
        const _0x2e55e9 = {
          url: config.LOGO
        };
        const _0x35ab1c = {
          image: _0x2e55e9,
          caption: _0x56515f
        };
        await _0x1616e8.sendMessage(_0x35312c, _0x35ab1c, {
          'quoted': _0x12f103,
          'messageId': genMsgId()
        });
      } catch (_0x212b7d) {
        _0x95e2be("*Error !!*");
        l(_0x212b7d);
      }
    });
    const _0x359d4d = {
      pattern: "bugmenu",
      react: '📂',
      desc: "Get bot's command list.",
      category: '',
      use: ".menu",
      filename: __filename
    };
    cmd(_0x359d4d, async (_0x86f32b, _0x357a74, _0x1ca05b, {
      from: _0x1fa58a,
      prefix: _0x2b9166,
      l: _0x56cb92,
      quoted: _0x248a1f,
      body: _0x214bd5,
      isCmd: _0x16956e,
      command: _0x34e32e,
      args: _0xf3de8b,
      q: _0x1933b1,
      isGroup: _0x5697dc,
      sender: _0x37f597,
      senderNumber: _0x44c64f,
      botNumber2: _0xf15255,
      botNumber: _0x512135,
      pushname: _0x17f550,
      isMe: _0x1dec3a,
      isOwner: _0x493c64,
      groupMetadata: _0x54e8b3,
      groupName: _0x301d4e,
      participants: _0x608427,
      groupAdmins: _0x35f960,
      isBotAdmins: _0x43b473,
      isAdmins: _0xd12d8e,
      reply: _0x117446
    }) => {
      const _0x394480 = {
        'LJnXB': function (_0x47983e, _0x5eb60f) {
          return _0x47983e(_0x5eb60f);
        },
        'kwasg': "*Error !!*",
        'MgehX': function (_0x202ac6, _0x186eb0) {
          return _0x202ac6 !== _0x186eb0;
        },
        'OMtaC': "ZFLOO",
        'YdxhD': function (_0x128763, _0x297a25) {
          return _0x128763 < _0x297a25;
        },
        'jNOPY': function (_0xb80a71, _0xb6f906) {
          return _0xb80a71 === _0xb6f906;
        },
        'HzDwT': "jPxRD",
        'UwNfa': "JPtTk",
        'taJxd': "bug",
        'zuNbZ': function (_0x145f70, _0x3da373) {
          return _0x145f70 !== _0x3da373;
        },
        'SsDFB': "RIVrd",
        'bFTiw': function (_0x248ba6, _0x1eac36) {
          return _0x248ba6 === _0x1eac36;
        },
        'wTVhe': "Bvlge",
        'bnozW': "wCzHh",
        'jUHtJ': function (_0x3f1ee7) {
          return _0x3f1ee7();
        },
        'oFEvx': "ociIS",
        'fJkyV': function (_0xb7f0b7, _0x543ffb) {
          return _0xb7f0b7(_0x543ffb);
        }
      };
      function _0x37fb54(_0x2b5ad3, _0x18e9f0, _0xbf55ed, _0x267231, _0x292d84) {
        return _0x10cc(_0x18e9f0 + 0x451 - 0x1d1, _0x267231);
      }
      function _0x24c830(_0x123d38, _0x301248, _0x3e21bf, _0x506a77, _0x26bbc1) {
        return _0x10cc(_0x506a77 + 0x95 - 0xf5, _0x3e21bf);
      }
      function _0x26945d(_0x406871, _0x4bffec, _0xadbf33, _0x271a46, _0x11251a) {
        return _0x10cc(_0xadbf33 + 0x4ad - 0x1d1, _0x11251a);
      }
      function _0x48ac43(_0x1090fb, _0x2a97dc, _0x464f9b, _0x1f1fa4, _0x17d49b) {
        return _0x10cc(_0x2a97dc + 0x190 - 0xf5, _0x1f1fa4);
      }
      function _0x3ee1e2(_0x4e112f, _0x1c4feb, _0xfddb37, _0x23b827, _0xcbeca) {
        return _0x10cc(_0xcbeca + 0x319 - 0x24d, _0xfddb37);
      }
      try {
        let _0x3a953e = '';
        for (let _0x2d3841 = 0; _0x2d3841 < commands.length; _0x2d3841++) {
          if (commands[_0x2d3841].category === "bug") {
            if (!commands[_0x2d3841].dontAddCommandList) {
              _0x3a953e += "*Command :* " + commands[_0x2d3841].pattern + "\n*Desc :* " + commands[_0x2d3841].desc + "\n*Use:* " + commands[_0x2d3841].use + "\n\n";
            }
          }
        }
        ;
        let _0x175040 = "\n> *╭──────────●●►*\n> *│ BUG COMMANDS*\n> *│   ───────*\n" + _0x3a953e + "*╰───────────●●►*\nPowered by TalkDrove";
        const _0x46bb9f = {
          url: config.LOGO
        };
        const _0x3ece47 = {
          image: _0x46bb9f,
          caption: _0x175040
        };
        await _0x86f32b.sendMessage(_0x1fa58a, _0x3ece47, {
          'quoted': _0x357a74,
          'messageId': genMsgId()
        });
      } catch (_0x2eef1a) {
        _0x117446("*Error !!*");
        _0x56cb92(_0x2eef1a);
      }
    });
    const _0x187858 = {
      pattern: "othermenu",
      react: '📂',
      desc: "Get bot's command list.",
      category: '',
      use: ".menu",
      filename: __filename
    };
    cmd(_0x187858, async (_0x2dfccc, _0x2b111b, _0x1c593e, {
      from: _0x1b6135,
      prefix: _0x3c0bfa,
      l: _0x4f6ab3,
      quoted: _0x41072b,
      body: _0x4f2f09,
      isCmd: _0x2eb757,
      command: _0xd1d770,
      args: _0x6be56,
      q: _0x125b65,
      isGroup: _0x47000a,
      sender: _0x3a6fe2,
      senderNumber: _0xc518d3,
      botNumber2: _0x47eb27,
      botNumber: _0xeeca1,
      pushname: _0x7a0c9e,
      isMe: _0x373d40,
      isOwner: _0x109724,
      groupMetadata: _0x3f834f,
      groupName: _0x65fb78,
      participants: _0x53c308,
      groupAdmins: _0x1579cb,
      isBotAdmins: _0x324e5b,
      isAdmins: _0x480219,
      reply: _0x1251ba
    }) => {
      function _0x51715a(_0x4a308a, _0x2da20e, _0x419a2f, _0x4a501b, _0x4a0edb) {
        return _0x10cc(_0x2da20e - 0x240 - 0x1a5, _0x419a2f);
      }
      function _0x2dac97(_0x54d95a, _0x4357d4, _0x1b356c, _0x54f982, _0x5004ee) {
        return _0x10cc(_0x5004ee + 0x153 - 0x24d, _0x54d95a);
      }
      function _0x9aac4(_0xe89778, _0x11e766, _0x209e73, _0x317aa0, _0x26d712) {
        return _0x10cc(_0x11e766 + 0x2df - 0x24d, _0x209e73);
      }
      function _0x1afa75(_0x121c85, _0x4477a4, _0x44307c, _0x3b1165, _0x15ab6f) {
        return _0x10cc(_0x4477a4 + 0x207 - 0x1a5, _0x3b1165);
      }
      const _0x38fe8f = {
        'NanXO': function (_0xa0149e, _0x11eb3b) {
          return _0xa0149e(_0x11eb3b);
        },
        'idOJg': "*Error !!*",
        'RBuRL': function (_0x249935, _0x58ec47) {
          return _0x249935(_0x58ec47);
        },
        'MvWgQ': function (_0x597599, _0x3ecf02) {
          return _0x597599(_0x3ecf02);
        },
        'tguRC': "*This is an owner command...*",
        'IGqtL': function (_0x3cb1b1, _0x176010) {
          return _0x3cb1b1(_0x176010);
        },
        'GkxHW': function (_0x4352c9, _0x704a72) {
          return _0x4352c9(_0x704a72);
        },
        'RsBgl': function (_0x871b5f, _0x46ab09) {
          return _0x871b5f(_0x46ab09);
        },
        'Arxic': function (_0x45c83f, _0x59a429) {
          return _0x45c83f !== _0x59a429;
        },
        'yHUtV': "TYPQG",
        'KevkH': function (_0x558b66, _0x55d6b5) {
          return _0x558b66 < _0x55d6b5;
        },
        'eYIYX': function (_0x11fcbc, _0x4362f5) {
          return _0x11fcbc === _0x4362f5;
        },
        'kuGmk': "tQwal",
        'CMMUh': function (_0x385883, _0x185057) {
          return _0x385883 === _0x185057;
        },
        'uCwns': "other",
        'SGGWs': "wmwcw",
        'xKmrY': "BqAWu",
        'qOuHB': "ZZktm",
        'MrTmH': "uIRVc",
        'IPJpe': function (_0x2a15a4) {
          return _0x2a15a4();
        },
        'LYBhL': "XammJ",
        'CwrUs': function (_0x24eee3, _0x39b5c7) {
          return _0x24eee3(_0x39b5c7);
        },
        'aoyzN': function (_0x1000ab, _0x53fe96) {
          return _0x1000ab(_0x53fe96);
        }
      };
      function _0x2731e2(_0x552aef, _0x4870c0, _0xeb65e, _0x13f638, _0x5ebdc6) {
        return _0x10cc(_0x4870c0 - 0xf6 - 0x10d, _0x13f638);
      }
      try {
        let _0x31621a = '';
        for (let _0x2b13c2 = 0; _0x2b13c2 < commands.length; _0x2b13c2++) {
          if (commands[_0x2b13c2].category === "other") {
            if (!commands[_0x2b13c2].dontAddCommandList) {
              _0x31621a += "*Command :* " + commands[_0x2b13c2].pattern + "\n*Desc :* " + commands[_0x2b13c2].desc + "\n*Use:* " + commands[_0x2b13c2].use + "\n\n";
            }
          }
        }
        ;
        let _0x537d3b = "\n> *╭──────────●●►*\n> *│ OTHER COMMANDS*\n> *│   ───────*\n" + _0x31621a + "*╰───────────●●►*\nPowered by TalkDrove";
        const _0x3031c7 = {
          url: config.LOGO
        };
        const _0x58002c = {
          image: _0x3031c7,
          caption: _0x537d3b
        };
        await _0x2dfccc.sendMessage(_0x1b6135, _0x58002c, {
          'quoted': _0x2b111b,
          'messageId': genMsgId()
        });
      } catch (_0x4945d0) {
        _0x1251ba("*Error !!*");
        _0x4f6ab3(_0x4945d0);
      }
    });
  }
  const _0x265674 = {
    pattern: "ping",
    react: '📟',
    alias: ["speed"],
    desc: "Check bot's ping",
    category: "main",
    use: ".ping",
    filename: __filename
  };
  cmd(_0x265674, async (_0x251c06, _0x5101d1, _0x5cefc0, {
    from: _0x40306f,
    prefix: _0x3d91f5,
    l: _0x3d466d,
    quoted: _0xe50f9a,
    body: _0x1e3a49,
    isCmd: _0x58a189,
    command: _0x222654,
    args: _0x1de9d8,
    q: _0xfcee71,
    isGroup: _0x41474e,
    sender: _0x444002,
    senderNumber: _0x2bcea3,
    botNumber2: _0x584dde,
    botNumber: _0x2eeb9b,
    pushname: _0x20c447,
    isMe: _0x4c4a9e,
    isOwner: _0x56426d,
    groupMetadata: _0x582fae,
    groupName: _0x2c535f,
    participants: _0x41f0a3,
    groupAdmins: _0x3f7dab,
    isBotAdmins: _0x5bee4d,
    isAdmins: _0x59741d,
    reply: _0x6221bb
  }) => {
    const _0x46cbdb = {
      'rPqjt': function (_0x212fd7, _0x539cff) {
        return _0x212fd7 === _0x539cff;
      },
      'AmIYf': "tpHZG",
      'QmHcg': "BbpTB",
      'PsAXG': "```Just a second please!```",
      'BayKq': function (_0x7c839, _0x3b1617) {
        return _0x7c839 + _0x3b1617;
      },
      'XWWHU': "*X-Byte ping is*\n *",
      'IwSli': function (_0x36498b, _0x518fe2) {
        return _0x36498b - _0x518fe2;
      },
      'gRlpD': " ms* ",
      'OsClh': function (_0x265055, _0x3ed593) {
        return _0x265055 === _0x3ed593;
      },
      'EMzzO': "rzwPE",
      'qQqCz': function (_0x22ebae, _0x59676d) {
        return _0x22ebae(_0x59676d);
      },
      'OYKci': "*Error !!*"
    };
    function _0x2fb9a2(_0x1d69e3, _0x253ce, _0x176949, _0x76b6cd, _0x9020c6) {
      return _0x10cc(_0x9020c6 + 0x1f2 - 0x10d, _0x1d69e3);
    }
    function _0x908b19(_0x1eb6c1, _0x2ac4bf, _0x598bad, _0x4a7298, _0x93229e) {
      return _0x10cc(_0x93229e + 0x250 - 0x10d, _0x4a7298);
    }
    function _0x23dce5(_0x134fcc, _0x1022f3, _0x557d2f, _0x41d8d4, _0x18cd9d) {
      return _0x10cc(_0x134fcc + 0x1bc - 0x1d1, _0x41d8d4);
    }
    function _0x54766f(_0x5c14af, _0x466077, _0x41fd13, _0x310099, _0x2d6dda) {
      return _0x10cc(_0x5c14af - 0x1a9 - 0x1d1, _0x41fd13);
    }
    function _0x39a375(_0x5db6cd, _0xa46e5a, _0x44a120, _0x20dbfc, _0x543114) {
      return _0x10cc(_0x543114 - 0x2b4 - 0xf5, _0x5db6cd);
    }
    try {
      let _0x252f3b = new Date().getTime();
      const _0x1bfdef = {
        text: "```Just a second please!```"
      };
      const _0x5e139b = {
        quoted: _0x5101d1
      };
      let _0xe4a7bf = await _0x251c06.sendMessage(_0x40306f, _0x1bfdef, _0x5e139b);
      let _0x1aeb08 = new Date().getTime();
      return await _0x251c06.edit(_0xe4a7bf, "*X-Byte ping is*\n *" + (_0x1aeb08 - _0x252f3b) + " ms* ");
    } catch (_0x54b7fb) {
      _0x6221bb("*Error !!*");
      console.log(_0x54b7fb);
    }
  });
  const _0x4bb169 = {
    pattern: "cmdfile",
    react: '🔖',
    desc: "To command file",
    category: "main",
    use: ".cmdfile",
    filename: __filename
  };
  cmd(_0x4bb169, async (_0x29e6a2, _0x4bb616, _0xdbfaad, {
    from: _0x2b10db,
    prefix: _0x3369ba,
    l: _0x1b606a,
    quoted: _0x24619d,
    body: _0x8f4b68,
    isCmd: _0x2e579b,
    command: _0x1179f2,
    args: _0x1d6966,
    q: _0x2e03ab,
    isGroup: _0x19fab8,
    sender: _0x36fb45,
    senderNumber: _0x7d1914,
    botNumber2: _0xb592a5,
    botNumber: _0x3c102a,
    pushname: _0x4832a9,
    isMe: _0xe51916,
    isOwner: _0x548e7b,
    groupMetadata: _0x20527a,
    groupName: _0x2a4d2a,
    participants: _0x414f02,
    groupAdmins: _0x19a05a,
    isBotAdmins: _0x20111a,
    isAdmins: _0x8be153,
    reply: _0x33345a
  }) => {
    const _0x465373 = {
      'aEsEl': "Select menu type",
      'hrcuJ': "Download commands",
      'QpLDq': "Search commands",
      'Dmnxs': "Convert commands",
      'EgbmM': "Main commands",
      'iPSal': "Group commands",
      'HDFop': "Logo commands",
      'cFXPC': "Bug commands",
      'BMmrM': "Other commands",
      'gJzfT': function (_0x128d18, _0x4d0836) {
        return _0x128d18 !== _0x4d0836;
      },
      'szNQe': "gQqWl",
      'wvrwL': function (_0x110259, _0x13863d) {
        return _0x110259(_0x13863d);
      },
      'YdOHC': "*❌No Such commands.*",
      'lzDuz': function (_0x37dc67, _0x493f8d) {
        return _0x37dc67 === _0x493f8d;
      },
      'nCoDP': "PrGyd",
      'jiGkf': "nrKZK",
      'YtQlZ': function (_0x2f41db, _0x28977f) {
        return _0x2f41db(_0x28977f);
      },
      'dcwIJ': "*Error !!*"
    };
    function _0x44dfa3(_0x15debb, _0x383e17, _0x57abb5, _0x278e0a, _0x56dd5b) {
      return _0x10cc(_0x383e17 + 0x25b - 0x10d, _0x15debb);
    }
    function _0x4f6c86(_0x5d0813, _0x3587ce, _0x1592a6, _0xf68f63, _0x579b65) {
      return _0x10cc(_0x5d0813 + 0x14c - 0x1d1, _0x579b65);
    }
    function _0x27f0ea(_0x19e0b6, _0x5380b8, _0x35c81c, _0x5aa433, _0x4dcd98) {
      return _0x10cc(_0x19e0b6 - 0x166 - 0xf5, _0x5380b8);
    }
    function _0x3ca5ba(_0x45fdaf, _0x1234b0, _0x32559d, _0x48f672, _0x3a735b) {
      return _0x10cc(_0x48f672 - 0x24e - 0xf5, _0x32559d);
    }
    function _0x512aea(_0x3e29d1, _0x34f062, _0x212cef, _0xca5251, _0x36f025) {
      return _0x10cc(_0x36f025 + 0x2d7 - 0x1d1, _0xca5251);
    }
    try {
      let _0x1a6e19 = [];
      const _0x5585b2 = commands.find(_0xb7989 => _0xb7989.pattern === _0x2e03ab.split(" ")[0].toLowerCase());
      if (!_0x5585b2) {
        return await _0x33345a("*❌No Such commands.*");
      } else {
        _0x1a6e19.push("*🍁Command:* " + _0x5585b2.pattern);
      }
      if (_0x5585b2.category) {
        _0x1a6e19.push("*🧩Type:* " + _0x5585b2.category);
      }
      if (_0x5585b2.filename) {
        _0x1a6e19.push("✨FileName: " + _0x5585b2.filename);
      }
      return _0x33345a(_0x1a6e19.join("\n"));
      const _0x7ac8a1 = {
        text: '✅',
        key: _0x4bb616.key
      };
      const _0x5027f3 = {
        react: _0x7ac8a1
      };
      await _0x29e6a2.sendMessage(_0x2b10db, _0x5027f3);
    } catch (_0xbe9541) {
      _0x33345a("*Error !!*");
      _0x1b606a(_0xbe9541);
    }
  });
  const _0x4ce065 = {
    pattern: "owner",
    react: '🔖',
    desc: "To take owner number",
    category: "main",
    use: ".owner",
    filename: __filename
  };
  cmd(_0x4ce065, async (_0x3a0a4c, _0x5b3580, _0x482d13, {
    from: _0x5ce467,
    prefix: _0x2ab6f6,
    l: _0x1e2f18,
    quoted: _0x114770,
    body: _0x349e6d,
    isCmd: _0x2f5fd3,
    command: _0x3f6652,
    args: _0x5c44c1,
    q: _0x380b1b,
    isGroup: _0x5938b2,
    sender: _0x4466a9,
    senderNumber: _0x10152c,
    botNumber2: _0x1e8813,
    botNumber: _0x5487d9,
    pushname: _0x957510,
    isMe: _0x1150b2,
    isOwner: _0x334144,
    groupMetadata: _0x3f0235,
    groupName: _0x2d75c2,
    participants: _0x49bb32,
    groupAdmins: _0x37b344,
    isBotAdmins: _0x559778,
    isAdmins: _0x2ca350,
    reply: _0x117ed3
  }) => {
    function _0x188cd8(_0x57c553, _0x1fa3d6, _0x157255, _0xf813a8, _0x60ab62) {
      return _0x10cc(_0x57c553 - 0x210 - 0xf5, _0xf813a8);
    }
    const _0x35ae3f = {
      'ovloU': function (_0x3b8c4d, _0x5a9a69) {
        return _0x3b8c4d(_0x5a9a69);
      },
      'mNppz': "*Error !!*",
      'AOBsN': function (_0x9aa28a, _0x389540) {
        return _0x9aa28a === _0x389540;
      },
      'nAtgA': "vyNxB",
      'wkows': "EnMJY",
      'KlLuO': function (_0x4a9394, _0x44aacd) {
        return _0x4a9394(_0x44aacd);
      },
      'EQlGC': "../settings",
      'FdHjS': function (_0xbad7bf, _0x3626ef) {
        return _0xbad7bf + _0x3626ef;
      },
      'eFmLA': function (_0x4ec39c, _0x434b66) {
        return _0x4ec39c + _0x434b66;
      },
      'fVTYk': function (_0x6cf4de, _0x503a0a) {
        return _0x6cf4de + _0x503a0a;
      },
      'nNqvL': function (_0x56ba, _0x3ba623) {
        return _0x56ba + _0x3ba623;
      },
      'KWqaU': function (_0x3070e2, _0x68c6ba) {
        return _0x3070e2 + _0x68c6ba;
      },
      'CoeIc': function (_0x325f28, _0x3feb6e) {
        return _0x325f28 + _0x3feb6e;
      },
      'gAVzA': "BEGIN:VCARD\n",
      'jwfhn': "VERSION:3.0\n",
      'qNoCB': "FN:",
      'AzCmm': "ORG:;\n",
      'RPwWT': "TEL;type=CELL;type=VOICE;waid=",
      'iWXhT': "END:VCARD",
      'jHwQk': "Touch here.",
      'HQzJx': function (_0x19b0ec, _0x3cd7ad) {
        return _0x19b0ec + _0x3cd7ad;
      },
      'uokWu': function (_0x179363, _0x2e30de) {
        return _0x179363 + _0x2e30de;
      },
      'ApLiQ': function (_0x1c4fd6, _0x4becab) {
        return _0x1c4fd6 + _0x4becab;
      },
      'wcHWh': "?text=Hii bro,I am ",
      'BAXUS': "cta_url",
      'MSBXa': "Bot Owner",
      'ejYcH': "address_message",
      'UBUgK': "Send address to bot owner",
      'JwgTh': "cta_call",
      'MCdhr': "Call to the owner",
      'BVrTl': "send_location",
      'qWeeK': "Send Location for owner",
      'KvoEl': "> You can contact the bot owner from this section",
      'dCKtm': function (_0x59a88a, _0x50b818) {
        return _0x59a88a === _0x50b818;
      },
      'KiRuN': "SrXbZ",
      'uggeX': "DoQtu",
      'AXcLa': function (_0x5ac7de, _0x2b075e) {
        return _0x5ac7de(_0x2b075e);
      }
    };
    function _0x59068e(_0x18c49d, _0x54b7b1, _0x15ad08, _0x11f7ba, _0x36606b) {
      return _0x10cc(_0x36606b + 0x49 - 0xf5, _0x11f7ba);
    }
    function _0x56ace4(_0x3ac12d, _0x4ee6ea, _0x598b3c, _0x12caea, _0x317d35) {
      return _0x10cc(_0x598b3c + 0x1bd - 0x1a5, _0x317d35);
    }
    function _0x6da3ce(_0x140d35, _0x3ff96d, _0x37a4a9, _0x133155, _0x22fd89) {
      return _0x10cc(_0x133155 + 0x455 - 0x10d, _0x3ff96d);
    }
    function _0x359d97(_0x515aa7, _0x452009, _0x4ed429, _0x575190, _0x12431a) {
      return _0x10cc(_0x12431a + 0x455 - 0xf5, _0x4ed429);
    }
    try {
      const _0x167448 = require("../settings");
      const _0x1a0507 = "BEGIN:VCARD\nVERSION:3.0\nFN:" + _0x167448.OWNER_NAME + "\n" + "ORG:;\n" + "TEL;type=CELL;type=VOICE;waid=" + owner[0] + ':+' + owner[0] + "\n" + "END:VCARD";
      const _0x2dab3a = {
        vcard: _0x1a0507
      };
      const _0x17136f = {
        displayName: _0x167448.OWNER_NAME,
        contacts: [_0x2dab3a]
      };
      let _0x349ec5 = {
        'contacts': _0x17136f,
        'contextInfo': {
          'externalAdReply': {
            'title': _0x167448.OWNER_NAME,
            'body': "Touch here.",
            'renderLargerThumbnail': true,
            'thumbnailUrl': '',
            'thumbnail': "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png",
            'mediaType': 0x2,
            'mediaUrl': '',
            'sourceUrl': "https://wa.me/+" + owner[0] + "?text=Hii bro,I am " + _0x5b3580.pushName
          }
        }
      };
      let _0x25733b = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Bot Owner",
          'url': _0x167448.CONTACT,
          'merchant_url': _0x167448.CONTACT
        })
      }, {
        'name': "address_message",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Send address to bot owner",
          'url': _0x167448.BTNURL,
          'merchant_url': _0x167448.BTNURL
        })
      }, {
        'name': "cta_call",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Call to the owner",
          'url': _0x167448.OWNER_NUMBER,
          'merchant_url': _0x167448.OWNER_NUMBER
        })
      }, {
        'name': "send_location",
        'buttonParamsJson': JSON.stringify({
          'display_text': "Send Location for owner",
          'url': _0x167448.BTNURL,
          'merchant_url': _0x167448.BTNURL
        })
      }];
      const _0x4b1b1f = {
        image: '',
        header: '',
        footer: _0x167448.FOOTER,
        body: "> You can contact the bot owner from this section"
      };
      return await _0x3a0a4c.sendButtonMessage(_0x5ce467, _0x25733b, _0x482d13, _0x4b1b1f);
      const _0x242179 = {
        quoted: _0x5b3580
      };
      return await _0x3a0a4c.sendMessage(_0x5ce467, _0x349ec5, _0x242179);
      const _0x42bbbe = {
        text: '✅',
        key: _0x5b3580.key
      };
      const _0x2bf6ea = {
        react: _0x42bbbe
      };
      await _0x3a0a4c.sendMessage(_0x5ce467, _0x2bf6ea);
    } catch (_0x1b2f74) {
      _0x117ed3("*Error !!*");
      _0x1e2f18(_0x1b2f74);
    }
  });
  const _0x30a481 = {
    pattern: "request"
  };
  function _0x11392f(_0xb5e636, _0x37f1cc, _0x555fb9, _0x306259, _0x16380e) {
    return _0x10cc(_0x306259 - 0x10d, _0x555fb9);
  }
  function _0x10cc(_0x5baa90, _0x5774a9) {
    const _0x6f226f = _0x138f();
    _0x10cc = function (_0x348b9d, _0x2dd28b) {
      _0x348b9d = _0x348b9d - 339;
      let _0x2e0152 = _0x6f226f[_0x348b9d];
      if (_0x10cc.GXsoVC === undefined) {
        var _0x556bcf = function (_0x8b7e73) {
          let _0x4d55dc = '';
          let _0x581e13 = '';
          let _0x1f8478 = 0;
          let _0x53a56a;
          let _0x2b5b88;
          for (let _0x4ca048 = 0; _0x2b5b88 = _0x8b7e73.charAt(_0x4ca048++); ~_0x2b5b88 && (_0x53a56a = _0x1f8478 % 4 ? _0x53a56a * 64 + _0x2b5b88 : _0x2b5b88, _0x1f8478++ % 4) ? _0x4d55dc += String.fromCharCode(255 & _0x53a56a >> (-2 * _0x1f8478 & 6)) : 0) {
            _0x2b5b88 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x2b5b88);
          }
          let _0xaf39ad = 0;
          for (let _0x5ace63 = _0x4d55dc.length; _0xaf39ad < _0x5ace63; _0xaf39ad++) {
            _0x581e13 += '%' + ('00' + _0x4d55dc.charCodeAt(_0xaf39ad).toString(16)).slice(-2);
          }
          return decodeURIComponent(_0x581e13);
        };
        const _0x56830f = function (_0x4241c7, _0x6293dc) {
          let _0x5ccfe0 = [];
          let _0x2a9cde = 0;
          let _0xde2c81;
          let _0x3109b9 = '';
          _0x4241c7 = _0x556bcf(_0x4241c7);
          let _0x83173c;
          for (_0x83173c = 0; _0x83173c < 256; _0x83173c++) {
            _0x5ccfe0[_0x83173c] = _0x83173c;
          }
          for (_0x83173c = 0; _0x83173c < 256; _0x83173c++) {
            _0x2a9cde = (_0x2a9cde + _0x5ccfe0[_0x83173c] + _0x6293dc.charCodeAt(_0x83173c % _0x6293dc.length)) % 256;
            _0xde2c81 = _0x5ccfe0[_0x83173c];
            _0x5ccfe0[_0x83173c] = _0x5ccfe0[_0x2a9cde];
            _0x5ccfe0[_0x2a9cde] = _0xde2c81;
          }
          _0x83173c = 0;
          _0x2a9cde = 0;
          for (let _0x23389d = 0; _0x23389d < _0x4241c7.length; _0x23389d++) {
            _0x83173c = (_0x83173c + 1) % 256;
            _0x2a9cde = (_0x2a9cde + _0x5ccfe0[_0x83173c]) % 256;
            _0xde2c81 = _0x5ccfe0[_0x83173c];
            _0x5ccfe0[_0x83173c] = _0x5ccfe0[_0x2a9cde];
            _0x5ccfe0[_0x2a9cde] = _0xde2c81;
            _0x3109b9 += String.fromCharCode(_0x4241c7.charCodeAt(_0x23389d) ^ _0x5ccfe0[(_0x5ccfe0[_0x83173c] + _0x5ccfe0[_0x2a9cde]) % 256]);
          }
          return _0x3109b9;
        };
        _0x10cc.JNHAFv = _0x56830f;
        _0x5baa90 = arguments;
        _0x10cc.GXsoVC = true;
      }
      const _0x11eb2a = _0x6f226f[0];
      const _0x3ad4bd = _0x348b9d + _0x11eb2a;
      const _0x3e5735 = _0x5baa90[_0x3ad4bd];
      if (!_0x3e5735) {
        if (_0x10cc.TqZvVN === undefined) {
          _0x10cc.TqZvVN = true;
        }
        _0x2e0152 = _0x10cc.JNHAFv(_0x2e0152, _0x2dd28b);
        _0x5baa90[_0x3ad4bd] = _0x2e0152;
      } else {
        _0x2e0152 = _0x3e5735;
      }
      return _0x2e0152;
    };
    return _0x10cc(_0x5baa90, _0x5774a9);
  }
  function _0x138f() {
    const _0x4e279a = ['WRL5W4ZdOCkk', 'maFcKSkIW7q', '8jkdPokdQpgfG4q', 'vCkse8kYwW', 'WPVcV8oAvSkN', 'WRXOkCogya', 'WPnTCG', 'W4FcICoqta', 'nUkxLN7cPra', 'WRdcT8oTDmk2', 'W5iAamkpFa', 'hCkof8k5', 'wef6WQRdQW', 'zSkfk8ovrG', 'o8kYWQ3cLh4', 'dCkwWRFcPMu', 'W7KYDG/cUq', 'Du3cQ8kvW7q', 'hmkgdCkJnG', 'hZzyWQVdMa', 'WRhcSSkWugW', 'hCkxW55RW4C', 'WR3cSSoQ', '4BECY7lcMUg2JmUy', 'WP/cO8k8BYK', 'WPxcUW/dVuS', 'rSoIeWddKa', 'sCo6rCkJxa', 'dqe/W4nu', 'W4qprJpcRa', 'fxVdPCoyFG', 'rmogha', 'kh7dUW', 'WOFcRCk7BYi', 'W4vzFW', 'WPBcL8k7EIS', 'gmkuW59YW5a', 'W48tW7K', 'bWRWSigBnuq', 'rCoTWPhcNrO', '4BseY7Oj4BwsYzS', 'W5FcH8k6fG', 'sr/cUCkOW74', 'm8kvCmkGfq', 'CSoEWQRcVc8', 'frHkWOBdLW', 'oWNcLmk4', 'W4L+ydHG', '4PEy4Psb4PwA4PA24Psm', '4PEj4PAF4PsD4PsD4PAC', 'jX3cLmk1W7O', 'WOVdImoovmkn', 'hwNcJSkbW4K', 'W6FdV1riWPW', 'W6/cOLvBFW', 'ju8GfIu', 'WRVcQfPb', 'WPxcMCowrCku', 'sI0yvmkx', 'vCkIW6rpzG', 'daarW7LM', 'nXZcJSkxW6e', 'CGlWNycNW5VcTW', 'ASosWOZcMG8', 'W7BdPg9IWRe', 'WO3cRINdGhG', 'hCkdcSoTiW', 'xmo/W4xcGaW', 'WR4cW47cQdK', 'W6ddOwHuWQu', 'FCk0W4ddT2q', 'EutdS8ohsG', 'a0JdImogqa', 'mYvAEmkJ', 'jCk2WQ3cLbm', 'C8kTW4HloG', 'WRWlW7emWO4', 'kc4jW6zk', 'WPi7W6P1Da', 'ib0oW4PJ', 'W5hdK8k2uCoU', 'W5fkyZjn', 'ACkBtSoshW', 'pCkKWQy', 'emkCW4m9W48', 'WR7dH8oywSk9', 'WPVcR8omDCky', 'WRThaSoMtW', 'AmkYW45/yW', 'WRfYESoFFW', 'WRSgycRdOa', 'WPfOcCoowW', 'sSk/v8oVpa', 'bCkoaCkQiW', 'eGzk', 'WO4txIddQa', '4Bsa4BAx4BsUYQ7kUq', 'WOFcHCodESk7', 'Dmos8losSmoMW5a', 'W4KnBr3cUa', 'xSkzW549W40', 'vpgbPzLjW5VdHq', 'cWS0W6Lf', 'WPDX8j6yRFgjRQ7IGz/IMBdVUQtcOSkL', 'fe3cS1C2', 'WR05AX7dUG', 'W4BdLSkjdW', 'tSkxyCodW7C', 'eSoy8lslVpcwN4JIGzxIMR7VUldcVYu', 'ntbUWQVdTG', 'iutcOh8r', 'WQ4ZFrVdJa', 'AmoWkWNdHq', 'WPXpWQiieq', 'W7m/DW', 'WOLKsafz', 'WQiHW7KPW5W', 'BYldVmoQFq', 'qw/dUSk5', 'WOKabImy', 'AmkLWQBcG0m', 'AeldSW', 'l8kjpSkddW', 'kar9WQhdGW', 'WRSyv8k3wa', 'ngfNW5ddNG', 'WPlcLCkjxfm', 'k0jAW7pdRG', 'jcHOh8kA', 'WRvypSoZqa', 'sW4TW5XV', 'eCk8hmo6dW', 'E8oIW7tdHGD+c8k6WO0iWQldNXa', 'WRaiW53dUJy', 'WQTfatGC', 'W7hcOmkngSoh', 'nVgkMO/cPwtdNa', 'qSoIWOdcM18', 'WOqPqGxdOq', 'W7efW4C3gW', 'rqtdTW8xW4PDW4jhWOy', '6P+r4BwaYiSN4Bsa', 'W6VdQ2FcHYW', 'vfr7', 'WQqMW7aRW5W', 'W5iR8kM7SFcCJ4hIG5JIMlBVUPZdI0q', 'Dg/dJmk6kq', 'aqaDW5XS', 'zqjGmSkX', 'W74IW7GWfa', 'hYWUW6PM', 'CCkJwmo0W4O', 'W4hcO8kKCJO', 'WPVcOGjgCG', 'tSojduBdPW', 'WQWHW55FDa', 'WOLUyZvy', 'WPhcQJxdLgK', 'zqxcVw5t', 'jXDT', 'zLFdPXy', 'f8o3uCo+tG', 'y13cUmkSW7G', 'W73dUCo1EmkZ', 'ua1ajCo0', 'uSkfsq', 'cXPiWOC', 'qZDMa8ke', 'AvKFtmob', 'W7FdSEkwSEkuTEkuGG', 'zvxdQ0ldLa', 'WQOMW6qRW5i', 'BsiGtSo+', 'W4xdGuHqWRq', 'jrZdKW', 'bCkeWOhcQfi', 'wCoHWP3cOdi', 'btn7WOhdLq', 's2xdGSoQFW', 't8kPtCoCW4S', 'r0NdLmo2tG', 'yvNdObZdNG', 'WQNcPe5qDa', 'W5vXEcPv', 'ECk4W4mscq', 't8k+W7JdTM8', 'W4pdQSk5jCo7', 'yeJcQW', 'W6FdTx9iWQe', 'lEkuOokwVEkxTUkvSq', 'W40DxZ/dRa', 'xHifcCox', 'BrzD', 'W4ZcG8kJgmoc', 'W69CWONcV2FcG8klhx/cLdTuFW', 'WPZcP8kMFWe', 'Yz3HTyNQNz0x4BEN', 'W7VdVYa', 'WRNdN8owr8kn', 'fe1NW63dQW', 'xIijrCoF', 'WRtdHCoBBCk6', 'FbKecCob', 'qt8DC8kC', 'WROb8jUONVcEVQpIG6tIM7xVUO5+CG', 'g8kxu8k8gG', 'W6RcPmkznmo/', 'WPNcI1VdVSom', 'W6q/W5RcV8ob', 'jCkoWQFcTx8', 'DmkxW4pdNfe', 'W78HW4ddVmks', 'hSk8xCoRna', 'W4VWRkMAj1rP', 'lgZdOCoRlG', 'WRn2o8ofAW', 'WPjif2SF', 'x3hdLSo2yW', 'WPvyqYze', 'tSkeuq', 'WQdcS8o3DCk0', 'WPeub8kvCa', 't8oMgbddIa', 'W7lWN4cY8lkVSokaT/gkI7tdKmoXwG', 'aseMW75q', 'AmkKWQBcG0a', 'WR04BaVcTa', 'j2zCW4FdNq', 'W4ZdL8ouqSkJ', 'WQRdGCo5wmkT', 'dmkfg8oHDW', 'BudcOhXf', '4PEt4PEw4PAz4Psr4PEr', 'WOirxIZdPW', 'WOTfhd8u', 'W43dGCkd', 'WRRcPCoT', 'kmkmjSkhnG', 'WP8tAtJdKq', 'W6eLW5pdOxC', 'wSkzvSo0mW', 'WO0PW6eRW5W', 'WOJILRhXGyA14Oka4PIL77UlAmkb', 'ALhdObW', 'DfBcQW', 'cSkyWPFcVMy', 'fZqVW5L1', 'z0ZcON5F', 'fquQW4DK', 'kKtdRSodvW', 'DSk7Fmosmq', 'WQpcT8oTzCk0', 'W53dSFgiKPHgdW', 'WQ7cOu4', 'A8k1ESodW58', 'ySkYxmoWW5e', 'W7JdTwbi', 'uSkqdCkVoG', 'De/cPf1I', '4Bs1YjpdHEg3RCUW', 't8kjFSoy', 'yqDgoCk/', 'W40pvJ7dUG', 'qSojgrldRq', 'u8obtW', 'FokuMokxVEkxLUkwKq', 'jmkUW4GxhG', 'WPCQbmkeDq', '8k+APmoJ8ygASpcUUy3dTa', 'BSk4W54v', '4BEV4BEn4BsOYz/kMG', 'FmkDW4pdJ2q', '4PAI4PAZ4PE64PwS4PAn', 'DSk1xa', 'cCoS8jglKpcWRjJIGOJIMlpVUilcH8kA', '4PE7j8kf8lYHPUkdVFcSS71k', 'gSkDW4n+', 'WOpcP8kMFdG', 'jmUQ4BsM4BwkW7q', '4PsB4PEx4PAG4PsB4PsU', 'CriqtCoq', 'WQRdTWGv', 'trisqCkA', 'YyhHTiBlMUQEHYW', 'YR7kSmoT4BEB4BAC', 'W5zh8lg7J/cQVy7IGRtIMkBVUkRcGIC', 'ecFcSSkcW5q', 'WRa8W6mHWPi', 'd1JcPL0T', 'CSkKWObYxq', 'o8k0W492qW', 'qglcT8oiuq', 'WOWsrXldVa', 'u1dcOLaS', 'dFcqOQxXJ42N4Oc28k64GLJdRrq', '8ygJOSkAAmknhG', 'z0BdR8okgG', 'W51kFt09', 'WP9evb9Y', 'yeVdOHZcMW', 'p0JcV8k5W6u', '4PsiW73cJvBILAW', 'kWuoW6vV', 'W645WPFcPCog', 'WPvSFW', 'WRnZfGOf', 'W6FdTw9EWRa', 'lCkZWQRcHa', 'faXzWQ3dOW', 'W4RdNmkjgmoJ', '4PEx4PEB4PEC4PE64PEn', 'W6/ILlJILPFILy7IL7W', 'cHrOWQxdPW', 'aHTA', 'lu/dM8owbq', 'W43cNSkWimo+', 'rvdcQCk5', 'WONcVZpdL38', 'lmkSWPbqW6C', 'WQ5aW5hdRs4', 'WOJIL4pIL7RILAZILO0', 'pq4VW4fv', 'WRlcTCkP', 'qSo98y+HNxCR', 'W7RcI1FcVCor', 'YkdjRblHT4xHTR0', 'F8o6WO7cSZC', 'i11r', 'WRbKESoHza', 'gqBdNCkzW6q', 'WPRdJCoEuSkn', 'ohhcQfOr', '4PwU4PAO4PE64PEd4PE1', 'WOKUW7LJia', 'cIv6WQtdOW', 'ECknf8oCAa', 'WPKUW6z3Ba', 'WO53CJXz', 'jq3cNmkKW7i', 'W4ZWL5QJAYLD', 'z8k8W4msta', 'B8ktW4tdJWu', 'C8k6mSoSxG', 'WQBcPtKlW7dcS8ovW6NdRwJdVZHE', 'CvdcVxm', 'EI0PtSkS', 'WQ3cLSkgtH4', 'sSkBW4ddV0K', '4PEFtLtcJse', 'WO9tbG', 'umkdEmofW70', 'cgrKW4ldUa', 'WPpXH6UJW77dRSo6', 'WOLscW', 'WQ7cOqjwyW', 'rCoKv8kLxG', 'umkvW5vZW5C', 'W6xdVmoOmEkuOq', 'WR7dP8oVsCk5', 'qdWyxSkq', 'W4eQW7Czja', 'i8klFmozW6S', 'W6NcIhxcNCoq', 'F8kWW48ydq', 'jCkKkmkcDW', 'AuJdRmodwW', 'WOldKSkutmoI', 'W5vfzG', '8lgAQpczQk7WNkISW4NWSkU/', 'zSkYW4Oz', 'kwJdRSoRAW', 'zSk6WQBcNKy', 'D8kfW4pdNLC', 'WOZcMmoyxmku', 'W6/dQSkDkSoF', 'iMldOSkGwa', 'BabimSkX', 'vCkshCoWha', 'WOTbhc8X', 'WQfXpW', 'AutdVSkzha', 'W5JcJLC', 'daK7WOKR', 'WRrui8ogEG', 'tCo2sSkGDq', 'yUkwP+kxG+kxSokuSW', 'WQtcVmowyCkb', 'pCkqvCockq', 'WQTHpa8U', 'W4RcHLZcUSoF', 'W4FdGmkjdCoQ', 'WRPUlSkwFW', 'WQ5nWPVcQx0', 'xKJcOCoAwW', 'k8kwsuZILOy', 'uSo4uCkQxq', 'WRHHoG', 'umkdW6NdRLu', 'p8kgW4/cVaW', 'DbbApSkA', 'W55MW7ddQmks', 'WRKiW5tcQde', 'BCkbW4G', 'igJdJmooEW', 'W4mtW74EfW', '4PEf4Pwi4PAxzmo2', 'wNxdJCkSha', 'wJ8ZwSkA', 'WQpcUHBdQ1G', 'gvNcHfe0', 'lmkYWRdcK0e', 'jqjGoZK', 'W6S4zrJcVG', 'W4W8WRBcV8oJ', 'guvS', 'zmoYu8kpFW', 'WRFcR8khBX4', 'jexdOmoa', 'WQtcVSkO', 'W7hdTeHyWQK', 'W4OfW6myba', 'Y6hHTk/kIEQEU8k/', 'jCk2WQ3cLh8', 'z8kPv8oJW78', 'v8k4W4n6wG', 'W5nCgEkvJ8kP', 'bxRdH8oMFG', 'z13dTW', 'WO7cV8ktFue', 'rComkGNdQq', '4BA94BwN4BAjY6piHa', '4Pw68jwNKokcH+kBNE+7NCk6dh8', 'WQn7lUkvQmo6', 'o8o3WOdILjVILk4', 'W6KpWRhcOSoF', 'g8k1CSoroa', 'W68dydRcMW', 'WP/dRmkMFJG', 'qCoKWOdcHW', 'u8ogWO7cKcK', 'vSktu8oOha', 'fCopWQ3cQde', 'b2VcOSoGW7i', 'WPD/AdqC', 'FmoCWOpcLq', 'W53cHL7cRCoF', 'WRCyW73dPtW', 'ANtdUb/cTa', 'WOJcHeXGsW', '44oRB+kuG+kwJ+kwIa', 'WRSFW5xdVsC', 'xSktu8k8eW', 'rmoBgGFdOW', '4PsX4PwR4PA64Pww4PsY', 'W4hcL8kuhSoa', 'WPSgv8kiAG', 'W5xdICkTnSoF', 'mbHAWQldKW', 'W5tcHwhcT8o9', 'yH91oZG', 'j+kvJEkwVEkxTUkvSq', 'zetcO2Gr', 'dK7cOuS1', 'omk2WRFcHfy', 'vmkGW45+xa', 'mUkwGUkwREkwU+kuPq', 'WPf7FW', 'WR8WoCk0', 'yVgkQjldKgCM', 'WPruuIKs', 'C2/dLmoABa', 'oSkwFCoFqq', 'Au/dK8kcma', 'e0DWW6/dVq', 's8kxsCoOea', 'ySkFW7vVEa', 'rCkqW5KxlW', 'cXT1WQBdPa', 'lqhdRCoQW5y', 'xJ9ciSk5', 'WONdK8onCmkT', 'B8k+W5r3sW', 'fCk2uCo2aa', 'jh/dU8oIAW', 't8omsqRdRq', 'W7hcG/cXSO3cRbC', 'D8kVtCo7W5S', 'WPZcP8kMFYK', 'W5qbW6mBhW', 'W4JcKSk5fCkn', 'mtrLWQhdSa', 'WP8zuI7dVq', 'WP/cUVcCSPdcGmoM', 'bmknW75/W7G', 'W5FdGCkw', 'W5ifW7ul', 'WQXk8lYdKJtdGa', 'ib00', 'fGeWW5Dd', 'EvpcRW', 'Fr82xmkv', 'FmkYW5q', 'f19NW6/dRq', 'WOyHW4ddIZy', 'WPvmgs0q', 'Y6/jLHZHTOdHTAy', 'ktTohr4', 'W5ZcKvFcUmov', 'tr8ucCoy', 'tLlcRmkNW74', 'xmkwW6WacW', 'gCkkg8k5mG', 'W5W8WRBcKSod', 'itD0WRK/', 'WQlcPfyvDq', 'W4RdLSkBcmoO', 'WQBcJmk5ueK', 'sZpcR8kL4PwJ', 'W6i+WOm', '44corEkwOEkxNUkvNa', 'mZlcR8kzW58', '8jMsUCknW7naxW', 'WOhcPSoODYu', '4Pww4PwO4PE94Psz4PwE', 'xSkzW7u', 'W4tcN8k+emoE', 'W78PWPVcTCog', 'WPjXDsrs', 'W7a08j6ZVxJdTq', 'AK3cQuTx', 'W7iPFq', 'WOPzcmoKAq', '8j6kPVcYIOVWOyMv8lo6O00', 'm1ldL8o2', 'eCkWwSoI', 'AXDq', 'nd1SWOhdQq', 'jXNcK8ksW5a', 'qsKnu8kA', 'W4RdK8kJgCoi', 'WQq0W7JdUa0', 'WQ7cPYBdQL4', 'W6CJqG7cRG', 'W4FWOjUIBCoDmq', 'fvuoW4NcIa', 'EHyftmos', 'WRdcOSo4tSkY', 'mbxdTYj6W53dGCkaBvW', 'hCkqW4nwW7i', 'W6FdO8kVjSoP', 'WPNcJv3cQq', 'EmovWPpcIJq', 'CmkLgCkTWPq', 'ESkTW4SFcW', 'sSoXpa3dTG', 'tSkhCmozWP4', 'C0dcR3Hf', 'WRX2briU', 'WRVcUuTBFq', 'E1GsrSoy', 'FWdcNmoxwW', 'BKJdNmkema', 'dCkDW555W4C', 'ja3cNmk1W6u', 'mYX/WRNdPq', 'WOxcNvzHCq', 'A8kJwmoZW5S', 'W68+DaBcSW', 'WOKzqc4', 'oxPkW4lcVW', 'EHGCrmou', 'umknhmoTFa', 'nubOW4/dIa', 'D8k4W4LmDa', '8yQBRSkA8l+BLFcWI43WPjMy', 'WR/dLxXpWQS', 'WOKzv23dVq', 'umoTWPBcJf8', 'CCo8v8koyW', 'vmoBda', 'yuvAm8kN', 'WPLremoXDq', 'WReTW686', 'dK3cQ1CT', 'DudcTM8', '4BwiW7FHT47HT7ut', '4Bw4YRCP4BAoYja', 'WOyjW4uk', '8y6hRE+6MgddKMC', 'q8o2umkHxG', 's1dcPmkxW4e', 'yCkxW5uGbG', 'cv7dMSo/zq', 'W4NdLSkOpmoS', 'pHDNjZO', 'tmkpESosWOu', 'aqeTW5a', '4PsJ8lwMSokbQ+kBHU+6HJRcTIC', 't3FdGcZcVW', 'hSk2t8oVdW', 'BSkMW4zYtW', 'WRvmqwOh', 'W6K+Fb4', 'iCk5WOJcM3a', 'WPhcQJpdK2K', 'vIbOfCka', '4BwMW4VHTBtjKEg1Ka', 'dCkmWP4', 'vmkera', 'qcP+gmky', 'fCkDW4K', 'W54ussFcMW', 'WOPRDtG', 'B0NdTa', 'W7XHFqff', 'FCoiWOFcMW', 'fsFcSmkBW5a', 'W6FcSc8CW64', 'c/c1MRHgW5ddOq', 'AXGer8or', '4BsjYRZlICQC4Bw1', 'WO3cN2nsCG', 'WRn0DW/cQq', '4PET4Pw84PsZz8kd', 'WO3cPca', 'DCkxW4pdJG', 'y8kYW4nwcG', 'W6FcPSkquCoG', 'g0DKW6FdVG', 'rmkzW6fwAW', 'WOyzsG', 'DSkYW410xa', 'W5BdGCkpcq', 'WPWhpmk7uG', 'WRBcPCoQCmk2', 'ySk0wSo/WP4', 'FKxdMq', 'BgtdTmoeFG', 'bCkPumoYfq', 'WQ07W7xdPW0', 'yehdK8kspq', 'W4NcJLFcSmop', 'YPJHTkljJUQCQHe', 'ge/dRqr5', 'rf7cVCk0W7i', 'W7zSwXbn', 'amo38lsdMYJdHG', 'iCkCn8kVBG', 'WRtdVCoYzCk6', 'bdLXbrq', 'zJDMidK', 'k8kc8kwiOFc+JBlIGjFIMQFVUA1rWOy', 'emkWumo+dW', 'tConbWhdSa', 'gaDsodC', 'W6/cJM14vW', 'yw7dOmoIyW', 'WQWyW4NdOa', 'u8oYsSkGEW', 'W7BWPios8l2oQ+kcUpcXI6rMWRG5', 'W4VdG8kobCoI', 'WP8ugCkfoq', 'YAfHWQTxYP8', 'W6aTWPtcSSo+', 'BWbq', '4PsP4Pwm4PwS4PE44PsW', 'WOFcQJBdHxS', 'W6mGWPhcMSoQ', 'FricsG', 'WO4IW4iuWPe', '4PYIyCoOW4jF', 'WOS2wdtdNW', '4PEC4PwT4PA64PAi4Pwx', 'WRxdTSo6y8k0', 'B1NdVGZcLW', 'pdn4oGu', 'yKtcUN5w', 'WP3cO8kGtWq', 'oSk6W7NdMHm', 'W48AWOJcGSoE', 'mCksW5jPqq', 'zw7dIJ/cIG', 'sSkvfmomyG', 'WODefJKy', '4Pse4PwL4PsP4Pww4PEu', 'mFgkO4JWMB+s4Okt8lg6U1pdJMC', 'W5BcG8k/aSop', 'EfpdLSoOqW', 'ELldSSog', 'B250W7TO', 'jmoYW54thW', 'kYanWPKl', 'WOhcPSoMnwi', 'td8FvSky', 'qSk2W4O5ha', 'W73cR3xcQSo7', 'q1dcO8k0W5O', 'qCo6qq', 'W4ifW74C', 'WPCEW5JdKHG', 'W7tcSSk4k8oG', 'gCkEhmkL', 'nX0crSoB', 'jrDFWRZdOa', 'EmonySkPuq', 'WRNcQ8kX', 'WPXkDarg', 'b1NcQmkHW68', 'zvxdICkshG', 'zSkYW4O', 'sL7cO8kKW5C', 'WQxcO8kVDGa', 'W4RcKblcT8ou', 'bCkTtSoYdW', 'WO0GWQS', 'bGuQW5zM', 'hSkPBSoSla', 'WOlcNSoHymkh', 'WRZcVSkL', 'W7VdH8kRamox', 'p8kDhCkSdW', 'yfxcVNDy', '4PA7d8oe8jMHMEkcVVc/KA4v', 'WRSHW6JdVJq', 'WO7cVZtcH34', 't8kzE8o1dq', 'W4xXJ7kWo/cUMOBWNyQq', 'nCkZW49Sqa', 'qCksD8ocW6W', 'WOebwq', 'vu3cU15g', 'YAlHTQ7iUUQCKCoi', 'g8oyW4D8W4S', 'W4VcHKlcSSoB', 'ECkIC8ojjW', 'CutcUM9u', 'WRtcTmodvSkj', 'hmkBg8kKoG', 'jrXZCJW', 'wSkXvSo6mq', 'W4tdPmkdbCoJ', 'ESkWd8ooCq', '4PsU4PEO4Psf4PE344g7', 'cGO7W5Dl', 'rSobdX8', 'DComkJ/dIG', 'WQVdJmoTzmk7', 'WQD1jGqI', 'xSkfsmoWaq', 'oab9pW', 'WOdcSmkX', 'umorkHFdSa', 'WPJdM8oFrmkB', 'Dmk6W416qa', 'Y7/HTPtHTi7kOSoK', 's0ZdVtVdJW', 'v8kzwG', 'W5lcP8kbgCoi', 'bmkcaSkOiW', 'W5hcVSkekCoB', '4BsBYyJcGog0N8QH', '4PEt4PEw4PAz4PsrW7S', '8ksjIxtcUt/cPG', 'nWquxCox', 'W43dH8oDh8kT', 'e8kzW555WOi', 'W7xcN8kYemoE', 'W5ePAdNcKq', 'WP5byZ4', 'WOygW6qtfq', 'rCoLqCkIvG', 'CcCIsmoz', 'zSo8e8k3', 'sSkbW6/dNeK', 'qcaj', 's2XFW4ddPSkMW5q', '44cjW6BILRhILixILkW', 'WOjemsqq', 'W6hdQfzfWOa', 'W5ddLSkBd8o5', 'nXOqqmoB', 'W5xcKSkJbCoi', 'WOZcO8k8FIS', 'e01W', 'WPe6W7HV', 'WQGeW47dPdi', '4Pw44PsOi8kaWPu', 'WQhcS8oPFG', 'WP4zuJ/dQG', 'WO8jvcddRa', 'tmk5W6uCpW', 'pbnGjJm', 'WRqiW5VdRdi', 'W7hcHxNcQmod', 'tSkwW4ZdMK0', 'ebC7', 'W78UyW', 'WRdcOSk5zCk5', '8lslR/giQyxWTOI/j10', 'W7ldGMjnWOa', 'W4SbW6qrhq', 'WO0KW58nWO8', 'i1HEtSoC', 'W7xdPWi', 'zCkRW4ezoq', 'W4ddICo9uq', 'jX3cKSkIW7q', 'hvT6W6VdUa', 'lXnKjJ8', '8ksPRpcwQ57WTBUPWOxWNOIH', 'lCo3WRFcNXm', 'FW0MFSkT', 'oCoOWP9fxmkqwCk7W6D6W5pcSee', 'W5bBDcjt', 'WQNcOK1bFW', 'zSk4WRFcMfy', 'WPntfW', 'jmkMlSkdeW', 'BCoVgWddTW', 'WOWQW6zOCG', 'y8kUWO0FhW', 'WPSgaW', 'WOu2emk2wW', 'vSogdbtcPa', 'jGNcICkIW7q', 'F1lcGSk0W4K', 'oqfX', '4PA7W4msW77ILRO', 'WPqCg8keDW', 'WPlcPSooySkt', 'WO/dI8oRvSkh', 'WODofJG', '8kElGFcMQ6pWQkQUnSkh', '4BwmYyVkT8QA4Bs3', 'W5hdH8kibCoJ', 'mM7cR8k1ja', 'AfBdRNjc', 'ACkNoW', 'nqNcICkZW7y', 'C8o/mdhdOW', 'w8okWOVcIbW', 'AaatDG', 'wSo7WOVcJa0', 'tsKFvmkn', 'pXDG', 'xepdI8oHDG', 'W5XAbmkeAG', 'g8klW4n8W4u', 'WPXKnSotEa', 'W4eIW65QyG', 'WPGLFaFdHG', 'yehdK8ksuq', 'W4NcLSk5fSoz', 'W4ZcGmkJ', 'nsepWQxdPW', 'kSkgiCkRaq', 'WOxcSCoPoM0', 'WRzLDmkyiG', 'smowvmoVvq', 'WRFcSSoAFSk8', 'uSklW4VdOxy', 'ySkTW78biq', 'cqvcW4JdKG', 'pXVcIq', 'WQtcUmo8y8oX', 'c8kSW4/IL6VWOjsP4OgG4PIt77I5', 'rJ4v', 'lCk5WRBdKeC', 'Be7dRColva', 'z8kIESo4W5m', 'Fq7dNSkzha', 'DSkewSo9W70', 'eGO7W4e', 'WOH7DJXf', 'i8kphSo6WP4', 'W5FcNmkIh8oj', 'aKldGCoBtW', 'uSonbWldIq', 'WQuKj8kwya', 'WQJcMFgbUkVWVj6C4Ooj4PIk77UdwW8', '4PwP4PER4PwV4PEn4Pwx', 'WPTYBZfp', 'vCoLsa', 'k8kLWQBcLea', 'kKBcOCodxW', 'BIaMwCo/', 'WQ1ZeSoVqq', 'W40/xcddPa', 'W4joCJPZ', 'iqxdRJSr', 'fqDUhXG', 'ivhcPN4r', 'zfpdIq', 'dCowWPbjW4O', 'WRjpFbPe', 'DL07jJm', 'CSkZW7rEAW', 'lgZdOCoRqG', 'WRrmhJSP', 'heXkW6xdSG', 'deCPW77dTW', 'BfNdOSkcfa', 'WONdGmoDsmkC', 'WRFcRmoDzSkM', 't0ddO8odDW', 'heD+W6tdSW', 'B1xcOCopva', 'WPi7W7LUBG', 'W740AqFcUW', 'rCongGxdTG', 'cW/XJlMC8joDIokcJEkAL++4UNZcIW', 'W55JzX1Z', 'EKBdTCoAxW', 'evH9W6pdSa', 'WPZcMSkLxXG', '4BsN4BAqYzddPoQCIq', 'W5JcMNZcV8ox', 'fNFcQxOi', 'fsFcS8kaW5q', 'ASkxW4ZdMfe', 'AgeHC8oF', 'W7hdV2bjWOu', 'uCk+W4jEqG', 'WQ4QW7i8WQ8', 'WQTSpvlcTXm+y8oaWQi', 'WOiua8kvFa', 'WQhcS8o4CSkL', 'WOJcUZpdJMm', 'ESk4mCoQqG', 'WOVcPSklDce', 'lXLNWQVdKq', 'W7a6AG7dUG', 'kwVcRKK7', 'W6/cMuPqoG', 'eFgcSzxWUi6j4OcY8lIyItFdVWy', 'vSkonmovFa', 'W4BcKSkJfmok', 'W7VcGwtcL8oI', 'gSkBa8kKiW', 'oWrMjrO', 'W54qvW', 'W4hcG8kA', 'WQxcTmoEFCk4', 'zMVdVt3cTa', 'W7egxH0', 'zuVdUG', 'YRdHTyVlRoQCHSoF', 'WRNcVSkUfwe', 'WPD/AdrW', 'lLJcPKW6', 'W5ZcKxhcV8oj', 'h8ojWPFcMXa', 'aWytW7Tc', 'W6VdOFcUOiPiWP8', 'F8kBW4VdGG', 'jbDMpt0', 'r2ZdQrVcIW', 'W4eUW6yN', '8yEaP+kcHVcEORS', 'lKxcI3CZ', 'W5tcHLZcQSot', 'WReJW4RdUc0', 'B8o5WO41ba', '4Pw24PEz4Ps84PAB4PwH', 'jmkddSkiaa', 'cCkBW7HkW4O', 'fuLGW6q', 'xSkzm8o3Fq', 'mmkdEW', 'vXG0q8oE', 'WQBcNeTZBq', '4Psk4PED4PAT4Pw24PwS', 'bGWWW5PI', 'abNcOCkeDW', 'WQhdTSk4mmo7', 'WQ7cOuTuAq', 'WO4eW5OaWRm', 'CWramSoP', 'WObpicCi', 'WQBcQ8kIEdG', 'W6/cPMdcJCoZ', 'F8k7mmoZvq', 'WP4Zb8kdAq', 'WRdcUCo0FmkW', 'W6KtW44tga', 'W5nFmY1O', 'rJWjf8kq', 'WPbcomoxEG', 'DSkaASo7ja', '4Psb4PsL4PEo4PEu4PE+', 'DXFdOwHu', 'cHyQWPKl', 'BN7dMHhcIq', 'sL7cPmkU', 'W7BcRN/cN8o0', 'BvxdQW', 'WR7cUe1bFW', 'WPyqbmkc', 'WQWLW7yPWPK', '4PEYW73dICooeW', 'W7j/xqXv', 'sZKyq8kq', 'eSkDW556W5y', 'qmo/WOa', 'W6xXJigk8jkFPUkcNpcOUylcQCktBW', 'i8kGWQlcG1q', 'mqT+W5bU', 'tCo2sSkGgq', 'Et4RtSkB', '8yAXIokbV/cTO4y', 'W6SQW6iPWPe', 'W5hcK8kkbCoJ', 'WPtcUci', 'dK/WLyo7WPaf', 'WQu+FYZdVG', 'WOZcQI7dIq', 'WRrKnmorEa', 'gSkWuSoWeG', '4PEFtLtWS6gP4Okl8yoITem', 'W5dILA7ILiBILzdILlW', 'jqfG', 'oW/dRG', 'zCkVW4zwcq', 'zG4NEmkN', 'WQmqg8kKsG', 'hrxdRq', 'mCoC8jclM/cIN4tIGPhIM4VVUBVdHrG', 'CGr5l8kz', 'DSonC8kZFa', 'WPO4zJxdQa', 'u8oYsSkGDa', 'r8kjBSozW7i', 'WPnUxd5w', '8yUIVUkcLpcBGAO', 'EuVdQW', 'W7BdSxPyWQm', 'eCoPWOaX4Pwd', 'u8k6W4NdNeq', 'gSkoaCkPgG', 'zCofCmoKEG', 'W7FdVqC', 'A/cCG6FWVl+Y4Oo98kY7HINcHSoG', 'W57cR3hcKSo9', 'W5ldHSkjba', 'WRuPW6m6WPK', 'zSkZfSoNDa', 'DCkNkG', 'dvTS', 'b8kFWRhcS3q', 'WRxcUSkoFIC', 'W40DxsNcQq', '8jUQPmka8jUQRFc6U4qB', 'fGD+WOKR', 'ySoNjcVdHq', 'W4VdH8kjtmo6', 'vSowsCo0ha', 'lZFcPCkV', 'WP8LW7BdHYe', 'AmkvW7PFzq', 'aqSPW51S', 'WO7dMSoF', '4Pw44PsO4Psj4Pwf4Pwq', 'WQVcQffw', 'C8ooW4xcUt4', 'DuNcPCkvW60', 'eCo98lEzNpcuRAxIGRFIMBNVUj/dThK', 'iICpWQRdRq', 'W5tdVmkUamoe', 'mCoC8jcaStfA', 'WORcPSkHBW', 'W6WIWP7cPq', 'W6tcNSkE', 'W5rpudzQ', 'WPP0pCkwBW', 'ySkRW6pcONy', 'WR7cT8o3DCoX', '4BwbYPlcR+g2I8Qb', 'W5ZdG1xcT8om', 'YyxHTARiUUQEUxC', 'W7JdS0LpWPu', 'yKFcRmkTW6S', 'WRZcVGjbDq', 'v8oTC8kEAW', 'ArJdVr3cKG', 'WQ0cWQ/cM8oW', 'WOeLW7K2WO8', 'zWPhimkX', 'WQtcTmkNxIa', 'WO85W65XEa', 'mYCEr8os', 'c0fNW63dSW', 'jH3cJSk+', 'W6lcLSkJuCop', 'rqHDgmkF', 'WRhcSSkWqwC', 'WPtcGSo2q8k6', 'e8kzW555W64', 'WOxcRWtdIge', 'dLSjFmkc', 'WPKiwIpdRG', 'WQyyW7jDua', 'W4idW7O2oG', 'amkgdSkQmG', 'WRVcSq3dKhG', 'd0zSW7JcVW', '4BwX4BEzt+g2Nee', 'W4hcNCkfbSoc', 'Emk4W4r+dG', 'zeJcOwLi', '4BEM4Bwx4BAeYOFHTjS', 'W7RcVc5jWQW', 'W7HF8kkHJf14', 'x8kttSo/', 'WQmRW6j1Eq', 'WRvGnmosFW', 'WOZdGmksgCo5', '4PEx4PEB4PEC4Ps14Psc', 'E8kXkSo2vq', 'wmoTWOVcJv8', 'F8kDW47dSN0', 'EeldT8o2WRe', 'WQ5dWPRdMdS', 'WOWrvG', 'hZL/mX0', 'oLTtW4tdLW', '4Pww4PwO4PE94PEw4PAr', 'j8kLWRO', 'cHyN', 'W6Wk8koZPJLq', '4Psd4PEg4Ps54Pwy4PwX', 'ESk5W4n+xq', 'WP4ihq', 'WPOqfSkfFa', 'DbiCrSoh', 'WOVdRmoOscm', 'WOm6W6W', '4PEf4Pwi4PAx4PAb4PsZ', 'WR7cTSk9uMC', 'eLpcOLOt', 'jdFcPCkV', '6P6S4BwCYBdHTA/kSa', 'lmo5W63dNG', 'zSk1sSo2W5K', 'WOezxsRdVq', 'EhhdK8kopW', 'BmktW6FdG0e', 'WOaOW4nLra', 'wwWnr8kp', 'W4HFvW', 'FmkRW4hdTMO', 'E8ktW5NdNKi', 'AuVdVrhcKq', 'CmobWP/cKZa', 'WRXKkCov', 'W6GRCapcTW', 'oCkyEmk7la', 'Faqcsmos', 'W7lcSfXyWRq', 'WOBcOIhdNG', '4PsCsSkh8kcGMokcQpc8GQeN', 'Dmos8lozMVc3Ry7IG6JIMidVUkTUza', 'DMBcTfnz', 'gfdcQeWG', 'W4pdNSkF', 'A8kBW41tsq', 'DSkGb8oisG', 'DCktW4tdLq', 'W64ZCr7cVG', 'W5y3sb/cLq', 'WO3cSmkNnWu', 'WQ5XjInz', 'W5BcKuxcV8oi', 'zbJdRrFcKW', 'W7JdSwbzW6q', 'WOKFjgG+', 'W4tdNmkvgmoO', 'W7ONWPxcOCob', 'CSkWlq', 'W5VdG8optSkd', 'y0RcQMi', 'W50AamkpFa', 'AIayxCoD', 's8kIzmoDiG', 'dGzB', 'kKjdgSkfxCkBoXjEmZpdJa', 'W4ZcKfC', 'xv8p', 'AudcR39u', 'lVcMGyhWQQYO4OgT8l2iSSkuWPTw', 'WQZcRfzqFq', 'WPVcPSoxs8kg', '4PszxxSJ', 'WPGpvG', 'WQXQW64qhq', 'ovNdQSowsa', 'sfFdHSohAa', 'W43dNCkFcmoh', 'W5OpxrpcLq', 'hLZcS1S+', 'sCkMkSkdaG', 'tCk4W5LwdG', 'oW3cKa', 'hKfLW6/dSq', 'W5ZcKey', 'W5hWTyos8jEmLokbV/gcUjhdVmovWQu', 'B27WQlkpvCoU', 'eriUW5L5', 'lCk2WQ7cGXm', 'EmkXoSkLra', 'lr1TkbG', 'he1BW6VdRW', 'd8o0tmkLvW', 'W4FdVx1ZWQ4', 'tmo0hCokFq', 's8khW47dKWu', 'uLRcVSk0WRS', 'z8kPtSo5W5i', 'tZjnfCkZ', 'oshcUCkxW74', 'W4hdKSkocCoQ', 'v8ktu8o7aq', 'FrfCdmkN', 'kqfNmZe', 'wmk4W45TsW', 'W5FdTgDpWR0', 'WOddQYRdIge', 'WQ0TW7yQWPK', 'whFdTSo5BG', 'WQeTW6qT', 'W4VcHKhcQ8ow', 't0tcO34l', 'DmkJWODOdG', 'WOqpeYtdUG', 'BmkJW5RdMKK', 'WOOQW7i', 'W4hcQmk7Dci', 'zSkKWO0scq', 'WOGcW4/dQZ8', 'W43cNmkKbCod', 'l8kTW7voW7y', 'l0pdVSo5qG', 'BIKyf8kD', 'WRBcR8kVvhi', 'B8o3W499dG', 'DmoZz8kDDW', 'WPjQCIbp', 'vSkBxmoYeq', 'W6BdO29AWQe', 'r8kjgSkQoG', 'ACk+W4DZwG', 'BqHimCkX', '6P+EW6lXJzgZ4Ogb8lMIUG', 'Fe1Bcq', 'dSkzamk4jW', 'W53cHKhcVq', '4BscYztdJUg3Sv8', 'rXFdPW', 'tSoFbWpdTG', '4PEp4PEn4PsI4Ps14PsA', 'l8kKimkzeG', 'FCoLWOlcUXi', 'rX3cQu40', 'W4WcW48NDW', 'WRpcVSkVvG', 'W4/cO8kSBs0', 'qmkuW78Klq', 'w8kwxq', 'F8k1kSoGvW', '4PADfCoh8y+tS+kaTVcUSlK7', 'W48mW6GScq', 'WR3cNSoTvCkL', 'dtXqaxW', 'WPXYAt9o', 'AayBwSk2', 'W4ZdL8oAamoK', 'iSoyWO0', 'WQtcLCk5EHK', 'Cmk8D8ogW5S', 't/cMJj/dSg7dQW', 'DXFXJQkthCon', 'tuRcQxqr', '4PEM4PsG4PwY4Pwl4Pw9', 'qSo2WRlcSY0', 'vCohhqFdQa', 'W4zVjGm4', 'kSk2W5LFW4q', 'W7K/rWxcTW', 'fbbbWOZdRW', 'wSkAhCo/da', 'CHii', '4PA54PEJ4PsY4PEE4PA6', 'nuFcR0WF', 'dXboWPJdTW', 'Cmk7n8osAG', 'W47cNSkDnmol', 'sdGFvSkp', 'fhRdGCoPBW', 'WOGpqcZdRG', 'W6KOWRNcUCoF', 'W5VdISkTfmoA', 'W51oFsW', '4PwbWOpcSb7dIa', 'WQdcV1S', 'n8k/W4fPW64', 'WQ8UW6rkBW', 'FgldG8o2WRS', 'W7dcQIqD', 'iXJcMCk3W6u', 'W5Heyc1P', 'W7K0AH7cMW', 'WOlcK8oAtmkT', '4PsyWPNdSgBcSW', 'nCkZW4v3xq', 'B0tcO34', 'WRLZoCoEmW', 'W7pcTCoXCmk/', 'YOhHT7xiREQEIGu', 'scej', 'C8kYW4f/sW', 'W6zhWPO', 'WOyua8ke', 'k8k2WRFcLvq', 'F0ZcOa', 'W5ldV8kka8oU', 'WO49W7i', 'vSkyuSo/qq', 'WRJcQCkL', '4BwfYPhlU8UL4Bsk', 'z8ofWRpcMXS', 'W6ufW5iaWQK', 'tSkcsCoZgW', 'WQRcUmkSxHK', 'Emk4W412tW', 'WQKFrXJdJq', 'mNNdVCoMya', 'Baqu', 'WOP/CIrz', 'zmo8aWpdVq', 'D8ksCCoBgW', 'eeL9W7NdVG', 'dGvBWOhdJq', 'WOlcO8kHDq', 'WOGOW7BcSYm', 'WPlcMmoxvmkD', 'WQBcPmo1', 'a8kLimkDdG', 'YkliISotW7JcVW', 'EeBdR8okvq', 'DCkioYpdLa', 'W6q8WO7cV8oD', 'WPuzW5eJWOW', 'xSkuW6zqra', 'euvOW63dUG', 'WQ5lqXHT', 'xCoJWPBcNre', 'WPdcHdldR04', 'W5iAqeRcLW', 'ruVdOmoJAa', 'u8oJvSkTvW', 'cVc6OyZXJO+f4Och8k+PJ1TpzW', 'igldS8oCvq', '4PA3cSk3W7Xp', 'W7ervYFcOW', 'q/gfOiFXJj6R4Okf8jQ4QSkLW73cJG', 'oIZcR8kmW6i', 'dvZcS0O8', 'WRXOW7qNWO4', 'W7NXIRoX8jUCREkcLFc9QkNdLaWi', 'WO/dJmoBtCoi', 'WR0kW5NdScq', 'WP0hdG', 'WOvbbI4A', 'z0BdR8okDG', 'WPxcRJ/dKW', 'sI0yuSky', 'WPlcLCkj', 'WOiDvW', 'bba8W5X1', 'tsKFva', 'W70TWO7cOSox', 'WPnqfIOj', 'F8kUW4G', '4Pw+4PE44PAW4PsD4PAI', 'WOxcTerVsq', 'gCkBqCkJmG', 'A8krWO3cGq8', 'WPJcLCoMbIW', 'Yl/lR8kT4BwK4Bw3', 'YAliPSkA4Bs74BEV', 'WOajW6PnsW', 'gCkRrq', 'ySkYW54caG', 'dc7cSCkzW54', 'WPZcK8oq4PwU8lY2VUkdIEkyIU+7GW', 'WPtcICoxwCoi', 'WRlcUCk4Dgm', 'eX1kW4JdGa', 'AaddN8kzbq', 'WOZWP5oL8kc+JokcQpc8IPPef2u', 'r8khamkQoa', 'WO5bac9D', 'mCoihCk24Psy', 'bmk8tmo0eW', 'DSk2W45/dG', 'WOaIW64', 'WQZcRCkMBY0', 'cSk2WRRcU0i', 'sImcq8kE', 'bCk6hmkHsW', 'W5RWMk2REG', '4PAL4PEZ4PEx4PA+4PwI', 'WQpcSSkOwwC', 'W7ilzmkwjG', 'WPNdSCovs8kY', 'BmkDW5/dGH8', '8kkiRpgmQk7WQ4QX8jUkJZe', 'WR3lM+g0GXNHT4i', 'WR0ZyrNcQq', 'W5qfWQfFcq', 'WO8sxdFdNG', 'BmkYhSoKWP4', 'mwZdU8o7AW', '8y6aG8k3bSkzjq', 'h8kZhCk/mq', 'W7pdUwjyWQO', 'WQDUnHHx', 'WRBcTSk5', 'WPFcJLFdSCkr', 'WPWIW780WP0', 'ACkhW4tdMe4', 'DSkYtCo4W5a', 'FXJdVr3cNq', '4BELY5plV8MT4Bse', 'i0pdKSkybW', 'WPRcVSkVrMm', 'wmkzumoXfa', 'iokvL+kwGEkwRUkuUG', 'W5nkCtnU', 'cqeQW5zL', 'aCkGgSkViW', 'WR/cQCk/qeG', 'WOq9W4HMCW', 'W7RdTSktjCoH', 'b8kpt8kHpG', 'xmkRW58xna', 'latcV8k1W7q', 'WOyQW78', 'WRFcUCo3zCkq', 'WOXjnsaB', 'cHb5W4aH', 'W5BcSmkqomoy', 'q3BdMd3cRa', 'thzgfW', 'DWXgoa', 'WPeSW5qxWRi', 'ofj8mYu', 'tfRcTa', 'CryccCox', 'FNFdLmkcgq', 'WPTQCYm', 'WOObmW', 'YkVkJEg2J8kV4Bsd', 'dSkzW4rPW4C', 'WQi/g8kZsq', 'BKJdR8oAEW', 'BfJILBNILzlILzy', 'xrFILQRILl7ILzK', 'WPhcGSox', 'WQm4ygFcGW', 'tXrBd8k9', 'WOqrvNFcOW', 'sd8fuSkn', 'qSk8W7VdLwG', '8lAcM+kdMVcJGjy', 'hbq7WO5c', 'smkceW', 'W5uuW6Wnba', 'W7ipWQ0khG', 'W4ieW44qhq', 'WP8ugCkfvq', 'EmkhtCoTea', 'WOiUW79IzW', 'W4lcMSkXca', 'WRpcTmkYqum', 'd8knW59PW4C', 'W4VcM8kdDSkj', 'WOlcOYBdLu0', 'ECoGbcddQW', 'A1LrECoz', 'ECkFW4G', 'W7NdUx1j', 'aCoCca3dOq', 'xSoPWPW', 'W5xdQmoO', 'WO/IL7hXIPAO4OkG4PMB77IiumoK', 'zuRcQSoGW7G', 'W5ZcJuy', 'tKZcUq', 'bGSZW55G', 'cXbbWO/dLG', 'W67cGLVcQSkA', 'WQeTW6qTWO4', 'WPqzgmkoAW', 'xSkVDmoflq', 'zCkPW4uthG', 'rur+WPmH', 'A8kxW4pdN2G', 'WQxcHCkquHK', 'sSosW67dTgG', 'WQdcPSo1EmkL', 'amkBnCkJpq', 'Dd3cQG', 'WOVdNCo4aSoi', 'WP/dU8krCeW', 'WRJdNSoiDCkB', 'CSkHB8oGW4q', 'WQu4W4NdQta', 'W7VdK2f5WPq', 'nwOPWQxcVW', 'WOPpfq', 'W6FcPmk4hCoU', 'iIX4WQVdHG', 'y1VdPvJcNW', 'ffpdP0OX', 'W6LAAJ9v', 'WOlcJKzDAa', 'oSkYWQlcK0C', 'WRRcUSkYuu4', 'y8o4sSkWwa', 'WPyAgCkvwa', 'eSo4WOFWSAgBeW', 'xCo1WO7cKrC', 'uCoJWOVcNt4', 'cHrgWOy', 'aK8fW4G', 'EeBdKSk6W7G', '4PE74PAP4PA64PsG4PEO', 'vSkxu8o4vq', '4PAV4PA34Pwf4Pwi4Psj', 'qh3dNXNcHa', 't3FdKSkAmG', 'W4RcHSkLuCoz', 'YzBjGGlHTk7HTj0', 'wJGExSkr', 'WQ1MpCotva', 'WRtcR8o8qw0', 'rfdcQCkLWRS', '4PEe4PE64PAC4PEA4PEE', 'mG3cJSk1', 'Emk2W5bVrW', 'sCoKua', 'WPmIW65PDq', 'WRuEW44', 'WQpcUGBdShK', 'WQGPW7KQWRa', '4PE74Pw54PE94PwF44gC', 'evT9', 'kGzgo8o7', 'feDGW53dHq', 'WQSUW6/dOHS', 'zmk5W54', 'W7aGjNPX', 'lSkog8oTnq', 'eKO4W5jI', 'WQDZfW4S', 'W7BdV2nqWQu', 'uLldMmkghq', 'caDw', 'WRHksavU', 'btZcU8k5W7W', 'Dmk7sCo9nG', 'WP0DrZNdRa', 'W5tcHLZcQW', '4Psx4PEo4PEGWPWg', 'v17cUCk0W74', 'WRK3W5ZdMs8', 'yH9XFw8', 'ASkIW49VsW', 'e1DrcCkv', 'W5LlaNtcUa', 'dCkmW4j0W4W', 'j/cxK5xXGQ6n4OcS8lg6OI7cJSoO', 'hCkGfCkypa', 'kYnLbtO', 'bCk8sa', 'ouBdOSo9vW', 'C8kMkCoKqG', 'W5tcGLZcUSkA', 'CSkivSouW7W', 'WPyHWQTHzq', 'zKJdPG', 'W5hdLSkucmop', 'WO/cTSkLa8oc', 'pXD6nHS', 'DXFIL4xWKlsS77QN4Ocu4PUf77IEW4q', 'EwddQSoJya', 'yfCsqmoh', 'WQxcLhf2wW', '4PA3cSk38ykWMEkaRpcXSPLn', 'ySk8W54', 'W4a0jG', 'amk0zCo9nG', 'WR/cLgz7Eq', 'W6RdVSk9gSok', 'rSkvW6SxoW', '8lE1So+7Tq', 'm8kFW5v1W7O', 'y8kYW4m', '44cab+kuIEkuVokwQa', 'amo1s8kWgq', 'i2BWPjMW8yc9JokcSokyKo+5U8kiWQa', 'tCkNW5WBdq', 'CZ1od8kf', 'CmkxW4ZdN0a', 'W7JdSwbzWOG', 'g8ocWPO9', 'oSkwE8ou', '8k2iO/c+QQhWNRUs8k65QpcNU4W', 'b8kmcSk6pG', 'wCkdW6rEzq', 'oCoSgq', 'WOZcQINdGYW', 'efX9W7RdRa', 'w8oeWPhcRqS', 'W7iVBa/cQa', 'W5ZcRuxcTCoY', 'W6aPWPC', 'WOLQka', 'mVgdS4xWSB+z4Oc+8kMzVhZcHtS', 'yeldMmke', 'esa9W4n4', 'qd8y', 'pCk4WQJcP0y', 'W5BcPmk+bCof', 'W4VcPSkecCo6', 'yafQoCk5', 'e0Lra8oJ', 'W7XUut1f', 'W7pdTN52WPu', '4PwkW7FdO8oq4PsZ', 'wI9mdCov', 'B8kXoG', 'r8oebGNdTG', 'W6KPWONcTCoa', '8j24JmkniGtdIG', 'z8kpW4OMkW', 'h/c8KO3XHz6d4Oo98kslKxvSEG', 'W7zZp8ohEq', '4Pwb4Psn4PAp4PAp4Pso', '4PEDxYxXHzok4Ool8lAcTHO', 'W6K5Bqu', 'W5BdMSkvaG', 'W4hcQc/dHMi', 'lCkSsSo4W5a', 'e8kdwSokgq', 'WPFcJGxdQf4', 'jwNdJmoGyW', 'rf7cUCkLW7W', 'zvxdUa', 'W7vLrG', 'aGzCWONdHq', 'WOChgW', 'AmkJqa', 'zIbHpci', 'qglcT8oC4Psb', 'F0mNzwBdHmk7W5tcJCoYySklW4C', 'chZdHmogqW', 'CmkYW5K', 'WRtdVSo0zCk6', 'W5b9WRi2meZdMSkxWPRdSmkt', 'WRvNnrWo', 'W5BcLSk2a8oo', '8lgcI+kaV/giSie', '4BEB4BAP4BAWYyRjQa', 'W4OPWO7dTSoq', 'uSoYvmkOua', 'j3FdGCo7EW', 'wSkMtSokiG', 'WPXXvdXj', 'EYFcRW', '8lA3HE+6GLfEWOS', 'bSk4smoVba', 'W7HmhSkwwW', '4PAD4PwB4Pse4PAL4Psv', 'rmoYv8kNsW', 'tSoAea', 'dCkBWPaNWOG', 'W6/dGCkUaCof', 'WRFWQAgS8kwSPUkbMpcRURldQmkyWRS', 'aqrJjbC', 'WOJdTSkihSoI', 'WPy7W7PnCq', 'WPJcTCo8ENC', 'W6BcNmkYomoo', 'BarDjCk1', 'W4mrvIpdVa', 'W6pdRvTABW', 'mmk6dCoRWO8', 'WRBdRmkZmq', '4PA5W6WZWP3cGa', 'WRJcO0DhoG', 'aWKErCkq', 'D8k7W7/dVwW', 'W5BcKuS', '44clbEkvHUkwK+kwUq', 'efZcQvOv', 'WRCSW7tdJtO', '4PEA4Pwf4Pwr4PwI44c4', 'qfFcTNjs', 'BNBdLmoOCW', 'WPXUlCoyya', 'C8kNtCoJW5S', 'a8k3umoYdW', 'oSk1WPNcVLO', 'o8k7Dmo/cG', 'wcqNw8oK', 'WPpXH6gA8yITHUkcN/cYQ7ddNmocW6m', 'umkFW5vPW5e', 'WRtcTmkXwgm', 'WPOjW4VdSrS', 'W44fW78qgW', 'W4SkW7L1BW', 'ESkqv8o/W5y', 'CSkNW5rYqq', 'W5RcGKBcU8oD', 'W5xcHSkKgq', 'W6yPWOm', 'de1XW74', 'yVgkOQVXG4+p4Ogd8joPLmkTimko', 'B8kGlmoSxG', 'WPxcOJpdI2K', 'W5naCJ5I', 'tWelvCkv', 'ibD6nsi', 'vc5rFSo0', 'W53dQfXjWQO', '4Psd4PEg4Ps54PAx4PA+', 'W5roydO', 'leZdPHhcJq', 'W4XvxEkxO/czT4tIG4JIMyBVUBe', 'iCo9WOa', 'CCk7W6BdS1e', 'WOtcMmovxSkq', 'B8oXtCkLDa', 'nLtcLuSx', 'uSolsvZcRG', 't8kAW4JdIua', 'W4hdNmkxaCoS', 'W5XeDa', 'n8kts8o2ka', 'WPdcQCkZqhi', 'sH8+ESkL', '4PEEtCkAWQJILzC', 'FrivcCob', 'eSk8t8o4', 'WOSfeG', 'ndXGWQBcIa', 'WP/cO8kRCc0', 'WRvGnmosqa', 'uCoUetBdOW', 'veVcV8kPW7u', 'WPupW7hdIr0', 'W6yFWOpcUmor', 'evSPW6pdRa', 'WOVcRCkMBW0', 'WOlcQJpdGMS', 'a8kQwq', 'WRukEhvD', '4BsFYyVlLmMX4BsQ', 'W4/dLSkugq', 'cvlcS181', 'W6uPWOJcPCks', 'Br4frCoq', 'DXmccCoy', 'f8kGy8oVba', 'svVcVG', 'uay6ymo4', 'yCoTz8kPva', 'xNhdQmozwa', 'W5W/CaxcTq', 'WRmypSk4FW', 'WRGiW4NdQW', 'WOJdNCku', 'CCkYgCo0W5e', 'fWeTW4DG', '4PwwqSo3W5W', 'WPyqbmkcAW', 'waGPWQRcVW', 'nY3cJSktW70', 'W73dKCoIfsG', 'WP13ycK', 'lKzzW5ZdKa', 'WQ3cHaddQa', 'DbyAtmkv', 'W43cLSk2aCo4', 'YPJkQSoU4Bsa4Bs2', 'WR7cT8o3DCkD', 'W5JdKub5WPC', 'CSo9W6m', 'ECkJESk8oa', 'BfJdRG', 'W6Dw8joOIVc9NQlIGl/IMOVVUObDka', 'W4RcNCkYfCoN', 'g8oJfSk7fG', 'A8kgW5/dKKS', 'WP4zqd7dOa', 'W5jF4PsA4PEH4Psz', 'oX7cUmkzdW', 'zmosDmk2xG', 'W6xdSxPjWQe', 'eCoPWOaX4PsS', 'W7RdONC', 'Fu3dOqZcMW', 'e8k6smk7aa', 'WQ4iWPBcQc4', 'gfpcSG', 'W5NdMwbNWOu', 'W6GOyq', 'W6hcNCkAimo/', 'cLePWRdcTG', 'mSkWWQdcLwC', 'zqLan8kN', 'Bv/WLkQV8lESVEkcQokzJ++4TxhcLq', 'W5jv4Pw34PEH4Psz', 'DCktW4pdN2K', 'WRlcSCorC8kv', '4BwmuUg0MEg1L3y', 'BCkbW6zpDa', 'BCk4W5KIbq', 'fXRcHCk/W7i', 's8kdtSo0', 'W5hcSe1YWOK', 'W5WiuHJcIW', 'xokxMXZcU0e', 'e8kRsmo2ba', 'mJD6WO/dQq', 'qvBcOCkLW7u', 'uIi3WQRcTq', 'AmkKW4L0qa', 'WRDroKRdSa', 'WRVcI8kQwxi', 'sConcaldOq', '8ysaLokaVVcSGli', 'WQxcVSkSwxS', 'WPSzw8kdEa', 'DLG0', 'WQfsht4n', 'WRJcS8oG', '4Psk4PEDWOD8', 'W5NdNmkZ8jUcR8k4', '4Psy4PEY4PAT4PA74PsL', 'C0dcVNDi', 'yaPhiSkv', 'W73cU8o8F8kK', 'WPVcH8odvmk4', 'WRtcUSkOugu', 'sCkbyCoEW6S', 'dWfBWPJdKq', 'iXRdNCk0W74', 'WOaDxsNcQq', '4PwT4Pw84PwarSkh', 'l8oKEW', 'A8kGl8opqq', 'WPz2BrfK', 'WRu9W6qM', 'WOihW4eBWO0', 'DbbApG', 'WObpht8y', 'x8kLW7NdVfW', 'jq3cK8kYW5W', 'WPHYDmobza', 'ipcwO6NWTk+g4OcG8kMOUhJdLSoR', 'WOHOCdX7', 'W7dcNSkNm8oo', '8jURG/c1Ml4o8lQ6SpctQka', 'A8kgWP8', 'yf3dOb/cIG', 'zeJdPtlcUG', 'yLFdPclcUG', 'WQy9W7O9WOG', 'W4/cHKdcRCot', 'EqFdR8obtG', 'WQGPW7KQW5W', 'WRnyoCo+yW', 'cLlcTvv5', 'kdqhW511', 'vpgbK5JWMj2E4Ok48yAlGMDuEG', 'WQVcQffwAa', '4PsC4Psz4PsJo8oB', 'W4zzht4p', 'f1XHW6/dRq', 'WQxcVSkSwNa', 'nbbbWOZcGG', 'WQC4EZ/dMG', 'y8kUW5K', 'FbKeb8kB', 'WR3cV1SuoW', 'xCkwhCobDq', 'W7iaW5/dPIi', 'FxpdVH3cRq', 'ke5tW4xdHG', 'WQO5e3pcQq', 'WQLPnfNdRdO+rmo4WQFcVW', 'yLldHa', 'yKpdLmk/iG', 'xSk2cmomAa', 'W48GW79Vzq', 'WR0dWPRdPYa', 'hvPkW6VdRa', 'omkoWOFcVLa', 'kbzxptS', 'WRLvmmoKrW', 'k/cwGQBWMB+n4Ok+8l+zLxzgWPu', 'WOaqfSkfxW', 'BKhdICktfG', 'i8kuWRdcM0q', 'WPalm3KN', 'WOdcU8ojySkZ', 'WOuQW7HK', 'Bbn6CJK', 'oSkJlmkKha', 'eEkwHUkuVEkwNokvTq', 'ALFdVfJcNW', 'eeldI8o7za', '4Psz4Pw34PwX4PEM4Pw6', 'W5vzmZHP', 'W7iUjalcUW', 'ACk8W5KtcW', 'W5hcM8kYuCop', 'W4VILklILOVILiFILia', 'ywZdOCkVyq', 'W53cJfZcQSo7', 'vdyIESo0', 'cmkfc8k+DW', 'wc8szCou', 'iMZdU8oQAq', 'WPqmW7XPCW', 'iWr4pqm', 'sLRdO/gpKB0', 'z8ouWRFcUXO', 'nuFcG0Kn', 'WPFdHSoD', 'WRRcHhbJEq', 'W4ipW6mlmq', 'WQlcReXroG', 'jVcrK6BWOyYc4Oog8lAzG1hdQuy', 'W7NdV2K', 'bmkkaCkPDW', 'WOSAW4nZsG', 'wSo4WO3cJa0', 'baK7', 'DKuiD8o+', 'W6iREG', 'WOldM8ojtmkU', '4PEeW5lcUIpcGG', 'cZnFWORdKG', 'WR02D0ddUG', 'bSkFsmk+DW', 'rSoPWOe', 'DrGwrG', 'seJdQSk6cW', 'daG7W6b1', 'W5rWDJ0', 'WOlcO8kMFWa', 't8oLxq', '44c/WQZILA3ILAhIL7C', 'kCobWP7cJu55dSkgtCky', 'ktf8W4lcQa', 'm+kuH+kvSEkuQEkwTq', 'vmk3rSkRtq', 'WQKtyJNdVa', 'WRyTW7KQWRe', 'CmkWW4JdSwW', 'DfhcQNrg', 'WPNdGZJdOmkA', 'WOSPW7KwWRm', 'W7NdUHSnD8oxmSktWOhcQq', 'W48zCtJcLG', 'oSo3W6ldKrK', 'WRJcQmkfyXO', 'WQ5ji8ogAW', '44k6c+kwM+kxKEkwJW', 'luzOW6JdSW', 'W6BdTwbzWOK', 'cSosvSk2vG', 'C8k4W5nVqa', 'W7r4xcfa', 'W59zAG', 'WO9tuIio', 'WQdcN8k6qfG', 'W6KJWPtcOSoZ', 'W4SfW6a', 'WRxcGWldTsW', 'WQZcQaNdVuS', 'frbFWOtdMW', 'BsmRuSkv', 'g8kog8k/pG', 'gvlcSfa1', 'W7JcMCkjCIi', 'dCkDW555W68', 'WOVcT8kHuqO', 'WPBcL8oTr8kh', '4PAm4PE34PA74PEe4Pwg', 'y8oYrSkDtW', 'W4hdH8kBm8o4', 'Dmk5W5n+aa', 'eCkOW6jNW4O', 'cau3W50', '4BE44Bsb4BwqY5ZkJa', 't2tdH8oLua', 'W686AG7cTq', 'WQXk8lYiUpcJJz7IGOdIMzJVUiGTEW', '4PEH4Pwp4PAl4PEi4PEp', 'AfFdOaZcVW', 'WO4txtVdRa', 'oqa0mdK', 'jSo+FG', 'WQVcQwfADW', 's8kVW5uFdW', 'g8kpWOxcKvu', 'f8klW4q', '4PsN4Ps/4PEn4PEa4PAB', 'WQxcUSkYuw0', 'AXflp8k7', '4Bw8YQFkKog2JCIF', 'oWRcKCkvW4i', 'W4Drranv', 'qNFdS8kZiW', 'BSkNumo5', 'd8oBcG', 'W4VXJAcV8lA/SokdT/geM6OzW7pdIG', 'WPJcJc7dOeq', 'e1NdQrb3', 'W53cH3hcSCox', 'WPuahd4q', 'AL7cPmkUWRS', 'yvNdObZcSG', 'lCkKWRdcKvq', 'WO45xspdIa', 'W7FdU+kxNokuTEkuGG', 'WR/cTCojwmkR', 'vKvKh8kh', 'c8o6haJdSa', 'f0q4W4fU', 'WP3cMSkVw24', 'DKvRoCkG', 'WO4DrYJdRG', 'v8kWDmoOpG', 'W54+WQlcTmoO', 'wSoTWOhdIrW', 'aqSWW4Da', 'v2/cSLaT', 'WQKTW7KPWOG', 'jq3cIq', 'WQ4wW4bKAq', 'WRlcU8o8', 'WPpcOd3dJ2K', 'Ef3dTGW', '4PwCcNTbDW', 'W6aHWPVcUmow', 'xSoyWPa9WOi', 'W4VdL8k1jSoQ', '4Pw24PEz4Ps84Pwu4PAU', 'zvtdQWVdKa', 'u1dcPLC3', 'srjDWOFdLW', 'AvhcUMTc', 'sCkqW6aJba', 'lCkRxmo5W4S', 'rCo5uCoQfW', 'EXGvua', 'WQBcQw1/Fq', 'qCoictBdRq', 'uCkfW77dL0W', 'eCkNhCo9CMqcWPPavq', 'ng1yW6VdPq', 'WQNcHwbmya', 'fmk2wmoI', '4Bwwsog3Sog3K8kX', 'lXL1ntm', 'BxJcLCkjW44', 'kGLgmCk7', 'WQBcKSkcAYK', 'WPBdI8owy8k7', 'zWrDm8kZ', 'h8kvW5u', 'qIKv', 'frr+W5fU', 'W5ilCokxM+kuJa', 'W4ZWL5cA8k2+GEkaUpcFUQRdJSkYWRq', 'EmoJWQVcGt4', 'bGBcRLlILPm', 'B2/dO8oGBq', 'owjaW5JdNG', 'WQBcPCo8', 'WRTUusn+', 'Y7VHTBvCW4JiUW', 'BrGKwCof', 'nXqErmkA', 'WQJdMSo+zSkQ', 'WOpcRJxdLcW', 'B1/dQmoA', 'x05+', 'WPzbbJ8y', 'dSkkW5uWW4K', 'hYXKWQxdSG', 'm/cIOjNWLz2j4OgJ8lwRGXX8mW', 'ECk0W4iyqW', 'yLW7pJ8', 'WOuBeSktoq', 'W57dSSo4pG', 'WR/cRfzbFW', 'h8kQsa', 'BetcOh8r', 'W4O1WPhcJ8of', 'vCk+W4npBa', 'W7hdTx1E', 'yvNdPXy', 'juxdHmomwW', 'WQXUfSozEW', 'Caqf', 'WPNcP8oODsm', 'cbrl', 's8kuuSoyW5e', 'AmkwWQ3cLbm', 'uSkMW67dOLu', 'mN7dPSoGya', 'eKNdOe15', 'cSogga', 'nHFcOrNcJG', 'C8kZsSo/', 'lLJcQvP5', 'W5hcHLpcUSoF', 'mrRcKSkJW6e', 'ySkOxCk3W5e', 'vITFpCk7', 'B8kGp8o3ra', 'WPiSWQS9kG', 'rCo2v8kHgq', 'W4tdMSkwcCoJ', 'DKJIL73IL5BILPe', '4PwG4PEN4PEL4PwZ44cs', '4Bw9hEg3IUg0U3K', 'E1NdPWZdNG', 'vGXeeSk4', 'DexcUSkIW4G', '8jAKRSoTWPpdVLC', 'WR7cQmkO', 'WRhcOSklCMS', 'mZidw8oA', 'WPpcTmkRw24', 'ACk6mSoSxG', 'rSkTEmo+W4W', 'n1VcPM4Q', 'W6mgW7G4jG', 'WOvbbIGv', 'W7mVzq3cVW', 'WOpdNCkfkSkT', 'W4/dOUkxIokuM+kvJa', 'WR0zus3dUG', 'W4OpW6O', '8jEzHGtcKffJ', 'W6GRyaVcRG', 'WR/cISkYqxG', '4PEp4PEn4PsI4PE64PEv', 'zuRcOg9W', 'zt4GESkE', 'FmkwW7zHBW', 'nVgkKlBWVP+m4Ok58lUOP8kjkCke', 'ifbUW6ZdKG', 'WPbiEZHP', 'WPrfeYGj', 'tSkdb8osvW', 'tmoWC8k9va', 'WO7cUt4', 'WOqHWRCnWPq', 'DWyjBmo+', 't3FdGZxcVW', 'W4xdP/cxUBlWMA2Q4Ogt4PQa77ULWQLX', 'W5P9At1r', 'AuxdJSkv', 'WRVcT8koCs0', 'DmkSgCo2CW', 'y8k2W41RqG', 'oSk2w8o0qq', 'W5CADWtcTG', 'WRKuwJ7cQq', 'BYe3FCoV', 'W6TfWQffDq', 'WPvSCtfo', 'mHumW4fn', 'WOKQWPRdIXG', 'W6SLWPBcS8oC', '4BEMaog1V+g1JL0', '4BwNY6Op4BESYk0', 'oXNcKmkvW7S', 'A07dR8kouG', 'nWBdNCk5W6y', 'WOBcPdxdNG', 'dX3dPH9Z', 'lmkYWRdcKW', 'D8kJwmo6WP4', 'W5dcGCo3bCoi', 'wCkUW6KWlG', 'tSoSgG/dHW', 'Bmk0qa', 'WOhcUmkOzgW', 'WOewv8oBmW', 'Eba5s8oX', 'fCoyeSoSfa', 'yehcTZTt', 'emkEbCkvja', 'W4ZcICoqta', 'FHJcR1NdLa', 'f8k1vCoTba', 'w8oOW4VdH1e', 'lMldRCoNFa', 'WQVcOKXbwW', 'WQHruWaC', 'W6pcK8k0bCoU', 'rquWWPnU', 'D8kdb8oxvG', 'WR45CH/dIG', 'DvBcOmkeW7C', 'DZFdRFcqSkFcIa', 'uCoDgG4', 'WQn7xqxcRW', 'W7pdIgbTWP0', 'WOWUW6vJia', '4Ps74PE24PEY4Pwt4PEp', 'sLlcRmkUW78', 'kdjGW4JdOq', 'qCkVW6z+rq', 'Fu7dJCkDaG', 'W7JcG8olxSk+', 'W4/cN8kEh8o+', 'kxNdU8o/Fq', 'B8kXmmoHFq', 'cauWW5Dn', '4BE54BsbYldHTQ0S', '4BsX4BAd4BEO4BEK4Bw/', 'WP0RW7hdHq0', 'WOySEMe', 'tMZdIJ3cTq', '4PAj4PAT4Pwg4PAt4PA5', 'AGbBDSk6', 'AXGIySkT', 'W4hcRtldI2a', 'W7ZdVqC', 'AvVdULJcKW', '4PwBW6fnWPKS', 'WQmzdSkrDq', 'BvCer8or', 'g8kodSkUiW', 'W7JILihILzRILRBILiW', 'umk2W4/dIq', 'W4jezJDJ', 'WPOsvJ/cQq', 'WRqrp8klsG', 'W4RcHSo3gCom', 'W6NdVmk5', 'xSkftSo9eG', '4BsEW7FiUCQudG', '44gcW7FILyVILBJILRS', '4Psd4PEg4Ps5WR3cTa', 'W4FINlb9iSkP', 'uVcvKAhWVA2J4OoF8lM7IhpcGCoO', 'cg5XW5RdUa', 'yt08E8o6', 'd0NcQLS3', 'WQa7W6qVWPS', 'W5vTycT/', 'nh3dU8oMyW', 'WQCxoCkuCG', 'rYHmw8kw', '4BwYYR3HT6BHTl7lMq', 'W5VdI8ovvmoi', 'iSoDWOldJe0', 'm3NcLbrt', 'W606Cb7cVW', 'W64TWO7cS8ov', 'lCoOfSoKW5S', 'jh7dVmoMyq', 'w1ldGWdcQa', 'W68+zqNcRG', 'aXfSWOFdJW', 'g8k4uSo/lq', 'FIRcTW', 'Bames8oq', 'aCkc4PwRrSkK', 'WP53Dsbq', 'WQaDwcJdUW', 'lUkvP/cvTO/IG5NIMklVUOBcKSkB', 'W6TL8l2PGpcFJ7RIGQxIMRRVU5ldV8kV', 'BmkBW5NdL0a', 'sCkHW6tdJ3a', 'zuhcJxrC', 'WOhcPSklxaa', 'vhRdUZFcMG', 'WQFcQenrFW', 'BqLm', 'kJbHWR0', 'WQffbMSF', 'W63cJblcUCoF', 'cCk1W5HWW48', 'baG3W4vK', 'mgtdP3Ww', 'WOCPArNdSW', 'WOSvxYJdPW', 'sCktxmo4eq', 'F8kZW6n0qW', 'W7HF8kkQPVczN6BIG4JIMyBVUBhdM8kc', 'WOJcQfyvEa', 'cCkDEW', '8yMxGU+5Lq', 'tsmcq8k+', 'vSktW4pdO2O', 'BLlcOa', 'AeRcOdTx', 'F8k8p8oX', 'AelcJgHd', 'W57dH39CWPe', 'cHrbWOZdRG', 'WQyPW6mRWPS', 'e2zm', 'fWeUW59G', 'kSkxWPb/W44', 'W4ejW6Sg', 'cqeWW5r1', 'g8k4uSo/qq', 'CLlcVCkcW7G', 'W5xcH8kvumkj', 'Br8urW', 'WRX8W4RdSW', 'WPD3qbnK', 'WOXMrZLf', 'WOBcLCkqCXG', 'W5afW78mgq', '4Pwb4Psn4PAp4Pwa4PEb', 'tmoZha', 'EIKnrCkC', '4Psk4PsN4PAb4PAU4Ps6', '8yoRL/cZUQhXH5UXW5BJGP4', 'CCk1mmoHFa', 'WP0PW7OJWRy', 'nh7dQG', 'ssjWe8k2', 'F13dObZcSW', 'lXnGnZe', 'W5hcOvFcLmoZ', 'pgxcPhi4', 'W4BdIuP0WOm', 'WO7cRSkMEeW', 'W6BcSgDoW6q', 'W4hcLSkKeG', 'WQ0TWPtdTSoD', 'v/cqGQ/WKk6L4OkL8jMiH1lcI8oX', 'WONcVXFdG0e', 'WOutqdNdPW', 'WQuOW5ZdJt4', 'WOH7zZni', 'qGiP', '4Pww4PwO4PE94PEwWRS', 'lSoNWOu', 'W6xdQpgnKRyiW74', '4Pwm4PwY4Psu4Pws4Pww', 'DXfBp8k6', 'WQdcUvevAa', 'xSo8nW', 'WOmAwgS', 'zuRdRmopva', 'WOLWiGyR', 'ucGoB8k5', '4Bsb4BAO4BwJYiZiHa', 'lmkLoG', 'aCk+W5xdMKNcNWeNzvn+', 'WRxdS29tW6q', 'W50PWQ3cKSoH', 'Y4/HTA/jVEQFP8kX', 'WPZcOSoXDmkJ', 'EbRcJSkNW6q', 'WOlcJgXXsq', 'W7FcSSkMqg8', 'W4q+lokvKVcqPyNIGzxIMz7VUOS', 'Cmk7oCoQ', 'zqfqDSk2', 'FrmYrSoy', 'WORcUSkHBW', 'yNldHmkSbW', 'WP7dH8op', 'WOFdRw9Wva', 'CaXDoSkX', 'pK8j', 'zUkvSpcAPOVIGzVIMRdVUOBcJCkv', '4PApWQBdR8oJqq', 'cvtcS1i8', 'hSkLhmkGbG', 'WOqZp8kdvW', 'W4/dNM1PWQK', 'W5ToAG', 'ACk0W6aNpG', 'WO4jW45XEa', 'WPSfFtxdIW', 'sCklW73dQKm', 'DWpdPXqj', 'smktwq', 'cK1OW67dMq', 'u8oAWRhcSbq', 'nCkjW4jeW4S', 'wmkbWOpdJe0', 'WQVcJW/dLv8', 'W6pdSCkPcSoE', 'W5imsI/cIa', 'e8kRt8oYdG', 'W5pcLKVcISox', '4BwJY6NjM8Qc4BAM', 'WR3dO0HgDq', 'ESk6W4u', 'hSkAWRlcIwy', 'AmktW5NdJ0a', 'W5JdUKrvWP0', 'WOzvmCktDG', 'E8oiWRRcVsy', 'j8k6WQ7cKv0', '4PAn4Pwm4PE64PEw4PAY', 'W5nFCGzY', 'WPjjbICy', 'WOldOmk/lCoF', 'b8kxESowkq', 'WP0cgCkeAW', 'W5xdG8ojt8kg', 'faFcICo2W6i', 'WQGPW5NdUc4', '4PwL4PwK4PwE4PAZ4Psb', 'tSogra', 'vCkrrmoOqW', 'W69OWR84', 'FSoTWOO7', 'BSkJva', 'e13WO4keW7el', 'W4qlFd8N', 'xKJcOConuG', 'W748WQ/cUmof', 'wmoUWONcQIW', 'W5dcK8oBtCkN', 'WOuGW7XP', 'zSk4W4mrga', 'WPNdNXlcH8o1', 'vmk9W4jVW40', 'oWNcK8kYWRe', 'lN/dTG', '4Psn4PsG4PA94Ps54PA+', 'WR49W653Ba', 'kh3dU8oMyq', 'WR5OnSotyG', 'gmk9hmo3ca', 'W5BdN0nWWOu', 'W4ddN8kvd8oM', 'BZGLrCo8', 'W5fbEITM', 'hfSPW4VdSq', 'YBdiHWD4W7O', 'dmolk8kSlG', 'W67cHCkTmSoI', 'FvpdLHhcQW', 'W68+DX7cUW', '4Pwn4PEa4PsF4PEg44o3', 'eEkxTpcqTyxIGBJIMB3VUPpcQtC', 'W5errI5e', 'x8kzu8oOna', '4PsC4PEu4PwE4PAf4PsW', 'r8kSWQFcHGS', 'WPzvasm', 'W4SdWRxcGSo3', 'B1FdOa7cMW', 'b17cOCkSWRS', 'tGCbySki', '8kslPFcQU4FWNyU58ygPSFcLQBi', 'mmo3WO0', 'WPH5BZ1S', 'WQtcR8k9r3y', 'W58qW704hG', 'WRGiW4NdQYu', 'fvJcTu15', 'FG7dLmkzxG', 'a37dLCobrG', '4BskW73HTQdHTBnm', 'W7ZdO3O', 'WQ5nW4JdRsy', 'se3cTa', 'W6K5vrZcTq', 'xmoIWOi', 'AHiFtCo4', 'WOTbhc9D', 'cmkgcG', 'W7e+AG3cRG', 'q2/dGd3cRa', 'A1VdQSo9Fq', 'WPuzW4/dOIu', 'WO7cVpcUO58MW5O', 'WP8Klha', 'WQqMW7qRWO8', 'lmkClSkBlG', 'WOyMW61+', 'W5ipW4Swca', 'AryfxCoq', 'WQJcV01aAG', 'rXrbWOZcGG', 'WQn0nciZ', 'F8kgW7vDzW', 'EuxdMCow', 'WPRcSCkT', 'tmoYsSkJtq', 'jb1NjJG', 'BKJdKmkthW', 'heDNW77dNG', 'i3jmhCkV', 'Amk7c8o1qa', 'W7tcI8kBgmoJ', 'rLhcQCkZ', 'WPr6jJXv', 'WRiQW5a8WQ8', 'W43cHKRcQG', 'aCoChq', '4BsHYlDj4BwIYiS', 'WRzhtbv/', 'wIKcu8kA', 'b8oebCk+oa', 'WRZcOCo3ySoX', 'WPO/zIFdHq', '4PsG4PAx4PsK4PEe4Ps5', 'omk+WQ3cLW', 'luZcSv8d', 'vq5Ahmko', 'WQaXe8kwEW', 'F0xdNmkvbq', 'WRddImkx', 'DarDiSkX', 'WOHXxcvK', 'AKdcTW', 'fCkfW4xdIv8', 'Amk2d8oZxW', 'WPrbasnD', 'W5FcNSoTw8kn', 'WQSVESoIza', 'uCkADmoYjG', 'W51kyW', 'lmk4WQ3cHhi', 'rSo+smkHvW', 'WP/cT8k7CW', 'W4NdLSkd', 'WPKAdSkeEW', 'leJdOHNcHW', 'b8kpqCoJEq', 'WQ8oWPRcSN0', 'W7ldTs5CWQO', 'WPpcImo2pZW', 'imkJWRFcGea', 'WOJdISkAgSoc', 'rSksW6O5', 'W5ufW6mBpq', 'W4SwDrpcJW', 'W4ZcJvdcSSov', 'WRNcV8oYgYW', 'hCkzW4r4W4u', 'WO8RWQuPlG', 'WRdcSSk6ta', 'WRj1nWmS', 'WRDMW5O', '4BExW7VHT5hHTlaI', 'BSkNv8oZWP4', 'eSk9F8o0da', 'WOuGW6vZqq', 'WReFW4vnDa', 'W7FcUSkYfw0', 'W5mtW6G', 'xt0cxmod', 'iX7cUSkpW5W', 'W4tcVCkNkCoz', 'WPJcJ8kuCfa', 'W5P7AWTd', '4Pw2W7m2', 'dXboWOZdHW', 'EZyxAmo8', 'WPbrpqK+', 'fGrbWQZdOW', 'qKNcOKyT', 'WPjnkaK5', 'ECkwWQZcIuqLya', 'gSk8uSo8fq', 'bmkyWOtcVXm', 'WRlcQCkVxg0', 'e8k6smk7da', 'W5XoFt5Z', 'ngddRCoQFa', 's13dULJcSW', 'WRZcRGipma', 'rJHlrmoF', 'AaiExCoq', 'W47dNmoA', 'WPi/W6DUDa', 'WPCqgCobFW', 'WRaudSkQAa', 'W4GoW6Gnua', 'W6WIWO7cICoh', 'omk+W6ldVgO', 'W4bkzY1I', 'aq0SW5zI', 'emkAufFcTmoeAmkkjv7cUG', 'W7NdV2LsWQK', 'iwlcNfrK', 'WPz/CJzt', '8ys5LLlWR6U88jcjTVcxU7i', '4PsyWPNdSflcRq', 'F1tdPa', 'WOJcOL3cP8onW7NdPa', 'FSkKW5n6sq', 'FKNdKSkyxG', '4PAh4Psy4Pw5W5O5', '4Ps04PEY4PsF4PET44g7', 'W4BdL8k5a8oG', 'yuvDoCo0', 'WQhcQfa', 'WPnjjWi6', 'W4xXJ7kG8jM+SokcLVcFIjJcU8k3aW', 'W78TWPtcSSoD', 'wmk6u8o1fW', '4BsS4Bs44BAeYjljVG', 'W4VILRVILyFILQFILiW', 'DbyFtCkv', 'C8kRW47dS0O', 'W6TL8l2IQKrK', 'smoYbmkWxa', 'g8owhEkwNokvTq', 'W79NWRG3WPm', 'WPhcNmkuFeG', 'WQm+WP/cPCog', 'B07WQlcErCoJ', 'WRVcPcS', 'W63dTSkZ4Pst8yU1GEkcHUkBQ++6Ma', 'hCkWWQ3cHh0', 'WOaqb8knya', '4PEu4Psy4PsAmsq', 'bSkkcW', 'W7vQzW9r', 'dmkyhmkSma', 'W412gFcSN6r5', 'W4CliMKN', 'W4nim2mT', 'EmkWhCoQxq', 'lmkZWOdcN14', '8ysIQUkdHFczO7FcU+g0OEg2Mog3SG', 'kK7dVmoKEq', '4PwTW7hdLJ88', 'WQGiW4ldVa', 'wCoJWOi', 'WO5nfYui', 'F8kxW5NdR0W', 'ee1OW67dUG', 'cauWW5CH', 'W6/cR01bpq', 'dHLkW4FdGa', 'igddQG', '4BAP4Bw8Yi1FY7a', 'aXPbWPZdOW', 'FL3dRXVcIG', 'wSk+WObyrG', 'WRdcVCo4DSk0', 'WO4uxIJdPW', 'i8kXWO/cG1y', 'rmoevmkswa', 'amkBg8kKoa', 'i8kfvSo6W5m', 'W7WRDeFcQq', 'q8oYbmkWvG', 'WQGPW6C', 'W7/cH3RcTmoP', 'C8oIr8kNxa', 'W47dLSkocCkT', 'gg3cTve/', 'WOxcPcNdK00', 'WO8KxcBdKW', 'CHyPWQdIL7i', 'WPL/CJvB', '6PYY4BEbYy3HTPllLa', 'BvBdQGS', 'EmkHn8opDG', 'W5LymY1O', 'o+kxL+kwOokuM+kuRG', 'pmkxW4q9W60', 'rfdcOmkTW7O', 'W4JcKSk5fCoH', 'aSkZtSoDjG', 'BaHob8kh', 'itSv', 'omk2W6ldRgS', 'WQRcRmkfuru', 'W64mBr7cSG', 'i8kGumo7W5S', 'dmkmW6DBW5S', 'ECodWQlcPG', 'Dmo7WObVrG', '4Pw94Ps94PEh4PEX4PAw', 'WRRcVSkXwNa', 'WQWwWQTqqq', 'W53dSFgiMBlWN66r4OgL4PUI77Q5wcy', 'W6OLWPZcRW', 'WOaDxsNdUG', 'vf1NWOq0', 'fXrBWPZdHW', '4PEC4PwT4PA64Pwh4PAy', 'W6S2xqZcJq', 'WORdOSkLFMW', 'a1vdWOFdHq', 'lgtcOu4t', '8ywjJFcSQ5RWNPQo8yABQ3O', 'Eamyr8os', 'fuLNW67dKW', 'W4/dPwJdL20', 'sCkjamk5', 'ASkgW7RdVvW', 'WOlcPcRdIM0', 'CmkYwmoJW4S', 'A8kdcCo1EG', 'mWVcIq', 'u8oeqmk6nG', 'WPFcG8ktwSoQ', 'khLpW6FdRW', 'WO5aemo/xG', 'WOTjbMSs', '4PAY4Psf4PA24Pww4PAR', 'WPxdISoRDCks', 'iGFcICk3W70', 'W4mpvIZdUW', 'FCkWW5OvgW', 'yqDnf8k1', 'Amk0WOaHba', 'WR8mW47dRta', 'cSkkg8kOma', 'WOyCa8knFa', 'W4/dKCkwl8oE', 'lCoTW6NdKa', 'CCo5lWVdTa', '4Psn4PsG4PA94PE24PwX', 'oW3cJ8k1W7K', 'WQtcKCoqsmk6', 'WPldMCoosCkh', 'kJmNy8omgSoL', 'Emk4W54daa', 'BKJdNmkc', 'W7L7DX/cUa', 'qSojhqpdOW', 'amket8kImq', 'gSk9ba', 'WPBcQvPDxG', 'jb1kWOVdIq', 'WOpcO8k8Fsm', 'WPG+WPdcGMK', 'WO3dJmkAtSkh', 'W5dWMlgU8kUpGokcNFcPMPZdH8o5Ca', '8kEjQVcMQRNWQkU38jI7LpgeUjm', 'W5FcNmk/kmoK', 'W7WpW5xdVha', 'zGeHDSkX', 'WOShW7XwAW', 'huXGW74', 'tsGVwmks', 'F8k7m8oOuq', 'bmkohCkUpW', 'W5lcHKS', 'umo2umkWxa', 'WR/cVSkWrq', 'WQO6W64', 'y8kDwmofga', '44caW73ILkxIL77IL6q', 'WQyNW7OJWP0', 'WQBcQKPbAq', 'sL7cO8kKWRS', 'FmoZ8jcBNpcNNk7IGiVIMzdVURddJL0', 'dgNdM8ocqa', 'ewBdImomza', 'nWiFs8oz', 'u8ongHldPq', 'WR7cT8oWFW', 'WQeEbmkjBa', 'W5BdU8o/lNS', 'W4ifW74CaG', 'ECk+WO1mrG', 'WOG1W5NdRW4', 'W5RcJf/cS8oB', 'WPVcNs/dHv8', 'BdfBhaa', '4PsX4PwR4PA64Pww4PsO', 'W5uroxK', 'ECkHW7tdKv8', 'WOFcKCkkuMy', 's8kKW6fdAq', 'W67cGwBcTCoO', 'smkvhCkMxW', '4PEtW7ZcKW', 'WQFcTSk5w3C', 'bHlWVlI/8ycSSokcQEkAGE+4NCotwa', 'W7pdHSkycCov', 'W4VdGXpdV8kq', 'rCoTWOVcJbm', '8ywjIgFWTkQo8yo6MpcNUkC', 'af50WPm', 'cbze', 'WO3dR8o/tCkT', 'v8kxsCo6gG', 'W4/cSmkTAdW', 'WP7cLmktl8oX', 'vSktu8oP', 'sILmq8kq', 'xSoFWPZcHXW', 'fWe/W5b1', 'BJuaCSkk', '4PEQ4PA64PAB4Psy44ku', 'bIXSWQhdLa', 'cr3cSLa9', 'FfNdUGZcMW', 'W4aoW5RdUCks', 'BSk4W54vhG', 'lrLzWQhdGW', 'WPyrnmkoDa', 'B0ZdVq', 'FmkfW64pbG', 'WPKLW57dMqC', 'W6VdTwFcJEkvOq', 'cXDGCJq', '4BAq4BsR4BszYlpkHW', 'duzRW6BdSa', 'ESk9mSoGxG', 'A0/dKCksfa', 'WQHGlSocAq', 'WOStqqJdQa', 'zqKUu8k9', 'W6NcVmkqpG', 'usa4smoa', 'WPjykJm5', 'WP/cN8kAwNi', 'W5TLWQS', 'BhldRSkvba', '4Pw94Ps94PEh4Ps+CW', 'F8k7mmoXuq', 'WOuGW6HYBq', 'WRTUn8oBBq', 'tFcIGyFXHy2E4Ool8lAkJxLlWOS', 'nM1f', 'v+kvJEkxH+kuVUkvMq', 'ESkZu8opW40', 'CmkcW7tdQNm', 'W6aPWPtcOW', 'WPvduNfx', 'EuldR8okDW', 'WPtdM8od', 'CWxdRZOB', 'AHqqr8kv', 'WP4zxsNdLG', 'pKJcNSk5W7W', 'WP3dGmowrCkg', 'j8k9CmoQga', 'W77dTxC', 'rvpcRmkUW7a', 'pmkYWRVcHa', '4PsB4PEx4PwV4PEu4PAu', 'WP7dM8o5qCkB', 'WR1YkCoxAW', 'WOBcVg1FwW', 'bduCW5Pv', 'WR17jeRdUG', 'WOJdImoZt8kT', 'WOxcOJtdL2a', 'ceL9W77dUG', 'qCoKWPdcI1e', 'sCkidSk5mG', 'W6e1BCkhnq', 'lebfemkavSkFdt5WlchdUa', 'W63dSCo8', 'WOiTW6nUWRe', 'ESkxW5/dIau', 'o8k4W5D1sW', 'W4CQWPVcHSob', 't2RdU8ouDq', 'D8kFW4ddMKS', 'WRLSpW', 'bmk8xCo4fq', 'WPRcSmkK', 'tmojaaG', 'WPuvW7ldJYu', 'W49oW6mphq', 'DfRcOCkLW7G', 'DVcNM6RXIlQZ8y+4SpcsUyy', 'WPjCyXP1', 'W5ytya3cUW', 'ESk0W4T6sq', 'yd0GymkL', 'WRjUm8oy', 'ihTgW7NdNa', 'rc0fwq', 'v8MA4Bs5Y6pHTRu', 'uCojhrldOq', 'wvhdTSoAuq', 'cwXgEmkQ', 'WQWmW47dVdi', 'W5JWOOcF8yEFPEkaKpgoIOq9W6hcNa', '4PEY4Pw14Pw34PEH4Psz', 'sZXbiCkx', 'W4myxdRdPW', 'AuVdUKO', 'W5qfW7Wkfq', 'xfBdNCo8W4e', 'W6FcP8kzjmo/', 'W6L7BaVcQq', '44g3hEkvJ+kwTUkxKq', '4PESqSo3W5ZcRW', 'WRZcPmoG', 'WQW7W6m', 'Bmk4W6JdKLu', 'WQBcVLy', 'WPJdImoorCkp', 'f8kuW5voW5S', 'xSowuSoUvq', 'WQ8OFq', 'WPSAgCoBmW', 'k0pdHSoAAW', 'kKBdRCoCxW', 'WOL7AdrX', 'wSksgCouW7y', 'AfBcUG', 'FSkBW4hdNKS', 'W7HJm8oz', 'tf/dRXxcLW', 'WPiQW6vJtq', 'y0NcISkKW4m', 'WRBdISo0ESkV', 'WQlcQCo8qwC', 'se7dLmo5sW', 'WQRdUmokqSka', 'W6DjrZjv', 'WPxdJmowd8oy', 'A8kxW4ZdIuy', '4PAW4PsR4Pst4Pwz4Psh', 'DWXgomo7', 'dKujFmkc', 'kau1W5zZ', 'eSk2uSoVia', 'WQmEW4mxWPC', 'B8kYW5HV', 'kSo94PAT4Pw24PwS', 'WPejW67dHrK', 'cSogdCk8nG', 'ySkSumoLW58', 'WO4DqZNdOa', 'y1FdTCohvq', 'pqD7jJm', 'BSkeW4e7iW', 'W53cSCkWhmoj', 'ECkPW58FaG', 'eXbxWPW', 'wmoPWOVcNa', 'xCkFuCo5gW', 'WOijqw3dVq', 'WO9TyW', 'Bmk8ymosW5K', 'CCkbW5K', 's1dcQG', 'pWxcNmkXW7q', 'WOFdGXJIL5ZcMG', 'WPDpxCob', 'W5GEW5RcHmo3', 'Y6hkPYNHTPhHTPG', 'WROHgFcPGlT4', 'DSogWORcUdK', 'Aqraoa', 'xdGywmkr', 'W5ZdMrJdVG', '4PwP4Pwd4PEv4Ps144ch', 'W4xdP/cxSPHEW7q', 'l2NcR8oJzW', 'W78PWORcUSol', 'WOKyCcldPa', 'FuhdICkcfa', 'fGe9W5XV', 'AmoppIJdNG', 'WPaMW7ySWPa', 'kK15W6xdRq', 'WRyTW7KQWR4', 'ad/cUW', 'k23cQ3DD', 'pb55kJS', 'arP1fWe', 'wCkdwG', 'WRJcSmovySk0', 'xLhdOZZcKG', 't1xdMSoCsW', 'lauYW6Tv', 'W4pdGCko', 'j2hdOmoGFa', 'DbyFtCo5', 'WQFcUComyCkH', 'sfFcOeTC', 'zCkVW5q', 'xd4a', 'wglcTLfP', '4BAz4BEJ4Bs4YRtiUG', 'WOZcRe5zoG', '4PsI4PAZ4PAjz8kd', 'WRmFW4m', 'B1NdUHhcKq', 'Be7dRColDa', 'WOFcO8k7', 'W5HFqZ1k', 'WQWzW74iWOS', 'WP/dHSouvmkP', 'W4CYxg3dMW', 'bSkzfG', 'W6aTWPtcSSks', 'Brijxq', 'WQKAW6rYwq', 'fvJcTveY', 'rSobWOaSW6ZdL8kHb3jz', 'z8k4W4mcbq', 'rCohbXldHq', '4Pw94Ps94PEh4Ps+4Pwz', 'gvJcTf0R', 'nHlcRG', 'kHvaomkZ', 'kSodWPVcHfy', 'zhFdRCkdW5q', 'W7G/WP8', 'WP3cKmoAwSkh', 'hbq7', '4Psb4PsL4PEo4PsB4PsX', 'W6KuW6uAaG', 'ogZcQ3KA', 'sXq2WPXN', '4BsS4Bwl4BwPf+g3Pa', 'WOqqhY/dQa', 'irn6nHO', 'W5hdLSkucmoa', 'WPRWLAg78kMFU+kbLFgfIlFdGKrS', 'bHlWVlovWRRcRG', 'paDNoG', 'dv9zfNy', 'AuVdVrNcMq', 'WP4qgCkgBq', 'W5azjexdUG', 'WRBdRmk5', 'iHRcM8kVW6a', 'w8k9W6ddTMq', 'WOyxW7ddVYm', 'aqndWQpdOa', 'orRdNCk5W6y', 'EmkXlCoM', 'WRr7hSodDG', 'W6i7WPtcPCks', 'WO7cR8kT', 'qmoyWPRILj/WT4wS4OoO4PIa77IR', 'zqHm', 'W4ZcNSk2fSoi', 'iHJdH+g1O8oE', 'W49I8lQOIFgaJRlIG5/IMkNVUAZcTSox', 'WQ/cUI4', 'W5FdGmkF', 'WRlcSCo1FCkI', 'dHz9ic8', 'xmothmkX', 'B8kUW54xcW', 'WOqIW6r1Eq', 'WQhcUu5moG', 'W54LW4OyaG', 'jW3dTGXQ', 'rCongGu', 'vVglIkxWU6Md8yIiQdi', 'W6pdTxXoWQ0', 'a/cSKitWKRYd4Ok68lclKJFcSSk+', 'qfddPSo6uG', 'W4C5qt/dPG', 'dmkzhCkIjq', '4PA54PEJ4PsY4Psr4Pw1', 'dq9iWQBdSq', 'W4/dLSkugCk/', 'hriJWQO', 'WORcPMnCAa', 'AeVdRSonuq', 'CICLwmoZ', 'm8k7gSk9hq', 'WPi7WQu', 'WPhcQr3dNNO', 'FKJdS8oxaa', 'AuBdTColxq', 'bmkkaCkP', 'W51kFt0N', 'g1tcQ1S3', 'imkFW5Grta', 'WQ4zW63dJI4', 'WOS2wH/dMG', 'W74OW5qnjG', 'W5BcMCoWtmkT', '8jMIV+kcRFczOPu', 'tmo2umkVuG', 'bmkckCkodW', 'zKldR8ojtG', 'WQa+oxpcQq', 'vr/dRmoHWRe', 'WOdcTSoVAgW', 'a1NdGCoAxa', 'WRzWuH4U', 'W6D28joHSCoDmq', 'B8ksFSofoW', 'WRGcW5tdVby', 'WQ7cRSk2Bxe', '4BsCYQdHTzNiMHO', 'W5BcLSk5fCoG', 'CSk4nCojAa', 'svVcVSoUWRe', 'kbDNmq', 'fcvdgGm', 'u1dcI8kPW6m', 'e8kzW5LZ', 'WPmyeG', 'W73cQCkMhSom', 'iqbMWQNdRa', 's8khBCoeW78', 'WPXkWQ0', 'WOpdIri', 'WRnRuIvY', 'AfpdJSkxfG', 'WP17CG', 'fr5vWOddHW', 'WQCnpW8', 'W7BILj3ILRRILOJILzC', 'sKdcUhb5', 'WOfvgmoVEG', 'mCkcWRdcKvq', 'u8o0bmo+eW', 'FSknW7uGgW', 'W6O1yrJdUG', 'ySk4W4Wscq', 'W6ddO2S', 'WORcQmkrEaq', 'obDSjG', 'W6H2W5ddTG', 'WQlcQmk5', 'WRy8W6uNWPi', 'CKdcUNLE', 'W6SfW74meq', 'svVcQmk4WRu', 'AmoDW6NIL7lWK6s777I84Ooz4PQS77Ma', 'sCowhmk9xW', 'ma3cOq', 'dbbw', 'WQRcJ05AEq', 'rX4Mq8k0', 'j8k0Dmo4bG', 'W63dTmoZqNu', 'nWRcNq', 'nmkoW7DvW5C', 'hb5XmYu', 'ymktW6iMnq', 'jSosWOFILRKf', 'ata0Fxy', 'gvJcTf0', 'jaDgiSo0', 'v8kyW6Du', 'W5BcH8kLgmod', 'bCk2WQRcNHm', 'DCk6fCoUCW', 'W4rpW6SkhG', 'WQ/cRui', 'Bmk1kSoXvq', 'Emo9WOXxrG', 'W4CnW6G', 'ECkwmSoQuW', 'tfdcI2j3', 'WROeW5BdRtK', 'WQZcOK9yEW', 'nGnnzSoJ', 'E8kAW57dShu', 'WO7dMCoosCkf', 'W7tdPh1CWRq', 'fX9IWQRdSG', 'a8k8t8oVtG', 'wSkBwa', 'W7jkFH1P', 'WPldHmoBr8kn', 'yLpdTCoEsq', 'ov3ILBmjWPu', 'haVdVGK6', 'W4FWOjgB8kYDTEkbLpctUyNdJgC2', 'WR17CNbE', 'vmkcgSoVvq', 'WOyhaSke', 'WRRcU8o4DSk0', 'rsiXW4zV', 'tCk0WRRcOa0', 'cSkeaSkGnG', 'Ee7dLSowfW', 'WPVdPWlWKOkXWPS', 'WOiGW6zQyq', '4PsH4PAO4PwP4PwM4PAe', 'jwJdVmoS', 'WPBdImourmoi', '4PwF4Pwt4Pwo4PAN44cj', 'WOHggw0', 'd8kuW55mW4u', 'hmk2W7jrW7G', 'WORcO1zqAa', 'WO8yW5NdQZi', 'W5JILixILBFIL6hILjK', 'BICuF8kO', 'f1WUW7NcVW', 'fwz5W7RdPq', 'W7lcGSkfa8oH', 'WRemW5tdRhC', 'A8k2W5rVsW', 'waCdrSk+', 'AGjaomkZ', 'WONcICkBaCoc', 'WQHbiH0t', 'WOi0g8kjsG', 'WPKammkmCG', 'W6/dNSkzl8ov', 'lavHWO3dSa', 'mXOpWOZdHW', 'W4hcVY/dGIW', 'qCoIWRBcMH4', 'WRC7m8oBtW', 'h8k+vmoVeG', 'zuJdUHhcKq', 'WPRdH8oEu8oi', 'WOtcVs7dIwS', '4PAj4Pwf4PsY4PAj4PA8', 'EuFdImkKmG', 'ECkHhmogzW', 'WPm+W6uVWQq', 'cHrbWOZcGG', 'BuSpW4lIL48', 'iNJdVCo9AW', 'wCk7W6pcM2y', 'sXqdxmkL', 'cvJcV8kVW64', 'WOpdU8kFEK8', 'W4hdOmkOiCox', 'xSkEW5v8W5y', 'W5FdPwKDWOe', 'bGW/W4fa', 'WOuzuINdRa', 'BmkHlCoT', 'WQxcVSk9vNy', 'mdH9WRZdPW', 'ACkYW4f4wG', 'W7hdTx1EWRy', 'jmkQiCkjba', 'AWnrsSoA', 'ACkYW5b3rW', 'BbPXidm', 'DSkZC8oj', 'FhhdJmk1cW', 'F8o0rCkN', 'W74PWPtcSSo/', 'W5qfW6WCba', 'F8kYW5n4', 'WO5qgqe5', 'etnQWOxdPW', 'cSkrW4rXW4C', 'vSkwW6LvdG', 'WOiabmkj', '6PYP4Bw4Y7ejYlO', 'W5BcMSk4h8kn', 'WRRcLmkFqXu', 'Bbb7jNy', 'WQOLW7OVWPi', 'F8kxWO3dLuq', 'rCo5WPBcGq', 'W5RdNun8WOO', 'iMddQ8oPzW', 'sYFWVkcIsSkv', 'WQPpvanO', 'W6m8WPC', 'ymkYumo4W5a', '4Pwi4PEx4PEd4PEW4PsZ', 'WOpcKSk+DZW', 'nSkrW4ddN0m', 'WOldVSk/iSoy', 'B8k3FSk/gG', 'abXjWPe', 'wvuf4PEQ8lEeN+kcQokzJ++4Tq', 'WRzLESoAzq', 'f8k3wmk7dG', 'g8k8uSoU', 'umoXittdKG', 'pqVcVu7cLCkbW7lcUwddTa', 'hSkDhCk6gW', 'WPCgbmkaFG', 'CSkXlmkLuW', 'q1VcJSkVW7y', 'W6hdI8k4hSo0', 'Eu/dU8kFcq', 'gu/cGheE', 'W7jQyqXU', 'A8kWW4G', 'AvpcK8oyxW', 'WOaugCkfDG', 'mcD5WQxdTq', 'WQOfwbtdVG', 'WQxcTCkqDb4', 'W5ijW7Ktfq', 'WObpagSC', 'WRemW5tdRbS', 'WOFcR8kVsH8', 'zmkZW4Geta', 'BmktW7vJtW', 'xSomf8k8', '4PwIk1dcIcW', 'WQdcTCo4F8oX', 'FokvQVgaTi/IGPZIMOJVUjaElW', 'W47cNmkUfmop', 'WOtdSw3cHW', 'W4GHW6KugW', 'CmkeW5r6wG', 'CmkYWOb0wq', 'gSoyW5XYW4u', 'tmkmASogjW', 'WP4Fe3FcOW', 'ySksWRhcGLW', 'WOjfasGp', 'W6qOWRxcNmov', 'fbypW5lcIa', 'WR3cL8oTDSkq', 'BKldSSon', 'hmkycG', 'yKtcVM9y', 'ESkOW54E', 'W5iwgmkmDa', 'W5epW78uua', 'WP8izaVdSa', 'W6OTDH3cLG', 'i2hdOmoSzq', 'FSo3W49Sqa', 'W7ZdV2a', 'qxRdIYO', 'W6b6qqPt', 'BCkSu8oLha', 'EseCF8kv', 'wSkSACohW5K', 'W5erAJlcMa', 'W4FcNmkZca', 'eYKuW5zu', 'k8kcoWpdTq', 'WRnXdKRdUG', 'eL9VW6ldSq', 'WQ7cUubABG', 'orRcHa', 'WRa6W7S', 'W5JJGBTx8ywjQpcAIye', 'xH9JiCkG', 'B1FdOXxcNW', 'aW0YW5zV', 'e0NdImoSFa', 'WPeDgCkiEG', 'WQT1Da', 'cqS9W5j1', 'xCoTWPy', 'W5/cRLxcVmoq', 'WRLaamoIDG', 'WPeUW79Zzq', 'W64+AG7cLW', 'WPygv8kGDW', 'F8ozzCkjFa', 'jN3dVaRcKq', 'W79IWRC', 'vWKCWPtcLG', 'gX3cUmkVW5C', 'W4CuW74Eaa', 'WQ8iW5tdRbO', 'W717sJDZ', 'amkygW', 'WOaHW68NAq', 'W6acW5WXka', 'lEg0R+g2NmQc4Bw2', 'WQPKo8ovEa', 'DSk0vq', 'W7ddO31CWQm', 'W41w4PwE4Pwn4PAj', 'uSkgq2ZcRG', 'W6K0CaVcTG', 'WOJcOmksxbq', 'WQeSW5qHWPe', 'FbBdOb3cIG', 'jSosWOFILRNWLREQ4Ogv4PQ+77IW', '4PAz4PAN4PwhW7ZcMW', 'kSk98jArQx1V', 'cSkkh8k5pG', 'W6/cRKPuDa', 'i8kYWRO', 'W59CqG9m', 'WRldGmoPwmk/', 'W77dVur4WQi', 'ctSdrCku', '4PEp4PEn4PsI4Ps1ma', 'yGaHECkW', 'vmkRW6/dK2K', 'wCkwW7HoFq', 'Bmoyy8kl', 'ECoUDmkL', 'W5ybW7Klfq', 'DGbinCkG', 'xelXGig7W5xcRW', '8yo1PfFcSNXX', 'WRC+W47dQsm', '4Ps74PE24Ps94PAC4Pw1', 'k8kHW4jYW7m', '4PAHW73cQVczOyBIGPpWSBkama', 'WORcGcpdRK8', 'W57cHKy', 'DSk2W45/yG', 'mCoDWP47ba', 'WP0IW7JdUXK', 'twRcIvq', 'W4JcI8kVpCoR', 'WOiUW6LTAq', 'WPRdHmoF', 'WRH7W47dR8khrmoqgColxxFcK8o5', 'vmo+umkOxa', 'k8kVWOtcPeu', 'BfldRmoivq', 'oSkYWRpcNeO', 'sCoNumkTvG', 'WOdcPIi', 'tKldTColwq', '4BAzY4FjSmIa4BEE'];
    _0x138f = function () {
      return _0x4e279a;
    };
    return _0x138f();
  }
  _0x30a481.react = '🔖';
  _0x30a481.desc = "Contact to bot owner";
  _0x30a481.category = "main";
  _0x30a481.use = ".rsquest2";
  _0x30a481.filename = __filename;
  cmd(_0x30a481, async (_0x1983fe, _0x567a62, _0x423dcd, {
    from: _0x84830c,
    prefix: _0x48f329,
    l: _0x4fa716,
    quoted: _0x907b87,
    body: _0x380ad0,
    isCmd: _0x3f4223,
    command: _0x1edb41,
    args: _0x18c1cc,
    q: _0x53c719,
    isGroup: _0xd3d485,
    sender: _0x10b0e3,
    senderNumber: _0x22fb03,
    botNumber2: _0x8f9242,
    botNumber: _0x6ff619,
    pushname: _0x276117,
    isMe: _0x3c1b25,
    isOwner: _0x37f9c3,
    groupMetadata: _0x11e3bf,
    groupName: _0x2a4c70,
    participants: _0x26523d,
    groupAdmins: _0x28ca1e,
    isBotAdmins: _0x2cf817,
    isAdmins: _0x5eb645,
    reply: _0x3d6345
  }) => {
    function _0x277546(_0x31b4ce, _0x333e16, _0x528604, _0x52d2a8, _0x281ef2) {
      return _0x10cc(_0x281ef2 + 0x44a - 0x1d1, _0x528604);
    }
    function _0x28b404(_0x2f193b, _0x2ecd5a, _0x3231fe, _0x1b78af, _0x15f22f) {
      return _0x10cc(_0x2f193b + 0xae - 0x1d1, _0x1b78af);
    }
    function _0x3a82cf(_0x3b1b89, _0x25ae95, _0x2ab902, _0x31e73e, _0x1b150) {
      return _0x10cc(_0x1b150 - 0x216 - 0x1a5, _0x25ae95);
    }
    const _0x43d8ab = {
      'ECFKj': function (_0x73897, _0xc6625b) {
        return _0x73897 === _0xc6625b;
      },
      'agIde': "main",
      'eZksR': function (_0x2cdd52, _0x5cb5ec) {
        return _0x2cdd52 + _0x5cb5ec;
      },
      'rbZNi': "《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
      'OfiaM': "《 ████▒▒▒▒▒▒▒▒》30%",
      'VKAvg': "《 ███████▒▒▒▒▒》50%",
      'BArUi': "《 ██████████▒▒》80%",
      'igBsr': "《 ████████████》100%",
      'VdJOL': "𝚁𝙴𝙿𝙾𝚁𝚃 𝚂𝙴𝙽𝙳 𝚃𝙾 𝚃𝙷𝙴 𝙾𝚆𝙽𝙴𝚁...",
      'BiUWq': "ꜱᴇɴᴅɪɴɢ...",
      'saIoE': function (_0x5c91d5, _0x135e3d) {
        return _0x5c91d5 < _0x135e3d;
      },
      'JAsnl': "yppGn",
      'ThuEw': "This report has already been forwarded to the owner. Please wait for a response.",
      'IqLWZ': function (_0x174797, _0x165fd3) {
        return _0x174797 + _0x165fd3;
      },
      'qkXiU': "@s.whatsapp.net",
      'zgceT': function (_0xc70001, _0x10d64d) {
        return _0xc70001 + _0x10d64d;
      },
      'aNpXt': "Tʜᴀɴᴋ ʏᴏᴜ ꜰᴏʀ ʏᴏᴜʀ ʀᴇᴘᴏʀᴛ. Iᴛ ʜᴀs ʙᴇᴇɴ ꜰᴏʀᴡᴀʀᴅᴇᴅ ᴛᴏ ᴛʜᴇ ᴏᴡɴᴇʀ. Pʟᴇᴀsᴇ ᴡᴀɪᴛ ꜰᴏʀ ᴀ ʀᴇsᴘᴏɴsᴇ.",
      'pAlhS': function (_0x213786, _0x5dd5d3) {
        return _0x213786(_0x5dd5d3);
      },
      'Cqpqe': "*Error !!*"
    };
    function _0x1359b2(_0x59596f, _0x1582b5, _0x491b47, _0x2eb256, _0x554c89) {
      return _0x10cc(_0x2eb256 + 0x4d3 - 0x1a5, _0x554c89);
    }
    function _0x6bb66c(_0x1fa88c, _0x12853e, _0x59b0e5, _0x5d5238, _0x1cb36d) {
      return _0x10cc(_0x1cb36d + 0x22f - 0x24d, _0x12853e);
    }
    try {
      if (!_0x53c719) {
        return _0x567a62.reply("Example: " + (_0x48f329 + _0x1edb41) + " Hi Hamza play command is not working");
      }
      var _0x57273a = ["《 █▒▒▒▒▒▒▒▒▒▒▒》10%", "《 ████▒▒▒▒▒▒▒▒》30%", "《 ███████▒▒▒▒▒》50%", "《 ██████████▒▒》80%", "《 ████████████》100%", "𝚁𝙴𝙿𝙾𝚁𝚃 𝚂𝙴𝙽𝙳 𝚃𝙾 𝚃𝙷𝙴 𝙾𝚆𝙽𝙴𝚁..."];
      const _0x32c197 = {
        text: "ꜱᴇɴᴅɪɴɢ..."
      };
      let {
        key: _0x82fd55
      } = await _0x1983fe.sendMessage(_0x84830c, _0x32c197);
      for (let _0x596c8 = 0; _0x596c8 < _0x57273a.length; _0x596c8++) {
        const _0x2ec19a = {
          text: _0x57273a[_0x596c8],
          edit: _0x82fd55
        };
        await _0x1983fe.sendMessage(_0x84830c, _0x2ec19a);
      }
      const _0x2a3216 = _0x567a62.key.id;
      if (reportedMessages[_0x2a3216]) {
        return _0x567a62.reply("This report has already been forwarded to the owner. Please wait for a response.");
      }
      reportedMessages[_0x2a3216] = true;
      const _0x1bc7a4 = "\n\n*User*: @" + _0x423dcd.sender.split('@')[0] + "\n*Request/Bug*: " + _0x53c719;
      const _0x5d9dd9 = "\n\n*Hi " + _0x276117 + ", your request has been forwarded to my Owners.*\n*Please wait...*";
      _0x1983fe.sendMessage("923072380380@s.whatsapp.net", {
        'text': "*| REQUEST/BUG |*" + _0x1bc7a4,
        'mentions': [_0x567a62.sender]
      }, {
        'quoted': _0x567a62
      });
      _0x567a62.reply("Tʜᴀɴᴋ ʏᴏᴜ ꜰᴏʀ ʏᴏᴜʀ ʀᴇᴘᴏʀᴛ. Iᴛ ʜᴀs ʙᴇᴇɴ ꜰᴏʀᴡᴀʀᴅᴇᴅ ᴛᴏ ᴛʜᴇ ᴏᴡɴᴇʀ. Pʟᴇᴀsᴇ ᴡᴀɪᴛ ꜰᴏʀ ᴀ ʀᴇsᴘᴏɴsᴇ.");
      const _0x590140 = {
        text: '✅',
        key: _0x567a62.key
      };
      const _0x3959d3 = {
        react: _0x590140
      };
      await _0x1983fe.sendMessage(_0x84830c, _0x3959d3);
    } catch (_0x15005a) {
      _0x3d6345("*Error !!*");
      _0x4fa716(_0x15005a);
    }
  });
  const _0x1d0369 = {
    pattern: "request2",
    react: '⚙️',
    desc: "Contact to bot owner",
    category: "main",
    use: ".request",
    filename: __filename
  };
  cmd(_0x1d0369, async (_0xfa0002, _0x164f1b, _0x2554f7, {
    from: _0x4f668b,
    l: _0x300a36,
    prefix: _0x20d71f,
    quoted: _0xfd5391,
    body: _0x5bb3f0,
    isCmd: _0x36b8b1,
    command: _0x21f874,
    args: _0xc874fa,
    q: _0x9f1088,
    isGroup: _0x40c01d,
    sender: _0x5b9f50,
    senderNumber: _0x5519e5,
    botNumber2: _0x9f7024,
    botNumber: _0x250cac,
    pushname: _0x3f7429,
    isMe: _0x142d18,
    isOwner: _0x352407,
    groupMetadata: _0x55fb48,
    groupName: _0x609a1a,
    participants: _0x3b7db7,
    groupAdmins: _0xdbcaa6,
    isBotAdmins: _0x39cea2,
    isAdmins: _0x18ae2e,
    reply: _0x391e98
  }) => {
    function _0x1a5c26(_0x5182dc, _0x47a4a3, _0x45a180, _0x4ee570, _0x21fe9d) {
      return _0x10cc(_0x21fe9d + 0x38a - 0x10d, _0x4ee570);
    }
    const _0x32360b = {
      'vXrrf': "《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
      'MoNhA': "《 ████▒▒▒▒▒▒▒▒》30%",
      'cxGTv': "《 ███████▒▒▒▒▒》50%",
      'HigRm': "《 ██████████▒▒》80%",
      'mfSiG': "《 ████████████》100%",
      'HBLaw': "𝚁𝙴𝙿𝙾𝚁𝚃 𝚂𝙴𝙽𝙳 𝚃𝙾 𝚃𝙷𝙴 𝙾𝚆𝙽𝙴𝚁...",
      'kJnDQ': "ꜱᴇɴᴅɪɴɢ...",
      'OHrCG': function (_0x410a8a, _0x197a8c) {
        return _0x410a8a < _0x197a8c;
      },
      'KIiYH': "blank",
      'IbKAJ': function (_0x2c951b, _0x216464) {
        return _0x2c951b(_0x216464);
      },
      'HWIau': "🛑 This is an owner command...",
      'lgWym': function (_0x63fdd8, _0x468500) {
        return _0x63fdd8(_0x468500);
      }
    };
    function _0x562133(_0x520e9b, _0x168ab0, _0x207348, _0x507cb7, _0x13b924) {
      return _0x10cc(_0x520e9b + 0x57b - 0x24d, _0x168ab0);
    }
    function _0x22ca14(_0x3e5f2e, _0x3ab622, _0x2bbe65, _0x229c59, _0x4ef2f7) {
      return _0x10cc(_0x3e5f2e + 0x1d0 - 0xf5, _0x2bbe65);
    }
    function _0x58b4a0(_0x3c3713, _0x3bc08d, _0x1f6a98, _0x3b1725, _0x5c27c9) {
      return _0x10cc(_0x1f6a98 + 0x1d6 - 0x10d, _0x3c3713);
    }
    function _0x4c4bc5(_0x1f9a8f, _0x565f67, _0x4d71dd, _0x5358e4, _0x345dd3) {
      return _0x10cc(_0x5358e4 + 0x3cd - 0xf5, _0x1f9a8f);
    }
    try {
      let _0x53a0b4 = "Enter The Bug Example\n\n" + _0x21f874 + " < YOUR REPORT MASSAGE > ";
      var _0x2f5f6f = ["《 █▒▒▒▒▒▒▒▒▒▒▒》10%", "《 ████▒▒▒▒▒▒▒▒》30%", "《 ███████▒▒▒▒▒》50%", "《 ██████████▒▒》80%", "《 ████████████》100%", "𝚁𝙴𝙿𝙾𝚁𝚃 𝚂𝙴𝙽𝙳 𝚃𝙾 𝚃𝙷𝙴 𝙾𝚆𝙽𝙴𝚁..."];
      const _0x5dd42d = {
        text: "ꜱᴇɴᴅɪɴɢ..."
      };
      let {
        key: _0x122228
      } = await _0xfa0002.sendMessage(_0x4f668b, _0x5dd42d);
      for (let _0x32b9d5 = 0; _0x32b9d5 < _0x2f5f6f.length; _0x32b9d5++) {
        const _0x4be487 = {
          text: _0x2f5f6f[_0x32b9d5],
          edit: _0x122228
        };
        await _0xfa0002.sendMessage(_0x4f668b, _0x4be487);
      }
      await _0xfa0002.sendMessage("923072380380@s.whatsapp.net", {
        'text': "*Bug Report From:* wa.me/" + _0x164f1b.sender.split('@')[0] + "\n\n*Bug Report*\n" + (_0x9f1088 ? _0x9f1088 : "blank")
      });
      const _0x42a06c = await _0xfa0002.sendMessage("*『 𝙱𝚄𝙶 𝚁𝙴𝙿𝙾𝚁𝚃 』*");
      const _0x522a22 = {
        text: '✅',
        key: _0x164f1b.key
      };
      const _0x34c6c3 = {
        react: _0x522a22
      };
      await _0xfa0002.sendMessage(_0x4f668b, _0x34c6c3);
    } catch (_0x15859c) {
      _0x391e98("🛑 This is an owner command...");
      _0x300a36(_0x15859c);
    }
  });
  const _0x244268 = {
    pattern: "setbio",
    react: '⚙️',
    desc: "To change bot number bio",
    category: "main",
    use: ".setbio",
    filename: __filename
  };
  cmd(_0x244268, async (_0xd6a37c, _0x48b030, _0x5f35c4, {
    from: _0x15bdfc,
    prefix: _0xce0ad3,
    l: _0x2f191c,
    quoted: _0x63301e,
    body: _0x2ada12,
    isCmd: _0x2135c6,
    command: _0x37b673,
    args: _0xec335c,
    q: _0x23b2d9,
    isGroup: _0x5ebeed,
    sender: _0x1bf212,
    senderNumber: _0x37b9cc,
    botNumber2: _0x2b31a9,
    botNumber: _0x59efd3,
    pushname: _0x1fce74,
    isMe: _0xf14164,
    isOwner: _0x16bb30,
    groupMetadata: _0x3b2d27,
    groupName: _0x3665eb,
    participants: _0x33e6b9,
    groupAdmins: _0x162dc5,
    isBotAdmins: _0x2c31be,
    isAdmins: _0x14b48d,
    reply: _0x3bfc44
  }) => {
    function _0x4c7d9d(_0x2be854, _0x51d5aa, _0x139ecc, _0x7c1fb9, _0x248bcd) {
      return _0x10cc(_0x7c1fb9 + 0x6f - 0x24d, _0x248bcd);
    }
    function _0x25514c(_0x30287d, _0x3dad23, _0x136574, _0x296edc, _0x10db0a) {
      return _0x10cc(_0x136574 + 0x4eb - 0x1d1, _0x10db0a);
    }
    function _0x3e2bf9(_0x16090d, _0x459a65, _0x3ae329, _0x4986ed, _0x26a127) {
      return _0x10cc(_0x459a65 - 0x53 - 0x1a5, _0x3ae329);
    }
    const _0x391948 = {
      'mRgPG': "3|4|1|2|0",
      'yujXs': function (_0x24d498, _0x4c072b) {
        return _0x24d498(_0x4c072b);
      },
      'uvGYM': function (_0x4b0ead, _0xbbfca5) {
        return _0x4b0ead + _0xbbfca5;
      },
      'yEfEi': function (_0x5eb326, _0x246888) {
        return _0x5eb326(_0x246888);
      },
      'pTYAW': "*🛑 This is an owner command...*"
    };
    function _0x15087f(_0x3217dc, _0x545a8a, _0x100e70, _0x2dea4a, _0x3847e1) {
      return _0x10cc(_0x3847e1 + 0x263 - 0x1a5, _0x3217dc);
    }
    function _0x955a12(_0x314398, _0x1879f4, _0x451a73, _0x165c50, _0x52bfcc) {
      return _0x10cc(_0x52bfcc + 0x2bf - 0x24d, _0x165c50);
    }
    try {
      if (!_0xf14164) {
        return await _0x3bfc44(BOTOW);
      }
      if (!_0x23b2d9) {
        return _0x3bfc44("Where is the text?\nExample: " + (_0xce0ad3 + _0x37b673) + " izumi Bot");
      }
      await _0xd6a37c.updateProfileStatus(_0x23b2d9);
      _0x3bfc44("Success in changing the bio of bot's number");
      const _0x4a8379 = {
        text: '✅',
        key: _0x48b030.key
      };
      const _0x3823c0 = {
        react: _0x4a8379
      };
      await _0xd6a37c.sendMessage(_0x15bdfc, _0x3823c0);
    } catch (_0x56079a) {
      _0x3bfc44("*🛑 This is an owner command...*");
      _0x2f191c(_0x56079a);
    }
  });
  const _0x2fdc1e = {
    pattern: "getsession",
    react: '🔖',
    desc: "To get bot session",
    category: "main",
    use: ".getsession",
    filename: __filename
  };
  cmd(_0x2fdc1e, async (_0x47fc63, _0x27b1b3, _0x3b524a, {
    from: _0x1c6b85,
    prefix: _0x48b846,
    l: _0xc836a,
    quoted: _0x189e0f,
    body: _0x57d717,
    isCmd: _0x2f4247,
    command: _0x1f040e,
    args: _0x1b344e,
    q: _0xbcf409,
    isGroup: _0x464636,
    sender: _0x24cf13,
    senderNumber: _0x3078ee,
    botNumber2: _0x50a413,
    botNumber: _0x3be08d,
    pushname: _0x2826db,
    isMe: _0x311db9,
    isOwner: _0x1b9f04,
    groupMetadata: _0x4aa232,
    groupName: _0x3beec2,
    participants: _0x26b43a,
    groupAdmins: _0x4c6359,
    isBotAdmins: _0x249369,
    isAdmins: _0x3afb69,
    reply: _0x539bfc
  }) => {
    function _0x109705(_0x4217c1, _0x39de71, _0x2aa207, _0x3b24a2, _0x20e2be) {
      return _0x10cc(_0x39de71 + 0x21c - 0x10d, _0x2aa207);
    }
    function _0x1212a6(_0x14e734, _0x288ccc, _0x103e2e, _0xbf8344, _0x1573d7) {
      return _0x10cc(_0x1573d7 - 0x194 - 0x1d1, _0x103e2e);
    }
    function _0x240887(_0x5c3c42, _0x3b5a61, _0xb25ba1, _0x548e0f, _0x3b1b1e) {
      return _0x10cc(_0x3b5a61 + 0xe9 - 0x10d, _0x548e0f);
    }
    const _0xe8e59d = {
      'MmcCX': function (_0x55df6f, _0x5b39d0) {
        return _0x55df6f(_0x5b39d0);
      },
      'nojZD': function (_0x1c9340, _0x5c5fff) {
        return _0x1c9340(_0x5c5fff);
      },
      'QyPQf': "Wait a moment, currently retrieving your session file",
      'HRkOo': "./session/creds.json",
      'ncQUz': "application/json",
      'aTjRK': "creds.json",
      'ELodH': "*🛑 This is an owner command...*",
      'DnMQR': function (_0x9e6ac5, _0x4f336b) {
        return _0x9e6ac5(_0x4f336b);
      }
    };
    function _0x5e3a25(_0x3a6a51, _0x26913f, _0x2c7267, _0x4e78fa, _0x4bbdd3) {
      return _0x10cc(_0x4bbdd3 + 0x3dc - 0x10d, _0x26913f);
    }
    function _0x33840e(_0x363fc, _0x4bc008, _0x175d6c, _0x472a9d, _0x1ef45f) {
      return _0x10cc(_0x363fc - 0x3d - 0x1d1, _0x4bc008);
    }
    try {
      if (!_0x311db9) {
        return await _0x539bfc(BOTOW);
      }
      _0x539bfc("Wait a moment, currently retrieving your session file");
      let _0x49e7c7 = fs.readFileSync("./session/creds.json");
      const _0x23c3bf = {
        document: _0x49e7c7,
        mimetype: "application/json",
        fileName: "creds.json"
      };
      _0x47fc63.sendMessage(_0x27b1b3.chat, _0x23c3bf, {
        'quoted': _0x27b1b3
      });
      const _0x3bb278 = {
        text: '✅',
        key: _0x27b1b3.key
      };
      const _0x38a929 = {
        react: _0x3bb278
      };
      await _0x47fc63.sendMessage(_0x1c6b85, _0x38a929);
    } catch (_0x461a7d) {
      _0x539bfc("*🛑 This is an owner command...*");
      _0xc836a(_0x461a7d);
    }
  });
  const _0x317525 = {
    pattern: "delsession",
    react: '🔖',
    desc: "To delete bot session",
    category: "main",
    use: ".delsession",
    filename: __filename
  };
  cmd(_0x317525, async (_0x3c5a8b, _0x20b990, _0x416ed1, {
    from: _0x480ad4,
    prefix: _0xc1decf,
    l: _0x55056b,
    quoted: _0x5c35ef,
    body: _0x40b69f,
    isCmd: _0x46c75c,
    command: _0x349585,
    args: _0x72967b,
    q: _0x289d29,
    isGroup: _0x2f5678,
    sender: _0x533d1c,
    senderNumber: _0x1548c7,
    botNumber2: _0x3b2b9a,
    botNumber: _0x369613,
    pushname: _0x57832a,
    isMe: _0x4a2cf3,
    isOwner: _0x46bf23,
    groupMetadata: _0x320477,
    groupName: _0x215fa3,
    participants: _0x504fb1,
    groupAdmins: _0x3eb1c1,
    isBotAdmins: _0x54c4c5,
    isAdmins: _0x3628ea,
    reply: _0x1eb29b
  }) => {
    const _0x89f8a2 = {
      'loiWZ': function (_0x4ea8cf, _0x2cdbf5) {
        return _0x4ea8cf + _0x2cdbf5;
      },
      'pFxPg': "Unable to scan directory: ",
      'JDHrS': function (_0x1733c3, _0x3c124e) {
        return _0x1733c3(_0x3c124e);
      },
      'DewKF': function (_0x54e9a1, _0x1dcfd0) {
        return _0x54e9a1 == _0x1dcfd0;
      },
      'RmsNj': function (_0x2bf2c9) {
        return _0x2bf2c9();
      },
      'dHKCU': function (_0x5be035, _0x13aebd) {
        return _0x5be035(_0x13aebd);
      },
      'RimDl': function (_0x53ac02, _0x389e58) {
        return _0x53ac02(_0x389e58);
      },
      'HKeWB': "Deleting junk files...",
      'yCfBr': function (_0xd348e4, _0x5b9bbd) {
        return _0xd348e4(_0x5b9bbd);
      },
      'tPXVw': "Successfully deleted all the trash in the session folder",
      'RllpT': "./session",
      'MvwvA': "*🛑 This is an owner command...*"
    };
    function _0x5c3379(_0xaac30, _0x1da2d2, _0x1edd83, _0x40943a, _0x5c44f2) {
      return _0x10cc(_0xaac30 + 0x3b2 - 0xf5, _0x5c44f2);
    }
    function _0xed9cc(_0x1c9c71, _0x454218, _0x40e188, _0x29d5a2, _0x2d74cb) {
      return _0x10cc(_0x1c9c71 + 0x41f - 0x1d1, _0x2d74cb);
    }
    function _0x9ae82c(_0xbc2bdf, _0x19fcf9, _0x52a52d, _0x1d07e8, _0x3d86d9) {
      return _0x10cc(_0x3d86d9 - 0x195 - 0x1a5, _0x52a52d);
    }
    function _0x3e9e0e(_0x296689, _0x5966d4, _0x21a490, _0x49a3d3, _0x55a9e1) {
      return _0x10cc(_0x5966d4 + 0x11e - 0x24d, _0x21a490);
    }
    function _0x514938(_0x5163c, _0x265810, _0x3ddcc9, _0x2ce00a, _0x25c456) {
      return _0x10cc(_0x25c456 + 0x44a - 0x1d1, _0x3ddcc9);
    }
    try {
      if (!_0x4a2cf3) {
        return await _0x1eb29b(BOTOW);
      }
      fs.readdir("./session", async function (_0x7b26da, _0x3d7163) {
        if (_0x7b26da) {
          console.log("Unable to scan directory: " + _0x7b26da);
          return _0x1eb29b("Unable to scan directory: " + _0x7b26da);
        }
        function _0x8ebe95(_0x5bcec6, _0x457620, _0x41e186, _0x53e537, _0x583ba1) {
          return _0x10cc(_0x583ba1 - 0x52e + 0x3b2 - 0xf5, _0x41e186);
        }
        let _0x112bb0 = await _0x3d7163.filter(_0x404230 => _0x404230.startsWith("pre-key") || _0x404230.startsWith("sender-key") || _0x404230.startsWith("session-") || _0x404230.startsWith("app-state"));
        function _0x2845c1(_0x3dbbcf, _0x36cada, _0x47ad41, _0x5808a9, _0x9c97e6) {
          return _0x10cc(_0x3dbbcf - 0x56c + 0x44a - 0x1d1, _0x9c97e6);
        }
        console.log(_0x112bb0.length);
        let _0x803a72 = "Detected " + _0x112bb0.length + " junk files\n\n";
        function _0x3d0e56(_0x5a7ab3, _0x52f39d, _0x23bc2e, _0x565ef1, _0x211707) {
          return _0x10cc(_0x211707 + 0x91 + 0x41f - 0x1d1, _0x23bc2e);
        }
        if (_0x112bb0.length == 0) {
          return _0x1eb29b();
        }
        _0x112bb0.map(function (_0x54058a, _0x2e9c70) {
          function _0x4a3692(_0xaa48ee, _0x4e4868, _0x2cb4cc, _0x186396, _0x1d52c8) {
            return _0x10cc(_0x1d52c8 + 0x34b - 0x56c + 0x44a - 0x1d1, _0x2cb4cc);
          }
          function _0x2eecca(_0x210aca, _0x1aacfb, _0x175eee, _0x6418ce, _0x185ff5) {
            return _0x10cc(_0x6418ce - 0x155 - 0x24e + 0x3b2 - 0xf5, _0x210aca);
          }
          _0x803a72 += _0x2e9c70 + 1 + (". " + _0x54058a + "\n");
        });
        _0x1eb29b();
        function _0x50c197(_0x52874b, _0x8bb490, _0x3b7cca, _0xef9ff0, _0x9871f0) {
          return _0x10cc(_0xef9ff0 - 0x174 + 0x41f - 0x1d1, _0x9871f0);
        }
        function _0x231c5b(_0x357ab5, _0x4558dd, _0x3d5199, _0x47b9eb, _0x1f2504) {
          return _0x10cc(_0x357ab5 - 0x24e + 0x3b2 - 0xf5, _0x3d5199);
        }
        await sleep(2000);
        _0x1eb29b("Deleting junk files...");
        await _0x112bb0.forEach(function (_0x37e09a) {
          function _0x2db107(_0x24500f, _0x39e213, _0xe31a2c, _0x1a0668, _0x55ee85) {
            return _0x10cc(_0x39e213 + 0x193 - 0x24e + 0x3b2 - 0xf5, _0x1a0668);
          }
          function _0x2bedcf(_0x34d005, _0x238eab, _0xa5d5fe, _0xb41c9c, _0x3ccfcc) {
            return _0x10cc(_0x34d005 + 0x5b5 - 0x52e + 0x3b2 - 0xf5, _0xb41c9c);
          }
          function _0x1a001d(_0x3e86ac, _0x52e0c7, _0x72dff9, _0xd89e1f, _0x3877fc) {
            return _0x10cc(_0x52e0c7 - 0x491 + 0x91 + 0x41f - 0x1d1, _0xd89e1f);
          }
          function _0x27af44(_0x24f227, _0xe6e8a, _0x416153, _0x577c63, _0xb4b7e7) {
            return _0x10cc(_0x577c63 - 0x40d - 0x174 + 0x41f - 0x1d1, _0xb4b7e7);
          }
          fs.unlinkSync("./session/" + _0x37e09a);
        });
        await sleep(2000);
        _0x1eb29b("Successfully deleted all the trash in the session folder");
      });
      const _0x120e8b = {
        text: '✅',
        key: _0x20b990.key
      };
      const _0x18cf31 = {
        react: _0x120e8b
      };
      await _0x3c5a8b.sendMessage(_0x480ad4, _0x18cf31);
    } catch (_0x5d52bd) {
      _0x1eb29b("*🛑 This is an owner command...*");
      _0x55056b(_0x5d52bd);
    }
  });
  const _0x111fdc = {
    pattern: "unblock",
    react: '🔖',
    desc: "To unblock a member",
    category: "main",
    use: ".unblock",
    filename: __filename
  };
  cmd(_0x111fdc, async (_0x79eab4, _0xbc994, _0x325eca, {
    from: _0x65caa8,
    prefix: _0x3e47c9,
    l: _0x55a52f,
    quoted: _0x25dab1,
    body: _0x1153b9,
    isCmd: _0x2885f9,
    command: _0x3cf378,
    args: _0x1fcc2a,
    q: _0x466e52,
    isGroup: _0x1836c6,
    sender: _0x41793a,
    senderNumber: _0x23979a,
    botNumber2: _0x2bedb6,
    botNumber: _0xbc2051,
    pushname: _0x4ae56f,
    isMe: _0x1e6a43,
    isOwner: _0xc0b839,
    groupMetadata: _0x42c1a5,
    groupName: _0x4bf842,
    participants: _0x1ac3cc,
    groupAdmins: _0x3c3c92,
    isBotAdmins: _0x12befc,
    isAdmins: _0x2d2017,
    reply: _0xd34a5e
  }) => {
    function _0x3c367e(_0x2d29b8, _0x462c4d, _0x24bc20, _0x177b7f, _0xe37a68) {
      return _0x10cc(_0x24bc20 + 0x347 - 0x1d1, _0x2d29b8);
    }
    function _0x3b2f77(_0x1fda81, _0x2a97d7, _0x4148f1, _0x16057d, _0x23ea58) {
      return _0x10cc(_0x1fda81 + 0x1bc - 0x1d1, _0x4148f1);
    }
    function _0x4b41e5(_0x2b0fe0, _0x1f5e30, _0x2579cd, _0x2d0188, _0x11f91f) {
      return _0x10cc(_0x2579cd + 0x328 - 0x10d, _0x11f91f);
    }
    function _0x2170a7(_0x168a98, _0x27ea97, _0x235a33, _0x3ecf6d, _0x3c06da) {
      return _0x10cc(_0x3c06da + 0x414 - 0xf5, _0x235a33);
    }
    const _0x3144ec = {
      'cSRMZ': function (_0xc8a376, _0xf0819c) {
        return _0xc8a376(_0xf0819c);
      },
      'AFKMZ': function (_0x5963b5, _0x47e3f6) {
        return _0x5963b5 + _0x47e3f6;
      },
      'ZVwYS': "@s.whatsapp.net",
      'UbNuk': "unblock",
      'oRyZv': "*🛑 This is an owner command...*",
      'kANEm': function (_0x42445a, _0x5e9c64) {
        return _0x42445a(_0x5e9c64);
      }
    };
    function _0x1ab742(_0x16948e, _0x2b1bbf, _0x11b641, _0x710b2f, _0x4a5776) {
      return _0x10cc(_0x4a5776 + 0x12e - 0xf5, _0x16948e);
    }
    try {
      if (!_0x1e6a43) {
        return await _0xd34a5e(BOTOW);
      }
      let _0x36abdb = _0xbc994.mentionedJid ? _0xbc994.mentionedJid : _0xbc994.quoted ? _0xbc994.quoted.sender : _0x466e52.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
      await _0x79eab4.updateBlockStatus(_0x36abdb, "unblock").then(_0x5d8b25 => _0xd34a5e(jsonformat(_0x5d8b25)))["catch"](_0x1e7722 => _0xd34a5e(jsonformat(_0x1e7722)));
      const _0x3f8fb7 = {
        text: '✅',
        key: _0xbc994.key
      };
      const _0x221483 = {
        react: _0x3f8fb7
      };
      await _0x79eab4.sendMessage(_0x65caa8, _0x221483);
    } catch (_0x2b006f) {
      _0xd34a5e("*🛑 This is an owner command...*");
      _0x55a52f(_0x2b006f);
    }
  });
  const _0x25cc8a = {
    pattern: "shutdown",
    react: '⚙️'
  };
  function _0x473b04(_0x3b3d56, _0x5c4626, _0x107259, _0x197e0e, _0xf3650e) {
    return _0x10cc(_0xf3650e - 0x1a5, _0x5c4626);
  }
  _0x25cc8a.desc = "To shutdown the bot";
  _0x25cc8a.category = "main";
  _0x25cc8a.use = ".shutdown";
  _0x25cc8a.filename = __filename;
  cmd(_0x25cc8a, async (_0x52c546, _0x5ea818, _0x44a2a4, {
    from: _0x4995ab,
    prefix: _0x27039c,
    l: _0x4a3d08,
    quoted: _0x3782cd,
    body: _0x550894,
    isCmd: _0x11e0ec,
    command: _0x5501c3,
    args: _0x5ad3b8,
    q: _0xc142f5,
    isGroup: _0x1fcd86,
    sender: _0x517865,
    senderNumber: _0x3cd036,
    botNumber2: _0x5974de,
    botNumber: _0x435574,
    pushname: _0x416f8d,
    isMe: _0x438d2a,
    isOwner: _0x4c9306,
    groupMetadata: _0xe3293e,
    groupName: _0x11f172,
    participants: _0x2919d3,
    groupAdmins: _0x322b03,
    isBotAdmins: _0x286c39,
    isAdmins: _0x8b3dfe,
    reply: _0x4fc404
  }) => {
    function _0x5b6125(_0x2e7303, _0x3b6ec5, _0x2360a0, _0x4cb79c, _0x1d311e) {
      return _0x10cc(_0x2360a0 + 0x5b7 - 0x24d, _0x2e7303);
    }
    function _0x563fef(_0xb34f53, _0xd93dbb, _0xe6f488, _0x27a3d9, _0x2979fd) {
      return _0x10cc(_0xd93dbb - 0x41 - 0x10d, _0x2979fd);
    }
    function _0x5350ed(_0x2dcdc7, _0x2caf38, _0x366fc9, _0x54b4ec, _0x174657) {
      return _0x10cc(_0x2caf38 + 0x2a8 - 0x10d, _0x2dcdc7);
    }
    function _0xc06be4(_0x25cd6e, _0xc87324, _0x2ddb94, _0x31ce38, _0x31c588) {
      return _0x10cc(_0x2ddb94 + 0x3e3 - 0x24d, _0x25cd6e);
    }
    function _0x5f0aaf(_0x3ccd05, _0x45b845, _0x2ba876, _0x25456d, _0x57c9a2) {
      return _0x10cc(_0x3ccd05 + 0x151 - 0x1a5, _0x45b845);
    }
    const _0x3ae216 = {
      'TNiBf': "0|3|4|2|1",
      'fyWGi': function (_0x186dec, _0x1e261d) {
        return _0x186dec(_0x1e261d);
      },
      'zgHbD': function (_0x5367f1, _0x3fe02f) {
        return _0x5367f1(_0x3fe02f);
      },
      'IiSxW': function (_0x1adb5d, _0x5e3bb5) {
        return _0x1adb5d(_0x5e3bb5);
      },
      'MYvcK': "*🛑 This is an owner command...*"
    };
    try {
      if (!_0x438d2a) {
        return await _0x4fc404(BOTOW);
      }
      _0x4fc404("Bot shutdown few 10 seconds...");
      await sleep(10000);
      process.exit();
      const _0x3404c3 = {
        text: '✅',
        key: _0x5ea818.key
      };
      const _0x2c5271 = {
        react: _0x3404c3
      };
      await _0x52c546.sendMessage(_0x4995ab, _0x2c5271);
    } catch (_0x51627f) {
      _0x4fc404("*🛑 This is an owner command...*");
      _0x4a3d08(_0x51627f);
    }
  });
  const _0x207fc4 = {
    pattern: "block",
    react: '🔖',
    desc: "To block a member",
    category: "main",
    use: ".block",
    filename: __filename
  };
  function _0x326ad7(_0x48e8b3, _0x631ffe, _0x59050b, _0x59561d, _0x20f148) {
    return _0x10cc(_0x48e8b3 - 0x1d1, _0x59561d);
  }
  cmd(_0x207fc4, async (_0x10b444, _0x2e6fd1, _0x589409, {
    from: _0x69bd9d,
    prefix: _0x2d1a10,
    l: _0x29424d,
    quoted: _0x328e45,
    body: _0x4de038,
    isCmd: _0xaa2a5d,
    command: _0x25e597,
    args: _0x5c8019,
    q: _0x25be59,
    isGroup: _0xa0f088,
    sender: _0x516950,
    senderNumber: _0x4b3909,
    botNumber2: _0x16fce0,
    botNumber: _0x4e1df4,
    pushname: _0x63e1c4,
    isMe: _0x1f96c7,
    isOwner: _0x1f4fd0,
    groupMetadata: _0x17a930,
    groupName: _0x421209,
    participants: _0x3bdbd5,
    groupAdmins: _0x3aaa95,
    isBotAdmins: _0x2f9101,
    isAdmins: _0x41715b,
    reply: _0x2c20c8
  }) => {
    const _0x7f7a6b = {
      'XBuOd': function (_0x1e61aa, _0x399f5f) {
        return _0x1e61aa(_0x399f5f);
      },
      'QHxqV': function (_0x1f0a3d, _0x13ed10) {
        return _0x1f0a3d + _0x13ed10;
      },
      'MJWUK': "@s.whatsapp.net",
      'eIZOH': "block",
      'Dbulc': "*Error !!*",
      'EnbzU': function (_0x52bbcf, _0x4c9b31) {
        return _0x52bbcf(_0x4c9b31);
      }
    };
    function _0x409432(_0x4e5b14, _0x17f6e0, _0x35afba, _0x4a5de0, _0x138322) {
      return _0x10cc(_0x4e5b14 + 0x3cc - 0x24d, _0x138322);
    }
    function _0x313412(_0x5a8e3d, _0x3274a6, _0x2d92ee, _0x54661a, _0x50de47) {
      return _0x10cc(_0x54661a + 0x40 - 0x24d, _0x3274a6);
    }
    function _0x2a407d(_0x3125cd, _0x3c9c8f, _0x59ed0e, _0x459c15, _0x35426b) {
      return _0x10cc(_0x3c9c8f + 0x3aa - 0xf5, _0x3125cd);
    }
    function _0x17a6f4(_0x4d1105, _0x36148a, _0x2ce18f, _0x36eab2, _0xb15704) {
      return _0x10cc(_0x36148a + 0x475 - 0x10d, _0x2ce18f);
    }
    function _0x276f24(_0x541a44, _0x2ff4f6, _0x383b58, _0x443535, _0x2b87de) {
      return _0x10cc(_0x443535 + 0x371 - 0xf5, _0x541a44);
    }
    try {
      if (!_0x1f96c7) {
        return await _0x2c20c8(BOTOW);
      }
      let _0x13f5af = _0x2e6fd1.mentionedJid ? _0x2e6fd1.mentionedJid : _0x2e6fd1.quoted ? _0x2e6fd1.quoted.sender : _0x25be59.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
      await _0x10b444.updateBlockStatus(_0x13f5af, "block").then(_0x223109 => _0x2c20c8(jsonformat(_0x223109)))["catch"](_0xe5230b => _0x2c20c8(jsonformat(_0xe5230b)));
      const _0x328a4b = {
        text: '✅',
        key: _0x2e6fd1.key
      };
      const _0x8fe22 = {
        react: _0x328a4b
      };
      await _0x10b444.sendMessage(_0x69bd9d, _0x8fe22);
    } catch (_0x23a67f) {
      _0x2c20c8("*Error !!*");
      _0x29424d(_0x23a67f);
    }
  });
  const _0x357ab9 = {
    pattern: "npm",
    react: '🔖',
    desc: "To search npm packages",
    category: "main",
    use: ".npm",
    filename: __filename
  };
  cmd(_0x357ab9, async (_0x3f8a69, _0x5c84cd, _0x16641e, {
    from: _0x37347e,
    prefix: _0x134df4,
    l: _0x4bebb3,
    quoted: _0x51bbe6,
    body: _0x34e6e2,
    isCmd: _0x2c55f3,
    command: _0x101dff,
    args: _0x288d54,
    q: _0x4cccdd,
    isGroup: _0x508ede,
    sender: _0x14cb78,
    senderNumber: _0xdaebf7,
    botNumber2: _0x161432,
    botNumber: _0x2f723f,
    pushname: _0x3553ba,
    isMe: _0x38a5dc,
    isOwner: _0x523683,
    groupMetadata: _0x36686b,
    groupName: _0x4aef1f,
    participants: _0x6b9843,
    groupAdmins: _0x11e2e2,
    isBotAdmins: _0x1ac544,
    isAdmins: _0x12baea,
    reply: _0x2955a0
  }) => {
    function _0x44428c(_0x12f7a4, _0x563041, _0x803451, _0x561f9b, _0x2fb466) {
      return _0x10cc(_0x12f7a4 + 0x2d6 - 0x1a5, _0x803451);
    }
    const _0x202513 = {
      'SXFaf': "Please give me package name.📦",
      'qyCqt': function (_0x34a357, _0x39399f) {
        return _0x34a357 && _0x39399f;
      },
      'keRPa': "*No Result Found. Sorry!!*",
      'tnSsa': function (_0x30a511, _0x18adec) {
        return _0x30a511(_0x18adec);
      }
    };
    function _0x1b603c(_0x4e7430, _0x4a7e31, _0x2f4f37, _0x5742ee, _0x2c73ae) {
      return _0x10cc(_0x4e7430 - 0x25c - 0xf5, _0x2c73ae);
    }
    function _0x49e948(_0x5c20fc, _0x10d22c, _0x58a743, _0x4a61bb, _0x47d50e) {
      return _0x10cc(_0x47d50e + 0x53b - 0x1a5, _0x5c20fc);
    }
    function _0xb92f17(_0x1aff89, _0x93fb55, _0x21461d, _0x35579b, _0x5e3007) {
      return _0x10cc(_0x35579b + 0x513 - 0x1d1, _0x5e3007);
    }
    function _0x1f5842(_0x5000fa, _0x28370d, _0x500540, _0x681989, _0x3971b3) {
      return _0x10cc(_0x28370d - 0xce - 0xf5, _0x5000fa);
    }
    try {
      if (!_0x4cccdd) {
        return _0x5c84cd.reply("Please give me package name.📦");
      }
      const {
        data: _0xeda396
      } = await axios.get("https://api.npms.io/v2/search?q=" + _0x4cccdd);
      let _0x46d1b1 = _0xeda396.results.map(({
        package: _0x2fab38
      }) => '*' + _0x2fab38.name + "* (v" + _0x2fab38.version + ")\n_" + _0x2fab38.links.npm + "_\n_" + _0x2fab38.description + '_').join("\n\n")?.["trim"]();
      if (_0xeda396 && _0x46d1b1) {
        await _0x5c84cd.reply(_0x46d1b1);
      } else {
        await _0x5c84cd.reply("*No Result Found. Sorry!!*");
      }
      const _0x2bb254 = {
        text: '✅',
        key: _0x5c84cd.key
      };
      const _0x3433ae = {
        react: _0x2bb254
      };
      await _0x3f8a69.sendMessage(_0x37347e, _0x3433ae);
    } catch (_0x3146de) {
      await console.error(_0x3146de + "\n\ncommand : npm", _0x3146de);
      _0x4bebb3(_0x3146de);
    }
  });
  const _0x194402 = {
    on: "body"
  };
  cmd(_0x194402, async (_0x19132e, _0x298658, _0x3ad81b, {
    from: _0x880507,
    prefix: _0x42819e,
    l: _0x3e1dc6,
    quoted: _0x1a7181,
    body: _0x1acb17,
    isCmd: _0x5b8598,
    command: _0x38c1f9,
    args: _0x33d8ba,
    q: _0x192857,
    isGroup: _0x4dbbd2,
    sender: _0x275acf,
    senderNumber: _0x66cbbb,
    botNumber2: _0x2b739c,
    botNumber: _0x550af7,
    pushname: _0x19b6e0,
    isMe: _0x507ff1,
    isOwner: _0x40f1a6,
    groupMetadata: _0x5ec936,
    groupName: _0x4e3e1a,
    participants: _0x2039f2,
    groupAdmins: _0x296407,
    isBotAdmins: _0x14a2d8,
    isAdmins: _0x423015,
    reply: _0x51ce05
  }) => {
    function _0x195c5d(_0x3aa367, _0x1189e, _0x2ab2a9, _0xe8cbc8, _0x10481a) {
      return _0x10cc(_0x3aa367 - 0x127 - 0x10d, _0x2ab2a9);
    }
    const _0x2caabb = {};
    function _0x1ff255(_0x25bc55, _0x576f1d, _0x2c156d, _0x5c0016, _0x166a24) {
      return _0x10cc(_0x25bc55 + 0x3bf - 0x10d, _0x576f1d);
    }
    function _0x5ea71f(_0x493b25, _0x2d385d, _0x4b48b6, _0x56488a, _0xe7fa71) {
      return _0x10cc(_0x4b48b6 + 0x271 - 0x10d, _0x2d385d);
    }
    _0x2caabb.nlkLX = function (_0x5611ad, _0x587ac3) {
      return _0x5611ad === _0x587ac3;
    };
    function _0x6f8a2f(_0xf4fe32, _0x221eef, _0x1777db, _0x13c233, _0x506e2b) {
      return _0x10cc(_0x1777db - 0x18 - 0x24d, _0x506e2b);
    }
    _0x2caabb.cabji = "true";
    _0x2caabb.iQiFw = function (_0x515b8b, _0x347482) {
      return _0x515b8b * _0x347482;
    };
    function _0x514eed(_0x491d7b, _0x27135b, _0x336299, _0xcedcf5, _0xe02c62) {
      return _0x10cc(_0xe02c62 + 0x1ff - 0x1d1, _0x27135b);
    }
    if (_0x2caabb.nlkLX(config.AUTO_REACT, _0x2caabb.cabji)) {
      const _0xa55421 = ['❤', '💕', '😻', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥', '💌', '🙂', '🤗', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈', '👋'];
      const _0xfa2f26 = _0xa55421[Math.floor(_0x2caabb.iQiFw(Math.random(), _0xa55421.length))];
      const _0xfa5790 = {
        text: _0xfa2f26,
        key: _0x298658.key
      };
      const _0x13919e = {
        react: _0xfa5790
      };
      _0x19132e.sendMessage(_0x880507, _0x13919e);
    }
  });
  const _0x1fbdba = {
    pattern: "restart",
    react: '♻️',
    desc: "restart bot",
    category: "owner"
  };
  function _0x3b0cb0(_0x32ed4a, _0x15f0b8, _0x43011c, _0x22e356, _0x2600bd) {
    return _0x10cc(_0x15f0b8 - 0x24d, _0x43011c);
  }
  _0x1fbdba.use = ".restart";
  _0x1fbdba.filename = __filename;
  cmd(_0x1fbdba, async (_0x5e0fc1, _0x5e8675, _0x402084, {
    from: _0x27450c,
    l: _0x383866,
    quoted: _0x46afb7,
    body: _0xcc1b04,
    isCmd: _0x52c3e7,
    command: _0x4080db,
    args: _0x694ac,
    q: _0x3ed427,
    isGroup: _0x388b33,
    sender: _0x326998,
    senderNumber: _0x3ce9e4,
    botNumber2: _0x25a6c1,
    botNumber: _0x348e81,
    pushname: _0x14d6c9,
    isMe: _0x2863be,
    isOwner: _0x11396e,
    groupMetadata: _0x57d6a2,
    groupName: _0x29620c,
    participants: _0x3bdd18,
    isItzcp: _0x24139d,
    groupAdmins: _0x4e9383,
    isBotAdmins: _0x54f269,
    isAdmins: _0x303a5c,
    reply: _0x308880,
    react: _0x302cc2
  }) => {
    function _0x2f04e6(_0x3690d9, _0x52c8f7, _0x4f7b51, _0x2ca566, _0x227e2f) {
      return _0x10cc(_0x2ca566 - 0x183 - 0x1d1, _0x52c8f7);
    }
    function _0x1aeadc(_0x5a9784, _0xd4a2bd, _0xbdbb15, _0x1f7613, _0x12daad) {
      return _0x10cc(_0xbdbb15 + 0x3fe - 0xf5, _0x5a9784);
    }
    function _0x1bbc2e(_0x20d5fc, _0x1d20db, _0x5a0bd5, _0x4696d2, _0x5bf286) {
      return _0x10cc(_0x4696d2 + 0xd2 - 0x1d1, _0x20d5fc);
    }
    function _0x2f29be(_0x4a44e1, _0x54726f, _0x4b3b2d, _0x633db5, _0x4f4a75) {
      return _0x10cc(_0x4a44e1 + 0x390 - 0x1a5, _0x54726f);
    }
    const _0x4e9c0d = {
      'ASVrQ': function (_0x1ca46b, _0x58cabe) {
        return _0x1ca46b(_0x58cabe);
      },
      'uiUIG': "*Error !!*"
    };
    function _0x2f35c7(_0x303c85, _0x1c226b, _0x105d17, _0x292b78, _0x133c8f) {
      return _0x10cc(_0x292b78 + 0x279 - 0xf5, _0x105d17);
    }
    try {
      if (!_0x11396e) {
        return;
      }
      const _0x44010a = {
        text: mg.restartmg
      };
      const _0x4ad166 = {
        quoted: _0x5e8675
      };
      await _0x5e0fc1.sendMessage(_0x402084.chat, _0x44010a, _0x4ad166);
      process.exit(143);
    } catch (_0x1dc029) {
      _0x308880("*Error !!*");
      _0x383866(_0x1dc029);
    }
  });