const createHashTable = (size) => {
  const storage = new Array(size);
  const numBuckets = storage.length;

  const hash = (key) => {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % numBuckets;
  };

  const insert = (key, value) => {
    const index = hash(key);

    if (!storage[index]) {
      storage[index] = [];
    }

    storage[index].push({ [key]: value });
  };

  //get
  const get = (key) => {
    const index = hash(key);

    if (!storage[index]) return null;

    for (let i = 0; i < storage[index].length; i++) {
      if (storage[index][i][key]) {
        return storage[index][i][key];
      }
    }

    if (storage[index][0][key]) {
      return storage[index][0][key];
    }

    // return null;
  };

  //remove
  const remove = (key) => {
    const index = hash(key);

    if (!storage[index]) return null;

    for (let i = 0; i < storage[index].length; i++) {
      if (storage[index][i][key]) {
        storage[index].splice(i, 1);
        return key;
      }
    }
    return null;
  };

  return { insert, get, remove, storage };
};

const myTable = createHashTable(112);

myTable.insert("name", "sakib");
myTable.insert("name", "sakib");
myTable.insert("age", 16);

// myTable.remove("age");

console.log(myTable.get("name"));
console.log(myTable.storage);
