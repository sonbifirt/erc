const img = (file: string) => `/images/${file}` as const;

export const heroImage = {
  src: img("hero.jpg"),
  altKey: "hero" as const,
};

export const aboutImage = {
  src: img("pexels-cristian-rojas-8853499.jpg"),
  altKey: "aboutBuilding" as const,
};

export const serviceImageKeys = [
  "wind",
  "solar",
  "storage",
  "material",
  "sustainable",
] as const;

export const serviceImages = {
  wind: {
    src: img("pexels-memet-oz-296480690-38043279.jpg"),
    altKey: "windTurbine" as const,
    position: "center",
  },
  solar: {
    src: img("pexels-cristian-rojas-8853499.jpg"),
    altKey: "solarRoof" as const,
    position: "center",
  },
  storage: {
    src: img("pexels-quang-nguyen-vinh-222549-35105458.jpg"),
    altKey: "storage" as const,
    position: "center",
  },
  material: {
    src: img("pexels-quang-nguyen-vinh-222549-6876534.jpg"),
    altKey: "material" as const,
    position: "center",
  },
  sustainable: {
    src: img("pexels-tugaykocaturk-33122840.jpg"),
    altKey: "sustainable" as const,
    position: "center",
  },
} as const;

export const galleryImages = [
  {
    src: img("pexels-quang-nguyen-vinh-222549-35105457.jpg"),
    altKey: "gallery1" as const,
    position: "center",
  },
  {
    src: img("pexels-quang-nguyen-vinh-222549-35105458.jpg"),
    altKey: "gallery2" as const,
    position: "center",
  },
  {
    src: img("pexels-tomfisk-9893729.jpg"),
    altKey: "gallery3" as const,
    position: "center",
  },
  {
    src: img("pexels-diego-vivanco-103691-16586150.jpg"),
    altKey: "gallery4" as const,
    position: "center",
  },
  {
    src: img("pexels-memet-oz-296480690-38043279.jpg"),
    altKey: "gallery5" as const,
    position: "center",
  },
  {
    src: img("pexels-tugaykocaturk-33122840.jpg"),
    altKey: "gallery6" as const,
    position: "center",
  },
  {
    src: img("pexels-weekendplayer-18314438.jpg"),
    altKey: "gallery7" as const,
    position: "center",
  },
  {
    src: img("pexels-quang-nguyen-vinh-222549-6876534.jpg"),
    altKey: "gallery8" as const,
    position: "center",
  },
] as const;

export const contactImage = {
  src: img("pexels-diego-vivanco-103691-16586150.jpg"),
  altKey: "contactField" as const,
};

export const aboutPageImages = {
  solarField: {
    src: img("pexels-diego-vivanco-103691-16586150.jpg"),
    altKey: "aboutSolarField" as const,
  },
  windTurbine: {
    src: img("pexels-memet-oz-296480690-38043279.jpg"),
    altKey: "aboutWindTurbine" as const,
  },
  aerialSolar: {
    src: img("pexels-tomfisk-9893729.jpg"),
    altKey: "aboutAerialSolar" as const,
  },
  sustainable: {
    src: img("pexels-quang-nguyen-vinh-222549-35105457.jpg"),
    altKey: "aboutSustainable" as const,
  },
  windBlueSky: {
    src: img("pexels-weekendplayer-18314438.jpg"),
    altKey: "aboutWindBlueSky" as const,
  },
} as const;

export const serviceProjectImages = {
  wind: {
    src: img("pexels-weekendplayer-18314438.jpg"),
    altKey: "projectWind" as const,
  },
  solar: {
    src: img("pexels-tomfisk-9893729.jpg"),
    altKey: "projectSolar" as const,
  },
} as const;
