import React, { useEffect, useState } from 'react'
import CodeComponent from './Code'
import { Node } from 'reactflow'
import Tables from './Tables'

type Props = {
  node: Node | undefined
  nodes: Node[] | undefined | null
  title: string
  description: string
}

function Panel({ node, nodes, title, description }: Props) {
  const [view, setView] = useState<boolean>()
  const children = nodes?.properties;


  useEffect(() => {
    if(node){
      setView(true);
    }
  },[node])

  if (view) {
    return (
      <div className='panel'>
        <h1>{nodes?.data.title || nodes?.data.label}</h1>
        <p>{nodes?.data.description}</p>

        {children && <Tables nodes={children} active={node} />}

        {/* {nodeData?.schema?.examples && (
          <div className='examples-wrapper'>
            <h1>Examples</h1>
            {nodeData?.schema?.examples.map((example: any) => (
              <CodeComponent key={example.title}>{JSON.stringify(example, null, 2)}</CodeComponent>
            ))}
          </div>
        )} */}
      </div>
    )
  }
  return (
    <div className='panel'>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default Panel
