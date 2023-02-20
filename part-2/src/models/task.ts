import { Status } from "./space";
import User from "./user";

export interface Task {
  id?: string;
  custom_id?: string;
  name: string;
  text_content?: string;
  description?: string;
  assignees?: string[];
  tags?: string[];
  status?: Status;
  orderindex?: string;
  priority?: number;
  date_created?: string;
  date_updated?: string;
  date_closed?: string;
  creator?: User;
  due_date?: number;
  due_date_time?: boolean;
  time_estimate?: number;
  start_date?: number;
  start_date_time?: boolean;
  time_spent?: string;
  checklists?: string[];
  notify_all?: boolean;
  parent?: string;
  links_to?: string;
  check_required_custom_fields?: boolean;
  custom_fields?: CustomFields;
  list?: {
    id: string;
  };
  folder?: {
    id: string;
  };
  space?: {
    id: string;
  };
  url?: string;
}

export interface CustomFields {
  id: string;
  name: string;
  type: string;
  type_config: object;
  date_created: string;
  hide_from_guests: boolean;
  value: Value;
  required: boolean;
}

export interface Value {
  value: string;
}
