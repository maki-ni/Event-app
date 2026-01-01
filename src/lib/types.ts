//every event follows this type rule
export interface EventType {
  id: number;
  title: string;
  details: string;
}

export interface popUpCardType {
  status: boolean;
  id: number | null;
  details?: string;
  title: string;
}
