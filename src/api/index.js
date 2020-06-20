/*
formData - authorize user using credentials passed in
*/

export const authenticateUser = async (formData) => {
  const resp = await fetch("", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(formData),
  });
};
