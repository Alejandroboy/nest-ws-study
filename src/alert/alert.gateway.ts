import {  WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({namespace: '/alert'})
export class AlertGateway {
  @WebSocketServer() server: Server 
  // @SubscribeMessage('message')
  // handleMessage(client: any, payload: any): string {
  //   return 'Hello world!';
  // }
  sendToAll(msg: string) {
    this.server.emit('alertToClient', { type: 'Alert', message: msg})
  }
}
