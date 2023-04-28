/* eslint-disable no-nested-ternary */
export class Color {
  readonly hue: number;

  readonly saturation: number;

  readonly lightness: number;

  readonly alpha: number;

  constructor(hue: number, saturation: number, lightness: number, alpha = 1) {
    this.hue = hue;
    this.saturation = saturation;
    this.lightness = lightness;
    this.alpha = alpha;
  }

  setHue(hue: number) {
    return new Color(hue, this.saturation, this.lightness, this.alpha);
  }

  setSaturation(saturation: number) {
    return new Color(this.hue, saturation, this.lightness, this.alpha);
  }

  setLightness(lightness: number) {
    return new Color(this.hue, this.saturation, lightness, this.alpha);
  }

  setAlpha(alpha: number) {
    return new Color(this.hue, this.saturation, this.lightness, alpha);
  }

  adjustHue(offset: number) {
    return new Color(this.hue + offset, this.saturation, this.lightness, this.alpha);
  }

  adjustSaturation(offset: number) {
    return new Color(this.hue, this.saturation + offset, this.lightness, this.alpha);
  }

  adjustLightness(offset: number) {
    return new Color(this.hue, this.saturation, this.lightness + offset, this.alpha);
  }

  adjustAlpha(offset: number) {
    return new Color(this.hue, this.saturation, this.lightness, this.alpha + offset);
  }

  oppositeWithLightness() {
    return new Color(this.hue, this.saturation, 100 - this.lightness);
  }

  normalize() {
    return new Color(
      ((Math.round(this.hue) % 360) + 360) % 360, // 0 ~ 360, positive modulo
      Math.max(0, Math.min(100, Math.round(this.saturation))), // 0 ~ 100
      Math.max(0, Math.min(100, Math.round(this.lightness))), // 0 ~ 100
      this.alpha,
    );
  }

  toString(): string {
    const normalizedColor = this.normalize();
    const [h, s, l, a] = [
      normalizedColor.hue,
      normalizedColor.saturation,
      normalizedColor.lightness,
      normalizedColor.alpha,
    ];

    if (a === 1) return `hsl(${h}, ${s}%, ${l}%)`;

    return `hsla(${h}, ${s}%, ${l}%, ${a})`;
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

  /**
   * Implementation source code from https://stackoverflow.com/a/3943023
   */
  getContrastFontColor(fontColorOnLightBackground: Color = new Color(0, 0, 0)) {
    const [r, g, b] = Color.convertHSL2RGB(this.hue, this.saturation, this.lightness);

    return r * 0.299 + g * 0.587 + b * 0.114 > 186
      ? fontColorOnLightBackground
      : fontColorOnLightBackground.oppositeWithLightness();
  }
}
