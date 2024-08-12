export interface dataType {
  name: string;
  subject: subject;
  hobby: string[];
}

interface subject {
  english: number;
  math: number;
  socialStudies: number;
}

export const data: dataType[] = [
  {
    name: "",
    subject: {
      english: 0,
      math: 0,
      socialStudies: 0,
    },
    hobby: [],
  },
];
