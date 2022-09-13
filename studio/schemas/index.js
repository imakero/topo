import * as documents from './documents'
import * as objects from './objects'
import * as slices from './slices'

export const schemaTypes = [
  ...Object.values(documents),
  ...Object.values(objects),
  ...Object.values(slices),
]
