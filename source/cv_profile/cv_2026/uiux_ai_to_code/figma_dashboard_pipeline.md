# Figma-Quality Dashboard Pipeline

## Objective

Solena uses image-first UI design to avoid weak implementation guesses.

The process is:

1. generate a high-quality dashboard image
2. validate the design visually
3. convert the image into code-ready implementation instructions
4. implement the UI from a constrained prompt

## Why image-first

AI-generated interfaces can become hard to implement when the visual language is too abstract or too noisy.

Using a Figma-quality image helps:

- freeze the visual direction
- clarify layout and hierarchy
- reduce hallucinated UI decisions
- make implementation more predictable
- keep the final code closer to the intended design

## Design rules

- dashboard first, not random art
- clear blocks and visible hierarchy
- readable spacing and panels
- stable color palette
- explicit call-to-action areas
- visible import, status, and result zones

## Three-step prompt chain

### 1. Image design prompt

The first prompt must ask for a dashboard image with a professional product look.

### 2. Image to code prompt

The second prompt must describe the structure and conversion constraints from the approved image.

### 3. Implementation prompt

The third prompt must generate or adapt code while preserving the validated design.

## Anti-hallucination rule

Each step narrows the freedom of the model.

That means the AI is not inventing the interface from scratch at every stage.
It is following an approved visual source and a constrained implementation contract.

## Expected result

The final UI should feel:

- premium
- dashboard-like
- stable
- easy to extend
- aligned with Solena governance

