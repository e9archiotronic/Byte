(function (_0x308703, _0x29bd4a) {
    const _0x4024bc = _0x308703();
    while (true) {
      try {
        const _0x52a55e = -parseInt(_0x2e5d(1367, 'RV*a')) / 1 * (-parseInt(_0x2e5d(596, 'HB]D')) / 2) + -parseInt(_0x2e5d(1082, '7cwp')) / 3 * (-parseInt(_0x2e5d(473, '%Hm]')) / 4) + parseInt(_0x2e5d(686, 'g809')) / 5 + parseInt(_0x2e5d(436, '9eB[')) / 6 * (-parseInt(_0x2e5d(1361, '$gL[')) / 7) + parseInt(_0x2e5d(1723, 'd[RV')) / 8 + -parseInt(_0x2e5d(1280, '%5^P')) / 9 + -parseInt(_0x2e5d(191, 'U@vR')) / 10;
        if (_0x52a55e === _0x29bd4a) {
          break;
        } else {
          _0x4024bc.push(_0x4024bc.shift());
        }
      } catch (_0xef096) {
        _0x4024bc.push(_0x4024bc.shift());
      }
    }
  })(_0x2e71, 498978);
  const config = require("../settings");
  const {
    cmd,
    commands
  } = require("../lib/command");
  const fonts = require("../lib/font.js");
  const availableStyles = Object.keys(fonts);
  var os = require('os');
  const fs = require('fs');
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
  const fg = require("api-dylux");
  const cheerio = require("cheerio");
  const axios = require("axios");
  const vm = require('vm');
  const jsobfus = require("javascript-obfuscator");
  const _buruan = JSON.parse(fs.readFileSync("./lib/vajira_rathnayaka.json"));
  function formatDate(_0x391a7f) {}
  async function obfus(_0x393ec3) {
    return new Promise((_0x12ac81, _0x2a4e2b) => {
      try {
        const _0x4d35c6 = {
          compact: false,
          controlFlowFlattening: true,
          controlFlowFlatteningThreshold: 0x1,
          numbersToExpressions: true,
          simplify: true,
          stringArrayShuffle: true,
          splitStrings: true,
          stringArrayThreshold: 0x1
        };
        const _0x3f4439 = jsobfus.obfuscate(_0x393ec3, _0x4d35c6);
        const _0x2c26fc = {
          'status': 0xc8,
          'author': "BYTE",
          'result': _0x3f4439.getObfuscatedCode()
        };
        _0x12ac81(_0x2c26fc);
      } catch (_0xf8ff2a) {
        _0x2a4e2b(_0xf8ff2a);
      }
    });
  }
  function convertToFontStyle(_0x5b633e, _0x593ccc) {
    let _0xb0e2f2 = '';
    if (fonts[_0x593ccc]) {
      for (const _0x2b87d6 of _0x5b633e) {
        _0xb0e2f2 += fonts[_0x593ccc][_0x2b87d6] || _0x2b87d6;
      }
    } else {
      _0xb0e2f2 = _0x5b633e;
    }
    return _0xb0e2f2;
  }
  var desct = '';
  if (config.LANG === 'SI') {
    desct = "එය ඔබ ලබා දුන් දේ සඳහා chatgpt AI මත සොයයි.";
  } else {
    desct = "It search on chatgpt ai for what you provided.";
  }
  var needus = '';
  if (config.LANG === 'SI') {
    needus = "*කරුණාකර මට chatgpt AI හි සෙවීමට වචන ලබා දෙන්න !*";
  } else {
    needus = "*Please give me words to search on chatgpt ai !*";
  }
  var cantf = '';
  if (config.LANG === 'SI') {
    cantf = "*Server එක කාර්යබහුලයි. පසුව නැවත උත්සාහ කරන්න. !*";
  } else {
    cantf = "*Server is busy. Try again later.!*";
  }
  const _0xa873f2 = {
    pattern: "saveno",
    react: '👾',
    desc: "To save acc number",
    category: "other",
    use: ".saveno",
    filename: __filename
  };
  cmd(_0xa873f2, async (_0x5acd36, _0x278cc7, _0x5eb58d, {
    from: _0x4bc9c2,
    l: _0xa8551b,
    prefix: _0x17de30,
    quoted: _0x31cca3,
    body: _0x228f38,
    isCmd: _0x260bca,
    command: _0x5bbd13,
    args: _0x34e714,
    q: _0x5a76aa,
    isGroup: _0x2baa54,
    sender: _0x37f828,
    senderNumber: _0x37f6ba,
    botNumber2: _0x487208,
    botNumber: _0x474a62,
    pushname: _0x2183db,
    isMe: _0x447be9,
    isOwner: _0x1a0e01,
    groupMetadata: _0x40a427,
    groupName: _0x211d1a,
    participants: _0x541bda,
    groupAdmins: _0x5070d9,
    isBotAdmins: _0x4e1b74,
    isAdmins: _0x3d1815,
    reply: _0x6fad05
  }) => {
    try {
      let _0x538dcc = '';
      if (_0x538dcc === '') {
        const _0x117b17 = _0x5a76aa.trim();
        _0x538dcc = _0x117b17;
        await _0x278cc7.reply("Account number recorded: \"" + _0x117b17 + "\"");
      } else {
        await _0x278cc7.reply("A message is already recorded.");
      }
      const _0x51dba9 = {
        text: '✅',
        key: _0x278cc7.key
      };
      const _0x280ac8 = {
        react: _0x51dba9
      };
      await _0x5acd36.sendMessage(_0x4bc9c2, _0x280ac8);
    } catch (_0x4c6635) {
      _0xa8551b(_0x4c6635);
    }
  });
  const _0x2e1812 = {
    pattern: "delno",
    react: '👾',
    desc: "To delete acc number",
    category: "other",
    use: ".delno",
    filename: __filename
  };
  cmd(_0x2e1812, async (_0x4b2834, _0x14b206, _0x5c917e, {
    from: _0x3c215c,
    l: _0x4b00d1,
    prefix: _0x4b9a11,
    quoted: _0x4c4d07,
    body: _0x129088,
    isCmd: _0x4b687d,
    command: _0x5055c7,
    args: _0x108cfa,
    q: _0x24bf7e,
    isGroup: _0x38fa4c,
    sender: _0x123db8,
    senderNumber: _0x2fe7fd,
    botNumber2: _0x1a6615,
    botNumber: _0x3e55da,
    pushname: _0x41f94a,
    isMe: _0x20d2bc,
    isOwner: _0x1c96d2,
    groupMetadata: _0xd2172e,
    groupName: _0x32f075,
    participants: _0x2b0b90,
    groupAdmins: _0x22a620,
    isBotAdmins: _0x212675,
    isAdmins: _0x3b35a3,
    reply: _0x5f10d4
  }) => {
    try {
      recordedMessage = '';
      await _0x14b206.reply("Account number deleted.");
      const _0x18ee9c = {
        text: '✅',
        key: _0x14b206.key
      };
      const _0x187260 = {
        react: _0x18ee9c
      };
      await _0x4b2834.sendMessage(_0x3c215c, _0x187260);
    } catch (_0x471fb9) {
      _0x4b00d1(_0x471fb9);
    }
  });
  const _0x4e3763 = {
    on: "text"
  };
  cmd(_0x4e3763, async (_0x436b34, _0x51c870, _0xbd92df, {
    from: _0x53a113,
    l: _0x24651b,
    prefix: _0x331f23,
    quoted: _0x4cbb5e,
    body: _0x47da61,
    isCmd: _0x5d7f1d,
    command: _0x54a488,
    args: _0x1df98d,
    q: _0x4198ab,
    isGroup: _0x717418,
    sender: _0x2fc80d,
    senderNumber: _0x42aed4,
    botNumber2: _0x160968,
    botNumber: _0x4bdd52,
    pushname: _0x193569,
    isMe: _0x1bda85,
    isOwner: _0xbcb3d,
    groupMetadata: _0x387252,
    groupName: _0x380faf,
    participants: _0x9c72d5,
    groupAdmins: _0x41e68f,
    isBotAdmins: _0x4398a7,
    isAdmins: _0x25d8b4,
    reply: _0x48b544
  }) => {
    if (/(\baza\b|\bsend aza\b|\baccount number\b)/i.test(_0x4198ab) && recordedMessage) {
      await _0x51c870.reply(recordedMessage);
    }
  });
  const _0x49b861 = {
    pattern: "hack",
    react: '☠️',
    desc: "To hack",
    category: "other",
    use: ".hack",
    filename: __filename
  };
  cmd(_0x49b861, async (_0x14068f, _0x880a71, _0x28c307, {
    from: _0x49c25c,
    l: _0x17e1b2,
    prefix: _0x416c82,
    quoted: _0x348f37,
    body: _0x3e69fc,
    isCmd: _0x1a90dc,
    command: _0x21d13e,
    args: _0x30f3d7,
    q: _0x5bf322,
    isGroup: _0x23a38a,
    sender: _0x41a753,
    senderNumber: _0x51254f,
    botNumber2: _0x5e3444,
    botNumber: _0x115b32,
    pushname: _0x1eb0d6,
    isMe: _0xc34392,
    isOwner: _0x5231a2,
    groupMetadata: _0x103fcf,
    groupName: _0x2c9173,
    participants: _0x4ea591,
    groupAdmins: _0x55b003,
    isBotAdmins: _0x20269d,
    isAdmins: _0x144dd6,
    reply: _0x1ac07d
  }) => {
    try {
      _0x880a71.reply("```Injecting malware```");
      await sleep(1000);
      _0x880a71.reply("```transfer into device \n 0%```");
      await sleep(1000);
      _0x880a71.reply("```transfer photos \n █ 10%```");
      await sleep(1000);
      _0x880a71.reply("```transfer successful \n █ █ 20%```");
      await sleep(1000);
      _0x880a71.reply("```transfer videos \n █ █ █ 30%```");
      await sleep(1000);
      _0x880a71.reply("```transfer successful \n █ █ █ █ 40%```");
      await sleep(1000);
      _0x880a71.reply("```transfering audio \n █ █ █ █ █ 50%```");
      await sleep(1000);
      _0x880a71.reply("```transfer successful \n █ █ █ █ █ █ 60%```");
      await sleep(1000);
      _0x880a71.reply("```transfering hidden files \n █ █ █ █ █ █ █ 70%```");
      await sleep(1000);
      _0x880a71.reply("```transfer successful \n █ █ █ █ █ █ █ █ 80%```");
      await sleep(1000);
      _0x880a71.reply("```transfering whatsapp chat \n █ █ █ █ █ █ █ █ █ 90%```");
      await sleep(1000);
      _0x880a71.reply("```transfer successful \n █ █ █ █ █ █ █ █ █ █ 100%```");
      await sleep(1000);
      _0x880a71.reply("```System hyjacking on process.. \n Conecting to Server ```");
      await sleep(1000);
      _0x880a71.reply("```Divice successfully connected... \n Riciving data...```");
      await sleep(1000);
      _0x880a71.reply("```Data hyjacked from divice 100% completed \n killing all evidence killing all malwares...```");
      await sleep(1000);
      _0x880a71.reply("``` HACKING COMPLETED BY BYTE ```");
      await sleep(1000);
      _0x880a71.reply("``` SENDING PHONE DOCUMENTS FOR BYTE...```");
      await sleep(1000);
      _0x880a71.reply("``` SUCCESSFULLY SENT DATA AND Connection disconnected by BYTE```");
      await sleep(1000);
      return _0x1ac07d("*ALL FILES TRANSFERRED TO Hamza*");
      
    } catch (_0x327412) {
      _0x17e1b2(_0x327412);
    }
  });
  const _0x165b00 = {
    pattern: "fontchange",
    react: '👾',
    desc: "To change font of text",
    category: "other",
    use: ".fontchange",
    filename: __filename
  };
  cmd(_0x165b00, async (_0xe6886c, _0x49cb43, _0xc2cdbd, {
    from: _0x5b03a1,
    l: _0x5eae49,
    prefix: _0x56213e,
    quoted: _0x4f8c39,
    body: _0x42ea72,
    isCmd: _0x1201ac,
    command: _0x4d3684,
    args: _0x51b5bb,
    q: _0x50cbeb,
    isGroup: _0x50d4ba,
    sender: _0x53e484,
    senderNumber: _0x359109,
    botNumber2: _0x250441,
    botNumber: _0x566384,
    pushname: _0x2b5233,
    isMe: _0x543052,
    isOwner: _0x577350,
    groupMetadata: _0x5a1b4d,
    groupName: _0x568839,
    participants: _0x1d2d67,
    groupAdmins: _0x1ac9ee,
    isBotAdmins: _0x1937a2,
    isAdmins: _0x29d5f1,
    reply: _0x58afea
  }) => {
    try {
      if (_0x51b5bb.length === 0) {
        const _0x142608 = availableStyles.map(_0x342cc1 => {
          const _0x534180 = convertToFontStyle("BYTE", _0x342cc1);
          return _0x342cc1 + ": " + _0x534180;
        }).join("\n");
        _0x58afea("Usage:\n" + _0x56213e + "fontchange <style> <text>\nAvailable font styles with previews:\n" + _0x142608);
      } else {
        const _0xa9b610 = parseInt(_0x51b5bb[0]);
        if (isNaN(_0xa9b610) || _0xa9b610 < 0 || _0xa9b610 > 34) {
          _0x58afea("Style number should be between 0 and 34. Please choose a valid style.");
        } else {
          const _0x17b562 = _0x51b5bb.slice(1).join(" ");
          const _0x3b8812 = convertToFontStyle(_0x17b562, _0xa9b610);
          _0x58afea('' + _0x3b8812);
        }
      }
      const _0x17a8e7 = {
        text: '✅',
        key: _0x49cb43.key
      };
      const _0x314242 = {
        react: _0x17a8e7
      };
      await _0xe6886c.sendMessage(_0x5b03a1, _0x314242);
    } catch (_0x57e2f7) {
      _0x5eae49(_0x57e2f7);
    }
  });
  function _0x5bdcb7(_0x3c900c, _0x47d62e, _0x53ec97, _0x43a2ed, _0x3bc0e0) {
    return _0x2e5d(_0x53ec97 - 0x2f, _0x3bc0e0);
  }
  const _0x5be3bb = {
    pattern: "nowa",
    react: '👾',
    desc: "To see same type whatsapp numbers",
    category: "other",
    use: ".nowa",
    filename: __filename
  };
  cmd(_0x5be3bb, async (_0x2e3da5, _0x1a3eed, _0x351883, {
    from: _0x2dac0e,
    l: _0x4e3417,
    prefix: _0x2de443,
    quoted: _0x1e5ade,
    body: _0x5c8ccc,
    isCmd: _0x7b43ce,
    command: _0x34e920,
    args: _0xfb582f,
    q: _0x51e053,
    isGroup: _0x474d16,
    sender: _0x31d7ed,
    senderNumber: _0xf53024,
    botNumber2: _0x251d3d,
    botNumber: _0x20e084,
    pushname: _0x12515f,
    isMe: _0x159623,
    isOwner: _0x6ae16d,
    groupMetadata: _0x159d19,
    groupName: _0x1f95ad,
    participants: _0x4cdd05,
    groupAdmins: _0x5e60be,
    isBotAdmins: _0x50e2ee,
    isAdmins: _0x46025f,
    reply: _0xaf95ab
  }) => {
    try {
      if (!_0x51e053) {
        throw "Give a number to search";
      }
      if (!_0x51e053.match(/x/g)) {
        throw "*Example: " + (_0x2de443 + _0x34e920) + " 923072380xxx";
      }
      let _0xf04da7 = _0x51e053.match(/x/g).length;
      let _0x164095 = Math.pow(10, _0xf04da7);
      let _0x4027a3 = [];
      for (let _0x473539 = 0; _0x473539 < _0x164095; _0x473539++) {
        let _0x55bf57 = [..._0x473539.toString().padStart(_0xf04da7, '0')];
        let _0x4ab506 = _0x51e053.replace(/x/g, () => _0x55bf57.shift()) + "@s.whatsapp.net";
        if (await _0x2e3da5.onWhatsApp(_0x4ab506).then(_0x57337a => (_0x57337a[0] || {}).exists)) {
          let _0x586c79 = await _0x2e3da5.fetchStatus(_0x4ab506)["catch"](_0x50c089 => {});
          const _0x2d49d0 = {
            'exists': true,
            'jid': _0x4ab506,
            ..._0x586c79
          };
          _0x4027a3.push(_0x2d49d0);
        } else {
          const _0x567ce9 = {
            exists: false,
            jid: _0x4ab506
          };
          _0x4027a3.push(_0x567ce9);
        }
      }
      let _0x1077c3 = "Registered\n\n" + _0x4027a3.filter(_0x2b2f2b => _0x2b2f2b.exists).map(_0x594347 => "• Link: wa.me/" + _0x594347.jid.split('@')[0] + "\n*• Bio:* " + (_0x594347.status || "description") + "\n*• set on:* " + formatDate(_0x594347.setAt)).join("\n\n") + "\n\n*Not registered*\n\n" + _0x4027a3.filter(_0x54f5f5 => !_0x54f5f5.exists).map(_0x31c070 => _0x31c070.jid.split('@')[0]).join("\n");
      _0xaf95ab(_0x1077c3);
      const _0x48f7cc = {
        text: '✅',
        key: _0x1a3eed.key
      };
      const _0x578854 = {
        react: _0x48f7cc
      };
      await _0x2e3da5.sendMessage(_0x2dac0e, _0x578854);
    } catch (_0x17a477) {
      _0x4e3417(_0x17a477);
    }
  });
  const _0x4a6738 = {
    pattern: "obfus",
    react: '👾',
    desc: "To encrypt js code",
    category: "other",
    use: ".obfus",
    filename: __filename
  };
  cmd(_0x4a6738, async (_0x54c933, _0x32fc5b, _0x10cda3, {
    from: _0x57283a,
    l: _0x12cc1a,
    prefix: _0x4b7bd4,
    quoted: _0x42a718,
    body: _0x3855b7,
    isCmd: _0x2509f8,
    command: _0x2cd9da,
    args: _0x3eb470,
    q: _0x28dd76,
    isGroup: _0x5d2402,
    sender: _0x28aa35,
    senderNumber: _0x5e674e,
    botNumber2: _0x5cac0c,
    botNumber: _0x47d663,
    pushname: _0x245335,
    isMe: _0x13bb28,
    isOwner: _0x453d04,
    groupMetadata: _0x10102b,
    groupName: _0x3bacf8,
    participants: _0x5f13d5,
    groupAdmins: _0x411ebc,
    isBotAdmins: _0x28d6b5,
    isAdmins: _0x20aaf7,
    reply: _0x34fae0
  }) => {
    try {
      if (!_0x28dd76) {
        return _0x34fae0("Example " + (_0x4b7bd4 + _0x2cd9da) + " const Hamza = require('baileys')");
      }
      let _0x3d6cab = await obfus(_0x28dd76);
      _0x34fae0("Success\n" + _0x3d6cab.result);
      const _0x5185a4 = {
        text: '✅',
        key: _0x32fc5b.key
      };
      const _0x57e252 = {
        react: _0x5185a4
      };
      await _0x54c933.sendMessage(_0x57283a, _0x57e252);
    } catch (_0xe17dd3) {
      _0x12cc1a(_0xe17dd3);
    }
  });
  function _0x2e71() {
    const _0x37c30d = ['WPe2W4eUW4y', 'W6qyWRldSN8', 'WQuxW7JdUW0', 'WQ7cHxFdS8kN', 'ja3dRfpcUq', 'W4BcVxmVwq', 'DqyzWO/cRG', 'FMf0j28', 'WRWupSoSbG', 'idmZF3S', 'W6BdUCkqWPldMW', 'W4VdQLCiW4a', 'W45Hrr/cTW', 'W4/dVmknWQRdNW', 'kmkaFNCU', 'W4BcNueBqa', 'W6LeWRuPWPe', 'W69gWRmvWRi', 'ogtcLSoXua', 'rZWhWRxdQq', 'W5SD4Ok5W6/cQa', 'z34TD2C', 'W74aWQD8EW', 'W7RcOmkZWRP1', 'WOHkW58Onq', 'WQKGW60', 'W6hdU0SgW4y', 'W4K/W7dcQuG', 'ACk9W7VdMSoM', 'W7tcT2SGiq', 'WOS+W5e', 'cmoAAXzp', 'WQjDW5hcQ8kc', 'W5tdRKKg', 'cI3dGH/dJa', 'prtcJG', 'W68gW4hcPmof', 'W4xcS8kuWQldMa', 'zGGaWOVcQG', 'i8kjfCkqDG', '4OcL4OoK4OcG4OkF4OcS', 'WO9mWP4XnW', 'W4zPWOSfWQm', '4Oco4OgS4OgM4OoW4Ooa', '4lwjbCosndC', 'W7ubW7lcMSoE', 'sCkFx8k0tW', 'W7OTWQr3BG', 'WOFdVvWmW5S', 'WRbKiSoOoW', 'WR/cHhFdQCkD', 'W4bGWOFdSNW', 'uCkBu3vN', 'WRjoW6j0Eq', 'F8kDW6ldQSog', 'AGmi', 'uxpcICoIBG', 'gSoAAH5r', 'WRmbW6BdNGS', 'WRBcPSk6WQ9X', 'W6iLW6pcQv4', 'WP8OhG', 'WQqMW63dRWa', 'tSkjyh8c', 'rmkPmSkzW5q', 'W59GW4vOW7C', 'a00bDgS', 'W7fRucBcVq', 'b1G+vg4', 'dmogA8knaa', 'WOZcN8kSWR19', 'WQtcKx7dRCkA', 'eCkzW7rDhW', 'WOqVW5WPW5C', 'WO1eW4u5mq', 'WQTcW7tcPua', 'zfJcS8oewa', 'yUc1H+c1PEc2R+c2Rq', 'tCoAgqVcJa', 'h8oEeSkJecfMkCkEnmkFW55paG', 'hKVcNCoptW', 'W6btWRFdTq', '4lEs4lsuooc0RUc3Gq', 'DWimWPJcVW', 'fuBcOG', 'W4JdU1ekW4y', 'uCk+cW', 'W5WaWOT3Eq', 'W5JdUmkbWRC', 'agW3WPVcMa', 'W44sWQDxra', 'WQahW7X7W7W', 'W6rhyCoJwa', '4Ok34Ocp4Oc+4Og44Oof', 'W4BdOLW', 'WQmAW7VdPbS', 'WOL5W4uAuq', 'smknFG', 'WRzRW77dRW', 'uutcTmonuW', 'WPBIL7xcHXxdKq', 'ipghGBRcT8oIWRa', 'DWGaWOVcVW', 'pVcTKAhcK8o9WQe', 'WOi8W4FcTmon', 'WRqQW73dVWK', 'A8oDpf8e', 'WOu8W4xdJZy', 'WRKEWRO', 'W4pdQCkrWQBdGG', 'wmoHkW', 'W67dLSohw1a', 'AxSQEgC', 'WPKVWPxcP8oi', 'iCkjW4H7aa', 'mM/cI8oOzG', 'W6evW4GeWOG', 'W75WW5S', 'W6RcTNeFuG', 'W4eyW4jpWOu', 'nSknW4rQ', 'WR1ppmo6gW', 'WRDNW7SIzG', 'p8oPvWzr', 'sCkBmSkSW6i', 'WO4dWQZcNSoq', 'W57dUmkkWRBdNa', 'r8odFvG', 'd8oqBmkhdG', 'F8ksgW', 'zg9/jgm', '4BwE4BELY5y+Yi0', 'WOe9hfNcJa', 'W7ufxHGo', 'nt3dNhBcGW', 'jNi2CZm', 'WRfxW7VcU8kP', 'W5XKvq', 'x0FcJW', 'W6PzWQldVM4', 'W7dcVvCQAG', 'W6D/WQZdGuG', 'WPv6W4eYta', 'vKdcMCovsG', 'W4ShW5K/W4i', 'W5fLqrVcVq', 'W4abW4RcUSow', 'WR1sW7RcQ8k+', 'W6/cVx4', 'WRNcPSko', 'WQyKW6ddVq', 'x0FcKW', 'o8kzbW', 'zKNdHmoxWQC', 'WO0YW5eZW4u', 'W5L3fqtcPW', 'mIJdLd/dVq', 'sCk+hexcNq', 'kuFcHSoF', 'hCogDHzg', 'WPO8WQRcNSoP', 'W5bTwXtdRG', '4PAcW7lcO8kEWRe', '4Oo54Ogc4OgL4Oc74OoP', 'WOjdW7RcRCk3', 'W6WnuH0y', 'WRHQoCoOpW', 'WOGqWQpcSSon', 'WPW8a1lcHW', 'mmo9WRRdJ8oX', 'b2W3WPBcUW', 'WPPaW4KO', 'ySk9W4ddP8oH', 'WQfEgSouiq', '4PwoFokuOmo/4PEl', 'WP07fW', '4OcY4Ok94OgN4OoH4OgD', 'W5KqW5/cQSob', 'WRVcU8oJWRDZ', 'eIhcQSoqWPO', 'CtSvWQddUW', 'DcGgWRxdRG', 'W595WPZdKLS', 'WReexrm', '4lEN4lA9W4VGTBJGTB0', 'ffNdU0RcSq', '4OcO4OoJ4Ocm4Ocr4OcP', 'zaq+WR7cNW', 'WR0RWO/cO8oD', 'WRr8W5JcTYW', 'w8kPbG', 'uKdcJmoqtG', 'kx0LnKa', 'WPC6hvhcHq', 'W6aaWQ5+', '4OoQ4OgC4Ok+4Ogr4OkO', 'fSkhWPXTaG', 'xmoabCkpiq', 'lr/cNW', 'WR80uryk', 'WPtcICoHemoI', 'jcRcMcxdOq', 'W5xcV0unEW', 'k3JdHxC', 'WRRcHgBdTmkg', 'pxGRF30', '4PAYW7VIL7ObW6C', 'CIyvWQlcIq', 'kUc1Ioc0RUc0N+c1NG', 'W6XZF8k/zmoZW5NcLw3cJwaToa', 'jSkLeCktW6G', 'WQPyW6yufq', 'C8kcomkwW50', 'W6BcR1KpW5q', 'WQy8W4JcQZe', 'W4u7W6VcVeO', 'WRKCWROmba', 'k8oqE8kbfa', 'WQ/cVmkM', 'vv1Tca', 'WPzzW7GzwW', 'baFcQ8ortW', 'a0lcQ8opwq', 'W7ypsZaB', 'WQmxW7VdOW', 'hvKsy2O', 'mSkhW6TsiG', 'W6TDW6iFqq', 'dSopCHzx', 'p8oHE8kKcW', 'WReGW7RdUce', 'qZFIGAC2uq', 'W4esWPu', 'WQreW74', 'W4y0W6u', 'WOa6oL/cPW', 'WRa0W78DW4W', '4P2wbCkBfri', 'ESk8c8osAa', 'WO4JW50/W5e', 'WOVdVs4mW6C', 'tCobcCkpoa', 'W4iRW4xcUa', 'BmofdCknmW', 'bfWJwvK', 'i0ddRvtcSq', 'WRvsW6JcRa', 'bfiDFN0', 'WQKZW5VcUMm', 'W7HKbmoZda', 'W6yiwf0', '4Og64OcS4Ooq4OkO4OcR', 'WRyOkCo8ia', '4Oga4OoM4Ocs4Oc04OgV', 'AEkwLwxILP4Z', 'n1dcKCoWzW', 'W4THWOa', 'osCeWQFdQq', 'W59LqrBcQq', 'W73cVmoiuuO', 'B8kHWRVcGmk6', 'WPldNCoukCk/', 'W6SBWO92Ea', 'WQTqc0DAWQddSCkgEmoFW6pdIG', 'WR5fW6i', 'lIZdKdpdUW', 'pSoGWQtcM8kNoSoOahddOmkgWQmk', 'WOvAW4lcVCkO', 'W67dUumFW4u', 'kmknbSkbCa', 'W5zRxb0', '4Ooz4OcW4OgF4Oku4OgI', 'emkZdSk8sW', 'krpcJmolWRO', 'W4ujW4zqWPq', 'p8kCfmkw', 'z20QEN8', 'W5WuW5v1WOK', 'WPb0W5dcHSkv', 'F8k4zSoWAq', 'jmkaAvmb', 'WOTjW50Z', 'WQKRo8o9nG', 'v1z1fwy', 'WRfAimo6dG', 'W63cVuWMCG', 'WRadh8oLpq', 'kd7dGq', 'w8o9mtRcOa', 'W4qyW5DiWPG', 'WQDxDmkvsq', 'BIGgWONcMG', 'WR8gW7ZdPWC', 'gEkuVKZILAj2', 'pmkje8objq', 'W5JdUmkAWQVcNW', 'zYalWQ3dLG', 'mmknW519eW', 't8kbwmoYqG', 'W5CtW5rcWOq', 'esy/WORcUW', 'eNNdGuJcMW', 'WOVcLSoqlmoL', 'W406W5JcSCoh', 'nuJdO0xcOa', 'omkiovWm', 'iJhdJJ/dPW', 'W6SeWR5MBW', 'iSkQd8kayW', 'smk6lvpcSq', 'W6VdVCoArGu', 'jutdTGZdTa', 'WRiQW5NcQYK', 'W6OeW613Ba', '4Ogq4OoY4OgS4Oo+4Oco', 'W4q1W6ZcUHy', 'W7Xvo8oOca', '4lst4lA9WQJdTbW', 'g3O2WR3cPG', 'W4rQW4FcS8ko', 'WOtcLwddRCka', 'W7tcUxm4za', 'W55/WQqsWQC', 'zSkJF35O', 'kX3cQCoyWR8', 'yeSSfNm', 'fe5/rxe', 'tSkSf0tcVG', 'WPiTW7ZcJHi', 'WQTVpmoTda', 'WRxcU8kRWQTU', 'WPtcU0vDWOq', 'W4v+WPW', 'd8o5EZvR', 'EG8CWOZdMa', '4Ocb4OoQ4Og14Oo/4Okg', 'WQmUlhhcMa', 'W4quW4LdW4e', 'WR9pESoYda', 'W58JW4BcUSko', 'fauM', 'WODFW6mFhG', 'FSk6WRxdNSoM', 'egGTWPRcSG', 'WPG5WPLrW6i', 'W73cVmkDfWS', 'WQpcGmkkWQz7', 'W6WyWR/dTw8', 'w8othSokiG', 'WOynW6pdTqO', '4Oc/4OcV4Och4OgU4Ocz', 'WOZdQSkwWRhdLa', 'W4GTW5BcMwW', 'WQjsW7xcQ8kp', 'r1Cg', 'WPWrW7dcLdu', '4PEdW43ILPeF4PES', 'WPS8W5vhWRC', 'WRDEW7FcQSk1', 'qJHGW4JdOSkmW6JcPvlcTdBdJmkIW7C', 'vSo3jJ0', 'WPXaW4iPoG', 'W7hdUSobzvi', 'W51Vvf3cPa', 'gmkQqgCg', 'WQzmW74zwG', 'WOZdUIyG', 'EmohWPn/fW', 'v8khvg5q', '4Ooj4Ogo4OkF4Okx4OgN', 'W4VdNmklWRhdKq', 'WO0wW4hcLG0', 'W7dcTYCFza', 'kmkvdSkwya', 'W4q5W59oWRm', 'vrxcNSopwW', 'W6LVl8oPmW', 'WQ0XW7ZdUr4', 'WRCntMtcRq', 'W7CEW7zesq', 'W6/WLiksnvNcQW', 'W5DCxGdcGG', 'WP5eW4mVmW', 'eNW9WPBcUG', 'c1uX', 'W7JdSSoDrua', 'itJdMcldUW', 'WRvMWQi', '4lAs4lsO4lsrpUc3Ra', 'vfdcMCov', 'sCk+uKlcUa', 'WP3cObyoW4q', 'W60xArWU', 'pmoYuSkNmW', 'W6SbBrua', 'DsfjWQldTa', 'w8kYqa', 'WP7cQ8kGWO9M', 'yW4bWP7cPq', 'W7BcVwyVDq', 'W7lcTKmnwq', 'DWiDWPFcQG', 'u8o1h0dcUa', 'W4qsW5fnWOu', 'lJBcMcFdVa', 'W7FcQ2e5Bq', 'e8kUs348', 'WQmxW6JcUSk4', 'W4C6W6lcQue', 'W6hdOIC', 'W7VGTQ3GTkdGTjVGTBa', 'wmoytmkdoW', 'WReAW4tcVJC', 'rSkqCW', 'jXpcG8oEWRW', 'W6tcUgC4CW', 'WPiNW5KZW5C', 'WPuDbKlcHW', 'W44uDHah', 'CwJcNxBdQG', 'WOb1W4yGzG', 'j2GODhy', 'W60btr8s', 'cSobDGnn', 'W6KiW6j2yq', 'rSkAzxvd', 'iSoeFX9j', 'W796WR3dMMW', 'W64uWR58zG', 'W4mpWOL5ya', 'WOX2W5VcQCox', 'W7vwDf3dOa', 'kdZcMcxdVq', 'W7RdV8oJWQ9Y', 'pmkCeW', '8lstPFgbGA/cKmQ64Bw4', 'jmkbx1ml', 'WRhcQSk6', 'W5VcVGatWOu', 'WQ7cMmoYcCoI', 'W6dcVxqV', 'od3dIxbV', 'dHpcMCosWRW', 'uSoGjG', 'nSkycCkr', 'W49+W4urWR8', 'zX3cOKFcUG', 'WQm3W7FdTeW', '4Okd4OgQ4Oog4OcE4Occ', 'W4CiW45wWOq', 'W4O/W5VcTmob', 'W7FcRhuLBW', 'lCkyW5LWbG', 'm3JdIYpdQG', 'FYeiWQBcVa', 'CtOuWQ7dRG', 'WRu1W4FcSta', 'WPldSdC6', 'W5K5W40', 'W7OeWQ56EW', 'WRmmh3/cGa', 'W6VcRwSOiq', 'ESkjh8kAW7K', 'W6vEW74rvW', 'WPS9cudcLG', 'WOhcI1FdOmk7', 'WQ/cLCk0WRLZ', 'WQyqj3pcRG', 'W7tdRCkQWRVdSq', 'cCooEann', 'x8kwxSogCa', 'WR8gnLJcJa', 'WQzfW68vrW', 'omkwcCkbDW', 'qY07WRNcOq', 'WRiRWPNcQSoF', 'WQxcUCoWjmo0', 'gaNcTSocsa', 'CrFcSH7dRG', 'W6Oxwa', 'WPy2W43dHty', 'W6xdJce', 'zaKEWP3cRG', 'getcVSkdkG', 'W5bHqrBdRG', 'WP07vba', 'aqdcLSkfga', 'WOFdOuWcW5y', 'WQPDW68Eva', 'bCogDmkkqq', '4PsrWRZcNrma', 'WO/dRWS2W5W', 'WP3cMSoLfa', 'W58tW4aeWOa', '4PwAg+kxNmk/4PEH', 'tCotaSkdoa', 'WQ5iW7m', 'W4mWWQxcVfC', 'W5ldVfW', 'WRnjjSo+ea', 'WQOViCoThG', 'W6GWW5/cR1K', '4Oku4OgV4Oc24Og44OgG', 'W6uaWR0', 'dWlcQmoEWR8', 'W4KYWQxcVf0', 'DYmvWPhcMq', 'v8khs3vb', 'WQNcQSkTWQPi', 'u8kOuKdcVa', 'W7mNW6tcR10', 'W7aeW6XuWOG', 'zCkGW6W', 'A+kvPtNILRDe', 'kSkfW4LSmq', 'W4yJW4W', 'W487W5a7W4C', 'c8oUBdldSq', 'dZTHWOpdPa', 'gCowDSkkla', 'WRRcR8kJWOTK', 'W59RwapcRW', '4OoC4Og54Okd4OkC4Og/', 'WRqOkSo7CW', '4lw54lEN4lsCboc1Mq', '4lEVW4JGTB/GT4lGT50', 'xCkkrCoWCW', 'W7Wfsrym', 'WPtdSd8IW6q', 'w8oFaSklja', 'gwaRWP7cTq', 'W4KLDZO5', 'WQOXW6ddRb8', 'naSjWQ/dSG', 'WRnpmCk/ca', 'W5C+fqtcRW', 'hMvakti', 'WOZdK8o2d8o8', 'WO57eGpcNG', 'WO86W6NcLtO', 'WQHmW6qudW', 'kCkCbSkwCq', 'vZiQWPNdSW', 'W70HW63dPqi', 'w8kCtG', 'xfb4fwe', 'hSowymkAxW', 'wuT+aa', 'cmodFq', 'qSkKcmkWW78', 'WQW5kG', 'gHtdRuDE', 'W68fsqCo', 'xSkaxa', 'dmkLi33cVW', 'WPRcP3GYWQq', 'bSoCyq', 'WQCPWR3cPmoQ', 'ktNdNhz8', 'WOeXW6xcSJe', 'WOldMWq7W6q', 'cCooEdnw', 'WOxcK8otjCoy', '4OgI4OkL4Oct4Og84Oc0', 'WOBWRBk3WPVdH0u', 'zZGkWQJdQa', 'W7ZdSSkvWQ/cKa', 'ybqEWPRcRa', 'WQS5WP4', 'WQzzW6mFwW', 'p8kCc8kqCq', 'A8kchCkrW70', 'WQpcS8kbqKa', '4OcF4Ogd4OgT4Ook4Okx', 'WQWVW4FcSq', 'W7Obud8h', 'W6HvWRm', 'W4v5WPJdNa', 'FY0zWPtcQG', 'iL7dSuFcSW', 'WRu5W4NcRsa', 'ege4WOS', 'q8kTFCoNsq', 'WQmRW6FdUGK', 'WQOQW43dOdi', 'jM9LyxS', 'q8o9Fqvj', 'WRBcJhC', 'v0xcNSkc', 'WQOIW5VcTSoi', 'wvyCWO3cPW', 'W5iCW5nf', 'x8k1pCkAW4i', 'W6WoWQb3Aa', 'WOySfKq', 'W6TfW4xGTQBGTiu', 'lSknWPW', 'wSkku8oG', 'W6SbrqC', 'W4K4WOxcP8oB', 'W7PDWRJdV0q', 'xCoth8kj', 'WP8EW7NcKau', 'sCoiDXLl', 'xmoBESkLaGZdTW', 'WQrdW7Kwua', 'WPqMaetdGG', 'W6uxWQbq', 'W4yVW4VcQCoh', 't8kRu2Xi', 'W4jOWOhdG2u', 'f/c7SyaiWQOT', 'hColsbfu', 'a8kayNzo', 'zYKwWQG', 'yKCjWPRcVW', 'htFcQSozWOK', 'W6NdVCoAv0a', 'W58VW4BcUCoJ', 'FxRcOSoSAG', 'be81WP7cOq', 'rmkBcSkGW5K', 'gCopBanA', 'mtpcG8ojWQS', 'eNKWW5ldOG', 'fevLrxq', '4Oks4Okx4OkL4OcO4OcU', 'WODbeSoleW', 'W69rWRRdVMC', 'W78GWPRdRt8', 'F8kgW7FdVCoq', 'gCosBSkldW', 'hKxcVCowuW', 'WPFcMmo5cCo/', 'W4ehW5K/W4i', 'mZVdKa', 'WRdcVmoBjW', '4OkS4Oke4OcY4OgK4Ok/', 'omkye8kq', 'WQRcU28TDq', 'AfVdO0ZcVq', 'W47dImkIuSkKW5dcV8oyiqxdVuO', 'AHmfWP7cUq', 'pKJdO1q', 'jexdO1lcSW', 'BsehWQlcKq', 'W7WluWCz', 'A8kvgCkeW7K', 'WOXZWPNdPmkF', 'tCkDANHh', 'W4NdGLWcW6W', 'uCo+FYVcTq', 'W7BdMmkUWPFdIq', 'WPGMb14', 'nSkaW5K+eW', 'WOZWQPkrWOTqWPW', 'sCk7q8oMqG', 'h3STWPVcKG', 'WQLhW6NcQSkO', 'W41TWO8dWR8', 'WR0BW7RdTLK', 'tCoYW5BdOCoz', '4Oc74Oc+4OoH4Ok94OcG', 'W6JcVx4/jG', 'ySkvcSkeW74', '4lwGf8k6W6u', 'WRKEWOhcQmo2', 'CqioWPpdPa', 'hsK/WPBcUq', 'WR4xW7tcQCo7', 't8k+ne3cHa', 'wmoHlc/cPa', 'jKhdP2lcTq', 'W5tdQLClW7K', 'WQtcJxVdP8kl', 'xSo3ld3cPq', 'WR46o8k7CW', 'W6SoWQnHEW', 'WOVcV8kiWQ1W', 'bmopeCk0', 'WRpcVCkIWQn4', 'pCkoxdzR', 'wehcNSogwa', 'W5jdtMlcIW', 'W7PmWQtdSMC', 'WRNdISoVAwW', 'WOqVW4e', 'WQnsW7RcRmkV', 'qpcZOAdXHlonw8oR', 'nJddMsldUG', 'kSkdALKb', 'W5ZdS8oGCMK', 'h8kcovOk', 'EZOF', 'W6jDWQ8', 'cmkdW7rNhq', 'iL8CFh0', 'WQqSW7JdUqi', 'W5BdNCkVqa', '4OoT4OkE4Oge4Ogf4Okw', 'WQrzW60aqq', 'WOVcMSkHWR9g', 'FCkytmohqa', 'aLtcUSoerq', 'WOZcNmoHfmo0', 'W4pdMf8PW5G', 'W6X/W4ZdTmkpFCk5rSkNk1Om', 'oNGRCL4', 'W6FdL8kqWORdVG', 'ihS8', 'wCkLBvDZ', 'wWaWWQ7dMq', 'v15obMm', 'WONcJSoW', 'WO/cLCo6dmo1', 'fmofcW', 'W5vQcG/cLG', 'EI9gWQZdVq', 'WP3cN8o5cSoP', 'x8kVuK7cVG', '4PEkW4JILlq+4PEV', 'WRfeW6Cvqq', 'WPxdVsaIW7K', 'WQvsW6NcQSk/', 'W6mfWQ7dVmoPWQFcR8ktpCoHaa', 'W7JWKAgmW5OfkW', 'n0ZdTLlcSq', 'WRDjDoc0JUc3SW', 'aHZdKx90', 'WQ49W5ZdV0K', 'W5qNW5hcP30', 'dmoCDSkAaG', '4Okp4Oot4Ocm4Ogh4Ock', 'WQDkvryz', 'WOucW74ZW5S', 'verSewa', 'WOjQmmoZda', 'WPJdNCkMvmk/', 'gSohDXLm', 'WQbQW7ldSWi', 'DCkDaSkzAW', 'iJ3dIxD+', 'vmoHkYVcSq', '4ls04lww4lwT4lES4lEH', 'WQvwWRVcP8kI', 'W5b5WRuyWRm', 'rG03WO7cRG', 'W7DKyq', 'WRrsomo6bW', 'DtWbWRhdQa', 'WQbEnCo8hq', 'fxlcKmokwa', 'WOJdNCoNbCo2', 'jmkFya', 'W4jQW4tcVmoA', 'x8odh8kdoq', 'za5cWPJcOW', 'jGZdKctdRa', '4lE6W43GTQtGTONGTQS', 'W4yiW5rm', 'hKjmWO/dSW', 'WPyOgLe', 'uSo7pcVdVa', 'khm2Chy', 'W6vaWR3cPeyIWP5LWQaGWPq', 'W4ldS8kCWQddHa', 'iNCSqhS', 'W6SxWRxdTgq', 'WRHKW7Svba', 'itJdMbldQa', 'efyFuwm', 'WRCnW7KfvG', 'WRxcGhVdTSoa', '4Ogk4Ogt4OkZ4OgD4Okc', 'W5JdUmkDWOddNW', 'vSkByG', '4PwsW6/ILyVdRIu', 'WOHmW505oa', 'WPiQgH/cPW', 'kLxdHghcNa', 'W5uCW5nbWOy', 'DbicWO/cRG', 'p0ddQghcRq', 'WPLZW6lcO8k0', 'WRTFmCoXcG', 'WQDEWRNdTx0', 'ECk3W77dM8oZ', 'oSoet8k9lG', 'W7dXJkoeWPX9ia', 'ysrgW4VcVa', 'qYW5WP/cTq', 'wSognZZcPG', 'WOPSvZJcRvSJ', 'jL7dPWBcPa', 'dmoCob5m', 'yCowsmkuDq', 'hgD5WO/cPW', 'WRaUW7ClW4u', 'W4e8W5W2W48', 'WPzRW588Eq', 'W58EW4ieW5a', 'W51JufpcUW', 'xuHPnMS', 'W5qsW6/cVmof', 'WPXaW5a/iG', 'emo6CavA', 'cNGRrhe', 'umozvSoaDG', 'W7j8pCoPda', 'W5OqW73cTmo9', 'fCk8aLxcPG', 'W7XIWQhdRgy', 'h0pdMmkzta', 'W5mNW6a', 'qmkhAwXh', 'b8oJFrPN', 'WRnVW6eXua', 'WOi2W4e/', 'WOmUWPuSW4i', 'oZBcOSouWR4', 'W7GFW7ZcTCo/', 'WQmxW6ZdLbS', 'v8ozg8kl', 'W70TW4BdUfq', 'tCoZkZRcPG', 'A8kmdSkyW6G', 'bSowECkEbG', 'eKJcTCoxuG', 'W7joj8o6sq', 'epgjOAnYWRHN', 'W6nvcW9t', 'pCkqc8kqAW', 'W4NcSe0kW4W', 'W55xWOCEW4e', 'YAdkPUg2KG', '4Ogm4OcM4Okj4OcT4OoF', 'cCkQsLma', 'W48NW4KFwa', 'W7ZdRSkdwva', 'W6PxWRVdQ2G', 'ffNdSe/cUG', 'FSkelCkaW78', 'W6KsWQG1Eq', 'jCkPW45SbG', 'vKdcMCoFra', 'WQm1W57cUIC', 'W5CnW44jWOu', 'WQraW68', 'gehcOG', 'WO8lWP9YnG', 'gmohomkdba', 'W4K2W6pcVuS', 'WQtcUxmGza', 'WOG7re4', 'pv9zW4pdVqFdKSonpJpdLw8', 'WRygW63cTX0', 'lSkvBr8u', 'W79rEdBcGa', 'W5W/W77cUmoi', 'WRDiW7OCta', 'W7FcJ2FdQCkm', 'WROtW6/dPWa', 'WOyMavZcKq', 'WQhdNd8IW5W', 'W7tcT1aara', 'vmo0gflcVW', 'WRZIJAFcHW', 'lg9OBgy', 'zY0iWQxdKq', 'W4CtWR5+wW', 'WReTW7VdSaG', 'WOZcKSoclmou', 'WRaWW7pdVHS', 'W4S1W7u', 'WR5zWRVcRmkZ', 'CYy1WRhdRa', 'a8ovj2Hh', 'WPOOafFcHW', 'W6/WLikBi13cQW', 'W7WeWQn8zW', 'tSknDgLd', 'WQDtW4SSjW', 'W6pcKviTDG', 'qSoiCxTo', 'fKlcR8oSqG', 'xmkkw8o4xG', 'WQjiW74/vW', 'oYKpW67dSa', 'WRu5WOJcVcS', 'W7OeWR5LzG', 'W5aiWQ5Ira', 'sbhdRmofra', 'hSkDDCkltG', 'kepdLu7cTq', 'E8kTaSknCq', 'B8oxgXtcMq', 'W5urW7BcVve', '4lsi4lsMWO7GTRFGTPm', 'oCkiEfWq', 'e3JdRHFdGW', 'wfZcJSostG', 'WRW5pmoOna', 'rrxdQCkAfa', 'WOBdTs8', 'WQfmW74r', 'phaNC2e', 'W4SmW4ZcS8oJ', 'W7BcVxCGEa', 'iLxdQ1xcOa', 'W6ldL38bW4i', 'WRNcSSoCrKq', 'cCoBECkAbG', 'WPr+W6ehua', 'W4mMWQJcSK0', 'WPrXaSoDaW', 'WQ4oW7BdUXq', 'W4TdWQykWPm', 'gmkwcCkqzG', 'W4bwW5v8na', 'BmohW5b3bq', 'aa3dKM7cMW', 'vSoAkSkgoq', 'W73dJSkxWQhdMa', 'W5XLWOehWRm', 'eeRcVG', 'BwVdO0/cUa', 'WR5dW7tcO8k+', 'fftcQmocrW', 'WRy5WPtcHmoj', 'kYZdGga7', 'xSo3hSkynW', 'mxWOzN8', 'oJShWRFdUq', 'jSknW499', 'hSodC8kklW', 'WRS5WOJcP8oD', 'xmk7W7ZdMmor', 'AmkicSoEWQ0', 'WQeSW5W', 'WPldNCoXcCoI', 'WRVcNmk7WOTP', 'WP1Ep8oyja', 'qSoiAw9p', 'hCocmYVcOG', 'WOPaW4i/', '4P2VuSkIW54W', 'FCkBsSo2sW', 'gSkAbmkACa', 'WRaGW6tdSbu', 'tvv0ifG', 't8kgbmoZqG', 'uCoZpslcPG', 'rKbPatW', 'vCotuSokAG', 'A8kaB8o2tW', 'ECkeemkqW4a', 's8oua8klja', '4Okc4OcZ4OoD4Okq4Occ', 'wCkZe1u', 'w0zQege', 'WO9iW5q', 'ffRdJwFcNG', 'WQxcJvNdTSkI', 'kSonB14i', 'WRXQpmoOpG', 'W5qUvdOL', 'l3qPC30', 'W7OeWQXXtW', 's8khqL96', 'W7BdMCoOzea', 'wmkmACot', 'E1vKdwu', 'W4fsWQ/dKeu', 'ySkUzCot', 'wSopwCoXra', 'WQDDW6KEoG', 'WRPSW5tdRJ8', 'WRCPWRtcLKW', 'WPZcNCo1fmoJ', 'FL3dM8kdW7q', 'Dsud', 'a+kvOcFILPic', 'WRi1W4BcUgm', 'WQmMp8oBfG', 'CCorW61MaqLDW6a', 'v8kdtSk6', 'l8kiALW', 'WRbAW74', 'xmkwb8kdoG', 'WR5rW5FcH8k9', 'W586W4pcJxe', 'yFgeGi18deC', 'WQxcL3FdTSoo', 'qmkazM5f', 'n8kUW4P/la', 'EmkGW7ddNmoF', 'dUc1KUc2NEc1MWC', 'cCoKaXW', 'W5y1W7hcVf0', 'W7LzWQldR2W', 'peCYyxW', 'W5iKvb3cQG', 'BCkufCkLW6S', 'iuWDWO/cPW', 'WOuqW4hcPIG', '4lEX4ls/nX/GT5a', 'sCo3pcBdRa', 'neJdRelcGa', 'BW4j', 'Aw4XB38', 'lxWXDW', 'verSnMS', 'W7BcKgeTqW', 'xCopx8o7bW', 'nuJdSKRcRq', 'wSkCzeyh', 'W77dNmkzWQpdKa', 'hh0XWPRcPW', 'xSobrCoXuW', 'i3iSEa', 'WQ9YW4xcVIS', 'WQXQWPlcQmoo', 'W5tdV1ugW4a', 'kNWXC3q', 'W63dISojB0C', 'dYBcImobWR0', 'yCkaW7VdJmoh', 'uhJdSq', 'mmoiwIDh', 'WOJdNCo0bmo8', 'W7GRtdOo', 'vxDLe34', 'b2yQW5/dNW', 'W7PeErOn', 'meKTzhy', 'z8kWW7ddNmk0', '4PwsW6/ILyVdRUkwLa', 'g30TWO/cPG', 'p8k5CxqM', 'wCk0h1hcSq', 'W4iyW4LnWO8', 'WRGJWPFcO8ou', 'gmowAmkcga', 'lqJcMmkBW4q', 'W6pcMxu+ya', 'FmkOggpcNq', 'WONdRfeoW4a', 'W5n9WRldSgu', 'rCkGbSkMW4G', 'W4X5WPybWRy', 'W78exqCz', 'x8k3W7FdQ8oB', 'W5n2ta', 'W5yGWRhdT0W', '4Oon4Ogx4OkJ4Oou4Ogi', '4Ooo4OcM4Okb4Og74Oc+', 'W4qXWQxcQL0', 'W5KpW54', 'idxdNq', 'W71QwYBcOW', 'W7NIL4jVWR1J', 'W7WeWRvH', '44ggEmkcx14', 'WQHdW6CRmG', 'WRibW7ZdVHS', '4OkN4Ogb4OkJ4Oow4OkL', 'o8oCySkhjq', 'ytBdJtVdQW', 'bCoFxSkcdG', 'WQ8QW7RdQaq', 'otddH39/', 'W7PBWRFdR2y', 'WQfiW7Kt', 'uvJcJW', 'W4iMW4vyW7C', 'CrueWPy', 'W4K5W5VcVmoj', 'WPzeW4NcGCkt', 'WRDBW74', 'uePBbMy', 'W5enW5m', 'BZFdMJddVa', 'WPuZWOZcO8oX', 'WOnmW581Aq', 'kmkfEfed', 'WRqxW6/cQSkJ', 'WQJcQSkZWQjL', 'eaxdISoxrq', 'feGRWO3cTa', 'W4a9W6NcRvy', '4OkH4Och4OoU4OgP4OoC', 'W7aEW78+ECk/WRqo', 'lt3dHxP1', 'W5TAWPRdMvG', 'kSkenK8m', 'Ec0hWRldUq', 'WRuSW4tcTJC', 'x8kygSk/W5G', 'eSo8eedcUq', 'W7mDhrae', 'W5ddQmkouea', 'jCkHW6hdJ8o2', 'W7OsvbyC', 'DriEWPm', 'cCkHjmkFrG', 'W4LEqGtcOq', 'rZWFWQ3dUq', 'ffFdSCkdgG', 'W6iEnmo/cq', 'oGlcISoyWRO', 'WQiuW4e+W5O', 'W6SbxHTe', 'qLdcI8ovxW', 'WOZGTONGTBhGTj3GTB0', '4OkT4OgF4Oko4Ood4OcZ', '4lwi4lE/4lAQ4lEK4lwF', 'AahcMCouWQm', 'WRmgW5/cQcW', 'W6iXW7ZdUuW', 'A8kfuW', 'nsRdKtS', 'mJ3dLJldHa', 'WPCOWRFdVKq', 'uSo8letcHG', 'othdH31O', 'xCk+bM7cSG', 'iCkCfCkACq', 'WRpcOCoJWQ91', 'zCkMW73dI8oM', 'pd3cIh5+', 'ybrnWOZcOG', 'W5xdQLGlW5K', 'juZdQ1tdUG', 'WRvEESoaqW', 'wmo2Cq', 'i0JdSuu', 'WORdScSNW7S', 'WQ7cQSktWQH3', 'WQmxW6VdV1S', 'WRlcKMhdPCkj', 'rSoizJPw', 'W7FcSg4QDq', 'WO3cSSofeSot', 'WQKYW7BILjmP', 'WQ7cU8kQWQb7', 'zaO1WRZcGa', 'kWZcJSovW6q', 'W7SyWQddSM0', 'W7PesHSk', 'WR7cRSk3WQ8', 'W6O+sGqe', 'Amkaf8kgWQm', 'relcJ8otrq', 'W7DuyIVcOG', 'WOFdRL4oW50', 'W65kraBcJW', '4lAe4lE54lwcbUc1Pq', 'W4xdNSkOWQRdSG', 'bMhcT8ocva', 'eCkqW5rNkG', 'WO3dIKeoW5K', 'y1JcGCoSzG', 'qCkBq8oXvq', 'pGZdGfHz', 'WPGMn1FcKq', 'W6VcQN4', 'kKldSepdTa', 'd8kCW6Lvkq', 'W7fiWQtdVNO', 'qsiGWRtcHG', 'W6WXW73dSqK', 'WO/dSw89W6K', 'cLuvxvu', 'DWGBWPlcRW', 'BZddMtxdOG', 'W5FdUKOh', 't8oFd8kpDG', 'W6GuE8o+gq', 'vLZcHSotrq', 'WRdcPSkN', 'kCkeAfyH', 'WRVcV8kZWQj1', 'wmoAamokoW', 'oSoAAH5r', 'swBcGSodtq', 'WRhcJxC', 'rSkaBSorFW', 'WQOQW4hdLrK', 'cCkBk8k3va', 'W4a4W6a', 'eKZcVSoncG', 'm8kne8kfDG', 'mINcQCoOWQW', 'W7SiWQbLzq', 'WO0/WPJcPCoF', 'W6WmuH8p', 'px0VWOVcLG', 'W78NWQf0Fq', '4Oc24Okz4Ogu4Ogf4Ooi', 'hCk9DKWf', 'W4mrWOCUW4e', 'W4/dVmknWQBdLW', 'WQpcS8kbvuq', '4Ogj4OoJ4Ok34Ocv4OgS', 'W7SeW5/cN8o4', 'WRiLWPxcOq', 'l8kEf8kbjq', 'WR4QWPVdPSoY', 'W4CVW5e', 'y8ooimkyiW', 'W6CnWOT5zG', 'WPWpWR3cKCo7', 'jcVdJuDI', 'WRjsW7VdUbK', 'od3dMh9I', 'WQRcL8oWgSo6', 'WRbpW7lcOmkO', 'fftdU8kPaa', 'eXFdOh5U', 'WR/cTrWlW5m', 'W4tdRK0k', 'W5CPdLa', 'sSochSkdoa', '4PsbgokvNSk74PAb', 'WOORWR3cPmok', 'dCogkgLh', 'eNa4WPi', '4lEC4lED4lEO4ls1W7u', 'mCkwdSkB', 'kSkenLWm', 'W6VdJSoOu0a', 'WRaOj8oJfa', 'WQTRW7NdVqq', 'd8obnCkufa', 'W5q6W5RcUmoD', '6PYsW4JHTiJjRSQ9', 'nNe4WPlcPq', 'awS2WP7cPW', 'WQa1W4tcQYy', 'WRmxW6tdUrS', 'FSoBdqhcLW', 'dSolBdHD', 'sEkuPJJIL78F', '8yIYJ8oB', 'AJBdNx55', 'W63cS2yI', 'q8odpmkqmG', 'fSkudCknBW', '4Og44Occ4Ogs4Oo04OoE', 'W7XbWRT0yW', 'W7yuW5Siu8kPWR0Y', 'WRuVlSoTnG', '4Oos4Ogb4Oge4Okc4Ogy', 'W6ldT8o3W7yQCH96jbdcISkD', 'haJdI8otWQ8', 'WQtdGxddOCkD', 'WPr1jmoTlq', 'WRjFW7RcUW', 'W7NIL4jVWRXJ', 'WOafW4/cIIa', 'W48tW6dcICoC', 'xsKnWO3cRa', 'W63dTmoltq', 'WRu9lSo7nG', 'sCo6d8kfaW', 'WRHAiSo+gG', 'gN/cSmoqBa', 'r0eSaNS', 'ASkYW7u', 'W45rW558nW', 'W7GjWQjHzG', 'zaKkWP7dQW', 'W5W7c1hcHG', 'zCkvfSkrW78', 'EmkedSkyW7q', 'it3dKq', 'W7CKW5xcJuK', 'WP7cNmo8eSk/', 'W47dVmkqWRhcNG', 'z+kwPCkI4PAUW7q', 'ihdcJSoptW', 'W7FcRgiHiq', 'WOi/W5qU', 'x8o+pIdcQa', 'BZ/dIclcQq', 'zGGdWPxcRG', 'W5ddH0S+W7K', 'W6emWQXYBa', 'xCoth8kjja', 'i8keW4T/fq', '4Ok94Og24OkS4OcV4OoQ', 'W7FcT1pdJSkN', 'u8kjC25h', 'W5pdJw0nW7G', '4Oor4Ooe4Ooi4Oof4Ocx', 'xCkAW5VdMCo+', 'W55vWOpdNga', '4OkN4Okw4OoY4Ooi4Ok7', 'xCkwx8oEEa', 'a8kEDvib', 'y1SKF38', 'o3GKDwC', 'gZ7dJv9T', 'FY0F', 'WRlcHtZcQSoa', 'W6aoW4tcSLm', 'omkeDe8i', 'kCkmCe1k', 'W7GbW63cISoK', 'W5KrW6fiWO4', 'W6CZW4fHWRm', 'WOifW7ldVam', 'WRiwWQJdOXS', 'jN/dQehcTW', 'WQ3cJCofjCoG', 'qfDTfwi', 'WR/cVCoUWRrP', 'BCkIW6e', 'WQtdPhq4Ea', 'W6FcUxmPzG', '4Ogc4Ocw4Ogo4OcD4Ocy', 'reTGcq', 'WOFcShBdQmkl', 'WPqIp8oIjq', '4Oov4Ogb4OoW4Oon4OkX', 'W6a6W6HvWO8', 'vIyGWPdcIq', 'WOxdTdSRW7O', 'WQfAm8o6sq', 'ghCcuxC', 'WQJdKg8kW5i', 'mrTBWOFdUq', 'ACkDb27cUG', 'h8ozjCkSjq', 'W5hdU2G2W7G', 'WQa7oCoqbW', 'kCknW4u', 'umkEphtcHW', 'rKfTbMy', 'ymk9W7ZdGa', 'WPelWQNcGSkq', 'W7GigfhcIW', 'WOSjWRJcG8oP', '4lEj4lEBDW', 'W4XXrHS', 'W60bxbaF', 'WPNcMCk/ASkB', 'W5mfW5hcGLK', 'W4unW4TnWPu', 'CIebWPRcVW', 'W4NdSSkxW6/dSW', 'W7FcR28FBq', '4PwwAUkvS8oMWOG', 'oSkuaG', 'yJJcU8oxWQS', 'WO7dNCoMfCoY', 'WPlcImo4bCoJ', 'vSovcCkzjq', 'umkeBNLh', 'W4zuWOG1WOC', 'A8k/W7a', 'dmoADmkldW', 'AHuu', 'WQuxW6NdTaa', 'W4tdVmkxWQtdLq', 'WP/cKSo7fmoJ', '4OkuxCoRtCkp', 'W5iyW4mEW4e', 'kNWXCW', 'kNuKyIe', 'w1dcKW', 'WR7cH2S', 'WROPWR/cKSoQ', 'bSocFrzp', 'pr7dHhjV', 'w1z1', 'ACo9FZ3cPG', 'WOFdRuWCW40', 'l1tdQeFcTW', 'zwxcQ8ouBa', 'CSo8bCkJga', 'WPb6W6Wkwq', 'yYeoWOJdPq', 'W5FdRK0BW5e', 'W7TrWRJdVcK', 'msGgWQe', 'WReMWR3cQSov', 'pSozi8kCyW', 'W7WeWQ59jG', 'WPX3qqRcOG', 'FdWsWRhdRW', 'W7ZdPmoA', 'WOtcP1FdLSk8', 'WRmsWQ/cK8oV', 'mmo9WRRdJ8oK', '4PAcW7lILj3cJUkuNa', 'awWQWORcUq', 'WRhcIh7dOCka', 't8kdqSo1va', 'a8o0CX14', 'W5SaW4hcPCoB', 'imkiya', 'WRDeW6qxfq', 'idFdSxrO', 'wFcDGz3cVmk6W4O', 'WQ4RWO/cSSoF', 'WRu0W4FcSYC', 'BGG4WRpcQa', 'WRWxW7e', 'kWldQHFdUG', 'WQSVpmo5pa', 'omkzA1yk', 'W4j4WPesWQq', 'WPr4W6GbBW', 'WQ4wW40iW6y', 'W74eW610AG', 'WRqtW7ZdSHm', 'n1tcSCoHBq', 'WOBcLmo4lSo6', '4Ocb4Ooz4OkE4OkL4OkF', 'W55PWOeHWRG', 'WQm7W5JcQ2m', 'W4GsW6nIyq', 'W6WaWRL0', 'W5iKDdRdOa', 'eKBcR8oasa', 'W5L2fqdcPG', 'q0dcICovtG', 'W5CEW4qeWO8', 'WOZIL4lcIokvLCko', 'W41QW4xcUmoD', 'fwa1WPRcUW', 'W4HHwXRcOa', 'WPuihelcGW', 'W7GLWOJcUCol', 'W44VWOJcV8ol', 'WQbEjmoZea', '4Ogd4OgS4OoG4OkW4Oof', 'W4/dH3GBW4m', '4OoC4OoQ4Ocz4Okp4OoL', 'xYeFWRhcMq', 'WPBcILBdNmkg', 'WR0Bj8o6ca', 'W4n8WQadWRu', 'txbafh8', 'WORJGihdR2G', 'W78lW51uWPa', 'dCowDSkleW', 'pSoMWQpcMSkLmmkcbvRdTCkLWPO', 'iuHZ', 'W4NdUXKbW4e', 'W4m+W4dcUmoC', 'WPi+W5GQW48', 'b0BcSCokuG', '4OgH4Ok44Oct4OoL4OgQ', 'WO7dTcePW7G', 'W4VdRCkn', 'W6W2W4NcUSkp', 'W4NdR8ouWRNdHq', 'qmozncHd', 'W45HvbdcUG', 'W6VdUCoEt1W', 'emocFvK', 'oGlcM8oxWRC', 'W6KZxZSd', 'WO44W4y/WOm', 'cCohFCkkqq', 'W4XOEXFcOG', 'W7lGTQhGTPVGTktGTQm', 'jhxcUmoPsG', 'W4fPWPW', 'WPqnW4iTW4W', 'WQ4MWP7dVmkA', '4lwZA8k0WR1g', 'WQz2W6pcLSkz', 'WQSVp8oLkG', 'eflcJ8oytG', 'BqaTWQZdIq', 'W4NdULqnW5e', 'kSoBvmou', 'WONcQCo3m8ov', 'W6axW4jEWOO', 'WONcLCkqWOXw', 'BCofnsVcGa', 'WQpcHhZdRCka', 'Emk3W7tdJCoG', 'j1atWOFcUa', 'o8kzb8ovvG', 'W6uYW7dcN8oc', '4OcX4Ooq4Og54OcQ4OoB', 'p8kiELDl', 'W6hcOg4/Dq', 'uSkyA0Lr', 'WORcJSkkWQDW', 'i8oLsSkmjq', 'wCkvb8kyW6G', 'xCkBwCo9sq', 'W6XEnW', 'WP3cICoYemoL', 'WPGrW45DWOa', 'c8oDA8kiba', 'W7PqWRNdT20', 'mSkxaa', 'q8kqW7pdICo8', 'W7JdRmoEa0y', 'zCobgSkrW7S', 'WOJcMmofbSo6', 'W4tdQKOCW5i', 'bSkiD0Sn', 'W61DWQxdUa', 'W4jPWOKoWRG', 'W4u1W7hcRv8', 'W5LLWOGsWRS', 'WQSOW7e', 'jsNdNIddVG', 'W7LnWQxdSW', 'mmkAbedcUq', 'kSkbCf4x', 'WQLQW4mBwW', 'WPlcTGLzWOnana7dKv0aemox', 'nKCDWRBcMW', 'hMGTWPZcVq', 'WQJcKSk1a8o5', 'WOnLW5xdKIG', 'W4jkWQyTWQu', 'W4VdQGDpWOG', 'WQCVW5ZdV3e', 'smk+e0lcPa', 'W5GFWOfKBa', 'xCkCkuimxmkApSo2bmo4WRm8', 'WReLgSoajG', 'af/cOSoUrq', 'W5y8W6tcPKW', 'WRXimq', 'W7bPWRuUWRq', 'arD5k17cS8k7WP8', 'WR0VpmoQ', 'WRGVWO/cPCos', 'W592rJ/cMG', 'W7WbtGan', 'WRZcHh7dRCka', 'WOywW4COW4i', 'WR3cJNVdQG', 'pxG2yG', 'efpcVmotva', 'WPmYW4u2W5O', 'W5iXW6hcI1C', 'Bmk+W7a', 'W7a0W6THWRi', 'pLSPD2C', 'W4yCW4n3WPu', 'dmoEmLCf', 'WRC+B8oNjG', 'iIRdKsBdVq', 'WOZdNmkWW6pGTiG', 'xmkksSo3uW', 'WR1vW7i', 'sg3cRCoxqa', '4Oo34Oo24OkE4OgR4OkA', 'sCocwa', 'WQCXW40', 'o3GKCMO', 'W6ZcRhm8CG', 's8othmkglW', 'W68EW4/cKSol', 'W4qfWOT8', 'WOBcHLddHCku', 'WPpcJ8oS', 'y3DLbMm', 'F8kHW7a', 'W6SyWRtcRSkR', 'WOW2W4u', 'E8k7e8kvW6O', 'sCo3ldRdOW', 'WRJcMCo2iCoR', 'WOfjW7CWoq', 'mJNdNZm', 'W7bRWR7dRM8', 'W4XLWOKwWRi', 'WQflomo2hq', 'peGHWQ3cKa', 'oX7cTfRdPW', 'ASoZdHZcKG', 'mWVdGgz9', 'c8olAG', 'b8ohnSkdba', 'WRNdJ8obtKa', 'WQNcV8kVWQDO', 'w0/cHCoSuG', 'dSoVAGvE', 'WR0LiSoRmG', 'WPRcJ8o6dq', 'WQO6i8oGjW', 'BCkIW6hcJSo8', 'W4PoWPzyW5y', 'xWNdTmopsq', 'BCkWp8k7W64', 'WQqgW6NdOWe', 'WROVWOJcPq', 'W57dTCoyrGu', 'qXqhWRNcHG', 'rLtcHSodtG', 'W4CNBZiZ', 'd8olCCkDfq', 'WQbEW7KruG', 'WQ7cQSk7WRO', 'W5uKW6NcOuW', '4Ogb4Ogt4OkJ4Ocy4Ocq', 'W7WmWQP/sG', 'WROVpmo6nq', 'WQvsW6pcUW', 'qSk1uCoIsG', 'WO9lW4i6mW', 'palcK8op', 'W65MEthcNW', 'WOjaW7ZcNmk8', 'WP3cLSogomoG', 'W7xdVCodqGG', 'WRDjjW', 'W7NdHmkSWQFdSG', 'W7iqW75DWOa', 'W6/cS8o3', 'WQnsW7ZdUfq', 'W4iXW7BcQW', 'l8kjW4H9dW', 'oaJcH8ox', 'W5mpWOKfW4S', 'dmo+ESkpbG', 'WRyGW6ZdQfi', 'DGGd', 'W5/dRCkvWQRdHa', 'fbW8qhi', 'W5DHta', 'ytSd', 'WPpdKZKVW5y', 'mSkox100', 'W5ZdL8owr28', 'xmkGnmk9W58', 'WQODpmohcW', 'bdldRMn6', 'cCoBECkA', 'lKpdPq', 'W61QW4xcUmoD', 'W5tdMheKW70', 'oWlcN8o6WRO', 'WO9SWOuc', 'W7jjmCo+dq', 'WOWLWRhcJmoW', 'r0XJcxy', 'CtasW7W', 'aGRcM8kl', 'W63cQhmLBG', 'W6HYWOJdLwm', 'hSoVyc59', 'x0dcQ8oxtq', 'W4urW71kWQ0', 'WQFcUfNdVmke', 'W4xdUCozWRddHa', 'WQmiW4/dUZG', '4OoL4OcU4Ok64Ogx4OgD', 'WQ4+W5VcP8ot', 'W4C5W6a', 'da/cVmovWPC', '4OoA4Oc84Okq4Ooe4Ooq', 'WQSVlSoQjW', 'WRfxW7VcHSk1', 'WO8GWRZcGCoE', 'W4RdT38OW7W', 'jmkbW5b7cq', 'W5JdLCoCt0m', 't8o3lYlcUG', 'WQtcH8oplCo5', 'W7xdRxuTW6u', 'y8o8W7JdJ8o8', 'W7nDWQtdTh0', 'W7rQW4hdPG', 'mZtdNwS', 'krFdLmokW7m', 'WRmVW40', 'WRZcUSkWWQ19', 'lIRdGq', 'W4H0W6ZcPvK'];
    _0x2e71 = function () {
      return _0x37c30d;
    };
    return _0x2e71();
  }
  const _0x1181bd = {
    pattern: "leaderboard",
    react: '👾',
    desc: "To see info of leaderboard",
    category: "other",
    use: ".leaderboard",
    filename: __filename
  };
  cmd(_0x1181bd, async (_0x2d92cc, _0x243645, _0x461cee, {
    from: _0x4b6cfb,
    l: _0x2dc178,
    prefix: _0x466ec9,
    quoted: _0x488c87,
    body: _0x326d32,
    isCmd: _0x595b95,
    command: _0x546cd3,
    args: _0x26898b,
    q: _0x2a342f,
    isGroup: _0x38456a,
    sender: _0xe07e00,
    senderNumber: _0x140e74,
    botNumber2: _0x1904a0,
    botNumber: _0x5cf947,
    pushname: _0x348c55,
    isMe: _0x538fb6,
    isOwner: _0x21ec37,
    groupMetadata: _0x2607a5,
    groupName: _0x42ee8e,
    participants: _0xf9932b,
    groupAdmins: _0x47c081,
    isBotAdmins: _0x1a640a,
    isAdmins: _0x4d4ea8,
    reply: _0x1988aa
  }) => {
    try {
      let _0x882d80 = "「 *LEADERBOARD* 」\n\n";
      for (let _0x36840c of _buruan) {
        _0x882d80 += "➸ *ID :* " + _0x36840c.id + "\n";
        _0x882d80 += "*🐟Fish* : " + _0x36840c.ikan + "\n";
        _0x882d80 += "*🐔Chicken* : " + _0x36840c.ayam + "\n";
        _0x882d80 += "*🐇Rabbit* : " + _0x36840c.kelinci + "\n";
        _0x882d80 += "*🐑Sheep* : " + _0x36840c.domba + "\n";
        _0x882d80 += "*🐄Cow* : " + _0x36840c.sapi + "\n";
        _0x882d80 += "*🐘Elephant* : " + _0x36840c.gajah + "\n\n";
      }
      const _0x94afbe = {
        text: '✅',
        key: _0x243645.key
      };
      const _0x36cc4e = {
        react: _0x94afbe
      };
      await _0x2d92cc.sendMessage(_0x4b6cfb, _0x36cc4e);
    } catch (_0x20a16f) {
      p;
      _0x1988aa(cantf);
      _0x2dc178(_0x20a16f);
    }
  });
  const _0x1f4e73 = {
    pattern: "chatgpt",
    alias: ['ai', "gpt", "openai", "zerotwo", "chat"],
    react: '👾',
    desc: desct,
    category: "other",
    use: ".chatgpt ha",
    filename: __filename
  };
  cmd(_0x1f4e73, async (_0xd78ed5, _0x5d9161, _0x14c473, {
    from: _0x2f4753,
    l: _0x27bbba,
    prefix: _0x5ba85b,
    quoted: _0x2894ec,
    body: _0x2916fe,
    isCmd: _0x38954e,
    command: _0x1fc2ad,
    args: _0x32d105,
    q: _0x5df486,
    isGroup: _0x336efb,
    sender: _0x266e6d,
    senderNumber: _0x4737df,
    botNumber2: _0x16711b,
    botNumber: _0x4a2119,
    pushname: _0x2ae9d1,
    isMe: _0x56c28d,
    isOwner: _0x5e0fe2,
    groupMetadata: _0x530404,
    groupName: _0x19e2c8,
    participants: _0x39f07f,
    groupAdmins: _0xc817b1,
    isBotAdmins: _0x164981,
    isAdmins: _0x50a617,
    reply: _0x1fc662
  }) => {
    try {
      if (!_0x5df486) {
        return _0x1fc662(needus);
      }
      var _0x1876b0 = '';
      try {
        _0x1876b0 = (await fetchJson("https://api.maher-zubair.tech/ai/chatgpt?q=" + _0x5df486)).data;
      } catch (_0x9be569) {
        try {
          _0x1876b0 = (await fetchJson("https://api.maher-zubair.tech/ai/chatgpt2?q=" + _0x5df486)).data;
        } catch (_0x30a9c2) {
          _0x1876b0 = (await fetchJson("https://api.maher-zubair.tech/ai/chatgpt3?q=" + _0x5df486)).data;
        }
      }
      return await _0x1fc662(_0x1876b0);
    } catch (_0x18c852) {
      _0x1fc662(cantf);
      _0x27bbba(_0x18c852);
    }
  });
  const _0xf13ebd = {
    pattern: 'sd',
    react: '👾',
    desc: "Genarate image in ai",
    category: "other",
    use: ".sd boy",
    filename: __filename
  };
  cmd(_0xf13ebd, async (_0x25b437, _0x16434f, _0x4998a0, {
    from: _0x37b197,
    l: _0x4c5f76,
    prefix: _0x195614,
    quoted: _0x10ed02,
    body: _0xc14af2,
    isCmd: _0xe0c6ea,
    command: _0x456844,
    args: _0x1295ae,
    q: _0x57c52f,
    isGroup: _0x212c34,
    sender: _0x51524d,
    senderNumber: _0x2e6f03,
    botNumber2: _0x180296,
    botNumber: _0x41993e,
    pushname: _0x5ad808,
    isMe: _0x1fd418,
    isOwner: _0x17a658,
    groupMetadata: _0x21aa13,
    groupName: _0xbbc813,
    participants: _0x111634,
    groupAdmins: _0x55d4fa,
    isBotAdmins: _0x271055,
    isAdmins: _0x27f5ae,
    reply: _0x4674d2
  }) => {
    try {
      const _0x1f64d5 = _0x16434f.trim();
      if (!_0x1f64d5) {
        return await _0x16434f.reply("*_Please provide some text to generate an image._*");
      }
      const _0x80b34b = "https://widipe.com/stablediffusion?text=" + encodeURIComponent(_0x1f64d5);
      const _0x2acb40 = {
        accept: "application/json"
      };
      const _0x533dba = {
        headers: _0x2acb40,
        responseType: "arraybuffer"
      };
      const _0x1dac02 = await axios.get(_0x80b34b, _0x533dba);
      if (!_0x1dac02.data) {
        return await _0x16434f.reply("*Failed to generate an image using Stable Diffusion AI.*");
      }
      const _0x5713d0 = Buffer.from(_0x1dac02.data, "binary");
      const _0x42529a = {
        image: _0x5713d0
      };
      const _0x28730e = {
        quoted: _0x16434f
      };
      await _0x25b437.sendMessage(_0x37b197, _0x42529a, _0x28730e);
    } catch (_0x12173a) {
      await console.error(_0x12173a + "\n\nCommand: stablediffusion", _0x12173a, "*Failed to use Stable Diffusion AI.*");
      _0x4c5f76(_0x12173a);
    }
  });
  const _0x3a1a8e = {
    pattern: "gpt",
    react: '👾',
    desc: desct,
    category: "other",
    use: ".gpt ha",
    filename: __filename
  };
  cmd(_0x3a1a8e, async (_0x458df2, _0x5b5cf1, _0x1aa082, {
    from: _0x3bbb52,
    l: _0x23db4f,
    prefix: _0x523d4a,
    quoted: _0x25a5aa,
    body: _0x3c3994,
    isCmd: _0x276fdd,
    command: _0x312c05,
    args: _0x4bed16,
    q: _0x1a9449,
    isGroup: _0x5c3a82,
    sender: _0x351367,
    senderNumber: _0x4c5891,
    botNumber2: _0x2f1ba9,
    botNumber: _0x3a5ef2,
    pushname: _0x10e13e,
    isMe: _0xd80d4f,
    isOwner: _0x20ab4e,
    groupMetadata: _0x5e399a,
    groupName: _0x3c5869,
    participants: _0x4abc4b,
    groupAdmins: _0x1772ab,
    isBotAdmins: _0x4518fa,
    isAdmins: _0x197ea6,
    reply: _0x266619
  }) => {
    try {
      if (!_0x1a9449) {
        return await _0x1aa082.reply("*_Please provide a text prompt!_*");
      }
      const _0xc0622b = "https://widipe.com/v2/gpt4?text=" + encodeURIComponent(_0x1a9449);
      const _0x357d7a = await fetch(_0xc0622b, {
        'headers': {
          'accept': "application/json"
        }
      });
      if (!_0x357d7a.ok) {
        return await _0x1aa082.reply("*_Error: " + _0x357d7a.status + " " + _0x357d7a.statusText + '_*');
      }
      const _0x31f512 = await _0x357d7a.json();
      const _0x179d04 = _0x31f512.result;
      if (!_0x179d04) {
        return await _0x1aa082.reply("*_No result received from the API!_*");
      }
      await _0x1aa082.reply(_0x179d04);
    } catch (_0x149301) {
      _0x266619(cantf);
      _0x23db4f(_0x149301);
    }
  });
  const _0xa00f4f = {
    pattern: "chatgpt4",
    alias: ["ai2", "gpt4", "openai4", "zerotwo2", "chat2"],
    react: '👾',
    desc: desct,
    category: "other",
    use: ".chatgpt4 ha",
    filename: __filename
  };
  cmd(_0xa00f4f, async (_0x4b2647, _0x527a62, _0x28ef64, {
    from: _0x5bbf3d,
    l: _0x43cb6d,
    prefix: _0x56e451,
    quoted: _0x2d7c97,
    body: _0x41f4fe,
    isCmd: _0x645a60,
    command: _0x235a79,
    args: _0x49c284,
    q: _0x59a854,
    isGroup: _0x2a9659,
    sender: _0x790442,
    senderNumber: _0x4c9184,
    botNumber2: _0x282550,
    botNumber: _0x92ce7b,
    pushname: _0xe71c72,
    isMe: _0x3db0ba,
    isOwner: _0x40f51b,
    groupMetadata: _0x45037c,
    groupName: _0x2e2016,
    participants: _0x48bc58,
    groupAdmins: _0x6fb177,
    isBotAdmins: _0x372553,
    isAdmins: _0x470956,
    reply: _0x31467f
  }) => {
    try {
      if (!_0x59a854) {
        return _0x31467f(needus);
      }
      var _0x102ba1 = (await fetchJson("https://api.maher-zubair.tech/ai/chatgpt4?q=" + _0x59a854)).response;
      return await _0x31467f(_0x102ba1);
    } catch (_0x4e97ae) {
      _0x31467f(cantf);
      _0x43cb6d(_0x4e97ae);
    }
  });
  const _0x42ab59 = {
    pattern: "geminitgpt",
    react: '👾',
    desc: desct,
    category: "other",
    use: ".chatgpt2 ha",
    filename: __filename
  };
  cmd(_0x42ab59, async (_0x1e061b, _0x197ff7, _0xe671b8, {
    from: _0x530c69,
    l: _0x346d27,
    prefix: _0x38dc4e,
    quoted: _0x1b6ede,
    body: _0x3f52f3,
    isCmd: _0x29a664,
    command: _0x7a095e,
    args: _0x269728,
    q: _0x51c8d7,
    isGroup: _0x13172c,
    sender: _0x594b5e,
    senderNumber: _0x4281a1,
    botNumber2: _0x18ec61,
    botNumber: _0x2be641,
    pushname: _0x44b0b4,
    isMe: _0x4cba20,
    isOwner: _0x398f0f,
    groupMetadata: _0x339e8,
    groupName: _0x46f22b,
    participants: _0x1dfa03,
    groupAdmins: _0x257748,
    isBotAdmins: _0x20272a,
    isAdmins: _0x4e6221,
    reply: _0x14f9db
  }) => {
    try {
      if (!_0x51c8d7) {
        return _0x14f9db(needus);
      }
      var _0x5e1a41 = (await fetchJson("https://api.maher-zubair.tech/ai/gemini?q=" + _0x51c8d7)).data;
      return await _0x14f9db(_0x5e1a41);
    } catch (_0x44c941) {
      _0x14f9db(cantf);
      _0x346d27(_0x44c941);
    }
  });
  const _0x3f8cf5 = {
    pattern: "mathsgpt",
    react: '👾',
    desc: desct,
    category: "other",
    use: ".gptmaths 2-3",
    filename: __filename
  };
  function _0x334ad1(_0x2f9d7b, _0x268aa1, _0x58ae7f, _0x4b6173, _0x14651b) {
    return _0x2e5d(_0x268aa1 + 0x206, _0x58ae7f);
  }
  cmd(_0x3f8cf5, async (_0xfebe4e, _0x3fd10d, _0x1e34be, {
    from: _0x3a0d96,
    l: _0x5d9359,
    prefix: _0x2c3599,
    quoted: _0x20a791,
    body: _0x2ab9c9,
    isCmd: _0x56602a,
    command: _0x64bb55,
    args: _0x2b1b08,
    q: _0x246f21,
    isGroup: _0x477171,
    sender: _0x388712,
    senderNumber: _0x2843af,
    botNumber2: _0x46e24d,
    botNumber: _0x29b985,
    pushname: _0x532783,
    isMe: _0x4076f1,
    isOwner: _0x3fa7ec,
    groupMetadata: _0x29f552,
    groupName: _0x38bcf4,
    participants: _0x2be241,
    groupAdmins: _0x1cd50a,
    isBotAdmins: _0x4ee8a4,
    isAdmins: _0x1bcdd2,
    reply: _0x3eec4d
  }) => {
    try {
      if (!_0x246f21) {
        return _0x3eec4d(needus);
      }
      var _0x204698 = (await fetchJson("https://api.maher-zubair.tech/ai/mathssolve?q=" + _0x246f21)).data;
      return await _0x3eec4d(_0x204698);
    } catch (_0x41ae76) {
      _0x3eec4d(cantf);
      _0x5d9359(_0x41ae76);
    }
  });
  function _0x457e14(_0x13b959, _0x3112ce, _0x27903e, _0x1fa488, _0x2ed8b5) {
    return _0x2e5d(_0x13b959 - 0x231, _0x1fa488);
  }
  const _0x49fd2d = {
    pattern: "liyamagpt",
    react: '👾',
    desc: desct,
    category: "other",
    use: ".liyamagpt hello",
    filename: __filename
  };
  cmd(_0x49fd2d, async (_0x299e4a, _0x6a87e2, _0x3472e3, {
    from: _0x90115a,
    l: _0x13de40,
    prefix: _0x1125d4,
    quoted: _0x248ba0,
    body: _0x43cf0b,
    isCmd: _0x39f147,
    command: _0x57698d,
    args: _0x404f1a,
    q: _0x2f5eea,
    isGroup: _0x4eb048,
    sender: _0x5d9ad6,
    senderNumber: _0x41ff5b,
    botNumber2: _0x116974,
    botNumber: _0x12d116,
    pushname: _0x296949,
    isMe: _0x5932fa,
    isOwner: _0x16d094,
    groupMetadata: _0x19c86b,
    groupName: _0x1d7fcb,
    participants: _0x5b1198,
    groupAdmins: _0x23efcc,
    isBotAdmins: _0x326b69,
    isAdmins: _0x41f585,
    reply: _0x80990e
  }) => {
    try {
      if (!_0x2f5eea) {
        return _0x80990e(needus);
      }
      var _0x153f31 = (await fetchJson("https://BYTE-api-7967fdc132a8.herokuapp.com/ai/llama-2?q=" + _0x2f5eea)).data;
      return await _0x80990e(_0x153f31);
    } catch (_0x1f07fd) {
      _0x80990e(cantf);
      _0x13de40(_0x1f07fd);
    }
  });
  const _0x390f53 = {
    pattern: "voicegpt",
    react: '👾',
    desc: desct,
    category: "other",
    use: ".voicegpt hello",
    filename: __filename
  };
  cmd(_0x390f53, async (_0x252eca, _0x197dab, _0x30679b, {
    from: _0x18f09b,
    l: _0x2fd77c,
    prefix: _0x443592,
    quoted: _0x521e22,
    body: _0x492382,
    isCmd: _0xb08346,
    command: _0x5d96cb,
    args: _0x1916d6,
    q: _0x404d69,
    isGroup: _0x3653a1,
    sender: _0x53ba8c,
    senderNumber: _0x2961ce,
    botNumber2: _0x3fa123,
    botNumber: _0x80823e,
    pushname: _0x229c68,
    isMe: _0x5d1b2c,
    isOwner: _0x1b01f1,
    groupMetadata: _0x43252e,
    groupName: _0x49a7d4,
    participants: _0x3d2622,
    groupAdmins: _0x3ee09a,
    isBotAdmins: _0xb65eee,
    isAdmins: _0x151ab0,
    reply: _0x56e81d
  }) => {
    try {
      if (!_0x404d69) {
        return _0x56e81d(needus);
      }
      var _0x2870e8 = (await fetchJson("https://api.vihangayt.me/tools/gptvoice?q=" + _0x404d69)).data;
      return await _0x56e81d(_0x2870e8);
    } catch (_0x342b9b) {
      _0x56e81d(cantf);
      _0x2fd77c(_0x342b9b);
    }
  });
  const _0x4fa248 = {
    pattern: "photoleapgpt",
    react: '👾',
    desc: desct,
    category: "other",
    use: ".photoleapgpt hello",
    filename: __filename
  };
  cmd(_0x4fa248, async (_0x29eeab, _0x1b74d4, _0x30b7fe, {
    from: _0x429340,
    l: _0x319202,
    prefix: _0x24bf3,
    quoted: _0x2d641e,
    body: _0x4e311e,
    isCmd: _0x7e6a61,
    command: _0x101887,
    args: _0x27a4ab,
    q: _0x1a7015,
    isGroup: _0x556ed7,
    sender: _0x1b7846,
    senderNumber: _0x2024b3,
    botNumber2: _0x2931e3,
    botNumber: _0x441f28,
    pushname: _0x3c70ca,
    isMe: _0x17ed53,
    isOwner: _0x1901ad,
    groupMetadata: _0x58d3e6,
    groupName: _0x40f6a3,
    participants: _0x2acccb,
    groupAdmins: _0x5b2f6b,
    isBotAdmins: _0x50dbc9,
    isAdmins: _0x5152c7,
    reply: _0x3d6bde
  }) => {
    try {
      if (!_0x1a7015) {
        return _0x3d6bde(needus);
      }
      var _0x4c0f23 = (await fetchJson("https://api.maher-zubair.tech/ai/photoleap?q=" + _0x1a7015)).data;
      return await _0x3d6bde(_0x4c0f23);
    } catch (_0x4ea003) {
      _0x3d6bde(cantf);
      _0x319202(_0x4ea003);
    }
  });
  const _0x3d0727 = {
    pattern: "timetest",
    react: '🔖',
    desc: "test the time",
    category: "other"
  };
  function _0x247216(_0x5906dc, _0x1f4d70, _0x22b9fb, _0x11af6f, _0xf331b2) {
    return _0x2e5d(_0x22b9fb + 0x3e3, _0x5906dc);
  }
  _0x3d0727.use = ".timetest";
  _0x3d0727.filename = __filename;
  cmd(_0x3d0727, async (_0x47db56, _0x5113df, _0x127cf0, {
    from: _0x4dfa61,
    l: _0x38af28,
    prefix: _0x5b4e62,
    quoted: _0x32f8f1,
    body: _0x447e18,
    isCmd: _0x41aeca,
    command: _0x375635,
    args: _0x2ed184,
    q: _0x36e621,
    isGroup: _0x5a2a9b,
    sender: _0x29e205,
    senderNumber: _0x43bd99,
    botNumber2: _0x222b0c,
    botNumber: _0x242485,
    pushname: _0xf6b311,
    isMe: _0x201c6e,
    isOwner: _0x130e5c,
    groupMetadata: _0x22ca74,
    groupName: _0x5b077e,
    participants: _0x405a18,
    groupAdmins: _0x3960bd,
    isBotAdmins: _0x924bd7,
    isAdmins: _0x23e826,
    reply: _0x1067ee
  }) => {
    try {
      const _0x90a5ad = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      var _0x1ef47a = new Date().toLocaleDateString(_0x90a5ad);
      const _0x7f100e = "📅 " + _0x1ef47a + "\n⌚ " + time + "\n\n" + "👸💬 ɪᴢᴜᴍɪ ɪꜱ ᴏɴʟɪɴᴇ";
      await _0x47db56.sendText(_0x5113df.chat, _0x7f100e);
      if (time == "6:08:01") {
        return await _0x47db56.sendText(_0x5113df.chat, _0x7f100e);
      }
      if (time == "6:08:11") {
        return await _0x47db56.sendText(_0x5113df.chat, _0x7f100e);
      }
      if (time == "6:08:20") {
        return await con.sendText(_0x5113df.chat, _0x7f100e);
      }
      const _0x31c490 = {
        text: '✅',
        key: _0x5113df.key
      };
      const _0x14956e = {
        react: _0x31c490
      };
      await _0x47db56.sendMessage(_0x4dfa61, _0x14956e);
    } catch (_0xe96ee0) {
      _0x1067ee();
      _0x38af28(_0xe96ee0);
    }
  });
  const _0x4110bf = {
    pattern: "readmore",
    react: '🔖',
    desc: "convert message to a readmore message",
    category: "other",
    use: ".readmore",
    filename: __filename
  };
  cmd(_0x4110bf, async (_0x4188bf, _0x48dc37, _0x32b41d, {
    from: _0x1052cf,
    l: _0x4e15dc,
    prefix: _0x3e30f6,
    quoted: _0x4de917,
    body: _0x4e1e88,
    isCmd: _0xa53eb,
    command: _0xdced9c,
    args: _0x4da2f3,
    q: _0x35f510,
    isGroup: _0x29f1f4,
    sender: _0x1364c9,
    senderNumber: _0x4a8cc4,
    botNumber2: _0x2d82bb,
    botNumber: _0x4a2ab9,
    pushname: _0x1161fe,
    isMe: _0x313dc1,
    isOwner: _0x373e0d,
    groupMetadata: _0x4510b9,
    groupName: _0x225626,
    participants: _0x166c9a,
    groupAdmins: _0x1727b8,
    isBotAdmins: _0x2b5e6a,
    isAdmins: _0x52664f,
    reply: _0x41fc67
  }) => {
    try {
      _0x41fc67("​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​" + (_0x35f510 ? _0x35f510 : "blank"));
      const _0x53349c = {
        text: '✅',
        key: _0x48dc37.key
      };
      const _0x34f7c9 = {
        react: _0x53349c
      };
      await _0x4188bf.sendMessage(_0x1052cf, _0x34f7c9);
    } catch (_0x129dbc) {
      _0x41fc67('');
      _0x4e15dc(_0x129dbc);
    }
  });
  const _0x9e7ca6 = {
    pattern: "poll"
  };
  function _0x2e5d(_0x194934, _0x45fbec) {
    const _0x2796c4 = _0x2e71();
    _0x2e5d = function (_0x41f405, _0xba0b0a) {
      _0x41f405 = _0x41f405 - 186;
      let _0x258b9f = _0x2796c4[_0x41f405];
      if (_0x2e5d.WqyUNo === undefined) {
        var _0x3c8960 = function (_0x5b30cc) {
          let _0x135510 = '';
          let _0x33dc25 = '';
          let _0x5a52da = 0;
          let _0xfaea97;
          let _0x187867;
          for (let _0x4ba64d = 0; _0x187867 = _0x5b30cc.charAt(_0x4ba64d++); ~_0x187867 && (_0xfaea97 = _0x5a52da % 4 ? _0xfaea97 * 64 + _0x187867 : _0x187867, _0x5a52da++ % 4) ? _0x135510 += String.fromCharCode(255 & _0xfaea97 >> (-2 * _0x5a52da & 6)) : 0) {
            _0x187867 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x187867);
          }
          let _0xc09f4b = 0;
          for (let _0x33de8d = _0x135510.length; _0xc09f4b < _0x33de8d; _0xc09f4b++) {
            _0x33dc25 += '%' + ('00' + _0x135510.charCodeAt(_0xc09f4b).toString(16)).slice(-2);
          }
          return decodeURIComponent(_0x33dc25);
        };
        const _0x4963f4 = function (_0x4b9648, _0x1a158f) {
          let _0x498775 = [];
          let _0x212814 = 0;
          let _0x21e04e;
          let _0x187d7f = '';
          _0x4b9648 = _0x3c8960(_0x4b9648);
          let _0x1bf4e9;
          for (_0x1bf4e9 = 0; _0x1bf4e9 < 256; _0x1bf4e9++) {
            _0x498775[_0x1bf4e9] = _0x1bf4e9;
          }
          for (_0x1bf4e9 = 0; _0x1bf4e9 < 256; _0x1bf4e9++) {
            _0x212814 = (_0x212814 + _0x498775[_0x1bf4e9] + _0x1a158f.charCodeAt(_0x1bf4e9 % _0x1a158f.length)) % 256;
            _0x21e04e = _0x498775[_0x1bf4e9];
            _0x498775[_0x1bf4e9] = _0x498775[_0x212814];
            _0x498775[_0x212814] = _0x21e04e;
          }
          _0x1bf4e9 = 0;
          _0x212814 = 0;
          for (let _0x4acd37 = 0; _0x4acd37 < _0x4b9648.length; _0x4acd37++) {
            _0x1bf4e9 = (_0x1bf4e9 + 1) % 256;
            _0x212814 = (_0x212814 + _0x498775[_0x1bf4e9]) % 256;
            _0x21e04e = _0x498775[_0x1bf4e9];
            _0x498775[_0x1bf4e9] = _0x498775[_0x212814];
            _0x498775[_0x212814] = _0x21e04e;
            _0x187d7f += String.fromCharCode(_0x4b9648.charCodeAt(_0x4acd37) ^ _0x498775[(_0x498775[_0x1bf4e9] + _0x498775[_0x212814]) % 256]);
          }
          return _0x187d7f;
        };
        _0x2e5d.csUoAW = _0x4963f4;
        _0x194934 = arguments;
        _0x2e5d.WqyUNo = true;
      }
      const _0x47c3c9 = _0x2796c4[0];
      const _0x51e40c = _0x41f405 + _0x47c3c9;
      const _0x12fff9 = _0x194934[_0x51e40c];
      if (!_0x12fff9) {
        if (_0x2e5d.QSOygh === undefined) {
          _0x2e5d.QSOygh = true;
        }
        _0x258b9f = _0x2e5d.csUoAW(_0x258b9f, _0xba0b0a);
        _0x194934[_0x51e40c] = _0x258b9f;
      } else {
        _0x258b9f = _0x12fff9;
      }
      return _0x258b9f;
    };
    return _0x2e5d(_0x194934, _0x45fbec);
  }
  function _0x30ef59(_0x146e6f, _0x442d01, _0x358176, _0x579c51, _0x40145b) {
    return _0x2e5d(_0x358176 + 0x2b9, _0x40145b);
  }
  _0x9e7ca6.react = '🔖';
  _0x9e7ca6.desc = "Poll a message";
  _0x9e7ca6.category = "other";
  _0x9e7ca6.use = ".poll";
  _0x9e7ca6.filename = __filename;
  cmd(_0x9e7ca6, async (_0x3256ac, _0x1ed864, _0x17c8c6, {
    from: _0xb22a8b,
    l: _0x242034,
    prefix: _0x5c1dd7,
    quoted: _0x3173fd,
    body: _0x2ce8d6,
    isCmd: _0x22e794,
    command: _0xbf591c,
    args: _0x390f25,
    q: _0x30201f,
    isGroup: _0x8067a6,
    sender: _0x340a72,
    senderNumber: _0x2d62e2,
    botNumber2: _0x2cf5c2,
    botNumber: _0x53a761,
    pushname: _0x3b5b9f,
    isMe: _0x12f2d5,
    isOwner: _0xffc137,
    groupMetadata: _0x28cfaa,
    groupName: _0x16ae7f,
    participants: _0xf68612,
    groupAdmins: _0x1757de,
    isBotAdmins: _0x1d9237,
    isAdmins: _0x1efa80,
    reply: _0x2f109f
  }) => {
    try {
      let [_0x30714e, _0x459886] = _0x30201f.split('|');
      if (_0x30201f.split('|') < 2) {
        return await _0x2f109f("Mention question and atleast 2 options\nExample: " + _0x5c1dd7 + "poll Who is best admin?|Hamza,Shahrooz,Byte...");
      }
      let _0x5bc9f1 = [];
      for (let _0x515ac4 of _0x459886.split(',')) {
        _0x5bc9f1.push(_0x515ac4);
      }
      const _0x2b2958 = {
        name: _0x30714e,
        values: _0x5bc9f1
      };
      const _0x5377ac = {
        poll: _0x2b2958
      };
      await _0x3256ac.sendMessage(_0x1ed864.chat, _0x5377ac);
      const _0x285c8e = {
        text: '✅',
        key: _0x1ed864.key
      };
      const _0x35357b = {
        react: _0x285c8e
      };
      await _0x3256ac.sendMessage(_0xb22a8b, _0x35357b);
    } catch (_0x3037b5) {
      _0x2f109f('');
      _0x242034(_0x3037b5);
    }
  });