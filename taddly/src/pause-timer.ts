import { showHUD, Toast, environment } from "@raycast/api";
import { isTaddlyInstalled, pauseTimer } from "./utils";

export default async function () {
  const toast = new Toast({
    title: "Pausing timer",
    style: Toast.Style.Animated,
  });

  toast.show();

  if (!environment.isDevelopment && !(await isTaddlyInstalled())) {
    toast.title = "Taddly not installed";
    toast.message = "Install it from: https://taddly.app/download/";
    toast.style = Toast.Style.Failure;
    toast.show();
    return;
  }

  await pauseTimer();
  await showHUD("Timer paused");
}
