const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmIwMThiM2M2MmI1YThiNzY5MDg3Nzg4MjcxMzYwYyIsInN1YiI6IjYyYjMzODM1MDVmOWNmMDBmMGJjMTc5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pl1j_D2tB2pMxaO5krrKs6YJWWBKxal6GkTEJ3d3gfw",
    },
  }).then((result) => result.json());
}

/*const API = process.env.REACT_APP_API;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

export function get(path){

  return fetch(API + path,{

    headers:{

      Authorization : "Bearer" + API_TOKEN,
      "Content-Type" : "application/json;charset=utf-8",
    },
  }).then((result)=>result.json());
}


export async function get(path){

  const result = await fetch(API + path, {

    headers: {
      Authorization: 'Bearer' + API_TOKEN,
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
  return await result.json();
    
}*/