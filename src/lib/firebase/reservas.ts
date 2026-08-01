import { db } from "./config";
import { collection, addDoc, getDocs, query, orderBy, Timestamp } from "firebase/firestore";

export interface Reserva {
  nombre: string;
  email: string;
  telefono: string;
  servicio: string;
  fecha: string;
  hora: string;
  notas?: string;
  estado: "pendiente" | "confirmada" | "cancelada" | "completada";
  createdAt: string;
}

export async function crearReserva(data: Omit<Reserva, "createdAt">): Promise<string> {
  const docRef = await addDoc(collection(db, "reservas"), {
    ...data,
    createdAt: new Date().toISOString(),
  });
  return docRef.id;
}

export async function obtenerReservas(): Promise<Reserva[]> {
  const q = query(collection(db, "reservas"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => doc.data() as Reserva);
}
