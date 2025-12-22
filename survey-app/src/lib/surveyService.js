import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const saveSurveyResponse = async (formData) => {
  try {
    const docRef = await addDoc(collection(db, "surveyResponses"), {
      ...formData,
      timestamp: serverTimestamp(),
      submittedAt: new Date().toISOString(),
    });
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
};
