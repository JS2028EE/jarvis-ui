# JARVIS UI

A browser interface experiment with a rotating Three.js globe, typed commands, and optional voice input.

## Run

Serve the repository with `python -m http.server 8000`, then open `http://localhost:8000`. The browser loads Three.js from a CDN, so the globe requires network access. Voice input depends on browser speech-recognition support and microphone permission.

## Current scope

The command engine is rule-based: try `hello`, `time`, `date`, `status`, or `world`. CPU and system-status responses are simulated. No language model, real system telemetry, or external assistant service is connected. Press Enter or EXECUTE to submit a command. The viewport now follows browser resizing.

This is an interface prototype; additional assistant features and integration testing remain open.
