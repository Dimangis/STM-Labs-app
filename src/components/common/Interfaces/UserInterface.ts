// src/types.ts
export interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number | string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

export const isUser = (item: any): item is User => {
  return (
    item &&
    typeof item.name === 'object' &&
    typeof item.name.first === 'string' &&
    typeof item.name.last === 'string' &&
    typeof item.picture === 'object' &&
    typeof item.picture.thumbnail === 'string' &&
    typeof item.location === 'object' &&
    typeof item.location.state === 'string' &&
    typeof item.location.city === 'string' &&
    typeof item.email === 'string' &&
    typeof item.phone === 'string' &&
    typeof item.registered === 'object' &&
    typeof item.registered.date === 'string'
  );
};
