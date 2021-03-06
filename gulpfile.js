"use strict";

const smartgrid = require('smart-grid');

/* It's principal settings in smart grid project */
let settings = {
    outputStyle: 'scss', /* less || sass || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '30px', /* gutter width px || % || rem */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1200px', /* max-width оn very large screen */
        fields: '30px' /* side fields */
    },
    breakPoints: {
        lg: {
            width: '1100px', /* -> @media (max-width: 1100px) */
        },
        md: {
            width: '960px'
        },
        sm: {
            width: '780px',
            fields: '15px' /* set fields only if you want to change container.fields */
        },
        xs: {
            width: '560px'
        }
        /*
        We can create any quantity of break points.

        some_name: {
            width: 'Npx',
            fields: 'N(px|%|rem)',
            offset: 'N(px|%|rem)'
        }
        */
    }
};

// smartgrid('./src/views/sass/layout', settings);

const  gulp          = require('gulp');
const  scss          = require('gulp-scss');
const  sass          = require('gulp-sass');
const  degug         = require('gulp-debug');          //показывает всё что через себя пропустил
const  browser       = require('browser-sync').create();
const  gutil         = require('gulp-util');           // Вспомогательные функции Gulp
const  cache         = require('gulp-cache');          // Кеширование изображений
const  notify        = require("gulp-notify");         // Плагин для различных уведомлений
const  plumber       = require('gulp-plumber');        // Отслеживание ошибок
const  autoprefixer  = require('gulp-autoprefixer');   // Автопрефиксы для css
const  csso          = require('gulp-csso');           // Минификация CSS-файлов
const  sourcemaps    = require('gulp-sourcemaps');     // Генерация sourcemap
const  concat        = require('gulp-concat');         // Объединение файлов
const  pug           = require('gulp-pug');            // Pug
const  rename        = require('gulp-rename');         // Переименование файлов
const  imagemin      = require('gulp-imagemin');       // Оптимизация изображений
const  uglify        = require('gulp-uglify');         // Минификация JS-файлов
const  del           = require('del');                 // Удаление, очистка содержимого папок
const  ftp           = require('vinyl-ftp');           // Отправка файлов через Ftp
const  spritesmith   = require('gulp.spritesmith');    // Создание спрайтов
const  zip           = require('gulp-zip');            // Архивировация файлов и директорий
const  runSequence   = require('run-sequence');        // Последовательный запуск задач
const  cssnano       = require('gulp-cssnano');
const  csscomb       = require('gulp-csscomb');        // Форматирование css-стилей
const  cssunit       = require('gulp-css-unit');
const  CSSO          = require('gulp-csso');
const sassGlob       = require('gulp-sass-glob');


//--------------------------------------------------------------------- PATH

var SRC_DIR = './src/';
var DIST_DIR = './dist/';

var path = {
    sass: {
        entry: SRC_DIR + 'views/sass/*.scss',
        src: SRC_DIR   + 'views/sass/**/*.scss',
        dist: DIST_DIR + 'css'
    },
    pug: {
        entry: SRC_DIR + 'views/pug/pages/*.pug',
        src: SRC_DIR   + 'views/pug/**/*.pug',
        dist: DIST_DIR + 'html'
    },
    sprite: {
        src: SRC_DIR      + 'img/icons/*.png',
        distImg: DIST_DIR + 'img',
        imgLocation:      + '../img/sprite.png',
        distFile: SRC_DIR + '/views/sprite'
    }

};

//---------------------------------------------------------- ДЛЯ СПРАЙТОВ

gulp.task('sprite', function () {
    var spriteData = gulp.src(
        path.sprite.src
    ).pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.scss',
        cssFormat: 'css',
        imgPath: path.sprite.imgLocation,
        padding: 70
    }));

    spriteData.img.pipe(gulp.dest(path.sprite.distImg));
    spriteData.css.pipe(gulp.dest(path.sprite.distFile));
});


//--------------------------------------------------------------------- Сервер

gulp.task('serve', ['watch'], () => {
    browser.init({
        open: true,
        notify: false,
        server: {
            baseDir: "./dist",
        },
        directory: true,
        startPath: "html/template_page.html"
    });
    // gulp.watch([scssPath], ['sass']);
    gulp.watch("dist/**/*.*").on('change', browser.reload);
    // browser.watch("dist/**/*.*").on('change', browser.reload);
});

//--------------------------------------------------------------------- WATCH

gulp.task('watch', () => {
    gulp.watch(path.pug.src, ['pug']);
    gulp.watch(path.sass.src, ['scss']);
});


//--------------------------------------------------------------------- SCSS

gulp.task('scss', () => {
    return gulp.src(path.sass.entry)
        .pipe(sourcemaps.init())
        .pipe(sassGlob())
        .pipe(plumber())

        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['> 5%'],
            cascade: false
        }))
        .pipe(cssunit({
        	type     :    'px-to-rem',
        	rootSize  :    16
        }))
        // .pipe(CSSO())
        .pipe(concat('template_style.css'))
        .pipe(sourcemaps.write())
        // .pipe(cssnano())
        // .pipe(csso())
        .pipe(gulp.dest(path.sass.dist))
        .pipe(browser.stream(true));
});


//--------------------------------------------------------------------- PUG

gulp.task('pug', () => {


    gulp.src(path.pug.entry)
        .pipe(plumber())
        .pipe(pug({
            // locals: locals,
            pretty: true
        }))
        // .pipe(rename(
        //     'index.html'
        // ))
        .pipe(gulp.dest(path.pug.dist))
        .pipe(browser.stream(true));
});


//---------------------------------------------------------- Разные библиотеки


let jqSrc = 'node_modules/jquery/dist/jquery.min.js';
gulp.task('jq', () => {
    return gulp.src([jqSrc])
        .pipe(gulp.dest('dist/js'));
});

gulp.task('animate', () => {
    gulp.src('node_modules/animate.css/animate.css')
        .pipe(gulp.dest('dist/css/'));

});

gulp.task('norm', () => {
    gulp.src('node_modules/normalize.css/normalize.css')
        .pipe(gulp.dest('dist/css/'));

});
let waypointPath = 'node_modules/waypoints/lib/jquery.waypoints.js';
gulp.task('way', () => {
    gulp.src(waypointPath)
        .pipe(gulp.dest('dist/js'))
});

