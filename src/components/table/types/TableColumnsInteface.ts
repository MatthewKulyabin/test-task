interface columnInterface {
  name: string;
  iter?: string;
}

export interface TableColumnInterface {
  [key: string]: columnInterface;
}
