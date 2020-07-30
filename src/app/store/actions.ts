import { Action } from '@ngrx/store';
import Doctor from '../interfaces/doctor.interface';

export enum ActionTypes {
  Add = '[Doctor] Add Doctor',
  Get = '[Doctor] Gel Doctors',
  Update = '[Doctors] Update Doctor',
  Delete = '[Doctor] Delete Doctor',
  // LoadSuccess = '[Doctors] Load success'
}

export class AddDoctor implements Action {
  type = ActionTypes.Add;

  constructor(public payload: Doctor) {}
}

export class GetDoctors implements Action {
  readonly type = ActionTypes.Get;
}

export class UpdateDoctor implements Action {
  readonly type = ActionTypes.Update;

  constructor(public payload: Doctor) {}
}

export class DeleteDoctor implements Action {
  readonly type = ActionTypes.Delete;

  constructor(public payload: Doctor) {}
}

export type Actions = AddDoctor | GetDoctors | UpdateDoctor | DeleteDoctor;
