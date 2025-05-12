import { Gradient } from '../../types/api';

export function isHexColor(value: string): boolean {
  return /^#[0-9A-Fa-f]{6}$/.test(value);
}

export function toOpaqueHex(value: string, percent: number): string | null {
  if (!isHexColor(value)) return null;
  if (percent < 0 || percent > 100) return null;

  const opacityHex = Math.round((percent / 100) * 255).toString(16).padStart(2, '0');
  return `${value}${opacityHex}`;
}

export function buildGradient(value: Gradient | null): string | null {
  console.log("buildgradient")
  console.log(value)
  if (!value || !Array.isArray(value.GradientColor)) return null;

  const angle = value.DegreAngle ?? 0;
  const colors = value.GradientColor.filter(c => isHexColor(c.Hexa));
  console.log(colors)

  if (colors.length === 0) return null;

  if (value.Type === 'color_stop') {
    const stops = colors.map(c =>
      c.Percent ? `${c.Hexa} ${c.Percent}%` : `${c.Hexa}`
    );
    console.log(`linear-gradient(${angle}deg, ${stops.join(', ')})`)
    return `linear-gradient(${angle}deg, ${stops.join(', ')})`;
  }

  if (value.Type === 'color_hint') {
    const hints: string[] = [];
  
    for (let i = 0; i < colors.length; i++) {
      const c = colors[i];
      const isLast = i === colors.length - 1;
  
      if (c.Percent !== undefined) {
        // Dernier élément : joindre la couleur et le pourcentage avec un espace
        if (isLast) {
          hints.push(`${c.Hexa} ${c.Percent}%`);
        } else {
          hints.push(c.Hexa, `${c.Percent}%`);
        }
      } else {
        hints.push(c.Hexa);
      }
    }
  
    const gradient = `linear-gradient(${angle}deg, ${hints.join(', ')})`;
    console.log(gradient);
    return gradient;
  }
  

  return null;
}
