import { number } from "zod";

type PermissionType = "SAKIT" | "IZIN";
type SubmissionStatus = "PENDING" | "ACCEPTED" | "REJECTED";
export type PermissionSubmissionRequest = {
  from: Date;
  to: Date;
  permission_reason: string;
  type: PermissionType;
  employee_id: string;
  file_name: string;
  file_size: number;
  file_type: string;
  file_url: string;
};

export type PermissionSubmissionResponse = {
  from: Date;
  to: Date;
  permission_reason: string;
  type: PermissionType;
};

export type LeaveSubmissionRequest = {
  from: Date;
  to: Date;
  leave_reason: string;
  leave_type: string;
  employee_id: string;
  file_name: string;
  file_size: number;
  file_type: string;
  file_url: string;
};

export type LeaveSubmissionResponse = {
  from: Date;
  to: Date;
  leave_reason: string;
  leave_type: string;
};

export type MutationSubmissionRequest = {
  mutation_reason: string;
  current_company_branch_id: string;
  target_company_branch_id: string;
  employee_id: string;
  file_name: string;
  file_size: number;
  file_type: string;
  file_url: string;
};

export type MutationSubmissionResponse = {
  mutation_reason: string;
};

export type GetSubmissionHistoryRequest = {
  employee_id: string;
  status: SubmissionStatus;
  year: number;
};

export type GetSubmissionHistoryResponse = {
  submission_id: number;
  submission_date: Date;
  type: string;
  status: SubmissionStatus;
};

export type ChangeShiftSubmissionRequest = {
  employee_id: string;
  target_shift_id: number;
  current_shift_id: number;
  target_date: Date;
};

export type ChangeShiftSubmissionResponse = ChangeShiftSubmissionRequest;
