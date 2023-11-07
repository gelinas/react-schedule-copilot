export interface EngineerInterface {
  id: number;
  createdAt: Date;
  deletedAt: Date | null;
  updatedAt: Date;
  uuid: string;

  name: string;
  email: string | null;

  shifts: ShiftInterface[];
}

export interface ShiftInterface {
  id: number;
  createdAt: Date;
  deletedAt: Date | null;
  updatedAt: Date;
  uuid: string;

  engineerId: number;

  startDate: Date;
  endDate: Date;

  engineer: EngineerInterface;
}
