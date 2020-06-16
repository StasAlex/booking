export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}
export interface Rooms {
  id: string;
  number: string;
  rooms: number;
  people: number;
  notes: string;
  isClean: boolean;
  price: number;
  imageUrl: string;
}
