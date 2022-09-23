// Registering components
AFRAME.registerComponent("move", {
  schema: {
    moveX: { type: "number", default: 1 },
  },

  tick: function () {
    var pos = this.el.getAttribute("position");
    this.data.moveX = this.data.moveX + 0.01;

    pos.x = this.data.moveX;

    this.el.setAttribute("position", { x: pos.x, y: pos.y, z: pos.z });
  },
});

AFRAME.registerComponent("camera-zoom-out", {
  schema: {
    moveX: { type: "number", default: 10 },
  },

  tick: function () {
    this.data.moveX = this.data.moveX + 0.01;

    var pos = this.el.getAttribute("position");

    pos.x = this.data.moveX;

    this.el.setAttribute("position", { x: pos.x, y: pos.y, z: pos.z });
  },
});

AFRAME.registerComponent("fall-down", {
  schema: {
    moveX: { type: "number", default: 0 },
  },
  tick: function () {

    window.addEventListener("click", (e) => {   

      this.data.moveX = this.data.moveX - 0.0001;

    });
    var pos = this.el.getAttribute("position");
    pos.x = pos.x + this.data.moveX;
    this.el.setAttribute("position", { x: pos.x, y: pos.y, z: pos.z });
  }
});


