import { Color, ColorPercent, Gradient } from '../../types/api';
import { isHexColor, toOpaqueHex, buildGradient } from './color-utils';

const CSSVar: [string, string][] = [
  ['FondPrincipal', '--main-background'],
  ['ComplementairePrincipal', '--complementary-main'],
  ['FondPrincipalOpaque', '--op-main-bg'],
  ['TextePrincipal', '--main-foreground'],
  ['TextePrincipalOpaque', '--op-main-fg'],
  ['FondSecondaire', '--secondary-background'],
  ['ComplementaireSecondaire', '--complementary-secondary'],
  ['FondSecondaireOpaque', '--op-secondary-bg'],
  ['TexteSecondaire', '--secondary-foreground'],
  ['TexteSecondaireOpaque', '--op-secondary-fg'],
  ['Alternative', '--alternative-color'],
  ['GradientPrincipal', '--gradient-main'],
  ['GradientSecondaire', '--gradient-secondary'],
];

export const DEFAULT_CSS_VARIABLES: Record<string, string> = {
  '--main-background': '#ededed',
  '--complementary-main': 'red',
  '--op-main-bg': '#9c9c9c77',
  '--main-foreground': '#171717',
  '--op-main-fg': '#171717b0',
  '--secondary-background': '#312e81',
  '--complementary-secondary': 'black',
  '--op-secondary-bg': '#312e81b0',
  '--secondary-foreground': '#ffffff',
  '--op-secondary-fg': '#ffffffb0',
  '--alternative-color': '#EDC951',
  '--gradient-main': 'linear-gradient(45deg, var(--complementary-main), 25%, var(--main-background))',
  '--gradient-secondary': 'linear-gradient(45deg, var(--complementary-secondary), 25%, var(--secondary-background))',
};

export function generateCSSVariables(data: [string, Color | ColorPercent | Gradient][]): Record<string, string> {
  const cssVars: Record<string, string> = { ...DEFAULT_CSS_VARIABLES };

  for (const [key, value] of data) {
    const cssVar = CSSVar.find(([dataKey]) => dataKey === key)?.[1];
    if (!cssVar) continue;

    switch (value.__typename) {
      case 'ComponentCouleurCouleur':
        const color = value as Color
        if (isHexColor(color.Hexa)) {
          cssVars[cssVar] = color.Hexa;
        }
        break;

      case 'ComponentCouleurCouleurPercent':
        const colorPercent = value as ColorPercent
        if (isHexColor(colorPercent.Hexa)) {
          const opaque = toOpaqueHex(colorPercent.Hexa, colorPercent.Percent);
          if (opaque) cssVars[cssVar] = opaque;
        }
        break;

      case 'ComponentCouleurLinearGradient':
        const gradient = buildGradient(value as Gradient);
        console.log(gradient)
        if (gradient) cssVars[cssVar] = gradient;
        break;
    }
  }
  console.log(cssVars)
  return cssVars;
}

