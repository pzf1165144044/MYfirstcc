---
version: alpha
name: Heritage
description: A premium editorial design system with architectural minimalism and journalistic gravitas.
colors:
  primary: "#1A1C1E"
  secondary: "#6C7278"
  tertiary: "#B8422E"
  neutral: "#F7F5F2"
  on-tertiary: "#FFFFFF"
typography:
  h1:
    fontFamily: Public Sans
    fontSize: 3rem
    fontWeight: 700
    lineHeight: 1.2
  h2:
    fontFamily: Public Sans
    fontSize: 2rem
    fontWeight: 600
    lineHeight: 1.3
  body-md:
    fontFamily: Public Sans
    fontSize: 1rem
    lineHeight: 1.6
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 0.75rem
    fontWeight: 500
    letterSpacing: 0.05em
rounded:
  sm: 4px
  md: 8px
  lg: 16px
spacing:
  sm: 8px
  md: 16px
  lg: 32px
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.sm}"
    padding: 12px
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.sm}"
    padding: 12px
  card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: 24px
---

## Overview

Architectural Minimalism meets Journalistic Gravitas. The UI evokes a premium matte finish — a high-end broadsheet or contemporary gallery. Typography does the heavy lifting with clean sans-serif fonts and intentional whitespace.

## Colors

The palette is rooted in high-contrast neutrals and a single striking accent color called Boston Clay. The primary deep ink anchors headlines and body text, while the warm neutral serves as the foundation.

- **Primary (#1A1C1E):** Deep ink for headlines and core text.
- **Secondary (#6C7278):** Sophisticated slate for borders, captions, metadata.
- **Tertiary (#B8422E):** "Boston Clay" — the sole driver for interaction states.
- **Neutral (#F7F5F2):** Warm limestone foundation, softer than pure white.

## Typography

Public Sans serves as the primary workhorse across all headline and body sizes. Space Grotesk is reserved for labels and captions, adding a subtle technical contrast.

## Layout

Generous whitespace with asymmetric grids. Content breathes — sections are separated by `{spacing.lg}` (32px) while internal elements use `{spacing.md}` (16px). The rhythm is anchored to an 8px baseline.

## Elevation & Depth

Elevation is conveyed through subtle border colors and shadow rather than heavy drop shadows. Cards sit on the neutral background with a 1px secondary border.

## Shapes

Rounded corners are used consistently: small (4px) for interactive elements like buttons, medium (8px) for cards, and large (16px) for modals and dialogs.

## Components

Buttons use Boston Clay as the primary action color with white text. On hover, they invert to deep ink. Cards float on the warm neutral background with subtle rounded corners and generous padding.

## Do's and Don'ts

- **Do** use Public Sans for all body text and headlines.
- **Do** maintain generous whitespace — never crowd elements.
- **Don't** use tertiary (Boston Clay) for non-interactive elements.
- **Don't** add heavy drop shadows — rely on borders and subtle elevation.
