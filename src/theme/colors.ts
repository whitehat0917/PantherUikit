import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#3457b0",
  primaryBright: "#ffffff",
  primaryDark: "#ffffff",
  secondary: "#3457b0",
  success: "#8f80ba",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#070b17",
  text: "#452A7A",
  textDisabled: "#BDC2C4",
  textSubtle: "#8f80ba",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#452a7a",
  background: "#343135",
  backgroundDisabled: "#452a7a",
  contrast: "#3457b0",
  invertedContrast: "#191326",
  input: "#070b17",
  primaryDark: "#0098A1",
  tertiary: "#070b17",
  text: "#ffffff",
  textDisabled: "#666171",
  textSubtle: "#FFFFFF",
  borderColor: "#524B63",
  card: "#121827",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #68ce29 0%, #8f80ba 100%)",
  },
};
