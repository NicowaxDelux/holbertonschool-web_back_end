export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(Newname) {
    if (typeof Newname !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = Newname;
  }

  get length() {
    return this._length;
  }

  set length(Newlength) {
    if (typeof Newlength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = Newlength;
  }

  get students() {
    return this._students;
  }

  set students(Newstudent) {
    if (Array.isArray(Newstudent) && Newstudent.every((s) => typeof s !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = Newstudent;
  }
}
