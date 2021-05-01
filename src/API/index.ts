import { firestore } from './firebase';

type Collection = 'cards';

const API = {
  async getAll<T>(collection: Collection) {
    const result: T[] = [];
    const docs = await firestore.collection(collection).get();

    docs.forEach(doc => result.push({ id: doc.id, ...(doc.data() as T) }));

    return result;
  },

  add<T>(item: T, collection: Collection) {
    return firestore.collection(collection).add(item);
  },
};

export default API;
