export interface IAppMessage {
  _id: string;
  type: "error" | "success";
  message: string;
}
