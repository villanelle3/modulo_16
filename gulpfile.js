const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"))
const sourcemaps = require("gulp-sourcemaps")
const uglify = require("gulp-uglify")

function CompileSASS(){
    return gulp.src("./source/styles/*.scss")
    .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(sourcemaps.write("./maps"))
        .pipe(gulp.dest("./build/styles"))
}

function comprimeJS(){
    return gulp.src("./source/scripts/*.js").pipe(uglify()).pipe(gulp.dest("./build/scripts"))
}

exports.sass = CompileSASS; 

exports.watch = function(){
    gulp.watch("./source/styles/*.scss", {ignoreInitial: false}, gulp.series(CompileSASS))
}

exports.javascript = comprimeJS;

// npm run gulp watch