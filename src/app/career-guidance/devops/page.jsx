"use client"
import React,{useState} from 'react';
import { ReactFlow } from '@xyflow/react';
import Modal from 'react-modal'; // Importing the Modal component
import '@xyflow/react/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 690, y: 0 }, data: { label: 'DevOps Technology' } },

  // DevOps Practices
  { id: '2', position: { x: 190, y: 100 }, data: { label: 'DevOps Practices' }, style: { backgroundColor: '#ffcccb' } },
  { id: '3', position: { x: 190, y: 200 }, data: { label: 'Continuous Integration (CI)' }, style: { backgroundColor: '#add8e6' } },
  { id: '4', position: { x: 0, y: 200 }, data: { label: 'Continuous Deployment (CD)' }, style: { backgroundColor: '#add8e6' } },
  { id: '5', position: { x: 380, y: 200 }, data: { label: 'Infrastructure as Code (IaC)' }, style: { backgroundColor: '#add8e6' } },

  // DevOps Tools
  { id: '6', position: { x: 690, y: 100 }, data: { label: 'DevOps Tools' }, style: { backgroundColor: '#ffcccb' } },
  { id: '7', position: { x: 690, y: 200 }, data: { label: 'Jenkins' }, style: { backgroundColor: '#add8e6' } },
  { id: '8', position: { x: 690, y: 300 }, data: { label: 'GitLab CI' }, style: { backgroundColor: '#add8e6' } },
  { id: '9', position: { x: 690, y: 400 }, data: { label: 'Travis CI' }, style: { backgroundColor: '#add8e6' } },
  { id: '10', position: { x: 690, y: 500 }, data: { label: 'CircleCI' }, style: { backgroundColor: '#add8e6' } },

  // Containerization & Orchestration
  { id: '11', position: { x: 1190, y: 100 }, data: { label: 'Containerization & Orchestration' }, style: { backgroundColor: '#ffcccb' } },
  { id: '12', position: { x: 1000, y: 300 }, data: { label: 'Docker' }, style: { backgroundColor: '#add8e6' } },
  { id: '13', position: { x: 1190, y: 300 }, data: { label: 'Kubernetes' }, style: { backgroundColor: '#add8e6' } },
  { id: '14', position: { x: 1380, y: 300 }, data: { label: 'Docker Compose' }, style: { backgroundColor: '#add8e6' } },

  // Cloud Providers
  { id: '15', position: { x: 1590, y: 100 }, data: { label: 'Cloud Providers' }, style: { backgroundColor: '#ffcccb' } },
  { id: '16', position: { x: 1400, y: 200 }, data: { label: 'AWS' }, style: { backgroundColor: '#add8e6' } },
  { id: '17', position: { x: 1590, y: 200 }, data: { label: 'Azure' }, style: { backgroundColor: '#add8e6' } },
  { id: '18', position: { x: 1780, y: 200 }, data: { label: 'Google Cloud' }, style: { backgroundColor: '#add8e6' } },

];

const initialEdges = [
  // Connecting DevOps Technology to Practices, Tools, Containerization, Cloud Providers, Monitoring & Logging
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-6', source: '1', target: '6' },
  { id: 'e1-11', source: '1', target: '11' },
  { id: 'e1-15', source: '1', target: '15' },
  { id: 'e1-19', source: '1', target: '19' },

  // DevOps Practices connections
  { id: 'e2-3', source: '2', target: '3' },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e2-5', source: '2', target: '5' },

  // DevOps Tools connections
  { id: 'e6-7', source: '6', target: '7' },
  { id: 'e6-8', source: '6', target: '8' },
  { id: 'e6-9', source: '6', target: '9' },
  { id: 'e6-10', source: '6', target: '10' },

  // Containerization & Orchestration connections
  { id: 'e11-12', source: '11', target: '12' },
  { id: 'e11-13', source: '11', target: '13' },
  { id: 'e11-14', source: '11', target: '14' },

  // Cloud Providers connections
  { id: 'e15-16', source: '15', target: '16' },
  { id: 'e15-17', source: '15', target: '17' },
  { id: 'e15-18', source: '15', target: '18' },

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