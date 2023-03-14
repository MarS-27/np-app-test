export interface ITracking {
  number: string;
  status: string;
  cityRecipient: string;
  warehouseRecipient: string;
  citySender: string;
  warehouseSender: string;
}

export interface IWarehousesTypes {
  Ref: string;
  Description: string;
  DescriptionRu?: string;
}

export interface ITrackingReducerState {
  tracking: ITracking | null;
  trackingLoading: boolean;
  trackingError: string | null;
}

export interface IWarehousesTypesReducerState {
  warehousesTypes: IWarehousesTypes | null;
  warehousesTypesLoading: boolean;
  warehousesTypesError: string | null;
}
