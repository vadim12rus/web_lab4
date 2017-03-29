module.exports = function(grunt) {
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    port: 8080,
                    base: '',
                    livereload: true,
                    open: {
                        target: 'http://localhost:8080/'
                    }
                }
            }
        },

        concat: {
            js: {
                src: ['node_modules/systemjs-builder/node_modules/systemjs/dist/*.js'],
                dest: 'build/system.js',
            }
        },
        uglify: {
            buld: {
                src: 'build/script.js',
                dest: 'build/script.min.js'
            }
        },
        eslint: {
            target: ['build/script.js']
            //quiet: true
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'build/style.min.css': [
                        'node_modules/bootstrap/dist/css/bootstrap.min.css',
                        'css/style.css'
                    ]
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            css: {
                files: ['css/*.css'],
                tasks: ['clean:css_min', 'spell', 'cssmin', 'hashres:css'],
            },

            scripts: {
                files: ['ts/*.ts'],
                tasks: [ 'clean:js_min', 'spell', 'copy', 'tslint', 'ts', 'react', 'uglify', 'eslint', 'clean:script', 'hashres:scripts'],
            },

            html: {
                files: ['index.html'],
            }
        },
        clean: {
            script: ['build/script.js'],
            js_min:  ['build/*.js'],
            css_min:  ['build/*.css']
        },

        hashres: {
            options: {
                encoding: 'utf8',
                fileNameFormat: '${name}.${hash}.${ext}',
                renameFiles: true,
            },
            scripts: {
                src: [
                    'build/script.min.js',
                    'build/react.min.js',
                    'build/react-dom.min.js',
                    'build/app.js',
                ],
                dest: ['index.html'],
            },

            css: {
                src: ['build/style.min.css'],
                dest: ['index.html'],
            },
        },

        copy: {
            react_files: {
                files: [
                    {
                        expand: true,
                        cwd: 'node_modules/react/dist/',
                        src: 'react.min.js',
                        dest: 'build/'
                    },

                 

                    {
                        expand: true,
                        cwd: 'node_modules/react-dom/dist/',
                        src: 'react-dom.min.js',
                        dest: 'build/'
                    }
                ]
            }
        },

        react: {
            react_file: {
                files: {
                    'build/app.js': 'jsx/app.jsx'
                }
            }
        },
        ts: {
            default: {
                options: {
                    module: 'system',
                    target: 'es5',
                    noImplicitAny: true,
                    noEmitOnError: true,
                    sourceMap: false
                },
                src: ['ts/Application.ts', 'ts/Canvas.ts', 'ts/IShape.ts',  'ts/Shape.ts', 'ts/Circle.ts', 'ts/Rectangle.ts', 'ts/Triangle.ts'],
                out: 'build/script.js',
            }
        },

        tslint: {
            options:
            {
                configFile: '.eslintrc.json',
                quiet: false
            },
            target: 'ts/*.ts'
        },

        spell: {
            options:
            {
                lang: 'en'
            },
            src: ['index.html', 'ts/*.ts', 'css/*.css'],
        },
    });


    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-hashres');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks("grunt-tslint");
    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-spell');
    grunt.registerTask('default', ['clean', 'spell', 'copy','concat', 'tslint', 'ts', 'react', 'uglify', 'cssmin', 'eslint', 'clean:script', 'connect', 'hashres', 'watch']);

};
