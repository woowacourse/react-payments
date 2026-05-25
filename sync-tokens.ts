import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import {
  colorPalette,
  fontColor,
  colorCard,
  spacing,
  radius,
  shadow,
  fontSize,
  fontWeight,
} from './tokens.config.ts';

const ROOT = dirname(fileURLToPath(import.meta.url));

// ---- CSS generation ----

function cssVarSection(comment: string, prefix: string, tokens: Record<string, string>): string {
  const vars = Object.entries(tokens)
    .map(([k, v]) => `  ${prefix}${k}: ${v};`)
    .join('\n');
  return `  /* ${comment} */\n${vars}`;
}

function colorPaletteSection(tokens: Record<string, string>): string {
  const base: [string, string][] = [];
  const gray: [string, string][] = [];
  const red: [string, string][] = [];

  for (const [k, v] of Object.entries(tokens)) {
    if (k.startsWith('gray-')) gray.push([k, v]);
    else if (k.startsWith('red-')) red.push([k, v]);
    else base.push([k, v]);
  }

  const toVars = (entries: [string, string][]) =>
    entries.map(([k, v]) => `  --color-${k}: ${v};`).join('\n');

  return [
    base.length ? toVars(base) : null,
    gray.length ? `  /* gray */\n${toVars(gray)}` : null,
    red.length ? `  /* red */\n${toVars(red)}` : null,
  ]
    .filter(Boolean)
    .join('\n\n');
}

const rootBlock = [
  ':root {',
  colorPaletteSection(colorPalette as unknown as Record<string, string>),
  '',
  cssVarSection('card issuer colors', '--color-card-', colorCard),
  '',
  cssVarSection('spacing', '--spacing-', spacing as unknown as Record<string, string>),
  '',
  cssVarSection('border-radius', '--radius-', radius),
  '',
  cssVarSection('shadow', '--shadow-', shadow),
  '',
  cssVarSection('font-size', '--font-size-', fontSize),
  '',
  cssVarSection('font-weight', '--font-weight-', fontWeight),
  '}',
].join('\n');

writeFileSync(join(ROOT, 'src/styles/token.css'), rootBlock + '\n');

// ---- TypeScript generation ----

function tsKey(key: string): string {
  if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key)) return key;
  return `'${key}'`;
}

function tokenConst(exportName: string, typeName: string, cssPrefix: string, tokens: Record<string, string>): string {
  const isNumeric = /^\d+$/;
  const entries = Object.keys(tokens)
    .map(k => `  ${isNumeric.test(k) ? k : tsKey(k)}: 'var(${cssPrefix}${k})',`)
    .join('\n');
  return (
    `export const ${exportName} = {\n${entries}\n} as const;\n\n` +
    `export type ${typeName} = keyof typeof ${exportName};`
  );
}

function semanticConst(exportName: string, typeName: string, mapping: Record<string, string>): string {
  const entries = Object.entries(mapping).map(([k, v]) => `  ${tsKey(k)}: 'var(--${v})',`).join('\n');
  return (
    `export const ${exportName} = {\n${entries}\n} as const;\n\n` +
    `export type ${typeName} = keyof typeof ${exportName};`
  );
}

const tokensTs =
  [
    '// This file is auto-generated. Run `npm run sync-tokens` to update.',
    tokenConst('SPACING', 'SpacingToken', '--spacing-', spacing as unknown as Record<string, string>),
    tokenConst('FONT_SIZE', 'FontSizeToken', '--font-size-', fontSize),
    tokenConst('FONT_WEIGHT', 'FontWeightToken', '--font-weight-', fontWeight),
    semanticConst('FONT_COLOR', 'FontColorToken', fontColor as unknown as Record<string, string>),
    tokenConst('RADIUS', 'RadiusToken', '--radius-', radius),
    tokenConst('SHADOW', 'ShadowToken', '--shadow-', shadow),
  ].join('\n\n') + '\n';

writeFileSync(join(ROOT, 'src/tokens.ts'), tokensTs);

console.log('Design tokens synced:');
console.log('  src/styles/token.css');
console.log('  src/styles/tokens.ts');
