import React, { useCallback } from "react";
import ReactFlow, { 
  MiniMap, 
  Controls, 
  Background, 
  useNodesState, 
  useEdgesState,
  addEdge,
  ConnectionLineType
} from "reactflow";
import 'reactflow/dist/style.css';
import './TimelineInfographic.css';

const nodeColors = {
  steroid: '#FFD700',
  immunosuppressant: '#4CAF50',
  monoclonal: '#2196F3',
  other: '#9C27B0'
};

const getNodeColor = (label) => {
  if (label.includes('prednisolone') || label.includes('Kortison') || label.includes('Methylprednisolone') || label.includes('Triamcinolone')) 
    return nodeColors.steroid;
  if (label.includes('Cyclophosphamide') || label.includes('Azathioprine')) 
    return nodeColors.immunosuppressant;
  if (label.includes('Rituximab') || label.includes('Soliris') || label.includes('Tocilizumab')) 
    return nodeColors.monoclonal;
  return nodeColors.other;
};

const nodes = [
  { 
    id: "1", 
    data: { label: "Prednisolone" }, 
    position: { x: 100, y: 50 },
    style: { 
      background: getNodeColor("Prednisolone"),
      color: 'black',
      border: '2px solid rgba(0,0,0,0.3)',
      borderRadius: '10px',
      padding: '10px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }
  },
  { 
    id: "2", 
    data: { label: "Cyclophosphamide" }, 
    position: { x: 300, y: 50 },
    style: { 
      background: getNodeColor("Cyclophosphamide"),
      color: 'white',
      border: '2px solid rgba(0,0,0,0.3)',
      borderRadius: '10px',
      padding: '10px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }
  },
  { 
    id: "3", 
    data: { label: "Rituximab" }, 
    position: { x: 200, y: 150 },
    style: { 
      background: getNodeColor("Rituximab"),
      color: 'white',
      border: '2px solid rgba(0,0,0,0.3)',
      borderRadius: '10px',
      padding: '10px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }
  },
  { 
    id: "4", 
    data: { label: "Soliris/Eculizumab" }, 
    position: { x: 400, y: 150 },
    style: { 
      background: getNodeColor("Soliris"),
      color: 'white',
      border: '2px solid rgba(0,0,0,0.3)',
      borderRadius: '10px',
      padding: '10px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }
  },
  { 
    id: "5", 
    data: { label: "Methylprednisolone" }, 
    position: { x: 100, y: 250 },
    style: { 
      background: getNodeColor("Methylprednisolone"),
      color: 'black',
      border: '2px solid rgba(0,0,0,0.3)',
      borderRadius: '10px',
      padding: '10px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }
  },
  { 
    id: "6", 
    data: { label: "Plasma Exchange" }, 
    position: { x: 300, y: 250 },
    style: { 
      background: getNodeColor("Plasma"),
      color: 'black',
      border: '2px solid rgba(0,0,0,0.3)',
      borderRadius: '10px',
      padding: '10px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }
  },
  { 
    id: "7", 
    data: { label: "Triamcinolone" }, 
    position: { x: 500, y: 250 },
    style: { 
      background: getNodeColor("Triamcinolone"),
      color: 'black',
      border: '2px solid rgba(0,0,0,0.3)',
      borderRadius: '10px',
      padding: '10px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }
  },
  { 
    id: "8", 
    data: { label: "Kortison" }, 
    position: { x: 100, y: 350 },
    style: { 
      background: getNodeColor("Kortison"),
      color: 'black',
      border: '2px solid rgba(0,0,0,0.3)',
      borderRadius: '10px',
      padding: '10px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }
  },
  { 
    id: "9", 
    data: { label: "Azathioprine" }, 
    position: { x: 300, y: 350 },
    style: { 
      background: getNodeColor("Azathioprine"),
      color: 'white',
      border: '2px solid rgba(0,0,0,0.3)',
      borderRadius: '10px',
      padding: '10px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }
  },
  { 
    id: "10", 
    data: { label: "Tocilizumab" }, 
    position: { x: 500, y: 350 },
    style: { 
      background: getNodeColor("Tocilizumab"),
      color: 'white',
      border: '2px solid rgba(0,0,0,0.3)',
      borderRadius: '10px',
      padding: '10px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }
  },
].map(node => ({
  ...node,
  type: 'default',
  sourcePosition: 'right',
  targetPosition: 'left'
}));

const edges = [
  { id: "e1-4", source: "1", target: "4", label: "4%" },
  { id: "e1-3", source: "1", target: "3", label: "4%" },
  { id: "e3-1", source: "3", target: "1", label: "4%" },
  { id: "e3-5", source: "3", target: "5", label: "8%" },
  { id: "e5-3", source: "5", target: "3", label: "12%" },
  { id: "e3-4", source: "3", target: "4", label: "8%" },
  { id: "e5-6", source: "5", target: "6", label: "4%" },
  { id: "e5-7", source: "5", target: "7", label: "4%" },
  { id: "e6-3", source: "6", target: "3", label: "4%" },
  { id: "e1-2", source: "1", target: "2", label: "4%" },
  { id: "e5-3", source: "5", target: "3", label: "8%" },
  { id: "e2-1", source: "2", target: "1", label: "4%" },
  { id: "e2-3", source: "2", target: "3", label: "4%" },
  { id: "e8-9", source: "8", target: "9", label: "4%" },
  { id: "e9-8", source: "9", target: "8", label: "4%" },
  { id: "e8-4", source: "8", target: "4", label: "4%" },
  { id: "e8-10", source: "8", target: "10", label: "4%" },
].map(edge => ({
  ...edge,
  type: 'step',
  style: { 
    stroke: '#666', 
    strokeWidth: 2,
    opacity: 0.7
  },
  labelStyle: {
    fontSize: '10px',
    background: 'white',
    padding: '2px 5px',
    borderRadius: '3px'
  }
}));

const TreatmentSwitch = () => {
  const [flowNodes, setNodes, onNodesChange] = useNodesState(nodes);
  const [flowEdges, setEdges, onEdgesChange] = useEdgesState(edges);

  const onConnect = useCallback((params) => {
    setEdges((eds) => addEdge({ ...params, type: 'step' }, eds));
  }, [setEdges]);

  return (
    <div className="container" style={{ height: '600px', width: '100%' }}>
      <h2 className="container-title">
        NMOSD Treatment Switching Patterns
      </h2>
      <div className="diagram-container" style={{ height: '500px' }}>
        <ReactFlow
          nodes={flowNodes}
          edges={flowEdges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          connectionLineType={ConnectionLineType.Step}
          fitView
          attributionPosition="bottom-right"
        >
          
          <Background 
            variant="dots" 
            gap={20} 
            size={1} 
            color="#e0e0e0" 
          />
        </ReactFlow>
      </div>
      <div className="legend" style={{
        display: 'flex', 
        justifyContent: 'center', 
        marginTop: '10px'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          margin: '0 10px'
        }}>
          <div style={{ 
            width: '15px', 
            height: '15px', 
            backgroundColor: nodeColors.steroid, 
            marginRight: '5px' 
          }}></div>
          <span>Steroids</span>
        </div>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          margin: '0 10px'
        }}>
          <div style={{ 
            width: '15px', 
            height: '15px', 
            backgroundColor: nodeColors.immunosuppressant, 
            marginRight: '5px' 
          }}></div>
          <span>Immunosuppressants</span>
        </div>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          margin: '0 10px'
        }}>
          <div style={{ 
            width: '15px', 
            height: '15px', 
            backgroundColor: nodeColors.monoclonal, 
            marginRight: '5px' 
          }}></div>
          <span>Monoclonal Antibodies</span>
        </div>
      </div>
    </div>
  );
};

export default TreatmentSwitch;