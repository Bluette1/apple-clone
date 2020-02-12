
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

// This is the gulp build function

gulp.task('buildcss', function(done) {
    gulp.src('index.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'));
    done();
});

// This is the gulp watch function to keep the build css file up-to-date
gulp.task('watchcss', function(done) {

    gulp.watch('index.css', function(done){
            gulp.src('index.css')
            .pipe(autoprefixer())
            .pipe(gulp.dest('build'));
            done(); 
    });
});



