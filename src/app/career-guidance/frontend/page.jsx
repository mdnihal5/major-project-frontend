"use client"
import React,{useState} from 'react';
import { ReactFlow } from '@xyflow/react';
import Modal from 'react-modal'; // Importing the Modal component
import '@xyflow/react/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 400, y: 0 }, data: { label: 'Frontend Development' } },
  { id: '2', position: { x: 400, y: 100 }, data: { label: 'HTML' }, style: { backgroundColor: '#ffcccb' } },
  { id: '3', position: { x: 400, y: 200 }, data: { label: 'CSS' }, style: { backgroundColor: '#ffcccb' } },
  { id: '4', position: { x: 400, y: 350 }, data: { label: 'JavaScript' }, style: { backgroundColor: '#ffcccb' } },
  { id: '5', position: { x: 200, y: 280 }, data: { label: 'Tailwind' }, style: { backgroundColor: '#add8e6' } },
  { id: '6', position: { x: 600, y: 280 }, data: { label: 'Bootstrap' }, style: { backgroundColor: '#add8e6' } },

  { id: '7', position: { x: 400, y: 500 }, data: { label: 'React' }, style: { backgroundColor: '#90ee90' } },
  { id: '11', position: { x: 200, y: 500 }, data: { label: 'Angular' }, style: { backgroundColor: '#90ee90' } },
  { id: '12', position: { x: 600, y: 500 }, data: { label: 'Vue' }, style: { backgroundColor: '#90ee90' } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
  { id: 'e3-5', source: '3', target: '5' },
  { id: 'e3-6', source: '3', target: '6' },
  { id: 'e3-9', source: '3', target: '9' },
  { id: 'e3-10', source: '3', target: '10' },
  { id: 'e3-4', source: '3', target: '4' },
  { id: 'e4-7', source: '4', target: '7' },
  { id: 'e4-11', source: '4', target: '11' },
  { id: 'e4-12', source: '4', target: '12' },
  { id: 'e4-8', source: '4', target: '8' },
];

export default function AIMap() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
      const [selectedNode, setSelectedNode] = useState(null);
    
      // Handle the node click to open the modal
      const onNodeClick = (event, node) => {
        setSelectedNode(node);
        setModalIsOpen(true);
      };
    
      // Close the modal
      const closeModal = () => {
        setModalIsOpen(false);
        setSelectedNode(null);
      };
    return (
      <div className='w-full h-full'>
        <div 
          style={{ 
            width: '100%', 
            height: '100%', 
            
            overflow: 'auto', 
            boxSizing: 'border-box',
            backgroundColor: '#f9f9f9', 
            border: '1px solid #ccc',
            borderRadius: '8px'
          }}
        >
          <ReactFlow 
            nodes={initialNodes} 
            edges={initialEdges} 
            fitView 
            onNodeClick={onNodeClick} // Handle node click
          />
        </div>
        
      </div>
    );
  }