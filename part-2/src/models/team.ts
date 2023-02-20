import User from "./user";

export default interface Team {
  id: string;
  name: string;
  color: string;
  avatar: string;
  members: {
    user: User;
  }[];
}
