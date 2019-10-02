import development from './dev.config';
import production from './prod.config';

const DEVMODE = 'development';
const PRODMODE = 'production';

function getConfig(mode) {
  if (mode === DEVMODE) {
    return development;
  }
  return production;
}

export default {
  getConfig,
};
