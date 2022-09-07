import { TEMPLATES } from '../models/templates.enum'
import { formatCSS } from './formatCSS'

export const mountTemplate = (newTemplate) => { 
  
  let formatedCSS = formatCSS(newTemplate.css);

    switch (newTemplate.key) {
        case TEMPLATES.COLUMN.name:
          return `${TEMPLATES.COLUMN.css} ${formatedCSS}`
        case TEMPLATES.ROW.name: 
          return `${TEMPLATES.ROW.css} ${formatedCSS}`
        default:
          return `${formatedCSS}`;
    }
}