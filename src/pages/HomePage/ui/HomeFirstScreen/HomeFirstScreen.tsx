import { motion, useScroll, useTransform } from 'framer-motion';
import { memo, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import ImageMe from '@/assets/images/me_half.webp';
import BackImg from '@/assets/images/back1.webp'
import ImageMeSmall from '@/assets/images/me_half_small.webp';
import { AppImage } from '@/components/UI/AppImage/AppImage';
import { classNames } from '@/helpers/classNames/classNames';
import { Header } from '@/layout';

import { TextSlider } from '../TextSlider/TextSlider';
import cls from './HomeFirstScreen.module.scss';

interface HomeFirstScreenProps {
   className?: string;
}

const HomeFirstScreen = memo((props: HomeFirstScreenProps) => {
   const { className } = props;
   const ref = useRef<HTMLDivElement | null>(null);
   const { t } = useTranslation('page');
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ['end end', 'end start'],
   });

   const valueOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
   const valueMove = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
   const valueMoveText = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

   return (
      <div ref={ref} className={classNames(cls.HomeFirstScreen, {}, [className])}>
         <motion.div style={{ y: valueMove, opacity: valueOpacity }} className={cls.image}>
            <AppImage
               className={classNames(cls.img, {}, [cls.back])}
               src={BackImg}
               spare={ImageMeSmall}
               loading="lazy"
            />
         </motion.div>
         <Header />
         <TextSlider />
         <motion.div style={{ y: valueMove, opacity: valueOpacity }} className={cls.image}>
            <AppImage
               className={classNames(cls.img, {}, [])}
               src={ImageMe}
               spare={ImageMeSmall}
               loading="lazy"
            />
         </motion.div>
         <div className={cls.wrapper}>
            <motion.div style={{ y: valueMoveText }} className={cls.main}>
               <h5>
                  {t('Ruven')} {t('Tan')}
               </h5>
               <h1>{t('Full Stack Blockchain Developer')}</h1>
            <h3>{t('Blockchain description')}</h3>
            </motion.div>
         </div>
      </div>
   );
});

HomeFirstScreen.displayName = 'HomeFirstScreen';
export { HomeFirstScreen };
