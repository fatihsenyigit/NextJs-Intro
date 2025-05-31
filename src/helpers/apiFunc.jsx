// next.js fetch api ile cekilen verileri default olarak cache'ler. bu ozelligi option objesi ile degistirebilirz
// const res = await fetch(URL, {cache: 'force-cache'}) -- bu default
// const res = await fetch(URL, {cache: 'no-store'}) -- bu cache leme
// const res = await fetch(URL, {next: {revalidate: '10'}}) -- bu belirlenen saniye cinsinden sure sonunda veriyi tekrar cek

const URL = "http://localhost:8080/users";

// // force-cache
// export async function getUsers() {
//     //by default, next.js automatically caches the returned values of fetch
//     const res = await fetch(URL)
//     // the return value is not serialized
//     // you can return DATE, Map, Set, etc

//     if (!res.ok) {
//         //this will activate the closest error.js Error Boundry
//         throw new Error('failed to fetch data')
//     }

//     const data = await res.json()
//     return data
// }

// // revalidate
// export async function getUsers() {
//   // automatically revalidate data after a certain amount of time has passed. this is useful for data that changes infrequently and freshness is not as critical.
//   // to revalidate data at a timed interval, you can use the the next.revalidate option of fetch to set the cache lifetime of a resource(in seconds).
//   const res = await fetch(URL, { next: { revalidate: 20 } });
//   if (!res.ok) {
//     //this will activate the closest error.js Error Boundry
//     throw new Error("failed to fetch data");
//   }

//   const data = await res.json();
//   return data
// }

// no-store , yani cache mekanizmasini kullanma
export async function getUsers() {
// this will fetch data dynamically, on every request.
  const res = await fetch(URL, { cache:'no-store' });
  if (!res.ok) {
    //this will activate the closest error.js Error Boundry
    throw new Error("failed to fetch data");
  }

  const data = await res.json();
  return data
}
