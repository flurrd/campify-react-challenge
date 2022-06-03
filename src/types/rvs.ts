export enum LISTING_STATUS {
  active = "active",
  inactive = "inactive",
}

export enum RV_TYPES {
  van = "van",
  caravan = "caravan",
  trailer = "trailer",
}

export interface Rv {
  id: number;
  listing: LISTING_STATUS;
  vanType: RV_TYPES;
  attributes: {
    name: string;
    location: string;
    coverImage: string;
  };
}
