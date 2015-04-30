/*
 * fis-page
 *
 * Copyright (c) 2015 Baidu EXP Team
 * Licensed under the MIT license.
 * https://github.com/exp-team/fis-page/blob/master/LICENSE
 */

'use strict';

module.exports = function(fis) {
    //TODO
    fis.cli.name = "fis-page";
    fis.cli.info = fis.util.readJSON(__dirname + '/package.json');

    fis.cli.run(process.argv);
}