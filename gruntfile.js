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
                src: ['node_modules/systemjs/dist/system.js'],
                dest: 'build/system.js',
            }
        },
        uglify: {
            buld: {
                src: 'build/script.js',
                dest: 'build/script.min.js'
            }
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
                tasks: ['clean:css_min', 'shell', 'cssmin', 'hashres:css'],
            },

            scripts: {
                files: ['ts/*.ts'],
                tasks: [ 'clean:js_min', 'shell', 'copy', 'tslint', 'ts', 'react', 'uglify', 'clean:script', 'hashres:scripts'],
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
                    },

                    {
                        expand: true,
                        cwd: 'node_modules/systemjs/dist/',
                        src: '*.js',
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
                src: ['ts/Application.ts', 'ts/Canvas.ts', 'ts/IShape.ts',  'ts/Shape.ts', 'ts/Circle.ts', 'ts/Rectangle.ts', 'ts/Triangle.ts', 'ts/main.ts'],
                out: 'build/script.js',
                options: {
                    noImplicitAny: true,
                    removeComments: true,
                    preserveConstEnums: true,
                    sourceMap: true,
                    module: 'system',
                    target: 'es5'
                }
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

        shell: {
            options: {
                stderr: true
            },
            target: {
                command: 'cspell ts/*.ts'
            }
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
    grunt.loadNpmTasks('grunt-shell');
    grunt.registerTask('default', ['clean', 'shell', 'copy','concat', 'tslint', 'ts', 'react', 'uglify', 'cssmin', 'clean:script', 'connect', 'hashres', 'watch']);

};
