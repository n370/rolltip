import analyze from 'rollup-plugin-analyzer';
import { eslint } from 'rollup-plugin-eslint';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs',
        strict: false
    },
    plugins: [
        postcss({
            extract: false,
            modules: true,
            minimize: true,
            use: ['sass'],
            plugins: [
                autoprefixer({
                    overrideBrowserslist: ['IE 11', 'iOS 9']
                })
            ]
        }),
        eslint(),
        babel(),
        analyze()
    ],
    external: ['react']
};
