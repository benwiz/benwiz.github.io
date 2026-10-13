import { titleRegions } from './title-regions.js';
self.onmessage = ({ data: { id, pixels } }) => {
  try {
    self.postMessage({ id, regions: [...titleRegions(pixels), ...titleRegions(pixels, true)] });
  } catch (error) { self.postMessage({ id, error: error.message }); }
};
