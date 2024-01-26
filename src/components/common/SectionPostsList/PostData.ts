import { images } from './images';

export interface PostData {
  url: { jpg1x: string; jpg2x: string; png1x: string; png2x: string };
  // url: object;
  postName: string;
  title: string;
  description: string;
}

export const postsDataArray: PostData[] = [
  {
    url: {
      jpg1x: images.Sea1xjpg,
      jpg2x: images.Sea2xjpg,
      png1x: images.Sea1xpng,
      png2x: images.Sea2xpng,
    },
    postName: 'Sea',
    title: 'Post 1',
    description: 'The Impact of Technology on the Workplace: How Technology is Changing',
  },
  {
    url: {
      jpg1x: images.Venice1xjpg,
      jpg2x: images.Venice2xjpg,
      png1x: images.Venice1xpng,
      png2x: images.Venice2xpng,
    },
    postName: 'post2',
    title: 'Post 2',
    description: 'The Impact of Technology on the Workplace: How Technology is Changing',
  },
  {
    url: {
      jpg1x: images.Girl1xjpg,
      jpg2x: images.Girl2xjpg,
      png1x: images.Girl1xpng,
      png2x: images.Girl2xpng,
    },
    postName: 'post3',
    title: 'Post 3',
    description: 'The Impact of Technology on the Workplace: How Technology is Changing',
  },
  {
    url: {
      jpg1x: images.House1xjpg,
      jpg2x: images.House2xjpg,
      png1x: images.House1xpng,
      png2x: images.House2xpng,
    },
    postName: 'Sea',
    title: 'Post 1',
    description: 'The Impact of Technology on the Workplace: How Technology is Changing',
  },
  {
    url: {
      jpg1x: images.Stones1xjpg,
      jpg2x: images.Stones2xjpg,
      png1x: images.Stones1xpng,
      png2x: images.Stones2xpng,
    },
    postName: 'post2',
    title: 'Post 2',
    description: 'The Impact of Technology on the Workplace: How Technology is Changing',
  },
  {
    url: {
      jpg1x: images.Car1xjpg,
      jpg2x: images.Car2xjpg,
      png1x: images.Car1xpng,
      png2x: images.Car2xpng,
    },
    postName: 'post3',
    title: 'Post 3',
    description: 'The Impact of Technology on the Workplace: How Technology is Changing',
  },
  {
    url: {
      jpg1x: images.Iphone1xjpg,
      jpg2x: images.Iphone2xjpg,
      png1x: images.Iphone1xpng,
      png2x: images.Iphone2xpng,
    },
    postName: 'Sea',
    title: 'Post 1',
    description: 'The Impact of Technology on the Workplace: How Technology is Changing',
  },
  {
    url: {
      jpg1x: images.Island1xjpg,
      jpg2x: images.Island2xjpg,
      png1x: images.Island1xpng,
      png2x: images.Island2xpng,
    },
    postName: 'post2',
    title: 'Post 2',
    description: 'The Impact of Technology on the Workplace: How Technology is Changing',
  },
  {
    url: {
      jpg1x: images.DualSense1xjpg,
      jpg2x: images.DualSense2xjpg,
      png1x: images.DualSense1xpng,
      png2x: images.DualSense2xpng,
    },
    postName: 'post3',
    title: 'Post 3',
    description: 'The Impact of Technology on the Workplace: How Technology is Changing',
  },
  // ... добавьте другие объекты по необходимости
];
