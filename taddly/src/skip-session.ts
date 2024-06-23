import { showHUD, Toast, environment } from "@raycast/api";
import { isTaddlyInstalled, skipSession } from "./utils";

export default async function () {
  const toast = new Toast({
    title: "Skipping session",
    style: Toast.Style.Animated,
  });

  toast.show();

  if (!environment.isDevelopment && !(await isTaddlyInstalled())) {
    toast.title = "Taddly not installed";
    toast.message = "Install it from: https://taddly.app/download/";
    toast.style = Toast.Style.Failure;
    return;
  }

  await skipSession();
  await showHUD("Session skipped");
}
