import { createContext } from 'react';
const data = require('../data.json');

const GalleryContext = createContext(data);

export default GalleryContext;