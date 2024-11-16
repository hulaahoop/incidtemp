let v = {
  z: 5,
  parent: {
    m: 10
  },
  _: {}
};

v._.x = v.z + v.parent.m;
console.log(v._.x); // Output: 15
