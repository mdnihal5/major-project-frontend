"use client"
import React,{useState} from 'react';
import { ReactFlow } from '@xyflow/react';
import Modal from 'react-modal'; // Importing the Modal component
import '@xyflow/react/dist/style.css';

import { resources } from './data';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription
} from "@/components/ui/dialog"
import { CircleArrowOutUpRight } from 'lucide-react';


const initialNodes = [
  { id: '1', position: { x: 690, y: 0 }, data: { label: 'Machine Learning (ML)' } },

  //Tools & Platforms
  { id: '2', position: { x: 120, y: 100 }, data: { label: 'Tools & Platforms' }, style: { backgroundColor: '#ffcccb' } },
  { id: '3', position: { x: -50, y: 200 }, data: { label: 'Python Frameworks' }, style: { backgroundColor: '#ffcccb' } },
    //python frameworks
    { id: '24', position: { x: -50, y: 300 }, data: { label: 'Scikit-learn' }, style: { backgroundColor: '#add8e6' } },
  { id: '25', position: { x: -50, y: 400 }, data: { label: 'TensorFlow & PyTorch' }, style: { backgroundColor: '#add8e6' } },
  { id: '26', position: { x: -50, y: 500 }, data: { label: 'Pandas & NumPy' }, style: { backgroundColor: '#add8e6' } },
  { id: '27', position: { x: -50, y: 600 }, data: { label: 'Matplotlib & Seaborn' }, style: { backgroundColor: '#add8e6' } },

  { id: '4', position: { x: 120, y: 200 }, data: { label: 'Google Colab' }, style: { backgroundColor: '#add8e6' } },
  { id: '5', position: { x: 290, y: 200 }, data: { label: 'Jupyter Notebooks' }, style: { backgroundColor: '#add8e6' } },

  //Learning Paradigms
  { id: '6', position: { x: 690, y: 100 }, data: { label: 'Learning Paradigms' }, style: { backgroundColor: '#ffcccb' } },

  { id: '7', position: { x: 500, y: 200 }, data: { label: 'Supervised Learning' }, style: { backgroundColor: '#add8e6' } },
    //supervised learning tasks
    { id: '20', position: { x: 500, y: 300 }, data: { label: 'Classification' }, style: { backgroundColor: '#add8e6' } },
    { id: '21', position: { x: 500, y: 400 }, data: { label: 'Regression' }, style: { backgroundColor: '#add8e6' } },

  { id: '8', position: { x: 690, y: 200 }, data: { label: 'Unsupervised Learning' }, style: { backgroundColor: '#add8e6' } },
//unsupervised learning tasks
{ id: '22', position: { x: 690, y: 300 }, data: { label: 'Clustering' }, style: { backgroundColor: '#add8e6' } },
{ id: '23', position: { x:690, y: 400 }, data: { label: 'Dimensionality Reduction' }, style: { backgroundColor: '#add8e6' } },

  { id: '9', position: { x: 880, y: 200 }, data: { label: 'Reinforcement Learning' }, style: { backgroundColor: '#add8e6' } },

  // ML Development Tools
  { id: '11', position: { x: 1190, y: 100 }, data: { label: 'ML Alogrithms' }, style: { backgroundColor: '#ffcccb' } },
  { id: '12', position: { x: 1190, y: 200 }, data: { label: 'Linear Models' }, style: { backgroundColor: '#add8e6' } },
  { id: '13', position: { x: 1190, y: 300 }, data: { label: 'Decision Trees and Ensemble Models' }, style: { backgroundColor: '#add8e6' } },
  { id: '14', position: { x: 1190, y: 400 }, data: { label: 'Support Vector Machines (SVM)' }, style: { backgroundColor: '#add8e6' } },
  { id: '15', position: { x: 1190, y: 500 }, data: { label: 'Neural Networks' }, style: { backgroundColor: '#add8e6' } },
  { id: '28', position: { x: 1190, y: 600 }, data: { label: 'Clustering Algorithms' }, style: { backgroundColor: '#add8e6' } },
  { id: '29', position: { x: 1190, y: 700 }, data: { label: 'Dimensionality Reduction' }, style: { backgroundColor: '#add8e6' } },

  // ML Datasets
  { id: '16', position: { x: 1590, y: 100 }, data: { label: 'Datasets' }, style: { backgroundColor: '#ffcccb' } },
  { id: '17', position: { x: 1590, y: 200 }, data: { label: 'ImageNet' }, style: { backgroundColor: '#add8e6' } },
  { id: '18', position: { x: 1590, y: 300 }, data: { label: 'COCO' }, style: { backgroundColor: '#add8e6' } },
  { id: '19', position: { x: 1590, y: 400 }, data: { label: 'Kaggle Datasets' }, style: { backgroundColor: '#add8e6' } },
];

const initialEdges = [
  // Connecting ML to Platforms, Algorithms, Tools, and Datasets
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-6', source: '1', target: '6' },
  { id: 'e1-11', source: '1', target: '11' },
  { id: 'e1-16', source: '1', target: '16' },

  // ML Platforms connections
  { id: 'e2-3', source: '2', target: '3' },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e2-5', source: '2', target: '5' },
  // Python frameworks
  { id: 'e3-24', source: '3', target: '24' },
  { id: 'e3-25', source: '3', target: '25' },
  { id: 'e3-26', source: '3', target: '26' },
  { id: 'e3-27', source: '3', target: '27' },

  // Learning Paradigms connections
  { id: 'e7-20', source: '7', target: '20' },
  { id: 'e7-21', source: '7', target: '21' },

  // Learning Paradigms connections
  { id: 'e8-22', source: '8', target: '22' },
  { id: 'e8-23', source: '8', target: '23' },

  // Learning Paradigms connections
  { id: 'e6-7', source: '6', target: '7' },
  { id: 'e6-8', source: '6', target: '8' },
  { id: 'e6-9', source: '6', target: '9' },

  // ML algos connections
  { id: 'e11-12', source: '11', target: '12' },
  { id: 'e11-13', source: '11', target: '13' },
  { id: 'e11-14', source: '11', target: '14' },
  { id: 'e11-15', source: '11', target: '15' },
  { id: 'e11-28', source: '11', target: '28' },
  { id: 'e11-29', source: '11', target: '29' },

  // Datasets connections
  { id: 'e16-17', source: '16', target: '17' },
  { id: 'e16-18', source: '16', target: '18' },
  { id: 'e16-19', source: '16', target: '19' },
];




export default function AIMap() {
  const [selectedNode, setSelectedNode] = useState(null);

  const onNodeClick = (event, node) => {
    setSelectedNode(node);
  };

  const closeDialog = () => setSelectedNode(null);

  return (
    <div className="text-black w-full h-full m-2 flex items-center justify-center flex-col">
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "auto",
          boxSizing: "border-box",
          backgroundColor: "#f9f9f9",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          fitView
          onNodeClick={onNodeClick}
        />
      </div>
      <Dialog>
      <DialogTrigger asChild>
        <button className=" m-2 p-2 rounded-lg bg-red-300 text-black">View Resource</button>
      </DialogTrigger>
      <DialogContent className="max-h-[80%]  max-w-[80%] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Resouces</DialogTitle>
          <div  >
            {resources.map((resource,index)=>{
              
              return <div key={index} className='bg-sky-100 my-3 rounded-lg p-2 bg-card shadow-md text-black '>
                <h1 className='text-2xl'>{resource.title}</h1>
                <h2>{resource.intro}</h2>
                <div className='flex  items-center gap-3'>Documentation  {resource.documentationResources.map((r,i)=>{
                  return <a key={i}  className="text-blue-500 flex" href={r.url}><CircleArrowOutUpRight> {i} </CircleArrowOutUpRight></a>
                })}</div>
              </div>
            })}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>

      
    </div>
  );
}