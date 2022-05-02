import gulp from 'gulp'
import del from "del";
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'

import uglify from 'gulp-uglify';
import webpack from 'webpack-stream';


export default function jsBuild () {
    del('./dist/js/**/*.{js,jsx}');
    return gulp.src(app.path.src.js, {sourcemaps: true})
        .pipe(plumber(
            notify.onError({
                title: 'JS',
                message: 'Error <%= error.message %>'
            })
        ))
        .pipe(webpack({
            mode: 'development',
            output: {
                filename: 'bundle.min.js',
            },
            module:{
                rules:[{
                    loader: 'babel-loader',
                    test: '/\.(js|jsx)$/',
                    exclude: /node_modules/
                }]
            },
        }))
        .pipe(uglify())
        .pipe(gulp.dest(app.path.build.js))
        .pipe(browserSync.reload({stream: true}))
};