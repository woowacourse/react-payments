import { firestore, getFirestoreTimestamp } from './firebase';

type Collection = 'cards';

const API = {
  async getAll<T>(collection: Collection) {
    const result: T[] = [];
    const docsRef = await firestore.collection(collection).orderBy('createdAt', 'asc').get();

    docsRef.forEach(doc => result.push({ id: doc.id, ...(doc.data() as T) }));

    return result;
  },

  async getById<T>(id: string, collection: Collection) {
    const docRef = await firestore.collection(collection).doc(id).get();

    return { id: docRef.id, ...(docRef.data() as T) };
  },

  add<T>(item: T, collection: Collection) {
    return firestore.collection(collection).add({ ...item, createdAt: getFirestoreTimestamp() });
  },

  editById<T>(item: Partial<T>, id: string, collection: Collection) {
    return firestore.collection(collection).doc(id).update(item);
  },

  deleteById(id: string, collection: Collection) {
    return firestore.collection(collection).doc(id).delete();
  },
};

export default API;
