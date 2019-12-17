export type IState = any;

export type IAction =
  | { type: 'snippets/add', payload: string }
  | { type: 'snippets/remove', payload: number }

export interface IContext {
  state: IState;
  dispatch: React.Dispatch<IAction>;
}