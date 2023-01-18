import { read } from 'fs';
import { readFile, writeFile } from 'fs/promises';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('message.json', 'utf-8');
    const messages = JSON.parse(contents);

    return messages[id];
    /*
    {
        12 : {
            id : 12 ,
            contents : 'hello'
        }
    }
    */
  }

  async findAll() {
    const contents = await readFile('message.json', 'utf-8');
    const messages = JSON.parse(contents);
    return messages;
  }

  async create(message: string) {
    const contents = await readFile('message.json', 'utf-8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);

    messages[id] = {
      id,
      message,
    };

    await writeFile('message.json', JSON.stringify(messages));

    /*
    {
        12 : {
            id : 12,
            content : 'asdf
        }
    }
    */
  }
}
