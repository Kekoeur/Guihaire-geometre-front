import { ColorData, Color, ColorPercent, Gradient } from '../../types/api';

export function parseColorData(couleurData: ColorData): [string, Color | ColorPercent | Gradient][] {
  const parsed: [string, Color | ColorPercent | Gradient][] = [];

  for (const key in couleurData) {
    const value = couleurData[key];

    if (Array.isArray(value) && value.length > 0) {
      parsed.push([key, value[0]]);
    }
  }

  return parsed;
}