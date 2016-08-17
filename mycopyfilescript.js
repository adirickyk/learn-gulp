var gulp = require('gulp');
gulp.task('copy',function(){
    //buka file myfile.txt
    gulp.src('myfile.txt')
        //terusin (pipe) stream untuk disimpan di folder sub
        .pipe(gulp.dest('sub'));
})
