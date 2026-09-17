# Plan for Cursor

## Phase 1: Audit and restore the visual foundation

- Read AGENTS.md and the Woven brief.
- Inspect the current homepage and existing animation component.
- Remove all teal colors and classes.
- Keep cream, olive, terracotta, and dark charcoal.
- Restore the tree animation in the hero.
- Make it visible on desktop and mobile.
- Add a static fallback and respect reduced-motion preferences.
- Remove or reduce the oversized abstract circle if it competes with the animation.

### Hero acceptance criteria

- The approved headline remains unchanged.
- The tree/logic animation is visibly present.
- The hero does not contain a large unexplained dead zone.
- The visual feels like branching, connection, and systems—not a decorative loading animation.
- The CTA remains prominent.
- No teal remains in the interface.

## Phase 2: Improve scanability

- Keep the current homepage order.
- Turn the four problem situations into visually distinct cards.
- Connect each card clearly to Explore, Prove, Transform, or Embed.
- Shorten the supporting copy so visitors can understand each option quickly.
- Reduce excessive vertical spacing, especially on smaller screens.
- Make sure the navigation exposes Home, Work, About, and Contact clearly.

## Phase 3: Strengthen proof

- Keep all six projects.
- Give Home Energy Manager, Please, Health Me!?, and AI Developer Assistant primary visual weight.
- Treat Carbon Aware AI, Smart Edge, and Stat Doctors as a secondary row.
- Add visual evidence where real assets exist: screenshots, diagrams, prototype fragments, metrics, or artifacts.
- Do not invent project imagery.
- Keep the problem/question as the main heading for each project.
- Keep “What this proves” as supporting content, not the main headline.

## Phase 4: Tighten the personal story

- Keep the short About section on the homepage.
- Remove repeated explanations that already appear in the hero and How Woven Works section.
- Reserve the longer biography for a future About page.
- Keep the line: “Woven Logic Studio is the independent practice I built to work that way.”

## Phase 5: Final interaction and quality pass

- Keep the primary CTA: “Tell me what you’re trying to solve.”
- For now, the email link is acceptable.
- Make the problem cards and proof cards keyboard-accessible.
- Check mobile layouts around 390px, tablet layouts, and desktop layouts.
- Check focus states, color contrast, animation fallback, and horizontal overflow.
- Run the project’s lint and build checks.
- Review the Vercel preview before merging.
