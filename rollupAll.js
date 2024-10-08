import resolve             from '@rollup/plugin-node-resolve';
import { generateDTS }     from '@typhonjs-build-test/esm-d-ts';
import { importsExternal } from '@typhonjs-build-test/rollup-plugin-pkg-imports';
import { rollup }          from 'rollup';

const sourcemap = true; // Defines whether source maps are generated.

// Bundle all top level external package exports.
const dtsPluginOptions = {
   bundlePackageExports: true,
   dtsReplace: { '/\\/\\/ <reference.*\\/>': '' } // Svelte v4 types currently add triple slash references.
};

// -------------------------------------------------------------------------------------------------------------------

const rollupConfigs = [
   {
      input: {
         input: 'src/security/client/dompurify/index.js',
         plugins: [
            importsExternal(),
            resolve(),
            generateDTS.plugin(dtsPluginOptions)
         ]
      },
      output: {
         file: '_dist/security/client/dompurify/index.js',
         format: 'es',
         generatedCode: { constBindings: true },
         sourcemap
      }
   },

   {
      input: {
         input: 'src/svelte/store/fvtt/index.js',
         plugins: [
            importsExternal(),
            resolve(),
            generateDTS.plugin(dtsPluginOptions)
         ]
      },
      output: {
         file: '_dist/svelte/store/fvtt/index.js',
         format: 'es',
         generatedCode: { constBindings: true },
         sourcemap
      }
   },
   {
      input: {
         input: 'src/svelte/store/web-storage/index.js',
         plugins: [
            importsExternal(),
            resolve(),
            generateDTS.plugin(dtsPluginOptions)
         ]
      },
      output: {
         file: '_dist/svelte/store/web-storage/index.js',
         format: 'es',
         generatedCode: { constBindings: true },
         sourcemap
      }
   }
];

for (const config of rollupConfigs)
{
   console.log(`Generating bundle: ${config.input.input}`);

   const bundle = await rollup(config.input);
   await bundle.write(config.output);
   await bundle.close();
}
