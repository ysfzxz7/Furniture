export interface userType {
  _id: string;
  firstName: string;
  lastName: string;
  username: string;
  phone: number;
  email: string;
  role: string;
  password: string;
  retypePassword: string;
  image: FileList | string;
}
export interface userType1 {
  firstName: string;
  lastName: string;
  username: string;
  phone: number;
  email: string;
  role: string;
  password: string;
  retypePassword: string;
  image: string;
}
