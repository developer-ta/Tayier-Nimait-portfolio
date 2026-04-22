# Conversation Archive: Solena UI/UX AI to Code

## Context

This archive captures the rich discussion around Solena's interface strategy:

- the desktop MVP started functional but visually too plain
- the desired direction is a dashboard with strong product quality
- the design should begin with a Figma-quality image
- the image should be validated before implementation
- conversion to code should happen through a constrained prompt chain
- the goal is to reduce hallucination and preserve the intended layout

## Key decisions from the discussion

1. Design first, code second.
2. Use image quality comparable to a Figma prototype.
3. Convert the approved image into implementation instructions.
4. Implement the UI only after the design and conversion stages are validated.
5. Keep the prompt chain explicit to reduce model drift.

## Why this matters

The conversation established that AI-generated UI can become hard to implement when it is too abstract or too free-form.
Using a high-quality dashboard image creates a stable visual target.

## What the system should remember

- the interface should feel like a real dashboard
- the import area must be clear
- the GPS and pipeline status must be visible
- the result area must be structured
- the visual language should be premium, modern, and implementation-friendly

## Generated artifacts connected to this discussion

- `private-core/docs/figma_dashboard_pipeline.md`
- `private-core/version_current/prompts/prompt_5_figma_dashboard.json`
- `private-core/version_current/prompts/prompt_6_figma_to_code.json`
- `private-core/version_current/prompts/prompt_7_ui_implementation.json`
- `release/build_windows.py`
- `desktop_app/main.py`
- `app_launcher/1_CLIC_DEMARRER_SOLENA.py`

## Conclusion

This archive is the memory of the UI/UX to AI to code philosophy used for Solena.
It should be read before making major changes to the dashboard.

