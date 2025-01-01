
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
  { id: '1', position: { x: 690, y: 0 }, data: { label: 'Backend Development' } },

  // Python Branch
  { id: '2', position: { x: 190, y: 100 }, data: { label: 'Python' }, style: { backgroundColor: '#ffcccb' } },
  { id: '3', position: { x: 100, y: 200 }, data: { label: 'Frameworks' }, style: { backgroundColor: '#f9f9f9' } },
  { id: '4', position: { x: 100, y: 300 }, data: { label: 'Django' }, style: { backgroundColor: '#add8e6' } },
  { id: '5', position: { x: 100, y: 400 }, data: { label: 'Flask' }, style: { backgroundColor: '#add8e6' } },
  { id: '6', position: { x: 300, y: 200 }, data: { label: 'Databases' }, style: { backgroundColor: '#f9f9f9' } },
  { id: '7', position: { x: 300, y: 300 }, data: { label: 'MongoDB (NoSQL)' }, style: { backgroundColor: '#add8e6' } },
  { id: '8', position: { x: 300, y: 400 }, data: { label: 'PostgreSQL (SQL)' }, style: { backgroundColor: '#add8e6' } },

  // Java Branch
  { id: '9', position: { x: 690, y: 100 }, data: { label: 'Java' }, style: { backgroundColor: '#ffcccb' } },
  { id: '10', position: { x: 600, y: 200 }, data: { label: 'Frameworks' }, style: { backgroundColor: '#f9f9f9' } },
  { id: '11', position: { x: 600, y: 300 }, data: { label: 'Spring Boot' }, style: { backgroundColor: '#add8e6' } },
  { id: '12', position: { x: 600, y: 400 }, data: { label: 'Hibernate' }, style: { backgroundColor: '#add8e6' } },
  { id: '13', position: { x: 800, y: 200 }, data: { label: 'Databases' }, style: { backgroundColor: '#f9f9f9' } },
  { id: '14', position: { x: 800, y: 300 }, data: { label: 'MongoDB (NoSQL)' }, style: { backgroundColor: '#add8e6' } },
  { id: '15', position: { x: 800, y: 400 }, data: { label: 'MySQL (SQL)' }, style: { backgroundColor: '#add8e6' } },

  // Node.js Branch
  { id: '16', position: { x: 1190, y: 100 }, data: { label: 'Node.js' }, style: { backgroundColor: '#ffcccb' } },
  { id: '17', position: { x: 1100, y: 200 }, data: { label: 'Frameworks' }, style: { backgroundColor: '#f9f9f9' } },
  { id: '18', position: { x: 1100, y: 300 }, data: { label: 'Express.js' }, style: { backgroundColor: '#add8e6' } },
  { id: '19', position: { x: 1300, y: 200 }, data: { label: 'Databases' }, style: { backgroundColor: '#f9f9f9' } },
  { id: '20', position: { x: 1300, y: 300 }, data: { label: 'MongoDB (NoSQL)' }, style: { backgroundColor: '#add8e6' } },
  { id: '21', position: { x: 1300, y: 400 }, data: { label: 'Prisma (SQL ORM)' }, style: { backgroundColor: '#add8e6' } },
];

const initialEdges = [
  // Connecting Backend Development to Python, Java, and Node.js
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-9', source: '1', target: '9' },
  { id: 'e1-16', source: '1', target: '16' },

  // Python connections
  { id: 'e2-3', source: '2', target: '3' },
  { id: 'e3-4', source: '3', target: '4' },
  { id: 'e3-5', source: '3', target: '5' },
  { id: 'e2-6', source: '2', target: '6' },
  { id: 'e6-7', source: '6', target: '7' },
  { id: 'e6-8', source: '6', target: '8' },

  // Java connections
  { id: 'e9-10', source: '9', target: '10' },
  { id: 'e10-11', source: '10', target: '11' },
  { id: 'e10-12', source: '10', target: '12' },
  { id: 'e9-13', source: '9', target: '13' },
  { id: 'e13-14', source: '13', target: '14' },
  { id: 'e13-15', source: '13', target: '15' },

  // Node.js connections
  { id: 'e16-17', source: '16', target: '17' },
  { id: 'e17-18', source: '17', target: '18' },
  { id: 'e16-19', source: '16', target: '19' },
  { id: 'e19-20', source: '19', target: '20' },
  { id: 'e19-21', source: '19', target: '21' },
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