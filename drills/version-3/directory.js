// Your code here
class Directory {
  constructor(name) {
    this.name = name;
    this.list = [];
    this.lengths = [];
    this.files = [];
  }
  ls() {
    return this.list;
  }
  write(fileName, fileText) {
    this.list.unshift(fileName);
    this.lengths.unshift(`${fileName} - ${fileText.length}`);
    this.files.unshift(fileText);
  }
  ls_la() {
    return this.lengths;
  }
  cat(fileName) {
    for (var i = 0; i < this.list.length; i++) {
      if (fileName === this.list[i]) {
        return this.files[i];
      }
    }
  }
  mv(oldName, newName) {
    for (var i = 0; i < this.list.length; i++) {
      if ((this.list[i] = oldName)) {
        this.list[i] = newName;
      }
    }
  }
  cp(fileToCopy, copy) {
    let $index = this.list.indexOf(fileToCopy);
    let $text = this.files[$index];
    this.list.unshift(copy);
    this.list.pop();
    this.files.unshift($text);
  }
  ln_s(firstObject, secondObject) {
    this.list.push(secondObject);
    let firstIndex = this.list.indexOf(firstObject);
    let secondIndex = this.list.indexOf(secondObject);
    let fileToLink = this.files[firstIndex];
  }
}

module.exports = Directory;

// for (var i = 0; i < this.files.length; i++) {
//   return this.files[i].value.length;
//
