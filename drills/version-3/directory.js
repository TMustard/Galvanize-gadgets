class Directory {
  constructor(name) {
    this.name = name;
    this.list = [];
    this.lengths = [];
    this.files = [];
    this.links = [];
  }

  ls() {
    return this.list;
  }

  write(fileName, fileText) {
    for (var i = 0; i < this.files.length; i++) {
      if (this.files[i].name === fileName) {
        this.files[i].content = fileText;
        this.lengths.unshift(`${fileName} - ${fileText.length}`);
      }
    }
    if (!this.list.includes(fileName)) {
      const file = {
        name: fileName,
        content: fileText
      };
      this.list.unshift(fileName);
      this.lengths.unshift(`${fileName} - ${fileText.length}`);
      this.files.unshift(file);
    }
    if (this.links.includes(fileName)) {
      this.files[this.links.indexOf(fileName) + 1].content = fileText;
    }
  }

  ls_la() {
    return this.lengths;
  }

  cat(fileName) {
    for (var i = 0; i < this.list.length; i++) {
      if (fileName === this.list[i]) {
        return this.files[i].content;
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
    let $text = this.files[$index].content;
    this.list.unshift(copy);
    this.list.pop();
    const file = {
      name: copy,
      content: $text
    };
    this.files.unshift(file);
  }

  ln_s(firstObject, secondObject) {
    this.links.unshift(firstObject, secondObject);
    if (!this.list.includes(secondObject)) {
      this.list.push(secondObject);
    }

    for (var i = 0; i < this.list.length; i++) {
      if (this.files[i].name === firstObject) {
        const $text = this.files[i].content;
        const file = {
          name: secondObject,
          content: $text
        };

        this.lengths.pop();
        this.lengths.unshift(`${secondObject} - ${$text.length}`);
        return this.files.push(file);
      }
    }
  }
}

module.exports = Directory;

// for (var i = 0; i < this.files.length; i++) {
//   return this.files[i].value.length;
//
