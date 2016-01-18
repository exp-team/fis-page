/*
 * fis-page
 *
 * Copyright (c) 2015 Baidu EXP Team
 * Licensed under the MIT license.
 * https://github.com/exp-team/fis-page/blob/master/LICENSE
 */

'use strict';

var fis = module.exports = require('fis');

// 插件包前缀置头
fis.require.prefixes.unshift('fispage');

fis.cli.name = "fis-page";
fis.cli.info = fis.util.readJSON(__dirname + '/package.json');

fis.cli.help.commands = [ 'release', 'server' ];

// 配置信息
fis.config.merge({

});