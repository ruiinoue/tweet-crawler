type Url = {
  url: string;
  expanded_url: string;
  display_url: string;
  indices: number[];
};

export type Entities = {
  url?: Url[];
  description?: Url[];
};
