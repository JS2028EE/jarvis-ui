export function brain(input) {
  input = input.toLowerCase();

  // SYSTEM COMMANDS
  if (input.includes("time")) return `TIME: ${new Date().toLocaleTimeString()}`;
  if (input.includes("date")) return `DATE: ${new Date().toDateString()}`;

  if (input.includes("cpu")) return "CPU: 41% simulated load stable.";
  if (input.includes("memory")) return "MEMORY: Systems nominal.";
  if (input.includes("status")) return "ALL SYSTEMS OPERATIONAL.";

  // WORLD MODE TRIGGER
  if (input.includes("world")) return "__WORLD_MODE__";

  // BASIC AI RESPONSE ENGINE
  if (input.includes("hello")) return "Hello. JARVIS interface online.";
  if (input.includes("who are you")) return "I am JARVIS, your assistant interface.";

  // DEFAULT
  return `Command processed: ${input}`;
}
