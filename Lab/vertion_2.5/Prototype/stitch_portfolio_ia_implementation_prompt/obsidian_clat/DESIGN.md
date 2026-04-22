# Design System Strategy: The French Touch & Neomorphic Depth

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Atelier."** 

We are moving away from the flat, sterile "SaaS-standard" look toward a high-end editorial experience that feels curated, tactile, and intentionally atmospheric. This system leverages the "French Touch"—a design philosophy that balances technical precision with soulful elegance. 

By utilizing sophisticated neomorphism (soft double shadows and inner glows), we move beyond a 2D screen into a layered, physical environment. We break the rigid grid through intentional asymmetry, overlapping elements, and high-contrast typography scales that command attention. This is not a "template"; it is a digital sculpture.

---

## 2. Colors & Tonal Depth
Our palette is anchored in deep, nocturnal blues, punctuated by high-chroma electric accents.

### The Palette
- **Background & Surfaces:** Built on `#0d1322`. Use the `surface-container` tiers to create depth.
- **Primary (The Glow):** Brand Orange `#F97316`. Used for high-priority actions and "inner-light" effects.
- **Secondary (The Edge):** Cyan `#06B6D4`. Used for technical details and secondary interactive elements.
- **Tertiary (The Accent):** Purple `#8A2BE2`. Used for luxury flourishes and rare highlights.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Boundaries must be established through tonal transitions (e.g., a `surface-container-low` card nested within a `surface` background). If a visual break is needed, use vertical whitespace or a subtle background shift.

### Surface Hierarchy & Nesting
Treat the UI as stacked sheets of fine material. 
- **Surface (Base):** The foundation of the viewport.
- **Surface-Container-Low:** Subtle indentations or sunken areas.
- **Surface-Container-Highest:** Elevated "Morph-Cards" that catch the ambient light.

### Signature Textures
Avoid flat fills on interactive elements. Use subtle linear gradients transitioning from `primary` to `primary_container` (Orange to Deep Orange) to provide a "soulful" polish that feels illuminated from within.

---

## 3. Typography
We use a dual-font strategy to balance editorial authority with technical readability.

- **Display & Headlines (Epilogue):** A font with character. Use `display-lg` (3.5rem) and `headline-lg` (2rem) to create a dramatic, editorial rhythm. Titles should feel like mastheads.
- **Body & Labels (Manrope):** A clean, geometric sans-serif that ensures absolute clarity. `body-lg` (1rem) is your workhorse for readability.
- **Hierarchy Logic:** Use extreme scale differences. A `display-lg` headline should sit comfortably near a `label-md` metadata point to create a premium "boutique" feel.

---

## 4. Elevation & Depth: The Morph Logic
This system replaces traditional Material shadows with "Morphing" effects that simulate physical displacement.

### The Layering Principle
Depth is achieved by "stacking" surface tiers. Place a `surface-container-lowest` element on a `surface-container-low` section to create a soft, natural "recessed" look without using an opaque line.

### Morph-Card Logic (Neomorphism)
Cards are not "boxes"; they are surfaces.
- **The Double Shadow:** Use a combination of a light-tinted top-left shadow and a dark-tinted bottom-right shadow.
- **Tailwind Implementation:** 
  `shadow-[6px_6px_12px_rgba(0,0,0,0.4),-4px_-4px_12px_rgba(255,255,255,0.02)]`
- **Ambient Shadows:** Shadows must be extra-diffused (large blur) and low-opacity (4%-8%). The color should be a tinted version of the background, never pure black.

### The "Ghost Border"
If accessibility requires a container boundary, use the `outline_variant` token at **15% opacity**. Never use 100% opaque, high-contrast borders.

### Glassmorphism
For floating menus or navigation, use a backdrop-blur (12px to 20px) combined with a semi-transparent `surface` color. This allows the primary orange and cyan accents to bleed through the UI, softening the experience.

---

## 5. Components

### Morph-Button
- **Primary:** Gradient from `#F97316` to `#D97706`. On hover, the "inner glow" (box-shadow: inset) increases to simulate the button being physically pressed.
- **States:** 
  - *Default:* Outset (dual shadow).
  - *Active/Pressed:* Inset (inner shadows) with a `0.98` scale transform.

### Morph-Cards
- **Construction:** Use `rounded-xl` (1.5rem) as the default. 
- **Separation:** Forbid dividers. Use `surface-container-high` for the card body and `surface-container-lowest` for an internal "well" (e.g., a code snippet or a text input area).

### Chips
- **Selection:** High-contrast `secondary` (Cyan) text on a `surface-container-highest` background. No border.

### Input Fields
- **Styling:** Inset (sunken) fields using `surface-container-lowest`. When focused, the "inner glow" should transition to a subtle `secondary` (Cyan) tint.

### Tooltips
- **Glassmorphism:** Always semi-transparent with a heavy blur. Floating above all layers with a `primary` (Orange) left-accent bar.

---

## 6. Do's and Don'ts

### Do:
- **Embrace Negative Space:** Use larger padding than "standard" apps to let the neomorphic shadows breathe.
- **Use Tonal Shifting:** Change the background color by 2-3% to define a new section rather than drawing a line.
- **Layer Accents:** Place a cyan glow behind an orange button to create a high-end "neon-depth" effect.

### Don't:
- **No Sharp Corners:** Avoid `rounded-none`. Everything in the "French Touch" aesthetic has a softened, ergonomic edge.
- **No Flat UI:** Avoid using single-color flat buttons; they break the "Atelier" illusion. Always use a subtle gradient or a morph-shadow.
- **No Pure Grey:** Every neutral must be tinted with the base `background` (#0d1322) to maintain the "Dark Blue" atmosphere. Avoid "Default Grey 500."

---

## 7. Implementation Note for React/Tailwind
When building the `MorphCard` and `MorphButton` components, leverage CSS variables for the shadow values. This allows for a global "Intensity" slider if the neomorphic effect needs to be softened for accessibility or hardened for a more "Brutalist" editorial feel. 