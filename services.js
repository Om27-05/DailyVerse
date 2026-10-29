import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  setDoc,
} from 'firebase/firestore';
import { db } from './config';

// ==================== PRODUCTS ====================
export const getProducts = async () => {
  const snapshot = await getDocs(collection(db, 'products'));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getProductById = async (id) => {
  const docRef = doc(db, 'products', id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  }
  return null;
};

export const addProduct = async (product) => {
  const docRef = await addDoc(collection(db, 'products'), product);
  return { id: docRef.id, ...product };
};

export const updateProduct = async (id, data) => {
  const docRef = doc(db, 'products', id);
  await updateDoc(docRef, data);
};

export const deleteProduct = async (id) => {
  await deleteDoc(doc(db, 'products', id));
};

// ==================== ORDERS ====================
export const getOrders = async () => {
  const snapshot = await getDocs(collection(db, 'orders'));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getUserOrders = async (userId) => {
  const q = query(collection(db, 'orders'), where('userId', '==', userId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const createOrder = async (order) => {
  const docRef = await addDoc(collection(db, 'orders'), {
    ...order,
    createdAt: new Date().toISOString(),
    status: 'pending',
  });
  return { id: docRef.id, ...order };
};

export const updateOrderStatus = async (id, status) => {
  const docRef = doc(db, 'orders', id);
  await updateDoc(docRef, { status });
};

// ==================== USER PROFILE ====================
export const getUserProfile = async (uid) => {
  const docRef = doc(db, 'users', uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  }
  return null;
};

export const createUserProfile = async (uid, data) => {
  await setDoc(doc(db, 'users', uid), {
    ...data,
    createdAt: new Date().toISOString(),
    role: 'customer',
  });
};

export const updateUserProfile = async (uid, data) => {
  const docRef = doc(db, 'users', uid);
  await updateDoc(docRef, data);
};

// ==================== REVIEWS ====================
export const getProductReviews = async (productId) => {
  const q = query(
    collection(db, 'reviews'),
    where('productId', '==', productId)
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const addReview = async (review) => {
  const docRef = await addDoc(collection(db, 'reviews'), {
    ...review,
    createdAt: new Date().toISOString(),
  });
  return { id: docRef.id, ...review };
};
