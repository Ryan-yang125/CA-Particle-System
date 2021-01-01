/*
 * @Author: RyanYang
 * @Date: 2020-12-26 22:47:55
 * @LastEditTime: 2021-01-01 19:46:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /particle/init.js
 */

window.addEventListener(
  "load",
  () => {
    controller.init();
  },
  "false"
);
// controller for the particle system.
const controller = {
  canvas: null,
  context: null,

  init: function () {
    this.canvas = document.getElementById("canvas");
    this.context = this.canvas.getContext("2d");
    //处理particle电光源之间像素叠加的问题
    this.context.globalCompositeOperation = "darker"; //"source-over", "lighter", "darker", "xor"  are good

    this.p1 = new cParticleSystem();
    this.p2 = new cParticleSystem();

    // Set some properties of p2
    this.p2.position = Vector.create(300, 200);
    this.p2.startColourRandom = [255, 255, 255, 1];
    this.p2.endColourRandom = [255, 255, 255, 1];
    this.p2.size = 10;
    this.p2.maxParticles = 100;
    this.p2.duration = 300;

    setInterval(() => {
      this.update();
      this.draw();
    }, 1000 / 10);
  },

  update: function () {
    // TODO "1" is used as a delta...
    //should be calculated as time between frames
    this.p1.update(1);
    this.p2.update(1);
  },

  draw: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.p1.render(this.context);
    this.p2.render(this.context);
  },
};
