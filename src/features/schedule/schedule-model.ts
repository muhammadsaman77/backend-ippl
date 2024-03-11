export type AddScheduleRequest = {
  title: string;
  description: string;
  date: Date;
  unique_id: string;
};

export type AddScheduleResponse = {
  title: string;
  description: string;
  date: Date;
};

export type DeleteScheduleRequest = {
  schedule_id: number;
};

export type DeleteScheduleResponse = AddScheduleResponse;

export type UpdateScheduleRequest = {
  schedule_id: number;
  title: string;
  description: string;
  date: Date;
};

export type UpdateScheduleResponse = AddScheduleResponse;
