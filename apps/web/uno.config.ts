import transformerDirectives from '@unocss/transformer-directives';
import { defineConfig, presetWind3, presetWebFonts, presetTypography } from 'unocss';
import { presetAnimations } from 'unocss-preset-animations';

export default defineConfig({
  transformers: [transformerDirectives()],
  presets: [
    presetWind3(),
    presetTypography(),
    presetWebFonts({
      provider: 'none',
      fonts: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          '"Microsoft YaHei"',
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          '"Noto Sans CJK SC"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    }),
    presetAnimations(),
  ],
});
