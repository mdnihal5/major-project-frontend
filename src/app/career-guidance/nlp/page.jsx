"use client"
import React, { useState } from 'react';
import { ReactFlow } from '@xyflow/react';
import Modal from 'react-modal'; // Importing the Modal component

import '@xyflow/react/dist/style.css';

// Initial node and edge data
const initialNodes = [
  { id: '1', position: { x: 900, y: 0 }, data: { label: 'Natural Language Processing (NLP)' } },

  // Tools & Platforms
  { id: '2', position: { x: 120, y: 100 }, data: { label: 'Tools & Platforms' }, style: { backgroundColor: '#ffcccb' } },
  { id: '3', position: { x: -50, y: 200 }, data: { label: 'Python Libraries' }, style: { backgroundColor: '#ffcccb' } },
    // Python libraries
    { id: '33', position: { x: -50, y: 300 }, data: { label: 'NLTK' }, style: { backgroundColor: '#add8e6' } },
  { id: '34', position: { x: -50, y: 400 }, data: { label: 'spaCy' }, style: { backgroundColor: '#add8e6' } },
  { id: '35', position: { x: -50, y: 500 }, data: { label: 'Transformers' }, style: { backgroundColor: '#add8e6' } },

  { id: '4', position: { x: 120, y: 200 }, data: { label: 'Google Colab' }, style: { backgroundColor: '#add8e6' } },
  { id: '5', position: { x: 290, y: 200 }, data: { label: 'Jupyter Notebooks' }, style: { backgroundColor: '#add8e6' } },

  // NLP Paradigms
  { id: '6', position: { x: 690, y: 100 }, data: { label: 'NLP Paradigms' }, style: { backgroundColor: '#ffcccb' } },

  { id: '7', position: { x: 500, y: 200 }, data: { label: 'Text Preprocessing' }, style: { backgroundColor: '#add8e6' } },
    // text preprocessing tasks
    { id: '20', position: { x: 500, y: 300 }, data: { label: 'Tokenization' }, style: { backgroundColor: '#add8e6' } },
    { id: '21', position: { x: 500, y: 400 }, data: { label: 'Lemmatization' }, style: { backgroundColor: '#add8e6' } },
    { id: '22', position: { x: 500, y: 500 }, data: { label: 'Stopword Removal' }, style: { backgroundColor: '#add8e6' } },

  { id: '8', position: { x: 690, y: 200 }, data: { label: 'Text Representation' }, style: { backgroundColor: '#add8e6' } },
    // text representation methods
    { id: '23', position: { x: 690, y: 300 }, data: { label: 'TF-IDF' }, style: { backgroundColor: '#add8e6' } },
    { id: '24', position: { x: 690, y: 400 }, data: { label: 'Word2Vec' }, style: { backgroundColor: '#add8e6' } },
    { id: '25', position: { x: 690, y: 500 }, data: { label: 'BERT' }, style: { backgroundColor: '#add8e6' } },

  { id: '9', position: { x: 880, y: 200 }, data: { label: 'Text Generation' }, style: { backgroundColor: '#add8e6' } },

  // NLP Models
  { id: '11', position: { x: 1330, y: 100 }, data: { label: 'NLP Models' }, style: { backgroundColor: '#ffcccb' } },
  { id: '12', position: { x: 1090, y: 200 }, data: { label: 'Recurrent Neural Networks (RNN)' }, style: { backgroundColor: '#add8e6' } },
  { id: '13', position: { x: 1090, y: 300 }, data: { label: 'Long Short-Term Memory (LSTM)' }, style: { backgroundColor: '#add8e6' } },
  { id: '14', position: { x: 1090, y: 400 }, data: { label: 'Transformer' }, style: { backgroundColor: '#add8e6' } },
  { id: '15', position: { x: 1330, y: 200 }, data: { label: 'Large Language Models (LLMs)' }, style: { backgroundColor: '#ffcccb' } },
    // LLM models
    { id: '30', position: { x: 1330, y: 300 }, data: { label: 'GPT-3' }, style: { backgroundColor: '#add8e6' } },
    { id: '31', position: { x: 1330, y: 400 }, data: { label: 'GPT-4' }, style: { backgroundColor: '#add8e6' } },
    { id: '32', position: { x: 1330, y: 500 }, data: { label: 'BERT (Pre-trained)' }, style: { backgroundColor: '#add8e6' } },
    //Generative AI
    { id: '36', position: { x: 1580, y: 200 }, data: { label: 'Generative AI (Gen AI)' }, style: { backgroundColor: '#ffcccb' } },
  { id: '37', position: { x: 1580, y: 300 }, data: { label: 'GPT-3' }, style: { backgroundColor: '#add8e6' } },
  { id: '38', position: { x: 1580, y: 400 }, data: { label: 'GPT-4' }, style: { backgroundColor: '#add8e6' } },
  { id: '39', position: { x: 1580, y: 500 }, data: { label: 'DALL·E' }, style: { backgroundColor: '#add8e6' } },


  // Datasets
  { id: '16', position: { x: 1800, y: 100 }, data: { label: 'NLP Datasets' }, style: { backgroundColor: '#ffcccb' } },
  { id: '17', position: { x: 1800, y: 200 }, data: { label: 'IMDB Reviews' }, style: { backgroundColor: '#add8e6' } },
  { id: '18', position: { x: 1800, y: 300 }, data: { label: 'SQuAD' }, style: { backgroundColor: '#add8e6' } },
  { id: '19', position: { x: 1800, y: 400 }, data: { label: 'TREC' }, style: { backgroundColor: '#add8e6' } },
];

const initialEdges = [
  // Connecting NLP to Platforms, Models, and Datasets
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-6', source: '1', target: '6' },
  { id: 'e1-11', source: '1', target: '11' },
  { id: 'e1-16', source: '1', target: '16' },

  // NLP Platforms connections
  { id: 'e2-3', source: '2', target: '3' },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e2-5', source: '2', target: '5' },

  // Python libraries connections
  { id: 'e3-33', source: '3', target: '33' },
  { id: 'e3-34', source: '3', target: '34' },
  { id: 'e3-35', source: '3', target: '35' },

  // NLP Paradigms connections
  { id: 'e7-20', source: '7', target: '20' },
  { id: 'e7-21', source: '7', target: '21' },
  { id: 'e7-22', source: '7', target: '22' },

  { id: 'e8-23', source: '8', target: '23' },
  { id: 'e8-24', source: '8', target: '24' },
  { id: 'e8-25', source: '8', target: '25' },

  { id: 'e6-7', source: '6', target: '7' },
  { id: 'e6-8', source: '6', target: '8' },
  { id: 'e6-9', source: '6', target: '9' },

  // NLP Models connections
  { id: 'e11-12', source: '11', target: '12' },
  { id: 'e12-13', source: '12', target: '13' },
  { id: 'e12-14', source: '12', target: '14' },
  { id: 'e11-15', source: '11', target: '15' },
  //Gen AI connections
  { id: 'e11-36', source: '11', target: '36' },
  { id: 'e36-37', source: '36', target: '37' },
  { id: 'e36-38', source: '36', target: '38' },
  { id: 'e36-39', source: '36', target: '39' },

  // Datasets connections
  { id: 'e16-17', source: '16', target: '17' },
  { id: 'e16-18', source: '16', target: '18' },
  { id: 'e16-19', source: '16', target: '19' },

  // LLMs connections
  { id: 'e15-30', source: '15', target: '30' },
  { id: 'e15-31', source: '15', target: '31' },
  { id: 'e15-32', source: '15', target: '32' },
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