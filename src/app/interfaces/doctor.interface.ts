export default class Doctor {
  id: number;
  name: string;
  isFirst: boolean;
}

export interface AppState {
  readonly doctors: Doctor[];
}
