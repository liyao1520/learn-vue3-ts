import { ILoginState } from './login/type'

export interface IRootState {}
export interface IRootWithModule {
  loginModule: ILoginState
}

export type IStoreType = IRootState & IRootWithModule
