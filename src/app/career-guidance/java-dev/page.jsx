"use client"
import React,{useState} from 'react';
import { ReactFlow } from '@xyflow/react';
import Modal from 'react-modal'; // Importing the Modal component
import '@xyflow/react/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 690, y: 0 }, data: { label: 'Java Full Stack Development' } },

  // Frontend Branch
  { id: '2', position: { x: 190, y: 100 }, data: { label: 'Frontend' }, style: { backgroundColor: '#ffcccb' } },
  { id: '3', position: { x: 190, y: 200 }, data: { label: 'React' }, style: { backgroundColor: '#add8e6' } },
  { id: '4', position: { x: 0, y: 200 }, data: { label: 'Vue.js' }, style: { backgroundColor: '#add8e6' } },
  { id: '5', position: { x: 380, y: 200 }, data: { label: 'Angular' }, style: { backgroundColor: '#add8e6' } },

  // Backend Branch (Java)
  { id: '6', position: { x: 690, y: 100 }, data: { label: 'Backend' }, style: { backgroundColor: '#ffcccb' } },
  { id: '7', position: { x: 690, y: 200 }, data: { label: 'Java' }, style: { backgroundColor: '#add8e6' } },
  { id: '8', position: { x: 690, y: 300 }, data: { label: 'Frameworks' }, style: { backgroundColor: '#f9f9f9' } },
  { id: '9', position: { x: 600, y: 400 }, data: { label: 'Spring Boot' }, style: { backgroundColor: '#add8e6' } },
  { id: '10', position: { x: 800, y: 400 }, data: { label: 'Java EE' }, style: { backgroundColor: '#add8e6' } },

  // Databases Branch
  { id: '11', position: { x: 1190, y: 100 }, data: { label: 'Databases' }, style: { backgroundColor: '#ffcccb' } },
  { id: '12', position: { x: 1100, y: 200 }, data: { label: 'MongoDB (NoSQL)' }, style: { backgroundColor: '#add8e6' } },
  { id: '13', position: { x: 1300, y: 200 }, data: { label: 'PostgreSQL (SQL)' }, style: { backgroundColor: '#add8e6' } },
];

const initialEdges = [
  // Connecting Java Full Stack Development to Frontend, Backend, and Databases
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-6', source: '1', target: '6' },
  { id: 'e1-11', source: '1', target: '11' },

  // Frontend connections
  { id: 'e2-3', source: '2', target: '3' },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e2-5', source: '2', target: '5' },

  // Backend connections (Java and Frameworks)
  { id: 'e6-7', source: '6', target: '7' },
  { id: 'e7-8', source: '7', target: '8' },
  { id: 'e8-9', source: '8', target: '9' },
  { id: 'e8-10', source: '8', target: '10' },

  // Databases connections
  { id: 'e11-12', source: '11', target: '12' },
  { id: 'e11-13', source: '11', target: '13' },
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