"use client"
import React,{useState} from 'react';
import { ReactFlow } from '@xyflow/react';
import Modal from 'react-modal'; // Importing the Modal component
import '@xyflow/react/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 860, y: 0 }, data: { label: 'Mobile Development' } },

  // Mobile Development Approaches
  { id: '2', position: { x: 190, y: 100 }, data: { label: 'Native Development' }, style: { backgroundColor: '#ffcccb' } },
  { id: '3', position: { x: 100, y: 200 }, data: { label: 'Swift (iOS)' }, style: { backgroundColor: '#add8e6' } },
  { id: '4', position: { x: 280, y: 200 }, data: { label: 'Kotlin (Android)' }, style: { backgroundColor: '#add8e6' } },

  { id: '5', position: { x: 550, y: 100 }, data: { label: 'Cross-Platform Development' }, style: { backgroundColor: '#ffcccb' } },
  { id: '6', position: { x: 470, y: 200 }, data: { label: 'Flutter' }, style: { backgroundColor: '#add8e6' } },
  { id: '7', position: { x: 630, y: 200 }, data: { label: 'React Native' }, style: { backgroundColor: '#add8e6' } },

  { id: '9', position: { x: 920, y: 100 }, data: { label: 'Hybrid Development' }, style: { backgroundColor: '#ffcccb' } },
  { id: '10', position: { x: 850, y: 200 }, data: { label: 'Ionic' }, style: { backgroundColor: '#add8e6' } },
  { id: '11', position: { x: 1020, y: 200 }, data: { label: 'PhoneGap' }, style: { backgroundColor: '#add8e6' } },

  // Mobile Development Tools
  { id: '12', position: { x: 1230, y: 100 }, data: { label: 'Mobile Tools' }, style: { backgroundColor: '#ffcccb' } },
  { id: '13', position: { x: 1230, y: 200 }, data: { label: 'Android Studio' }, style: { backgroundColor: '#add8e6' } },
  { id: '14', position: { x: 1230, y: 300 }, data: { label: 'Xcode' }, style: { backgroundColor: '#add8e6' } },

  // Cloud & Backend Services
  { id: '15', position: { x: 1540, y: 100 }, data: { label: 'Cloud & Backend Services' }, style: { backgroundColor: '#ffcccb' } },
  { id: '16', position: { x: 1540, y: 200 }, data: { label: 'Firebase' }, style: { backgroundColor: '#add8e6' } },
  { id: '17', position: { x: 1540, y: 300 }, data: { label: 'AWS Amplify' }, style: { backgroundColor: '#add8e6' } },

];

const initialEdges = [
  // Connecting Mobile Development to Approaches, Tools, and Services
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-5', source: '1', target: '5' },
  { id: 'e1-9', source: '1', target: '9' },
  { id: 'e1-12', source: '1', target: '12' },
  { id: 'e1-15', source: '1', target: '15' },

  // Native Development connections
  { id: 'e2-3', source: '2', target: '3' },
  { id: 'e2-4', source: '2', target: '4' },

  // Cross-Platform Development connections
  { id: 'e5-6', source: '5', target: '6' },
  { id: 'e5-7', source: '5', target: '7' },

  // Hybrid Development connections
  { id: 'e9-10', source: '9', target: '10' },
  { id: 'e9-11', source: '9', target: '11' },

  // Mobile Tools connections
  { id: 'e12-13', source: '12', target: '13' },
  { id: 'e12-14', source: '12', target: '14' },

  // Cloud & Backend Services connections
  { id: 'e15-16', source: '15', target: '16' },
  { id: 'e15-17', source: '15', target: '17' },
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