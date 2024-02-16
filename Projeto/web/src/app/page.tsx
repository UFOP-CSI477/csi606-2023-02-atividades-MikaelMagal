"use client";
import React, { useState, useEffect } from 'react';
import './globals.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';


interface Evento{
  id: number,
  nome: string,
  descricao: string
}

const SearchPage: React.FC = () => {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [novoEvento, setNovoEvento] = useState<{ nome: string; descricao: string }>({ nome: '', descricao: '' });
  const [newEvent, newSetEvent] = useState<{ nome: string}>({ nome: ''});

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
  
    try {
      const eventoResponse = await axios.get<Evento[]>(
        `http://localhost:4444/evento/getEventobyName/${newEvent.nome}`, 
      );
  
      setEventos(eventoResponse.data || []);
    } catch (error) {
      console.error('Erro ao buscar evento da API:', error);
    }
  };

  const handleNovoEventoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:4444/evento/createEvento', novoEvento);
      const eventosAtualizados = await axios.get<Evento[]>('http://localhost:4444/evento/getAllEvento');
      setEventos(eventosAtualizados.data);
      setNovoEvento({ nome: '', descricao: '' });
    } catch (error) {
      console.error('Erro ao criar novo evento:', error);
    }
  };

  const handleExcluirEvento = async (eventoId: number) => {
    try {
      await axios.delete(`http://localhost:4444/evento/deleteEvento/${eventoId}`);
      const eventosAtualizados = await axios.get<Evento[]>('http://localhost:4444/evento/getAllEventos');
      setEventos(eventosAtualizados.data);
    } catch (error) {
      console.error('Erro ao excluir evento:', error);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">

        <div className="mt-6">
          <h1 className="text-2xl font-bold mb-4">Novo Evento</h1>
          <form onSubmit={handleNovoEventoSubmit}>
            <label>
              Nome do Evento:
              <input
                type="text"
                value={novoEvento.nome}
                onChange={(e) => setNovoEvento({ ...novoEvento, nome: e.target.value })}
                className="w-full border p-2 mb-4"
              />
            </label>
            <label>
              Descrição do Evento:
              <textarea
                value={novoEvento.descricao}
                onChange={(e) => setNovoEvento({ ...novoEvento, descricao: e.target.value })}
                className="w-full border p-2 mb-4"
              />
            </label>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
              Criar Evento
            </button>
          </form>
        </div>
        <h1 className="text-2xl font-bold mb-4">Pesquisar eventos</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite sua pesquisa..."
            value={newEvent.nome}
            onChange={(e) => newSetEvent({ ...newEvent, nome: e.target.value})}
            className="w-full border p-2 mb-4"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Pesquisar
          </button>
        </form>
        <div className="mt-6">
          {eventos.length > 0 && (
            <ul>
              {eventos.map((evento) => (
                <li key={evento.id} className="border p-2 mb-2 rounded bg-gray-200">
                  <p className="font-bold">{evento.nome}</p>
                  <p>{evento.descricao}</p>
                  <button onClick={() => handleExcluirEvento(evento.id)} className="ml-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700">
                    Excluir
                  </button>
                </li>
              ))}
            </ul>
          )}
          {eventos.length === 0 && <p>Nenhum resultado encontrado.</p>}
        </div>
      </div>
    </div>
  );
};


export default SearchPage;