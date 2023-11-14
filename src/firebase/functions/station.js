import { doc, setDoc } from "firebase/firestore"; 
import { collection, getDocs } from "firebase/firestore";

async function registerStation(db, station) {
  const stationRef = doc(db, 'station', station.id);

  await setDoc(stationRef, {
    alcoholPrice: station.alcoholPrice,
    gasPrice: station.gasPrice,
    id: station.id,
    location: new firebase.firestore.GeoPoint(station.location.lat, station.location.lng),
    name: station.name
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
  
async function getStations(db) {
    const stations = [];
    const stationCollection = collection(db, 'station');
    const stationSnapshot = await getDocs(stationCollection);
    stationSnapshot.forEach((doc) => {
      stations.push(doc.data());
    });
    return stations;
  }