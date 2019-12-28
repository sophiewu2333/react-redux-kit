"use strict";
const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  writing() {
    this.fs.copy(this.templatePath("."), this.destinationPath("my-app"));
    this.fs.copy(
      this.templatePath(".babelrc"),
      this.destinationPath("my-app/.babelrc")
    );
  }

  install() {
    this.installDependencies();
  }
};
