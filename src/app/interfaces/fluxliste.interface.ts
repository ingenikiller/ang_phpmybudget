import { Flux } from '../objets/flux';

export interface FluxListeInterface {
  name: string;

  tabResult: Flux[];

  nbLineTotal: number;
  nbLine: number;
  totalPage: number;
  page: number;

}
