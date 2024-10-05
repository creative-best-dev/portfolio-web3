import type { projectType } from '@/types/projectsItems.ts';

export const vignette: projectType = {
   id: 16,
   name: 'Vignette',
   year: '2021',
   location: 'Hungary',
   role: 'Website Layout Developer',
   projectURL: 'https://vignette.ssenick.fun/',
   gitURL: 'https://github.com/ssenick/vignette',
   path: 'vignette',
   images: {
      preview: 'https://files.ssenick.fun/portfolio/vignette/preview.webp',
      sliders: [
         {
            big: 'https://files.ssenick.fun/portfolio/vignette/sliders/image_1.webp',
            small: 'https://files.ssenick.fun/portfolio/vignette/sliders/image_1_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/vignette/sliders/image_2.webp',
            small: 'https://files.ssenick.fun/portfolio/vignette/sliders/image_2_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/vignette/sliders/image_3.webp',
            small: 'https://files.ssenick.fun/portfolio/vignette/sliders/image_3_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/vignette/sliders/image_4.webp',
            small: 'https://files.ssenick.fun/portfolio/vignette/sliders/image_4_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/vignette/sliders/image_5.webp',
            small: 'https://files.ssenick.fun/portfolio/vignette/sliders/image_5_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/vignette/sliders/image_6.webp',
            small: 'https://files.ssenick.fun/portfolio/vignette/sliders/image_6_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/vignette/sliders/image_8.webp',
            small: 'https://files.ssenick.fun/portfolio/vignette/sliders/image_8_small.webp',
         },
         {
            big: 'https://files.ssenick.fun/portfolio/vignette/sliders/image_7.webp',
            small: 'https://files.ssenick.fun/portfolio/vignette/sliders/image_7_small.webp',
         },
      ],
      devices: {
         laptop: {
            big: 'https://files.ssenick.fun/portfolio/vignette/laptop/laptop.webp',
            small: 'https://files.ssenick.fun/portfolio/vignette/laptop/laptop_small.webp',
         },
         tablet: {
            big: 'https://files.ssenick.fun/portfolio/vignette/tablet/tablet.webp',
            small: 'https://files.ssenick.fun/portfolio/vignette/tablet/tablet_small.webp',
         },
         mobile: [
            {
               big: 'https://files.ssenick.fun/portfolio/vignette/mobile/image_1.webp',
               small: 'https://files.ssenick.fun/portfolio/vignette/mobile/image_1_small.webp',
            },
            {
               big: 'https://files.ssenick.fun/portfolio/vignette/mobile/image_2.webp',
               small: 'https://files.ssenick.fun/portfolio/vignette/mobile/image_2_small.webp',
            },
            {
               big: 'https://files.ssenick.fun/portfolio/vignette/mobile/image_3.webp',
               small: 'https://files.ssenick.fun/portfolio/vignette/mobile/image_3_small.webp',
            },
         ],
      },
   },
   technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, Swiper and other',
};
