# Portfolio Layout Guide

## Current Layout: Large Interactive Filters (v2)

The current homepage layout features:
- **Filters**: 1/3 width, left side, stacked vertically
- **Font Size**: Large and responsive (1.2rem - 2.2rem)
- **Font Weight**: Bold (700)
- **Interactivity**: Filters scale up on hover (+5%) and when active (+8%)
- **Projects**: 2/3 width, right side, 4-column grid

### Key Features:
✅ Bold, prominent filter buttons
✅ Interactive scaling on hover/active states
✅ Sticky positioning (stays visible while scrolling)
✅ Responsive design (stacks on tablets/mobile)
✅ Smooth animations and transitions

---

## How to Revert to Old Layout

If you want to switch back to the original horizontal filter layout with smaller fonts:

### Step 1: Modify `.work-layout`
In `src/pages/index.astro`, find the `.work-layout` CSS and replace with:
```css
.work-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(16px, 2vw, 28px);
  align-items: start;
}
```

### Step 2: Modify `.cat-filter`
Replace with:
```css
.cat-filter {
  display: flex; 
  flex-wrap: wrap; 
  gap: 10px;
  padding: clamp(8px, 1.2vw, 16px) var(--pad-x) clamp(28px, 3.5vw, 44px) 0;
  margin-bottom: clamp(16px, 2vw, 28px);
  margin-left: 0;
  position: static;
}
```

### Step 3: Modify `.cat-pill`
Replace with:
```css
.cat-pill {
  background: transparent;
  border: 1.5px solid var(--ink);
  color: var(--ink);
  font-family: var(--f-ser);
  font-size: .72rem;
  font-weight: 500;
  letter-spacing: .04em;
  padding: 10px 18px;
  cursor: none;
  position: relative;
  overflow: hidden;
  width: auto;
  text-align: left;
  transition: transform .4s var(--ease);
}
```

### Step 4: Update responsive styles
In the `@media (max-width: 900px)` section, revert to:
```css
@media (max-width: 900px) {
  .work-layout { grid-template-columns: 1fr; gap: clamp(24px, 3vw, 40px); }
  .cat-filter { flex-direction: row; flex-wrap: wrap; position: static; gap: 10px; }
  .cat-pill { width: auto; flex: none; font-size: .72rem; padding: 10px 18px; }
  .proj-text-grid { grid-template-columns: repeat(2, 1fr); }
}
```

---

## Current Hover States

### Filter Button Hover
- Font size increases by 5-10%
- Button scales slightly (1.05x)
- Accent color appears on border

### Filter Button Active
- Background fills with accent color
- Font size increases by ~15%
- Button scales by 8%
- Bold appearance maintained

---

## Customization Options

To adjust the current large filter layout:

### Change filter font size
Edit these lines in `.cat-pill`:
```css
font-size: clamp(1.2rem, 2.5vw, 2.2rem);  /* min, preferred, max */
```

### Change filter padding
```css
padding: clamp(16px, 3vw, 28px) clamp(14px, 2.5vw, 24px);  /* top/bottom left/right */
```

### Change hover scale effect
Edit these lines:
```css
.cat-pill:hover {
  transform: scale(1.05);  /* Change 1.05 to desired scale */
}

.cat-pill.is-active {
  transform: scale(1.08);  /* Change 1.08 to desired scale */
}
```

### Change gap between filters
In `.cat-filter`:
```css
gap: 0;  /* Change to desired gap value (e.g., 2px, 5px) */
```

---

## Responsive Behavior

- **Desktop (900px+)**: Filters on left (1/3), projects on right (2/3)
- **Tablet/Mobile (<900px)**: Filters stack horizontally on top, projects below
- **Small Mobile (<480px)**: Single column layout with project grid as 1 column

All layouts maintain full functionality and interactive behavior.
