(function(_0x9f00d, _0x4f6594) {
    var _0x39e16e = _0x2070,
        _0x2e1eeb = _0x9f00d();
    while (!![]) {
        try {
            var _0x618219 = parseInt(_0x39e16e(0x1cc)) / 0x1 * (parseInt(_0x39e16e(0x1c3)) / 0x2) + parseInt(_0x39e16e(0x1d0)) / 0x3 + -parseInt(_0x39e16e(0x1c6)) / 0x4 + parseInt(_0x39e16e(0x1c9)) / 0x5 * (parseInt(_0x39e16e(0x1c4)) / 0x6) + -parseInt(_0x39e16e(0x1cb)) / 0x7 * (parseInt(_0x39e16e(0x1ce)) / 0x8) + -parseInt(_0x39e16e(0x1d4)) / 0x9 * (-parseInt(_0x39e16e(0x1cd)) / 0xa) + parseInt(_0x39e16e(0x1c5)) / 0xb;
            if (_0x618219 === _0x4f6594) break;
            else _0x2e1eeb['push'](_0x2e1eeb['shift']());
        } catch (_0xf6cbd5) {
            _0x2e1eeb['push'](_0x2e1eeb['shift']());
        }
    }
} (_0x2624, 0x7bedd));

function _0x2624() {
    var _0x23881a = ['3570904QHHnEI', 'inputpoisa', '720750lWGUMD', 'inputaana', 'value', 'sqmtr', '16749nhunuS', 'sqft', 'getElementById', 'inputBigha', 'inputdhur', 'toFixed', '8SjUcgl', '828vQIbBE', '2486187EAgmbq', '761748vohCfb', 'inputkathha', 'inputropani', '9705alvEaq', 'inputdam', '14tWzpFX', '175547AwhplU', '830XwLfga'];
    _0x2624 = function () {
        return _0x23881a;
    };
    return _0x2624();
}

function _0x2070(_0x39f7ea, _0x27463f) {
    return _0x2070 = function (_0x2070e9) {
        _0x2070e9 = _0x2070e9 - 0x1c1;
        var _0xf4ddf6 = _0x2624[_0x2070e9];
        return _0xf4ddf6;
    }, _0x2070(_0x39f7ea, _0x27463f);
}

function areaConverter(inputType, value) {
    var inputBigha = document['getElementById']('inputBigha'),
        inputKathha = document['getElementById']('inputkathha'),
        inputRopani = document['getElementById']('inputropani'),
        inputDhur = document['getElementById']('inputdhur'),
        inputAana = document['getElementById']('inputaana'),
        inputPoisa = document['getElementById']('inputpoisa'),
        inputDam = document['getElementById']('inputdam'),
        sqMtr = document['getElementById']('sqmtr'),
        sqFt = document['getElementById']('sqft');

    inputType == 'inputBigha' && (inputKathha['value'] = (value * 20)['toFixed'](2), inputRopani['value'] = (value * 13.31)['toFixed'](2), inputAana['value'] = (value * 212.96)['toFixed'](2), inputDhur['value'] = (value * 400)['toFixed'](2), inputPoisa['value'] = (value * 851.84)['toFixed'](2), inputDam['value'] = (value * 3407.36)['toFixed'](2), sqMtr['value'] = (value * 6772.63)['toFixed'](2), sqFt['value'] = (value * 72900)['toFixed'](2));

    inputType == 'inputkathha' && (inputBigha['value'] = (value / 20)['toFixed'](3), inputRopani['value'] = (value * 13.31 / 20)['toFixed'](2), inputAana['value'] = (value * 212.96 / 20)['toFixed'](2), inputDhur['value'] = (value * 400 / 20)['toFixed'](2), inputPoisa['value'] = (value * 851.84 / 20)['toFixed'](2), inputDam['value'] = (value * 3407.36 / 20)['toFixed'](2), sqMtr['value'] = (value * 338.63)['toFixed'](2), sqFt['value'] = (value * 3645)['toFixed'](2));

    inputType == 'inputropani' && (inputBigha['value'] = (value / 13.31)['toFixed'](3), inputKathha['value'] = (value * 20 / 13.31)['toFixed'](2), inputAana['value'] = (value * 212.96 / 13.31)['toFixed'](2), inputDhur['value'] = (value * 400 / 13.31)['toFixed'](3), inputPoisa['value'] = (value * 851.84 / 13.31)['toFixed'](2), inputDam['value'] = (value * 3407.36 / 13.31)['toFixed'](2), sqMtr['value'] = (value * 508.74)['toFixed'](2), sqFt['value'] = (value * 0x1564)['toFixed'](2));

    inputType == 'inputdhur' && (inputBigha['value'] = (value / 400)['toFixed'](4), inputKathha['value'] = (value * 20 / 400)['toFixed'](3), inputRopani['value'] = (value * 13.31 / 400)['toFixed'](3), inputAana['value'] = (value * 212.96 / 400)['toFixed'](2), inputPoisa['value'] = (value * 851.84 / 400)['toFixed'](2), inputDam['value'] = (value * 3407.36 / 400)['toFixed'](2), sqMtr['value'] = (value * 16.93)['toFixed'](2), sqFt['value'] = (value * 182.25)['toFixed'](2));

    inputType == 'inputaana' && (inputBigha['value'] = (value / 212.96)['toFixed'](4), inputKathha['value'] = (value * 20 / 212.96)['toFixed'](3), inputRopani['value'] = (value * 13.31 / 212.96)['toFixed'](3), inputDhur['value'] = (value * 400 / 212.96)['toFixed'](2), inputPoisa['value'] = (value * 851.84 / 212.96)['toFixed'](2), inputDam['value'] = (value * 3407.36 / 212.96)['toFixed'](2), sqMtr['value'] = (value * 31.8)['toFixed'](2), sqFt['value'] = (value * 342.25)['toFixed'](2));

    inputType == 'inputpoisa' && (inputBigha['value'] = (value / 851.84)['toFixed'](4), inputKathha['value'] = (value * 20 / 851.84)['toFixed'](3), inputRopani['value'] = (value * 13.31 / 851.84)['toFixed'](3), inputAana['value'] = (value * 212.96 / 851.84)['toFixed'](2), inputDhur['value'] = (value * 400 / 851.84)['toFixed'](2), inputDam['value'] = (value * 3407.36 / 851.84)['toFixed'](2), sqMtr['value'] = (value * 9.95)['toFixed'](2), sqFt['value'] = (value * 85.56)['toFixed'](2));

    inputType == 'inputdam' && (inputBigha['value'] = (value / 3407.36)['toFixed'](5), inputKathha['value'] = (value * 20 / 3407.36)['toFixed'](4), inputRopani['value'] = (value * 13.31 / 3407.36)['toFixed'](4), inputAana['value'] = (value * 212.96 / 3407.36)['toFixed'](3), inputDhur['value'] = (value * 400 / 3407.36)['toFixed'](2), inputPoisa['value'] = (value * 851.84 / 3407.36)['toFixed'](2), sqMtr['value'] = (value * 1.99)['toFixed'](2), sqFt['value'] = (value * 21.39)['toFixed'](2));

    inputType == 'sqmtr' && (inputBigha['value'] = (value / 6772.63)['toFixed'](5), inputKathha['value'] = (value / 338.63)['toFixed'](4), inputRopani['value'] = (value / 508.74)['toFixed'](4), inputAana['value'] = (value / 31.8)['toFixed'](3), inputDhur['value'] = (value / 16.93)['toFixed'](3), inputPoisa['value'] = (value / 9.95)['toFixed'](3), inputDam['value'] = (value / 1.99)['toFixed'](2), sqFt['value'] = (value / 0.093)['toFixed'](2));

    inputType == 'sqft' && (inputBigha['value'] = (value / 72900)['toFixed'](6), inputKathha['value'] = (value / 3645)['toFixed'](5), inputRopani['value'] = (value / 0x1564)['toFixed'](5), inputAana['value'] = (value / 342.25)['toFixed'](4), inputDhur['value'] = (value / 182.25)['toFixed'](4), inputPoisa['value'] = (value / 85.56)['toFixed'](3), inputDam['value'] = (value / 21.39)['toFixed'](3), sqMtr['value'] = (value * 0.093)['toFixed'](3));
}