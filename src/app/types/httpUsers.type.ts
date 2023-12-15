import { UserType } from "./users.type";

export type HttpUsersListResponse  ={
  page:number;
  per_page:number;
  total:number;
  total_pages:number;
  data:UserType[];
  }