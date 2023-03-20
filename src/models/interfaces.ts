export interface ITracking {
  number: string;
  status: string;
  cityRecipient: string;
  warehouseRecipient: string;
  citySender: string;
  warehouseSender: string;
}

export interface IWarehouses {
  description: string;
}

export interface IWarehousesTypes {
  Ref: string;
  Description: string;
  DescriptionRu?: string;
}

export interface ITrackingReducerState {
  tracking: ITracking | null;
  trackingLoading: boolean;
  trackingError: string;
}

export interface IWarehousesReducerState {
  warehouses: IWarehouses | null;
  warehousesLoading: boolean;
  warehousesError: string;
}

export interface IWarehousesTypesReducerState {
  warehousesTypes: IWarehousesTypes | null;
  warehousesTypesLoading: boolean;
  warehousesTypesError: string;
}

export interface ICustomTheme {
  palette: {
    primary: {
      main: string;
    };
    secondary: {
      main: string;
    };
    background: {
      default: string;
      paper: string;
    };
  };
}

export interface IDocumentNumber {
  docNumber: string;
}
