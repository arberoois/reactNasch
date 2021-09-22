const url = "https://jsonplaceholder.typicode.com/users";

/*
fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer acadebieseexistiruntokendeautorizacvion",
    },
    body: JSON.stringify({
      name: "Agustin",
      website: "google.com",
    }),
  })
    .then((r) => r.json())
    .then((data) => console.log(data));
    */

const fn = async () => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer acadebieseexistiruntokendeautorizacvion",
    },
    body: JSON.stringify({
      name: "Agustin",
      website: "google.com",
    }),
  });

  const data = await response.json();
  console.log(data);
};

fn();
