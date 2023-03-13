export interface ITracking {
  number: string | null;
  status: string | null;
  cityRecipient: string | null;
  warehouseRecipient: string | null;
  citySender: string | null;
  warehouseSender: string | null;
}

export interface ITrackingReducerInitialState {
  tracking: ITracking | null;
  loading: boolean;
  error: string | null;
}
