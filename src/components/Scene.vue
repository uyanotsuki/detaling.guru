<script setup lang="ts">
import { TresCanvas } from '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos'
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from "three"

const gl = {
  clearColor: '#EDEDED', 
  shadows: false, 
  alpha: false, 
  shadowMapType: BasicShadowMap, 
  outputColorSpace: SRGBColorSpace, 
  toneMapping: NoToneMapping,
}

import { useGLTF } from '@tresjs/cientos'
const { scene: model, nodes } = await useGLTF(
  '/models/car/scene.gltf', { draco: true }
)

console.log(Object.values(nodes).map(node => node.name));


</script>

<template>
  <div class="container">
    <TresCanvas v-bind="gl">
      <TresPerspectiveCamera />
      <OrbitControls />
      <Suspense>
        <primitive :object="model" />
      </Suspense>
      <TresAmbientLight :intensity="30" /> 
      <TresDirectionalLight :intensity="30" />
    </TresCanvas>
  </div>
</template>

<style>
.container {
  width: 100%;
  height: 100vh;
}
canvas {
  width: 100%;
  height: 100vh;
  left: 500px !important;
}
</style>