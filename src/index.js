import { FeatureFlag } from "./services/feature-flag";

const button = document.querySelector("#button");

button.addEventListener("click", () => {
  if (FeatureFlag.isEnabled("I2lN2lM2Rz6W6rzcKCC0BQ")) {
    return alert("Yes");
  }

  return alert("No");
});
