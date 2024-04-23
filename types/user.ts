export interface IUser {
  id: string;
  commentId: number;
  createdAt: Date | null;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  country: string;
  avatar: string;
}

export interface IUserForm {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  country: string;
}
