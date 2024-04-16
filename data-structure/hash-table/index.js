class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  set(key, value) {
    let pos = this._hash(key)
    if(!Array.isArray(this.keyMap[pos])) {
        this.keyMap[pos] = []
        this.keyMap[pos].push([key, value])
    } else {
      let updated = this.keyMap[pos].reduce((prev, item) => {
          console.log(prev)
          if(item?.[0] === key){
              return [...prev, [key, value]]
          }
          
          return [...prev, item]
      }, [])
      this.keyMap[pos] = updated
    }
    
    return this
  }

  get(key) {
    const pos = this._hash(key)
    const item = this.keyMap[pos]?.find(i => i[0] === key)
    return item
  }

  values() {
    return this.keyMap?.flatMap(i => i?.flatMap(t => t?.[1]))
  }
  
  keys() {
    return this.keyMap?.flatMap(i => i?.flatMap(t => t?.[0]))
  }

  _hash(key) {
    let total = 0;
    let WEIRDPRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRDPRIME + value) % this.keyMap.length;
    }
    return total;
  }
}
