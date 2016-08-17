var gulp = require('gulp');
gulp.task('hello', function(){
    console.log('hello gulp ! ini task pertama gulp' );
})

//untuk jalanin copy, hello juga harus dijalanin
gulp.task('copy', ['hello'], function(){
    //buka file myfile.txt
    gulp.src('myfile.txt')
        //terusin (pipe) untuk dikopi
        .pipe(gulp.dest('sub'));
})

//untuk jalanin default, copy juga harus d jalanin
gulp.task('default', ['copy']);
