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
  attendance_file: Express.Multer.File | undefined;
};
