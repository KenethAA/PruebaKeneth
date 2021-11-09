import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Encuentros extends Entity {
  @property({
    type: 'date',
    required: true,
  })
  partido1: string;
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;
  @property({
    type: 'date',
    required: true,
  })
  partido2: string;

  @property({
    type: 'date',
    required: true,
  })
  partido3: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcionpartidos: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Encuentros>) {
    super(data);
  }
}

export interface EncuentrosRelations {
  // describe navigational properties here
}

export type EncuentrosWithRelations = Encuentros & EncuentrosRelations;
