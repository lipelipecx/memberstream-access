import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Modules = () => {
  const navigate = useNavigate();
  const modules = [
    { id: 1, title: 'Módulo 1', description: 'Introdução ao curso' },
    { id: 2, title: 'Módulo 2', description: 'Conceitos avançados' },
    { id: 3, title: 'Módulo 3', description: 'Prática e projetos' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Módulos do Curso</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((module) => (
          <Card key={module.id} className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => navigate(`/module/${module.id}`)}>
            <CardHeader>
              <CardTitle>{module.title}</CardTitle>
              <CardDescription>{module.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Clique para ver as aulas</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Modules;