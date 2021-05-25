import axios from "axios";

const getAll = (() => {
  const EMPTY = [];
  let cache = EMPTY;

  return async () => {
    if (cache === EMPTY) {
      try {
        const res = await axios("/cardtypes");

        if (res.status !== 200) {
          throw new Error(`${res.status}: API call error`);
        }

        cache = res.data;
      } catch (error) {
        console.error(error);

        return [];
      }
    }

    return cache;
  };
})();

const getById = (() => {
  const cache = new Map();

  return async (id) => {
    if (!cache.get(id)) {
      try {
        const res = await axios(`/cardtypes/${id}`);

        if (res.status !== 200) {
          throw new Error(`${res.status}: API call error`);
        }

        cache.set(id, res.data);
      } catch (error) {
        console.error(error);

        return {};
      }
    }

    return cache.get(id);
  };
})();

const cardType = {
  get: async (id = "") => {
    if (id === "") {
      return await getAll();
    } else {
      return await getById(id);
    }
  }
}

export default cardType;
