import { firestore } from './firebase';

const API = {
  // firebase firestore 기반 db query
  async getAll<T>(collection: string) {
    const result: T[] = [];
    const docs = await firestore.collection(collection).get();

    docs.forEach(doc => result.push(doc.data() as T));

    return result;
  },

  add<T>(collection: string, item: T) {
    return firestore.collection(collection).add(item);
  },
};

export default API;
