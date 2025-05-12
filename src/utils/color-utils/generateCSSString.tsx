export function generateCSSString(cssVars: Record<string, string>): string {
    const entries = Object.entries(cssVars);
    if (entries.length === 0) return '';
  
    const cssString = entries
      .map(([key, value]) => `${key}: ${value};`)
      .join('\n  ');
  
    return `:root {\n  ${cssString}\n}`;
}
  