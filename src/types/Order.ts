export type Order = {
  id: number;
  userId: number;
  productIds?: { id: number }[];
};

export type ReturnFindAll = {
  id: number;
  userId: number;
  productIds?: number[];
};