(function (_0x271143, _0x21b4fd) {
    const _0x59e05c = _0x271143();
    while (true) {
      try {
        const _0x26f3e3 = parseInt(_0x7987(2542, 'kNP&')) / 1 * (parseInt(_0x7987(2586, '*]0!')) / 2) + parseInt(_0x7987(2741, 'U#3u')) / 3 * (-parseInt(_0x7987(2544, 'rlQa')) / 4) + -parseInt(_0x7987(2781, 'OGIV')) / 5 + -parseInt(_0x7987(705, '#M)R')) / 6 + parseInt(_0x7987(1875, 'b@WP')) / 7 * (-parseInt(_0x7987(2887, ')P[m')) / 8) + parseInt(_0x7987(2477, 'Bxk^')) / 9 * (parseInt(_0x7987(1732, 'UjS$')) / 10) + -parseInt(_0x7987(2107, 'p4%z')) / 11 * (-parseInt(_0x7987(1482, 'kNP&')) / 12);
        if (_0x26f3e3 === _0x21b4fd) {
          break;
        } else {
          _0x59e05c.push(_0x59e05c.shift());
        }
      } catch (_0x39d975) {
        _0x59e05c.push(_0x59e05c.shift());
      }
    }
  })(_0xad7a, 808038);
  const axios = require("axios");
  const {
    cmd,
    commands
  } = require("../lib/command");
  let {
    img2url
  } = require("@blackamda/telegram-image-url");
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
  const config = require("../settings");
  const fs = require('fs');
  const got = require("got");
  const translate = require("translate-google-api");
  const {
    promisify
  } = require("util");
  const FormData = require("form-data");
  const stream = require("stream");
  const pipeline = promisify(stream.pipeline);
  const fileType = require("file-type");
  const {
    Sticker,
    createSticker,
    StickerTypes
  } = require("wa-sticker-formatter");
  const path = require("path");
  const {
    tmpdir
  } = require('os');
  const Crypto = require("crypto");
  const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
  const ffmpeg = require("fluent-ffmpeg");
  ffmpeg.setFfmpegPath(ffmpegPath);
  async function sswebA(_0x4b06f9 = '', _0x14550b = false, _0xf7a901 = "desktop") {
    _0xf7a901 = _0xf7a901.toLowerCase();
    if (!["desktop", "tablet", "phone"].includes(_0xf7a901)) {
      _0xf7a901 = "desktop";
    }
    let _0x118273 = new URLSearchParams();
    _0x118273.append("url", _0x4b06f9);
    _0x118273.append("device", _0xf7a901);
    if (!!_0x14550b) {
      _0x118273.append("full", 'on');
    }
    _0x118273.append("cacheLimit", 0);
    let _0x5040b9 = await axios({
      'url': "https://www.screenshotmachine.com/capture.php",
      'method': "post",
      'data': _0x118273
    });
    let _0x54694f = _0x5040b9.headers["set-cookie"];
    let _0x122dc4 = await axios({
      'url': "https://www.screenshotmachine.com/" + _0x5040b9.data.link,
      'headers': {
        'cookie': _0x54694f.join('')
      },
      'responseType': "arraybuffer"
    });
    return Buffer.from(_0x122dc4.data);
  }
  async function videoToWebp(_0x4025f9) {
    const _0x2be0a7 = path.join(tmpdir(), Crypto.randomBytes(6).readUIntLE(0, 6).toString(36) + ".webp");
    const _0x230ae5 = path.join(tmpdir(), Crypto.randomBytes(6).readUIntLE(0, 6).toString(36) + ".mp4");
    fs.writeFileSync(_0x230ae5, _0x4025f9);
    await new Promise((_0x3e2aeb, _0x234ba2) => {
      ffmpeg(_0x230ae5).on("error", _0x234ba2).on("end", () => _0x3e2aeb(true)).addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse", "-loop", '0', "-ss", "00:00:00", '-t', "00:00:05", "-preset", "default", "-an", "-vsync", '0']).toFormat("webp").save(_0x2be0a7);
    });
    const _0x4e140a = fs.readFileSync(_0x2be0a7);
    fs.unlinkSync(_0x2be0a7);
    fs.unlinkSync(_0x230ae5);
    return _0x4e140a;
  }
  function toAudio(_0x221ec2, _0x230e56) {
    return ffmpeg(_0x221ec2, ["-vn", "-ac", '2', "-b:a", "128k", "-ar", "44100", '-f', "mp3"], _0x230e56, "mp3");
  }
  function toPTT(_0x3a804c, _0x3d0df3) {
    return ffmpeg(_0x3a804c, ["-vn", "-c:a", "libopus", "-b:a", "128k", "-vbr", 'on', "-compression_level", '10'], _0x3d0df3, "opus");
  }
  function toVideo(_0x3f8342, _0x47b2b5) {
    return ffmpeg(_0x3f8342, ["-c:v", "libx264", "-c:a", "aac", "-ab", "128k", "-ar", "44100", "-crf", '32', "-preset", "slow"], _0x47b2b5, "mp4");
  }
  var desct = '';
  function _0xad7a() {
    const _0x3e17a8 = ['sSoNW7/cNSkg', 'WQFcTSkcl2m', 'W6VdOmoKW6JdPG', 'pSo9W5dcSCoS', 'CSoAoJG/', 'WPZdNCknW64', 'W5RcPvHZWOa', 'cKBcSxJdJa', 'W7lcNfPmWOC', 'vxK5E2m', 'hHPwWRNdQq', 'n+c1T+c2Goc3OUc2Ia', 'oxddSSkeFW', 'tmk5WQTUWPO', 'D8oxvq', 'W51gWPdcSSkq', 'tmozAGJdMW', 'FCkLWQj4WQO', 'tmoYW5tcMSku', 'kqWiW7nz', 'uCkmW74', 'W4RcOCkDcq', 'CSo/kZWI', 'c2xcGYu', 'mmkhtW', 'dIa8jXm', 'W6JcSwT7WR4', 'bc1BWQddHW', 'W67cHxHrWPC', 'vIVcPmknBW', 'dYXVbSoP', 'fs1m', 'WOTWlCoJ', 'lhRdLfTD', 'WPFcOSoj', 'fCoAq3yI', 'ymo7ucldNG', 'WP7cLmkwb28', 'taNcLLpdIW', 'WPtcPmkabG', 'rhC4Cga', 'WO/dOmoFvmkhWOTSW7H6WOHZ', 'DComCaRdUa', 'WRXHACkBEq', 'cCkQpX7dIq', 'W7TBrgZcPa', 'lCozFx09', 'FCoTbq', 'DhSTWOC', 'WOrusSkWiW', 'WPtcPSkmbSor', 'WP0gW6ZcKG', 'fx9o', '4lAq4lsgoq/dNW', 'nfpcRMldMq', 'tgFcKL7dJa', 'bCkYiGJcGa', 'd8o5WQDjEG', 'g8oAwxCj', 'WOv7WO7cRbu', 'FgFcPNldRW', 'W4pcOmoadmoq', 'W6H+y1xcSa', 'BSkCvWev', 'A8kGac8R', 'f8kscW', 'm8kvuSoTdW', 'kaGUWQiS', 'W5RcR8k/WRddPW', 'rmoSW6BdMa', 'pCksrmoLeW', '4lsQ4lEh4lEO4lsZWOG', 'yua+', 'WOpcTbaTEG', 'tuhdLSk0Cq', 'WOZcKICJDW', 'W7lcIubqWOG', 'eHtcKuxdLa', 'qmk5jW0O', 'WOX0ta', 'qmoDW7RcK8kx', 'oaqrW41K', 'Aub3W7a', 'C0bowCoS', 'imoWW7FcLmo+', 'fKGHE2u', 'sIFcJepdKq', 'htH0f8oR', 'W4BdOJuIWRW', 'eN3cKsRdHa', 'W4/dHt8', 'W7LVyvpcVq', 'BSo3dmoZWRO', 'WOL8mSo0W40', 'vatcG2JdJq', 'E20SWPRcKW', 'sSkgWRbRWR4', 'WOxdJSkkW6X0', 'W5O7r2Tl', 'eCkZorNcGG', 'umosidG7', 'W6FcRmo9W7hdRG', 'W47cRCkEba', 'yXZcIg7dHa', 'W7dcQmo1W7e', 'W6pcGSkN', 'WRtcTCkdcw4', 'ogvUzq', 'WRrUF8kRAa', 'uMKVWPNcRq', 'WPhcGmoYWP1g', 'cIj0f8oR', 'CheHEW', 'xadcTmkmFW', 'ACkuqmoZfa', 'xCkaWRC+WRm', '4lwI4lAJ4lE7W6pGT4e', 'xCoWW6xdJSkX', 'dt7cKmo7WOe', 'kZHHWOu', 'WQ7cN8oOW7xdQW', 'W7JcOKPV', 'qmkZW5tcKmot', 'WQZdHCoFWPJcTa', 'EZBcP8kvEa', 'gaRcHmkXW7K', 'BSksqmoPeG', 'tclcJepdLG', 'CCoagCoRW6K', 'cSoqW7nhWRDZWQzpW5a', 'C8kDaqmw', 'bCkcaCojW44', 'WOFdKCknW6yY', 'y8omgCoNW6O', 'EHddJSkDWPS', 'W5ZcVCkcbmoB', 'W5JcGmkYWPxdKa', 'vfj2rG', 'qIdcQmkqBW', 'jtNdV3LW', 'dCkacG', 'v8kXgYqa', 'd+c0Roc0Ioc2GJy', '776V77+o77+N776GWQC', 'nqpdNwrV', 'btLaWQddHW', 'w8oUACoRW7q', 'WO/dMCkBW78', 'W6VcK8kgWPRdHq', 'WPvwp8o2W5O', 'dHBcKM3cIa', 'W5pdRePSlvKniY4eWPWVxW', 'hCo0W7dcK8o6', 'xCoSmSocWPm', 'vvBdNSk2sq', 'AmoenG', 'nJBdIgDr', 'W7JdLSksWOZdRW', '4lw84lsK4ls94lsN4lEW', 'W53cRCkfW5JdOa', 'v3qKF3C', 'AmotvKnq', 'uhCIAMe', '4lAI4lAH4ls64lE8WOe', 'wddcUmkpEq', 'xhyPw0S', 'dYj3dmo8', 'WR/cINXFW5W', 'WQBcVmkVlN4', '4lAz4lEb4lE84lEu4lA1', 'awjTW7hdSG', 'fxq9zvy', 'hSkOW7bo', 'nxnP', 'FCoMW6hcICkl', 'WQLpz8ke', 'hsRcNmkK', 'umkduSoUbG', 'nhJcHCkOW5W', 'BMZdSW', 'CmojDG/dNW', 'W7hcVSoO', 'WRZcHCoZ', 'WQzTrCk0AG', 'b8kshCoyW4m', 'z8opwmoPW7q', 'ac3cQa', 'yCoxxmoVW7m', 'hWCCW4bn', 'gSksgqSx', 'hCoFdwug', 'tL5Hrmot', 'WOtcVrTRlG', 'WRNcHCktWPFdOa', 'q8otgbbA', 'FmoEoIy7', '4lEX4lw8DUc3Koc1Kq', 'W7HqDCk0DG', 'mdVdIrrB', 'uUc1Uoc3P+c2TEc2Va', 'W6pcTCkGjmot', 'W6VcK8kxWPldUG', 'oCoeW4xcKmor', 'rSobW6hdRmkA', 'W7BcGSoV', 'oI4+', '8jwwGpgfH5ZWT5s88y+1TpczTOW', 'W5W8w3rm', 'qvPSrSoy', 'nwn2y0S', 'b8kthmowW5y', 'WO41lCo0W4e', 'W7VcGSoZWOOq', 'r20IAMe', 'W7JcGmoP', 'y8onW7JdRCkO', 'wwfmWQBdJq', 'WRhcNbeXCW', 'kdi0W4jp', 'gdrRbG', 'WPT9k8oIW50', 'g8oAxwyh', 'WPPhwCkNFq', 'ieBdRa', 'DComBa/dTq', 'W7VcKSklWPhdGa', 'BN0XWOe', 'W4vaW7tcMSkr', 'WQhdUSkwW6ro', 'gYZdMfnE', 'tSkwe0W', 'nZ/dJfbn', 'pCo2WQpGTzBGTzS', 'zGZcJwe', 't8oasSo9W6y', 'vWvSW7fP', 'hCk17767776zW7a', 'C1SlEea', 'uSkiWOPQWQC', 'gblcPNVdKq', 'lK/cP1JdLa', '4lEAW4hGT5xGTA/GTja', 'WPXys8kMcG', 'tmkgWRTQ', 'zCkhbqmu', 'jCo1W6RcJ8k7', 'E8oefW8p', 'DCksvCoTfa', 'rc7cHSkWW54', 'CuaHWRuK', 'W4lcGSocW5hdGG', 'pwX0z0O', 'W4e7CCoZW40', 'n8o0W7C', 'CfxdJ8klW7K', 'at8pWRFdJq', 'W4iJsJTm', '8jkGU+kdGpghSQCxvJDz', 'dgtcLIpdUa', 'W5PUW5W', 'nw56', 'WO5TW43cJHe', 'cYjPgG', 'tCoDpaWC', 'sCowmwSU', 'uIhcGmkhBW', 'WQhcMCouWO5c', 'x8o0W7ldVmk+', '4lw64lscW4/dQMu', 'w8oLW6tdUmkM', 'W4ZcVCklfSo6', 'wsRcKq', '4ls64lEy4lAn4lAb4lwK', 'W7dcQK9IWPS', 'fmoCDwSO', 'kmoGA8oCW4G', 'bsb8bSoG', 'W7dcTmo9W6a', 'W5NcTCkAbmos', 'pfH4W4tcKq', 'hM06qSkK', 'W5FcP8kj', 'gVgdQBjj8kggNW', 'W6ZcV0v1', 'WP7cK3qWW64', 'bYncWRZdSa', 'CCoDBq/dNW', 'd8oXW4/cM8kk', 'BcBcLHFdLG', 'nSo+W6ZcLmo+', 'uZBcVSkb', 'z8oxDmoRW7q', 'ovu6W47dHG', 'W7vUBw3cUW', 'rCo7e8oLWRu', 'W4BdHt8LWRG', 'AeddK8kQW40', 'p8oLWQpcG8o0', 'uKfS', 'x8o0W7lcNCk0', 'd8k0pWRcJG', 'BsVcOgFdJa', 'zKpdKG', 'ECoRd8oIWRe', 's8oSx8opW48', 'wmomx8kdWOK', 'lmk1bZVcSa', 'pMRcMINdHa', 'WQRcPmoGW6lcTq', 'e8oExZjs', 'u8o0W6ldMmk3', 'xdBcTa', 'W7BcQmoVW6ldTa', 'W4JdTmopqmkF', 'W7FcMmkrWPNdMW', 'CSkHW6H+DW', 'mCo8W6y', 'yhLczmoV', 'vSoFsgef', 'emkJgWCB', 'w3RdICkWAW', 'tmkwc8oBW5q', 'wSkmWQDN', 'oIbgDMq', 'aIvhWRxdJa', 'W5W7wNrw', 'c0n5Bg0', 'dmkvaIBcNq', 'ldKTW69f', 'AL7dGSkdW44', 'ASortCo+W7q', 'WOtcTaK3CW', 'x8omaHaw', 'W7jRCW', 'eLP/W67dPW', 'W6lcT8k1W7tdQa', 'q8oWW7JdMCkD', 'v8oEWQLRDa', 'eCkehq', 'W6dcG8keW5pdPG', 'huHZr10', 'kmoGs8o8W6G', 'WPJdI8kl', 'W7JcM8kc', 'ASopW6/dKmk+', 'kelcPIVdIq', 'yGZcHuVdKa', 'ghK5ANq', 'xmo2W47cM8k+', 'W4NcTCkjba', 'zCoGW7lcQSkY', 'BCorvCoNW74', 'jcbO', 'f8oVwKCa', 'wmo7W4NcI8kw', 'wCoMfd0B', 'BGBcT8k7Bq', 'bdNcM8kTW7W', 'WOj3emozW48', 'vCogW6/dKmkP', 'e8oqE3GO', 'emk1WRZWSicOjG', 'cCkRnWRcGG', 'WQz7ymkH', 'dt3cHSkQ', 'WQnae8oPW4q', 'W5LgWRJdHa', 'wmksfaKD', 'WRXRFCkHoG', 'WQZcVSobWR10', 'DgpdOmkxCG', 'w8o6W4pcLmkw', 'WRX0DCk2BG', 'kmojW6NcLCol', 'W5GgWRpcKmky', 's8o1WR9lEG', 'm2XYDfa', 'WOrJta', 'WOVdLmoI', '4lEA4lsuEe3GTzm', 'dL3cTr3dLG', 'W6HhWOtcG8kT', 'wSoYW4FcMSot', 'W67cSCkyW7ldPG', '4lsk4lwE4lsfWPS', 'satcJ2pdIq', 'WOflxSkDEa', 'w8oQW5dcMG', 'W7VcNmkaimor', 'WPldL8khchy', 'W4JcPSkwcmor', 't1jZ', 'W4/cUmodW5/dRW', 'B30JWOxcKG', 'qmo7WQzmEW', 'xJfQjgi', 'W5lINAKt8jUNNVgjHOC', 'rmo2W5K', 'W7XWCSkUCW', 'jLH/W4VdRa', 'ACooiY4', '4lEY4lwo4lwY4lAKW7i', 'zSoPWPjhxW', 'W51kW7ZcIYG', 'gcLbWRpdLG', 'y8oHW6tdMmkX', 'rSoBWOfXqa', 'DLe/WRKT', 'W41yWR3cMmkn', 'e8oEva', 'E8o7eSo1WRS', 'mvX/', 'BwtdTmkGxq', 'v8kCBColnq', 'C8oRBCojW6i', 'WPJdI8kBW79I', 'vCohW7pdNmk0', 'oZiDW4Pr', 'bdrOb8oP', 'W7tcKSk6W7xdOG', 'jMX1rh8', 'W7bEtv3cJq', 'W4VcG8ooW4RdVq', 'ms1DWRddRa', 'WOfhWQC', 'WPiSrM8y', 'eGlcHKxdJq', 'jmkXW7dcG8oP', 'egdcGGJdLW', 'pNW7WPNcNG', 'A0bJtCoD', 'W4tcGd81WQS', 'qYRcVCkh', 'WQDXDq', 'WRLNAq', 'rcFcV8klCG', 'WPpcVGO', 'z8oTBCoDW4K', 'ld/dNG', 'yfy+WReK', 'W7xcM8kbomoa', 'ptGRW4LA', 'adtcKmkAW4K', 'W5Cyqxjm', 'zfhdMmkBWOS', 'W5xcGCkKW57dKG', '4lwW4lwu4lsLqhi', 'lMrRCx4', 'ANuuWPyw', 'uJ3cKSkukq', 'WPNcMSkslwm', '4lEx4lAg4lwZ4lwxWPS', 'f+c3IEc0GUc1MEc3LG', 'WOtcN8oEWOne', 'tCkcWQr7WQe', 'W4ldJs0XWRW', 'W5xcT8kPWRK', 'f8oAsq', 'WRzrCCkYFW', 'C8owpXq7', 'W5pcUmklmSom', 'wmosw8oEW7y', 'otpdGvfg', 'W5JdGY06WRW', 'fthcMG', 'uSoPmaJcHG', 'WOz6W4hcRqi', 'cCkaa8oDW4u', 'W57cVCkDeCoz', 'WR1PDK7cUW', 'iJq2W4bx', 'WPVcLSkq', 'fwBcLt/dLq', 'W74oFvW', 'uWdcJ2ddPq', 'eSkjaCoxW4e', 'CxzUF1C', 'W4XdqNpcMq', 'vSotfq0E', 'o0j2DLG', 'DIldPSkkFW', 'hNhcSWFdUq', 'WORdImkgW60U', 'r8oFW7xdISkd', 'mCkmi0VcIG', 'rtZcRSkhBW', 'cSoEthyO', '4lEO4lAwoUc0Hoc1UG', 'xmo6W47cMmkF', 'WOnMW4hcT0C', 'v0DPtmoy', 'W6XTxe/cHa', 'W43cTCodeSob', 'WP1WlSoSW5e', 'xmkmWQ1QWPm', 'W7HlFSkYEW', 'aYX/', 'bIJdLCk9W4K', 'BxSJWO7cNG', 'aZGXW5jh', 'jCoJW6/dGmkN', 'WRhcQSkunKS', 'nujPW53dHa', 'W7tcV8oIW6JdRG', 'WRFcHCku', 'W59GFuRcSa', 'd8oJW6lcLmoY', 'hMpcGYZdHG', 'WOX0lSo0W4e', 'iCkurmoTcW', 'xJ7cRmkfEq', 'xSkkWQ97W78', 'ymo1W5BcJSkq', 'W67cLSkYW4xdIG', 'hcXVf8oR', 'W43cRKf5WOq', 'fSkpaIdcSa', 'venHuCot', 'pYGOW40', 'Cmownc50', 'yxXpD8oZ', 'W7r5WOBcLCk7', 'AH/cP2/dPq', 'W5S1vMK', 'B0aN', 'ct5OaSoP', 'W7/cS8o1WOHF', 'dCk2yG', 'EmomFa', 'bcrTWQ7dJq', 'dmkijcJcQW', 'sadcGgddJq', 'sef5', 'fsNdQLDp', 'smkrWQXZWQi', 'wchcTa', '8kg/JU+7V0FcQ0lcPa', 'W7/cPCoIWOHg', 'hColBhmm', 'WPnGW4dcRsy', 's8kggbyF', 'W4aQuN9T', 'CCoav8oQW4u', 'stlcM0pdHW', 'BuqJWRCI', 'gmoBtuCg', 'WRdcJ8k6', 'm8otnJGX', 'z8o/ba', 'dJ3dISk9W5u', 'WO7dGmk8W5vJ', 'hxxcKINcKa', 'WPXvW6tcLdC', 'w3eGE3a', 'W54Muxri', 'W4NcUmkbfG', 'WO5Rua', 'cCooqMyl', 'CetcJ8kiW5i', 'WRXXEmkRBG', 'r8oYW5m', 'A8osCYy/', 'o8kNwCkHW6XRuJf3WQKaoMC', 'hvrPW4/dGG', 'FmoNaCoyWRW', '4lsDW7tGTzRGT5RGTAC', 'sZpcLupdLW', 'W57cS8k0WPVdSW', 'W5C8qhPF', 'WOn6oq', 'W6VcK8kgWPRdLG', 'qKNdTmklAG', 'CKRdQ8kyW7m', 'bZexW7rB', 'BM/cGrry', 'W4pcGCk2W5BdKG', 'dwbnWRVdIq', 'W55rWRxcMSkk', 'y3ieWQCl', '4lAv4lsS4lsm4lEX4lAR', 'k8o7Ca3dNW', 'W5hcGSkJeSou', 'WOVdMmkpW4PO', 'WOFdNCk2WPRdLa', 'g2HsCMa', 'jd3cHSk6W5e', 'EXxcU2FdSG', 'WQNdUXv6WOddUCkKlCkN', 'lbJdU31L', 'WONcTbbKEG', 'WQxcG8o0WPi', 'g3T3FW', 'WRzwW6hcTt0', 'cSkBddne', 'Dw07', 'bmkrg8odW7m', 'ne06WOJcLG', 'W4pcHCk5W5hdIq', 'WRtcM8oI', 'F8oynZi', 'WO5LkSo1W5O', 'W7RcUf93WPu', 'WRVcGSkNWO5j', 'W4xcJCk0W57dGW', 'W4RcK8kSWQ7dLa', '4lA5koc3TUc1KUc0Qq', 'W6X/Ee7cUW', 'W7JcSCk6W5ldQG', 'zmkLWRldKmkR', 'W7BcLCksWPpdPG', 'W5mJwNPl', 'duJcGNBdHW', 'DSoCsCoR', 'D2uJWO7cNG', 'WRTVCCkJFW', 'W4eQxx91', 'BSksu8o0cq', '4lEMioc2H+c2VEc2GW', 'CuGQWRmr', 'aLJcTGRdPq', 'xmoPWQLcCW', 'WQ4ZlWJdQW', 'W7FcHSkuWOZdQq', '4lsJ4lE1e+c2PUc2JG', 'WOtdISkw', 'W47dMdH2WQ0', 'lCoEDHddNW', 'WOpcNmkpfa', 'vbZcKwe', 'CCorf8oPW64', 'CsNdNKbj', 'qoc1SUc3REc2V+c0PW', 'xxVcLttcNa', 'WPldOSklW6Ld', '4lsV4lwb4lEfEEc2PW', 'WPRcTCkjamoC', 'W5JdKc0KWRW', 'cXpdGhXM', 'EmkerG', 'W4aXn2hcVW', 'FhrKDLW', 'wZRcO8kj', 'FmodjZS', 'AupdJSkb', 'sIBcGfldHG', 'W4lcTCkVW7hdKa', 'wspcUmkwpa', 'xCoFW4pdMSkk', 'FwCSWP/cNG', 'W7BdLSow', 'q0rHA8oW', 'rmo/WRe', 'W5/dSaGUWQa', 'W67dMmkuWP3dSq', 'rhe3EYq', 'rh0SFxa', 'ctvV', 'ofHPWPZdIG', 'ktq3W4ao', 'WPZcH8oTW5q', '4lAq4lwd4lwa4lsQ4ls2', 'CSobW5ZdSCk/', 'sSorytxdNq', 'xmkAgWCu', 'neBcTG', 'zsldPmkAAW', 'Cv0EE3q', 'W4LxWQa', 'W4SkA3Db', 'CdxcOmkMEa', 'W6/cN8kdWPVdRa', 'W4VcOCkbfCoq', 'W7BcGSk7W6xdIG', 'W6VcK8kgWP3dTW', 'z3XSWOtcNG', 'kxxcTIldGG', 'cCkQmZ7cNG', 'x8kabamD', 'WQtdJCkRW7bV', 'mIH+WR3dJG', 'cCoeW6VcISoo', 'WOX2k8oYW5O', '4lsyiUc2V+c0NEc2QW', 'hsjk', 'vCoTW6i', 'fCk1mW', 'nJtdIbqi', 'aCkNWQxcICoL', 'tmkGjH7dMG', 'W5xcSmkSdCon', '4lwE4lATFUc0Toc1UG', 'W47dKZ83WR4', 'W5FcJSoFW4ddGG', 'srBcLq', 'eCkvd8onW5e', 'gSouswTc', 'ExtdTCkrBW', 'FH7cJmkLwq', 'W6/cQLHIWPC', 'usRcK0pdJq', 'Cmownc4B', 'WPnQW53cUG', 'WPf6W4lcTuC', 'xSoooIe2', 'oCo8W6lcH8o+', 'WORcMmkAW6XS', 'qIhcOq', 'W6FdRWSz', 'rCoDW5NcLSks', 'WO7dNCkbW61O', 'W61+FLxcSa', 'W7JcKmo3W5BdIq', '4lE34lEZ4lATa+c0Vq', 'xSkWWPPtWRC', 'yCoetCoRW6a', 'gt5+', 'tmopj8oGWPu', 'W7bREv7cKG', 'W6hcImkIW6/dQW', 'cXT8gCok', 'WOL8mSoLW4y', 'dSoAWQiXWQa', 'WQuVWO/dUe0', 'sYRdG3/cKq', 'WQVcUCoIW6RdQW', 'hSo2W7NdKmo/', 'raGaWPq', 'W5m2Bg9D', 'CCoDBrm', 'rahcOMVdHq', 'wtPnWQy', 'rSoktSoGW6S', '8kUrMEkaL/cWKjJdM0NdGcW', 'ECkduSo+', 'o2L7FW', 'AmodjYq0', 'n0ZcSx8', 'W4dcRXf5DG', 'W7ZcHCkuWP/dPa', 'uCo5W5ddNmkf', '4lA/4lES4lwpW6NdHq', 'WQfgfSopW7W', 'mNr0AvC', '4lEkbEc3OUc0G2m', 'bmkPiqpcIW', 'dmotw2uf', 'WRtcHSo3WP9E', 'xHBcP2hdMa', 'WP7dMCkiW7SG', 'fCkQW7G', 'WPTUW5RcVeO', 'WPJcOSoDWPve', 'nCoQzgui', 'W63cJ8kxWPS', 'bYP+kJe', 'W47cGCk9W6pdLq', 'vdZcO8kuEq', 'wSo7emo6WQ0', 'v8kcWQC', 'mdxdILHn', 'vmoGjsyU', 'WPpdRSkMW7LT', 'ow8J', 'z0tcQ33dIa', 'WRZcM8oMWP1v', 'W7dcKCkpW5JdRG', 'Ae4MWOtcUq', 'BSosps8x', 'W494o8oUW5W', 'ueSuu2e', 'jejXxfm', 'WPP8W4K', 'WPZdGSkOW7nm', 'mZNdJ0ja', 'WOjgWRhcM8kz', 'cJFcM8k/W5u', 'wJZcP8klqW', 'imkkfmoVW5C', 'tMmaWRpdIW', 'c8olsheA', 'W7tcONLpWRm', 'WPfHzCkSdq', 'W7TJE1/cSa', 'W4RdJsK', 'Bmo7e8o1', 'C0a+W7aN', 'W6ZcRmoJW6ldPG', 'dYj1fCoR', 'vNRdI8kRW7W', 'kfhcUW', 'xKTQE8o9', 'WOddNCkw', 'z8ovDr7dLa', 'W6lcVSojW4hdKG', 'ms7cKfTg', 'W5HnWQtcNa', 'W63cUCkTW6BdQa', 'c2lcNYddIa', 'w0pdNSkK', 'wM7dHCo9WOpdMYJcLmowW5/dSrhdVa', 'DmkIWO1z', 'FmkWqmogWQy', 'jeHQW5K', 'ACodiW', '4lAO4lEi4lELW4NGTy8', 'pZeYW5ed', 'k3RcKvHj', 'lI/dGKbn', 'l8kehCokW4u', 'BwddImkLW48', 's04pWRi5', 'B1jcw8o9', 'zCoCgCoIWRe', 'CSo+W7pdR8ku', 'bIL7W4zm', 'CCoDAX7dLa', 'aYLzd8o2', 'o8o0W7O', 'nubVW5NdKa', 'xrxcUSk3sW', 'sCocW5RdQCku', 'sw4jWOtcVa', 'CSohjJG', 'rCoXWOfryW', 'CSoiAXldLa', 'u8o0zKhcJG', 's8o8W5FcKCkF', 'WOldICkHW79f', 'W4pcNCkeW5ldRW', 'C20XWPRcMG', 'W5BcNSk2W7ldLW', 'W4GU77YFW7DA', 'WQ9mumk5na', 'W6dcP8k8cCon', 'fItcM1RcJq', 'W7hcGSkNWQhdPG', 'W65bWPpcG8ke', 'k+c0NEc3LUc3GEc1Tq', 'x8ohbmo3WRm', 'h2LCsx4', 'p0v2W5xdMG', 'W4yGwNzz', 'uCkAaWes', 'WRBcS8k+mKC', 'eCknb8oAW4e', 'WQn3F8kWFW', 'WP/dNCklWRa', 'A1xdGmklW54', 'W655DL3cUW', 'cdxcKa', 'ruJcGhtdGq', 'tdP0dSoV', 'BCkqWQj5WRC', 'W4/cV2fpWOO', 'jbhGTOVGTkBGTlK', 'BSkdt8o5kG', 'W7xcUmoIW7hdOG', 'xSkCgry7', 'W5NdLgWJWQS', 'W5/dJZKKWRu', 'qXFcMhtdNa', 'omkVi8o4W74', 'jJm+WOvu', 'nrf8W47dJa', 'd+c0P+c0M+c0REc0SW', 'WOb8cCkQcq', 'W4jxWPNcTmk4', 'W5NcU8kaf8oq', 'rNK5AMe', 'cddcKspdIa', 'WOtdJSkgW7PL', 'EKxdVCkgyW', 'gmkWWRD/WQy', 'd8kGW6ap', 'C1/dKSkB', 'Fmo2bCk2WQy', 'qeq/WRqn', 'isHOemoV', 'W4JcNmkUW4tdTW', 'W4JdGtGZWR4', 'B+c3SUc2J+c0Loc3Qq', 'q8o8W4C', 'qs50dSo+', 'W4y2q34', 'ASo1gZm0', 'bmoMiGxcJG', 'WOb9wSkIhq', '4lAr4lED4lw74lEoWOG', 'CxORWPpcNG', 'qCoLW4xcJCkh', 'W43cRra', 'W7rUn1xcRa', 'EmkisCo8cq', 'WPVdMCkBW6PL', 'Amk8y8ookq', 'v0a9WRW6', 'W4VdJ8koW7b0', 'WOpcT8onWRnI', 'WPTNn8oT', 'a8kmcW', 'W6LRDvBcUW', 'WR1SDCoK', 'wSoMEatcIG', 'EmoRe8o+', 'fMW0BMe', 'vSoiwxSn', 'hmoWW67cKmon', 'fxpcLqddHa', 'Fmklra', 'rGZcJwhdHG', 'raZcKNtdHa', 'oIdGT57GT4ZGTP4', 'W7ZcOSknW63dVG', 'qZZcI8knBG', 'fCkEb1y', 'nmo+W7tcJSo3', 'E8oKqmoNW6O', 'W6/dJZS4WRu', 'W6VcPg5JWPq', 'E3OpWOZcIa', 'z8owsCoHW6K', 'r8oZvI/dVW', 'W78Qv3jz', 'zIRcRLddRq', 'q8otaW1A', 'WOxdKY8KWRW', 'WPr7rSk3hW', 'oYlcVmkEW6i', 'bCkMWQdcI8keAvn+s8kF', 'EgpdTa', 'qSo/WRPgFG', 'WODzW4FcUIS', 'W6RcGSkoWP3dQa', 'xConWRT1vW', 'WOxdJmkjW7DS', 'vCoyx3q', 'wdlcQCkJCG', 'hZvAWP/dQq', 'W47cOSknnCob', 'tCkHrCo6fa', 'FmoBoIOP', 'WQbCaW', 'W4hcHCkJW4hdGW', 'WPlcVH86AW', 'WRL8o8o3W6C', 'BgW0WP7cVa', 'EJBcVSkrFq', 'hZLPcSoG', 'B1JdICk1xq', 'W7/dKGmIWP0', 'iuZcSgBcGa', 'WRpcPSkvWPhdTq', 'kGjun8ol', 'zmomvCoRW6K', 'gUc1OUc3REc3Uoc2Sa', 'WR1UFmkRAa', 'W4m6wNHt', 'zSo1dCoXWQC', 'WRpcN8oRWP9E', 'W594xM/cQq', 'WQNdRE++U8kXWQC', 'E3hcP3VdGq', 'WOzXWOBcQ8kX', 'huhcOXVdMW', 'WQLbBSkm', 'W4/cHNT4WQO', 'vmoSW4xdTmkd', 'ptFdLCkQW58', 'D8oxvCkZ', 'tLXUa+c0Mq', 'WRzwr8ktaG', 't8onWRb9WQa', 'W4vhrvBcMW', 'tvhdOmkUW7K', 'zSoDya/cIG', 'uXBcGgpdJq', 'Afv5', 'tCo9vZW', 'WRFcNmkxWPK', 'uLVdVSkgFq', 'vdlcUCkhEW', 'ESoiumoHW7u', 'W7VcK8oPWPjr', 'W7FcRSoSW6NdOG', 'cCkOjHJcKW', 'WO7dGmkB', 'sCkbtN0c', 'r2OjvwO', 'WRfJzmkHFq', 'fMdcLsRdSq', 'e8oMn03cKW', 'raRcGCkYtW', 'zHddH8kDW5q', 'W4JdHmkJW5RcHG', 'yKxdHCkgW5q', 'BSo7aSoYW6u', 'rmoIkriR', 'c8oira', 'gt9i', 'W5fCCgNcMq', 'fgdcHt4', 'WRvNza', 'uCkoWQPM', 'W5NcOKbZWQe', 'W6hcG8kwW67dQG', 'WPD8uCkQhG', 'vmksgZ0B', 'mwLZire', 'fx/cHg3dKG', 'yKddKCkkW5u', 'WPBcH8oUWPXE', 'idXbg8oG', 'mur+W5xdJa', 'WPLOW5VcUaa', 'W6j9WOpcU8kZ', 'WOzVwCk3eW', 'pwzSW6BdLG', 'ASkusmoPaG', 'xmkwbq', 'jmoKW5NcMmom', 'WPhcRHeTEG', 'bun2WPZdLW', 'W43cVCkaWPldJW', 'WOfHxSkTfG', 'Ed/dTmkgEa', 'jJeYW5yn', 'W6JcG8kiWORdPG', 'WP5GmCo0W40', 'W4NcTCkaW5ldLW', 'B8o9d8oMWR4', 'fSopshWA', 'yNhdTq', 'W7HYyW', 'W7pcNLH0WRG', 'W5jsDNVcSa', 'o8owiYiX', 'gZ4pWQBdHW', 'WPlcT17GT4JGTOu', 'A8opDHu', 'ECoKmJ0/', 'W4hdVCk9W4Xp', 'W7dcV8oSW6VdTa', 'BMJcNGaD', 'W5FcPmoD', 'ccHOaa', 'hxBdLq', 'BKa0', 'cubZr8kw', 'WQhcJWSkwa', 'WO5+qmk2cG', 'kI4OW4re', 'WR7cK8o1W5q', 'xSoqW7hcMSk6', 'x8o5AGm', 'W4XzyhFcJW', 'khLTyW', 'BgKSWO3cLa', 'xmo7W5tcNmkg', '77YV77Ym772/77+XyW', 'WOj9W4i', 'W5hcGSkhW4VdIq', 'cxxcNsldLW', 'W6hcVSo+W6tdOa', 'pdG1W4fU', 'ECoKmcqV', 'dSkLmYdcGG', 'iHGjW6zM', 'W5pcUCkjfCoA', 'aoc3V+c0PctGTjK', 'W5VdHs8IWRW', 'ddDIAg0', 'krSYW6nk', 'aSo7WRO', 'E8ovxa', 'sYlcMLpdRW', 'DrZcTCk1tG', 'gZ5w', 'D0NdKCkk', 'toc3L+c2Ooc3KUc1Ha', 'rSkZW4NcKSks', 'oflcMstdKa', 'W73cJCk7jSof', 'gh/cNJVdHa', 'WRFcGSkiWP/dRq', 'W5ZcL8kW', 'vCoLW5FdNmkY', 'B8kMWODPWOy', 'vmoXW5xdKSk9', 'dCkeoIVcNq', 'C8oqumoTW6W', 'W7eGxw1D', 'WRhdUWa2WOe', 'WPNcT8ojWR0', 'rc7cL8k7', 'WPfQW5W', 'eSkjlmodW4S', 'WQ3dP8kPW4zw', 'qmoWWQefyG', 'WPhdMCkSefS', 'iLrPW4/dIG', 'BCoWba', 'WRZcMmoG', 'W5xcP8k3WO/dOa', 'WOtcJCkfcwG', 'W7yBzNzw', 'rh0SEKi', 'W5RcUxzFWPa', 'BLhdLq', 'xSoGWOjsxG', 'W7tcUmo+W60', 'xNTgzmoY', 'FenDa8og', 'DmoYW73cPmkr', 'WQpcS8orWOH8', 'W5tcLSo5WPtcJa', 'xSkGfHqF', 'tCoPESopW7a', 'WPP2emoPW5G', 'WR5msCkkvW', 'ECkjt8oPjG', 'rYBcVSkk', 'Fmo/WPH9Da', 'W57cOKfgWQO', 'WQtcQSoKW7pdOG', 'WR9xumk1pa', 'nCoIW7dcGCo8', 'lWdcLmkmW6K', 'fY1BWRhdHq', 'i1r0W5JdRG', 'W5eGxJro', 'vrdcGM3dLW', 'W7BcK8kNW6JdQq', 'oY86W4Tq', 'WPb6xCkSfa', 'amoEW7BcR8o+', 'dxzYuCoz', 'WPtcOmkbeCob', 'jmoOW7pcHq', 'iUc0PUc3H8k24lwS', 'fML7W7NdUG', 'sSo5WRWfDW', 'kgH4Aa', 'WPpcQb8+EG', 'CxtdTSklW60', 'WQ1+jmowW5S', 'bmksqCojW5y', 'nSkncSonW5u', 'oh/cNJVdHa', 'uXn5tmod', 'acj8', 'f8k/gZJcSW', 'e8kYjaJcHG', '4lA44lEe4lsWBEc0Ka', 'yKO/WQK', 'ASkKWQLxWQi', 'lM3cK0ZdHW', 'CmoZW7RdGmk5', 'jIWzW59x', 'b8kVmbq', 'B8oXfa', 'xSkwbaKo', 'xCkWWRPZWQS', 'gHCCW6PO', 'k8kBdmobW5e', 'DKa/WQyM', 'WOjTW5BcOXu', 'e8kJoaNcQG', 'mhSHWPVcNG', 'WPlcVG0QDG', 'WQxcKCkDoKi', '4lw44lwh4ls9W5RGTQO', 'acNcGgRdJW', 'W4xdI8kCW65O', 'W7r5yW', 'm1RcSM4', 'uCoLW7/cKSkK', 'W6/cImk8W68', 'W5ZdIJqHWRm', 'ECo6nJGP', 'WRnGW5NcTWS', 'E0ZdOSkMvW', 'kdWIW5et', 'pLpcPW', 'A8oOD8o3W6O', 'c8kWcCotW7y', 'D8oxWPPjuW', 'dYj/bSkU', 'sCoZWQraEa', 'nNxcGZ7dGa', 'WRhcQaSHuq', 'W6ZcRKjYWR8', 'B8ovxmoP', 'FCkLlYWB', 'qCoSWQ1xyG', 'xLRdSCkAtG', 'W4q2WPBdQ1i', 'xmkWWQjOWRC', 'WRpcMbWRuW', 'WRZcMmoKWPzf', 'ogrEAvq', 'yCokv8o4W6i', 'tSkhbW', 'x8kEgaGt', 'rCo0fsGU', 'WOj1acKi', 'qWhcSe7dRa', 'afj0W7tdUG', 'rmk1W6/dKSkL', 'cZVdULX5', 'gSkHWPtdICocW5W6WQGTWO3cQti', 'ocHofCox', 'nYpcUG', 'W5xcUK5LWRS', 'WQHRwSkWgW', 'a8kNiGJcGa', 'oxhdO8kkoW', 'wSo0ksio', 'Dmk3kdyJ', 'nqpcTNldNq', '4lAz4lE6WOhGTkZGTBe', 'xslcMKtdIG', 'z8oTsI3dGa', 'nSoJW6ZcJCoz', 'ASofoJ8/', 'W4ncWRhcM8kz', 'pZu0W5fm', 'ftBdN0ns', 'aoc3IUc0TEc2TEc1OG', 'W7dcUqXKWPC', 'dMlcNa', 'z8oReG', 'nmkPDJVcJG', 'ACoCW6/cQ8k2', 'hxJcK8kGW54', 'CmkhrSo4rW', 'c8o5E1SJ', 'W5XVr35a', 'tmkaodqp', 'WPj8qmk3hW', 'WP/cUCo2WR5h', 'tCkWnqlcGW', 'WPRdTSk7W5LL', '4lwmW5NGTltGT5tGTRW', 'Fmo7gmoIWQa', 'hrBcV8kqCW', 'm8kFwSoHW6S', 'y3VdOmkg', 'W5VcImovWQ4W', 'CCospsWU', 'BwBcKfNdOG', '4lAcW4pGTzNGTQxGTAG', 'wCksaWCD', 'WPRcOmkbqCoC', 'r8oZWQzaoa', 'deXRvga', 'WPKaW6xdJmomDmkDWQxdJ8oHW5W', 'nJFdJfnn', 'WOtdL8oVW5pcKq', 'c3hcHdNdHa', 'W6pcVCk6cSox', 'W4LnFvJcJW', 'E8oRaSoLWQa', '4lA44lAB4lsB4lw14lwX', 'aYf0eCkZ', 'ECkPv8o7nW', 'WQlcRSkLnvq', 'wsNcNvRdHW', 'W4ddHtu', 'WQDhW77cGW8', 'fYlcUmkhBG', 'W6lcPmoHW6ddQq', 'WOpcKCoiWQrM', 'WQFcK8oMWPLe', 'qJ5Ob8kU', 'cCoeW63cSmov', 'sCosW4tdVSkJ', 'WPNdL8kDWR5V', 'E3SXWOJcNa', 'mtroWRNdKG', 'W4nvWRdcUmkq', 'W5xdTmkjcmot', 'bwBcSuhdLq', 'ymoPxSoOW7u', 'gsKb', 'DvpdJCkaW5u', 'o1rJ', 'W4LfWQhcNmkn', 'WP3cOmk4egG', 'lWjwlSop', 'oCo9W6BdGmoR', 'kmoPaCo4WQa', 'ASoVwcRdRG', 'W5NcKmkAawe', 'WOSIqCkIeW', 'xmo/W6HcFW', 'ExBdUCkmDq', 'a0ZcTwxdGq', 'wCknWQb7W60', 'brBcPmkIW6y', 'W7rLErRGTBe', 'xCkwv+c3S+c3Oa', 'WPCuWO/cM8kJ', 'W63dRWmcWPW', 'WPldTaO8zW', 'W43dIsaZWRC', 'cwXCq1y', 'W7eQy1xdVG', 'W4HBWQpcL8ks', 'BmkttSoPaG', 'ymoEFXpdSW', 'W4ZcPmk2g8oD', 'zHddJ8koW5y', 'pZW4W45n', 'AqVcL2xdHa', 'E3a2', 'bCk0pSoGW4a', 'W5FcNSkEfMm', 'rr3cLq', 'W4qMv35x', 'W4ZcVCkgamoB', 'qheOAuS', 'AKypWPVcMq', 'i8oIW6lcH8o+', 'vJ7cQa', 'mmkQmWZcLa', 'W5xcUSklmSot', 'v8k0B8o0aq', 'W5/cGhaeWRW', 'F3BdPmktAa', 'W5dcK8o4W5tdLG', 'tCowcSoBW4y', 'BCosmd8/', 'w8oykIqT', 'FMZdS8kpBG', 'W6lcPmoHW6dcQG', 'bmkiaSoCW4O', 'zeePWP82', 'u8kMmriW', 'W4bVqx5i', 'uSkbfbeS', 'edSYW4Lg', 'aCk2jGJcIq', 'qZBcTCkw', 'CSowvqpdQa', 'wCkwWRD2WR0', 'WPhcSSk+W5ddKq', 'W4NcQmoPW6ZdPG', 'BCowjZ8/', 'rCoMW7m', '4lANWPFGT4NGT7dGT6a', 'W6RdPZKgWPS', 'tmkxWQPWWRu', 'WQdcHCoI', 'cMxcKshdIa', 'aCoOWQPpFW', 'W5KVW7RcQX4', 'qYtcVb7dQIJdM08', 'W5NcV8oor8kv', 'vKaHWRuG', 'W6VcUvG', 'W5JdIsiXW7K', 'tmodnIGR', 'BCosna', 'WRX5ASkQdq', 'BmoDFH7cHa', 'WR5IW4/cVGi', 'W6VcK8kWW6/dSW', 'W4lcKmk+W5BdJq', 'FmoebYqE', 'W5LLyftcSG', 'CwKMW4NcIa', 'W47cGCkNW7ddPq', 'W6VcL8kxWPy', 'vmkkWQfPWRC', 'ee9Asq', 'cIf0dmo8', 'Bg0JWORcJW', 'A8oQaCojWQe', 'e8kuaConW4e', 'rIBcOSkwEq', 'CfzTWRmS', 'WPldU194nq', 'gJ3cHG', 'vMBcLG', 'sSodW6i/W7G', 'iN0VW41g', 'c1bhW6FdGq', 'W55LEuZcUW', 'wNpcUCkkEq', 'ymofrG/dNW', 'zSkZW4pcNSkD', 'dcVcHSkOW5C', 'ys4OW5fc', 'jK/cQ2RdNG', '4lEx4lA54lwA4lwo4lAQ', 'hCovegal', 'u2S+F2m', 'EZRcJSkkwq', '4lAm4lsnC+c3TUc3Ra', 'WRTXza', 'lxRcJbuc', 'kZiSW4Tp', 'AmofpW', 'bZVcKmoPWOW', 'fMWIpMu', 'k8oOt1mG', 'qCk+a8o3WRO', 'sI7cMLa', 'WRJdNCkFW4zd', 'FWBcMCkhva', 'mmoivh8B', 'vGZcHwhdHW', 'WPi7sMTD', 'WQRcQmoGW6RdRq', 'dcdcGq', 'ld/dG1bL', 'WP9GlCoO', 'DCottaVdIG', 'cJZcPmkdW7q', 'W5DcW6RdUtq', 'WPRGTjtGTlZGT5VcLq', 'WOfeWQBcNmkn', 'WQFdNCkfW6LK', 'E30+Bwu', 'WPTGW4K', 'jSo4W6FcHCo0', 'fCoEx3eg', '4lAm4lAx4lE84lw34lA5', 'smkspa0y', 'bX9BWR3dGq', 'o3JdLmoOWPO', 'W5dcImk+W5tdLq', 'W5/dIcK4', 'tCo1WQXC', 'W5tcOmk8W7ZdLa', 'xsddMv7dJa', 'vx3cGhK', 'WO7dTCkkW61Z', 'W51bWRVcJCkB', 'Cu0OWR4', 'W7lcPmoPW6ddQa', 'vwpcKZ/dHa', 'hZ16eCoR', 'WPxcQW42Bq', 'u1PJsmot', '8jEqJEkdRpcEKjpcUCoaWP8Y', 'W6lcImoDW7BdQa', 'WQjWoSoPW4K', 'egpcTGFdHa', 'uvyMqmoz', 'dmkcc8o0W4e', 'D3S2', 'fw18yvW', 'emk2brav', 'fSkrWQzZWR0', 'W6PDWRJcNa', 'W7tcHSou', 'WQtdV8kTW6ZdQG', '4lEk4lE7oUc0IUc1OW', 'n3hdPmkkEa', 'WQRcU8oUW6NdQa', 'W4bVqx5C', 'FM/dSCkeFG', '4ls34lwc4ls94lEn4lA3', 'WPvFA8kjda', 'dmkia8oCWPS', 'tCkotSoZaG', 'mIb0A1G', 'm2Xnq3G', 'WPBcSHO8Ca', 'hmoKEeC', 'htHkWPtcKG', 'WPFcT8kbdmof', 'eCketSoCW4O', 'ECo4W7FdMSk1', '4lwkW4FGTBRGTzlcPW', 'W6hdTWaoWPe', 'W5SIuNXD', 'BtiLBq', 'sSomWRD7WQO', 'i0BcSwG', 'WPZdOCkLW7zh', 'BSoqCdBdNW', 'W4NcGSkmWONdKa', 'Dmkkrmk9fW', 'Coc3SEc3IEc0LEc1Sq', 'E23dTW', 'rcFcPmkbDW', 'W7tcVCk3WRhdKW', 'W6PZwM/cIG', 'B2RcLWqy', 'W6BcK8k0W57dSG', 'W4lcGCk5W5hdQW', 'W4xdLCkFWQ0', 'ivdcHe3dHG', 'W7FcTmkZW6ldHW', 'gmkmWQ0+WQy', 'pd4PW4bg', 'z1FcTwtcJq', 'amoCwamk', 'BCkutSoWdG', 'W49lE8krnq', 'gIvcWRhcGG', 'mvz/WPi', 'W7Hzy0JcUW', 'WPzRr8kNoa', 'W7tcKmkZW7tdQa', 'aJ3cJa', '4lsO4lAfe+c2REc3Ua', 'WPtcOSky', 'WRbPluW', 'WPW6kSoVW4K', 'zKlcJSkjW50', 'aCoLW43cR8oy', 'WOFcMmkdfgm', 'WP/cMmkbW7T3', 'mH55W5pdJG', 'B8kdqmo+eW', 'iHe7WP3cIq', 'W4pcOmkaW5RdIa', 'W4tdKJu', 'smkKhmolW4S', 'W7JcOmkTlCox', 'tmo/WOfiFG', 'WP9szSkICa', 'qMe9EW', 'qwtdR8k6W6K', 'WOb8m8oHW48', 'x8oYW5lcMSkD', 'r8oKEd7dOW', 'uItcGSkmFW', 'W5xcI8k5W4hdPW', 'WOpcTbn2', 'qLybrge', 's8o3BZtdOa', 'bmkHWQFcJCoG', 'WO/cTq08mq', '4lAYWPVGTPVGT5lGT4K', 'A1OLWR7cTa', 'WO1LW43cSZi', 'W5NcK8khbW', 'mmorpdK3', 'W5/dMtWZ', 'WRTaW6ZcJta', 'W7JcRGXIWP0', 'WOPMlCoHW48', 'jmo+W6lcJSoY', '4lEhW6BGT6lGT5BGTlu', 'tYtdGx3cKq', 'ydJcUSkRsG', 'W6JcR8oSW4NdQW', 'lX9um8oE', 'WQeIF8kIoG', 'gc3cMSk9W5u', 's8kgWQ16WP8', 'WR9XDW', 'AMCYWP3cJW', 'uN5fC8ob', 'nulcRg/dGG', 'F8kXWOXlWPW', 'zmkcouFdJG', 'v8kCaqDA', 'W7q2CfDW', 'W63cOmoSW6ldOG', 'aCkZmGtcIa', 'WPjHW5RdUrm', 'W63cK8k8dSoC', 'hIX1b8oH', 'awTIW4tdSG', 'eYvjWQ0', 'vfjNrG', '4lEu4lEj4lwb4lAh4lsq', 'W6dcQmo+W6y', 'eN3cLW', 'gcjRqW', 'vItcUxRdPa', 'wmoYgJ7cRcFdKCos', 'kw5XB1C', 'rSo8W7pdISkF', '4lwJ4lw+4lwS4lsp4ls8', 'z8kfwSoHW6m', 'ea5wWRNdKq', 'BMeYWOZcLW', 'W5qMx34v', 'CfX/WPZdGG', 'C1ZdImkBWPS', 'wSoJW5dcKmkb', '4lE94lAm4lAc4lsEWOi', 'W4eMxxXu', 'mmkujSo8W4O', 'sSkgWQj6WPq', 'WOHWFSo0W4C', 'WQvSrCkIgq', 'tIFdO8kpEq', '4lwd4lA4moc1Koc2Ra', 'q8oiwJFdMa', 'qWZcRmkxEa', 'd8o+W7pdHmoT', 'WPnQqSknAW', 'W5bGlmoSWPu', 'WOz4oCo1W5O', 'W614EfFcTW', 'CZZdNuCv', 'W7/dRYmpWPq', 'W7j2z8kRoG', 'amkobCoCW4W', 'F8kEls0j', 'CvxdGmkmW48', 'owVdVCkcFa', 'WPVdL8kzW5jb', 'v3uO', 'vrFcJq', 'bILoWRFdLG', 'W4vpECkkva', 'chxcGW', 'Bh0LWQCT', 'W6ZcV15/WPW', 'FNJdVSkNuW', 'dSohrLjk', 'W65VyW', 'WOzKWRJcNmkF', 'WPFcTCkm', 'W5NcGd4ZWQK', 'd2NcMsddGa', 'iuxcPg3dIW', 'v8oTWQb1wa', 'qCkfWPnMWRy', 'qMOSChC', 'tWdcH8k2AW', 'k3FcUgxdPW', 'WONWN7g44Ooj8jMWJ8oJ77YH77YR', 'Ar/cG3ZdNq', 'WOldLmkkW415', 'W6ldHXGLWOa', 'fqqIW5nL', 'DvNdHmkyW7q', 'leBcUW', 'rZlcHCkU', 'ltlcOa', 'zxxcGKjb', 'wZZcQG', 'W7JcL8ke', 'W4eQxx96', 'W5NdJY8ZWQO', 'WRfMW4lcVdq', 'WPxdO8kka8ox', 'a8osW5hcPCoE', 'WOaImCoLma', 'WPVcTSkYW4xdIG', 'CSomDrldJG', 'WRfVw8kica', 'lu9lBK8', '4lsR4lwUW47GT7xGTim', 'whC/mgm', 'B8omv8kPWQ8', 'DCowia', 'a33cVYFdIW', 'omkik8oTW4W', 'qmo9WQfd', '4P6IWQ3cH8kLWQC', 'W6pcPmoRW7W', 'W5VcP8knoCoc', 'bmkVova', 'WPJcLCkyeJS', 'WRNcQLX/WPK', 'aSoExY0B', 'aCkQpWZcLa', 'WPetWRNcKmkq', 'WOxcTW0WBa', 'W7j4BG', 'xSo2WPPqxW', 'vd5kWQFdKG', 'CKxdImkmW5a', 'ha/cVmkWW50', 'W7tcL8kjWPO', 'zeGO', 'v8opqN0c', 'W6dcQmo+', 'B04eWQq2', 'WQRcLCkIW5O', 'ECoJW57dHCkr', 'W6NcMSkEW57dGG', 'WOTZo8kYWPK', 'w2W0BMe', 'Fmkksmo8fa', 'wmoZW5ddVSkt', 'gwLnDv0', 'tqdcKNFdIq', 'pt88W4e', 'CSkuwa', 'WRlcQL4', '8lELU/cULRtXI4E3hFgnPO8', 'eGb2WPBdMW', 'W6/cN8kpWP/dRq', 'W5hcMmkhcw0', 'WRhcUuL0WPu', 'fInlWQ0', 'WQ48jW7dRCossYRdVSoSWR52jW', 'kez3WRe', 'm2qTWOBcIW', 'WPjQW6pcOsq', 'ptiPWOvm', 's8ktWQjSWRC', 'WRDpzuJcSq', 'umkrWPblWOq', 'AKKDWPuc', 'D1emF10', 'W6hcTCo5', 'mvz/WOi', 'bI3cGCk5W4u', 'EXlcG8kL', 'zwFdSCkaBW', 'jelcTM7dIG', 'tSohBmoBW7a', 'v8krW75PWRO', 'W6JcOSoQ', 'W6xcOmoO', 'W4tdJIL2', 'jddcOmopCG', 'vfzHuCov', 'W4m6xg9D', 'k8o5AWNdLq', 'WR/cUuLYW54', '4ls24lwj4lsfWPxGTj0', 'W6vaW7tcMSkr', 'rmoaWOjOrG', 'F3aMz2W', 'DSoaqCo6', 'vItdOSkdBa', 'W6JcLmkY', 'ySoNW4/cRSkq', 'B30TWP3cNG', 'WPpcNCk0d2S', 'jdaEW6Hw', '4lAn4lAbW6m', 'A8oQcCo5WRO', 'W4RcUmkxqCoy', 'W47cU8kikSot', 'puj9', 'W4dcKCk4W4hdGW', 'ASofBdddSq', 'DMxdUCknFG', 'WOPXFSo3W4a', 'WP5IW4/cVGi', 'xmo/W7NcMSk3', 'WPpdMCk7W59x', 'ECkxjYmZ', 'WP/cQmk9j28', 'pLrO', 'WO/dL8kyW7bS', 'hshcHCkS', 'l2vZyNq', 'WR1eEe7dVG', 'reNdS8kJW6m', 'WOr+qmoSgq', 'W65XWPRcU8kR', 'WR7dOSkIW7ldSa', 'm3tdJery', 't8kLWOzDWRC', 'a8oKW5xcUmok', 'mLdcPW', 'z28WWQhcGW', 'zmk+fmo5W7q', 'f+c3Voc0MEc1K+c3LG', 'WOHqkSotW6W', 'iSoBeSoKWRS', 'i1NdJmkoW5W', 'WRJcK8o0WOLr', 'EMO+CgG', 'ACopWOrP', 'gJVcH8kSW5u', 'zNWlWOFcNq', '4lA54lwV4lAu4ls/4ls9', 'w8oDmSotWPe', 'EmkvuSo8aa', 'AgGlWRSZ', 'Emovna', 'W73cK8kuWP0', 'ne0WWPVcLa', 'hIT/lIG', 'y0O/WR0I', 'DeldImkBW54', 'yfa+WRu', 'AtdcJgpdPa', 'mSkXt8oGWR0', 'tSk1jqNdHW', 'n+c0Voc3Voc2Hoc2NG', 'rSohW4BdHmkX', 'W6TFyLxcUW', 'fM0/CIO', 'W4ZcICofW5FdRW', 'qxXYwSog', 'WQ7cHmoJW7pdPG', 'v8kwbbeB', 'WPtcSCoYWQPY', 'gIr/bSoH', 'eXVdO3m', 'CSoznMS7', 'lZvkiCoO', 'W58QqgHz', 'WRJdNCkdW7TJ', 'WRTSW6pcLqG', 'WRPQW53cQGy', 'sSojvYhdKG', 'nuBcO2JdMq', 'xIdcUq', 'WQtcG8oOWO5v', 'WPNdMCkbW7PV', 'yIS4W4Ph', 'W5ZcHCkWW5dcHG', 'WOn8o8oKWOG', 'W4S/vG', '4lER4lE7oUc0IUc1OW', 'oINdNLvp', 'eJ/dNKDj', 'qZZcJ8kxEG', 'B8osmIGU', 'W5VcUSkApSoa', 'WRr4lSkZW7u', 'tCoAbGCF', 'hYr1bmkU', 'W7/dSrO6WQ0', 'WQtcNmkBbwu', 'hILTfmoj', 'huDYqSoy', 'BfhdHCopW5i', 'ySkIWRpcUCo+WRVcGNNdNG', 'tSksebe', 'agip', 'zxBcSmkwAq', 'uJGmtK0', 'W5mIvG', 'WQBcGSoUWPLB', 'rwSSEwe', 'sSoklSodWOy', 'cmooxNO', 'WOxcNmkhdh8', 'zKpdKSkoW5W', 'W4RdJJGjWQW', '4lEU4lEI4lsh4lwtpa', 'tSkwbuiB', 'c8oQvvyy', 'lxBdOSkcDq', 'cKBcPMldJa', 'bYZdK8kQW58', 'jJa6W4jg', 'fHOwW7jN', 'k2DOv0W', 'fwXAWQBdJG', 'tCo8W4tcHG', 'FSo1dSo1WRK', 'FmkMory1', 'dx7dVmoymq', 'uSo+F0aH', 'xmkGlI8F', 'eCkifmoC', '4lAl4lAn4lEbWOS', 'WOBcQre0xq', 'WR5TDW', 'WOxcQa04Ea', 'su42WQVcKG', 'iGpcQ2BdJa', 'rCoXW7/dKSoW', 'CSofkG', 'WQNcUmo/W6K', 'or/cJSkcW5O', 'm1hcO0NdTa', 'A/c6G77IGRdXI5k9hE+8J++8HG', 'WQ3cS8oWWRb6', 'WOD6W53cSq', 'cd/cKa', 'WOFdKCklWR5P', 'cMxcNZNdHa', 'fJFcMLa', 'WPHRW6ZcTr8', 'W53cUCknWQ/dGG', 'vSkFeGeo', 'wmoHW6ldJCkJ', 'iqzfWPddPq', 'W5eGxw1D', 'qSoYW5q', 'i1ldMmopWPK', 'W4lcLCoSW4ddNG', 'WOnbW4ZcVq4', 'eCkvd8ovW4G', 'C8k8hae8', 'A8ojumo9WQK', 'xttcH1BdHq', 'WRJcHSkZ', 'WQzNAmkW', 'cmkob8ox', 'WOFcI8kydw8', 'r8oijCoeW7q', 'W5RdLsmIWRW', 'W7RdLsmIW7K', 'W6BcS3P4WPq', 'bsb6bmoR', 'DSkdwa', 'ESkIWO5VWPy', 'Fmo7gmoI', 'uatcLxddJq', 'bILoWRddPa', 'W43cOSkCW6ldOa', 'B1JdUSksBW', 'WOb8cEc1KUc3Oa', 'WR15CKRcVW', 'BctcR0m', 'emoHW6/dJCk1', 'wcFdRCkwzq', 'B8oJyCoGW60', 'EgCTWP3cNG', 'ESoyW4tcL8kc', 'wgRdJCkI', 'mSodW6FcJmop', 'W7TYWQdcU8kx', 't1PUrSky', 'W6tcL8k8WQ7dSW', 'lCkJjr7cHG', 'zslcSCocmq', 'WPf7ECkUDG', 'W6RcVSoLW6RdSW', 'WRJcL8oPWP58', 'smkcWRDQWRC', 'c3ZcLxFcGq', 'bCkdorZcVW', 'WPpcRXC6Da', 'W5C6qh4', 'neBcSgJdGG', '4lAz4lAl4lsB4lw14lsC', 'nLH2W5NdRq', 'amoOz0yz', '4lw64lscW4/GTiRGTRy', 'WOLaCmknnW', 'W4vDxCkIdG', 'zf0HrNu', 'vrpcRLddSq', 'tSo+W4u', 'ASojqcRdOW', 'gsLCWQFdGW', 'aceSmxy', '772k77+V772K772mW4C', 'qNaOCa', 'WR5Lsmk9xa', 'hN7cGYxdJG', 'k0BcRgZdMq', 'WRnWySkLyW', 'pJBdIebC', 'WQpcUCkTW7FdOG', 'rwW/D2O', 'WRCUcmoIua', 'W5JcJYK4WRe', 'y1XJvSoB', 'xSoMW4/cI8kw', 'hYH1b8od', 'A8oZCCo4W54', 'uCo2hqW', 'qNCEANy', 'W65VEv7cKW', 'c8k/iYBcRa', 'W7uyDMf/', 'W4e7wNHt', 'W41zWRe', 'W7dcQKG', 'gcjzfSoO', 'idq2W4i', 'auDHuCor', 'W4C7r3rw', 'vSkAeGzA', 'BLO1WQZcNG', 'WQJdHCoqW4FdTG5JWQO/ga', 'mdtdNLeg', 'W4NdTmkxdSoa', '4lse4lA24lAQW6r7', 'vZG9DMS', 'WRBcPSoGWR12', 'bMP+vua', 'W63cK8kFWOO', 'W77cLCkuW5VdGa', 'DSo8W7RdMa', 'yN3VVA3cKam', 'rCoMCJ3dJa', 'bSkehCoA', 'kLzEW7hdGq', 'tvWlWQRcSa', 'ECoyjcu2', 'BSogw8o4W68', 'sYddIN3cKq', 'vSoyqN9b', 'grpWN4+977Q5W6tdUq', 'p0e6W4JdMG', 'n2vK', '4lAb4ls8aCoWaG', 'uCo+ori8', 'W7pcJ8ofW73dQq', 'fCkjmb7cGa', 'W5LIWOxcM8k9', 'ACkKWQX2WR4', 'WPNcICkcfcy', 'WOxdIJWX', 'wmoYbCo3WQC', 'W5ZcMSkfWQ/dUW', 'W6hcGSkZW6ddSG', 'prLcWRpdRG', 'DCoTW7FdKmkG', 'W5tcOmoofCom', 'jxnAs0a', 'v205Cq', 'CeDZW5JdHG', 'BtxcU1xdNq', 'dt1RbSoG', 'W4hcKCkKW50', 'fmkfWRzYWR4', 'vslcH0tdGW', 'xSkoWRz7WRa', 'raRcLMRdHa', 'ggBdNG', 'p29ZCfW', 'WO7cICks', 'i8oLW6RcGW', 'v8oNWP0', 'AgRdQ8kIW6S', 'mSk+tSoIWQy', '4lwm4lEf4lsd4lwO4lED', 'WRlcQKi', 'FrhVVlFVVPJcGW', 'gs1bWRddRG', 'W5NdQaOHWQG', 'vmkivCoriG', 'W6RcHSkiWPddSa', 'W5veWRe', 'W5NdGIS/', 'l0lcRgZdJa', 'zKddOmkoW5K', 'WRpcV8ohWP3dOG', 'acr+b8kU', 'zg7dV8ku', 'WPHHW7hcTqi', 'FY7dIeXC', 'WOrWjW', 'W57cLSkU', 'rZlcUCkwEq', 'W7/cN8klWPVdRq', 'ymoYFSodW6y', 'gci7qSkK', 'iLRdVW', 'u8k1ACosmW', 'fCk1mX/cLa', 'm2KH', 'W4e8uNXD', 'WPlGT67GT7ZGTQhGT7C', 'W5dcJ8o0W6/dJa', 'w8odW6tcH8kk', 'FCoWW6xdJSkX', 'srhcHetcMa', 'e8kYjatcIq', '4lsvB+c2H+c2Ooc3QG', 'vw0DWOOR', 'oM1Oy1S', 'xmkamYyV', 'WPH9W5C', 'dmoEvwy', 'vJhcKuxdLG', 'hSouqMyl', 'W4j4CKRcSG', 'nSo4W6/cHCo1', 'WPJcICkdcwK', 'rfXKrSkw', 'W7bRCf/dOa', 'CSoetCo6W6i', 'WRdcLCoZ', 'W5PTWPtcUa', 'iCorFbxdJG', 'C0WPWRuS', 'khj0AW', 'pCkptmo6sq', 'ddGpW7xcIa', 'BmoRWOblxW', 'EmoWWP5UBG', 'WQdcHmoR', '4lEy4ls84lAUWPNdHq', 'FmoNemoZ', 'ymoesmoLW4G', 'W7dcVCo4W7hdIa', 'hfH3W5xdLW', 'W4H+w8kMcq', 'W7pcOmooaSoA', 'WONdRCowimocWQDEW7f0', 'isW/W6zL', 'vmkmWQq', 'W4ZcTmkLW7hdIq', 'g3KV', 'lfPtsuK', 'W4CHx3jw', 'gmkcWRz6WRS', 'WQjWlCoZW4K', 'WRlcQf5W', 'WQxcUGW9uq', 'BLjLvCor', 'W6dcOSo6W6VdQW', 'W4H2WQ3cLmkn', 'W75IFLBcUG', 'ACoQfmoZWQy', 'rZBcVG', 'WQZcTGS0DW', 'mSoAmIa/', 'W6dcLmkMW6ddOa', 'uWdcK3ldJq', 'xItdPmofjG', '4lwU4lsK4lwh4lwb4lE6', 'wmoWW7FdMCk1', 'a1RcRfRdOW', 'WQnFpmoAW5O', 'W4yvAunp', 'tcHJW4JdKq', 'WOHWpSoGW4G', 'ow4GDfW', 'kSkWn8o6W74', 'WRhcTCoEWQSw', 'at9k', 'E8oKcGy/', 'BL12qSoA', 'WR/cISk+mMu', 'W4u9wM9D', 'W7tcNmkxjSo0', 'CrdcGmooWPe', 'sIlcLutdHW', 'nKn1W5hdOq', 'W5tcL8kKW5tdGq', 'WP7cLmkwb2m', 'mSoKW6xcHSo+', 'BZq2W4re', 'juvUW5pdJq', 'E2VdSSkmAW', 'xI7cMfldJa', 'dJhcK8kW', 'W4aJdG', 'W5SIvcLn', 'W5FcISksegC', 'AL3dGmkiW54', 'WPL7W4VcTXm', 'WPiSuM9D', 'A8o2W5pcLmkh', 'CIZdIW', 'ww05BNe', 'W4ngWQ0', 'A8ksWO5OWQy', 'evFdMw8', 'yJWP', 'W6VcN8kDWPS', 'W49BWRRcJ8kB', 'WQlcVH0Yxa', 'ESobW7hcJ8oT', 'CNRdPmoDoW', 'pdhdIeyg', 'bwFdU8orlHGwxZXZWOi', 'vCo4eaKq', 'kcJdHebn', 'W5xcGmkuW5RdIW', 'WRXmh8oVW4W', 'sqpcSN7dJq', 'yhCKFwe', 'B8oFFdBdNW', 'W5NdL8oydg8', 'tSoKD8oj', 'WPtcPSooW5PI', 'daupW6PB', 'Dmo3ACo3W6y', 'sSopedWr', 'l8oewG', 'WR9NpG', 'A0tdLCkFW4G', 'WOxcQqW2Bq', 'WP3cL8ktjuK', 'Eg/dSCknnW', 'DspcL2ldSG', 'ywG4svy', 'F3RcH/csK5bL', 'W7hcKSkNW6tdOW', 'gI9kWPNdHW', 'yZZdRCkbCa', 'rx05wgi', 'W41qW6NdISom', 'WOFdNCkbW7L0', 'x8kYBW', 'dMtcMse', 'jmkWiWRcKq', 'kZKyW4Po', 'WPhcImk2W5VdGq', 'otVcM8kbW6K', 'WOpcGmkhbq', 'gq/dOxG', 'qSoJW4/cKCkw', 'WQzAtSk0kq', 'zuRdLSkuAG', 'tMmaWQpdLq', 'WO7dI8kCW79N', 't04VE3q', 'tmkAWRn7', 'lZVdMubn', 'WO7cRrSRAW', 'ldWVW4be', 'W6BdGCkZW48cvmkkASoiWQ3cGrNdVG', 'DSk8mc0', 'W7hcL8kjWPNdOG', 'v8krWRO', '4lsh4lEpn+c2I+c0GG', 'ACoskZ8', 'uXhcK2hdIq', 'wt3cJeJdNq', 'CfCcsKe', 'nLBcRx/dIa', 'jJBcLSkSWPa', 'e8kYpW7cJa', 'W6VdH8k5W6ddSW', 'WQb9cSoTW4S', 'W65+ov3cTW', 'A8oLW4VcNCkG', 'jdGP', 'vu4GWRuQ', 'Dxj0W5nk', 'gtNcGCk9W5u', 'khxcObxdGW', 'WQrZlmoXW4O', 'CMFdVSkqCW', 'Bmocpd8/', 'WPtcOG48', 'WRTWdmokW6y', 'pCoMjGZcIW', 'udBcUq', 'acH1bmo6', 'DKKKWRmM', 'dmocxxC', 'W5OQuN9D', 'WQpcTXe3EG', 'y8ongCo4WRC', 'WPtcMmkhfg8', 'a8kIicFcGq', 'c3hcHcu', 'k8ooE0O/', 'W6xcQCoPW4RdSG', 'W67cK8kfWO4', 'p3j4z00', 'pCovjJGJ', '4lA34ls44lweWP3cSq', 'WP9V77YE77Y/ga', 'W6/cKCk4W4tdOa', 'wxNdSCkfW4K', 'k8otr8kRbG', 'W5NcV8kle8kv', 'hCo5W7NdKSkG', 'WPhcK8o0WPfe', 'qmkZoaJcNW', 'FCk6WQ17WRq', 'BfhdHq', 'W6tcGmkWW6hdPW', 'EL7dGG', 'W47dPSkhdmos', '4lAR4lAjW63cJ3K', 'dmotsdiC', 'a8kNnqxcGG', 'CCovvSoGW7q', 'gSoAxhKH', 'W67cVKnIWPC', 'W57cMCkwWQtdKG', 'z2tcH1/dUq', 'gsTTWRVdLa', 'n8o4W6xcMq', 'W7lcVSkFW6NdGa', 'jfrrxeO', 'WOnHw8kUgW', 'sWdcMa', 'W7lcQKjYWR4', 'ACkFuCo4', 'WPXHhhDr', 'WPJdNCkBWRnJ', 'aSomW6XQWRC', 'C8kqrmoVeW', 'WQnAhmouW78', 'wwaDxga', 'gSkfgaSz', 'hSosqxDd', 'W4VdJCkbW7T4', 'zhBdUCkaCa', 'z8oTjs0R', 'W6VcTSk5W7xdIG', 'qWRcJwJdHW', 'emoNW7pdJSkG', 'AmkkWQfCWPG', 'wCogkmoLWPm', 'zmoaw8oQWRy', 'hZ3cMq', 'W6hcGSkMW6RdSW', 'mSklaCo+W6i', 'Eg4KWO/cNq', 'W4LgW7tcJCkr', 'vSoMW5ldUCkf', 'WRBcR8kbbeO', 'Ct3cLK/dLW', 'ACovWODXuW', 'DrBcSxldTW', 'WOFdL8ki', 'EmopiSoCWQi', 'W6NdOqeNWP0', 'W58uWQdcGmko', 'emobt8kyWO4', 'kmo/dSo/WRK', 'W7rFuuRcLa', 'lSoFgCkVuG', '4lwr4lA14lE74lsd4lEb', 'n1hcVGO', 'WPFcTSouaa', 'xCoxxmo+W6S', 'W7dcV0f3WPe', 'dtFcM8k9W7e', 'WOtcJCkEa20', 'cJ5DjCoL', 'uXBcKwZdHW', 'W4y9wMnB', 'WQH7W5ZcUaK', 'AmozpYi0', 'BSoDFvVdKW', 'W5CNgq', 'W78QqgHz', 'ucBcNuxcGG', 'xCoUWR1MrG', 'sKtcGCkmW5q', 'z1lcT27dNW', 'f+c3IEc1TUc1Moc3JG', 'WOFcKCkydMm', 'n8oiW4xcS8om', 'WPfdvSkdsq', 'dmouB2Ci', 'W53dHsa', 'qmoHW5K', 'xHnIt8ox', 'EhOTWOtcUq', 'W5/cSmkhamoQ', 'vvzHqmoc', 'gZ3cLmkQW4q', 'EmoguSo4cW', 'E8k+aCo4WR0', 'q1y6aW', 'hmoExNe', '4lwv4lEpFUc0Toc1QW', 'ACoymcq2', 'eCkliSobW7y', 'ySoXcCo4', 'kudcP0BdIa', 'bCk1jqZcGa', 'o1HpW6xdOG', 'ymorFa', 'BmkODCoAaG', 'W4NcPSkBW4y', 'WOHAC8kKkq', 'W5ZdKIuIWRW', 'WQRcJCkLW6tdOa', 'xMW5BNC', 'WONcTq4SAW', 'A2FdSmkFW64', 'W4RcHvzuWOy', 'CmoQWRPkDq', 'WOVcLs0HsW', 'vCozf3m', 'WRpcP8ouWQXk', 'WRlcT8kJ', 'qWBcLhBdMG', 'rL9Pr8kw', 'WQRcN8o4W7hdQq', 'E8kXa8o5WRG', 'zCozAG', 'WPRdJCkaW6PL', 'W4xdImkbW7K', 'xmkmWRrWWR4', 'WRpcLSkufwS', 'xtxcT1BdKq', 'WORdN8kk', 'WORdLCkk', 'oIpcKa', 'WR1ivNNcLq', 'BsGJW4NcJW', 'W5C3rW', 'rfjWv8oF', 'W5dcU8kMWRNdHG', 'WRdcHCo0WPTx', 'WR3dUCkLW5Ds', 'W5ZcJCkV', 'WOb+AmkIga', 'WP85xq', 'AMa3WOVcJG', 'cLVcTfldHG', 'kxn4', 'd8kehCokW4u', 'nv9UWPZdLW', 'DahcGSkYta', 'WO1RsmkNhW', 'fKhcGH7dLq', 'q8oLW7FdJ8k1', 'jSkjgtNcOG', 't2XJC2e', 'cKbZ', 'oxjEz0O', 'W5xcGCkKW5y', 'aIuTW7Xi', 'u0PWrG', 'WOxcSr8+Ba', 'y8ovsCoRW6K', 'xCo2W4hcNmkh', 'dYRcMSkKW7i', 'nfrPW58', 'oevUW4ZdKa', 'gdq7cSoJ', 'W4bHo8oSW40', '4lA64lwQ4lAT4lEb4lsG', 'uh0/', 'tCkrgICT', 'vxaSAG', 'ySkhmsGP', 'W5/dJZX2', 'W6ZcPCk3mSo6', 'mmkfg8o8', 'm150W4RdHG', 'zvFdO8kZDa', 'W7dcQKHxWPW', 'sSomW5pcMSkF', 's3hdO8oi', 'otq+W5jS', 'gYbgWPNdHW', 'hSosqxCa', 'hSoiA1qf', 'gsRcO8kpW5u', 'eIvdWRhdJa', 'kYn3aCoI', 'WRddVeH0WPa', 'W4NcSCkabCo4', 'W6BcHvT3WPC', 'WRNcMCoG', 'WQzNySo5CG', 'wSo8WQ5aza', 'W78+uhD9', 'n1BcSwm', 'WQFcGmkWkwm', 'zSk+cCo7WRu', 'd3xcGM3dGa', 'kmoLWQpGTBhGTie', 'ymoQfmoMWQC', 'y8oZWOTnuW', 'lJLMWPyr', 'FwK2WOZcNa', 'wgmbWQhcLW', 'W5HUW57cSeG', 'WQXbdCoWW7a', 'jveLWRKW', 'rddcV8khEq', 'jKTZBKG', 'zSoasSoT', 'uvPLvmo5', 'WOtcNmoxmMm', 'WQpcK8oLWP0q', 'lt/dJfDC', 'WQrRDmkHDq', 'fmkRjSoGW6i', 'yhddUCkxFG', 'CmomuSoeW4W', 'WR10DCoQEa', 'W5Cqqh5u', 'hCo2WQZdIW', 'g8oFw1Gi', 'wmokwhCC', 'uh3dOSkbW5K', 'FSkSWOXkWPC', 'W5xcUCkLWQRdLa', 'W5lcHCkJW5ddGq', 'WO1UW4lcLda', 'W7FcGSk0W6ldSW', 'sSoXWRLxua', 'luNcUN7dLW', 'CqBcGCkU', 'tXFcMa', 'uvJdV8kUyq', '4lwr4lwL4lsV4lse4lEk', '8yELRpggPydWNzEN8lghUSoG', 'sSkwoGJcHG', 'W6/dJY8JWRq', 'DCo5W7tdRmkO', '8jovLU+6Mq', 'dedcMe7dIa', 'smo1fWD6', 'Dmklqmo6aG', 'AmogDZ/dSG', 'smomhGWt', 'W4xdI8kCW7CG', 'W5nVwvtcKa', 'W5SHuhDn', 'bSkogCoxW4G', 'qmoYW4q', 'WOHVr8kNnG', 'mWzTWPpdUW', 'W5BcSCouqq', 'WPRcQmkfm3i', 'scBcGepdHW', 'rdHSpY4', 'W7j2ACk0FW', 's8kZW6hcR8k6', 'vgWf8yQrMLq', 'oCkVaGBcHq', 'gCkMW4BdICks', 'W5JcOCkAfCoA', 'veDYsSoy', 'fGySa8og', 'W7DKC3/cKq', 'rCoDFbhdJG', 'pJFdIa', '4lAVWR4nW7pcUG', 'ECkueba1', 'W6RcNCkTWRddPa', 'WRpcJZCAva', '4lEGWRpGTi/GTkZdKW', 'xSokea', 'ECo5k8oJWO4', 'nqxdH8ozW5O', 'WOrItmk3dG', 'qmkZW5pcI8kA', 'CwRcGrrB', 'W7aOwv1C', 'nwFcLwtdGW', 'W7FcQmoJW6hdIG', 'W58kyvH9', 'WOPIp8ooW6q', 'W43cT8oVW73dSG', 'BSoXodSG', 'z8oScCoXWR0', 'W6b1WPRcVG', 'q3abWPW', 'xJ3cRSkoAq', 'W7HYyXRGTy8', 'W7FWKPk84Oo08ycYPSo777+a776g', 'isS+W5Dx', 'WPrUW5RcVaa', 'uKbLuCof', 'W7ZcNmk2W4ZdJa', 'rx0JEKK', 'WRBcMCoRWPvf', 'kWpcK8oFWPC', 'qX3cH8k7W58', 'fCk8WO/cMmkA', 'WRzHrmkRca', 'W7FcR8k0WP3dLG', 'AH41W5VdIG', 'AuSPWOtcOG', 'mxn6', 'EsFcV8k4uW', 'owXUB0O', 'taZcHstdGq', 'DGu0WR82', 'aqP2bSo2', 'WOBcJmkyfgm', 'rx1TE2O', 'WOL4k8oLW4O', 'tmo2CCobW5m', 'hN7cLa', 'WRFGTPdGTQZGT67GTBu', 'xCoCavnu', 'f2DEuvy', 'W6u/rKXQ', 'hYLDW7tdIW', 'WPNcTr0', 'W6FcMmocW6/dNG', 'WPNdUCkmW6H2', 'WOxdICklW51g', 'W57cNmkgW6xdRG', 'CKxdJSkBW54', 'W57cISoBWQGXbSo/ACkvWOtdNMS', 'WOhcRHOWCa', 'bsL+q8o4', 'B8klq8o6', 'W47cSCkwfq', 'W47cU8khdmos', 'WQdcKmoHWP9c', 'BwBcShNdGG', 'xY7cKK4', '4lEkpSoqBmkl', 'cw1ObSoI', 'y3XdDSo7', 'WPXWmmoKW6u', 'kvNcGvJdVq', 'WOvQW4/cUHm', '4lEi4lsL4lAQ4ls74lwL', '4lAhrCkvyCoq', 'DaBcUNa', 'WOrPW7VcGs8', 'fCkJWPu', 'W7tcRLu', 'Es3cSLldRW', 'q0WHWRuq', 'W63cQCkTW6RdTq', 'jLH+W5NdJa', 'CeWXWQBcSG', 'fwNcL2JdIa', '4lAV4lwV4lE64lwb4lwd', 'cxxcKs7dLq', 'W7pcJSkXW6tdQa', 'n1H8W4u', 'W5JdLs81WRW', 'cmokrwCe', 'A8oCmbG1', 'fmkJlHNcKW', 'W4iUr29D', 'gc7cMvBdHq', 'Dg3dVSkxFG', 'jJJdQeX5', 'W5/dPZK1WRS', 'ghi9Eq', 'WRVcLCoIW5P1', 'l1FcTNVdNG', 'BSooEH7dPq', 'grTzWO7dLW', 'xSoGWR9GxW', 'bZFcGCoPW4m', 'tL5La8kk', 'WRdcHmoeWPTd', 'W7RcS1G', 'CmoLW6ZdGmoO', 'uCo5W7/dNmkJ', 'W4ivFvri', 'b8kphCorW4S', 'ldNdN1fn', 'W7NcMN9aWOG', 'WO/dU+c3Ioc2MEc2Ua', 'ku0SWRKX', 'lJ3dMLzq', 'z8oSxCoHWRW', 'iur1W4JdHG', 'WOvezmkgCW', 'bCoeWQ53WRW', 'k2lcPxVdUW', 'e8odW4ZcSmol', 'u8o/BIZcKahdPmo9nW', 'eSkMWPfmWP0', 'WQ8+iqNdRmkXnsVdL8oLWPC', 'uJtcM1K', 'B1NdG8kyW54', 'nuvUW5NdHa', 'WOvQW4/cQGi', 'qmo7WQW', '4lAFW4pGTBFGTQxGTia', 'l8ovs8oRW7q', 'W5ZdUqy+WP4', 'WPBcLCkEbcy', 'curLqCog', 'WOmIW4JcVWO', 'c3HECxi', 'u0GfWOCz', 'neBcRg/dOa', 'chJcHc7dLa', 'zSooEbBcLW', 'WRn2Ea', 'W4fhWRm', 'yCkJWRVcIW', 'fhhcLa', 'WP1rcCoKW74', '4lwR4lE3e+c3M+c3QW', 'aNBcGJ7dPW', 'DCkgWRbTWRm', 'i1hdJ8kgW5y', 'EXFcNSkwwG', 'rx05', 'W4dcHSkNW6xdIq', 'W6dcKCkKW4BdTq', 'j8oQd8o5WRG', 'fCk8WO/cICkA', 'B8owjY4+', 'hCoiW7NcSSom', 'xt/cGa', 'W7VcPejIWRm', 'WPxcVrG8Bq', 'vun0WPpcMa', 'W6ioAu1G', 'W7JcG8kdWPFdRa', 'tHhdGwFdHW', 'uSoRqxCp', 'W4ldISobvLldMSkCWROUhW', 'ltK3W4PG', 'CvxdKCkdW4i', 'tSo3WQ0', '4lER4lwh4ls34lwAWRS', 'WQ7cRmkFcLm', 'W7/GTy7GTkddMLe', 'W4JcSCkpaSob', 'WRjNz1/cUq', 'xmopWQvRWR4', 'sCk1W6ldKSoW', 'CMnYALy', 'uHBcLwhdJq', 'WOtcNmkzbeS', 'hdG3W4ba', '4lAu4lAFBEc1REc3Tq', 'WO5Rw8oJrG', 'W5NdHs01WQ0', 'FmocnYi1', 'EZlcOmkssG', 'h8k1WRPaEW', 'W7zVBG', 'stdcGhZdSa', 'm8ksu8oP', 'cw11aSoJ', 'at58', 'Emopj2yU', 'BSoMxCoIW7m', 'W7pdHcyBWRG', 'nqpdOYRcHW', 'BSkvqmo6aG', 'W6uiyxrr', 'veVdGvtdMG', 'gh/cNcldKW', 'WQZcHSoI', 'pCo7mIu9', 'i1r0W5JdOq', 'lxvYCLW', 'W6VcV8oUW6ddMa', 'WRDXy8kLFq', 'lXFcUSkDW7u', 'WQ1/nmoWW4y', 'W4jhWRZcLSkk', 'vItcKxRdHW', 'C8kshmoYcq', '8jgoME+7UW', 'BSosisG1', 'j0nZW4JdHG', 'WOLVAhLL', 'W57cH0LUWQi', 'C8ozEbJdJG', 'q8o0W7hdMa', 'AmklWQXWWRC', 'x8ozks4o', 'WPPZomoLW5O', 'WPTqma', 'WOf2o8onW40', 'iSkXW7hcHCoR', 'a3b/bSoT', 'W7r5n1pcRq', 'cIbUbSoS', 'bH8SW7X6', 'ratcLwu', 'kmo6D0q2', 'csnOc8oH', 'n8oYitK1', 'CCo7WRBdMmkI', 'rmoWW67dIq', '4lET4lAcialcNa', 'E8o7dSoYWPK', 'cgj4AxS', 'W6JcKSkmc8ow', 'hmoEs3mB', 'ku1yvK4', 'ehJcMSk7WPa', 'lmkjesi', 'BL10B8oZ', 'W7ZcICk2', 'wHhcOCkKzG', 'F8oCW47dRCkk', 'zNmGE20', 'W63cRK11WOy', 'mdxdHL1n', 'd3xcIdK', 'ctdcKZJdLq', 'WPdcKmkrgq', 'ESktz8o/ka', 'WQbNCCkNBG', 'CSkhrq', 'qdpdLoc2PUc0Ua', 'uConWRf7WR8', 'WRRcGqC0Cq', 'BSosrHFdNW', 'WPxcQri', 'hZhcKmk+W78', 'erpdLfzn', 'W7BcL8kd', 'CMOJWRmM', 'Dg3dVSkvFG', 'W7lcLCk8W7xdOG', 'hf0FteS', 'WOX2b8okW64', 'E3WJWOdcLW', 'ymo0a8omWPe', 'pCouba', 'xx00', 'WQ1VkmohW6a', 'W7tcUgPCWPC', 'WOldJ8ogWRK6', 'W4PDWRJcNmkq', 'xmo7WR5a', 'W5/cP8kDamos', 'ggXBWRVcGG', 'tsVcOCk3tG', 'yMeQ', 'lHLvnSoC', 'WRD6za', 'v8khWQzSW7W', 'BCocicm', 'W7dcOSoLW6e', 'xclcH1ZdLG', 'bGpcLgldIa', 'xSoVWQDrCW', 'W4NcGSkgWRFdKq', 'WQBcSHi8', '4lA14lwqW6JGTPpGT5y', 'W5WSsKrB', 'd8oLW7hcGCo1', 'W63cJ3T5WPW', 'WOjWlCoZW4K', 'gg5euvW', 'o2LRy1C', 'w0xcOGhdKG', 'whpcU8klEa', 'WRVdTCkwW7ry', 'lmomAX7dIq', 'hSkPW78CyWVcMW7dL8kY', 'ge9Eu3q', 'WRdcPK19WPC', 'WPtcLSkAt2u', 'W5DiBKdcKa', 'W4/dJZS4WRu', '4lEu4lwA4lAW4lsm4lsg', '4lsLW6VGTRBGTQ3GTyG', 'AmorW5tdHmkb', 'W67cN8oLW4RdIq', 'W59rWRRcNCkZ', 'W4bYq3vF', 'W4ldUIOrWOS', 'WODUW5ZcVaK', 'W5pcRmoeW4FdGq', 'WQX6cCkKeW', 'iCo7xc/dRG', 'rfi7WOtcLq', 'W41AWR3cLmkB', 'acH0CNBdMIpcLSoX', 'W7VcLSkrW57dOG', 'A1qPWPmf', 'W5ZcOCkcdq', 'WPVdQCkTW5r2', 'vCoNW5xdNmkJ', 'FgXYCrK', '4lwT4lA04lsu4lslsq', 'tpcSIj5i8lYgJG', 'DMKSWORcNG', 'ssZcJmk5W5u', 'qKRcH3hdHG', 'WQ/cSSk2nh4', 'DWNcT3JdMa', 'nSoVzKOA', 'v8kaea', 'W6RcU8oOW7FdSW', 'oYqRW4a', 'uYlcJq', 'xrtcJvRdMW', 'tmoYW5dcI8kA', 'W43cQmkwW4pdJq', 'WQJcLd0Bvq', 'lmoZy3GP', 'W4vdtmkWcq', 'hCoudtne', 'WPBcTCknfg0', 'WQfHw8k6na', 'W4PNWO3cTmkB', 'WO7cMmooWRq', 'W5XaWQa', 'DSkftCoHWQC', 'E8o7dSoYWP0', 'ivhcRwy', 'W6tcKmo6W6ddTW', 'BuZdPCkvBG', 'xcBcGfy', '4lwD4lAX4lED4lAx4lwV', 'zNP6qSoL', 'FZGUF2O', 's8kcfcvwW7/cGNVdKXjtWPHL', 'WP5dxSkd', 'oJS9W4br', 'lcGVWOva', 'W5xcNCkMW57dGG', 'W4tcO8kgW5BdKG', '4lEk4lE7oSoBW4O', 'W5flwx0', '4lsE4lwx4lwhWQxdPG', 'B1imWORcRG', 'W7LgWRG', 'kSoBW5pcJ8oj', 'WQVcRJadDW', 'smkeCCoYna', 'ACkjqmoOaW', 'wgXWBNy', 'W5JdHt8', 'jJL7W5Dg', 'dZtcMSkMW4i', 'pvrRrwG', 'pIG6W4Lk', 'W456wu3cPW', 'qmoNW43cNSkq', 'WQvOt8kUcG', 'W43cU8kdamoB', 'W7rNDL3cUW', 'W4e/vNHm', 'eSktaCouW40', 'WQhcTv48Bq', 'h3xcGY4', 'C8oqvSo6W6i', 'iSoegCo6W6i', 'y8oDAbddTq', 'nSo9W7BcHCo1', 'W63cTSkFW4BdRG', 'W41eWQtcNmkq', 'FSkkWQ97', 'FvtdQCkoua', 'kCoLWQ3cJCo+', 'W6BdQ1H5W5i', 'rCo9xY3dLW', 'smkwfGy8', 'dSoEx3el', 'mNr4DfW', 'BMK2WP3cNG', 'WRfKW53cKbe', 'u31eCmoc', 'W4hdIc0CWPu', 'xmoUWRPmEa', 'W4yGzMTi', 'ks4QW5ng', 'd0n7W4JdIG', '4lwZ4lEpFSoTW40', 'WOf0sCkctG', 'Fmoapse4', 'icGVW5vw', 'BCktuSo1', 'Amkar8o4fq', 'W57cKSk+W5hdGW', 'E8kutSoWjq', 'WQfyESkcCG', 'WO7dGmkBWR50', 'qNa4Fhe', 'WQvBwSkSxq', 'WOnNrCkMfa'];
    _0xad7a = function () {
      return _0x3e17a8;
    };
    return _0xad7a();
  }
  if (config.LANG === 'SI') {
    desct = "එය ලබා දී ඇති රූපය url එකක් බවට පරිවර්තනය කරයි.";
  } else {
    desct = "It convert given image to url.";
  }
  var imgmsg = '';
  if (config.LANG === 'SI') {
    imgmsg = "*ඡායාරූපයකට mention දෙන්න !*";
  } else {
    imgmsg = "*Reply to a photo !*";
  }
  var cantf = '';
  if (config.LANG === 'SI') {
    cantf = "*Server එක කාර්යබහුලයි. පසුව නැවත උත්සාහ කරන්න. !*";
  } else {
    cantf = "*Server is busy. Try again later.!*";
  }
  var imgmsgs = '';
  if (config.LANG === 'SI') {
    imgmsgs = "*මට anime නමක් දෙන්න !*";
  } else {
    imgmsgs = "*Give me a anime name !*";
  }
  var descgs = '';
  if (config.LANG === 'SI') {
    descgs = "එය ලබා දී ඇති anime නම පිළිබඳ විස්තර සපයයි.";
  } else {
    descgs = "It gives details of given anime name.";
  }
  var cants = '';
  if (config.LANG === 'SI') {
    cants = "I cant find this anime.";
  } else {
    cants = "I cant find this anime.";
  }
  var descg = '';
  if (config.LANG === 'SI') {
    descg = "එය ඔබගේ mention දුන් ඡායාරූපය ස්ටිකර් බවට පරිවර්තනය කරයි.";
  } else {
    descg = "It converts your replied photo to sticker.";
  }
  var imgmsg2 = '';
  if (config.LANG === 'SI') {
    imgmsg2 = "*ස්ටිකරයකට mention දෙන්න !*";
  } else {
    imgmsg2 = "*Reply to a sticker !*";
  }
  var descg2 = '';
  if (config.LANG === 'SI') {
    descg2 = "එය ඔබගේ mention දුන් sticker img බවට පරිවර්තනය කරයි.";
  } else {
    descg2 = "It converts your replied sticker to img.";
  }
  var desct1 = '';
  if (config.LANG === 'SI') {
    desct1 = "එය ලබා දී ඇති රූපය anime image එකක් බවට පරිවර්තනය කරයි.";
  } else {
    desct1 = "It convert given image to anime image.";
  }
  var desct2 = '';
  if (config.LANG === 'SI') {
    desct2 = "එය ලබා දී ඇති text එකක් ai image එකක් බවට පරිවර්තනය කරයි.";
  } else {
    desct2 = "It convert given text to ai image.";
  }
  var imgmsg3 = '';
  if (config.LANG === 'SI') {
    imgmsg3 = "*උදාහරණයක්: .imagine woman,hair cut collor red,full body,bokeh*";
  } else {
    imgmsg3 = "*Example: .imagine woman,hair cut collor red,full body,bokeh*";
  }
  var imgmsg1 = '';
  if (config.LANG === 'SI') {
    imgmsg1 = "*වීඩියෝවක් mention දෙන්න !*";
  } else {
    imgmsg1 = "*Reply to a video !*";
  }
  var descg3 = '';
  if (config.LANG === 'SI') {
    descg3 = "එය ඔබගේ mention දුන් වීඩියෝව audio බවට පරිවර්තනය කරයි.";
  } else {
    descg3 = "It converts your replied video to audio [mp3].";
  }
  var N_FOUND = '';
  if (config.LANG === 'SI') {
    N_FOUND = "*මට මෙම වීඩියෝව audio බවට පරිවර්තනය කළ නොහැකි විය :(*";
  } else {
    N_FOUND = "*I cant convert this video to audio :(*";
  }
  var imgmsg4 = '';
  if (config.LANG === 'SI') {
    imgmsg4 = "*කරුණාකර මට text එකක් දෙන්න !*";
  } else {
    imgmsg4 = "*Please give me a text !*";
  }
  var descg1 = '';
  if (config.LANG === 'SI') {
    descg1 = "එය text එකක් gif ස්ටිකරයක් බවට පරිවර්තනය කරයි";
  } else {
    descg = "it converts a text to gif sticker.";
  }
  if (config.LANG === 'SI') {
    descdg = "එය text එකක් ස්ටිකරයක් බවට පරිවර්තනය කරයි";
  } else {
    descdg = "it converts a text to sticker.";
  }
  if (config.LANG === 'SI') {
    cant = "මට මෙම රූපයේ පසුබිම ඉවත් කළ නොහැක.";
  } else {
    cant = "I can't remove background on this image.";
  }
  const _0x41bfd9 = {
    pattern: 'vv',
    react: '😁',
    desc: "To ViewOnceMessage",
    category: "convert",
    use: ".vv",
    filename: __filename
  };
  cmd(_0x41bfd9, async (_0x304d4b, _0x28f7dd, _0x2b6d40, {
    from: _0x597f7e,
    prefix: _0x5c2b9b,
    l: _0x469999,
    quoted: _0x367e88,
    body: _0x147aaf,
    isCmd: _0x12abac,
    command: _0x1974ab,
    args: _0x14837f,
    q: _0x2f9e16,
    isGroup: _0x452a36,
    sender: _0x26b89a,
    senderNumber: _0x31b4d7,
    botNumber2: _0x110f9e,
    botNumber: _0x1b1efb,
    pushname: _0xfe1dac,
    isMe: _0x39e348,
    isOwner: _0xb6c7dd,
    groupMetadata: _0x331a08,
    groupName: _0x36ce25,
    participants: _0x11772b,
    groupAdmins: _0x48c05d,
    isBotAdmins: _0x388d2f,
    isAdmins: _0x1fe8f5,
    reply: _0xb30dc8
  }) => {
    try {
      const _0x2a48b0 = _0x28f7dd.msg.contextInfo.quotedMessage.viewOnceMessageV2;
      if (_0x2a48b0) {
        if (_0x2a48b0.message.imageMessage) {
          console.log("Quot Entered");
          let _0x5ce837 = _0x2a48b0.message.imageMessage.caption;
          let _0x378644 = await _0x304d4b.downloadAndSaveMediaMessage(_0x2a48b0.message.imageMessage);
          const _0x396b7c = {
            url: _0x378644
          };
          const _0x26af23 = {
            image: _0x396b7c,
            caption: _0x5ce837
          };
          return _0x304d4b.sendMessage(_0x597f7e, _0x26af23);
        }
        if (_0x2a48b0.message.videoMessage) {
          let _0x34162e = _0x2a48b0.message.videoMessage.caption;
          let _0xa07f9b = await _0x304d4b.downloadAndSaveMediaMessage(_0x2a48b0.message.videoMessage);
          const _0x21cc19 = {
            url: _0xa07f9b
          };
          const _0x369f3d = {
            video: _0x21cc19,
            caption: _0x34162e
          };
          return _0x304d4b.sendMessage(_0x597f7e, _0x369f3d);
        }
      }
      if (!_0x28f7dd.quoted) {
        return _0x28f7dd.reply("```Ehhh Please Reply A ViewOnce Message```");
      }
      if (_0x28f7dd.quoted.mtype === "viewOnceMessage") {
        console.log("ViewOnce Entered");
        if (_0x28f7dd.quoted.message.imageMessage) {
          let _0x1255e9 = _0x28f7dd.quoted.message.imageMessage.caption;
          let _0xb2135 = await _0x304d4b.downloadAndSaveMediaMessage(_0x28f7dd.quoted.message.imageMessage);
          const _0x497d22 = {
            url: _0xb2135
          };
          const _0x59102f = {
            image: _0x497d22,
            caption: _0x1255e9
          };
          _0x304d4b.sendMessage(_0x597f7e, _0x59102f);
        } else {
          if (_0x28f7dd.quoted.message.videoMessage) {
            let _0x2dd69b = _0x28f7dd.quoted.message.videoMessage.caption;
            let _0x33683b = await _0x304d4b.downloadAndSaveMediaMessage(_0x28f7dd.quoted.message.videoMessage);
            const _0x275cbe = {
              url: _0x33683b
            };
            const _0x1af444 = {
              video: _0x275cbe,
              caption: _0x2dd69b
            };
            _0x304d4b.sendMessage(_0x597f7e, _0x1af444);
          }
        }
      } else {
        return _0x28f7dd.reply("```This is Not A ViewOnce Message```");
      }
      const _0x5c93bd = {
        text: '✅',
        key: _0x28f7dd.key
      };
      const _0x46be5a = {
        react: _0x5c93bd
      };
      await _0x304d4b.sendMessage(_0x597f7e, _0x46be5a);
    } catch (_0x4ee7c6) {
      _0xb30dc8("*Error !!*");
      _0x469999(_0x4ee7c6);
    }
  });
  const _0x2a8f35 = {
    pattern: "vcloner",
    react: '😁',
    desc: "To clone a voice",
    category: "convert",
    use: ".vcloner",
    filename: __filename
  };
  cmd(_0x2a8f35, async (_0x5e6ac2, _0x18bb0b, _0x64e7a3, {
    from: _0x589d7c,
    prefix: _0x11c398,
    l: _0x4a9000,
    quoted: _0x4d6e66,
    body: _0x5d5ac7,
    isCmd: _0x6af923,
    command: _0x7a90be,
    args: _0x271aaa,
    q: _0x2e5ef7,
    isGroup: _0x3ef487,
    sender: _0x5d397b,
    senderNumber: _0x4b3088,
    botNumber2: _0x42ac71,
    botNumber: _0x398984,
    pushname: _0x2c65fd,
    isMe: _0x2a07ef,
    isOwner: _0x368ac7,
    groupMetadata: _0x5d3476,
    groupName: _0x231296,
    participants: _0x138d0f,
    groupAdmins: _0x4945d0,
    isBotAdmins: _0x1e3cf7,
    isAdmins: _0x2f5132,
    reply: _0x54d11a
  }) => {
    try {
      if (!_0x2e5ef7) {
        return _0x54d11a("*Provide valid input text.*");
      }
      const _0x1230a4 = _0x2e5ef7.split('|');
      if (_0x1230a4.length !== 2) {
        return _0x54d11a("*Invalid input format. Provide two audio URLs separated by \"|\".*");
      }
      const _0x22df7e = _0x1230a4[0].trim();
      const _0x5808e8 = _0x1230a4[1].trim();
      const _0x2b7424 = "https://matrixcoder.vercel.app/api/VoiceCloner?init_audio=" + encodeURIComponent(_0x22df7e) + "&target_audio=" + encodeURIComponent(_0x5808e8) + "&key=" + vcapiKey;
      const _0x58ebd8 = await fetch(_0x2b7424);
      if (!_0x58ebd8.ok) {
        return _0x54d11a("Invalid response from the API. Status code: " + _0x58ebd8.status);
      }
      const _0x4ca535 = await _0x58ebd8.json();
      console.log("API Response:", _0x4ca535);
      if (_0x4ca535.status === "success" && _0x4ca535.output && _0x4ca535.output.length > 0) {
        const _0x463f97 = _0x4ca535.output[0];
        const _0x52c05e = {
          url: _0x463f97
        };
        const _0x2467c8 = {
          audio: _0x52c05e,
          mimetype: "audio/mp4",
          ptt: true,
          fileName: _0x2e5ef7 + ".mp3"
        };
        const _0x186623 = {
          quoted: _0x18bb0b
        };
        await _0x5e6ac2.sendMessage(_0x589d7c, _0x2467c8, _0x186623);
      } else {
        return _0x54d11a("Invalid or unexpected API response. " + JSON.stringify(_0x4ca535));
      }
      const _0x240e9d = {
        text: '✅',
        key: _0x18bb0b.key
      };
      const _0x4f4190 = {
        react: _0x240e9d
      };
      await _0x5e6ac2.sendMessage(_0x589d7c, _0x4f4190);
    } catch (_0x2d3dc6) {
      return _0x54d11a("An error occurred while processing the request. " + _0x2d3dc6.message);
      _0x4a9000(_0x2d3dc6);
    }
  });
  const _0xd41fb5 = {
    pattern: "emojimix",
    react: '😁',
    desc: "To convert 2 imoji to 1",
    category: "convert",
    use: ".emojimix",
    filename: __filename
  };
  cmd(_0xd41fb5, async (_0x2a101b, _0x1b1df3, _0x2dd17d, {
    from: _0x93bb5d,
    prefix: _0x2b200e,
    l: _0xbfae10,
    quoted: _0x5cc668,
    body: _0x3c4b63,
    isCmd: _0x1aaa5e,
    command: _0x5def10,
    args: _0x5a4a55,
    q: _0x56ec1d,
    isGroup: _0x22d745,
    sender: _0x1614e7,
    senderNumber: _0x49b475,
    botNumber2: _0xca94fa,
    botNumber: _0xc364a6,
    pushname: _0x476c0e,
    isMe: _0x408427,
    isOwner: _0x264598,
    groupMetadata: _0x5dfbfc,
    groupName: _0x11f436,
    participants: _0x2f16a5,
    groupAdmins: _0x12991f,
    isBotAdmins: _0x4deb57,
    isAdmins: _0xd26085,
    reply: _0x2d65e1
  }) => {
    try {
      let [_0x18a38c, _0x129df0] = _0x56ec1d.split`+`;
      if (!_0x18a38c) {
        throw "Example: " + (_0x2b200e + _0x5def10) + " 😅+🤔";
      }
      if (!_0x129df0) {
        throw "Example: " + (_0x2b200e + _0x5def10) + " 😅+🤔";
      }
      let _0x50b52e = await fetchJson("https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=" + encodeURIComponent(_0x18a38c) + '_' + encodeURIComponent(_0x129df0));
      for (let _0x300c99 of _0x50b52e.results) {
        let _0x5ef8af = await _0x2a101b.sendImageAsSticker(_0x93bb5d, _0x300c99.url, _0x1b1df3, {
          'packname': global.packname,
          'author': global.author,
          'categories': _0x300c99.tags
        });
        await fs.unlinkSync(_0x5ef8af);
      }
      const _0x28c60b = {
        text: '✅',
        key: _0x1b1df3.key
      };
      const _0x415977 = {
        react: _0x28c60b
      };
      await _0x2a101b.sendMessage(_0x93bb5d, _0x415977);
    } catch (_0x18865b) {
      _0x2d65e1("*Error !!*");
      _0xbfae10(_0x18865b);
    }
  });
  const _0x33a067 = {
    pattern: "trt",
    react: '🔖',
    desc: "To convert languages",
    category: "convert",
    use: ".trt",
    filename: __filename
  };
  cmd(_0x33a067, async (_0x490fe8, _0x1c1a40, _0x1f677b, {
    from: _0x3fdcad,
    prefix: _0xee0309,
    l: _0x37fb45,
    quoted: _0x5ddc26,
    body: _0x103962,
    isCmd: _0x1fc62c,
    command: _0x59703c,
    args: _0x132e7a,
    q: _0x55638d,
    isGroup: _0x38863e,
    sender: _0x392720,
    senderNumber: _0x2afb9d,
    botNumber2: _0x52a42f,
    botNumber: _0x56e3f6,
    pushname: _0xf2d517,
    isMe: _0x45008e,
    isOwner: _0x343351,
    groupMetadata: _0x3cd70f,
    groupName: _0x1c6853,
    participants: _0x5afb48,
    groupAdmins: _0xcafb04,
    isBotAdmins: _0x48984f,
    isAdmins: _0x79eccd,
    reply: _0x2ed2f0
  }) => {
    try {
      if (!_0x55638d) {
        return mreply("Usage: .trt <language code> <text> or reply message");
      }
      if (_0x55638d && _0x1c1a40.quoted && _0x1c1a40.quoted.text) {
        let _0x4c4401 = _0x55638d.slice(0, 2);
        try {
          let _0x41cfeb = _0x1c1a40.quoted.q;
          const _0x5a46d7 = {
            'to': _0x4c4401
          };
          let _0x3e18a3 = await translate('' + _0x41cfeb, _0x5a46d7);
          _0x2ed2f0(_0x3e18a3[0]);
        } catch {
          return _0x2ed2f0(" Language code not supported.");
        }
      } else {
        if (_0x55638d) {
          let _0x58381e = _0x55638d.slice(0, 2);
          let _0x34b295 = _0x55638d.substring(2).trim();
          const _0x475141 = {
            'to': _0x58381e
          };
          let _0x1f2102 = await translate('' + _0x34b295, _0x475141);
          _0x2ed2f0(_0x1f2102[0]);
        }
      }
      const _0x26f61b = {
        text: '✅',
        key: _0x1c1a40.key
      };
      const _0x5e5f45 = {
        react: _0x26f61b
      };
      await _0x490fe8.sendMessage(_0x3fdcad, _0x5e5f45);
    } catch (_0x13811e) {
      _0x2ed2f0("*Error !!*");
      _0x37fb45(_0x13811e);
    }
  });
  const _0x5d2156 = {
    pattern: "removebg",
    react: '🔮',
    alias: ["rmbg"],
    desc: descg,
    category: "convert",
    use: ".removebg <Reply to image>",
    filename: __filename
  };
  cmd(_0x5d2156, async (_0xb32eb9, _0x27c44e, _0x57b9c0, {
    from: _0xf29219,
    l: _0x396388,
    quoted: _0x4817b8,
    body: _0x3b3b07,
    isCmd: _0x3bcb8e,
    command: _0x511c04,
    args: _0x57cff1,
    q: _0x3fce91,
    isGroup: _0x448093,
    sender: _0x4f51d0,
    senderNumber: _0x28f708,
    botNumber2: _0x2a0e9c,
    botNumber: _0x155f12,
    pushname: _0x2c9f31,
    isMe: _0x4dd373,
    isOwner: _0x5515a1,
    groupMetadata: _0x2db575,
    groupName: _0x3f84a3,
    participants: _0x55440a,
    groupAdmins: _0x2c6f60,
    isBotAdmins: _0x28022f,
    isAdmins: _0x9a9b24,
    reply: _0xd889cd
  }) => {
    try {
      const _0x10c101 = _0x57b9c0.quoted ? _0x57b9c0.quoted.type === "viewOnceMessage" : false;
      const _0xa57259 = _0x57b9c0.quoted ? _0x57b9c0.quoted.type === "imageMessage" || (_0x10c101 ? _0x57b9c0.quoted.msg.type === "imageMessage" : false) : false;
      if (_0x57b9c0.type === "imageMessage" || _0xa57259) {
        var _0x358e6b = getRandom('');
        var _0x545db0 = getRandom('');
        let _0x2f75af = _0xa57259 ? await _0x57b9c0.quoted.download(_0x358e6b) : await _0x57b9c0.download(_0x358e6b);
        let _0x131009 = await fileType.fromBuffer(_0x2f75af);
        await fs.promises.writeFile('./' + _0x131009.ext, _0x2f75af);
        var _0x2bae97 = new FormData();
        _0x2bae97.append("image_file", fs.createReadStream('./' + _0x131009.ext));
        _0x2bae97.append("size", "auto");
        var _0x5d055a = await got.stream.post("https://api.remove.bg/v1.0/removebg", {
          'body': _0x2bae97,
          'headers': {
            'X-Api-Key': "fLYByZwbPqdyqkdKK6zcBN9H"
          }
        });
      }
      await pipeline(_0x5d055a, fs.createWriteStream(_0x545db0 + ".png"));
      const _0xbba681 = [];
      for (var _0x1f01e7 = 0; _0x1f01e7 < 1; _0x1f01e7++) {
        _0xbba681.push({
          'header': '',
          'title': "IMAGE",
          'description': "Download image type",
          'id': ".rbji " + _0x545db0 + ".png"
        });
        _0xbba681.push({
          'header': '',
          'title': "STICKER",
          'description': "Download sticker type",
          'id': ".rebgs " + _0x545db0 + ".png"
        });
        _0xbba681.push({
          'header': '',
          'title': "DOCUMENT",
          'description': "Download document type",
          'id': ".rbgd " + _0x545db0 + ".png"
        });
      }
      const _0x533d11 = {
        display_text: config.BTN,
        url: config.BTNURL,
        merchant_url: config.BTNURL
      };
      let _0x162607 = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify(_0x533d11)
      }, {
        'name': "single_select",
        'buttonParamsJson': JSON.stringify({
          'title': "Select news types",
          'sections': [{
            'title': "Please select a category",
            'highlight_label': "TalkDrove",
            'rows': _0xbba681
          }]
        })
      }];
      const _0x47a936 = {
        image: config.LOGO,
        header: '',
        footer: config.FOOTER,
        body: "> BACKGROUND REMOVER"
      };
      return await _0xb32eb9.sendButtonMessage(_0xf29219, _0x162607, _0x57b9c0, _0x47a936);
    } catch (_0x540a15) {
      _0xd889cd("*Error !!*");
      console.log(_0x540a15);
    }
  });
  const _0x49066b = {
    pattern: "rbgi",
    dontAddCommandList: true,
    filename: __filename
  };
  cmd(_0x49066b, async (_0x53e237, _0x2f1992, _0x59aecd, {
    from: _0x12142f,
    l: _0x32bfbe,
    quoted: _0x2cc1a4,
    body: _0x50f4f6,
    isCmd: _0x5e340b,
    command: _0x59c6a2,
    args: _0x209c08,
    q: _0x4f23a8,
    isGroup: _0xa5d8fc,
    sender: _0x32dfbf,
    senderNumber: _0x2b0d88,
    botNumber2: _0x15704c,
    botNumber: _0x104f98,
    pushname: _0x565932,
    isMe: _0x3bd152,
    isOwner: _0x5f3872,
    groupMetadata: _0x4ae33f,
    groupName: _0x2c58b6,
    participants: _0x36bc94,
    groupAdmins: _0x40c37f,
    isBotAdmins: _0xad34b4,
    isAdmins: _0x475622,
    reply: _0x41edd1
  }) => {
    try {
      const _0x3e1dbd = {
        text: '📥',
        key: _0x2f1992.key
      };
      const _0x41f46b = {
        react: _0x3e1dbd
      };
      await _0x53e237.sendMessage(_0x12142f, _0x41f46b);
      const _0x2cee3f = {
        quoted: _0x2f1992
      };
      await _0x53e237.sendMessage(_0x12142f, {
        'image': fs.readFileSync(_0x4f23a8),
        'caption': config.FOOTER
      }, _0x2cee3f);
      const _0x584a16 = {
        text: '✔',
        key: _0x2f1992.key
      };
      const _0x5ac297 = {
        react: _0x584a16
      };
      await _0x53e237.sendMessage(_0x12142f, _0x5ac297);
    } catch (_0x123e80) {
      _0x41edd1("*ERROR !!*");
      _0x32bfbe(_0x123e80);
    }
  });
  function _0x422818(_0x33ebb7, _0x5b89c5, _0x36dfa3, _0x2a6314, _0x3b4e5d) {
    return _0x7987(_0x2a6314 + 0x58, _0x3b4e5d);
  }
  const _0x30f964 = {
    pattern: "rebgs"
  };
  function _0x7987(_0x2feaaf, _0x5acca3) {
    const _0x401761 = _0xad7a();
    _0x7987 = function (_0x3ce5b5, _0x306d19) {
      _0x3ce5b5 = _0x3ce5b5 - 292;
      let _0x4c9cef = _0x401761[_0x3ce5b5];
      if (_0x7987.iMGNFf === undefined) {
        var _0x654fa0 = function (_0x1ede14) {
          let _0x4baa6f = '';
          let _0x2e4f8e = '';
          let _0x2033b1 = 0;
          let _0x6c865c;
          let _0x5b8fb2;
          for (let _0x9827ff = 0; _0x5b8fb2 = _0x1ede14.charAt(_0x9827ff++); ~_0x5b8fb2 && (_0x6c865c = _0x2033b1 % 4 ? _0x6c865c * 64 + _0x5b8fb2 : _0x5b8fb2, _0x2033b1++ % 4) ? _0x4baa6f += String.fromCharCode(255 & _0x6c865c >> (-2 * _0x2033b1 & 6)) : 0) {
            _0x5b8fb2 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x5b8fb2);
          }
          let _0xb7f9c3 = 0;
          for (let _0x4e0161 = _0x4baa6f.length; _0xb7f9c3 < _0x4e0161; _0xb7f9c3++) {
            _0x2e4f8e += '%' + ('00' + _0x4baa6f.charCodeAt(_0xb7f9c3).toString(16)).slice(-2);
          }
          return decodeURIComponent(_0x2e4f8e);
        };
        const _0x343537 = function (_0x2029a6, _0x1edb99) {
          let _0x3c57b9 = [];
          let _0x5a8911 = 0;
          let _0x270d77;
          let _0x430b10 = '';
          _0x2029a6 = _0x654fa0(_0x2029a6);
          let _0x203613;
          for (_0x203613 = 0; _0x203613 < 256; _0x203613++) {
            _0x3c57b9[_0x203613] = _0x203613;
          }
          for (_0x203613 = 0; _0x203613 < 256; _0x203613++) {
            _0x5a8911 = (_0x5a8911 + _0x3c57b9[_0x203613] + _0x1edb99.charCodeAt(_0x203613 % _0x1edb99.length)) % 256;
            _0x270d77 = _0x3c57b9[_0x203613];
            _0x3c57b9[_0x203613] = _0x3c57b9[_0x5a8911];
            _0x3c57b9[_0x5a8911] = _0x270d77;
          }
          _0x203613 = 0;
          _0x5a8911 = 0;
          for (let _0x58e576 = 0; _0x58e576 < _0x2029a6.length; _0x58e576++) {
            _0x203613 = (_0x203613 + 1) % 256;
            _0x5a8911 = (_0x5a8911 + _0x3c57b9[_0x203613]) % 256;
            _0x270d77 = _0x3c57b9[_0x203613];
            _0x3c57b9[_0x203613] = _0x3c57b9[_0x5a8911];
            _0x3c57b9[_0x5a8911] = _0x270d77;
            _0x430b10 += String.fromCharCode(_0x2029a6.charCodeAt(_0x58e576) ^ _0x3c57b9[(_0x3c57b9[_0x203613] + _0x3c57b9[_0x5a8911]) % 256]);
          }
          return _0x430b10;
        };
        _0x7987.cNYdnK = _0x343537;
        _0x2feaaf = arguments;
        _0x7987.iMGNFf = true;
      }
      const _0x43557f = _0x401761[0];
      const _0x2970f7 = _0x3ce5b5 + _0x43557f;
      const _0x11cf57 = _0x2feaaf[_0x2970f7];
      if (!_0x11cf57) {
        if (_0x7987.xkEcxe === undefined) {
          _0x7987.xkEcxe = true;
        }
        _0x4c9cef = _0x7987.cNYdnK(_0x4c9cef, _0x306d19);
        _0x2feaaf[_0x2970f7] = _0x4c9cef;
      } else {
        _0x4c9cef = _0x11cf57;
      }
      return _0x4c9cef;
    };
    return _0x7987(_0x2feaaf, _0x5acca3);
  }
  function _0x19d960(_0x5de217, _0xec606f, _0x4406c1, _0x1c443b, _0x3e65b0) {
    return _0x7987(_0x1c443b - 0x36, _0x5de217);
  }
  _0x30f964.dontAddCommandList = true;
  _0x30f964.filename = __filename;
  cmd(_0x30f964, async (_0x48c7be, _0x585824, _0x172e82, {
    from: _0x2340ef,
    l: _0x1b7988,
    quoted: _0x1ab2e6,
    body: _0x2399cf,
    isCmd: _0x1f5f09,
    command: _0x528345,
    args: _0x454eaa,
    q: _0x5c8ff8,
    isGroup: _0x436b31,
    sender: _0x21fae6,
    senderNumber: _0x3292c3,
    botNumber2: _0x5298f6,
    botNumber: _0x41d716,
    pushname: _0x22ff24,
    isMe: _0x3c9d63,
    isOwner: _0x3a5c91,
    groupMetadata: _0x172e69,
    groupName: _0x4eb6bd,
    participants: _0x5a56b8,
    groupAdmins: _0x1d5923,
    isBotAdmins: _0x59765f,
    isAdmins: _0x400270,
    reply: _0x25ee4e
  }) => {
    try {
      const _0x1f6777 = {
        text: '📥',
        key: _0x585824.key
      };
      const _0x55f7cf = {
        react: _0x1f6777
      };
      await _0x48c7be.sendMessage(_0x2340ef, _0x55f7cf);
      let _0x856641 = new Sticker(_0x5c8ff8, {
        'pack': _0x22ff24,
        'author': '',
        'type': _0x5c8ff8.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
        'categories': ['🤩', '🎉'],
        'id': "12345",
        'quality': 0x4b,
        'background': "transparent"
      });
      const _0x2e51a2 = await _0x856641.toBuffer();
      const _0x3dd1e5 = {
        sticker: _0x2e51a2
      };
      const _0x36659d = {
        quoted: _0x585824
      };
      await _0x48c7be.sendMessage(_0x2340ef, _0x3dd1e5, _0x36659d);
      const _0x571c4c = {
        text: '✔',
        key: _0x585824.key
      };
      const _0x257e7f = {
        react: _0x571c4c
      };
      await _0x48c7be.sendMessage(_0x2340ef, _0x257e7f);
    } catch (_0xc9fef3) {
      _0x25ee4e("*ERROR !!*");
      _0x1b7988(_0xc9fef3);
    }
  });
  const _0x3425d1 = {
    pattern: "rbgd",
    dontAddCommandList: true
  };
  function _0x4d1a63(_0x2e4b26, _0xaa4786, _0x10c441, _0x3c2c65, _0x280a82) {
    return _0x7987(_0xaa4786 + 0x396, _0x2e4b26);
  }
  _0x3425d1.filename = __filename;
  cmd(_0x3425d1, async (_0x1b07d4, _0x504b69, _0x83e0af, {
    from: _0x4f3436,
    l: _0x2fcd16,
    quoted: _0x44224b,
    body: _0x4ea1e1,
    isCmd: _0x2aa75b,
    command: _0x11c21e,
    args: _0xc9f4f7,
    q: _0x201148,
    isGroup: _0x48fbfb,
    sender: _0x419ca4,
    senderNumber: _0x3c19ec,
    botNumber2: _0x30d26f,
    botNumber: _0x13b5ce,
    pushname: _0x2346fd,
    isMe: _0x7f26a8,
    isOwner: _0x424bcd,
    groupMetadata: _0x1340ce,
    groupName: _0x4354b1,
    participants: _0x52bbe9,
    groupAdmins: _0x21319f,
    isBotAdmins: _0xd72571,
    isAdmins: _0x2621ac,
    reply: _0xc96acc
  }) => {
    try {
      const _0x1ca3fb = {
        text: '📥',
        key: _0x504b69.key
      };
      const _0xb5da73 = {
        react: _0x1ca3fb
      };
      await _0x1b07d4.sendMessage(_0x4f3436, _0xb5da73);
      const _0x41a00d = {
        quoted: _0x504b69
      };
      await _0x1b07d4.sendMessage(_0x4f3436, {
        'document': fs.readFileSync(_0x201148),
        'mimetype': "image/x-png",
        'fileName': "Removebg.png",
        'caption': config.FOOTER
      }, _0x41a00d);
      const _0x185001 = {
        text: '✔',
        key: _0x504b69.key
      };
      const _0xe6c1cb = {
        react: _0x185001
      };
      await _0x1b07d4.sendMessage(_0x4f3436, _0xe6c1cb);
    } catch (_0x4e66b7) {
      _0xc96acc("*ERROR !!*");
      _0x2fcd16(_0x4e66b7);
    }
  });
  const _0x1982f4 = {
    pattern: "attp",
    react: '✨',
    alias: ["texttogif"],
    desc: descg1,
    category: "convert",
    use: ".attp HI",
    filename: __filename
  };
  cmd(_0x1982f4, async (_0x1a060e, _0x2666bc, _0x45694f, {
    from: _0x3f5e9f,
    l: _0x20604d,
    quoted: _0x179e46,
    body: _0x355289,
    isCmd: _0x29127d,
    command: _0x4b1719,
    args: _0x798c23,
    q: _0x491e76,
    isGroup: _0x12d939,
    sender: _0x7ff4bf,
    senderNumber: _0x1ce3e0,
    botNumber2: _0x24cd82,
    botNumber: _0xeed11a,
    pushname: _0x1c4e1f,
    isMe: _0x52d36d,
    isOwner: _0x197f5a,
    groupMetadata: _0x3f14a9,
    groupName: _0xfc900b,
    participants: _0x30e762,
    groupAdmins: _0x4d116d,
    isBotAdmins: _0x11bfb5,
    isAdmins: _0x21e739,
    reply: _0x2a3ccf
  }) => {
    try {
      if (!_0x491e76) {
        return await _0x2a3ccf(imgmsg4);
      }
      let _0x3bf8df = await getBuffer("https://vihangayt.me/maker/text2gif?q=" + _0x491e76);
      const _0x15de27 = {
        quoted: _0x2666bc
      };
      await _0x1a060e.sendMessage(_0x3f5e9f, {
        'sticker': await videoToWebp(_0x3bf8df)
      }, _0x15de27);
    } catch (_0x173b0a) {
      _0x2a3ccf("*Error !!*");
      _0x20604d(_0x173b0a);
    }
  });
  const _0x4eb187 = {};
  function _0x247f29(_0x1f01c7, _0x532968, _0x25250d, _0x1042c7, _0x36334f) {
    return _0x7987(_0x532968 + 0x384, _0x25250d);
  }
  _0x4eb187.pattern = "ttp";
  _0x4eb187.react = '✨';
  _0x4eb187.alias = ["ttp", "texttoimg"];
  _0x4eb187.desc = '';
  _0x4eb187.category = "convert";
  _0x4eb187.use = ".ttp HI";
  _0x4eb187.filename = __filename;
  cmd(_0x4eb187, async (_0x54179e, _0x3d54ff, _0xa6ac1e, {
    from: _0x36e8d4,
    l: _0x2c6443,
    quoted: _0x22631f,
    body: _0x9a031f,
    isCmd: _0x260dd6,
    command: _0x1c44e0,
    args: _0x43dce3,
    q: _0x5467c7,
    isGroup: _0x58e58a,
    sender: _0x2bade8,
    senderNumber: _0x1871a7,
    botNumber2: _0x640853,
    botNumber: _0x294213,
    pushname: _0x278c54,
    isMe: _0x47fc6f,
    isOwner: _0x2501ae,
    groupMetadata: _0x2cbe73,
    groupName: _0x564695,
    participants: _0x5698fb,
    groupAdmins: _0xc21f3c,
    isBotAdmins: _0x103e85,
    isAdmins: _0x1e9159,
    reply: _0x131395
  }) => {
    try {
      if (!_0x5467c7) {
        return await _0x131395(imgmsg4);
      }
      let _0x499ad1 = await getBuffer("https://vihangayt.me/maker/text2img?q=" + _0x5467c7);
      let _0x32949a = new Sticker(_0x499ad1, {
        'pack': _0x278c54,
        'author': '',
        'type': _0x5467c7.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
        'categories': ['🤩', '🎉'],
        'id': "12345",
        'quality': 0x4b,
        'background': "transparent"
      });
      const _0x21a731 = await _0x32949a.toBuffer();
      const _0x2acb82 = {
        sticker: _0x21a731
      };
      const _0x24c4a4 = {
        quoted: _0x3d54ff
      };
      return _0x54179e.sendMessage(_0x36e8d4, _0x2acb82, _0x24c4a4);
    } catch (_0x310aff) {
      _0x131395("*Error !!*");
      _0x2c6443(_0x310aff);
    }
  });
  const _0x542ac9 = {
    pattern: "toptt",
    react: '🔊',
    alias: ["toaudio"],
    desc: descg3,
    category: "convert",
    use: ".toptt <Reply to video>",
    filename: __filename
  };
  cmd(_0x542ac9, async (_0x4261b7, _0x581288, _0x304528, {
    from: _0x288510,
    l: _0x77de7e,
    quoted: _0x508ab5,
    body: _0x3b6b2,
    isCmd: _0x43ddd9,
    command: _0x210277,
    args: _0x522ea0,
    q: _0xa9f033,
    isGroup: _0x2f8be3,
    sender: _0xa5d71a,
    senderNumber: _0xaa1792,
    botNumber2: _0x508785,
    botNumber: _0x415fcd,
    pushname: _0x3d86d0,
    isMe: _0x435465,
    isOwner: _0x17a701,
    groupMetadata: _0x50af02,
    groupName: _0x536a8b,
    participants: _0x55b442,
    groupAdmins: _0x3f1279,
    isBotAdmins: _0x1ef8da,
    isAdmins: _0x521582,
    reply: _0x167d3f
  }) => {
    try {
      let _0x4c1ad2 = _0x304528.quoted ? _0x304528.quoted.type === "videoMessage" : _0x304528 ? _0x304528.type === "videoMessage" : false;
      if (!_0x4c1ad2) {
        return await _0x167d3f(imgmsg1);
      }
      let _0x57653a = _0x304528.quoted ? await _0x304528.quoted.download() : await _0x304528.download();
      let _0x2c869e = await ffmpeg(_0x57653a, ["-vn", "-c:a", "libopus", "-b:a", "128k", "-vbr", 'on', "-compression_level", '10'], "mp4", "opus");
      const _0x51953b = {
        audio: _0x2c869e.options,
        mimetype: "audio/mpeg"
      };
      let _0x1c078c = await _0x4261b7.sendMessage(_0x304528.chat, _0x51953b, {
        'quoted': _0x304528
      });
      const _0x488ab0 = {
        text: '🎼',
        key: _0x1c078c.key
      };
      const _0x1d9e83 = {
        react: _0x488ab0
      };
      await _0x4261b7.sendMessage(_0x288510, _0x1d9e83);
    } catch (_0x27feca) {
      _0x167d3f("*Error !!*");
      _0x77de7e(_0x27feca);
    }
  });
  const _0x4cb5c7 = {
    pattern: "imagine",
    alias: ["texttoimage", "toimage", "aiimage"],
    react: '🤖',
    desc: desct2,
    category: "search",
    use: ".imagine  woman,hair cut collor red,full body,bokeh",
    filename: __filename
  };
  cmd(_0x4cb5c7, async (_0x1b4c3c, _0x261720, _0x18cb51, {
    from: _0x2b32fd,
    l: _0x4656a0,
    prefix: _0x399f0c,
    quoted: _0x2a8447,
    body: _0x2abce1,
    isCmd: _0x38cd8b,
    command: _0x3fee7a,
    args: _0x42e033,
    q: _0x118a35,
    isGroup: _0x3590ea,
    sender: _0x368696,
    senderNumber: _0x1a43af,
    botNumber2: _0x885d8b,
    botNumber: _0x4a2093,
    pushname: _0x1b6741,
    isMe: _0x1b2c75,
    isOwner: _0x1751ab,
    groupMetadata: _0x50f8da,
    groupName: _0x1dacad,
    participants: _0x563c42,
    groupAdmins: _0x23c41b,
    isBotAdmins: _0x18fb59,
    isAdmins: _0xac99b9,
    reply: _0x556519
  }) => {
    try {
      if (!_0x118a35) {
        return _0x556519(imgmsg3);
      }
      let _0x427644 = await fetchJson("https://gist.githubusercontent.com/vihangayt0/7dbb65f6adfe21538f7febd13982569a/raw/apilis.json");
      let _0x3c496a = _0x427644.users;
      let _0xfab2d7 = _0x3c496a[Math.floor(Math.random() * _0x3c496a.length)];
      const _0x2f8546 = await fetchJson(_0x427644.xz + "api/text-to-image?text=" + encodeURIComponent(_0x118a35) + "&apikey=" + _0xfab2d7);
      const _0x1b88b1 = {
        quoted: _0x261720
      };
      return await _0x1b4c3c.sendMessage(_0x2b32fd, {
        'image': await getBuffer(_0x2f8546.imageUrl),
        'caption': "\n*" + _0x2f8546.promptEn + "*\n"
      }, _0x1b88b1);
    } catch (_0x24fcf1) {
      _0x556519(cantf);
      _0x4656a0(_0x24fcf1);
    }
  });
  const _0x4c6170 = {
    pattern: "img2url",
    react: '🔗',
    alias: ["tourl", "imgurl", "telegraph", "imgtourl"],
    desc: desct,
    category: "convert",
    use: ".img2url <reply image>",
    filename: __filename
  };
  cmd(_0x4c6170, async (_0x46454a, _0x346be9, _0xbaa971, {
    from: _0x142091,
    l: _0x1e9451,
    prefix: _0x41ce6a,
    quoted: _0x4b6e64,
    body: _0xe7e980,
    isCmd: _0x51b75a,
    command: _0x250bfa,
    args: _0x1d58e3,
    q: _0x52a419,
    isGroup: _0x359566,
    sender: _0x456e4c,
    senderNumber: _0x42bbf8,
    botNumber2: _0x36f215,
    botNumber: _0xf2cf87,
    pushname: _0x260818,
    isMe: _0x2b97b7,
    isOwner: _0x344972,
    groupMetadata: _0x10ab38,
    groupName: _0x1277cb,
    participants: _0x46b8bb,
    groupAdmins: _0x2327eb,
    isBotAdmins: _0x23b151,
    isAdmins: _0x6945de,
    reply: _0x29b3af
  }) => {
    try {
      const _0x4bad6c = _0xbaa971.quoted ? _0xbaa971.quoted.type === "viewOnceMessage" : false;
      const _0x1b36a2 = _0xbaa971.quoted ? _0xbaa971.quoted.type === "imageMessage" || (_0x4bad6c ? _0xbaa971.quoted.msg.type === "imageMessage" : false) : false;
      if (_0xbaa971.type === "imageMessage" || _0x1b36a2) {
        const _0x4d336f = require("file-type");
        var _0x2bda82 = getRandom('');
        let _0x56bbb3 = _0x1b36a2 ? await _0xbaa971.quoted.download(_0x2bda82) : await _0xbaa971.download(_0x2bda82);
        let _0x2e26cf = await _0x4d336f.fromBuffer(_0x56bbb3);
        await fs.promises.writeFile('./' + _0x2e26cf.ext, _0x56bbb3);
        img2url('./' + _0x2e26cf.ext).then(async _0x1ad3f1 => {
          await _0x29b3af("\n" + _0x1ad3f1 + "\n");
        });
      } else {
        return _0x29b3af(imgmsg);
      }
    } catch (_0x422b65) {
      _0x29b3af(cantf);
      _0x1e9451(_0x422b65);
    }
  });
  const _0x170f1d = {
    pattern: "enhance",
    react: '↗️',
    alias: ["imgenhance", "quality", "qualityimage", "tohd"],
    desc: desct,
    category: "convert",
    use: ".enhance <reply low quality image>",
    filename: __filename
  };
  cmd(_0x170f1d, async (_0x38ecb0, _0x3c4b18, _0x4e6e20, {
    from: _0xfe9cdd,
    l: _0xc30976,
    prefix: _0x55d69e,
    quoted: _0x5c924e,
    body: _0x6c46ce,
    isCmd: _0x519e20,
    command: _0x3eca93,
    args: _0x1fa8fb,
    q: _0x484522,
    isGroup: _0x2e3b06,
    sender: _0x29c4da,
    senderNumber: _0x31d091,
    botNumber2: _0x28338b,
    botNumber: _0x127b7f,
    pushname: _0x2f3d9d,
    isMe: _0x5b2c5d,
    isOwner: _0x563b56,
    groupMetadata: _0x506d7c,
    groupName: _0x33ce2f,
    participants: _0x2d94f6,
    groupAdmins: _0x58643a,
    isBotAdmins: _0x3f02c7,
    isAdmins: _0x414ec9,
    reply: _0x153ffa
  }) => {
    try {
      const _0x28d7ce = _0x4e6e20.quoted ? _0x4e6e20.quoted.type === "viewOnceMessage" : false;
      const _0x2b181b = _0x4e6e20.quoted ? _0x4e6e20.quoted.type === "imageMessage" || (_0x28d7ce ? _0x4e6e20.quoted.msg.type === "imageMessage" : false) : false;
      if (_0x4e6e20.type === "imageMessage" || _0x2b181b) {
        const _0x5d1aee = require("file-type");
        var _0x14e986 = getRandom('');
        let _0x1d34ca = _0x2b181b ? await _0x4e6e20.quoted.download(_0x14e986) : await _0x4e6e20.download(_0x14e986);
        let _0x41b8ff = await _0x5d1aee.fromBuffer(_0x1d34ca);
        await fs.promises.writeFile('./' + _0x41b8ff.ext, _0x1d34ca);
        img2url('./' + _0x41b8ff.ext).then(async _0x2a09b8 => {
          const _0x43fb09 = {
            quoted: _0x3c4b18
          };
          await _0x38ecb0.sendMessage(_0xfe9cdd, {
            'image': await getBuffer("https://vihangayt.me/tools/enhance?url=" + _0x2a09b8),
            'caption': config.FOOTER
          }, _0x43fb09);
        });
      } else {
        return _0x153ffa(imgmsg);
      }
    } catch (_0x45b7cc) {
      _0x153ffa(cantf);
      _0xc30976(_0x45b7cc);
    }
  });
  const _0x40780c = {
    pattern: "colorize",
    react: '🎨',
    alias: ["colorizer", "tocolour", "colourize"],
    desc: desct,
    category: "convert",
    use: ".colorize <reply black & white image>",
    filename: __filename
  };
  cmd(_0x40780c, async (_0x471213, _0x3eeb0e, _0x4cf4b7, {
    from: _0x5d6c4d,
    l: _0x166d10,
    prefix: _0x334a6b,
    quoted: _0xacc1e1,
    body: _0x36821d,
    isCmd: _0x2bc14d,
    command: _0x512aaa,
    args: _0x263eb8,
    q: _0x5a4eb8,
    isGroup: _0x566fee,
    sender: _0x1a17fd,
    senderNumber: _0x2e78a2,
    botNumber2: _0x3d4dd6,
    botNumber: _0x1d06fa,
    pushname: _0x1b64a8,
    isMe: _0xd48845,
    isOwner: _0x12648c,
    groupMetadata: _0x1a65f9,
    groupName: _0x1c27a4,
    participants: _0x58cd29,
    groupAdmins: _0x50935c,
    isBotAdmins: _0x9d4938,
    isAdmins: _0x3d2d9c,
    reply: _0x12314a
  }) => {
    try {
      const _0x574d49 = _0x4cf4b7.quoted ? _0x4cf4b7.quoted.type === "viewOnceMessage" : false;
      const _0x290585 = _0x4cf4b7.quoted ? _0x4cf4b7.quoted.type === "imageMessage" || (_0x574d49 ? _0x4cf4b7.quoted.msg.type === "imageMessage" : false) : false;
      if (_0x4cf4b7.type === "imageMessage" || _0x290585) {
        const _0x548e8f = require("file-type");
        var _0x465e8a = getRandom('');
        let _0x564d6d = _0x290585 ? await _0x4cf4b7.quoted.download(_0x465e8a) : await _0x4cf4b7.download(_0x465e8a);
        let _0x32f4c7 = await _0x548e8f.fromBuffer(_0x564d6d);
        await fs.promises.writeFile('./' + _0x32f4c7.ext, _0x564d6d);
        img2url('./' + _0x32f4c7.ext).then(async _0x5eeeb7 => {
          try {
            const _0x107867 = {
              quoted: _0x3eeb0e
            };
            await _0x471213.sendMessage(_0x5d6c4d, {
              'image': await getBuffer("https://vihangayt.me/tools/colorize?url=" + _0x5eeeb7),
              'caption': config.FOOTER
            }, _0x107867);
          } catch (_0xcd16e1) {
            let _0x473d49 = await fetchJson("https://gist.githubusercontent.com/vihangayt0/7dbb65f6adfe21538f7febd13982569a/raw/apilis.json");
            let _0x5b50a2 = _0x473d49.users;
            let _0x33c917 = _0x5b50a2[Math.floor(Math.random() * _0x5b50a2.length)];
            const _0xce2f0b = {
              quoted: _0x3eeb0e
            };
            await _0x471213.sendMessage(_0x5d6c4d, {
              'image': {
                'url': _0x473d49.xz + "api/colorizer?url=" + _0x5eeeb7 + "&apikey=" + _0x33c917
              },
              'caption': config.FOOTER
            }, _0xce2f0b);
          }
        });
      } else {
        return _0x12314a(imgmsg);
      }
    } catch (_0xe23ffb) {
      _0x12314a(cantf);
      _0x166d10(_0xe23ffb);
    }
  });
  const _0x18abe2 = {
    pattern: "toanime",
    react: '🏮',
    alias: ["imgtoanime", "animeimg"],
    desc: desct1,
    category: "convert",
    use: ".toanime <reply image>",
    filename: __filename
  };
  cmd(_0x18abe2, async (_0x28cafe, _0x1ab74e, _0x35956a, {
    from: _0x17752e,
    l: _0x27785d,
    prefix: _0x3bb3a7,
    quoted: _0x13151e,
    body: _0x458638,
    isCmd: _0x1918b4,
    command: _0x2a20a6,
    args: _0x4c4b37,
    q: _0x457383,
    isGroup: _0x5d2a7b,
    sender: _0x161dd5,
    senderNumber: _0xb6964e,
    botNumber2: _0x168621,
    botNumber: _0x41511f,
    pushname: _0x304b44,
    isMe: _0x20e709,
    isOwner: _0x59ce12,
    groupMetadata: _0x4dbb5b,
    groupName: _0x3edb2b,
    participants: _0x46e836,
    groupAdmins: _0x4d0c46,
    isBotAdmins: _0x292e31,
    isAdmins: _0xe716b3,
    reply: _0x4bdd06
  }) => {
    try {
      const _0x563263 = _0x35956a.quoted ? _0x35956a.quoted.type === "viewOnceMessage" : false;
      const _0x10e9ad = _0x35956a.quoted ? _0x35956a.quoted.type === "imageMessage" || (_0x563263 ? _0x35956a.quoted.msg.type === "imageMessage" : false) : false;
      if (_0x35956a.type === "imageMessage" || _0x10e9ad) {
        const _0x179f02 = require("file-type");
        var _0x576827 = getRandom('');
        let _0x4b4ce1 = _0x10e9ad ? await _0x35956a.quoted.download(_0x576827) : await _0x35956a.download(_0x576827);
        let _0x28cc29 = await _0x179f02.fromBuffer(_0x4b4ce1);
        await fs.promises.writeFile('./' + _0x28cc29.ext, _0x4b4ce1);
        img2url('./' + _0x28cc29.ext).then(async _0x2917bd => {
          try {
            const _0x4b702f = {
              quoted: _0x1ab74e
            };
            await _0x28cafe.sendMessage(_0x17752e, {
              'image': await getBuffer("https://vihangayt.me/tools/toanime?url=" + _0x2917bd),
              'caption': config.FOOTER
            }, _0x4b702f);
          } catch (_0x289cd2) {
            let _0xbe861b = await fetchJson("https://gist.githubusercontent.com/vihangayt0/7dbb65f6adfe21538f7febd13982569a/raw/apilis.json");
            let _0x121cdd = _0xbe861b.users;
            let _0x38d52a = _0x121cdd[Math.floor(Math.random() * _0x121cdd.length)];
            const _0x9abc86 = {
              quoted: _0x1ab74e
            };
            await _0x28cafe.sendMessage(_0x17752e, {
              'image': {
                'url': _0xbe861b.xz + "api/toanime?url=" + _0x2917bd + "&apikey=" + _0x38d52a
              },
              'caption': config.FOOTER
            }, _0x9abc86);
          }
        });
      } else {
        return _0x4bdd06(imgmsg);
      }
    } catch (_0x168b2f) {
      _0x4bdd06(cantf);
      _0x27785d(_0x168b2f);
    }
  });
  const _0x53866b = {
    pattern: "sticker",
    react: '🔮'
  };
  function _0x552bc6(_0x3ad4c3, _0xe4fc71, _0x1ad80a, _0x3d9a2a, _0x45e015) {
    return _0x7987(_0x1ad80a + 0x3c1, _0x3d9a2a);
  }
  _0x53866b.alias = ['s', "stic"];
  _0x53866b.desc = descg;
  _0x53866b.category = "convert";
  _0x53866b.use = ".sticker <Reply to image>";
  _0x53866b.filename = __filename;
  cmd(_0x53866b, async (_0x37db1d, _0x81a286, _0x3cace1, {
    from: _0x125f86,
    l: _0x146497,
    quoted: _0x3f2b44,
    body: _0x5bdeb0,
    isCmd: _0x50ea1f,
    command: _0x5e4c1c,
    args: _0x3abbd4,
    q: _0x929260,
    isGroup: _0x2ff883,
    sender: _0x91d2f6,
    senderNumber: _0x1ffa31,
    botNumber2: _0x24052d,
    botNumber: _0x3c2f35,
    pushname: _0x5be499,
    isMe: _0x128493,
    isOwner: _0x34460e,
    groupMetadata: _0x54f5ac,
    groupName: _0x23077d,
    participants: _0x5a1174,
    groupAdmins: _0x2d70c7,
    isBotAdmins: _0x4f68fb,
    isAdmins: _0x4b2559,
    reply: _0x190422
  }) => {
    try {
      const _0x2f0a84 = _0x3cace1.quoted ? _0x3cace1.quoted.type === "viewOnceMessage" : false;
      const _0x5bb59c = _0x3cace1.quoted ? _0x3cace1.quoted.type === "imageMessage" || (_0x2f0a84 ? _0x3cace1.quoted.msg.type === "imageMessage" : false) : false;
      const _0x5cde53 = _0x3cace1.quoted ? _0x3cace1.quoted.type === "stickerMessage" : false;
      if (_0x3cace1.type === "imageMessage" || _0x5bb59c) {
        var _0x224943 = getRandom('');
        if (_0x5bb59c) {
          await _0x3cace1.quoted.download(_0x224943);
        } else {
          await _0x3cace1.download(_0x224943);
        }
        let _0x18adc8 = new Sticker(_0x224943 + ".jpg", {
          'pack': _0x5be499,
          'author': '',
          'type': _0x929260.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
          'categories': ['🤩', '🎉'],
          'id': "12345",
          'quality': 0x4b,
          'background': "transparent"
        });
        const _0x566512 = await _0x18adc8.toBuffer();
        const _0x316fcf = {
          sticker: _0x566512
        };
        const _0x1f13e9 = {
          quoted: _0x81a286
        };
        return _0x37db1d.sendMessage(_0x125f86, _0x316fcf, _0x1f13e9);
      } else {
        if (_0x5cde53) {
          var _0x24717f = getRandom('');
          await _0x3cace1.quoted.download(_0x24717f);
          let _0x2c776d = new Sticker(_0x24717f + ".webp", {
            'pack': _0x5be499,
            'author': '',
            'type': _0x929260.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
            'categories': ['🤩', '🎉'],
            'id': "12345",
            'quality': 0x4b,
            'background': "transparent"
          });
          const _0x7a8f10 = await _0x2c776d.toBuffer();
          const _0x17d52f = {
            sticker: _0x7a8f10
          };
          const _0x3655ca = {
            quoted: _0x81a286
          };
          return _0x37db1d.sendMessage(_0x125f86, _0x17d52f, _0x3655ca);
        } else {
          return await _0x190422(imgmsg);
        }
      }
    } catch (_0x2bd714) {
      _0x190422("*Error !!*");
      _0x146497(_0x2bd714);
    }
  });
  const _0xc53563 = {
    pattern: "toimg",
    react: '🔮',
    alias: ['s', "stic"],
    desc: descg2,
    category: "convert",
    use: ".sticker <Reply to image>",
    filename: __filename
  };
  cmd(_0xc53563, async (_0x1de54f, _0x4000db, _0x564d75, {
    from: _0x4d570d,
    l: _0x3c8427,
    quoted: _0x5e04c9,
    body: _0x2f109e,
    isCmd: _0x201955,
    command: _0x15f432,
    args: _0x402dbc,
    q: _0x2d1512,
    isGroup: _0x5f3794,
    sender: _0x553e93,
    senderNumber: _0x1da686,
    botNumber2: _0x27537d,
    botNumber: _0x5a8f37,
    pushname: _0x1e607a,
    isMe: _0x57d929,
    isOwner: _0x5548af,
    groupMetadata: _0x11192d,
    groupName: _0x337636,
    participants: _0x4bc6b2,
    groupAdmins: _0x589b12,
    isBotAdmins: _0x3541e1,
    isAdmins: _0x4b77fc,
    reply: _0x2c7dea
  }) => {
    try {
      const _0x45ecf1 = _0x564d75.quoted ? _0x564d75.quoted.type === "stickerMessage" : false;
      if (_0x45ecf1) {
        var _0x29bb5d = getRandom('');
        let _0x52a7ba = _0x45ecf1 ? await _0x564d75.quoted.download(_0x29bb5d) : await _0x564d75.download(_0x29bb5d);
        let _0xa2ffdf = await fileType.fromBuffer(_0x52a7ba);
        await fs.promises.writeFile('./' + _0xa2ffdf.ext, _0x52a7ba);
        const _0x5877c5 = {
          quoted: _0x4000db
        };
        await _0x1de54f.sendMessage(_0x4d570d, {
          'image': fs.readFileSync('./' + _0xa2ffdf.ext),
          'caption': config.FOOTER
        }, _0x5877c5);
      } else {
        return await _0x2c7dea(imgmsg2);
      }
    } catch (_0x1e37bc) {
      _0x2c7dea("*Error !!*");
      _0x3c8427(_0x1e37bc);
    }
  });
  if (config.COMMAND_TYPE === "button") {
    const _0x187082 = {
      pattern: 'ss',
      react: "🗃️",
      desc: "Url to screenshot convert",
      category: "convert",
      use: ".ss",
      filename: __filename
    };
    cmd(_0x187082, async (_0x56a4ec, _0x4dfeef, _0xf68122, {
      from: _0x25968d,
      q: _0xc5f1b7,
      pushname: _0x1977f6,
      reply: _0x571981
    }) => {
      try {
        const _0x1947a0 = [];
        const _0x51f503 = new Map();
        for (let _0xa6718e = 0; _0xa6718e < 1; _0xa6718e++) {
          const _0x1486b6 = commands[_0xa6718e];
          if (!_0x1486b6.dontAddCommandList && _0x1486b6.pattern !== undefined) {
            const _0x3acd60 = _0x1486b6.category.toUpperCase();
            if (!_0x51f503.has(_0x3acd60)) {
              _0x1947a0.push(_0x3acd60);
              _0x51f503.set(_0x3acd60, []);
            }
            _0x51f503.get(_0x3acd60).push(_0x1486b6.pattern);
          }
        }
        const _0x47d4dd = [];
        for (const _0x1a01e0 of _0x1947a0) {
          _0x47d4dd.push({
            'header': "Select you want type of screenshot",
            'title': "Desktop type",
            'description': '',
            'id': ".desktop " + _0xc5f1b7
          });
          _0x47d4dd.push({
            'header': '',
            'title': "Phone type",
            'description': '',
            'id': ".ssphone " + _0xc5f1b7
          });
          _0x47d4dd.push({
            'header': '',
            'title': "Tab type",
            'description': '',
            'id': ".sstab " + _0xc5f1b7
          });
        }
        const _0xc6df2a = {
          display_text: config.BTN,
          url: config.BTNURL,
          merchant_url: config.BTNURL
        };
        let _0x59d945 = [{
          'name': "cta_url",
          'buttonParamsJson': JSON.stringify(_0xc6df2a)
        }, {
          'name': "single_select",
          'buttonParamsJson': JSON.stringify({
            'title': "Select screenshot types",
            'sections': [{
              'title': "Please select a category",
              'highlight_label': "TalkDrove",
              'rows': _0x47d4dd
            }]
          })
        }];
        const _0x1a94f3 = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: "`✦ 𝗦𝗖𝗥𝗘𝗘𝗡𝗦𝗛𝗢𝗧 𝗧𝗔𝗞𝗘𝗥 ✦`\n    "
        };
        return await _0x56a4ec.sendButtonMessage(_0x25968d, _0x59d945, _0xf68122, _0x1a94f3);
      } catch (_0x16c063) {
        _0x571981("*Error !!*");
        console.log(_0x16c063);
      }
    });
    const _0x33e86b = {
      pattern: "desktop",
      use: ".screenshot",
      react: '🎥',
      desc: "Convert url to screenshot",
      category: '',
      filename: __filename
    };
    cmd(_0x33e86b, async (_0xd4eb5c, _0x5139d6, _0x48c021, {
      from: _0x43f912,
      q: _0x3a86a1,
      reply: _0x52e461
    }) => {
      function _0x10b503(_0x59b6ff, _0x3e25a3, _0x4a5c2b, _0x2524b8, _0xa76a30) {
        return _0x7987(_0x59b6ff + 0x346 + 0x58, _0x3e25a3);
      }
      function _0x2b41fc(_0x25ce1a, _0x43d908, _0x144cbd, _0x555260, _0x506f34) {
        return _0x7987(_0x555260 + 0x412 - 0x36, _0x43d908);
      }
      const _0x55d0fa = {
        'kiUYA': function (_0xb2fcb0, _0x3123e5) {
          return _0xb2fcb0(_0x3123e5);
        },
        'DZkFv': "*Please enter a query or a url!*",
        'raKob': function (_0x1401b0, _0x3d311b) {
          return _0x1401b0(_0x3d311b);
        },
        'IXayU': function (_0xf44eb6, _0xee7dbf, _0x1c705f, _0x350155) {
          return _0xf44eb6(_0xee7dbf, _0x1c705f, _0x350155);
        },
        'XCFct': "desktop",
        'yHFGD': function (_0x562df1, _0x1aa909) {
          return _0x562df1 + _0x1aa909;
        },
        'mTZgS': ".jpg",
        'mERCE': "quick_reply",
        'LsQVW': "Image type",
        'iZfGR': function (_0x435f96, _0xe502eb) {
          return _0x435f96 + _0xe502eb;
        },
        'kSAQT': ".ssi ",
        'ZNMAZ': "Document type",
        'MPZQu': function (_0x953331, _0x26fa2b) {
          return _0x953331 + _0x26fa2b;
        },
        'jYpPG': ".ssd ",
        'TeUvY': "*Error !!*"
      };
      function _0xbf094d(_0x444579, _0x44b212, _0x2ffe4a, _0x5d9021, _0x7c32ad) {
        return _0x7987(_0x444579 - 0x335 - 0x36, _0x5d9021);
      }
      function _0x5712c6(_0x39eb9e, _0x27d621, _0x264f4d, _0x4db5ee, _0x198e9f) {
        return _0x7987(_0x39eb9e - 0x327 + 0x3c1, _0x198e9f);
      }
      function _0xcd2bd7(_0x2886bb, _0x474ca2, _0x3cc555, _0x46899f, _0x5405bf) {
        return _0x7987(_0x46899f - 0x622 + 0x3c1, _0x474ca2);
      }
      try {
        if (!_0x3a86a1) {
          return await _0x52e461("*Please enter a query or a url!*");
        }
        let _0x3ecf11 = getRandom('');
        let _0x5e1787 = await sswebA(_0x3a86a1, true, "desktop");
        fs.writeFileSync(_0x3ecf11 + ".jpg", _0x5e1787);
        let _0x52bd20 = [{
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "Image type",
            'id': ".ssi " + _0x3ecf11 + ".jpg"
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "Document type",
            'id': ".ssd " + _0x3ecf11 + ".jpg"
          })
        }];
        const _0x517d86 = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: "*Powered by Hamza*"
        };
        return await _0xd4eb5c.sendButtonMessage(_0x43f912, _0x52bd20, _0x5139d6, _0x517d86);
      } catch (_0x364737) {
        console.log(_0x364737);
        _0x52e461("*Error !!*");
      }
    });
    const _0x4a176e = {
      pattern: "ssphone",
      use: ".screenshot",
      react: '🎥',
      desc: "Convert url to screenshot",
      category: '',
      filename: __filename
    };
    cmd(_0x4a176e, async (_0x1daf5c, _0x2a713, _0x2c54a8, {
      from: _0x29cfa7,
      q: _0x375bfa,
      reply: _0x18d1cb
    }) => {
      function _0x23bc34(_0x29b32c, _0x55fc50, _0x3dbe51, _0x176791, _0x5594a9) {
        return _0x7987(_0x5594a9 - 0x2 + 0x58, _0x176791);
      }
      function _0xa8ffd6(_0x503de9, _0x3a03ca, _0x5b0bc7, _0x43e886, _0x3bba1c) {
        return _0x7987(_0x503de9 - 0x458 + 0x3c1, _0x3bba1c);
      }
      function _0x2a2f29(_0x5df547, _0x263c21, _0x14dba4, _0x57588d, _0x3abd55) {
        return _0x7987(_0x263c21 - 0x2a9 + 0x58, _0x5df547);
      }
      function _0x1c29b4(_0x274710, _0x5c8749, _0x442bae, _0x550aff, _0x1af0c3) {
        return _0x7987(_0x5c8749 + 0x18 + 0x396, _0x550aff);
      }
      function _0x455de0(_0x1b14dc, _0x43f6c4, _0x8139d8, _0x4c0972, _0x565b0e) {
        return _0x7987(_0x1b14dc - 0x272 + 0x384, _0x43f6c4);
      }
      const _0x4ee77e = {
        'rrxid': function (_0x39674d, _0x1aac92) {
          return _0x39674d(_0x1aac92);
        },
        'HlLQx': "*Please enter a query or a url!*",
        'eHTSN': function (_0x5cf494, _0x35d659, _0x5ed77c, _0x4b96ab) {
          return _0x5cf494(_0x35d659, _0x5ed77c, _0x4b96ab);
        },
        'HaBxK': "phone",
        'sjLxR': function (_0x2fec0b, _0x45b918) {
          return _0x2fec0b + _0x45b918;
        },
        'jkItu': ".jpg",
        'bdloC': "quick_reply",
        'Daejt': "Image type",
        'qzJwH': function (_0x223d47, _0x38abeb) {
          return _0x223d47 + _0x38abeb;
        },
        'LVgSG': ".ssi ",
        'vTwQJ': "Document type",
        'OOoYu': function (_0x1d3f46, _0xf90aa4) {
          return _0x1d3f46 + _0xf90aa4;
        },
        'zxlUR': ".ssd ",
        'npsrj': function (_0x4f85e8, _0x5097ec) {
          return _0x4f85e8(_0x5097ec);
        },
        'OqCnf': "*Error !!*"
      };
      try {
        if (!_0x375bfa) {
          return await _0x18d1cb("*Please enter a query or a url!*");
        }
        let _0x4a5597 = getRandom('');
        let _0x4afc71 = await sswebA(_0x375bfa, true, "phone");
        fs.writeFileSync(_0x4a5597 + ".jpg", _0x4afc71);
        let _0x1a9719 = [{
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "Image type",
            'id': ".ssi " + _0x4a5597 + ".jpg"
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "Document type",
            'id': ".ssd " + _0x4a5597 + ".jpg"
          })
        }];
        const _0x40e306 = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: "*Powered by Hamza*"
        };
        return await _0x1daf5c.sendButtonMessage(_0x29cfa7, _0x1a9719, _0x2a713, _0x40e306);
      } catch (_0x2109b6) {
        console.log(_0x2109b6);
        _0x18d1cb("*Error !!*");
      }
    });
    const _0x5c9157 = {
      pattern: "sstab",
      use: ".screenshot",
      react: '🎥',
      desc: "Convert url to screenshot",
      category: '',
      filename: __filename
    };
    cmd(_0x5c9157, async (_0x3f983a, _0x2fa053, _0x3d7839, {
      from: _0x41515a,
      q: _0x560938,
      reply: _0x3cc8f4
    }) => {
      function _0x14e4cb(_0x40cd4c, _0x4d3784, _0x2384fc, _0x54f54e, _0x47cf34) {
        return _0x7987(_0x54f54e - 0x22f - 0x36, _0x40cd4c);
      }
      function _0x4f0d90(_0x3ee452, _0x531e76, _0x5169d9, _0x3e4a69, _0x4f3ca6) {
        return _0x7987(_0x5169d9 - 0x34e + 0x384, _0x3ee452);
      }
      const _0x8141ef = {
        'QGohl': function (_0x29cddf, _0x2195b5) {
          return _0x29cddf(_0x2195b5);
        },
        'MQEEU': "*Please enter a query or a url!*",
        'iAITV': function (_0x23ee07, _0x34c049, _0x484516, _0x3f97b1) {
          return _0x23ee07(_0x34c049, _0x484516, _0x3f97b1);
        },
        'wCkmY': "tablet",
        'XMRlE': function (_0x12a310, _0x253bd8) {
          return _0x12a310 + _0x253bd8;
        },
        'JByzN': ".jpg",
        'shtcu': "quick_reply",
        'wJcwS': "Image type",
        'WkwIV': ".ssi ",
        'gUPYd': "Document type",
        'BgjFd': function (_0x1a7bfb, _0xc3cc05) {
          return _0x1a7bfb + _0xc3cc05;
        },
        'RhjZD': function (_0x4af7d4, _0x1e087a) {
          return _0x4af7d4 + _0x1e087a;
        },
        'AYOlZ': ".ssd ",
        'RGjIp': function (_0x4cd505, _0x22fbcf) {
          return _0x4cd505(_0x22fbcf);
        },
        'FUNtO': "*Error !!*"
      };
      function _0x5c0ee6(_0x289fa2, _0x4b8543, _0x220ec2, _0x28e859, _0x2c4a05) {
        return _0x7987(_0x2c4a05 - 0x100 + 0x396, _0x220ec2);
      }
      function _0x2787f2(_0x16a11c, _0x2f4754, _0x54f44f, _0x3bba05, _0x1b7a84) {
        return _0x7987(_0x3bba05 - 0x21e + 0x3c1, _0x2f4754);
      }
      function _0x49a99d(_0x522520, _0x453730, _0x41ceeb, _0x5cc49a, _0x5c5d7b) {
        return _0x7987(_0x5cc49a - 0x2f0 + 0x3c1, _0x41ceeb);
      }
      try {
        if (!_0x560938) {
          return await _0x3cc8f4("*Please enter a query or a url!*");
        }
        let _0x60d356 = getRandom('');
        let _0x5f2b8f = await sswebA(_0x560938, true, "tablet");
        fs.writeFileSync(_0x60d356 + ".jpg", _0x5f2b8f);
        let _0x26eec9 = [{
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "Image type",
            'id': ".ssi " + _0x60d356 + ".jpg"
          })
        }, {
          'name': "quick_reply",
          'buttonParamsJson': JSON.stringify({
            'display_text': "Document type",
            'id': ".ssd " + _0x60d356 + ".jpg"
          })
        }];
        const _0x5d376d = {
          image: config.LOGO,
          header: '',
          footer: config.FOOTER,
          body: "*Powered by Hamza*"
        };
        return await _0x3f983a.sendButtonMessage(_0x41515a, _0x26eec9, _0x2fa053, _0x5d376d);
      } catch (_0x28d662) {
        console.log(_0x28d662);
        _0x3cc8f4("*Error !!*");
      }
    });
    const _0x2ca090 = {
      pattern: "ssi",
      dontAddCommandList: true,
      filename: __filename
    };
    cmd(_0x2ca090, async (_0x6db49a, _0x1a0357, _0x41235e, {
      from: _0x390024,
      l: _0x3f8612,
      quoted: _0x11825c,
      body: _0x376bd2,
      isCmd: _0x4450c0,
      command: _0x369e79,
      args: _0x377e4d,
      q: _0x2fe045,
      isGroup: _0x5899e3,
      sender: _0x1634e8,
      senderNumber: _0x50a111,
      botNumber2: _0x425e93,
      botNumber: _0x5b2178,
      pushname: _0x16068a,
      isMe: _0xb5bb23,
      isOwner: _0x376e0e,
      groupMetadata: _0x56813b,
      groupName: _0x2cda59,
      participants: _0x581d53,
      groupAdmins: _0x8a8d68,
      isBotAdmins: _0x417f9e,
      isAdmins: _0x1225ca,
      reply: _0x3a5a14
    }) => {
      function _0x3cc6ae(_0xf361c6, _0x5abb57, _0x42891a, _0x3123b6, _0x467b11) {
        return _0x7987(_0x3123b6 - 0x597 + 0x396, _0x42891a);
      }
      function _0x4c38d7(_0x5321df, _0x2ccca6, _0x349efd, _0x2b5a1f, _0x4d2f3) {
        return _0x7987(_0x5321df - 0x5b + 0x396, _0x2b5a1f);
      }
      const _0x5655f1 = {
        'Lmumh': function (_0x2f8282, _0xc6f73d) {
          return _0x2f8282(_0xc6f73d);
        },
        'oTwUn': "*ERROR !!*",
        'CYXNd': function (_0x4abfe1, _0x1e5d48) {
          return _0x4abfe1(_0x1e5d48);
        }
      };
      function _0x4d2873(_0xfca1, _0x12cb2a, _0x1bebfe, _0x25828d, _0x5e2bac) {
        return _0x7987(_0x12cb2a + 0x3dc - 0x36, _0xfca1);
      }
      function _0x5aeddc(_0x1fb40d, _0xfa6fa, _0x380678, _0x35d84a, _0x13bcd2) {
        return _0x7987(_0x380678 - 0x3b2 - 0x36, _0x35d84a);
      }
      function _0x2e9dfc(_0x49a302, _0x344c10, _0x298992, _0x3cd6b4, _0x2a485e) {
        return _0x7987(_0x49a302 + 0x22f - 0x36, _0x344c10);
      }
      try {
        const _0x3555ad = {
          text: '📥',
          key: _0x1a0357.key
        };
        const _0xeb6912 = {
          react: _0x3555ad
        };
        await _0x6db49a.sendMessage(_0x390024, _0xeb6912);
        const _0x5e9aa4 = {
          quoted: _0x1a0357
        };
        await _0x6db49a.sendMessage(_0x390024, {
          'image': fs.readFileSync(_0x2fe045),
          'caption': config.FOOTER
        }, _0x5e9aa4);
        const _0x2d0b69 = {
          text: '✔',
          key: _0x1a0357.key
        };
        const _0x25d643 = {
          react: _0x2d0b69
        };
        await _0x6db49a.sendMessage(_0x390024, _0x25d643);
      } catch (_0x551ed4) {
        _0x3a5a14("*ERROR !!*");
        _0x3f8612(_0x551ed4);
      }
    });
    const _0x597828 = {
      pattern: "ssd",
      dontAddCommandList: true,
      filename: __filename
    };
    cmd(_0x597828, async (_0x526a98, _0xb014ea, _0x34903f, {
      from: _0xb295a,
      l: _0x593d4a,
      quoted: _0x5ace7b,
      body: _0x1d8ddb,
      isCmd: _0x48b740,
      command: _0x3d089b,
      args: _0xb26d94,
      q: _0x5c19d8,
      isGroup: _0x3caefe,
      sender: _0x3bc6dc,
      senderNumber: _0x41439e,
      botNumber2: _0x15ad8e,
      botNumber: _0x4d5ab7,
      pushname: _0x6ed70e,
      isMe: _0x3116b3,
      isOwner: _0xc72442,
      groupMetadata: _0x3605ee,
      groupName: _0x39201d,
      participants: _0x15f64e,
      groupAdmins: _0x21f138,
      isBotAdmins: _0x383b15,
      isAdmins: _0x35bd9f,
      reply: _0xe7b94d
    }) => {
      function _0x56fd6d(_0xb4feae, _0x11f75f, _0x2c11d9, _0x447de3, _0x1444c1) {
        return _0x7987(_0x1444c1 - 0x61 + 0x396, _0x2c11d9);
      }
      function _0x2ae5da(_0x4f33db, _0x3da96d, _0xe73e11, _0x511cce, _0x1183ff) {
        return _0x7987(_0xe73e11 - 0x158 - 0x36, _0x4f33db);
      }
      function _0x44bf8e(_0x562506, _0x202b1a, _0x5e2dca, _0x1327b7, _0x1c87e0) {
        return _0x7987(_0x562506 - 0x35d + 0x396, _0x202b1a);
      }
      const _0x3f2cc7 = {
        'EFafx': "image/jpeg",
        'hdzWe': function (_0x4cb1c7, _0x5a8b9a) {
          return _0x4cb1c7 + _0x5a8b9a;
        },
        'tGucb': "screenshot",
        'JKvOZ': ".jpg",
        'UJjDG': function (_0x320345, _0x3b0729) {
          return _0x320345(_0x3b0729);
        },
        'Lrsnl': "*ERROR !!*"
      };
      function _0x49530a(_0x30ebb7, _0x363b2e, _0x2a3b86, _0x4e8885, _0x258745) {
        return _0x7987(_0x363b2e - 0x3e1 + 0x58, _0x258745);
      }
      function _0x4e99e4(_0x19cebb, _0x1d72af, _0x3428d0, _0x4fb9e6, _0x38263a) {
        return _0x7987(_0x38263a + 0x1cc + 0x58, _0x4fb9e6);
      }
      try {
        const _0x154bb7 = {
          text: '📥',
          key: _0xb014ea.key
        };
        const _0x7fc1a = {
          react: _0x154bb7
        };
        await _0x526a98.sendMessage(_0xb295a, _0x7fc1a);
        const _0x14356e = {
          quoted: _0xb014ea
        };
        await _0x526a98.sendMessage(_0xb295a, {
          'document': fs.readFileSync(_0x5c19d8),
          'mimetype': "image/jpeg",
          'fileName': "screenshot.jpg",
          'caption': config.FOOTER
        }, _0x14356e);
        const _0x255abe = {
          text: '✔',
          key: _0xb014ea.key
        };
        const _0x2e844a = {
          react: _0x255abe
        };
        await _0x526a98.sendMessage(_0xb295a, _0x2e844a);
      } catch (_0x523885) {
        _0xe7b94d("*ERROR !!*");
        _0x593d4a(_0x523885);
      }
    });
  }