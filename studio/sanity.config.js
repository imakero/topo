import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {visionTool} from '@sanity/vision'

export default createConfig({
  name: 'default',
  title: 'topo',

  projectId: 'mrcdufjq',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
