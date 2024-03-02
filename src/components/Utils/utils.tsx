const getSvgURL = (name: string) => {
  const ext = "svg";
  const filename = new URL(`../../assets/svgs/${name}.${ext}`, import.meta.url)
    .href;
  return filename;
};

const getGraphicURL = (name: string) => {
  const filename = new URL(`../../assets/images/${name}`, import.meta.url).href;
  return filename;
};

const uiuxImageURL = (name: string) => {
  const ext = "webp";
  const filename = new URL(
    `../../assets/WebpImgs/${name}.${ext}`,
    import.meta.url
  ).href;
  return filename;
};

export { getSvgURL, getGraphicURL, uiuxImageURL };
