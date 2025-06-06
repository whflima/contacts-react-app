export interface UserRow {
  name: string;
  username: string;
  email: string;
  address: string;
  phone: string;
  company: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Columns {
  header: string;
  accessor: string;
}

export interface MapProps {
  latitude: number;
  longitude: number;
}

export interface AvatarLanguageProps {
  key: string;
  image: string;
  expression: string;
}

export interface ModalContentProps {
  contentData: User | any;
}
