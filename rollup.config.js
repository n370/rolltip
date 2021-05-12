import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import eslint from '@rollup/plugin-eslint';
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { babel } from '@rollup/plugin-babel';
import analyze from 'rollup-plugin-analyzer';

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs',
        exports: 'default',
        strict: false
    },
    external: ['react', 'react-dom'],
    plugins: [
        nodeResolve({ preferBuiltins: true }),
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
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
        }),
        analyze()
    ]
};
