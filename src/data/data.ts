interface dataType {
  name: string;
  subject: subject;
  hobby: string[];
}

interface subject {
  english: number;
  math: number;
  socialStudies: number;
}

export const studentData: dataType[] = [
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
