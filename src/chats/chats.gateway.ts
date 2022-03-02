import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
@WebSocketGateway()
export class ChatsGateway {
  @SubscribeMessage('new_user') // scripts.js 에서 new_user로 emit한 Data 를 받음
  handleNewUser(
    @MessageBody() userName: string, // emit 한 Data를 받는 인자 (Decorator 활용)
    @ConnectedSocket() socket: Socket,
  ) {
    console.log(userName);
    console.log(socket.id); // Socket 에 연결되는 클라이언트의 고유 ID (각 브라우저 창마다 새로 발급된다)
    socket.emit('hello_user', '안녕하세요 ' + userName + '님'); // 서버 -> 클라 hello_user 키 값으로 emit
  }
}
