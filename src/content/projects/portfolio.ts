import type { projectType } from '@/types/projectsItems.ts';

export const portfolio: projectType = {
   id: 6,
   name: 'Nexuspro.io(CEX)',
   year: '2024',
   location: 'United States',
   role: 'Senior Software Engineer',
   projectURL: 'https://nexuspro.io',
   gitURL: '',
   path: 'Nexuspro.io',
   images: {
      preview: '/src/assets/images/Nexuspro/screen (2).png',
      sliders: [
         {
            big: '/src/assets/images/Nexuspro/screen (1).png',
            small: 'https://files.ssenick.fun/portfolio/portfolio/sliders/image_1_small.webp',
         },
         {
            big: '/src/assets/images/Nexuspro/screen (2).png',
            small: 'https://files.ssenick.fun/portfolio/portfolio/sliders/image_2_small.webp',
         },
         {
            big: '/src/assets/images/Nexuspro/screen (3).png',
            small: 'https://files.ssenick.fun/portfolio/portfolio/sliders/image_3_small.webp',
         },
         {
            big: '/src/assets/images/Nexuspro/screen (4).png',
            small: 'https://files.ssenick.fun/portfolio/portfolio/sliders/image_4_small.webp',
         },
         {
            big: '/src/assets/images/Nexuspro/screen (5).png',
            small: 'https://files.ssenick.fun/portfolio/portfolio/sliders/image_5_small.webp',
         },
         {
            big: '/src/assets/images/Nexuspro/screen (1).png',
            small: 'https://files.ssenick.fun/portfolio/portfolio/sliders/image_6_small.webp',
         },
         {
            big: '/src/assets/images/Nexuspro/screen (2).png',
            small: 'https://files.ssenick.fun/portfolio/portfolio/sliders/image_8_small.webp',
         },
         {
            big: '/src/assets/images/Nexuspro/screen (3).png',
            small: 'https://files.ssenick.fun/portfolio/portfolio/sliders/image_7_small.webp',
         },
      ],
      devices: {
         laptop: {
            big: '/src/assets/images/Nexuspro/screen (2).png',
            small: 'https://files.ssenick.fun/portfolio/portfolio/laptop/laptop_small.webp',
         },
         tablet: {
            big: '/src/assets/images/Nexuspro/screen (2).png',
            small: 'https://files.ssenick.fun/portfolio/portfolio/tablet/tablet_small.webp',
         },
         mobile: [
            {
               big: '/src/assets/images/Nexuspro/phone (1).png',
               small: 'https://files.ssenick.fun/portfolio/portfolio/mobile/image_1_small.webp',
            },
            {
               big: '/src/assets/images/Nexuspro/phone (2).png',
               small: 'https://files.ssenick.fun/portfolio/portfolio/mobile/image_2_small.webp',
            },
            {
               big: '/src/assets/images/Nexuspro/phone (3).png',
               small: 'https://files.ssenick.fun/portfolio/portfolio/mobile/image_3_small.webp',
            },
         ],
      },
   },
   technologies: 'HTML, SCSS, JavaScript, Webpack, Gulp',
};
