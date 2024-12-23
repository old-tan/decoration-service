// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Attributes, AttributesData, AttributesPatch, AttributesQuery } from './attributes.schema'

export type { Attributes, AttributesData, AttributesPatch, AttributesQuery }

export interface AttributesParams extends KnexAdapterParams<AttributesQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class AttributesService<ServiceParams extends Params = AttributesParams> extends KnexService<
  Attributes,
  AttributesData,
  AttributesParams,
  AttributesPatch
> {
  constructor(options: any) {
    super({
      ...options,
      paginate: false // 全局禁用分页
    })
  }
}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'attributes'
  }
}
