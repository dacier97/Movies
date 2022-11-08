const API = "https://api.themoviedb.org/3";

export async function get(path){

  const result = await fetch(API + path, {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmIwMThiM2M2MmI1YThiNzY5MDg3Nzg4MjcxMzYwYyIsInN1YiI6IjYyYjMzODM1MDVmOWNmMDBmMGJjMTc5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pl1j_D2tB2pMxaO5krrKs6YJWWBKxal6GkTEJ3d3gfw',

      'Content-Type': 'application/json;charset=utf-8',
    },
  });
  return await result.json();
    
}