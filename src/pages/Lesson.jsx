import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Lesson = () => {
  const { id } = useParams();

  // Dados mockados da aula
  const lesson = {
    title: `Aula ${id}`,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Esta é uma descrição detalhada da aula.',
    attachments: [
      { name: 'Slide da aula', url: '#' },
      { name: 'Exercícios', url: '#' },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <iframe
          src={lesson.videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Descrição da Aula</h2>
        <p>{lesson.description}</p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Arquivos para Download</h2>
        <div className="flex flex-wrap gap-2">
          {lesson.attachments.map((attachment, index) => (
            <Button key={index} variant="outline" asChild>
              <a href={attachment.url} download>{attachment.name}</a>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lesson;