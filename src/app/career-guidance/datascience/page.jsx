"use client"
import React,{useState} from 'react';
import { ReactFlow } from '@xyflow/react';
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
  { id: '1', position: { x: 890, y: 0 }, data: { label: 'Data Science' } },

  // Mathematics (Statistics)
  { id: '2', position: { x: 120, y: 100 }, data: { label: 'Mathematics' }, style: { backgroundColor: '#ffcccb' } },
  { id: '3', position: { x: 120, y: 200 }, data: { label: 'Probability' }, style: { backgroundColor: '#add8e6' } },
  { id: '4', position: { x: 120, y: 300 }, data: { label: 'Linear Algebra' }, style: { backgroundColor: '#add8e6' } },
  { id: '5', position: { x: 120, y: 400 }, data: { label: 'Calculus' }, style: { backgroundColor: '#add8e6' } },
  { id: '6', position: { x: 120, y: 500 }, data: { label: 'Statistical Methods' }, style: { backgroundColor: '#add8e6' } },

  // Data Processing
  { id: '7', position: { x: 490, y: 100 }, data: { label: 'Data Processing' }, style: { backgroundColor: '#ffcccb' } },
  { id: '8', position: { x: 490, y: 200 }, data: { label: 'Pandas' }, style: { backgroundColor: '#add8e6' } },
  { id: '9', position: { x: 300, y: 200 }, data: { label: 'NumPy' }, style: { backgroundColor: '#add8e6' } },
  { id: '10', position: { x: 680, y: 200 }, data: { label: 'Apache Spark' }, style: { backgroundColor: '#add8e6' } },

  // Machine Learning Tools
  { id: '12', position: { x: 890, y: 100 }, data: { label: 'Machine Learning Tools' }, style: { backgroundColor: '#ffcccb' } },
  { id: '13', position: { x: 890, y: 200 }, data: { label: 'Scikit-Learn' }, style: { backgroundColor: '#add8e6' } },
  { id: '14', position: { x: 890, y: 300 }, data: { label: 'TensorFlow' }, style: { backgroundColor: '#add8e6' } },
  { id: '15', position: { x: 890, y: 400 }, data: { label: 'PyTorch' }, style: { backgroundColor: '#add8e6' } },
  { id: '16', position: { x: 890, y: 500 }, data: { label: 'XGBoost' }, style: { backgroundColor: '#add8e6' } },

  // Visualization Tools
  { id: '17', position: { x: 1290, y: 100 }, data: { label: 'Visualization Tools' }, style: { backgroundColor: '#ffcccb' } },
  { id: '18', position: { x: 1100, y: 200 }, data: { label: 'Matplotlib' }, style: { backgroundColor: '#add8e6' } },
  { id: '19', position: { x: 1290, y: 200 }, data: { label: 'Seaborn' }, style: { backgroundColor: '#add8e6' } },
  { id: '20', position: { x: 1480, y: 200 }, data: { label: 'Plotly' }, style: { backgroundColor: '#add8e6' } },

  // Cloud Providers
  { id: '21', position: { x: 1700, y: 100 }, data: { label: 'Cloud Providers' }, style: { backgroundColor: '#ffcccb' } },
  { id: '22', position: { x: 1700, y: 200 }, data: { label: 'AWS Sagemaker' }, style: { backgroundColor: '#add8e6' } },
  { id: '23', position: { x: 1700, y: 300 }, data: { label: 'Google Cloud AI' }, style: { backgroundColor: '#add8e6' } },
  { id: '24', position: { x: 1700, y: 400 }, data: { label: 'Azure ML Studio' }, style: { backgroundColor: '#add8e6' } },
];

const initialEdges = [
  // Connecting Data Science Technology to categories
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-7', source: '1', target: '7' },
  { id: 'e1-12', source: '1', target: '12' },
  { id: 'e1-17', source: '1', target: '17' },
  { id: 'e1-21', source: '1', target: '21' },

  // Mathematics (Statistics) connections
  { id: 'e2-3', source: '2', target: '3' },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e2-5', source: '2', target: '5' },
  { id: 'e2-6', source: '2', target: '6' },

  // Data Processing connections
  { id: 'e7-8', source: '7', target: '8' },
  { id: 'e7-9', source: '7', target: '9' },
  { id: 'e7-10', source: '7', target: '10' },

  // Machine Learning Tools connections
  { id: 'e12-13', source: '12', target: '13' },
  { id: 'e12-14', source: '12', target: '14' },
  { id: 'e12-15', source: '12', target: '15' },
  { id: 'e12-16', source: '12', target: '16' },

  // Visualization Tools connections
  { id: 'e17-18', source: '17', target: '18' },
  { id: 'e17-19', source: '17', target: '19' },
  { id: 'e17-20', source: '17', target: '20' },

  // Cloud Providers connections
  { id: 'e21-22', source: '21', target: '22' },
  { id: 'e21-23', source: '21', target: '23' },
  { id: 'e21-24', source: '21', target: '24' },
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