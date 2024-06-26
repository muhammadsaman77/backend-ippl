export type GetShiftInfoRequest = {
  employee_id: string;
};

export type GetShiftInfoResponse = {
  employee_name: string;
  company_name: string;
  logo_url: string | undefined;
  date: Date;
  from: string;
  to: string;
};

export type AttendanceCheckRequest = {
  employee_id: string;
  shift_id: number;
  type: "CHECK_IN" | "CHECK_OUT";
  long: number;
  lat: number;
  file_name: string;
  file_url: string;
  file_size: number;
  file_type: string;
};

export type AttendanceCheckResponse = {
  date: Date;
  from: string | undefined;
  to: string | undefined;
  time: string;
};
