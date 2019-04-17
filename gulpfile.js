
const { series, watch, src, dest } = require('gulp')

function copyAppFile (cb) {
  src('app/*').pipe(dest('dist/'))
  cb()
}

function watchFile (cb) {
  watch(['app/*'], function (cb) {
    src('app/*').pipe(dest('dist/'))
    cb()
  })
}

exports.default = series(copyAppFile, watchFile)
