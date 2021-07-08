import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'

const input = 'src/App.tsx'

export default [
    {
        input,
        output: [
            {
                file: pkg.main,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: pkg.module,
                format: 'esm',
                sourcemap: true,
            },
        ],
        external: ['react', 'react-dom'],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({ useTsconfigDeclarationDir: true }),
        ],
    },
]
