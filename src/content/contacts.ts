import type { ILinksList } from '@/components/LinksList/LinksList.tsx';

export const PHONE = '+48503638883';
export const EMAIL = 'tanruven@gmail.com';

export const contacts: ILinksList[] = [
   {
      text: PHONE,
      href: `tel:${PHONE}`,
      target: '_self',
   },
   {
      text: EMAIL,
      href: `mailto:${EMAIL}`,
      target: '_self',
   },
];
