/**
 * bemtree
 * =======
 *
 * Склеивает *bemtree.xjst*-файлы по deps'ам, обрабатывает BEMHTML-транслятором,
 * сохраняет (по умолчанию) в виде `?.bemtree.xjst.js`.
 *
 * **Опции**
 *
 * * *String* **target** — Результирующий таргет. По умолчанию — `?.bemtree.xjst.js`.
 * * *String* **filesTarget** — files-таргет, на основе которого получается список исходных файлов
 *   (его предоставляет технология `files`). По умолчанию — `?.files`.
 * * *String* **sourceSuffixes** — суффиксы файлов, по которым строится `files`-таргет. По умолчанию — `bemtree.xjst`.
 * * *String* **exportName** — Имя переменной-обработчика BEMTREE. По умолчанию — `'BEMTREE'`.
 * * *String* **applyFuncName** — Имя apply-функции базового шаблона BEMTREE. По умолчанию — `'apply'`.
 * * *Boolean* **devMode** — Development-режим. По умолчанию `true`.
 *
 * **Пример**
 *
 * ```javascript
 * nodeConfig.addTech(require('enb-xjst/techs/bemtree'));
 * ```
 */
module.exports = require('./bemhtml').buildFlow()
    .name('bemtree')
    .target('target', '?.bemtree.xjst.js')
    .defineOption('exportName', 'BEMTREE')
    .useFileList('bemtree.xjst')
    .createTech();
