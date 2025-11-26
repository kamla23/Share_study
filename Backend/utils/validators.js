
export const isEmail = (email) => {
  if (!email) return false;
  return email.includes("@") && email.includes(".");
};

export const isPass = (p) => {
  if (!p) return false;
  return p.length >= 6;
};

export const isText = (t) => {
  if (!t) return false;
  return t.trim().length > 0;
};


export const isArr = (arr) => {
  return Array.isArray(arr) && arr.length > 0;
};

export const isId = (id) => {
  return id && id.length === 24;
};


export const isIdea = ({ title, desc }) => {
  if (!title || !desc) return false;
  return title.trim().length > 3 && desc.trim().length > 5;
};

export const isComment = (txt) => {
  if (!txt) return false;
  return txt.trim().length > 1;
};
