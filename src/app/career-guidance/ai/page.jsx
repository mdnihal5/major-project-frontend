"use client"
import React, { useState } from 'react';
import { ReactFlow } from '@xyflow/react';
import Modal from 'react-modal'; // Importing the Modal component
import '@xyflow/react/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 690, y: 0 }, data: { label: 'Artificial Intelligence' } },

  // AI Techniques
  { id: '2', position: { x: 190, y: 100 }, data: { label: 'AI Techniques' }, style: { backgroundColor: '#ffcccb' } },

  { id: '3', position: { x: 190, y: 200 }, data: { label: 'Machine Learning (ML)' }, style: { backgroundColor: '#add8e6' } },
  //ML concepts
  { id: '22', position: { x: 190, y: 300 }, data: { label: 'Linear Regression' }, style: { backgroundColor: '#add8e6' } },
  { id: '23', position: { x: 190, y: 400 }, data: { label: 'Logistic Regression' }, style: { backgroundColor: '#add8e6' } },
  { id: '24', position: { x: 190, y: 500 }, data: { label: 'Decision Trees' }, style: { backgroundColor: '#add8e6' } },
  { id: '25', position: { x: 190, y: 600 }, data: { label: 'K-Nearest Neighbors (KNN)' }, style: { backgroundColor: '#add8e6' } },


  { id: '4', position: { x: 0, y: 200 }, data: { label: 'Deep Learning (DL)' }, style: { backgroundColor: '#add8e6' } },
  //DL concepts
  { id: '19', position: { x: 0, y: 300 }, data: { label: 'Convolutional Neural Networks (CNNs)' }, style: { backgroundColor: '#add8e6' } },
  { id: '20', position: { x: 0, y: 400 }, data: { label: 'Recurrent Neural Networks (RNNs)' }, style: { backgroundColor: '#add8e6' } },
  { id: '21', position: { x: 0, y: 500 }, data: { label: 'Generative Adversarial Networks (GANs)' }, style: { backgroundColor: '#add8e6' } },


  { id: '5', position: { x: 380, y: 200 }, data: { label: 'Natural Language Processing (NLP)' }, style: { backgroundColor: '#add8e6' } },
  //NLP concepts
  { id: '26', position: { x: 380, y: 300 }, data: { label: 'Tokenization' }, style: { backgroundColor: '#add8e6' } },
  { id: '27', position: { x: 380, y: 400 }, data: { label: 'Named Entity Recognition (NER)' }, style: { backgroundColor: '#add8e6' } },
  { id: '28', position: { x: 380, y: 500 }, data: { label: 'Text Classification' }, style: { backgroundColor: '#add8e6' } },
  { id: '29', position: { x: 380, y: 600 }, data: { label: 'Generative AI' }, style: { backgroundColor: '#add8e6' } },
  { id: '30', position: { x: 380, y: 700 }, data: { label: 'Large Language Models (LLMs)' }, style: { backgroundColor: '#add8e6' } },


  // AI Algorithms
  { id: '6', position: { x: 690, y: 100 }, data: { label: 'AI Algorithms' }, style: { backgroundColor: '#ffcccb' } },
  { id: '7', position: { x: 690, y: 200 }, data: { label: 'Decision Trees' }, style: { backgroundColor: '#add8e6' } },
  { id: '8', position: { x: 690, y: 300 }, data: { label: 'Neural Networks' }, style: { backgroundColor: '#add8e6' } },
  { id: '9', position: { x: 690, y: 400 }, data: { label: 'Support Vector Machines (SVM)' }, style: { backgroundColor: '#add8e6' } },
  { id: '10', position: { x: 690, y: 500 }, data: { label: 'K-Nearest Neighbors (KNN)' }, style: { backgroundColor: '#add8e6' } },

  // AI Frameworks
  { id: '11', position: { x: 1190, y: 100 }, data: { label: 'AI Frameworks' }, style: { backgroundColor: '#ffcccb' } },
  { id: '12', position: { x: 1000, y: 200 }, data: { label: 'TensorFlow' }, style: { backgroundColor: '#add8e6' } },
  { id: '13', position: { x: 1190, y: 200 }, data: { label: 'PyTorch' }, style: { backgroundColor: '#add8e6' } },
  { id: '14', position: { x: 1380, y: 200 }, data: { label: 'Keras' }, style: { backgroundColor: '#add8e6' } },

  // AI Applications
  { id: '15', position: { x: 1590, y: 100 }, data: { label: 'AI Applications' }, style: { backgroundColor: '#ffcccb' } },
  { id: '16', position: { x: 1590, y: 200 }, data: { label: 'Computer Vision' }, style: { backgroundColor: '#add8e6' } },
  { id: '17', position: { x: 1590, y: 300 }, data: { label: 'Speech Recognition' }, style: { backgroundColor: '#add8e6' } },
  { id: '18', position: { x: 1590, y: 400 }, data: { label: 'Autonomous Vehicles' }, style: { backgroundColor: '#add8e6' } },

];

const initialEdges = [
  // Connecting AI Technology to Techniques, Algorithms, Frameworks, Applications
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-6', source: '1', target: '6' },
  { id: 'e1-11', source: '1', target: '11' },
  { id: 'e1-15', source: '1', target: '15' },

  // AI Techniques connections
  { id: 'e2-3', source: '2', target: '3' },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e2-5', source: '2', target: '5' },

  // DL concepts connections
  { id: 'e4-19', source: '4', target: '19' },
  { id: 'e4-20', source: '4', target: '20' },
  { id: 'e4-21', source: '4', target: '21' },

   // ML concepts connections
   { id: 'e3-22', source: '3', target: '22' },
   { id: 'e3-23', source: '3', target: '23' },
   { id: 'e3-24', source: '3', target: '24' },
   { id: 'e3-25', source: '3', target: '25' },

   // NLP concepts connections
  { id: 'e5-26', source: '5', target: '26' },
  { id: 'e5-27', source: '5', target: '27' },
  { id: 'e5-28', source: '5', target: '28' },
  { id: 'e5-29', source: '5', target: '29' },
  { id: 'e5-30', source: '5', target: '30' },

  // AI Algorithms connections
  { id: 'e6-7', source: '6', target: '7' },
  { id: 'e6-8', source: '6', target: '8' },
  { id: 'e6-9', source: '6', target: '9' },
  { id: 'e6-10', source: '6', target: '10' },

  // AI Frameworks connections
  { id: 'e11-12', source: '11', target: '12' },
  { id: 'e11-13', source: '11', target: '13' },
  { id: 'e11-14', source: '11', target: '14' },

  // AI Applications connections
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
      {/* <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Node Information"
              style={{
                content: {
                  width: '300px',
                  height: '200px',
                  margin: 'auto',
                  padding: '20px',
                  textAlign: 'center',
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <h2>{selectedNode?.data.label}</h2>
              <button onClick={closeModal}>Close</button>
            </Modal> */}
    </div>
  );
}