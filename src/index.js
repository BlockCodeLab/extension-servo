import featureImage from './feature.png';
import iconImage from './icon.png';

export default {
  hidden: true,
  name: 'Servo',
  description: 'Standard servo module.',
  collaborator: 'Yeqin Gong',
  image: featureImage,
  icon: iconImage,
  tags: ['blocks', 'actuator'],

  // l10n
  translations: {
    en: {
      name: 'Servo',
      description: 'Standard servo module.',
      collaborator: 'Yeqin Gong',
    },
    'zh-Hans': {
      name: '舵机',
      description: '通用舵机模块。',
      collaborator: '龚业勤',
    },
  },
};
