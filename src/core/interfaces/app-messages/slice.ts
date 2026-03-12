import { IAppMessage } from "./app-message";

export interface IAppMessagesState {
  messages: Array<IAppMessage>;
  showing: Array<string>;
}
