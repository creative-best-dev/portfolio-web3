import type { projectType } from '@/types/projectsItems.ts';

export const blog: projectType = {
   id: 1,
   name: 'RociFi',
   year: '2024',
   location: 'US',
   role: 'Web3 Full Stack Developer',
   projectURL: 'https://roci.fi',
   gitURL: '',
   path: 'RociFi',
   images: {
      preview: '/src/assets/images/Rocifi/preview.png',
      sliders: [
         {
            big: '/src/assets/images/Rocifi/screen (1).png',
            small: 'https://files.ssenick.fun/portfolio/blog/sliders/image_1_small.webp',
         },
         {
            big: '/src/assets/images/Rocifi/screen (2).png',
            small: 'https://files.ssenick.fun/portfolio/blog/sliders/image_2_small.webp',
         },
         {
            big: '/src/assets/images/Rocifi/screen (3).png',
            small: 'https://files.ssenick.fun/portfolio/blog/sliders/image_3_small.webp',
         },
         {
            big: '/src/assets/images/Rocifi/screen (4).png',
            small: 'https://files.ssenick.fun/portfolio/blog/sliders/image_4_small.webp',
         },
         {
            big: '/src/assets/images/Rocifi/screen (5).png',
            small: 'https://files.ssenick.fun/portfolio/blog/sliders/image_5_small.webp',
         },
         {
            big: '/src/assets/images/Rocifi/screen (6).png',
            small: 'https://files.ssenick.fun/portfolio/blog/sliders/image_6_small.webp',
         },
         {
            big: '/src/assets/images/Rocifi/screen (3).png',
            small: 'https://files.ssenick.fun/portfolio/blog/sliders/image_7_small.webp',
         },
         {
            big: '/src/assets/images/Rocifi/screen (4).png',
            small: 'https://files.ssenick.fun/portfolio/blog/sliders/image_8_small.webp',
         },
      ],
      devices: {
         laptop: {
            big: '/src/assets/images/Rocifi/screen (3).png',
            small: 'https://files.ssenick.fun/portfolio/blog/laptop/laptop_small.webp',
         },
         tablet: {
            big: '/src/assets/images/Rocifi/screen (1).png',
            small: 'https://files.ssenick.fun/portfolio/blog/tablet/tablet_small.webp',
         },
         mobile: [
            {
               big: '/src/assets/images/Rocifi/phone (1).png',
               small: 'https://files.ssenick.fun/portfolio/blog/mobile/mobile_1_small.webp',
            },
            {
               big: '/src/assets/images/Rocifi/phone (2).png',
               small: 'https://files.ssenick.fun/portfolio/blog/mobile/mobile_2_small.webp',
            },
            {
               big: '/src/assets/images/Rocifi/phone (3).png',
               small: 'https://files.ssenick.fun/portfolio/blog/mobile/mobile_3_small.webp',
            },
         ],
      },
   },
   technologies:
      'React, React Router, Redux toolkit, TypeScript, ' +
      'Webpack, Vite, Storybook, Jest, Loki, i18next, Axios, Swiper',
};
