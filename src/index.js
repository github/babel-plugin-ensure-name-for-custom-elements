export default function({types: t }) {
  const messageNoGetter = 'Custom elements need to implement `static get name()`'
  const messageMultipleStatements = '`static get name()` should only return string'
  const messageNotMatching = '`static get name()` should return the name of the class'

  return {
    visitor: {
      Class: function(path) {
        const node = path.node
        const hasSuperClass = node.superClass
        const superClassIsElement = hasSuperClass && node.superClass.name.endsWith('Element')
        if (!hasSuperClass || !superClassIsElement) return

        const getter = node.body.body.find(method => {
          return method.type === 'ClassMethod' && method.static && method.key.name === 'name'
        })

        if (!getter) {
          node.body.body.push(
            t.classMethod(
              'get',
              t.identifier('name'),
              [],
              t.blockStatement([t.returnStatement(t.stringLiteral(node.id.name))]),
              false,
              true
            )
          )
        } else if (
          getter.body.body.length !== 1 ||
          getter.body.body[0].type !== 'ReturnStatement' ||
          getter.body.body[0].argument.type !== 'Literal' ||
          getter.body.body[0].argument.value !== node.id.name
        ) {
          getter.kind = 'get'
          //getter.static = true
          getter.body.body = [t.returnStatement(t.stringLiteral(node.id.name))]
        }
      }
    }
  };
}
