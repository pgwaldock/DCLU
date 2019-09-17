
// capaltaTree
const capaltaTree = new Entity()
capaltaTree.addComponent(new GLTFShape('models/capalta-tree-sl-sale.glb'))
capaltaTree.addComponent(new Transform({
  position: new Vector3(8, 0, 8),
  scale: new Vector3(1, 1, 1)
}))
engine.addEntity(capaltaTree)
