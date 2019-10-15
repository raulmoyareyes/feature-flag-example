const isEnabled = id => {
  const cookieName = "_gaexp";
  const cookie = document.cookie.match(
    new RegExp("(^| )" + cookieName + "=([^;]+)")
  );

  if (!cookie) return false;

  const gaExpCookie = cookie[2];
  const experiment = gaExpCookie
    .replace("GAX1.2.", "")
    .split("!")
    .filter(experiment => experiment.includes(id));

  if (!experiment[0]) return false;

  const experimentValue = experiment[0].split(".")[2];

  return experimentValue === "1";
};

export const FeatureFlag = {
  isEnabled
};
