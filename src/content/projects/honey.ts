import type { projectType } from '@/types/projectsItems.ts';

export const honey: projectType = {
   id: 15,
   name: 'Intuit',
   year: '2018',
   location: 'Singapore',
   role: 'Web Developer',
   projectURL: 'https://www.intuit.com',
   gitURL: '',
   path: 'Intuit',
   images: {
      preview: 'src/assets/images/intuit/screen (2).png',
      sliders: [
         {
            big: 'src/assets/images/intuit/screen (2).png',
            small: 'https://files.ssenick.fun/portfolio/honey/sliders/image_1_small.webp',
         },
         {
            big: 'src/assets/images/intuit/screen (1).png',
            small: 'https://files.ssenick.fun/portfolio/honey/sliders/image_2_small.webp',
         },
         {
            big: 'src/assets/images/intuit/screen (3).png',
            small: 'https://files.ssenick.fun/portfolio/honey/sliders/image_3_small.webp',
         },
         {
            big: 'src/assets/images/intuit/screen (4).png',
            small: 'https://files.ssenick.fun/portfolio/honey/sliders/image_4_small.webp',
         },
         {
            big: 'src/assets/images/intuit/screen (5).png',
            small: 'src/assets/images/intuit/screen (2).png',
         },
         {
            big: 'src/assets/images/intuit/screen (6).png',
            small: 'https://files.ssenick.fun/portfolio/honey/sliders/image_6_small.webp',
         },
         {
            big: 'src/assets/images/intuit/screen (7).png',
            small: 'https://files.ssenick.fun/portfolio/honey/sliders/image_8_small.webp',
         },
         {
            big: 'src/assets/images/intuit/screen (8).png',
            small: 'https://files.ssenick.fun/portfolio/honey/sliders/image_7_small.webp',
         },
      ],
      devices: {
         laptop: {
            big: 'src/assets/images/intuit/screen (2).png',
            small: 'https://files.ssenick.fun/portfolio/honey/laptop/laptop_small.webp',
         },
         tablet: {
            big: 'src/assets/images/intuit/screen (4).png',
            small: 'https://files.ssenick.fun/portfolio/honey/tablet/tablet_small.webp',
         },
         mobile: [
            {
               big: 'src/assets/images/intuit/phone (1).png',
               small: 'https://files.ssenick.fun/portfolio/honey/mobile/image_1_small.webp',
            },
            {
               big: 'src/assets/images/intuit/phone (2).png',
               small: 'https://files.ssenick.fun/portfolio/honey/mobile/image_2_small.webp',
            },
            {
               big: 'src/assets/images/intuit/phone (3).png',
               small: 'https://files.ssenick.fun/portfolio/honey/mobile/image_3_small.webp',
            },
         ],
      },
   },
   technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp, Swiper and other',
};
