import React from 'react';
import {useDatabase} from '@nozbe/watermelondb/hooks';

const useCustomDatabase = () => {
  const database = useDatabase();
  const write = async (table: string, data: any) => {
    return new Promise(async (resolve, reject) => {
      try {
        let response;
        await database.write(async () => {
          response = await database.get(table).create(ticket => {
            ticket.title = data.title;
            ticket.body = `${Math.random()}`;
            ticket.subtitle = 'No remarks';
          });
        });
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });
  };

  return {write};
};

export default useCustomDatabase;
