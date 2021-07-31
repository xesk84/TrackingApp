import {StatusEnum} from '../../../common/enums/StatusEnum';

export type Driver = {
  id: string;
  status: StatusEnum;
  error: string;
};
