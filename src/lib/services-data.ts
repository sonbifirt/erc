import { serviceImages } from "@/lib/images";

export const serviceKeys = [
  "wind",
  "solar",
  "storage",
  "material",
  "sustainable",
] as const;

export type ServiceKey = (typeof serviceKeys)[number];

export function getServiceImage(key: ServiceKey) {
  return serviceImages[key];
}
