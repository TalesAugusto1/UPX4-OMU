import { collection, addDoc } from "firebase/firestore";

async function addReport(db, report) {
  const reportCollection = collection(db, 'report');
  await addDoc(reportCollection, {
    cep: report.cep,
    denounceDescription: report.denounceDescription,
    id: report.id,
    image: report.image,
    problemLevel: report.problemLevel
  });
}

// ++++++++++REPORT EXAMPLE+++++++++++++++
// const report = {
//     cep: "18190-000",
//     denounceDescription: "muito barulho",
//     id: "p6bipEEmtfe7KkYYDboT",
//     image: "data:image/jpeg;base64,...",
//     problemLevel: 2
//   };
  