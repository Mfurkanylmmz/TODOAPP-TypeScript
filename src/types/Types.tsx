export interface TodoInitialState {
  todos: TodoType[],
  showOnlyFavories: boolean

}

export interface TodoType {
  id: number;
  content: string;
  favory?: boolean,

}
