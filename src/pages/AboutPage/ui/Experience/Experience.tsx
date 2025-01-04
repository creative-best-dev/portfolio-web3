import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { BlockWithTitle } from '@/components/BlockWithTitle/BlockWithTitle';
import { classNames } from '@/helpers/classNames/classNames';

import cls from './Experience.module.scss';

interface ExperienceProps {
   className?: string;
}

const Experience = memo((props: ExperienceProps) => {
   const { className } = props;
   const { t } = useTranslation('about');
   return (
      <BlockWithTitle className={classNames(cls.Experience, {}, [className])} title={t('titleExperience')}>
         <div className={cls.wrapper}>
            <ExperienceItem
               className={cls.item}
               title={t('firstItemTitle')}
               description={
                  'Ethereum, Solidity, Web3.js, Ethers.js, Wagmi, CoinGecko API,  Hardhat, Infura, React.js, TypeScript, Node.js, GraphQL, Apollo, MongoDB,Google Auth, Chai, Mocha'
               }
               company={'Nexuspro.io'}
               period={'Aug 2024 - Present'}
               responsibilities={t('firstItemResponsibilities')}
            />
            <div className={cls.line}></div>
            <ExperienceItem
               className={cls.item2}
               title={t('secondItemTitle')}
               responsibilities={t('secondItemResponsibilities')}
               description={
                  'Ethereum, Solidity, Web3.js, Ethers.js, Moralis, Wagmi, Truffle, Infura, React.js, TypeScript, Node.js, GraphQL, MongoDB, Chai, Mocha'
               }
               company={'RociFi Labs'}
               period={'Sep 2023 - Jun 2024'}
               position="right"
            />
            <ExperienceItem
               className={cls.item3}
               title={t('thirdItemTitle')}
               responsibilities={t('thirdItemResponsibilities')}
               description={
                  'Solana, Rust Anchor, Smart Contracts, React.js, TypeScript, Web3.js, Wallet Integration, Solana Smart Contract, Storage Optimization, Gas Fee Reduction, Docker'
               }
               company={'Synesis One'}
               period={'Oct 2022 - Aug 2023'}
            />
         </div>
      </BlockWithTitle>
   );
});

Experience.displayName = 'Experience';
export { Experience };

interface ExperienceItemProps {
   title: string;
   description: string;
   period: string;
   responsibilities: string;
   company: string;
   className?: string;
   position?: 'left' | 'right';
}
const ExperienceItem = memo((props: ExperienceItemProps) => {
   const { className, company, period, title, description, responsibilities, position = 'left' } = props;
   const { t } = useTranslation('about');
   return (
      <div className={classNames(cls.ExperienceItem, {}, [className, cls[position]])}>
         <h3 className={cls.title}>{title}</h3>
         <p className={cls.period}>{period}</p>
         <p className={cls.company}>
            <span className={cls.span}>{t('experienceItemSubtitle')}</span>
            <span> {company}</span>
         </p>
         <p className={cls.description}>{description}</p>
         <p className={cls.responsibilities}>{responsibilities}</p>
      </div>
   );
});

ExperienceItem.displayName = 'ExperienceItem';
