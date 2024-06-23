import { getApplications } from "@raycast/api";
import { runAppleScript } from "run-applescript";

export async function isTaddlyInstalled() {
  const applications = await getApplications();
  return applications.some(({ bundleId }) => bundleId === "dev.afomera.Taddly");
}

export async function startTimer() {
  await runAppleScript('tell application "Taddly" to startTimer');
}

export async function pauseTimer() {
  await runAppleScript('tell application "Taddly" to stopTimer');
}

export async function toggleTimer() {
  await runAppleScript('tell application "Taddly" to toggleTimer');
}

export async function skipSession() {
  await runAppleScript('tell application "Taddly" to skipTimer');
}

export async function resetTimer() {
  await runAppleScript('tell application "Taddly" to resetTimer');
}

export async function quitTaddly() {
  await runAppleScript('tell application "Taddly" to quit');
}
