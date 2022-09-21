import {ServiceID} from "../enums";

export interface  SubService{
  serviceId: number|ServiceID
  imageUrl: string
  label: string
  summary: string
  link: string
  styleClasses: string
}
