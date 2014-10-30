gulp   = require 'gulp'
coffee = require 'gulp-coffee'
nodemon = require 'gulp-nodemon'

gulp.task 'compile', () ->
    gulp.src 'index.coffee'
        .pipe coffee()
        .pipe gulp.dest('./')
    return

gulp.task 'watch', () ->
    gulp.watch 'index.coffee', ['compile']
    return

gulp.task 'run', () ->
	gulp.watch 'index.coffee', ['compile']
	nodemon({script:'index.js'})


gulp.task "default", ["compile"], ->
  console.log "done"
  return