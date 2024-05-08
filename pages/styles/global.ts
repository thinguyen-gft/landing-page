import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&display=swap');
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--label-medium-medium: Inter;

/* font sizes */
--label-medium-medium-size: 14px;
--paragraph-medium-regular-size: 16px;
--heading-h2-extrabold-desktop-size: 36px;
--paragraph-xsmall-medium-size: 12px;
--heading-h6-semibold-desktop-size: 20px;
--paragraph-large-regular-size: 18px;
--display-extrabold-large-size: 52px;

/* Colors */
--generic-white: #fff;
--primary-500-main: #6366f1;
--neutral-200: #e5e7eb;
--neutral-400: #9ca3af;
--neutral-800: #1f2937;
--neutral-900: #111827;
--neutral-500: #6b7280;
--color-lightgray: #d1d5db;
--neutral-700: #374151;
--primary-50: #eef2ff;
--primary-300: #a5b4fc;
--primary-100: #e0e7ff;
--neutral-50: #f9fafb;
--neutral-100: #f3f4f6;

/* Gaps */
--gap-13xl: 32px;
--gap-5xl: 24px;
--gap-5xs: 8px;
--gap-xs: 12px;
--gap-9xs: 4px;
--gap-xl: 20px;
--gap-7xs: 6px;
--gap-2xs: 11px;
--gap-21xl: 40px;
--gap-29xl: 48px;
--gap-11xl: 30px;
--gap-base: 16px;
--gap-11xs: 2px;

/* Paddings */
--padding-45xl: 64px;
--padding-13xl: 32px;
--padding-base: 16px;
--padding-3xs: 10px;
--padding-5xs: 8px;
--padding-xs: 12px;
--padding-xl: 20px;
--padding-11xs: 2px;
--padding-7xs: 6px;
--padding-sm: 14px;
--padding-93xl: 112px;
--padding-301xl: 320px;
--padding-29xl: 48px;

/* Border radiuses */
--br-5xs: 8px;
--br-9xs: 4px;
--br-5xl: 24px;
--br-11xs: 2px;
--br-10xs: 3px;
--br-7xs: 6px;
--br-181xl: 200px;

/* Effects */
--drop-shadow-xsmall: 0px 1px 2px rgba(16, 24, 40, 0.04), 0px 1px 2px rgba(16, 24, 40, 0.04);
--drop-shadow-small: 0px 2px 6px rgba(16, 24, 40, 0.06);
}
`;
