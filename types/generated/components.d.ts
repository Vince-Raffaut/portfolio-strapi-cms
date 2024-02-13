import type { Schema, Attribute } from '@strapi/strapi';

export interface HomeContactDetals extends Schema.Component {
  collectionName: 'components_home_contact_detals';
  info: {
    displayName: 'Contact Details';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
  };
}

export interface HomeHeroBanner extends Schema.Component {
  collectionName: 'components_home_hero_banners';
  info: {
    displayName: 'Hero Banner';
    description: '';
  };
  attributes: {
    Image: Attribute.Media;
    Heading: Attribute.String;
    experience: Attribute.Relation<
      'home.hero-banner',
      'oneToOne',
      'api::experience.experience'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home.contact-detals': HomeContactDetals;
      'home.hero-banner': HomeHeroBanner;
    }
  }
}
