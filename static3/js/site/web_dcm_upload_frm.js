var a10_0x2230b8 = a10_0x4b43
;(function(_0x520e9c, _0xe185e3) {
    console.log('function, here')
    var _0x5e62ea = a10_0x4b43,
        _0x96b82a = _0x520e9c()
    while (!![]) {
        try {
            var _0x192ea7 =
                -parseInt(_0x5e62ea(0x1f7)) / 0x1 +
                (parseInt(_0x5e62ea(0x262)) / 0x2) * (parseInt(_0x5e62ea(0x1e3)) / 0x3) +
                (parseInt(_0x5e62ea(0x272)) / 0x4) * (parseInt(_0x5e62ea(0x1f0)) / 0x5) +
                -parseInt(_0x5e62ea(0x254)) / 0x6 +
                -parseInt(_0x5e62ea(0x229)) / 0x7 +
                (-parseInt(_0x5e62ea(0x1f3)) / 0x8) * (parseInt(_0x5e62ea(0x24e)) / 0x9) +
                parseInt(_0x5e62ea(0x209)) / 0xa
            if (_0x192ea7 === _0xe185e3) break
            else _0x96b82a['push'](_0x96b82a['shift']())
        } catch (_0x2e2dd8) {
            _0x96b82a['push'](_0x96b82a['shift']())
        }
    }
})(a10_0x1231, 0x28f97)
var fileCounter = 0x0,
    dcmFileCounter = 0x0,
    progress,
    dcmFiles = [],
    currZip = new JSZip(),
    totalSize = 0x0,
    dcmPointer = -0x1,
    uploadErrors = ![],
    startTime,
    str1 = term_scanned_so_far + '\x20',
    str2 = '\x20' + term_files,
    uploadKey,
    xhrCounter = 0x0,
    physkey,
    orderkey = 'ag5lfnJhZC1jb25zdWx0c3ISCxIFT3JkZXIYgICglqqKjgoM',
    clientToken = 'R2tLJsIWnvU_hieV-CxtU65AQ0pmnslyyVRqcuI4I9urignKIMGGqQqmXlIrebk3PWBZw__CCWxKYWrSYCQdwVn6H0WlczoLFlRQlzVDqiQ=',
    originPhysKey =
        '1D3RNYPQMco1F_OCOVlv62GvKlQTO_1EyS3iuIVFiTQY1_iLP7YZO1HS4Bgnyyj-hqKlDfisKud_kUxlzVfw7t3PYQ9oAY6wc9JNlbxusTUHZyk8nIKxtteLNFbeeZ6LPgbrxXJEaaCqsXyHvsOHy9PTWnWrxljK-p9-g11DANdvt8kwVLtRLZ_tnekMmzPGQ3-FlB4vQtOGfr8s8MxIHImzMRskJpk1RfFl5-lLouY%3D',
    lang,
    acst,
    totalJobBytes = 0x0,
    sentBytes = 0x0,
    done = ![],
    batchSize = 0x989680,
    maxFileSize = 0x23c34600,
    skippedFiles = 0x0,
    chunk = 0x0,
    previousIsChunk = ![],
    pt1,
    pt2,
    pt3,
    sideImgTimer
$(a10_0x2230b8(0x245))['on'](a10_0x2230b8(0x233), function() {
    var _0xca3293 = a10_0x2230b8
    $(_0xca3293(0x26c))[_0xca3293(0x271)](_0xca3293(0x1fc), 'none'),
        $('#instruct')['css'](_0xca3293(0x1fc), _0xca3293(0x1e7)),
        $(_0xca3293(0x20b))[_0xca3293(0x271)]('display', _0xca3293(0x255)),
        $(_0xca3293(0x224))[_0xca3293(0x25e)]('src', _0xca3293(0x1fd)),
        show_msg(term_press_choose_file + _0xca3293(0x1ec) + term_video_on_page + _0xca3293(0x27a), _0xca3293(0x259), ![])
    try {
        window['parent'][_0xca3293(0x21c)]({ top: 0x0, left: 0x0, behavior: _0xca3293(0x1f5) })
    } catch (_0xff8dc8) {
        console[_0xca3293(0x275)](_0xca3293(0x223))
    }
}),
    $(a10_0x2230b8(0x22b))['on'](a10_0x2230b8(0x233), function() {
        var _0x420186 = a10_0x2230b8
        window[_0x420186(0x1f2)][_0x420186(0x256)] =
            _0x420186(0x266) +
            clientToken +
            _0x420186(0x225) +
            originPhysKey +
            _0x420186(0x21f) +
            physkey +
            _0x420186(0x240) +
            orderkey +
            _0x420186(0x21d) +
            lang +
            _0x420186(0x27b) +
            acst +
            _0x420186(0x234) +
            dispname +
            _0x420186(0x205) +
            cell +
            _0x420186(0x210) +
            email +
            '&pt1=' +
            pt1 +
            _0x420186(0x220) +
            pt2 +
            _0x420186(0x235) +
            pt3
    }),
    $('#choosefile')['on'](a10_0x2230b8(0x233), function() {
        console.log('on')
        var _0x3d1816 = a10_0x2230b8
        $(_0x3d1816(0x1f1))['css'](_0x3d1816(0x1fc), 'inline'), show_msg('', '', !![])
        try {
            window[_0x3d1816(0x268)][_0x3d1816(0x21c)]({ top: 0x0, left: 0x0, behavior: _0x3d1816(0x1f5) })
        } catch (_0x3c30c8) {
            console[_0x3d1816(0x275)](_0x3d1816(0x223))
        }
    }),
    $(a10_0x2230b8(0x202))['on']('change', function(_0x364ca9) {
        var _0x422964 = a10_0x2230b8
        //
        // var _0x33fd96 = a10_0x4b43,
        //     _0x3f53a7 = '_0xdb33ca'['target'][_0x33fd96(0x1ff)]
        // return (str1 = term_dealt_so_far + '\x20'), (str2 = '\x20' + term_images), initProgress(term_general_progress_status), (startTime = new Date()[_0x33fd96(0x23a)]())

        // return (
        //     show_msg(term_chosen_folder_empty + '.', 'red', !![]),
        //     $(_0x422964(0x20b))[_0x422964(0x271)]('display', 'block'),
        //     $(_0x422964(0x26a))[_0x422964(0x270)](''),
        //     $(_0x422964(0x1f1))['css'](_0x422964(0x1fc), _0x422964(0x1e7)),
        //     init_vars()
        // )

        return compress_files()

        try {
            window[_0x422964(0x268)][_0x422964(0x21c)]({ top: 0x0, left: 0x0, behavior: _0x422964(0x1f5) })
        } catch (_0x1f71c7) {
            console['log'](_0x422964(0x223))
        }

        $('#choosediv')[_0x422964(0x271)](_0x422964(0x1fc), _0x422964(0x1e7)),
            displayProcessingGif(),
            show_msg(term_please_wait + _0x422964(0x25a) + term_dont_close_window + '!', '#116566', ![]),
            initProgress(term_locating_image_files)

        var _0x51daae = _0x364ca9[_0x422964(0x1f4)][_0x422964(0x267)] || _0x364ca9['dataTransfer'][_0x422964(0x267)],
            _0x1a5551 = _0x51daae[_0x422964(0x22d)]

        if (_0x1a5551) {
            for (var _0x230502 = 0x0, _0xa2c7c9; (_0xa2c7c9 = _0x51daae[_0x230502]); _0x230502++) {
                var _0x10e0c7 = new FileReader()
                _0x10e0c7[_0x422964(0x215)] = (function(_0x2bf2da) {
                    return function(_0xdb33ca) {
                        var _0x33fd96 = a10_0x4b43,
                            _0x3f53a7 = _0xdb33ca['target'][_0x33fd96(0x1ff)]
                        _0x3f53a7 == 'DICM' && (dcmFiles[_0x33fd96(0x1eb)](_0x2bf2da), (totalJobBytes += _0x2bf2da[_0x33fd96(0x1e9)]))
                        ;(fileCounter += 0x1), updateProgress(fileCounter, _0x1a5551)

                        if (_0x230502 == fileCounter) {
                            if (dcmFiles[_0x33fd96(0x22d)] !== 0x0) {
                                ;(str1 = term_dealt_so_far + '\x20'), (str2 = '\x20' + term_images), initProgress(term_general_progress_status), (startTime = new Date()[_0x33fd96(0x23a)]())
                                var _0x545e73 = get_upload_key()
                                _0x545e73 = true
                                console.log(_0x545e73, 'here, else')
                                _0x545e73
                                    ? ($(_0x33fd96(0x211))[_0x33fd96(0x271)](_0x33fd96(0x1fc), _0x33fd96(0x255)), compress_files())
                                    : (show_msg(term_unexpected_error + '.', _0x33fd96(0x212), !![]),
                                      $(_0x33fd96(0x20b))[_0x33fd96(0x271)](_0x33fd96(0x1fc), _0x33fd96(0x255)),
                                      $(_0x33fd96(0x26a))['text'](''),
                                      $(_0x33fd96(0x1f1))[_0x33fd96(0x271)](_0x33fd96(0x1fc), 'none'),
                                      $(_0x33fd96(0x224))[_0x33fd96(0x25e)](_0x33fd96(0x260), _0x33fd96(0x1f6)),
                                      init_vars())
                            }
                            // return true
                            else {
                                show_msg(term_unexpected_error + '.', _0x33fd96(0x212), !![]),
                                    $(_0x33fd96(0x20b))[_0x33fd96(0x271)](_0x33fd96(0x1fc), _0x33fd96(0x255)),
                                    $(_0x33fd96(0x26a))['text'](''),
                                    $(_0x33fd96(0x1f1))[_0x33fd96(0x271)](_0x33fd96(0x1fc), 'none'),
                                    $(_0x33fd96(0x224))[_0x33fd96(0x25e)](_0x33fd96(0x260), _0x33fd96(0x1f6)),
                                    init_vars()
                                // show_msg(term_no_medical_images + '.', 'red', !![]),
                                //     $(_0x33fd96(0x20b))[_0x33fd96(0x271)]('display', 'block'),
                                //     $(_0x33fd96(0x26a))[_0x33fd96(0x270)](''),
                                //     $('#choosemsg')[_0x33fd96(0x271)](_0x33fd96(0x1fc), _0x33fd96(0x1e7)),
                                //     $(_0x33fd96(0x224))[_0x33fd96(0x25e)](_0x33fd96(0x260), _0x33fd96(0x1fd)),
                                //     init_vars()
                            }
                        }
                    }
                })(_0xa2c7c9)
                var _0x169a85 = _0xa2c7c9[_0x422964(0x1ef)](0x80, 0x84)
                _0x10e0c7[_0x422964(0x273)](_0x169a85)
            }
        } else {
            console.log('here, else')
            show_msg(term_chosen_folder_empty + '.', 'red', !![]),
                $(_0x422964(0x20b))[_0x422964(0x271)]('display', 'block'),
                $(_0x422964(0x26a))[_0x422964(0x270)](''),
                $(_0x422964(0x1f1))['css'](_0x422964(0x1fc), _0x422964(0x1e7)),
                init_vars()
        }
    })
function compress_files() {
    console.log('here compress_files')
    $('#choosediv').css('display', 'none')
    var _0xd18f12 = a10_0x2230b8
    if (chunk === 0x0) {
        dcmPointer += 0x1
        if (dcmPointer >= dcmFiles['length']) {
            totalSize !== 0x0
                ? generate_and_send('False')
                : (uploadErrors
                      ? (show_msg(term_operation_errors + '.', _0xd18f12(0x212), !![]),
                        clearTimeout(sideImgTimer),
                        setTimeout(function() {
                            var _0x35aa11 = _0xd18f12
                            $(_0x35aa11(0x224))[_0x35aa11(0x25e)](_0x35aa11(0x260), _0x35aa11(0x1f6)), $(_0x35aa11(0x224))[_0x35aa11(0x25e)](_0x35aa11(0x227), '')
                        }, 0x1f4),
                        rpt_ext_sys(![]))
                      : skippedFiles
                      ? (show_msg(term_operation_success + '.\x20' + term_files_skipped + _0xd18f12(0x25d) + skippedFiles + ')', _0xd18f12(0x203), !![]),
                        clearTimeout(sideImgTimer),
                        setTimeout(function() {
                            var _0x581c00 = _0xd18f12
                            $('#sideimg')['attr'](_0x581c00(0x260), _0x581c00(0x26f)), $(_0x581c00(0x224))['attr']('alt', '')
                        }, 0x1f4),
                        $(_0xd18f12(0x231))[_0xd18f12(0x271)](_0xd18f12(0x1fc), _0xd18f12(0x255)),
                        rpt_ext_sys(!![]))
                      : (show_msg(term_operation_success + '.', _0xd18f12(0x249), !![]),
                        clearTimeout(sideImgTimer),
                        setTimeout(function() {
                            var _0x24c95e = _0xd18f12
                            $(_0x24c95e(0x224))['attr'](_0x24c95e(0x260), _0x24c95e(0x26f)), $(_0x24c95e(0x224))[_0x24c95e(0x25e)](_0x24c95e(0x227), '')
                        }, 0x1f4),
                        $(_0xd18f12(0x231))['css'](_0xd18f12(0x1fc), _0xd18f12(0x255)),
                        rpt_ext_sys(!![])),
                  $('#counter')[_0xd18f12(0x270)](''),
                  $('#time')['text'](''),
                  $('#bytes')[_0xd18f12(0x270)](''),
                  renew_acst(),
                  $(_0xd18f12(0x24c))['css'](_0xd18f12(0x1fc), _0xd18f12(0x255)),
                  (done = !![]),
                  detailsSubmited ? hideContactDetails() : setTimeout(hideContactDetails, 0xd6d8))
            return
        }
    }
    f = dcmFiles[dcmPointer]
    if (chunk !== 0x0 || f[_0xd18f12(0x1e9)] < maxFileSize) {
        ;(chunk !== 0x0 || f[_0xd18f12(0x1e9)] > batchSize) && (chunk += 0x1)
        var _0x3ac105 = new FileReader()
        ;(_0x3ac105[_0xd18f12(0x215)] = (function(_0xca3314) {
            return function(_0x460b45) {
                var _0x4343a9 = a10_0x4b43,
                    _0x2cc834 = _0x460b45[_0x4343a9(0x1f4)][_0x4343a9(0x1ff)],
                    _0x68fd95 = 0x0
                chunk === 0x0
                    ? (_0x68fd95 = _0xca3314[_0x4343a9(0x1e9)])
                    : chunk * batchSize <= _0xca3314[_0x4343a9(0x1e9)]
                    ? (_0x68fd95 = batchSize)
                    : (_0x68fd95 = _0xca3314[_0x4343a9(0x1e9)] - (chunk - 0x1) * batchSize)
                updateProgress(dcmPointer + 0x1, dcmFiles[_0x4343a9(0x22d)])
                if (totalSize !== 0x0 && (chunk !== 0x0 || previousIsChunk || totalSize + _0xca3314[_0x4343a9(0x1e9)] > batchSize)) {
                    generate_and_send(_0x4343a9(0x22c), _0xca3314, _0x2cc834, _0x68fd95), (previousIsChunk = chunk === 0x0 ? ![] : !![])
                    return
                }
                ;(previousIsChunk = chunk === 0x0 ? ![] : !![]), set_name_and_add_file_or_chunk(_0xca3314, _0x2cc834, _0x68fd95, ![])
            }
        })(f)),
            chunk !== 0x0 ? _0x3ac105[_0xd18f12(0x221)](f[_0xd18f12(0x1ef)]((chunk - 0x1) * batchSize, chunk * batchSize)) : _0x3ac105[_0xd18f12(0x221)](f)
    } else (skippedFiles += 0x1), compress_files()
}
function set_name_and_add_file_or_chunk(_0x2cc966, _0x3e2e82, _0x2ea6ba, _0x597149) {
    var _0x4a9a05 = a10_0x2230b8,
        _0x269d4a = 'file_' + dcmPointer
    if (chunk !== 0x0) {
        var _0x1a0b18
        chunk * batchSize >= _0x2cc966['size'] ? ((_0x1a0b18 = 'lastchunk_' + chunk), (chunk = 0x0)) : (_0x1a0b18 = chunk), (_0x269d4a += _0x4a9a05(0x216) + _0x1a0b18)
    }
    currZip['file'](_0x269d4a, _0x3e2e82, { binary: !![] }), (totalSize += _0x2ea6ba), (sentBytes += _0x2ea6ba), !_0x597149 && compress_files()
}
function generate_and_send(_0xbc4f71, _0x4d5366, _0x4d7c24, _0x4a0173) {
    var _0x5c4e72 = a10_0x2230b8,
        _0x36caf8 = _0xbc4f71 == 'False'
    currZip[_0x5c4e72(0x251)]({ type: _0x5c4e72(0x20a), compression: _0x5c4e72(0x263), compressionOptions: { level: 0x9 } })['then'](function(_0x51099b) {
        console.log(_0x51099b, _0xbc4f71)
        send_file(_0x51099b, _0xbc4f71, 0x0), (totalSize = 0x0), _0x36caf8 && ((currZip = new JSZip()), set_name_and_add_file_or_chunk(_0x4d5366, _0x4d7c24, _0x4a0173, !![]))
    })
}
function send_file(_0x4612e6, _0x46fe47, _0x4fe744) {
    var _0x151b75 = a10_0x2230b8,
        _0x2ca9a0 = document[_0x151b75(0x250)](_0x151b75(0x22e))
    _0x2ca9a0[_0x151b75(0x20c)] = ''
    var _0x4408f9 = _0x2ca9a0[_0x151b75(0x277)](document[_0x151b75(0x207)]('p'))
    _0x4408f9['classList'][_0x151b75(0x201)]('fs-7', 'mb-1', _0x151b75(0x1e2), _0x151b75(0x1e1)), _0x4408f9[_0x151b75(0x277)](document['createTextNode'](term_sending_images + '...\x20'))
    var _0xf6f078 = _0x2ca9a0[_0x151b75(0x277)](document[_0x151b75(0x207)]('p'))
    _0xf6f078[_0x151b75(0x247)][_0x151b75(0x201)](_0x151b75(0x264), _0x151b75(0x200), _0x151b75(0x1e5)),
        (_0xf6f078[_0x151b75(0x239)][_0x151b75(0x265)] = _0x151b75(0x218)),
        (_0xf6f078[_0x151b75(0x239)][_0x151b75(0x22a)] = _0x151b75(0x24f)),
        (_0xf6f078[_0x151b75(0x239)]['borderRadius'] = _0x151b75(0x24f))
    var _0x484bb7 = _0xf6f078[_0x151b75(0x277)](document[_0x151b75(0x207)]('p'))
    _0x484bb7[_0x151b75(0x247)][_0x151b75(0x201)](_0x151b75(0x1ea), _0x151b75(0x208), _0x151b75(0x1e5)),
        (_0x484bb7[_0x151b75(0x239)][_0x151b75(0x22a)] = _0x151b75(0x24f)),
        (_0x484bb7[_0x151b75(0x239)][_0x151b75(0x274)] = _0x151b75(0x24f))
    var _0x1a813a = new XMLHttpRequest()
    xhrCounter += 0x1
    if (_0x1a813a[_0x151b75(0x238)]) {
        _0x1a813a[_0x151b75(0x238)][_0x151b75(0x269)](
            _0x151b75(0x264),
            function(_0x2d1063) {
                var _0xcfc21a = _0x151b75,
                    _0x48e07a = parseInt((_0x2d1063[_0xcfc21a(0x1f8)] / _0x2d1063['total']) * 0x64)
                _0x484bb7[_0xcfc21a(0x239)][_0xcfc21a(0x23e)] = _0x48e07a + '%'
            },
            ![]
        )
        var _0x1d2e40 = new Date()[_0x151b75(0x23a)]()
        ;(_0x1a813a[_0x151b75(0x23f)] = function() {
            stateChanged(_0x1a813a, _0x4612e6, _0x46fe47, _0x4fe744, _0x1d2e40)
        }),
            _0x1a813a[_0x151b75(0x1fa)](_0x151b75(0x1ed), _0x151b75(0x228), !![]),
            _0x1a813a[_0x151b75(0x25c)](_0x151b75(0x20d), _0x151b75(0x1f9)),
            _0x1a813a['setRequestHeader'](_0x151b75(0x22f), encodeURIComponent(_0x151b75(0x1ee))),
            _0x1a813a[_0x151b75(0x25c)](_0x151b75(0x27c), uploadKey),
            _0x1a813a[_0x151b75(0x25c)](_0x151b75(0x24b), _0x46fe47)
        var _0x5199f7 = new FileReader()
        ;(_0x5199f7['onloadend'] = function(_0x4ee870) {
            var _0x290c91 = _0x151b75
            if (_0x4ee870[_0x290c91(0x1f4)][_0x290c91(0x25b)] == FileReader[_0x290c91(0x226)]) {
                var _0x4b465c = new Uint8Array(_0x4ee870[_0x290c91(0x1f4)]['result']),
                    _0x35e417 = []
                for (var _0x362dd3 = 0x0; _0x362dd3 < _0x4b465c[_0x290c91(0x22d)]; _0x362dd3 += 0x4) {
                    _0x35e417['push']((_0x4b465c[_0x362dd3] << 0x18) | (_0x4b465c[_0x362dd3 + 0x1] << 0x10) | (_0x4b465c[_0x362dd3 + 0x2] << 0x8) | _0x4b465c[_0x362dd3 + 0x3])
                }
                var _0x33129a = CryptoJS[_0x290c91(0x279)][_0x290c91(0x1fe)][_0x290c91(0x214)](_0x35e417, _0x4b465c[_0x290c91(0x22d)]),
                    _0x12cf72 = CryptoJS[_0x290c91(0x236)](_0x33129a)
                _0x1a813a['setRequestHeader'](_0x290c91(0x261), _0x12cf72), _0x1a813a[_0x290c91(0x252)](_0x4612e6)
            }
        }),
            _0x5199f7[_0x151b75(0x221)](_0x4612e6)
    }
}
function stateChanged(_0x596fc6, _0x30575b, _0x4e7af, _0x40d6f0, _0x58ceb1) {
    console.log('here, stateChanged')
    var _0x512452 = a10_0x2230b8
    if (_0x596fc6[_0x512452(0x25b)] == 0x4) {
        var _0x3652b3 = (new Date()[_0x512452(0x23a)]() - _0x58ceb1) / 0x3e8
        ;(xhrCounter -= 0x1),
            $(_0x512452(0x246))
                [_0x512452(0x23b)]('bg-primary')
                [_0x512452(0x242)](_0x596fc6[_0x512452(0x257)] == 0xc8 ? 'bg-success-lighten-1' : 'bg-danger'),
            _0x596fc6[_0x512452(0x257)] != 0xc8 &&
                (_0x40d6f0 == 0x3
                    ? ((uploadErrors = !![]), (chunk = 0x0), (dcmPointer = dcmFiles[_0x512452(0x22d)]), (totalSize = 0x0))
                    : ((_0x40d6f0 += 0x1), $(_0x512452(0x21e))[_0x512452(0x270)](term_try + '\x20' + _0x40d6f0), send_file(_0x30575b, _0x4e7af, _0x40d6f0))),
            $('#bytes')[_0x512452(0x26d)](
                term_sent +
                    '\x20' +
                    formatBytes(sentBytes) +
                    '\x20' +
                    term_out_of +
                    '\x20' +
                    formatBytes(totalJobBytes) +
                    _0x512452(0x248) +
                    term_upload_speed +
                    ':\x20' +
                    linkSpeed(_0x30575b[_0x512452(0x1e9)], _0x3652b3)
            ),
            $('#time')[_0x512452(0x270)](term_remaining_time_estimate + ':\x20' + remainingTime(sentBytes, totalJobBytes)),
            xhrCounter === 0x0 && ($(_0x512452(0x21e))[_0x512452(0x270)](''), compress_files())
    }
}
function show_msg(_0x58719e, _0x27da87, _0x113b02) {
    var _0x28b27a = a10_0x2230b8
    _0x113b02 && $(_0x28b27a(0x20f))[_0x28b27a(0x26d)](''), $(_0x28b27a(0x222))['html'](_0x58719e), _0x27da87 && $(_0x28b27a(0x222))[_0x28b27a(0x271)](_0x28b27a(0x253), _0x27da87)
}
function initProgress(_0x4d5330) {
    console.log('here, initProgress')
    var _0x2e3e73 = a10_0x2230b8,
        _0x588724 = document[_0x2e3e73(0x250)]('progress')
    _0x588724[_0x2e3e73(0x20c)] = ''
    var _0x2c69e3 = _0x588724[_0x2e3e73(0x277)](document[_0x2e3e73(0x207)]('p'))
    _0x2c69e3['classList'][_0x2e3e73(0x201)](_0x2e3e73(0x27e), _0x2e3e73(0x204), _0x2e3e73(0x1e2), _0x2e3e73(0x1e1)), _0x2c69e3[_0x2e3e73(0x277)](document['createTextNode'](_0x4d5330))
    var _0xfcddd4 = _0x588724['appendChild'](document['createElement']('p'))
    _0xfcddd4[_0x2e3e73(0x247)][_0x2e3e73(0x201)]('progress', _0x2e3e73(0x200), _0x2e3e73(0x1e5)),
        (_0xfcddd4[_0x2e3e73(0x239)][_0x2e3e73(0x265)] = _0x2e3e73(0x218)),
        (_0xfcddd4['style']['height'] = _0x2e3e73(0x24f)),
        (_0xfcddd4['style'][_0x2e3e73(0x274)] = _0x2e3e73(0x24f)),
        (progress = _0xfcddd4[_0x2e3e73(0x277)](document[_0x2e3e73(0x207)]('p'))),
        progress[_0x2e3e73(0x247)][_0x2e3e73(0x201)](_0x2e3e73(0x1ea), _0x2e3e73(0x208), 'mb-0'),
        (progress['style']['height'] = '8px'),
        (progress['style'][_0x2e3e73(0x274)] = _0x2e3e73(0x24f)),
        $('#counter')[_0x2e3e73(0x270)]('')
}
function updateProgress(_0x3c2591, _0x5e1ffd) {
    var _0x3cba33 = a10_0x2230b8,
        _0x18a182 = parseInt((_0x3c2591 / _0x5e1ffd) * 0x64)
    ;(progress[_0x3cba33(0x239)][_0x3cba33(0x23e)] = _0x18a182 + '%'),
        $(_0x3cba33(0x26a))[_0x3cba33(0x270)](str1 + _0x3c2591['toString']() + '\x20' + term_out_of + '\x20' + _0x5e1ffd[_0x3cba33(0x206)]() + str2)
}
function elapsedTime() {
    var _0x19994e = a10_0x2230b8,
        _0x101afc = (new Date()[_0x19994e(0x23a)]() - startTime) / 0x3e8
    return _0x101afc
}
function a10_0x4b43(_0x1ff19d, _0x5a2965) {
    var _0x12318e = a10_0x1231()
    return (
        (a10_0x4b43 = function(_0x4b4347, _0x2be219) {
            _0x4b4347 = _0x4b4347 - 0x1e1
            var _0x313d84 = _0x12318e[_0x4b4347]
            return _0x313d84
        }),
        a10_0x4b43(_0x1ff19d, _0x5a2965)
    )
}
function remainingTime(_0x1a8aff, _0x6110b4) {
    var _0x141348 = a10_0x2230b8,
        _0x4e69e6 = elapsedTime(),
        _0xdc9d2e = _0x6110b4 - _0x1a8aff,
        _0x4d2aba = (_0x4e69e6 * _0xdc9d2e) / _0x1a8aff,
        _0x1e99b2 = ''
    if (_0x4d2aba > 0x3c) _0x1e99b2 = Math[_0x141348(0x27d)](_0x4d2aba / 0x3c) + '\x20' + term_minutes
    else _0x4d2aba < 0xb ? (_0x1e99b2 = term_few_seconds) : (_0x1e99b2 = Math[_0x141348(0x27d)](_0x4d2aba) + '\x20' + term_seconds)
    return _0x1e99b2
}
function formatBytes(_0x3cc727) {
    var _0x1f6fd7 = a10_0x2230b8,
        _0x31eb60,
        _0x5d1429,
        _0x25fd27
    switch (_0x3cc727 > 0x3b9aca00 ? 'GB' : _0x3cc727 > 0xf4240 ? 'MB' : 'KB') {
        case 'GB':
            ;(_0x5d1429 = 0x3b9aca00), (_0x25fd27 = '\x20' + term_gigabyte + _0x1f6fd7(0x23d))
            break
        case 'MB':
            ;(_0x5d1429 = 0xf4240), (_0x25fd27 = '\x20' + term_megabyte + _0x1f6fd7(0x237))
            break
        case 'KB':
            ;(_0x5d1429 = 0x3e8), (_0x25fd27 = '\x20' + term_kilobyte + _0x1f6fd7(0x217))
    }
    return (_0x31eb60 = (_0x3cc727 / _0x5d1429)[_0x1f6fd7(0x26b)](0x2) + _0x25fd27), _0x31eb60
}
function formatBitsPerSecond(_0x5d1379) {
    var _0x5e3f44 = a10_0x2230b8,
        _0x45c2e6 = _0x5d1379 * 0x8,
        _0x224888,
        _0x38e84a,
        _0x522fe1
    switch (_0x45c2e6 > 0xf4240 ? 'MB' : 'KB') {
        case 'MB':
            ;(_0x38e84a = 0xf4240), (_0x522fe1 = '\x20' + term_megabit_per_second + _0x5e3f44(0x21a))
            break
        case 'KB':
            ;(_0x38e84a = 0x3e8), (_0x522fe1 = '\x20' + term_kilobit_per_second + '\x20(Kbps)')
    }
    return (_0x224888 = (_0x45c2e6 / _0x38e84a)[_0x5e3f44(0x26b)](0x2) + _0x522fe1), _0x224888
}
function linkSpeed(_0x525088, _0xcadb22) {
    var _0x5acd71 = _0x525088 / _0xcadb22
    return formatBitsPerSecond(_0x5acd71)
}
function get_upload_key() {
    var _0x46a09e = a10_0x2230b8,
        _0x51dd8b

    clientToken = 'R2tLJsIWnvU_hieV-CxtU65AQ0pmnslyyVRqcuI4I9urignKIMGGqQqmXlIrebk3PWBZw__CCWxKYWrSYCQdwVn6H0WlczoLFlRQlzVDqiQ='

    console.log(physkey)
    console.log(orderkey)
    console.log(clientToken)
    console.log(pt1)
    console.log(pt2)
    console.log(pt3)

    return (
        $[_0x46a09e(0x258)]({
            url: _0x46a09e(0x1e8) + physkey + _0x46a09e(0x240) + orderkey + '&ct=' + clientToken + _0x46a09e(0x24a) + pt1 + '&pt2=' + pt2 + _0x46a09e(0x235) + pt3,
            async: ![],
            success: function(_0x5e4b89) {
                ;(uploadKey = _0x5e4b89), (_0x51dd8b = !![])
            },
            fail: function() {
                _0x51dd8b = ![]
            }
        }),
        _0x51dd8b
    )
}
function renew_acst() {
    var _0x5e2e5e = a10_0x2230b8
    if (!acst) return
    $[_0x5e2e5e(0x258)]({ url: _0x5e2e5e(0x244) + uploadKey + '&pk=' + physkey + _0x5e2e5e(0x27b) + acst })
}
function init_vars() {
    ;(fileCounter = 0x0), (dcmFileCounter = 0x0), (totalJobBytes = 0x0), (sentBytes = 0x0), (dcmFiles = []), (str1 = term_scanned_so_far + '\x20'), (str2 = '\x20' + term_files)
}
function a10_0x1231() {
    var _0x4591f3 = [
        'alt',
        'https://www.pacssee.com/work3/uploaddcmfile',
        '1428665cmEnrH',
        'height',
        '#btn_restart',
        'False',
        'length',
        'uploadprogress',
        'X-Filename',
        '&subject=radindex',
        '#msg_process',
        'split',
        'click',
        '&dispname=',
        '&pt3=',
        'SHA256',
        '\x20(MB)',
        'upload',
        'style',
        'getTime',
        'removeClass',
        '#dispname',
        '\x20(GB)',
        'width',
        'onreadystatechange',
        '&orderkey=',
        'return\x20false;',
        'addClass',
        'onclick',
        'https://www.pacssee.com/site3/renewacst?uk=',
        '#btn_cnt',
        '#uploadprogress\x20>\x20.progress\x20>\x20.progress-bar',
        'classList',
        '<br/>',
        'green',
        '&pt1=',
        'X-Last',
        '#restartdiv',
        '#fb',
        '1002114vywGOh',
        '8px',
        'getElementById',
        'generateAsync',
        'send',
        'color',
        '1725696gzvbeE',
        'block',
        'href',
        'status',
        'ajax',
        '#116566',
        '...<br/>',
        'readyState',
        'setRequestHeader',
        '.\x20(',
        'attr',
        'cursor',
        'src',
        'X-Sha256',
        '170454rPbUWK',
        'DEFLATE',
        'progress',
        'maxWidth',
        'https://www.pacssee.com/site3/webdcmuploadpage?ct=',
        'files',
        'parent',
        'addEventListener',
        '#counter',
        'toFixed',
        '#cntdiv',
        'html',
        '#cell',
        'https://www.pacssee.com/static3/images/success.png',
        'text',
        'css',
        '2168RBcyXx',
        'readAsText',
        'borderRadius',
        'log',
        'Unable\x20to\x20close\x20the\x20parent\x20window,\x20please\x20close\x20it\x20manually\x20and\x20return\x20to\x20the\x20previous\x20screen.',
        'appendChild',
        'val',
        'lib',
        '.</span>',
        '&acst=',
        'X-Uploadkey',
        'ceil',
        'fs-7',
        'mt-4',
        'text-grey',
        '6kcSbcF',
        'https://www.pacssee.com/static3/images/processing.gif',
        'mb-0',
        'trigger',
        'none',
        'https://www.pacssee.com/site3/issueuploadkey?physkey=',
        //http://192.168.10.136:5050
        'size',
        'progress-bar',
        'push',
        '.<br/><span>',
        'POST',
        'zip.zip',
        'slice',
        '950zfYsqL',
        '#choosemsg',
        'location',
        '24FsUeJU',
        'target',
        'smooth',
        'https://www.pacssee.com/static3/images/again.png',
        '64371akfYvU',
        'loaded',
        'application/octet-stream',
        'open',
        '#email',
        'display',
        'https://www.pacssee.com/static3/images/choose.gif',
        'WordArray',
        'result',
        'bg-grey-lighten-2',
        'add',
        '#choosefile',
        'orange',
        'mb-1',
        '&cell=',
        'toString',
        'createElement',
        'bg-primary',
        '7845170GoDFHk',
        'blob',
        '#choosediv',
        'innerHTML',
        'Content-type',
        'ajax\x20call\x20to\x20get\x20banner\x20failed.',
        '#progress,#uploadprogress',
        '&email=',
        '#contactdiv',
        'red',
        '/site3/getbannerimgsrc?lang=',
        'create',
        'onload',
        '_clientfilechunk_',
        '\x20(KB)',
        '300px',
        '#sidelink',
        '\x20(Mbps)',
        'default',
        'scrollTo',
        '&lang=',
        '#uploadretry',
        '&pk=',
        '&pt2=',
        'readAsArrayBuffer',
        '#msg',
        'cannot\x20scroll\x20parent\x20window',
        '#sideimg',
        '&opk=',
        'DONE'
    ]
    a10_0x1231 = function() {
        return _0x4591f3
    }
    return a10_0x1231()
}
function hideContactDetails() {
    var _0x1aa58b = a10_0x2230b8
    $(_0x1aa58b(0x23c))['val']() && $(_0x1aa58b(0x26e))['val']() && $(_0x1aa58b(0x1fb))[_0x1aa58b(0x278)]() && !disable_contact_entry && $('#contactsubmit')[_0x1aa58b(0x1e6)](_0x1aa58b(0x233)),
        $(_0x1aa58b(0x211))[_0x1aa58b(0x271)]('display', _0x1aa58b(0x1e7)),
        $(_0x1aa58b(0x24d))[_0x1aa58b(0x271)](_0x1aa58b(0x1fc), _0x1aa58b(0x1e7))
}
function displayProcessingGif() {
    var _0x1c34b8 = a10_0x2230b8
    $(_0x1c34b8(0x224))[_0x1c34b8(0x25e)](_0x1c34b8(0x260), _0x1c34b8(0x1e4)),
        $('#sidelink')[_0x1c34b8(0x25e)](_0x1c34b8(0x256), ''),
        $(_0x1c34b8(0x219))[_0x1c34b8(0x25e)]('onClick', _0x1c34b8(0x241)),
        $(_0x1c34b8(0x219))[_0x1c34b8(0x271)](_0x1c34b8(0x25f), _0x1c34b8(0x21b)),
        !orderkey &&
            (sideImgTimer = setTimeout(function() {
                displayBanner()
            }, 0x2710))
}
function displayBanner() {
    var _0x2e661e = a10_0x2230b8
    $[_0x2e661e(0x258)]({
        url: _0x2e661e(0x213) + lang + _0x2e661e(0x230),
        async: !![],
        success: function(_0x298dd5) {
            var _0x2825ac = _0x2e661e
            ;(_0x298dd5 = _0x298dd5[_0x2825ac(0x232)]('~')),
                _0x298dd5[0x0] == 'ok' &&
                    ($(_0x2825ac(0x224))[_0x2825ac(0x25e)](_0x2825ac(0x260), _0x298dd5[0x1]),
                    _0x298dd5[0x2] &&
                        ($(_0x2825ac(0x219))[_0x2825ac(0x25e)](_0x2825ac(0x256), _0x298dd5[0x2]),
                        $('#sidelink')['removeAttr'](_0x2825ac(0x243)),
                        $(_0x2825ac(0x219))[_0x2825ac(0x271)]('cursor', 'pointer')),
                    _0x298dd5[0x3] && $(_0x2825ac(0x224))[_0x2825ac(0x25e)](_0x2825ac(0x227), _0x298dd5[0x3]))
        },
        fail: function() {
            var _0x13996a = _0x2e661e
            console['log'](_0x13996a(0x20e))
        }
    }),
        (sideImgTimer = setTimeout(function() {
            displayProcessingGif()
        }, 0x61a8))
}
function close_parent() {
    var _0x4221c1 = a10_0x2230b8
    window[_0x4221c1(0x268)] ? window[_0x4221c1(0x268)]['close']() : bootbox['alert'](_0x4221c1(0x276))
}
