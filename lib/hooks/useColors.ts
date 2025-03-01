import { useTheme } from "@/components/ThemeProvider";

const rgbToColor = (r: number, g: number, b: number) => `rgb(${r}, ${g}, ${b})`;

const colors = {
  light: {
    background: rgbToColor(255, 255, 255),
    foreground: rgbToColor(2, 8, 23),
    card: rgbToColor(255, 255, 255),
    cardForeground: rgbToColor(2, 8, 23),
    popover: rgbToColor(255, 255, 255),
    popoverForeground: rgbToColor(2, 8, 23),
    primary: rgbToColor(234, 88, 12),
    primaryForeground: rgbToColor(248, 250, 252),
    secondary: rgbToColor(241, 245, 249),
    secondaryForeground: rgbToColor(15, 23, 42),
    muted: rgbToColor(241, 245, 249),
    mutedForeground: rgbToColor(100, 116, 139),
    accent: rgbToColor(241, 245, 249),
    accentForeground: rgbToColor(15, 23, 42),
    destructive: rgbToColor(239, 68, 68),
    destructiveForeground: rgbToColor(248, 250, 252),
    success: rgbToColor(34, 197, 94),
    successForeground: rgbToColor(248, 250, 252),
    link: rgbToColor(37, 99, 235),
    border: rgbToColor(226, 232, 240),
    input: rgbToColor(226, 232, 240),
    ring: rgbToColor(234, 88, 12),

    red: rgbToColor(220, 38, 38),
    orange: rgbToColor(234, 88, 12),
    amber: rgbToColor(217, 119, 6),
    yellow: rgbToColor(202, 138, 4),
    lime: rgbToColor(101, 163, 13),
    green: rgbToColor(22, 163, 74),
    emerald: rgbToColor(5, 150, 105),
    teal: rgbToColor(13, 148, 136),
    cyan: rgbToColor(8, 145, 178),
    sky: rgbToColor(2, 132, 199),
    blue: rgbToColor(37, 99, 235),
    indigo: rgbToColor(79, 70, 229),
    violet: rgbToColor(124, 58, 237),
    purple: rgbToColor(147, 51, 234),
    fuchsia: rgbToColor(192, 38, 211),
    pink: rgbToColor(219, 39, 119),
    rose: rgbToColor(225, 29, 72),

    chart1: rgbToColor(231, 110, 80),
    chart2: rgbToColor(42, 157, 144),
    chart3: rgbToColor(39, 71, 84),
    chart4: rgbToColor(232, 196, 104),
    chart5: rgbToColor(244, 164, 98),

    sidebarBackground: rgbToColor(248, 250, 252),
    sidebarForeground: rgbToColor(2, 6, 23),
    sidebarPrimary: rgbToColor(234, 88, 12),
    sidebarPrimaryForeground: rgbToColor(248, 250, 252),
    sidebarAccent: rgbToColor(241, 245, 249),
    sidebarAccentForeground: rgbToColor(15, 23, 42),
    sidebarBorder: rgbToColor(226, 232, 240),
    sidebarRing: rgbToColor(234, 88, 12),
  },
  dark: {
    background: rgbToColor(2, 8, 23),
    foreground: rgbToColor(248, 250, 252),
    card: rgbToColor(2, 8, 23),
    cardForeground: rgbToColor(248, 250, 252),
    popover: rgbToColor(2, 8, 23),
    popoverForeground: rgbToColor(248, 250, 252),
    primary: rgbToColor(249, 115, 22),
    primaryForeground: rgbToColor(15, 23, 42),
    secondary: rgbToColor(30, 41, 59),
    secondaryForeground: rgbToColor(248, 250, 252),
    muted: rgbToColor(30, 41, 59),
    mutedForeground: rgbToColor(148, 163, 184),
    accent: rgbToColor(30, 41, 59),
    accentForeground: rgbToColor(248, 250, 252),
    destructive: rgbToColor(127, 29, 29),
    destructiveForeground: rgbToColor(248, 250, 252),
    success: rgbToColor(20, 83, 45),
    successForeground: rgbToColor(248, 250, 252),
    link: rgbToColor(59, 130, 246),
    border: rgbToColor(30, 41, 59),
    input: rgbToColor(30, 41, 59),
    ring: rgbToColor(194, 65, 12),

    red: rgbToColor(239, 68, 68),
    orange: rgbToColor(249, 115, 22),
    amber: rgbToColor(245, 158, 11),
    yellow: rgbToColor(234, 179, 8),
    lime: rgbToColor(132, 204, 22),
    green: rgbToColor(34, 197, 94),
    emerald: rgbToColor(16, 185, 129),
    teal: rgbToColor(20, 184, 166),
    cyan: rgbToColor(6, 182, 212),
    sky: rgbToColor(14, 165, 233),
    blue: rgbToColor(59, 130, 246),
    indigo: rgbToColor(99, 102, 241),
    violet: rgbToColor(139, 92, 246),
    purple: rgbToColor(168, 85, 247),
    fuchsia: rgbToColor(217, 70, 239),
    pink: rgbToColor(236, 72, 153),
    rose: rgbToColor(244, 63, 94),

    chart1: rgbToColor(38, 98, 217),
    chart2: rgbToColor(46, 184, 138),
    chart3: rgbToColor(232, 140, 48),
    chart4: rgbToColor(175, 87, 219),
    chart5: rgbToColor(226, 54, 112),

    sidebarBackground: rgbToColor(15, 23, 42),
    sidebarForeground: rgbToColor(248, 250, 252),
    sidebarPrimary: rgbToColor(249, 115, 22),
    sidebarPrimaryForeground: rgbToColor(15, 23, 42),
    sidebarAccent: rgbToColor(30, 41, 59),
    sidebarAccentForeground: rgbToColor(248, 250, 252),
    sidebarBorder: rgbToColor(30, 41, 59),
    sidebarRing: rgbToColor(194, 65, 12),
  },
};

export default function useColors() {
  const { resolvedTheme } = useTheme();
  return resolvedTheme === "dark" ? colors.dark : colors.light;
}
