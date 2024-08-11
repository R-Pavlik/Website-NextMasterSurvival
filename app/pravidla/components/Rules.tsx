"use client"; // Označení komponenty jako klientské

import React, { useState, useEffect } from 'react';
import { db } from '../../api/firebase-config';
import { doc, getDoc } from 'firebase/firestore';

// Definice typu pro pravidla
interface RuleDocument {
  rules?: string[]; // Pole pravidel
}

export default function Rules() {
  const [rulesServer, setRulesServer] = useState<string[]>([]);
  const [rulesChat, setRulesChat] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Přidání stavu pro načítání
  const [error, setError] = useState<string | null>(null); // Přidání stavu pro chyby

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Začíná se načítání

      try {
        // Získání reference na dokumenty
        const docRefs = [
          doc(db, 'rules', 'pravidla-serveru'),
          doc(db, 'rules', 'pravidla-chatu-na-serverech')
        ];

        // Načtení dokumentů
        const docSnapshots = await Promise.all(docRefs.map(docRef => getDoc(docRef)));

        // Inicializace pravidel
        let serverRules: string[] = [];
        let chatRules: string[] = [];

        docSnapshots.forEach((docSnap, index) => {
          if (docSnap.exists()) {
            console.log(`Dokument ${index === 0 ? 'pravidla-serveru' : 'pravidla-chatu-na-serverech'} data:`, docSnap.data());
            const data = docSnap.data() as RuleDocument;
            if (index === 0 && Array.isArray(data.rules)) {
              serverRules = data.rules;
            } else if (index === 1 && Array.isArray(data.rules)) {
              chatRules = data.rules;
            }
          } else {
            console.log(`Dokument ${index === 0 ? 'pravidla-serveru' : 'pravidla-chatu-na-serverech'} nebyl nalezen`);
          }
        });

        setRulesServer(serverRules);
        setRulesChat(chatRules);
      } catch (error) {
        console.error("Chyba při načítání pravidel: ", error);
        setError("Chyba při načítání pravidel");
      } finally {
        setLoading(false); // Konec načítání
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Načítám...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-neutral-800 text-white p-4">
      <div className="mb-8 w-screen flex  flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-2 ">Pravidla Serveru</h2>
        <ol>
          {rulesServer.length > 0 ? (
            rulesServer.map((rule, index) => (
              <div className="w-screen flex justify-center items-center mb-2" key={index}>
                <div className="w-[85%] h-full text-white text-xl p-2 ">
                  <li dangerouslySetInnerHTML={{ __html: `${index + 1}. ${rule}` }}></li>
                </div>
              </div>
            ))
          ) : (
            <li>Žádná pravidla pro server</li>
          )}
        </ol>
      </div>

      <div className="mb-8 w-screen flex  flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-2">Pravidla Chatu</h2>
        <ol>
          {rulesChat.length > 0 ? (
            rulesChat.map((rule, index) => (
              <div className="w-screen flex justify-center items-center mb-2" key={index}>
                <div className="w-[85%] h-full text-white text-xl p-2 ">
                  <li dangerouslySetInnerHTML={{ __html: `${index + 1}. ${rule}` }}></li>
                </div>
              </div>
            ))
          ) : (
            <li>Žádná pravidla pro chat</li>
          )}
        </ol>
      </div>
    </div>
  );
}
