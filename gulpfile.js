import gulp from 'gulp';
import image from 'gulp-image';
import clear from 'del';
import concat from 'gulp-concat';
import htmlMIN from 'gulp-htmlmin';
import cssCleaner from 'gulp-clean-css';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import autoPrefixer from 'gulp-autoprefixer';
import browserSync from 'browser-sync';
import svgSprite from 'gulp-svg-sprite';
// import uglify from 'gulp-uglify-es';
import uglify from 'gulp-uglify';
import notify from 'gulp-notify';
import babel from 'gulp-babel';
import normalize from 'node-normalize-scss';
import sourcemap from 'gulp-sourcemaps';


const clearTasks = () => {
  gulp
  return (
    clear(['dist'])
  )
}


const compilSASS = () => {
  return (
    gulp.src('src/styles/style.scss')
      .pipe(sourcemap.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(
        sass({
          includePaths: normalize.includePaths
        })
      )
      .pipe(autoPrefixer({
        cascade: false
      }))
      .pipe(cssCleaner({
        level: 2
      }))
      .pipe(sourcemap.write())
      .pipe(gulp.dest('dist'))
      .pipe(browserSync.stream())
  )
}



const compilSASS_dev = () => {
  return (
    gulp.src('src/styles/style.scss')
      .pipe(sourcemap.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(
        sass({
          includePaths: normalize.includePaths
        })
      )
      .pipe(sourcemap.write())
      .pipe(gulp.dest('dist'))
      .pipe(browserSync.stream())
  )
}



const getSprite = () => {
  return (
    gulp.src('src/imgs/svg/**/*.svg')
      .pipe(svgSprite({
        mode: {
          stack: {
            sprite: 'sprite.svg'
          }
        }
      }))
      .pipe(gulp.dest('dist/imgs'))

  )
}



const htmlMinify = () => {
  return (
    gulp.src('src/**/*.html')
      .pipe(sourcemap.init())
      .pipe(htmlMIN({
        collapseWhitespace: true
      }))
      .pipe(sourcemap.write())
      .pipe(gulp.dest('dist'))
      .pipe(browserSync.stream())
  )
}



const htmlMinify_dev = () => {
  return (
    gulp.src('src/**/*.html')
      .pipe(sourcemap.init())
      .pipe(sourcemap.write())
      .pipe(gulp.dest('dist'))
      .pipe(browserSync.stream())
  )
}



const img_files = () => {
  return (
    gulp.src([
      'src/imgs/**/*.jpg',
      'src/imgs/**/*.png',
      'src/imgs/**/*.webp',
      'src/imgs/*.svg',
    ])
      .pipe(image())
      .pipe(gulp.dest('dist/imgs'))
  )
}


const scripts = () => {
  return (

    gulp.src([
      'src/scripts/**/*.js',
    ])
      .pipe(sourcemap.init())
      .pipe(babel({
        presets: ["@babel/preset-env"]
      }))
      .pipe(concat('app.js'))
      .pipe(sourcemap.write())
      .pipe(uglify().on('error', notify.onError()))
      .pipe(gulp.dest('dist/js'))
      .pipe(browserSync.stream())
  )
}



const scripts_dev = () => {
  return (
    gulp.src([
      'src/scripts/**/*.js'
    ])
      .pipe(sourcemap.init())
      .pipe(concat('app.js'))
      .pipe(sourcemap.write())
      .pipe(gulp.dest('dist/js'))
      .pipe(browserSync.stream())
  )
}



const addFonts = () => {
  return (
    gulp.src('src/fonts/**')
      .pipe(gulp.dest('dist/fonts'))
  )
}



const whatchFile = () => {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
}


gulp.watch('src/**/*.html', htmlMinify_dev);
gulp.watch('src/styles/*.scss', compilSASS_dev);
gulp.watch('src/scripts/**/*.js', scripts);
gulp.watch('src/fonts/**', addFonts);
gulp.watch('src/imgs/**', img_files);

const dev = gulp.series(
  clearTasks,
  htmlMinify_dev,
  compilSASS_dev,
  img_files,
  getSprite,
  scripts_dev,
  addFonts,
  whatchFile
)

const build = gulp.series(
  clearTasks,
  htmlMinify,
  compilSASS,
  img_files,
  getSprite,
  scripts,
  addFonts,
  whatchFile
)

export { build };
export { dev };