/* eslint-disable no-nested-ternary */
export class Color {
  readonly h: number;

  readonly s: number;

  readonly l: number;

  constructor(h: number, s: number, l: number) {
    this.h = h;
    this.s = s;
    this.l = l;
  }

  setHue(h: number) {
    return new Color(h, this.s, this.l);
  }

  setSaturation(s: number) {
    return new Color(this.h, s, this.l);
  }

  setLightness(l: number) {
    return new Color(this.h, this.s, l);
  }

  adjustHue(offset: number) {
    return new Color(this.h + offset, this.s, this.l);
  }

  adjustSaturation(offset: number) {
    return new Color(this.h, this.s + offset, this.l);
  }

  adjustLightness(offset: number) {
    return new Color(this.h, this.s, this.l + offset);
  }

  normalize() {
    return new Color(
      ((Math.round(this.h) % 360) + 360) % 360, // 0 ~ 360, positive modulo
      Math.max(0, Math.min(100, Math.round(this.s))), // 0 ~ 100
      Math.max(0, Math.min(100, Math.round(this.l))), // 0 ~ 100
    );
  }

  toString(): string {
    const normalizedColor = this.normalize();
    return `hsl(${normalizedColor.h}, ${normalizedColor.s}%, ${normalizedColor.l}%)`;
  }

  static fromHex(color: string) {
    const values = color.startsWith('#') ? color.slice(1) : color;

    const [r, g, b] = [values.slice(0, 2), values.slice(2, 4), values.slice(4, 6)].map((hex) =>
      Number.parseInt(hex, 16),
    );

    return new Color(...Color.convertRGB2HSL(r, g, b));
  }

  /**
   * Implementation source code from https://www.30secondsofcode.org/js/s/rgb-to-hsl/
   */
  static convertRGB2HSL(_r: number, _g: number, _b: number): [number, number, number] {
    const r = _r / 255;
    const g = _g / 255;
    const b = _b / 255;
    const l = Math.max(r, g, b);
    const s = l - Math.min(r, g, b);

    const h = s ? (l === r ? (g - b) / s : l === g ? 2 + (b - r) / s : 4 + (r - g) / s) : 0;
    return [
      60 * h < 0 ? 60 * h + 360 : 60 * h,
      100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
      (100 * (2 * l - s)) / 2,
    ];
  }

  /**
   * Implementation source code from https://www.30secondsofcode.org/js/s/hsl-to-rgb/
   */
  static convertHSL2RGB(_h: number, _s: number, _l: number): [number, number, number] {
    const h = _h;
    const s = _s / 100;
    const l = _l / 100;
    const k = (n: number) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return [255 * f(0), 255 * f(8), 255 * f(4)];
  }
}
