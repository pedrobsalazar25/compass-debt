# Plan: Clean Spacing between Hero Title and Tagline

To provide a robust, maintainable solution to space out the tagline from the hero title, we will avoid hacky whitespace strings (`\n\n\n...`) and use professional Tailwind layout spacing instead.

## Steps

1. **Restore Clean Content**:
   - Revert the `tagline` in `src/lib/site-content.tsx` to its clean, standard text: `"Get help with your credit cards and unsecured debts now."` without the manual newline characters.

2. **Adjust Layout Spacing**:
   - In `src/routes/index.tsx`, we will add top padding or top margin specifically to the tagline element (`<p className="..." >`) to push it further down from the heading (`h1`), ensuring it satisfies the visual spacing requirement cleanly across all devices (mobile and desktop). We will use a Tailwind class like `pt-6 md:pt-10` or increase the vertical margin on the container.
