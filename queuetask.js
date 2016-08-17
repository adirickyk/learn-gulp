var gulp = require('gulp');
gulp.task('task1', function(cb){
    gulp.src('myfile.txt')
        .pipe(gulp.dest('sub'));

    setTimeout(function(){
        console.log('task1 selesai')
        cb();
    }, 2000)
})

//task2 bergantung task1(dependency)
gulp.task('task2', ['task1'], function(){
    //menggunakan return stream
    var stream = gulp.src('myfile.txt')
        .pipe(gulp.dest('sub2'));
    console.log('task2 selesai');
    return stream;
})

//task3 bergantung task2
gulp.task('task3', ['task2'], function(){
    //pake promise
    var Q = require('q');
    var d = Q.defer();
    setTimeout(function(){
        console.log('task3 selesai')
        d.resolve();
    }, 1000);
    return d.promise;
})

gulp.task('default', ['task3'])
