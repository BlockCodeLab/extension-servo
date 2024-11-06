import featureImage from './feature.png';
import iconImage from './icon.png';

export default {
  hidden: true,
  name: 'Servo',
  description: 'Standard servo module.',
  image: featureImage,
  icon: iconImage,
  tags: ['blocks', 'actuator'],

  // l10n
  translations: {
    en: {
      name: 'Servo',
      description: 'Standard servo module.',
    },
    'zh-Hans': {
      name: '舵机',
      description: '通用舵机模块。',
    },
  },
};
