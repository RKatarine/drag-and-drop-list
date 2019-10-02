import axios from 'axios';

import configMethods from '../../config';


import elementsApi from './elements';


const config = configMethods.getConfig(process.env.NODE_ENV);


const elements = elementsApi(config, axios);


export default {
  config,
  elements,
};
