import HttpClient from "./client";

export type ShiftRequest = {
  startDate: Date;
  endDate: Date;
  engineerId: number;
};

export class ShiftApi extends HttpClient {
  public readShifts = () => this.instance.get("/all");

  public createShift = (shift: ShiftRequest) =>
    this.instance.post(`/shifts`, shift);

  public updateShift = (shift: ShiftRequest, shiftId: string) =>
    this.instance.put(`/shifts/${shiftId}`, shift);

  public deleteShift = (shiftId: number) =>
    this.instance.delete(`/shifts/${shiftId}`);
}

export default ShiftApi;
