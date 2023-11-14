import { doc, setDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
import { doc, updateDoc } from "firebase/firestore";

async function registerStation(db, station) {
  const stationRef = doc(db, "station", station.id);

  await setDoc(stationRef, {
    alcoholPrice: station.alcoholPrice,
    gasPrice: station.gasPrice,
    id: station.id,
    location: new firebase.firestore.GeoPoint(
      station.location.lat,
      station.location.lng
    ),
    name: station.name,
  });
}
// STATION INPUT EXAMPLE
// const station = {
//     alcoholPrice: 2.43,
//     gasPrice: 5.67,
//     id: "DFseggJMy8qyP4z9Yh7I",
//     location: { lat: 32.1, lng: 34.2 },
//     name: "Station 1"
//   };

async function getAllStations(db) {
  const stations = [];
  const stationCollection = collection(db, "station");
  const stationSnapshot = await getDocs(stationCollection);
  stationSnapshot.forEach((doc) => {
    stations.push(doc.data());
  });
  return stations;
}

async function getStationByName(db, name) {
  const stationCollection = collection(db, "station");
  const q = query(stationCollection, where("name", "==", name));
  const querySnapshot = await getDocs(q);
  let stations = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    stations.push(doc.data());
  });
  return stations;
}

async function updateStationByName(db, name, newData) {
  const stations = await getStationByName(db, name);
  if (stations.length > 0) {
    const station = stations[0]; // Get the first station that matches the name
    const stationRef = doc(db, 'station', station.id);
    await updateDoc(stationRef, newData);
  } else {
    console.log('No station found with the provided name');
  }
}