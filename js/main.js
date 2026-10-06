import { brain } from "./ai.js";
import { initWorld } from "./world.js";
import { startVoice } from "./voice.js";

const canvas = document.getElementById("bg-canvas");
const output = document.getElementById("output");
const input = document.getElementById("input");

// INIT WORLD
try { initWorld(canvas); }
catch (error) { console.warn("3D background unavailable", error); }
input.addEventListener("keydown", event => {
  if (event.key === "Enter") window.runCommand();
});

// COMMAND EXECUTION
window.runCommand = function () {
  const text = input.value;

  if (!text) return;

  const result = brain(text);

  if (result === "__WORLD_MODE__") {
    output.innerText = "WORLD MODE ACTIVATED (3D SYSTEM ONLINE)";
    return;
  }

  output.innerText = result;
};

// VOICE COMMAND
window.startVoiceCommand = function () {
  startVoice((text) => {
    const result = brain(text);
    output.innerText = result;
  });
};
