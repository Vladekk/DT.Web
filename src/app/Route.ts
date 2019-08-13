import {IRoute} from './IRoute';

export class Route implements IRoute {

  constructor(init: Partial<Route>) {
    Object.assign(this, init);
  }

  Link = '';
  Number = '';
}
