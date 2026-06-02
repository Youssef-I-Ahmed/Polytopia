import img_brochure_en from '../assets/images/brochure-en.webp';
import img_factory_door_real from '../assets/images/factory-door-real.webp';
import img_factory_front_real from '../assets/images/factory-front-real.webp';
import img_factory_sign_real from '../assets/images/factory-sign-real.webp';
import img_hdpe_blow_molding from '../assets/images/hdpe-blow-molding.webp';
import img_hdpe_caps from '../assets/images/hdpe-caps.webp';
import img_hdpe_injection from '../assets/images/hdpe-injection.webp';
import img_hdpe_main from '../assets/images/hdpe-main.webp';
import img_hdpe_pipes from '../assets/images/hdpe-pipes.webp';
import img_hdpe_sample_bottles from '../assets/images/hdpe-sample-bottles.webp';
import img_hdpe_sample_coils from '../assets/images/hdpe-sample-coils.webp';
import img_hdpe_sample_drums from '../assets/images/hdpe-sample-drums.webp';
import img_ldpe_bags from '../assets/images/ldpe-bags.webp';
import img_ldpe_film from '../assets/images/ldpe-film.webp';
import img_ldpe_main from '../assets/images/ldpe-main.webp';
import img_ldpe_packaging from '../assets/images/ldpe-packaging.webp';
import img_ldpe_transparent_bag from '../assets/images/ldpe-transparent-bag.webp';
import img_pellets_beige from '../assets/images/pellets-beige.webp';
import img_pellets_black_real from '../assets/images/pellets-black-real.webp';
import img_pellets_blue_real from '../assets/images/pellets-blue-real.webp';
import img_pellets_gray_real from '../assets/images/pellets-gray-real.webp';
import img_pellets_green_real from '../assets/images/pellets-green-real.webp';
import img_pellets_red_real from '../assets/images/pellets-red-real.webp';
import img_pellets_transparent from '../assets/images/pellets-transparent.webp';
import img_pellets_white_real from '../assets/images/pellets-white-real.webp';
import img_pellets_white from '../assets/images/pellets-white.webp';
import img_pellets_yellowish from '../assets/images/pellets-yellowish.webp';
import img_pp_fiber from '../assets/images/pp-fiber.webp';
import img_pp_h from '../assets/images/pp-h.webp';
import img_pp_injection from '../assets/images/pp-injection.webp';
import img_pp_main from '../assets/images/pp-main.webp';
import img_pp_raffia from '../assets/images/pp-raffia.webp';
import img_pp_sample_bowl from '../assets/images/pp-sample-bowl.webp';
import img_pp_sample_container from '../assets/images/pp-sample-container.webp';
import img_pp_sample_crate from '../assets/images/pp-sample-crate.webp';

export const products = [
  {
    slug: 'hdpe',
    translationKey: 'hdpe',
    code: 'HDPE',
    heroImage: img_hdpe_main,
    cardImage: img_pellets_green_real,
    colors: [
      { nameKey: 'green', image: img_pellets_green_real },
      { nameKey: 'blue', image: img_pellets_blue_real },
      { nameKey: 'black', image: img_pellets_black_real },
      { nameKey: 'gray', image: img_pellets_gray_real },
      { nameKey: 'white', image: img_pellets_white_real },
      { nameKey: 'red', image: img_pellets_red_real }
    ],
    specs: [
      ['density', 'ASTM D1505', 'g/cm³', '0.954'],
      ['mfr', 'ASTM D1238', 'g/10min', '0.35'],
      ['tensile', 'ASTM D638', 'MPa', '26'],
      ['flexural', 'ASTM D790', 'MPa', '1200']
    ],
    typeImages: [img_hdpe_pipes, img_hdpe_injection, img_hdpe_blow_molding, img_hdpe_caps],
    sampleImages: [img_hdpe_sample_drums, img_hdpe_sample_coils, img_hdpe_sample_bottles]
  },
  {
    slug: 'pp',
    translationKey: 'pp',
    code: 'PP',
    heroImage: img_pp_main,
    cardImage: img_pellets_black_real,
    colors: [
      { nameKey: 'black', image: img_pellets_black_real },
      { nameKey: 'white', image: img_pellets_white_real },
      { nameKey: 'blue', image: img_pellets_blue_real },
      { nameKey: 'red', image: img_pellets_red_real },
      { nameKey: 'green', image: img_pellets_green_real },
      { nameKey: 'beige', image: img_pellets_beige }
    ],
    specs: [
      ['density', '-', 'g/cm³', '0.90'],
      ['mfr', '-', 'g/10min', '12'],
      ['size', '-', 'mm', '3-5'],
      ['bag', '-', 'kg', '25']
    ],
    typeImages: [img_pp_raffia, img_pp_injection, img_pp_fiber, img_pp_h],
    sampleImages: [img_pp_sample_bowl, img_pp_sample_container, img_pp_sample_crate]
  },
  {
    slug: 'ldpe',
    translationKey: 'ldpe',
    code: 'LDPE / LLDPE',
    heroImage: img_ldpe_main,
    cardImage: img_pellets_transparent,
    colors: [
      { nameKey: 'transparent', image: img_pellets_transparent },
      { nameKey: 'white', image: img_pellets_white_real },
      { nameKey: 'beige', image: img_pellets_yellowish },
      { nameKey: 'blue', image: img_pellets_blue_real },
      { nameKey: 'green', image: img_pellets_green_real },
      { nameKey: 'red', image: img_pellets_red_real }
    ],
    specs: [
      ['density', '-', 'g/cm³', '0.90'],
      ['mfr', '-', 'g/10min', '12'],
      ['size', '-', 'mm', '3-5'],
      ['bag', '-', 'kg', '25']
    ],
    typeImages: [img_ldpe_film, img_ldpe_bags, img_ldpe_packaging, img_ldpe_transparent_bag],
    sampleImages: [img_ldpe_film, img_ldpe_bags, img_ldpe_packaging]
  }
];

export const galleryImages = [
  { src: img_factory_front_real, alt: 'Polytopia factory exterior' },
  { src: img_pellets_white, alt: 'White recycled plastic pellets' },
  { src: img_pellets_black_real, alt: 'Black recycled plastic pellets' },
  { src: img_factory_sign_real, alt: 'Polytopia factory signage' },
  { src: img_pellets_red_real, alt: 'Red recycled plastic pellets' },
  { src: img_brochure_en, alt: 'Polytopia brochure' },
  { src: img_pellets_green_real, alt: 'Green recycled plastic pellets' },
  { src: img_factory_door_real, alt: 'Factory entrance and handling area' }
];

export const processSteps = ['sourcing', 'sorting', 'washing', 'shredding', 'pelletizing', 'qc'];
