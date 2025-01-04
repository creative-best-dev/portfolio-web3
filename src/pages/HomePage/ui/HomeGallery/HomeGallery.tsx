import { memo } from 'react';
import VideoGreenShop from '@/assets/videos/greenshop.mp4';
import ImageGreenShop from '@/assets/videos/greenshop.webp';
import VideoSportbet from '@/assets/videos/sportbet.mp4';
import ImageSportbet from '@/assets/videos/sportbet.webp';
import VidoNexus from '@/assets/videos/nexuspro.mp4';
import VideoSwell from '@/assets/videos/swell.mp4';
import { ParallaxVideosGroupSliders } from '@/components/ParallaxVideosGroupSliders/ParallaxVideosGroupSliders.tsx';
import type { VideoGroup } from '@/types/videoGroup.ts';

interface HomeGalleryProps {
   className?: string;
}

const videoGroupOne: VideoGroup[] = [
   { video: VideoSwell, previewImage: ImageSportbet },
   { video: VideoSportbet, previewImage: ImageSportbet },
   { video: VidoNexus, previewImage: ImageSportbet },
   { video: VideoGreenShop, previewImage: ImageGreenShop },
];

const HomeGallery = memo((props: HomeGalleryProps) => {
   const { className } = props;
   return <ParallaxVideosGroupSliders className={className} groupOne={videoGroupOne} />;
});

HomeGallery.displayName = 'HomeGallery';
export { HomeGallery };
