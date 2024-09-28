
const Scene = require('Scene');
const Patches = require('Patches');
const Reactive = require('Reactive');
const Time = require('Time');

export const Diagnostics = require('Diagnostics');

var face2D;

Promise.all([

  Scene.root.findFirst('Face3D'),

]).then(function (results) {

  // scale = Patches.outputs.getPoint('DeviceScale');
  const face3D = results[0];
  face2D = Scene.projectToScreen(face3D.worldTransform.position);
  // nose2D = nose2D.div(2);
  // nose2D = nose2D.sub(50);

  Patches.outputs.getPoint('pos3D').then(pointSignal => {

    Patches.inputs.setPoint2D('pos2D', face2D);
  
  });

  // currNose = Patches.outputs.getPoint2D('currScreenNose');

});

(async function () {  

  

})();